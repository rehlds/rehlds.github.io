---
id: reamxmodx-settings
title: Settings
sidebar_position: 3
description: ReAMXModX - obsolete fork of AMX Mod X that added ReHLDS and ReGameDLL API support before upstream AMX Mod X did.
slug: /reamxmodx/settings
---

<head>
  <title>ReAMXModX: Settings | ReHLDS</title>
</head>

# Settings

:::warning Deprecated

Kept for reference. Use [AMX Mod X](https://www.amxmodx.org/) from AlliedModders — see [What is ReAMXModX?](./index.md).

:::

ReAMXModX introduced **no configuration of its own**. Its changes were internal SDK glue for the ReHLDS and ReGameDLL APIs, not user-facing features, so the entire configuration surface is upstream AMX Mod X's.

The fork carries the standard AMX Mod X config set under `configs/`:

| File | Purpose |
| --- | --- |
| `amxx.cfg` | Main AMX Mod X configuration and cvars. |
| `core.ini` | Core module settings. |
| `configs.ini` | Per-mod config selection. |
| `modules.ini` | Which modules to load at startup. |
| `plugins.ini` | Which plugins to load at startup. |
| `users.ini` | Admin accounts and access flags. |
| `cmds.ini`, `clcmds.ini` | Server and client command definitions. |
| `cvars.ini` | Cvar definitions used by the menus. |
| `maps.ini` | Map list used by the map menus. |
| `hamdata.ini` | Ham Sandwich function offsets. |
| `custommenuitems.cfg`, `miscstats.ini` | Menu items and statistics display. |

All of these behave exactly as documented by AlliedModders — the fork changed none of their formats or defaults.

:::note

Because the configuration is identical, a server moving from this fork to current upstream AMX Mod X can keep its `configs/` directory as-is. One exception is worth checking by hand: `hamdata.ini` tracks function offsets, and those are tied to the AMX Mod X version and the GameDLL you run, so take the current release's copy rather than carrying the 2016 one forward.

:::

For the authoritative reference, see the [AMX Mod X documentation](https://wiki.alliedmods.net/Category:AMX_Mod_X) and the [AMX Mod X commands reference](https://wiki.alliedmods.net/Commands_(AMX_Mod_X)).
