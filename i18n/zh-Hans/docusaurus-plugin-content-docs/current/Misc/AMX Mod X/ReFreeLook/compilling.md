---
id: refreelook-compilling
title: "ReFreeLook: 构建说明"
sidebar_label: 构建说明
sidebar_position: 4
description: ReFreeLook 是一个 AMX Mod X 模块，让观战的管理员可以使用任意视角模式，而不受 `mp_forcecamera` 或 `mp_forcechasecam` 取值的限制。仅适用于最新版 `ReGameDLL_CS`。
slug: /refreelook/compilling
keywords:
  - refreelook
  - AMX Mod X
  - amxx
  - amx
  - module
  - compilling
tags:
  - refreelook
  - compilling
last_update:
  date: 07/21/2025
  author: STAM
---

# 构建说明

与 ReHLDS 组织的其他插件不同，ReFreeLook 在 Linux 上使用普通的 `Makefile` 构建（不用 CMake），在 Windows 上则使用 Visual Studio 解决方案。它所需的 Metamod 和 CSSDK 头文件已内置在 `include/` 目录中——无需额外下载。

### 检查前置条件

**Windows**

- Visual Studio（C++11 标准）或更新版本

**Linux**

- Intel C++ 编译器（`icpc`），或者在调整了 Makefile 中 `COMPILER` 变量后使用 Clang/GCC

### 克隆仓库

```bash
git clone https://github.com/rehlds/ReFreeLook.git
cd ReFreeLook
```

### 在 Windows 上构建

在 Visual Studio 中打开 `msvc/refreelook.sln` 并开始构建。输出文件为 `refreelook_amxx.dll`。

### 在 Linux 上构建

`Makefile` 默认使用 Intel 编译器（`/opt/intel/bin/icpc`）。如果你没有安装 ICC，可在命令行覆盖 `COMPILER`：

```bash
make COMPILER=clang
```

如果连 Clang 也没有，稍微改一下 Makefile 后 GCC 同样可用——Makefile 中的编译选项是专门针对 ICC 和 Clang 写的。构建产物为 `Release/` 目录下的 `refreelook_amxx_i386.so`。

```bash
make clean   # 删除构建产物
```

关于该文件在服务器上的存放位置，见[安装](./installing.md)。
