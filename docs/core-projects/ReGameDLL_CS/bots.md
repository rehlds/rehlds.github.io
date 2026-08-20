---
id: regamedll-cs-bots
title: Using bots
sidebar_position: 5
description: Install, enable, configure, and troubleshoot the built-in ReGameDLL_CS zBot system.
slug: /regamedll-cs/bots
---

# Using bots

ReGameDLL_CS includes the zBot code used by Counter-Strike: Condition Zero. Dedicated servers must enable it explicitly, and CS 1.6 servers also need the separate bot profiles and resources.

:::warning Old command-line option

Do not use the old `-bots` HLDS command-line option. It was removed upstream in favor of the `bot_enable` CVar.

:::

## Enable bots on CS 1.6

1. Install a current ReGameDLL_CS release.
2. Download the official [`bot_profiles.zip`](https://github.com/rehlds/ReGameDLL_CS/raw/refs/heads/master/regamedll/extra/zBot/bot_profiles.zip).
3. Extract the archive into the server root so its `cstrike` files merge into `<server>/cstrike`.
4. Create or edit `<server>/cstrike/game_init.cfg` and set:

```text
bot_enable "1"
```

5. Fully restart the server.

The regular `regamedll-bin-*.zip` release does not include the CS 1.6 bot profile archive, so installing only the GameDLL is not enough.

## Enable bots on Condition Zero

Condition Zero already supplies the normal zBot profiles and resources. On a dedicated server, edit `<server>/czero/game_init.cfg` and set:

```text
bot_enable "1"
```

Then fully restart the server. Listen servers enable zBot regardless of this CVar.

## Add and remove bots

Run these commands in the server console or through RCON:

| Command | Result |
| --- | --- |
| `bot_add` | Adds a random bot, using `bot_join_team` as the team preference. |
| `bot_add <profile>` | Adds the named profile from `BotProfile.db`. |
| `bot_add_t [profile]` | Adds a random or named Terrorist bot. |
| `bot_add_ct [profile]` | Adds a random or named Counter-Terrorist bot. |
| `bot_kill` or `bot_kill all` | Kills all living bots without removing them. |
| `bot_kill <name>` | Kills one bot. Quote names that contain spaces. |
| `bot_kick` or `bot_kick all` | Removes all bots and resets the quota so they are not immediately re-added. |
| `bot_kick <name>` | Removes one bot and reduces the quota. |
| `bot_about` | Prints information about the bot implementation. |

Manually adding a bot increases `bot_quota`; manually kicking one reduces it.

## Configure bot count

`bot_quota_mode` controls how `bot_quota` is interpreted.

### Keep exactly six bots

```text
bot_quota_mode "normal"
bot_quota "6"
bot_join_after_player "0"
```

### Keep ten total active players

In `fill` mode, humans plus bots are kept near the quota:

```text
bot_quota_mode "fill"
bot_quota "10"
```

### Keep two bots per human

In `match` mode, the quota is a human-to-bot ratio:

```text
bot_quota_mode "match"
bot_quota "2"
```

Useful quota settings:

| CVar | Values | Meaning |
| --- | --- | --- |
| `bot_join_after_player` | `0`, `1`, `2` | `0`: bots may join an empty server. `1`: wait for a human on T/CT. `2`: wait for any connected human, including spectators. |
| `bot_join_delay` | seconds | Delays bot joining after a map change. |
| `bot_auto_vacate` | `0` or `1` | When enabled, keeps a free slot available for a human player. |
| `bot_join_team` | `any`, `T`, `CT` | Preferred team for automatically added bots. |

## Difficulty, chatter, and objectives

```text
bot_difficulty "2"
bot_chatter "minimal"
bot_defer_to_human "0"
```

- `bot_difficulty`: `0` easy, `1` normal, `2` hard, `3` expert.
- `bot_chatter`: commonly `off`, `radio`, `minimal`, or `normal`.
- `bot_defer_to_human 0`: bots may perform scenario objectives.
- `bot_deathmatch 1`: bots use deathmatch behavior and do not perform the normal scenario.
- `bot_freeze 1`: prevents bots from moving, which is useful for testing.

Weapon presets are also available:

```text
bot_knives_only
bot_pistols_only
bot_snipers_only
bot_all_weapons
```

## Navigation for custom maps

Bots need a navigation file at `<mod>/maps/<map>.nav`. If a custom map does not provide one, run:

```text
bot_nav_analyze
```

Navigation analysis can take time and writes a new `.nav` file. Current ReGameDLL_CS builds reload the generated navigation data after analysis without requiring a separate map restart.

Back up hand-edited `.nav` files before re-running analysis. The additional `bot_nav_*` commands are advanced editing tools and should be used on a test server.

## Example bot configuration

After enabling bots in `game_init.cfg`, place everyday bot behavior in `game.cfg` or a separate file executed by your server configuration:

```text
bot_quota_mode "fill"
bot_quota "12"
bot_join_after_player "2"
bot_join_delay "5"
bot_auto_vacate "1"
bot_difficulty "2"
bot_chatter "minimal"
bot_defer_to_human "0"
```

See [Troubleshooting](../troubbleshouting/) if the `bot_*` commands are unknown or bots do not join.
