---
id: relocalizebugfix-install
title: Установка
sidebar_position: 2
description: ReLocalizeBug Fix — устаревший плагин Metamod, блокировавший эксплойты с локализационными строками в никах и чате на серверах ReHLDS.
slug: /relocalizebugfix/install
---

<head>
  <title>ReLocalizeBug Fix: Установка | ReHLDS</title>
</head>

# Установка

:::warning Устаревший проект

Эта инструкция сохранена только для справки. Плагин **несовместим с современными версиями ReHLDS** — см. [Что такое ReLocalizeBug Fix?](./index.md) и используйте вместо него [SafeNameAndChat](/ru/docs/safenameandchat/install).

:::

ReLocalizeBug Fix был плагином Metamod и устанавливался так же, как любой другой.

## 1. Получите ReLocalizeBug Fix

Последний выпуск — [`v2.8`](https://github.com/rehlds/relocalizebugfix/releases) (`relocalizebugfix-v2.8.zip`). В репозитории также лежат готовые сборки в каталоге `bin/`.

## 2. Разместите плагин

Скопируйте файл, соответствующий вашей платформе, в `<mod>/addons/relocalizebugfix/`:

| Платформа | Файл |
| --- | --- |
| Windows | `relocalizebugfix_mm.dll` |
| Linux | `relocalizebugfix_mm_i386.so` |

## 3. Зарегистрируйте плагин в Metamod

Добавьте эти строки в файл `<mod>/addons/metamod/plugins.ini`:

```ini
win32 addons\relocalizebugfix\relocalizebugfix_mm.dll
linux addons/relocalizebugfix/relocalizebugfix_mm_i386.so
```

:::note

Плагин объявлял себя загружаемым только при запуске (`PT_STARTUP`) и никогда не выгружаемым (`PT_NEVER`), поэтому `meta load` и `meta unload` на нём не работали: он должен был присутствовать на момент старта сервера, а для его удаления требовался перезапуск.

:::

## 4. Проверьте результат

Запустите сервер и выполните `meta list` — плагин регистрировался под именем `ReLocalizeBug Fix`. На современной сборке ReHLDS ожидайте не работы, а сбоев: это и есть та несовместимость, о которой сказано на [обзорной странице](./index.md), а не ошибка установки.
