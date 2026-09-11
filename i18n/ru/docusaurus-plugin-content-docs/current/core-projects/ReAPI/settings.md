---
id: reapi-settings
title: Настройки
sidebar_position: 3
description: ReAPI - Модуль AMXModX, предоставляющий API для плагинов ReHLDS, ReGameDLL и Metamod (например, ReUnion, ReVoice).
slug: /reapi/settings
---

<head>
  <title>ReAPI: Настройки | ReHLDS</title>
</head>

# Настройки

Собственных серверных консольных переменных у ReAPI нет — это API для скриптов, а не плагин для конечного пользователя. «Настроить» ReAPI означает правильно использовать его нативные функции из вашего кода на Pawn. Эта страница описывает основные строительные блоки.

## Заголовочные файлы

| Заголовочный файл | Что предоставляет |
| --- | --- |
| `reapi.inc` | Ядро модуля: нативные функции цепочек перехватов, макросы доступа к полям структур, проверки возможностей. Подключайте именно его — он подтягивает остальные. |
| `reapi_engine.inc` / `reapi_engine_const.inc` | Перехватываемые функции уровня движка (ReHLDS) и их константы. |
| `reapi_gamedll.inc` / `reapi_gamedll_const.inc` | Перехватываемые функции уровня GameDLL (ReGameDLL_CS) и их константы. Применимы только при запущенном ReGameDLL_CS. |
| `cssdk_const.inc` | Константы Counter-Strike SDK, общие для перечисленных выше заголовочных файлов. |
| `reapi_reunion.inc` | Перехваты для [ReUnion](/ru/docs/reunion), если он установлен. |
| `reapi_vtc.inc` | Перехваты для интеграции с античитом VTC, если она установлена. |
| `reapi_rechecker.inc` | Перехваты для [ReChecker](/ru/docs/rechecker), если он установлен. |

`reapi.inc` подключает всё перечисленное автоматически — при этом `reapi_engine.inc` имеет смысл только с ReHLDS, а `reapi_gamedll.inc` — только с ReGameDLL_CS.

## Цепочки перехватов

Цепочка перехватов позволяет плагину вклиниться в вызов функции движка или GameDLL.

```pawn
native HookChain:RegisterHookChain(ReAPIFunc:function_id, const callback[], post = 0);
native bool:DisableHookChain(HookChain:hook);
native bool:EnableHookChain(HookChain:hook);
native SetHookChainReturn(AType:type, any:...);
native any:GetHookChainReturn(AType:type, any:...);
native SetHookChainArg(number, AType:type, any:...);
native bool:IsReapiHookOriginalWasCalled(ReAPIFunc:function_id);
native HookChain:GetCurrentHookChainHandle();
```

`function_id` — это одна из констант `RG_*`, объявленных в `reapi_engine_const.inc` (функции движка) или `reapi_gamedll_const.inc` (функции GameDLL); полный версионированный список перехватываемых функций и сигнатуры их обработчиков смотрите в этих файлах.

### Возвращаемые значения цепочки перехватов

Верните из обработчика одно из этих значений, чтобы определить дальнейшее поведение:

| Константа | Действие |
| --- | --- |
| `HC_CONTINUE` | Плагин ничего не предпринял; выполнение продолжается обычным образом. |
| `HC_SUPERCEDE` | Пропустить настоящую функцию и использовать значение, заданное через `SetHookChainReturn`. |
| `HC_BREAK` | Пропустить все оставшиеся форварды **и** настоящую функцию, использовав заданное возвращаемое значение. Пропускает перехваты всех последующих плагинов AMXX — применяйте осторожно. |
| `HC_BYPASS` | Пропустить вызовы для всех последующих плагинов AMXX, но всё же вызвать исходную функцию. В режиме `pre` также пропускает форварды `post`. |

### Типы аргументов и возвращаемых значений

`SetHookChainReturn`, `GetHookChainReturn` и `SetHookChainArg` принимают значение `AType:`, описывающее, как интерпретировать следующие за ним аргументы:

```pawn
enum AType
{
	ATYPE_INTEGER = 0,
	ATYPE_FLOAT,
	ATYPE_STRING,
	ATYPE_CLASSPTR,
	ATYPE_EDICT,
	ATYPE_EVARS,
	ATYPE_BOOL,
	ATYPE_VECTOR,
	ATYPE_TRACE
};
```

## Доступ к полям структур

Читайте и записывайте внутренние поля структур (игрок, оружие, граната, правила игры и другие) по имени, а не по вычисленному вручную смещению:

```pawn
set_member(entity, m_iSomeMember, value);
value = get_member(entity, m_iSomeMember);
```

По умолчанию `set_member`/`get_member` разворачиваются в варианты `set_member_s`/`get_member_s` с проверкой границ. Объявите `MEMBER_UNSAFE` до `#include <reapi>`, если вам нужны варианты без проверок, немного более быстрые, и вы понимаете связанный с этим риск.

## Проверки возможностей во время работы

Используйте их, чтобы плагин подстраивался под реальное окружение, а не исходил из предположений:

| Нативная функция | Возвращает true, когда |
| --- | --- |
| `is_rehlds()` | Сервер работает на ReHLDS. |
| `is_regamedll()` | Сервер работает на ReGameDLL_CS. |
| `has_reunion()` | Установлен ReUnion. |
| `has_vtc()` | Установлена интеграция с античитом VTC. |
| `has_rechecker()` | Установлен ReChecker. |

## Прочие вспомогательные нативные функции

| Нативная функция | Назначение |
| --- | --- |
| `bool:FClassnameIs(entityIndex, const className[])` | Проверяет classname сущности, а заодно её корректность. |
| `WeaponIdType:GetGrenadeType(entityIndex)` | Возвращает тип гранаты для сущности. |
| `engset_view(index, viewEntity)` / `get_viewent(index)` | Получает и задаёт сущность, от лица которой игрок видит мир. |
| `bool:is_entity(entityIndex)` | Проверяет, является ли индекс корректной сущностью. |

За полным и актуальным списком нативных функций и идентификаторов перехватываемых функций обращайтесь к `reapi.inc`, `reapi_engine_const.inc` и `reapi_gamedll_const.inc` (они устанавливаются рядом с вашими плагинами в `scripting/include`) — считайте их первоисточником, поскольку они версионируются вместе с используемым вами файлом модуля.
