---
id: localizebugfix-install
title: Установка
sidebar_position: 2
description: LocalizeBug Fix — заархивированный плагин Metamod от s1lentq, блокировавший эксплойты с локализационными строками в никах и чате на HLDS.
slug: /localizebugfix/install
---

<head>
  <title>LocalizeBug Fix: Установка | ReHLDS</title>
</head>

# Установка

:::warning Устаревший проект

Эта инструкция сохранена для справки. Проект заархивирован — см. [Что такое LocalizeBug Fix?](./index.md), а на современном сервере используйте [SafeNameAndChat](/ru/docs/safenameandchat/install).

:::

LocalizeBug Fix был плагином Metamod и устанавливался так же, как любой другой.

## 1. Получите LocalizeBug Fix

Последний выпуск — [`2.4`](https://github.com/s1lentq/localizebugfix/releases) от сентября 2015 года (`localizebugfix_2_4.7z`). В репозитории также лежат готовые сборки версий `2.0`, `2.3` и `2.4` в каталоге `bin/`.

## 2. Разместите плагин

Скопируйте файл, соответствующий вашей платформе, в папку внутри `addons`:

| Платформа | Файл |
| --- | --- |
| Windows | `localizebugfix.dll` |
| Linux | `localizebugfix_mm_i386.so` |

## 3. Зарегистрируйте плагин в Metamod

Добавьте соответствующую строку в `<mod>/addons/metamod/plugins.ini`.

:::note

Плагин объявлял себя загружаемым только при запуске (`PT_STARTUP`) и никогда не выгружаемым (`PT_NEVER`), поэтому `meta load` и `meta unload` на нём не работали: он должен был присутствовать на момент старта сервера, а для его удаления требовался перезапуск.

:::

## 4. Проверьте результат

Запустите сервер и выполните `meta list` — плагин регистрировался под именем `LocalizeBug Fix`.
