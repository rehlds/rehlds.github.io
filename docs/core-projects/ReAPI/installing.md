---
id: reapi-install
title: Installation
sidebar_position: 2
description: ReAPI - AMXModX module providing APIs for ReHLDS, ReGameDLL, and Metamod plugins (e.g., ReUnion, ReVoice).
slug: /reapi/install
---

<head>
  <title>ReAPI: Installing | ReHLDS</title>
</head>

# Installation

ReAPI is an AMX Mod X module. It needs AMX Mod X already installed and running, and it hooks into the layers beneath it, so install order matters.

## Before you begin

Make sure the following are already installed and working:

1. [ReHLDS](/docs/rehlds/install) — required for all engine-level hooks and members.
2. Metamod-R (or Metamod) and AMX Mod X.
3. [ReGameDLL_CS](/docs/regamedll-cs/install) — only needed if your plugins use GameDLL-level hooks or members (`reapi_gamedll.inc`). Purely engine-level plugins work without it.

## 1. Download ReAPI

Get `reapi-bin-*.zip` from the [latest release](https://github.com/rehlds/ReAPI/releases/latest). The archive contains a single `addons/` folder with binaries for both platforms and the Pawn include files.

## 2. Extract into your mod directory

Copy the contents of the archive's `addons/amxmodx/` into `<mod>/addons/amxmodx/`:

| From the archive | Goes to | Purpose |
| --- | --- | --- |
| `addons/amxmodx/modules/reapi_amxx.dll` | `<mod>/addons/amxmodx/modules/` | Windows module binary. |
| `addons/amxmodx/modules/reapi_amxx_i386.so` | `<mod>/addons/amxmodx/modules/` | Linux module binary. |
| `addons/amxmodx/scripting/include/reapi*.inc`, `cssdk_const.inc` | `<mod>/addons/amxmodx/scripting/include/` | Pawn headers needed to **compile** plugins that use ReAPI. |

You only need the binary matching your server's platform; the include files are platform-independent and are only needed on the machine where you compile `.sma` plugins.

## 3. Enable the module

How the module gets loaded depends on your AMX Mod X version:

:::note

On AMX Mod X new enough to define `AMXX_VERSION_NUM >= 175`, `reapi.inc` itself declares `#pragma reqlib reapi` / `#pragma loadlib reapi`. Any plugin that does `#include <reapi>` automatically requires and loads the module — **no manual `modules.ini` entry needed**.

:::

On older AMX Mod X builds, add a `reapi` line to `<mod>/addons/amxmodx/configs/modules.ini` yourself so the module is loaded at startup.

## 4. Verify

Start the server and check the AMX Mod X startup log (or run `meta list` / the AMXX modules listing in the console) for `ReAPI` loading successfully. If it fails to load, double-check that you copied the binary matching your OS and that ReHLDS (and ReGameDLL_CS, if used) are actually in place — ReAPI depends on them at runtime, not just at compile time.

## Compiling plugins against ReAPI

Point your AMXX compiler (`amxxpc`) at a `scripting/include` directory that contains the ReAPI headers you copied in step 2, then simply `#include <reapi>` in your plugin source. See [Settings](./settings.md) for the available natives and hook chain API.
