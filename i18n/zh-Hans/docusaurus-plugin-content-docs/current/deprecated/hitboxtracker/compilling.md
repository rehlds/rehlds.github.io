---
id: hitboxtracker-compilling
title: 构建说明
sidebar_position: 4
description: hitboxtracker 是 ReHLDS 的已废弃开发工具，用于在客户端绘制服务器计算出的碰撞框位置。
slug: /hitboxtracker/compilling
---

<head>
  <title>hitboxtracker: 构建说明 | ReHLDS</title>
</head>

# 构建说明

:::warning 已废弃

此处记录仅供参考。hitboxtracker 已不再维护——参见[什么是 hitboxtracker？](./index.md)。

:::

### 检查前置条件

- Visual Studio，需支持该解决方案中的三个 C++ 目标。

HLSDK 和 Metamod 头文件已内置在 `dep/` 目录中，无需额外下载。

### 克隆仓库

```bash
git clone https://github.com/rehlds/hitboxtracker.git
cd hitboxtracker
```

### 构建

在 Visual Studio 中打开 `msvc/hitboxtracker.sln` 并开始构建。解决方案包含三个项目，对应该工具的三个组成部分：

| 项目 | 产物 | 运行位置 |
| --- | --- | --- |
| `server` | `hitboxtracker_mm.dll` | 服务器，作为 Metamod 插件。 |
| `client` | `hitboxtracker.dll` | 游戏客户端，作为绘制模块。 |
| `launcher` | `cs.exe` | 游戏客户端，用于加载该模块。 |

:::note

仓库中只有 Visual Studio 解决方案——与该组织的其他项目不同，这里没有 CMake 配置，也没有 `build.sh`。尽管如此，发布的版本中仍包含一个 Linux 服务器文件（`hitboxtracker_mm_i386.so`），它是在这个解决方案之外构建的。

:::

各产物的存放位置见[安装](./installing.md)。
