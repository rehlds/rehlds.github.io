---
id: refreelook-install
title: "ReFreeLook: Установка"
sidebar_label: Установка
sidebar_position: 2
description: ReFreeLook — модуль AMX Mod X, позволяющий администраторам-наблюдателям использовать любые режимы камеры, независимо от значения `mp_forcecamera` или `mp_forcechasecam`. Работает только в последней версии `ReGameDLL_CS`.
slug: /refreelook/install
keywords:
  - refreelook
  - AMX Mod X
  - amxx
  - amx
  - module
  - install
  - Установка
tags:
  - refreelook
  - install
  - Установка
last_update:
  date: 07/21/2025
  author: STAM
---

# Установка

ReFreeLook — это **модуль** AMX Mod X (а не плагин Metamod), и для его работы уже должны быть установлены и работоспособны последняя версия [ReGameDLL_CS](/ru/docs/regamedll-cs/install) и AMX Mod X.

## 1. Получите ReFreeLook

Скачайте готовую сборку со [страницы выпусков](https://github.com/rehlds/ReFreeLook/releases) или [соберите модуль из исходного кода](./compilling.md).

## 2. Остановите сервер

Остановите сервер перед установкой или обновлением — независимо от того, устанавливаете вы модуль впервые или обновляете.

## 3. Разместите модуль

Скопируйте файл, соответствующий вашей платформе, в папку модулей AMX Mod X вашего мода:

| Платформа | Файл | Расположение |
| --- | --- | --- |
| Windows | `refreelook_amxx.dll` | `<mod>/addons/amxmodx/modules/refreelook_amxx.dll` |
| Linux | `refreelook_amxx_i386.so` | `<mod>/addons/amxmodx/modules/refreelook_amxx_i386.so` |

## 4. Зарегистрируйте модуль

Откройте `<mod>/addons/amxmodx/configs/modules.ini` и добавьте строку в конец файла:

```text
refreelook
```

## 5. Настройте игровые переменные

ReFreeLook имеет смысл только тогда, когда камера наблюдателя действительно ограничена:

- Задайте `mp_forcechasecam` и `mp_forcecamera` **одинаковые** значения.
- Убедитесь, что `mp_fadetoblack` равен `0`.

## 6. Настройте доступ администраторов

Задайте в `afl_admin_access_flags` флаги доступа, которые должны выводить игрока из-под ограничения камеры. Список флагов и значение по умолчанию описаны в разделе [Настройки](./settings.md).

## 7. Запустите сервер

Запустите сервер и убедитесь, что модуль загрузился (поищите `refreelook` в списке модулей AMX Mod X в консоли или журнале).
