---
id: refreelook
title: "ReFreeLook"
sidebar_label: ReFreeLook
sidebar_position: 1
description: ReFreeLook - AMX Mod X module whichs allows spectating admins to use any camera modes whatever `mp_forcecamera` or `mp_forcechasecam `value. This only works for latest `ReGameDLL_CS` version.
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

# What is ReFreeLook?

ReFreeLook is an AMX Mod X module that lets admins with the right access flags spectate freely, regardless of the `mp_forcecamera` or `mp_forcechasecam` value forced on regular spectators. It's a [ReGameDLL_CS](/docs/regamedll-cs)-based continuation of [Arkshine's AdminFreeLook](https://github.com/Arkshine/AdminFreeLook).

Servers commonly lock spectator camera modes (`mp_forcecamera`/`mp_forcechasecam`) to prevent players from spectator-scouting for teammates. ReFreeLook exempts admins matching a configurable set of access flags from that restriction, so staff retain full camera freedom for moderation while regular spectators stay locked down.

## Requirements

- The **latest** [ReGameDLL_CS](/docs/regamedll-cs/install) — ReFreeLook hooks GameDLL functions that only exist there, it does not work on plain HLDS/GameDLL.
- AMX Mod X.

See [Installation](./installing.md) and [Settings](./settings.md) for the single cvar that controls who gets the free camera.
