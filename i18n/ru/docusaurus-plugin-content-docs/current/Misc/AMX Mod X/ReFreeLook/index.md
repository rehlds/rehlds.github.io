---
id: refreelook
title: "ReFreeLook"
sidebar_label: ReFreeLook
sidebar_position: 1
description: ReFreeLook — модуль AMX Mod X, позволяющий администраторам-наблюдателям использовать любые режимы камеры, независимо от значения `mp_forcecamera` или `mp_forcechasecam`. Работает только в последней версии `ReGameDLL_CS`.
slug: /refreelook
keywords:
  - refreelook
  - AMX Mod X
  - amxx
  - amx
  - module
tags:
  - refreelook
  - amxx module
last_update:
  date: 07/21/2025
  author: STAM
---

# Что такое ReFreeLook?

ReFreeLook — это модуль AMX Mod X, позволяющий администраторам с нужными флагами доступа свободно наблюдать за игрой независимо от значения `mp_forcecamera` или `mp_forcechasecam`, навязанного обычным наблюдателям. Это продолжение [AdminFreeLook от Arkshine](https://github.com/Arkshine/AdminFreeLook), построенное на [ReGameDLL_CS](/ru/docs/regamedll-cs).

Серверы часто ограничивают режимы камеры наблюдателя (`mp_forcecamera`/`mp_forcechasecam`), чтобы игроки не разведывали обстановку для своих союзников. ReFreeLook выводит из-под этого ограничения администраторов, у которых есть заданный набор флагов доступа: у персонала сервера остаётся полная свобода камеры для модерации, а обычные наблюдатели по-прежнему ограничены.

## Требования

- **Последняя** версия [ReGameDLL_CS](/ru/docs/regamedll-cs/install) — ReFreeLook перехватывает функции GameDLL, которые есть только в ней, и на обычной связке HLDS/GameDLL не работает.
- AMX Mod X.

См. [Установка](./installing.md) и [Настройки](./settings.md) — там описана единственная переменная, определяющая, кто получает свободную камеру.
