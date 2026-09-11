---
id: reamxmodx-credits
title: 致谢
sidebar_position: 5
description: ReAMXModX 是 AMX Mod X 的一个过时分支，在上游尚未支持之前为其加入了 ReHLDS 与 ReGameDLL 的 API 支持。
slug: /reamxmodx/credits
---

<head>
  <title>ReAMXModX: 致谢 | ReHLDS</title>
</head>

# 致谢

ReAMXModX 是 **AMX Mod X** 的一个分支，后者由 [AlliedModders](https://www.amxmodx.org/) 创建并维护。本仓库中绝大部分实质性工作都归属于他们；该分支只是在 2016 年 8 月的 `1.8.3` 开发分支快照（`git5067`）之上，添加了面向 ReHLDS 和 ReGameDLL 的 SDK 胶水代码。

AMX Mod X 所附带的 Pawn 抽象机与编译器，© ITB CompuPhase，1997–2005。

:::warning 已废弃

该分支**已经过时**——上游的 AMX Mod X 原生支持 ReHLDS。请使用 [AMX Mod X](https://www.amxmodx.org/)。

:::

## 项目链接

- [源代码仓库](https://github.com/rehlds/reamxmodx)
- [ReHLDS 组织](https://github.com/rehlds)
- [AMX Mod X（上游）](https://www.amxmodx.org/) —— [源代码](https://github.com/alliedmodders/amxmodx)

该分支没有发行页面、没有更新日志，问题区也没有任何活动。

## 许可证

许可方式沿用上游的 AMX Mod X。许可证文本位于仓库的 `public/licenses/` 目录中——`LICENSE.txt` 以及 GPL v2 和 v3 的副本，另有面向所附 Pawn 编译器的 `ACKNOWLEDGEMENTS.txt`。在分发任何基于这份源码树构建的产物之前，请查阅这些文件以及上游的 AMX Mod X。

Valve、Half-Life、Counter-Strike 及相关名称和素材归各自所有者所有。

## 如何参与

本分支不再接受新的工作。请参与[上游的 AMX Mod X](https://github.com/alliedmodders/amxmodx)；若要在现代服务器上从 Pawn 访问 ReHLDS 和 ReGameDLL_CS 的内部实现，请参与 [ReAPI](/zh-Hans/docs/reapi)。
