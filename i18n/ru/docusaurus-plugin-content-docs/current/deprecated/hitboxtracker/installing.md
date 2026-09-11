---
id: hitboxtracker-install
title: Установка
sidebar_position: 2
description: hitboxtracker — устаревший инструмент разработчика ReHLDS, отрисовывавший на клиенте положение хитбоксов, рассчитанное сервером.
slug: /hitboxtracker/install
---

<head>
  <title>hitboxtracker: Установка | ReHLDS</title>
</head>

# Установка

:::warning Устаревший проект

Эта инструкция сохранена для справки. hitboxtracker больше не поддерживается — прежде чем что-либо из этого применять, ознакомьтесь с разделом [Что такое hitboxtracker?](./index.md), а на современном сервере используйте [Hitbox Fixer](/ru/docs/hitbox-fixer).

:::

hitboxtracker требовал установки **обеих** половин: плагина на сервере и модуля на клиенте. Установка только одной из них ничего не давала.

## Требования

- Клиент: Counter-Strike 1.6 сборки `4554` или новее.
- Сервер: Metamod `1.20` или новее.

## 1. Получите hitboxtracker

Скачайте `hitboxtracker.zip` со [страницы выпусков](https://github.com/rehlds/hitboxtracker/releases). В архиве обе половины:

| Путь в архиве | Назначение |
| --- | --- |
| `server/cstrike/addons/hitboxtracker/hitboxtracker_mm.dll` | Серверный плагин, Windows. |
| `server/cstrike/addons/hitboxtracker/hitboxtracker_mm_i386.so` | Серверный плагин, Linux. |
| `client/hitboxtracker.dll` | Клиентский модуль отрисовки. |
| `client/cs.exe` | Собственный лаунчер проекта, загружающий этот модуль. |

## 2. Установите серверный плагин

Скопируйте файл, соответствующий вашей платформе, в `<mod>/addons/hitboxtracker/` и зарегистрируйте его в `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\hitboxtracker\hitboxtracker_mm.dll
linux addons/hitboxtracker/hitboxtracker_mm_i386.so
```

## 3. Установите клиентский модуль

Положите `hitboxtracker.dll` и `cs.exe` в рабочий каталог клиента Counter-Strike 1.6 и запускайте игру через `cs.exe`, а не обычным ярлыком, — модуль загружает именно лаунчер.

## 4. Проверьте результат

Зайдите на сервер с установленным плагином и задайте `r_drawentities` значение `6` или `7`. Если дополнительная отрисовка хитбоксов не появилась, значит либо клиент запущен без лаунчера, либо серверный плагин не загружен — проверьте `meta list` на сервере.

Что делает каждое значение `r_drawentities`, описано в разделе [Настройки](./settings.md).
