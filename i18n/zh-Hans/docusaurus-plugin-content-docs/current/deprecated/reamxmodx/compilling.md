---
id: reamxmodx-compilling
title: 构建说明
sidebar_position: 4
description: ReAMXModX 是 AMX Mod X 的一个过时分支，在上游尚未支持之前为其加入了 ReHLDS 与 ReGameDLL 的 API 支持。
slug: /reamxmodx/compilling
---

<head>
  <title>ReAMXModX: 构建说明 | ReHLDS</title>
</head>

# 构建说明

:::warning 已废弃

此处记录仅供参考。该分支冻结在 2016 年的 AMX Mod X 快照上，且从未发布过版本——构建是获得文件的唯一途径，而这样做并没有什么好理由。参见[什么是 ReAMXModX？](./index.md)。

:::

ReAMXModX 原封不动地沿用了 AMX Mod X 的构建系统，没有增加自己的构建工具。

### 克隆仓库

```bash
git clone https://github.com/rehlds/reamxmodx.git
cd reamxmodx
```

### 在 Windows 上构建

该分支带有 Visual Studio 2012 的解决方案，每个组件一个——它的提交当年正是针对这些解决方案维护的：

| 解决方案 | 组件 |
| --- | --- |
| `amxmodx/msvc12/amxmodx_mm.sln` | AMX Mod X 核心（Metamod 插件）。 |
| `modules/<名称>/msvc12/<名称>.sln` | 各个模块——`cstrike`、`csx`、`engine`、`fakemeta`、`nvault`、`sockets` 等。 |
| `compiler/amxxpc/amxxpc.sln`、`compiler/libpc300/libpc300.sln` | Pawn 编译器。 |
| `installer/installtool/installtool.sln` | 安装工具。 |

它们需要分别构建——这里没有一个涵盖整个项目的统一解决方案。

### 在 Linux 上构建

源码树在 `amxmodx/` 和 `plugins/` 目录中带有面向 [AMBuild](https://github.com/alliedmodders/ambuild)（AlliedModders 的构建系统）的 `AMBuilder` 脚本。

:::note

这份快照的仓库根目录既没有 `configure.py` 也没有 `AMBuildScript`，而 AMBuild 通常正是以它们为入口来驱动构建的。因此，要想得到一个可用的 Linux 构建，你得自己从对应的上游 AMX Mod X 修订版（`1.8.3`，`git5067`）中补齐这套脚手架。这也是该分支如今难以构建的重要原因之一。

:::

### 构建产物

完整构建会生成核心的 `amxmodx_mm_i386.so` / `amxmodx_mm.dll`，以及每个模块各自的文件，其目录结构与上游 AMX Mod X 所期望的 `addons/amxmodx/` 完全一致。

如果你想要一个能在 ReHLDS 上工作的 AMX Mod X，请取用[上游的当前发行版](https://www.amxmodx.org/downloads-new.php)，而不是构建这份代码。
