---
id: rehlds-supported-games
title: Supported games
sidebar_position: 1
description: ReHLDS is a re-engineered version of the original HLDS, providing enhanced security, performance, and modding capabilities for games like Half-Life and Counter-Strike 1.6.
slug: /rehlds/supported-games
---

<head>
  <title>ReHLDS: Supported games | ReHLDS</title>
</head>

# Supported games

ReHLDS is a replacement for the HLDS **engine** itself (`swds.dll` / `engine_i486.so`), not for a specific mod's GameDLL. Because of that, "supported games" is really a question of two things: which HLDS build ReHLDS is compatible with, and which platform you run it on. Any GoldSrc mod that runs on that HLDS build — Half-Life, Counter-Strike 1.6, Condition Zero, Day of Defeat, Team Fortress Classic, Deathmatch Classic, and third-party mods — runs on top of ReHLDS as well.

## Engine build compatibility

| HLDS build | Status |
| --- | --- |
| Pre-anniversary Steam build (engine version ≤ 8684), downloaded via `steamcmd` | :heavy_check_mark: Fully supported |
| Old 5xxx-and-below builds downloaded via the legacy `hldsupdatetool` | :x: Not compatible |

:::warning

ReHLDS is not compatible with the old 5xxx-and-below platform installed via `hldsupdatetool`. Make sure you are running the pre-anniversary build described in [Installation](./installing.md) before reporting a problem.

:::

## Platform support

| Platform | Binary | CPU requirement |
| --- | --- | --- |
| Windows | `swds.dll` | SSE, SSE2, SSE3 (SSE4.1 / SSE4.2 used when available) |
| Linux (32-bit) | `engine_i486.so` | SSE, SSE2, SSE3 (SSE4.1 / SSE4.2 used when available) |

ReHLDS is packaged together with **ReHLTV**, an enhanced build of the Half-Life TV proxy/relay, so HLTV setups get the same fixes and increased limits without a separate download.

## Mod and plugin compatibility

Since ReHLDS only replaces the engine layer, mod-level compatibility (GameDLL, Metamod plugins, AMX Mod X plugins) is generally governed by the mod and plugin themselves rather than by ReHLDS. Two points are worth keeping in mind:

- ReHLDS is **not binary-compatible** with the original HLDS — it is built with different compilers than Valve's original binaries. Plugins that do raw binary patching or signature scanning of the engine (for example, Orpheu) may not work correctly and need explicit ReHLDS support.
- For the current compatibility status of a specific mod combined with [Metamod-R](/docs/metamod-r/supported-games) or [ReGameDLL_CS](/docs/regamedll-cs/supported-games), check that project's own supported games page — those layers sit directly on top of ReHLDS.
