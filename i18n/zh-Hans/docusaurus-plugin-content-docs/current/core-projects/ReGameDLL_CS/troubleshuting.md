---
id: regamedll-cs-troubbleshouting
title: 故障排查
sidebar_position: 6
description: 常见的 ReGameDLL_CS 安装、配置和 Bot 问题。
slug: /regamedll-cs/troubbleshouting
---

# 故障排查

## `game version` 未显示 ReGameDLL

服务器可能仍在加载旧的 GameDLL。

1. 完全停止服务器。
2. 确认已将对应操作系统的二进制文件复制到 `cstrike/dlls` 或 `czero/dlls`。
3. 检查服务器是否使用了你修改的游戏目录（`-game cstrike` 或 `-game czero`）。
4. 启动服务器并在控制台执行 `game version`。

在 Linux 上还应检查文件所有者和读取权限。官方服务器二进制文件是 32 位的，因此主机需要安装对应的 32 位运行库。

## Bot 命令不存在

在专用服务器上，必须在 GameDLL 初始化之前设置 `bot_enable`。

1. 在 `cstrike/game_init.cfg` 或 `czero/game_init.cfg` 中设置 `bot_enable "1"`。
2. Counter-Strike 1.6 还需把官方 `bot_profiles.zip` 的内容安装到 `cstrike`。
3. 完整重启服务器；启动后再修改该 CVar 不会生效。

不要在命令行添加 `-bots` 或 `-host-improv`，这些旧参数已经被 CVar 取代。

## Bot 已启用但不加入

检查以下设置的实际值：

```text
bot_quota
bot_quota_mode
bot_join_after_player
bot_join_team
```

可以使用下面的简单配置进行测试：

```cfg
bot_quota_mode "normal"
bot_quota "4"
bot_join_after_player "0"
bot_join_team "any"
```

然后切换地图或重启服务器。也可以手动执行 `bot_add`，以区分是配额问题，还是缺少 Bot 数据或导航。

## 缺少 Bot 配置或名称

Counter-Strike 1.6 并不自带全部 Condition Zero Bot 数据。请把上游的 `regamedll/extra/zBot/bot_profiles.zip` 解压到 `cstrike`，并保持其目录结构不变。如果在 `bot_add` 中指定了配置名称，该名称必须存在于已安装的配置数据库中。

## Bot 无法在自定义地图中导航

地图可能没有兼容的导航网格。启动该地图，添加一个 Bot，然后在服务器控制台执行 `bot_nav_analyze`。分析过程可能会明显占用 CPU。用于生产服务器前，请保存或重新加载生成的导航数据。

## 替换 GameDLL 后服务器崩溃

- 暂时禁用所有 Metamod 插件，单独测试 ReGameDLL_CS。
- 将 ReHLDS、Metamod-R 和插件更新到兼容版本。
- 除非插件文档明确支持 ReGameDLL_CS，否则移除修改固定地址或依赖 Valve GameDLL 偏移量的插件。
- 如果 `delta.lst` 被误替换为不兼容版本，请恢复发行包中的文件。

## 某项设置未生效

- 将 `bot_enable` 等初始化设置放入 `game_init.cfg`，并完整重启服务器进程。
- 将游戏设置放入 `game.cfg`，或地图加载后执行的其他配置文件。
- 搜索后续配置文件是否再次设置了同一 CVar；最后一次赋值会生效。
- 更新时将自己的配置与当前发行包比较，因为新版本可能增加 CVar 或调整默认值。

## 报告问题

提交问题前请收集：

- `game version` 的输出；
- ReHLDS/HLDS、Metamod 和 ReGameDLL_CS 的版本；
- 操作系统和游戏目录；
- 插件列表；
- 相关控制台日志以及可复现问题的最小配置。

可稳定复现的 ReGameDLL_CS 问题请提交到[上游问题跟踪器](https://github.com/rehlds/ReGameDLL_CS/issues)。
