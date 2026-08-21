---
id: regamedll-cs-settings
title: 配置与命令
sidebar_position: 4
description: 配置 ReGameDLL_CS 文件、常用游戏 CVar 和服务器控制台命令。
slug: /regamedll-cs/settings
---

# 配置与命令

ReGameDLL_CS 在 Counter-Strike 标准服务器 CVar 的基础上增加了额外设置。请使用与 GameDLL 同一发行版本附带的配置文件。

## 配置文件

| 文件 | 用途 |
| --- | --- |
| `<mod>/game.cfg` | ReGameDLL_CS 游戏规则、HUD、移动、重生、伤害和 Bot 配额扩展。 |
| `<mod>/game_init.cfg` | GameDLL 初始化时必须确定的设置：`bot_enable`、`hostage_ai_enable` 和 `mp_hullbounds_sets`。 |
| `<mod>/server.cfg` | 服务器名称、密码、日志和 Counter-Strike 标准 CVar 等常规设置。 |

`<mod>` 在 CS 1.6 中表示 `cstrike`，在 Condition Zero 中表示 `czero`。

:::important

修改 `game_init.cfg` 后必须完整重启服务器进程。仅切换地图可能无法重新初始化内置 Bot 等功能。

:::

## 常用 ReGameDLL_CS 设置

下列数值是当前稳定版配置中的默认值，服务器可以覆盖它们。

| CVar | 发行版默认值 | 用途 |
| --- | ---: | --- |
| `mp_freeforall` | `0` | 设置为 `1` 时启用自由混战。 |
| `mp_round_infinite` | `0` | 阻止指定场景条件结束回合，也接受 `a`、`e` 或 `ae` 等标志。 |
| `mp_round_restart_delay` | `5` | 一方获胜后，下一回合开始前的延迟秒数。 |
| `mp_roundrespawn_time` | `20` | 回合开始后，新加入玩家仍可出生的时限；`-1` 表示无限制。 |
| `mp_forcerespawn` | `0` | 在指定延迟后自动重生死亡玩家。 |
| `mp_maxmoney` | `16000` | 玩家金钱上限；ReGameDLL_CS 最高允许 `999999`。 |
| `mp_buy_anywhere` | `0` | 允许双方（`1`）、仅 T（`2`）或仅 CT（`3`）在任意地点购买。 |
| `mp_infinite_ammo` | `0` | `1` 保持弹匣全满；`2` 提供无限后备弹药。 |
| `mp_infinite_grenades` | `0` | 设置为 `1` 时提供无限手雷。 |
| `mp_free_armor` | `0` | 出生时提供护甲（`1`）或护甲加头盔（`2`）。 |
| `mp_team_flash` | `1` | 控制闪光弹是否影响队友和投掷者。 |
| `sv_autobunnyhopping` | `0` | 按住跳跃键时自动跳跃。 |
| `sv_enablebunnyhopping` | `0` | 允许速度超过正常跑动限制。 |
| `mp_scoreboard_showhealth` | `3` | 控制计分板传输并显示哪些玩家的生命值。 |
| `mp_scoreboard_showmoney` | `3` | 控制计分板传输并显示哪些玩家的金钱。 |
| `mp_allow_point_servercommand` | `0` | 允许地图执行服务器命令。不受信任的地图应保持关闭。 |

全部设置、可用值和安全说明以官方 [`dist/game.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game.cfg) 为准。

## 服务器命令

根据适用情况，在服务器控制台或已授权的 RCON 会话中执行这些命令。

| 命令 | 说明 |
| --- | --- |
| `game version` | 显示当前加载 GameDLL 的构建版本、日期和项目地址。 |
| `endround` | 以平局结束当前回合。 |
| `endround T` | 以 T 获胜结束回合。 |
| `endround CT` | 以 CT 获胜结束回合。 |
| `swapteams` | 交换队伍，并在默认的一秒延迟后重启回合。 |
| `swapteams 0` | 交换队伍但不重启回合。 |
| `swapteams <seconds>` | 交换队伍，并在指定秒数后重启回合。 |
| `give weapon_ak47` | 给予指定武器；需要 `sv_cheats 1`。 |
| `impulse 255` | 给予所有武器；需要 `sv_cheats 1`。 |
| `impulse 200` | 启用带空中加速的 noclip；需要 `sv_cheats 1`。 |

Bot 专用命令和配额示例见 [Bot 使用指南](../bots/)。

## 安全的配置流程

1. 保留每个发行版未经修改的配置副本。
2. 每次只修改一组设置。
3. 根据需要重启或切换地图，然后在服务器控制台检查实际生效值。
4. 将自定义值记录在发行包之外，避免更新时被意外覆盖。
