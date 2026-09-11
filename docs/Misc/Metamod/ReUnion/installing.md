---
id: reunion-install
title: Installation
sidebar_position: 2
description: ReUnion - Metamod plugin that allows protocol 47 and 48 non-steam clients to connect to ReHLDS servers.
slug: /reunion/install
---

<head>
  <title>ReUnion: Installing | ReHLDS</title>
</head>

# Installing

ReUnion is a Metamod plugin and needs [ReHLDS](/docs/rehlds/install) (API `3.10`+) and Metamod (Metamod-R recommended) already installed and working.

## 1. Get ReUnion

Download a build from the [releases page](https://github.com/rehlds/ReUnion/releases), or [build it from source](./compilling.md).

## 2. Place the plugin

Create a `reunion` folder under `addons` in your mod directory (`<gamedir>` — `cstrike` for Counter-Strike, `valve` for Half-Life, etc.) and place the binary matching your platform there:

| Platform | File | Destination |
| --- | --- | --- |
| Windows | `reunion_mm.dll` | `<gamedir>/addons/reunion/reunion_mm.dll` |
| Linux | `reunion_mm_i386.so` | `<gamedir>/addons/reunion/reunion_mm_i386.so` |

## 3. Register the plugin with Metamod

Edit `<gamedir>/addons/metamod/plugins.ini` and add this line, preferably at the **beginning** of the file:

```text
win32 addons\reunion\reunion_mm.dll
linux addons/reunion/reunion_mm_i386.so
```

## 4. Add the config file

Copy the release's `reunion.cfg` so ReUnion can find it. It looks in this order and uses the first file it finds:

1. Next to its own binary — `<gamedir>/addons/reunion/reunion.cfg`.
2. The game directory root — `<gamedir>/reunion.cfg`.
3. The server's working directory — `reunion.cfg`.

See [Settings](./settings.md) for the config format.

## 5. Start the server and verify

Start the server and run `meta list` in the console:

```text
Currently loaded plugins:
      description      stat pend  file              vers      src   load  unlod
 [ 1] Reunion          RUN   -    reunion_mm_i386.  v0.1.58   ini   Start Never
 [ 2] AMX Mod X        RUN   -    amxmodx_mm_i386.  v1.8.1.3  ini   Start ANY
2 plugins, 2 running
```

If it shows `fail` instead of `RUN`, start the server with `-console +log on +mp_logecho 1` and check the console output — it will print the reason ReUnion failed to load (commonly a missing/invalid `reunion.cfg`, or an incompatible ReHLDS version).

## Optional extras

The release archive also ships `reunion_api.h` (a C header for other Metamod/GameDLL plugins that want to query ReUnion directly — [ReAPI](/docs/reapi) uses this) and a couple of optional AMX Mod X scripts under `addons/amxmodx/scripting/` (`reu_test.sma`, `updatehint.sma`) that you can compile and load separately if you want a test plugin or an outdated-client hint message. Neither is required for ReUnion itself to work.
