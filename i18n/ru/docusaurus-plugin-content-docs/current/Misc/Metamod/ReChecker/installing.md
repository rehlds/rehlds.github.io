---
id: rechecker-install
title: "ReChecker: Установка"
sidebar_label: Установка
sidebar_position: 2
description: ReChecker — плагин Metamod, который дает возможность проверять клиентские файлы по их имени и md5-хешу.
slug: /rechecker/install
keywords:
  - rechecker
  - metamod
  - plugin
  - install
  - Установка
tags:
  - rechecker
  - install
  - Установка
last_update:
  date: 07/21/2025
  author: STAM
---

# Установка

ReChecker — это плагин Metamod, поэтому для его работы уже должны быть установлены и работоспособны [ReHLDS](/ru/docs/rehlds/install) и Metamod (рекомендуется Metamod-R).

## 1. Получите ReChecker

Скачайте готовую сборку со [страницы выпусков](https://github.com/rehlds/ReChecker/releases) или [соберите её из исходного кода](./compilling.md).

## 2. Разместите плагин

Создайте папку `rechecker` внутри каталога `addons` в папке вашего мода и поместите туда файл, соответствующий вашей платформе:

| Платформа | Файл | Расположение |
| --- | --- | --- |
| Windows | `rechecker_mm.dll` | `<mod>/addons/rechecker/rechecker_mm.dll` |
| Linux | `rechecker_mm_i386.so` | `<mod>/addons/rechecker/rechecker_mm_i386.so` |

## 3. Добавьте файл правил

Скопируйте шаблон [`dist/resources.ini`](https://github.com/rehlds/ReChecker/blob/master/dist/resources.ini) из репозитория проекта рядом с файлом плагина:

```text
<mod>/addons/rechecker/resources.ini
```

ReChecker читает `resources.ini` из того же каталога, где лежит его собственный файл, а не из корня мода. Формат файла описан в разделе [Настройки](./settings.md).

## 4. Зарегистрируйте плагин в Metamod

Добавьте строки в `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\rechecker\rechecker_mm.dll
linux addons/rechecker/rechecker_mm_i386.so
```

## 5. Проверьте результат

Запустите сервер и выполните в консоли `meta list` — в списке загруженных плагинов должен появиться `Rechecker`. Если он не загружается, убедитесь, что сервер действительно работает на ReHLDS (ReChecker использует расширенный API движка ReHLDS и на обычном HLDS загружаться откажется).
