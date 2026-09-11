---
id: rehlds-supported-games
title: 支持的游戏
sidebar_position: 1
description: ReHLDS 是对原版 HLDS 重新工程化后的版本，为 Half-Life、Counter-Strike 1.6 等游戏提供更强的安全性、性能和模组能力。
slug: /rehlds/supported-games
---

<head>
  <title>ReHLDS: 支持的游戏 | ReHLDS</title>
</head>

# 支持的游戏

ReHLDS 替换的是 HLDS **引擎**本身（`swds.dll` / `engine_i486.so`），而不是某个具体模组的 GameDLL。因此，「支持哪些游戏」实际上取决于两点：ReHLDS 兼容哪个 HLDS 构建，以及你在哪个平台上运行它。任何能在该 HLDS 构建上运行的 GoldSrc 模组——Half-Life、Counter-Strike 1.6、Condition Zero、Day of Defeat、Team Fortress Classic、Deathmatch Classic 以及第三方模组——同样可以运行在 ReHLDS 之上。

## 引擎构建兼容性

| HLDS 构建 | 状态 |
| --- | --- |
| 周年更新前的 Steam 构建（引擎版本 ≤ 8684），通过 `steamcmd` 下载 | :heavy_check_mark: 完全支持 |
| 通过旧版 `hldsupdatetool` 下载的 5xxx 及更早构建 | :x: 不兼容 |

:::warning

ReHLDS 与通过 `hldsupdatetool` 安装的 5xxx 及更早平台不兼容。在反馈问题之前，请先确认你运行的是[安装](./installing.md)一节中所说的周年更新前构建。

:::

## 平台支持

| 平台 | 引擎文件 | 处理器要求 |
| --- | --- | --- |
| Windows | `swds.dll` | SSE、SSE2、SSE3（在可用时会使用 SSE4.1 / SSE4.2） |
| Linux（32 位） | `engine_i486.so` | SSE、SSE2、SSE3（在可用时会使用 SSE4.1 / SSE4.2） |

ReHLDS 与 **ReHLTV** 一同打包分发。ReHLTV 是 Half-Life TV 代理／转播服务的增强构建，因此使用 HLTV 的部署无需单独下载即可获得同样的修复和更高的上限。

## 模组与插件兼容性

由于 ReHLDS 只替换引擎层，模组层面的兼容性（GameDLL、Metamod 插件、AMX Mod X 插件）通常由模组和插件本身决定，而不取决于 ReHLDS。有两点值得注意：

- ReHLDS 与原版 HLDS **不是二进制兼容**的——它使用与 Valve 原始文件不同的编译器构建。对引擎做底层二进制修补或特征码扫描的插件（例如 Orpheu）可能无法正常工作，需要显式支持 ReHLDS。
- 某个模组与 [Metamod-R](/zh-Hans/docs/metamod-r/supported-games) 或 [ReGameDLL_CS](/zh-Hans/docs/regamedll-cs/supported-games) 搭配时的最新兼容状态，请查看对应项目自己的「支持的游戏」页面——这些层直接位于 ReHLDS 之上。
