---
id: regamedll-cs-supported-games
title: Supported games and platforms
sidebar_position: 3
description: Games, operating systems, and engines supported by ReGameDLL_CS.
slug: /regamedll-cs/supported-games
---

# Supported games and platforms

ReGameDLL_CS is a server-side GameDLL for the GoldSrc versions of Counter-Strike and Counter-Strike: Condition Zero.

## Supported games

| Game | Game directory | Notes |
| --- | --- | --- |
| Counter-Strike 1.6 | `cstrike` | Fully supported. The optional zBot data package is required if you want to use the built-in bots. |
| Counter-Strike: Condition Zero | `czero` | Fully supported. Bot resources are included with the game. |

ReGameDLL_CS is not a drop-in GameDLL for other GoldSrc mods. Do not install it into directories such as `valve`, `dod`, or `tfc`.

## Supported server platforms

Official release archives contain 32-bit server binaries for both major platforms:

| Platform | GameDLL |
| --- | --- |
| Windows | `dlls/mp.dll` |
| Linux | `dlls/cs.so` |

The archive stores each platform under `bin/win32` or `bin/linux32`. Copy the contents of the appropriate directory into your game directory.

ReGameDLL_CS replaces the game logic only. You still need a compatible GoldSrc engine, such as the current Steam HLDS or ReHLDS, and the original game assets.

## Engine and client compatibility

- ReHLDS is recommended for dedicated servers, but ReGameDLL_CS can also run on a compatible Steam HLDS installation.
- Players normally do not need to install ReGameDLL_CS. It is a server-side replacement.
- Keep the GameDLL, engine, Metamod, and server plugins updated together. Old binary-patching plugins may depend on offsets from Valve's original GameDLL and can be incompatible.
- Alternative engines such as Xash3D are separate projects. Their compatibility may differ from the official Steam/ReHLDS environment and should be checked with the engine project.
