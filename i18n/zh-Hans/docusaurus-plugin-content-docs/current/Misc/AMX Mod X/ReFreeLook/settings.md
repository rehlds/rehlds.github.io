---
id: refreelook-settings
title: "ReFreeLook: 设置"
sidebar_label: 设置
sidebar_position: 3
description: ReFreeLook 是一个 AMX Mod X 模块，让观战的管理员可以使用任意视角模式，而不受 `mp_forcecamera` 或 `mp_forcechasecam` 取值的限制。仅适用于最新版 `ReGameDLL_CS`。
slug: /refreelook/settings
keywords:
  - refreelook
  - AMX Mod X
  - amxx
  - amx
  - module
  - settings
  - 设置
tags:
  - refreelook
  - settings
  - 设置
last_update:
  date: 07/21/2025
  author: STAM
---

# 设置

ReFreeLook 只有一个控制台变量。

## `afl_admin_access_flags`

指定哪些权限标志可以豁免服务器强制的观战视角模式（`mp_forcecamera`/`mp_forcechasecam`）。只要玩家的 AMX Mod X 权限中包含所列标志中的**任意一个**，他在观战时就能不受限制地控制视角。标志是叠加的——你可以任意组合多个字母。

| 默认值 |
| --- |
| `d` |

这里使用的是 AMX Mod X 的标准权限标志（如 `users.ini` 中所述）：

| 标志 | 权限 |
| --- | --- |
| `a` | 免疫（不会被踢出、封禁、处死、拍打，也不受其他管理员命令影响）。 |
| `b` | 保留位（可以占用保留席位加入）。 |
| `c` | `amx_kick` 命令。 |
| `d` | `amx_ban` 与 `amx_unban` 命令（永久与临时封禁）。 |
| `e` | `amx_slay` 与 `amx_slap` 命令。 |
| `f` | `amx_map` 命令。 |
| `g` | `amx_cvar` 命令（并非所有变量都可用）。 |
| `h` | `amx_cfg` 命令。 |
| `i` | `amx_chat` 及其他聊天命令。 |
| `j` | `amx_vote` 及其他投票命令。 |
| `k` | 访问 `sv_password` 变量（通过 `amx_cvar`）。 |
| `l` | 访问 `amx_rcon` 命令和 `rcon_password` 变量（通过 `amx_cvar`）。 |
| `m`–`t` | 自定义等级 A–H，供其他插件使用。 |
| `u` | 菜单访问权限。 |
| `v` | `amx_ban`/`amx_unban`，仅限临时封禁（对 `amx_unban` 而言，仅限本人在当前地图内所做的封禁）。 |
| `z` | 普通用户（无管理员权限）。 |

由于默认值是 `d`（封禁类命令），多数服务器还需要把自己实际使用的管理组标志加进去，例如：

```text
afl_admin_access_flags "cd"
```

这样设置后，拥有踢出（`c`）或封禁（`d`）标志的人都能获得自由视角。
