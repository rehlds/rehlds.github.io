---
id: regamedll-cs
title: ReGameDLL_CS
sidebar_position: 1
description: Current overview, compatibility notes, downloads, and next steps for ReGameDLL_CS server administrators and developers.
slug: /regamedll-cs
---

# ReGameDLL_CS

ReGameDLL_CS is a reverse-engineered and actively maintained replacement for the Counter-Strike server GameDLL (`mp.dll` on Windows and `cs.so` on Linux). It is based on the original Counter-Strike GameDLL from HLDS build 6153 beta and provides fixes, new server settings, built-in bot support, and an extended API for mods and plugins.

The project supports the official Valve server content for:

- Counter-Strike 1.6 (`cstrike`)
- Counter-Strike: Condition Zero (`czero`)

Use the [latest stable release](https://github.com/rehlds/ReGameDLL_CS/releases/latest) for production servers. Development builds are available from the upstream [GitHub Actions workflow](https://github.com/rehlds/ReGameDLL_CS/actions/workflows/build.yml), but may contain changes that have not reached a stable release.

## What ReGameDLL_CS adds

- Gameplay and server-side bug fixes.
- Additional game rules and configurable CVars.
- Built-in zBot support, including bot quota modes and navigation tools.
- Improved Condition Zero hostage AI that can also be installed for CS 1.6.
- New server commands such as `game version`, `endround`, and `swapteams`.
- An extended GameDLL API used by projects such as [ReAPI](https://github.com/rehlds/ReAPI).

The complete, continuously updated list of settings is maintained in the upstream [`game.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game.cfg).

## Compatibility warning

:::warning Binary compatibility

ReGameDLL_CS is not binary compatible with Valve's original GameDLL because it is built with different compilers. Plugins that inspect or patch the original binary by signatures or offsets, such as some Orpheu-based plugins, may fail or crash the server.

Prefer supported APIs such as ReAPI and test every binary-dependent plugin before deploying it to a production server.

:::

Standard AMX Mod X and Metamod plugins that use documented interfaces are generally unaffected by this warning.

## Files in a release

The stable `regamedll-bin-*.zip` archive contains separate `win32` and `linux32` builds:

| Platform | GameDLL | Release path |
| --- | --- | --- |
| Windows | `mp.dll` | `bin/win32/cstrike/dlls/mp.dll` |
| Linux x86 | `cs.so` | `bin/linux32/cstrike/dlls/cs.so` |

Each platform folder also contains `game.cfg`, `game_init.cfg`, and `delta.lst`. The zBot profiles and sounds for CS 1.6 are distributed separately; see [Using bots](./bots/).

## Where to go next

- [Install or update ReGameDLL_CS](./install/)
- [Configure game rules and server commands](./settings/)
- [Install and operate zBot](./bots/)
- [Build ReGameDLL_CS from source](./compilling/)
- [Troubleshoot a server](./troubbleshouting/)

After installation, run this command in the server console:

```text
game version
```

A successful installation prints the ReGameDLL_CS build version, build date, and project URL.
