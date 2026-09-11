---
id: reamxmodx
title: ReAMXModX
sidebar_position: 1
description: ReAMXModX 是 AMX Mod X 的一个过时分支，在上游尚未支持之前为其加入了 ReHLDS 与 ReGameDLL 的 API 支持。
slug: /reamxmodx
---

# 什么是 ReAMXModX？

:::warning 已废弃

ReAMXModX **已经过时**。上游的 AMX Mod X 此后加入了自己的 ReHLDS 支持，这让该分支彻底失去了存在的理由。

请使用 AlliedModders 的 [AMX Mod X](https://www.amxmodx.org/)。这个分支当年提供的一切，如今上游都有，而且有人维护、有正式发行版。

:::

ReAMXModX 是 AMX Mod X 的一个分支，于 2016 年 8 月从 `1.8.3` 开发分支（`git5067`）拉出。它的目的，是在上游对 ReHLDS 和 ReGameDLL 的 API 一无所知的年代，让 AMX Mod X 认识它们。

## 它改动了什么

该分支的提交范围很窄、目标明确。它在 AMX Mod X 核心以及数个模块中加入了面向 ReHLDS 和 ReGameDLL 接口的 SDK 胶水代码——`mod_rehlds_api.cpp` 和 `mod_gamedll_api.cpp` 出现在核心以及 `cstrike`、`csx`、`engine`、`fakemeta` 模块中——在最后一个提交中把支持程度提升到了 ReHLDS API `3.x` 和 ReGameDLL API `5.x`。

除此之外，它还带有若干修复：

- `unregister_forward` 中的内存泄漏。
- 与本地化有关的一个聊天缺陷。
- Linux 构建的数据对齐修正。

## 为什么过时

上游的 AMX Mod X 加入了 ReHLDS 支持，于是专门为此维护一个分支就不再有意义。这里的工作止于 2016 年 12 月，而且该项目从未发布过任何版本——没有可安装的文件，只有冻结在九年前 AMX Mod X 快照上的源代码。

今天去运行它，等于拿到一个 2016 年的 AMX Mod X，缺失上游此后发布的一切，只为换取上游本来就已经具备的 ReHLDS 支持。

关于它的使用方式，见[安装](./installing.md)、[设置](./settings.md)和[构建说明](./compilling.md)。
