---
id: resemiclip-install
title: Установка
sidebar_position: 2
description: ReSemiclip - плагин Metamod, управляющий возможностью прохождения сквозь игроков. В качестве примера был использован модуль Semiclip от `joaquimandrade`.
slug: /resemiclip/install
---

# Установка

ReSemiclip — это плагин Metamod, и для его работы уже должны быть установлены и работоспособны [ReHLDS](/ru/docs/rehlds/install), [ReGameDLL_CS](/ru/docs/regamedll-cs/install) и Metamod (рекомендуется Metamod-R): плагин перехватывает функции обоих слоёв.

## 1. Получите ReSemiclip

Скачайте `resemiclip-*.zip` со [страницы выпусков](https://github.com/rehlds/ReSemiclip/releases) или [соберите плагин из исходного кода](./compilling.md). В архиве выпуска уже есть готовая папка `addons/resemiclip/` с файлом плагина и стандартным `config.ini`.

## 2. Распакуйте в каталог мода

Скопируйте папку `addons/resemiclip/` из архива в `<mod>/addons/resemiclip/`. В итоге получится:

| Путь | Назначение |
| --- | --- |
| `addons/resemiclip/resemiclip_mm.dll` или `resemiclip_mm_i386.so` | Файл плагина (зависит от платформы — оставьте только тот, что соответствует вашему серверу). |
| `addons/resemiclip/config.ini` | Стандартные настройки, общие для всего сервера. |
| `addons/resemiclip/maps/` | Примеры файлов переопределения для отдельных карт и префиксов. |

## 3. Зарегистрируйте плагин в Metamod

Добавьте строки в `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\resemiclip\resemiclip_mm.dll
linux addons/resemiclip/resemiclip_mm_i386.so
```

## 4. Настройте плагин

Отредактируйте `addons/resemiclip/config.ini` для общесерверных значений по умолчанию и при необходимости добавьте переопределения для отдельных карт или префиксов в `addons/resemiclip/maps/`. Полный формат и порядок загрузки описаны в разделе [Настройки](./settings.md).

## 5. Проверьте результат

Запустите сервер и выполните `meta list` — в списке загруженных плагинов должен появиться `ReSemiclip`. Чтобы вывести действующие сейчас настройки, выполните в консоли `semiclip_option` без аргументов.
