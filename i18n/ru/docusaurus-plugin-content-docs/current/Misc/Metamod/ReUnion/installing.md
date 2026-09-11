---
id: reunion-install
title: Установка
sidebar_position: 2
description: ReUnion - Metamod плагин, позволяющий клиентам, не использующим Steam и использующим протоколы 47 и 48, подключаться к серверам ReHLDS.
slug: /reunion/install
---

<head>
  <title>ReUnion: Установка | ReHLDS</title>
</head>

# Установка

ReUnion — это плагин Metamod, поэтому для его работы уже должны быть установлены и работоспособны [ReHLDS](/ru/docs/rehlds/install) (API `3.10`+) и Metamod (рекомендуется Metamod-R).

## 1. Получите ReUnion

Скачайте готовую сборку со [страницы выпусков](https://github.com/rehlds/ReUnion/releases) или [соберите её из исходного кода](./compilling.md).

## 2. Разместите плагин

Создайте папку `reunion` внутри каталога `addons` в папке вашего мода (`<gamedir>` — `cstrike` для Counter-Strike, `valve` для Half-Life и т. д.) и поместите туда файл, соответствующий вашей платформе:

| Платформа | Файл | Расположение |
| --- | --- | --- |
| Windows | `reunion_mm.dll` | `<gamedir>/addons/reunion/reunion_mm.dll` |
| Linux | `reunion_mm_i386.so` | `<gamedir>/addons/reunion/reunion_mm_i386.so` |

## 3. Зарегистрируйте плагин в Metamod

Откройте `<gamedir>/addons/metamod/plugins.ini` и добавьте эти строки, желательно в **начало** файла:

```text
win32 addons\reunion\reunion_mm.dll
linux addons/reunion/reunion_mm_i386.so
```

## 4. Добавьте файл конфигурации

Скопируйте `reunion.cfg` из архива выпуска туда, где ReUnion сможет его найти. Поиск ведётся в следующем порядке, используется первый найденный файл:

1. Рядом с собственным файлом плагина — `<gamedir>/addons/reunion/reunion.cfg`.
2. Корень каталога игры — `<gamedir>/reunion.cfg`.
3. Рабочий каталог сервера — `reunion.cfg`.

Формат конфигурации описан в разделе [Настройки](./settings.md).

## 5. Запустите сервер и проверьте результат

Запустите сервер и выполните в консоли команду `meta list`:

```text
Currently loaded plugins:
      description      stat pend  file              vers      src   load  unlod
 [ 1] Reunion          RUN   -    reunion_mm_i386.  v0.1.58   ini   Start Never
 [ 2] AMX Mod X        RUN   -    amxmodx_mm_i386.  v1.8.1.3  ini   Start ANY
2 plugins, 2 running
```

Если вместо `RUN` отображается `fail`, запустите сервер с ключами `-console +log on +mp_logecho 1` и посмотрите вывод консоли — в нём будет указана причина, по которой ReUnion не загрузился (чаще всего это отсутствующий или некорректный `reunion.cfg` либо несовместимая версия ReHLDS).

## Дополнительные материалы

В архиве выпуска также поставляются `reunion_api.h` (заголовочный файл на C для других плагинов Metamod/GameDLL, которым нужно обращаться к ReUnion напрямую — его использует [ReAPI](/ru/docs/reapi)) и пара необязательных скриптов AMX Mod X в каталоге `addons/amxmodx/scripting/` (`reu_test.sma`, `updatehint.sma`), которые можно скомпилировать и подключить отдельно, если нужен тестовый плагин или сообщение-подсказка об устаревшем клиенте. Для работы самого ReUnion ни то, ни другое не требуется.
