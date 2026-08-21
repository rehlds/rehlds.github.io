---
id: regamedll-cs-troubbleshouting
title: Troubleshooting
sidebar_position: 6
description: Common ReGameDLL_CS installation, configuration, and bot problems.
slug: /regamedll-cs/troubbleshouting
---

# Troubleshooting

## `game version` does not show ReGameDLL

The server is probably still loading the previous GameDLL.

1. Stop the server completely.
2. Confirm that you copied the binary for the correct operating system to `cstrike/dlls` or `czero/dlls`.
3. Check that the server is using the game directory you edited (`-game cstrike` or `-game czero`).
4. Start the server and run `game version` in its console.

On Linux, also check file ownership and read permissions. Remember that the official server binary is 32-bit, so the host needs the required 32-bit runtime libraries.

## Bot commands are unknown

For a dedicated server, `bot_enable` must be set before the GameDLL initializes.

1. Set `bot_enable "1"` in `cstrike/game_init.cfg` or `czero/game_init.cfg`.
2. For Counter-Strike 1.6, install the official `bot_profiles.zip` contents into `cstrike`.
3. Fully restart the server; changing the cvar after startup is not enough.

Do not add `-bots` or `-host-improv` to the command line. These legacy switches were removed in favor of cvars.

## Bots are enabled but do not join

Check the active values of:

```text
bot_quota
bot_quota_mode
bot_join_after_player
bot_join_team
```

For a simple test, use:

```cfg
bot_quota_mode "normal"
bot_quota "4"
bot_join_after_player "0"
bot_join_team "any"
```

Then change the map or restart the server. You can also run `bot_add` manually to distinguish a quota problem from a bot-data or navigation problem.

## Bot profiles or names are missing

Counter-Strike 1.6 does not ship all Condition Zero bot data. Extract the upstream `regamedll/extra/zBot/bot_profiles.zip` archive into the `cstrike` directory and keep its directory structure intact. If you specify a profile name in `bot_add`, it must exist in the installed profile database.

## Bots cannot navigate a custom map

The map may not have a compatible navigation mesh. Start the map, add a bot, and use `bot_nav_analyze` from the server console. Analysis can consume noticeable CPU time. Save or reload the generated navigation data before using it on a production server.

## The server crashes after replacing the GameDLL

- Temporarily disable Metamod plugins and test ReGameDLL_CS by itself.
- Update ReHLDS, Metamod-R, and plugins to compatible versions.
- Remove plugins that patch hard-coded addresses or rely on Valve GameDLL offsets unless their documentation explicitly supports ReGameDLL_CS.
- Restore the release's `delta.lst` if it was accidentally overwritten with an incompatible version.

## A setting has no effect

- Put initialization-only settings such as `bot_enable` in `game_init.cfg` and restart the process.
- Put gameplay settings in `game.cfg` or another config executed after the map loads.
- Search later config files for the same cvar; a later assignment wins.
- Compare your config with the current release archive when updating. New releases can add cvars or change defaults.

## Reporting a problem

Before opening an issue, collect:

- the output of `game version`;
- the ReHLDS/HLDS, Metamod, and ReGameDLL_CS versions;
- the operating system and game directory;
- a plugin list;
- the relevant console log and a minimal configuration that reproduces the issue.

Report reproducible ReGameDLL_CS issues in the [upstream issue tracker](https://github.com/rehlds/ReGameDLL_CS/issues).
