---
id: refreelook-install
title: "ReFreeLook: Installation"
sidebar_label: Installation
sidebar_position: 2
description: ReFreeLook - AMX Mod X module whichs allows spectating admins to use any camera modes regardless of the `mp_forcecamera` or `mp_forcechasecam` value. This only works for latest `ReGameDLL_CS` version.
slug: /refreelook/install
keywords:
  - refreelook
  - AMX Mod X
  - amxx
  - amx
  - module
  - install
tags:
  - refreelook
  - install
last_update:
  date: 07/21/2025
  author: STAM
---

# Installing

ReFreeLook is an AMX Mod X **module** (not a Metamod plugin) and requires the latest [ReGameDLL_CS](/docs/regamedll-cs/install) and AMX Mod X already installed and working.

## 1. Get ReFreeLook

Download a build from the [releases page](https://github.com/rehlds/ReFreeLook/releases), or [build it from source](./compilling.md).

## 2. Stop the server

Stop your server before installing or updating — whether this is your first install or an update.

## 3. Place the module

Copy the binary matching your platform into your mod's AMX Mod X modules folder:

| Platform | File | Destination |
| --- | --- | --- |
| Windows | `refreelook_amxx.dll` | `<mod>/addons/amxmodx/modules/refreelook_amxx.dll` |
| Linux | `refreelook_amxx_i386.so` | `<mod>/addons/amxmodx/modules/refreelook_amxx_i386.so` |

## 4. Register the module

Open `<mod>/addons/amxmodx/configs/modules.ini` and add a line at the end:

```text
refreelook
```

## 5. Configure gameplay cvars

ReFreeLook only matters when spectator cameras are actually restricted:

- Set `mp_forcechasecam` and `mp_forcecamera` to the **same** value.
- Make sure `mp_fadetoblack` is `0`.

## 6. Configure admin access

Set `afl_admin_access_flags` to the access flag(s) that should be exempt from the camera restriction. See [Settings](./settings.md) for the flag list and default.

## 7. Start the server

Start the server and confirm the module loaded (check the AMX Mod X module list in the console/log for `refreelook`).
