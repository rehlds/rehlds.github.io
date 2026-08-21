---
id: regamedll-cs-install
title: 安装与更新
sidebar_position: 2
description: 在 Counter-Strike 1.6 和 Condition Zero 服务器上安装或更新当前版本的 ReGameDLL_CS。
slug: /regamedll-cs/install
---

# 安装与更新

以下步骤适用于 Windows 和 32 位 Linux 上的 Counter-Strike 1.6、Counter-Strike: Condition Zero 专用服务器。

## 开始之前

1. 完全停止服务器。
2. 备份目标模组目录（`cstrike` 或 `czero`），尤其是 `dlls` 目录和配置文件。
3. 从[最新稳定版本](https://github.com/rehlds/ReGameDLL_CS/releases/latest)下载 `regamedll-bin-*.zip`。

:::note

发行页面还提供 `.zip.asc` 文件。它是用于验证的签名文件，不是服务器安装包。

:::

## 选择正确的平台版本

| 服务器平台 | 压缩包内目录 | 主文件 |
| --- | --- | --- |
| Windows | `bin/win32/cstrike` | `dlls/mp.dll` |
| Linux x86 | `bin/linux32/cstrike` | `dlls/cs.so` |

发行包对两款受支持游戏都使用 `cstrike` 目录名。安装到 Condition Zero 时，请把该目录的内容复制到服务器的 `czero` 目录。

## 在 Windows 上安装

1. 打开下载包中的 `bin/win32/cstrike`。
2. 把其中内容复制到目标模组目录：
   - CS 1.6：`<server>/cstrike`
   - Condition Zero：`<server>/czero`
3. 确认 `<mod>/dlls/mp.dll` 已被替换。
4. 按下文说明合并配置文件。

## 在 Linux 上安装

解压发行包，然后把 Linux 构建复制到目标模组目录。例如安装到 CS 1.6：

```bash
unzip regamedll-bin-*.zip
cp -a bin/linux32/cstrike/. /path/to/server/cstrike/
```

Condition Zero 应改用 `/path/to/server/czero/`。确认 `<mod>/dlls/cs.so` 已被替换，并且运行服务器的账户具有读取权限。

## 合并配置文件

不要直接覆盖已经自定义过的配置。

| 文件 | 用途 |
| --- | --- |
| `game.cfg` | ReGameDLL_CS 游戏设置和扩展 CVar。 |
| `game_init.cfg` | `bot_enable`、`hostage_ai_enable` 等 GameDLL 早期初始化设置。 |
| `delta.lst` | 当前构建附带的网络 Delta 定义，应与发行版本保持一致。 |

首次安装时复制这三个文件。更新时：

1. 使用发行包中的版本替换 GameDLL 和 `delta.lst`。
2. 将自己的 `game.cfg`、`game_init.cfg` 与新版进行比较。
3. 在保留自定义值的同时，合并新增的 CVar 和注释。

最新的官方模板是 [`game.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game.cfg) 和 [`game_init.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game_init.cfg)。

## 启动并验证

启动服务器，然后执行：

```text
game version
```

如果命令不存在，说明新的 GameDLL 没有被加载。请检查平台版本、目标模组目录、文件权限，以及模组 `liblist.gam` 中的 `gamedll` / `gamedll_linux` 配置。

## 更新现有安装

更新流程与首次安装相同：停止服务器、备份文件、替换正确的 GameDLL 和 `delta.lst`、合并配置改动，最后使用 `game version` 验证。

更新前请阅读[发行说明](https://github.com/rehlds/ReGameDLL_CS/releases)。新版本可能增加 CVar，或改变影响 ReAPI、服务器插件的 API 行为。

## 可选的 Beta 模式

ReGameDLL_CS 保留了一个可选的 Beta 模式，其中包含来自 Valve 官方 Counter-Strike 版本的最新改动。只有在确实需要测试该模式时，才应向 HLDS 启动命令添加 `-beta`。用于生产服务器前，请先测试插件兼容性。
