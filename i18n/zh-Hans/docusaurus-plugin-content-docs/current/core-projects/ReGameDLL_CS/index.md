---
id: regamedll-cs
title: ReGameDLL_CS
sidebar_position: 1
description: 面向服务器管理员和开发者的 ReGameDLL_CS 最新简介、兼容性说明、下载地址和后续指引。
slug: /regamedll-cs
---

# ReGameDLL_CS

ReGameDLL_CS 是经过逆向重构并持续维护的 Counter-Strike 服务端 GameDLL 替代实现，在 Windows 上对应 `mp.dll`，在 Linux 上对应 `cs.so`。它基于 HLDS build 6153 beta 中原始的 Counter-Strike GameDLL，提供错误修复、新的服务器设置、内置 Bot 支持，以及供模组和插件使用的扩展 API。

本项目支持以下 Valve 官方服务端游戏内容：

- Counter-Strike 1.6（`cstrike`）
- Counter-Strike: Condition Zero（`czero`）

生产服务器应使用[最新稳定版本](https://github.com/rehlds/ReGameDLL_CS/releases/latest)。开发版可从上游 [GitHub Actions 工作流](https://github.com/rehlds/ReGameDLL_CS/actions/workflows/build.yml)获取，但其中可能包含尚未进入稳定版本的改动。

## ReGameDLL_CS 提供的功能

- 游戏逻辑和服务端错误修复。
- 更多游戏规则和可配置 CVar。
- 内置 zBot 支持，包括 Bot 配额模式和导航工具。
- 改进的 Condition Zero 人质 AI，也可安装到 CS 1.6。
- `game version`、`endround`、`swapteams` 等新服务器命令。
- 供 [ReAPI](https://github.com/rehlds/ReAPI) 等项目使用的扩展 GameDLL API。

完整且持续更新的设置列表以官方 [`game.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game.cfg) 为准。

## 兼容性警告

:::warning 二进制兼容性

ReGameDLL_CS 使用了不同的编译器，因此与 Valve 原版 GameDLL 不具备二进制兼容性。通过签名或偏移量扫描、修改原版二进制文件的插件（例如部分基于 Orpheu 的插件）可能失效或导致服务器崩溃。

请优先使用 ReAPI 等受支持的 API，并在部署到生产服务器前测试所有依赖二进制细节的插件。

:::

使用已公开接口的普通 AMX Mod X 和 Metamod 插件通常不受此警告影响。

## 发行包中的文件

稳定版 `regamedll-bin-*.zip` 中分别包含 `win32` 和 `linux32` 构建：

| 平台 | GameDLL | 发行包路径 |
| --- | --- | --- |
| Windows | `mp.dll` | `bin/win32/cstrike/dlls/mp.dll` |
| Linux x86 | `cs.so` | `bin/linux32/cstrike/dlls/cs.so` |

每个平台目录还包含 `game.cfg`、`game_init.cfg` 和 `delta.lst`。CS 1.6 所需的 zBot 配置和声音资源需单独下载，参见 [Bot 使用指南](./bots/)。

## 接下来可以做什么

- [安装或更新 ReGameDLL_CS](./install/)
- [配置游戏规则和服务器命令](./settings/)
- [安装和使用 zBot](./bots/)
- [从源代码构建 ReGameDLL_CS](./compilling/)
- [排查服务器问题](./troubbleshouting/)

安装完成后，在服务器控制台执行：

```text
game version
```

安装成功时，命令会显示 ReGameDLL_CS 的构建版本、构建日期和项目地址。
