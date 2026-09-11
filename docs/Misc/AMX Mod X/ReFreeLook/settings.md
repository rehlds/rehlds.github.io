---
id: refreelook-settings
title: "ReFreeLook: Settings"
sidebar_label: Settings
sidebar_position: 3
description: ReFreeLook - AMX Mod X module whichs allows spectating admins to use any camera modes whatever `mp_forcecamera` or `mp_forcechasecam `value. This only works for latest `ReGameDLL_CS` version.
slug: /refreelook/settings
keywords:
  - refreelook
  - AMX Mod X
  - amxx
  - amx
  - module
  - settings
tags:
  - refreelook
  - settings
last_update:
  date: 07/21/2025
  author: STAM
---

# Settings

ReFreeLook has a single cvar.

## `afl_admin_access_flags`

Access flags that are exempt from the server's forced spectator camera mode (`mp_forcecamera`/`mp_forcechasecam`). A player whose AMX Mod X access level includes **any** of the listed flags gets unrestricted camera control while spectating. Flags are additive — combine as many letters as you want.

| Default |
| --- |
| `d` |

The flags are the standard AMX Mod X access flags (as documented in `users.ini`):

| Flag | Access |
| --- | --- |
| `a` | Immunity (can't be kicked/banned/slain/slapped or affected by other admin commands). |
| `b` | Reservation (can join on reserved slots). |
| `c` | `amx_kick` command. |
| `d` | `amx_ban` and `amx_unban` commands (permanent and temporary bans). |
| `e` | `amx_slay` and `amx_slap` commands. |
| `f` | `amx_map` command. |
| `g` | `amx_cvar` command (not all cvars available). |
| `h` | `amx_cfg` command. |
| `i` | `amx_chat` and other chat commands. |
| `j` | `amx_vote` and other vote commands. |
| `k` | Access to `sv_password` cvar (via `amx_cvar`). |
| `l` | Access to `amx_rcon` command and `rcon_password` cvar (via `amx_cvar`). |
| `m`–`t` | Custom levels A–H, for additional plugins. |
| `u` | Menu access. |
| `v` | `amx_ban`/`amx_unban`, temporary bans only (self-performed bans during the current map only for `amx_unban`). |
| `z` | User (no admin access). |

Since the default is `d` (ban commands), most servers will want to add whichever flag(s) their actual moderator/admin group uses — for example:

```text
afl_admin_access_flags "cd"
```

grants free camera to anyone with the kick (`c`) or ban (`d`) flag.
