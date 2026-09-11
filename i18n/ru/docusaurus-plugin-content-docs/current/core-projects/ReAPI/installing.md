---
id: reapi-install
title: Установка
sidebar_position: 2
description: ReAPI - Модуль AMXModX, предоставляющий API для плагинов ReHLDS, ReGameDLL и Metamod (например, ReUnion, ReVoice).
slug: /reapi/install
---

<head>
  <title>ReAPI: Установка | ReHLDS</title>
</head>

# Установка

ReAPI — это модуль AMX Mod X. Для его работы AMX Mod X уже должен быть установлен и запущен, а поскольку модуль встраивается в нижележащие слои, порядок установки имеет значение.

## Перед началом

Убедитесь, что уже установлено и работает следующее:

1. [ReHLDS](/ru/docs/rehlds/install) — необходим для всех перехватов и полей уровня движка.
2. Metamod-R (или Metamod) и AMX Mod X.
3. [ReGameDLL_CS](/ru/docs/regamedll-cs/install) — нужен только в том случае, если ваши плагины используют перехваты или поля уровня GameDLL (`reapi_gamedll.inc`). Плагины, работающие только на уровне движка, обходятся без него.

## 1. Скачайте ReAPI

Возьмите `reapi-bin-*.zip` из [последнего выпуска](https://github.com/rehlds/ReAPI/releases/latest). Архив содержит единственную папку `addons/` с файлами модуля для обеих платформ и заголовочными файлами Pawn.

## 2. Распакуйте в каталог мода

Скопируйте содержимое папки `addons/amxmodx/` из архива в `<mod>/addons/amxmodx/`:

| Из архива | Куда | Назначение |
| --- | --- | --- |
| `addons/amxmodx/modules/reapi_amxx.dll` | `<mod>/addons/amxmodx/modules/` | Файл модуля для Windows. |
| `addons/amxmodx/modules/reapi_amxx_i386.so` | `<mod>/addons/amxmodx/modules/` | Файл модуля для Linux. |
| `addons/amxmodx/scripting/include/reapi*.inc`, `cssdk_const.inc` | `<mod>/addons/amxmodx/scripting/include/` | Заголовочные файлы Pawn, нужные для **компиляции** плагинов, использующих ReAPI. |

Вам нужен только тот файл модуля, который соответствует платформе сервера; заголовочные файлы от платформы не зависят и требуются лишь на той машине, где вы компилируете плагины `.sma`.

## 3. Включите модуль

Способ загрузки модуля зависит от версии AMX Mod X:

:::note

В версиях AMX Mod X, где определено `AMXX_VERSION_NUM >= 175`, сам `reapi.inc` объявляет `#pragma reqlib reapi` / `#pragma loadlib reapi`. Любой плагин с `#include <reapi>` автоматически требует и загружает модуль — **запись в `modules.ini` вручную не нужна**.

:::

В более старых сборках AMX Mod X добавьте строку `reapi` в `<mod>/addons/amxmodx/configs/modules.ini` самостоятельно, чтобы модуль загружался при запуске.

## 4. Проверьте результат

Запустите сервер и посмотрите в журнале запуска AMX Mod X (либо выполните в консоли `meta list` или вывод списка модулей AMXX), успешно ли загрузился `ReAPI`. Если модуль не загружается, перепроверьте, что скопирован файл для вашей операционной системы и что ReHLDS (а также ReGameDLL_CS, если он используется) действительно установлены — ReAPI зависит от них во время работы, а не только при компиляции.

## Компиляция плагинов с ReAPI

Укажите компилятору AMXX (`amxxpc`) каталог `scripting/include`, содержащий скопированные на шаге 2 заголовочные файлы ReAPI, и просто добавьте `#include <reapi>` в исходный код плагина. Доступные нативные функции и API цепочек перехватов описаны в разделе [Настройки](./settings.md).
