---
id: regamedll-cs-supported-games
title: 支持的游戏和平台
sidebar_position: 3
description: ReGameDLL_CS 支持的游戏、操作系统和引擎。
slug: /regamedll-cs/supported-games
---

# 支持的游戏和平台

ReGameDLL_CS 是适用于 GoldSrc 版 Counter-Strike 和 Counter-Strike: Condition Zero 的服务端 GameDLL。

## 支持的游戏

| 游戏 | 游戏目录 | 说明 |
| --- | --- | --- |
| Counter-Strike 1.6 | `cstrike` | 完整支持。若要使用内置 Bot，需要额外安装 zBot 数据包。 |
| Counter-Strike: Condition Zero | `czero` | 完整支持。游戏已自带 Bot 资源。 |

ReGameDLL_CS 不能直接用于其他 GoldSrc 模组。请勿将其安装到 `valve`、`dod`、`tfc` 等目录。

## 支持的服务器平台

官方发行包为两个主要平台提供 32 位服务器二进制文件：

| 平台 | GameDLL |
| --- | --- |
| Windows | `dlls/mp.dll` |
| Linux | `dlls/cs.so` |

各平台文件分别位于发行包的 `bin/win32` 和 `bin/linux32` 中。请将相应目录的内容复制到游戏目录。

ReGameDLL_CS 只替换游戏逻辑。服务器仍需兼容的 GoldSrc 引擎（例如当前 Steam HLDS 或 ReHLDS）以及原版游戏资源。

## 引擎和客户端兼容性

- 专用服务器推荐使用 ReHLDS，但 ReGameDLL_CS 也可以在兼容的 Steam HLDS 环境中运行。
- 玩家通常不需要安装 ReGameDLL_CS，因为它是纯服务端替代组件。
- GameDLL、引擎、Metamod 和服务器插件应一起保持更新。修改二进制文件的旧插件可能依赖 Valve 原版 GameDLL 的偏移量，因而不兼容。
- Xash3D 等替代引擎属于其他项目，其兼容性可能与官方 Steam/ReHLDS 环境不同，请查阅相应引擎项目的说明。
