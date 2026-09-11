---
id: reapi
title: ReAPI
sidebar_position: 1
description: ReAPI - Модуль AMXModX, предоставляющий API для плагинов ReHLDS, ReGameDLL и Metamod (например, ReUnion, ReVoice).
slug: /reapi
---

# Что такое ReAPI?

ReAPI — это модуль AMX Mod X, открывающий внутреннее устройство [ReHLDS](/ru/docs/rehlds) и [ReGameDLL_CS](/ru/docs/regamedll-cs) для плагинов на Pawn в виде обычных нативных функций, вместо того чтобы вынуждать авторов плагинов патчить смещения в памяти или самостоятельно восстанавливать структуры. Он даёт коду на Pawn безопасный и версионированный доступ к поведению движка и GameDLL, недостижимому для обычных AMX Mod X и Metamod.

## Что он даёт

- **Цепочки перехватов** — перехват функций движка (ReHLDS) и GameDLL (ReGameDLL_CS) в режимах `pre` и `post` с точным управлением возвращаемым значением и даже аргументами исходной функции.
- **Доступ к полям структур** — чтение и запись внутренних полей структур движка и GameDLL (игрок, оружие, граната, правила игры и другие) по имени, а не по вычисленному вручную смещению.
- **Проверки возможностей во время работы** — нативные функции вроде `is_rehlds()`, `is_regamedll()`, `has_reunion()`, `has_vtc()` и `has_rechecker()` позволяют плагину подстроиться под то окружение, в котором он действительно запущен.
- **Дополнительные заголовочные файлы интеграции** — `reapi_reunion.inc`, `reapi_vtc.inc` и `reapi_rechecker.inc` открывают перехваты для [ReUnion](/ru/docs/reunion), античита VTC и [ReChecker](/ru/docs/rechecker), если те установлены.

## Требования вкратце

- AMX Mod X, работающий поверх Metamod-R (или Metamod) и [ReHLDS](/ru/docs/rehlds/install). Перехваты и поля уровня движка требуют ReHLDS.
- [ReGameDLL_CS](/ru/docs/regamedll-cs/install), если ваш плагин использует перехваты или поля уровня GameDLL (`reapi_gamedll.inc`). Плагины, работающие только на уровне движка, обходятся без него.

Точный порядок действий описан в разделе [Установка](./installing.md).

## Минимальный пример

```pawn
#include <amxmodx>
#include <reapi>

public plugin_init()
{
	register_plugin("ReAPI Test", "1.0", "s1lent");
	RegisterHookChain(RG_CBasePlayer_GiveAmmo, "CBasePlayer_GiveAmmo");
}

public CBasePlayer_GiveAmmo(const this, iAmount, szName[], iMax)
{
	server_print("-> CBasePlayer_GiveAmmo: index:(%d), amount:(%d), name:(%s), max:(%d)", this, iAmount, szName, iMax);
	return HC_CONTINUE;
}
```

Этот код перехватывает `CBasePlayer::GiveAmmo` на стороне GameDLL и записывает в журнал каждый вызов, не меняя поведения (`HC_CONTINUE`). Полное описание API цепочек перехватов и доступных типов значений и аргументов — в разделе [Настройки](./settings.md).

## Что дальше

- [Установка](./installing.md) — установка модуля и его подключение в ваших плагинах.
- [Настройки](./settings.md) — API цепочек перехватов и доступа к полям структур с нативными функциями, которые вы действительно будете вызывать.
- [Инструкция по сборке](./compilling.md) — сборка ReAPI из исходного кода.
- [Авторы](./credits.md) — лицензия и ссылки проекта.
