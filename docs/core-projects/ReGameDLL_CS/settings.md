---
id: regamedll-cs-settings
title: Configuration and commands
sidebar_position: 4
description: Configure ReGameDLL_CS files, common gameplay CVars, and server console commands.
slug: /regamedll-cs/settings
---

# Configuration and commands

ReGameDLL_CS adds settings on top of the standard Counter-Strike server CVars. Start from the configuration files included in the same release as your GameDLL.

## Configuration files

| File | Use it for |
| --- | --- |
| `<mod>/game.cfg` | ReGameDLL_CS gameplay rules, HUD behavior, movement, respawn, damage, and bot quota extensions. |
| `<mod>/game_init.cfg` | Settings that must be known while the GameDLL initializes: `bot_enable`, `hostage_ai_enable`, and `mp_hullbounds_sets`. |
| `<mod>/server.cfg` | Normal server settings such as hostname, passwords, logging, and standard Counter-Strike CVars. |

`<mod>` means `cstrike` for CS 1.6 or `czero` for Condition Zero.

:::important

After changing `game_init.cfg`, fully restart the server process. A map change alone may not reinitialize features such as built-in bots.

:::

## Common ReGameDLL_CS settings

The values below are the values shipped in the current stable release configuration. Your server can override them.

| CVar | Shipped value | Purpose |
| --- | ---: | --- |
| `mp_freeforall` | `0` | Enables free-for-all gameplay when set to `1`. |
| `mp_round_infinite` | `0` | Prevents selected scenario conditions from ending a round. It also accepts flags such as `a`, `e`, or combinations such as `ae`. |
| `mp_round_restart_delay` | `5` | Delay in seconds before the next round after a win. |
| `mp_roundrespawn_time` | `20` | Time after round start during which a joining player may still spawn; `-1` removes the limit. |
| `mp_forcerespawn` | `0` | Automatically respawns killed players after the specified delay. |
| `mp_maxmoney` | `16000` | Maximum player money; ReGameDLL_CS permits values up to `999999`. |
| `mp_buy_anywhere` | `0` | Allows buying anywhere for both teams (`1`), T only (`2`), or CT only (`3`). |
| `mp_infinite_ammo` | `0` | `1` keeps the weapon clip full; `2` provides infinite reserve ammunition. |
| `mp_infinite_grenades` | `0` | Enables infinite grenades when set to `1`. |
| `mp_free_armor` | `0` | Gives Kevlar (`1`) or Kevlar and helmet (`2`) on spawn. |
| `mp_team_flash` | `1` | Controls whether flashbangs affect teammates and the thrower. |
| `sv_autobunnyhopping` | `0` | Automatically jumps while the jump key is held. |
| `sv_enablebunnyhopping` | `0` | Allows speed to exceed the normal running limit. |
| `mp_scoreboard_showhealth` | `3` | Controls whose health is sent to and shown on the scoreboard. |
| `mp_scoreboard_showmoney` | `3` | Controls whose money is sent to and shown on the scoreboard. |
| `mp_allow_point_servercommand` | `0` | Allows maps to execute server commands. Keep disabled for untrusted maps. |

For every available setting, accepted value, and safety note, use the upstream [`dist/game.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game.cfg) as the source of truth.

## Server commands

Run these from the server console or through an authorized RCON session where applicable.

| Command | Description |
| --- | --- |
| `game version` | Prints the loaded GameDLL build version, date, and project URL. |
| `endround` | Ends the round as a draw. |
| `endround T` | Ends the round with a Terrorist win. |
| `endround CT` | Ends the round with a Counter-Terrorist win. |
| `swapteams` | Swaps teams and restarts after the default one-second delay. |
| `swapteams 0` | Swaps teams without restarting the round. |
| `swapteams <seconds>` | Swaps teams and restarts after the specified delay. |
| `give weapon_ak47` | Gives the named weapon; requires `sv_cheats 1`. |
| `impulse 255` | Gives all weapons; requires `sv_cheats 1`. |
| `impulse 200` | Enables noclip with air acceleration; requires `sv_cheats 1`. |

Bot-specific commands and quota examples are documented on [Using bots](../bots/).

## Safe configuration workflow

1. Keep a copy of the unmodified configuration from each release.
2. Change one group of settings at a time.
3. Restart or change the map as required, then check the effective value in the server console.
4. Record custom values outside the release archive so an update cannot silently overwrite them.
