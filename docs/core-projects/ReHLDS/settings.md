---
id: rehlds-settings
title: Settings
sidebar_position: 3
description: ReHLDS is a re-engineered version of the original HLDS, providing enhanced security, performance, and modding capabilities for games like Half-Life and Counter-Strike 1.6.
slug: /rehlds/settings
---

<head>
  <title>ReHLDS: Settings | ReHLDS</title>
</head>

# Settings

ReHLDS adds a set of server console variables (cvars) on top of the standard HLDS ones, mostly for anti-cheat/anti-abuse tuning, networking, and behavior fixes. Set them in `server.cfg` or any config executed at startup.

## Cvars

| Cvar | Default | Description |
| --- | --- | --- |
| `sv_auto_precache_sounds_in_models` | `0` | Automatically precache sounds attached to models. |
| `sv_delayed_spray_upload` | `0` | Upload custom sprays after entering the game instead of when connecting. Increases upload speed. |
| `sv_echo_unknown_cmd` | `0` | Echo in the console when a client tries to execute an unknown command. |
| `sv_rcon_condebug` | `1` | Print rcon debug output in the console. |
| `sv_force_ent_intersection` | `0` | Used by third-party plugins to force collision of `SOLID_SLIDEBOX` entities. |
| `sv_rehlds_force_dlmax` | `0` | Force a client's `cl_dlmax` cvar to `1024`, avoiding excessive packet fragmentation. |
| `sv_rehlds_hull_centering` | `0` | Use the center of the hull instead of a corner. |
| `sv_rehlds_movecmdrate_max_avg` | `400` | Max average level of "move" commands allowed before a ban. |
| `sv_rehlds_movecmdrate_avg_punish` | `5` | Ban time in minutes for exceeding `sv_rehlds_movecmdrate_max_avg` (`0` = permanent, negative = kick). |
| `sv_rehlds_movecmdrate_max_burst` | `2500` | Max burst level of "move" commands allowed before a ban. |
| `sv_rehlds_movecmdrate_burst_punish` | `5` | Ban time in minutes for exceeding `sv_rehlds_movecmdrate_max_burst` (`0` = permanent, negative = kick). |
| `sv_rehlds_send_mapcycle` | `0` | Send `mapcycle.txt` in the server info message (matches original HLDS behavior; unused by the client). |
| `sv_rehlds_stringcmdrate_max_avg` | `80` | Max average level of "string" commands allowed before a ban. |
| `sv_rehlds_stringcmdrate_avg_punish` | `5` | Ban time in minutes for exceeding `sv_rehlds_stringcmdrate_max_avg` (`0` = permanent, negative = kick). |
| `sv_rehlds_stringcmdrate_max_burst` | `400` | Max burst level of "string" commands allowed before a ban. |
| `sv_rehlds_stringcmdrate_burst_punish` | `5` | Ban time in minutes for exceeding `sv_rehlds_stringcmdrate_max_burst` (`0` = permanent, negative = kick). |
| `sv_rehlds_userinfo_transmitted_fields` | `""` | Only userinfo keys listed here are transmitted to clients over the network. Empty means all fields are transmitted (except keys prefixed with `_`). Prefix each key with a backslash, e.g. `\name\model\*sid\*hltv\bottomcolor\topcolor`. See [Userinfo keys](https://github.com/rehlds/ReHLDS/wiki/Userinfo-keys) for the full reference. |
| `sv_rehlds_attachedentities_playeranimationspeed_fix` | `0` | Fixes a gait animation speed bug that occurs when a player has attached entities (aiments). Can cause animation lag when `cl_updaterate` is low. |
| `sv_rehlds_maxclients_from_single_ip` | `5` | Limit simultaneous connections from a single IP address (does not affect already-connected players). |
| `sv_rehlds_local_gametime` | `0` | Reduces perceived "lag" when the same map runs for a long time. |
| `sv_rehlds_allow_large_sprays` | `1` | Allow custom logos larger than 64x64. |
| `sv_use_entity_file` | `0` | Controls use of a custom entity file per map (`maps/[map name].ent`). `0` = original entities, `1` = use `.ent` files from the maps directory, `2` = use `.ent` files and create one if it doesn't exist. |
| `sv_usercmd_custom_random_seed` | `0` | Populate an additional random seed independent of the client. |
| `sv_net_incoming_decompression` | `1` | Decompress incoming compressed file-transfer payloads. |
| `sv_net_incoming_decompression_max_ratio` | `80.0` | Max allowed ratio between compressed and uncompressed data for file transfer, `0`–`100`. A ratio close to 90 indicates large uncompressed data with low entropy. |
| `sv_net_incoming_decompression_max_size` | `65536` | Max allowed size in bytes for decompressed file-transfer data, `16`–`65536`. |
| `sv_net_incoming_decompression_min_failures` | `4` | Minimum decompression failures required before a connection is flagged for potential punishment, `0`–`10`. |
| `sv_net_incoming_decompression_max_failures` | `10` | Max decompression failures allowed within the tracking window before action is taken, `0`–`10`. |
| `sv_net_incoming_decompression_min_failuretime` | `0.1` | Time window in seconds, `0.1`–`10.0`, within which decompression failures are tracked. |
| `sv_net_incoming_decompression_punish` | `-1` | Ban time in minutes for malformed/abnormal bzip2 fragments (`0` = permanent, negative = kick). |
| `sv_tags` | `""` | Comma-delimited list of "gametags" for the server, used for filtering in matchmaking/server-browser interfaces. |
| `sv_filterban` | `1` | IP filtering mode. `-1` = reject all players unconditionally, `0` = no checks, `1` = kick players matching an IP filter/ban entry. |
| `sv_rehlds_movecmd_max_ticks` | `24` | Max number of movement commands the server processes from a single player in a single frame (commands, not packets). |
| `sv_rehlds_movecmd_max_null_streak` | `0` | Max allowed consecutive movement commands with zero time duration (empty commands). `0` disables the check. |
| `sv_rehlds_movecmd_clamp_interp` | `1` | Block movement commands with an out-of-range `ex_interp` value. |
| `sv_rehlds_movecmdtime_samples` | `120` | Number of frames used to average a client's movement speed. Higher = more accurate but slower detection. |
| `sv_rehlds_movecmdtime_max_error` | `300` | How far (in ms) a client's internal game clock may drift from the server's clock before speed is evaluated. Penalties apply only if `sv_rehlds_movecmdtime_max_scale` / `_min_scale` are also violated. |
| `sv_rehlds_movecmdtime_max_scale` | `3.0` | Max client base game-speed ratio. Clients speeding up beyond this receive warnings. |
| `sv_rehlds_movecmdtime_min_scale` | `0.5` | Min client base game-speed ratio. Clients slowing down below this receive warnings. |
| `sv_rehlds_movecmdtime_max_warnings` | `-1` | Max allowed speedhack/slowmo warnings before punishment. `-1` disables detection. |
| `sv_rehlds_movecmdtime_punish` | `-1` | Punishment for speedhacking/slowing (`-1` = kick, `0` = permanent ban, negative = kick). |
| `sv_reconnect_timeout` | `30` | Hard deadline in seconds for a client to re-initiate its connection after a level change, independent of netchannel activity. Closes a phantom-slot exploit where a cheat blocks the `reconnect` command while keeping the netchannel alive so `sv_timeout` never fires. `0` disables it. |

:::note

`sv_rehlds_userinfo_transmitted_fields` is the setting most commonly used together with privacy/anti-cheat configurations. See the [Userinfo keys wiki page](https://github.com/rehlds/ReHLDS/wiki/Userinfo-keys) for value type, default transmission, and privacy notes for every standard key.

:::

## Files

| Cvar | Default | Description |
| --- | --- | --- |
| `listipcfgfile` | `listip.cfg` | File used for permanent IP bans. |
| `syserror_logfile` | `sys_error.log` | File used for the system error log. |

## Console commands

| Command | Description |
| --- | --- |
| `rescount` | Prints the total count of precached resources in the server console. |
| `reslist <sound \| model \| decal \| generic \| event>` | Prints the precached resources of the given type. Useful for managing resources and the GoldSrc precache limits. |
| `rcon_adduser <ipaddress/CIDR>` | Adds an IP address or CIDR range to the RCON user list, granting it privileged console access. Without any RCON users, anyone with a valid password can use RCON. |
| `rcon_deluser <ipaddress> {removeAll}` | Removes an IP address or CIDR range from the RCON user list. |
| `rcon_users` | Lists all IP addresses and CIDR ranges in the RCON user list. |
