---
id: regamedll-cs-bots
title: Bot 使用指南
sidebar_position: 5
description: 安装、启用、配置并排查 ReGameDLL_CS 内置 zBot 系统。
slug: /regamedll-cs/bots
---

# Bot 使用指南

ReGameDLL_CS 内置了 Counter-Strike: Condition Zero 使用的 zBot 代码。专用服务器必须显式启用它，而 CS 1.6 服务器还需要单独安装 Bot 配置和资源。

:::warning 旧版启动参数

不要再使用旧的 HLDS 命令行参数 `-bots`。上游已经将其移除，改用 CVar `bot_enable`。

:::

## 在 CS 1.6 中启用 Bot

1. 安装当前版本的 ReGameDLL_CS。
2. 下载官方 [`bot_profiles.zip`](https://github.com/rehlds/ReGameDLL_CS/raw/refs/heads/master/regamedll/extra/zBot/bot_profiles.zip)。
3. 将压缩包解压到服务器根目录，使其中的 `cstrike` 文件合并到 `<server>/cstrike`。
4. 创建或编辑 `<server>/cstrike/game_init.cfg`，设置：

```text
bot_enable "1"
```

5. 完整重启服务器。

常规的 `regamedll-bin-*.zip` 发行包不包含 CS 1.6 Bot 配置包，因此只安装 GameDLL 并不足够。

## 在 Condition Zero 中启用 Bot

Condition Zero 已经包含常规的 zBot 配置和资源。在专用服务器上，编辑 `<server>/czero/game_init.cfg` 并设置：

```text
bot_enable "1"
```

然后完整重启服务器。监听服务器无论此 CVar 的值为何都会启用 zBot。

## 添加和移除 Bot

在服务器控制台或通过 RCON 执行以下命令：

| 命令 | 效果 |
| --- | --- |
| `bot_add` | 根据 `bot_join_team` 的队伍偏好添加一个随机 Bot。 |
| `bot_add <profile>` | 添加 `BotProfile.db` 中指定的配置角色。 |
| `bot_add_t [profile]` | 添加随机或指定的 T Bot。 |
| `bot_add_ct [profile]` | 添加随机或指定的 CT Bot。 |
| `bot_kill` 或 `bot_kill all` | 杀死所有存活 Bot，但不移除它们。 |
| `bot_kill <name>` | 杀死指定 Bot；名字包含空格时需加引号。 |
| `bot_kick` 或 `bot_kick all` | 移除所有 Bot 并重置配额，避免它们立即被重新添加。 |
| `bot_kick <name>` | 移除一个 Bot 并降低配额。 |
| `bot_about` | 显示 Bot 实现的相关信息。 |

手动添加 Bot 会增加 `bot_quota`，手动踢出 Bot 会减少它。

## 配置 Bot 数量

`bot_quota_mode` 决定如何解释 `bot_quota`。

### 始终保留六个 Bot

```text
bot_quota_mode "normal"
bot_quota "6"
bot_join_after_player "0"
```

### 保持总共十名活跃玩家

在 `fill` 模式下，人类玩家与 Bot 的总数会维持在配额附近：

```text
bot_quota_mode "fill"
bot_quota "10"
```

### 每名人类玩家匹配两个 Bot

在 `match` 模式下，配额表示人类玩家与 Bot 的比例：

```text
bot_quota_mode "match"
bot_quota "2"
```

常用配额设置：

| CVar | 可用值 | 含义 |
| --- | --- | --- |
| `bot_join_after_player` | `0`、`1`、`2` | `0`：Bot 可以加入空服务器。`1`：等待人类玩家加入 T/CT。`2`：等待任意人类连接，包括观察者。 |
| `bot_join_delay` | 秒数 | 地图切换后延迟 Bot 加入。 |
| `bot_auto_vacate` | `0` 或 `1` | 启用后为人类玩家保留一个空位。 |
| `bot_join_team` | `any`、`T`、`CT` | 自动添加 Bot 时偏好的队伍。 |

## 难度、语音和任务

```text
bot_difficulty "2"
bot_chatter "minimal"
bot_defer_to_human "0"
```

- `bot_difficulty`：`0` 简单、`1` 普通、`2` 困难、`3` 专家。
- `bot_chatter`：常用值为 `off`、`radio`、`minimal` 或 `normal`。
- `bot_defer_to_human 0`：允许 Bot 执行场景目标。
- `bot_deathmatch 1`：Bot 使用死亡竞赛行为，不再执行正常场景目标。
- `bot_freeze 1`：阻止 Bot 移动，适合测试使用。

还可以使用以下武器预设：

```text
bot_knives_only
bot_pistols_only
bot_snipers_only
bot_all_weapons
```

## 自定义地图导航

Bot 需要 `<mod>/maps/<map>.nav` 导航文件。如果自定义地图未提供该文件，请执行：

```text
bot_nav_analyze
```

导航分析可能需要一些时间，并会写入新的 `.nav` 文件。当前 ReGameDLL_CS 构建会在分析完成后重新加载生成的导航数据，无需另行重启地图。

重新分析前请备份手工编辑过的 `.nav` 文件。其他 `bot_nav_*` 命令属于高级编辑工具，建议只在测试服务器上使用。

## Bot 配置示例

在 `game_init.cfg` 中启用 Bot 后，可以把日常行为设置放入 `game.cfg`，或由服务器配置执行的独立文件中：

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

如果 `bot_*` 命令不存在或 Bot 不加入，请参阅[故障排查](../troubbleshouting/)。
