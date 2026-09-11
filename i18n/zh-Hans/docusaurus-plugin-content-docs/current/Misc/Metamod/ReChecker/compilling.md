---
id: rechecker-compilling
title: "ReChecker: 构建说明"
sidebar_label: 构建说明
sidebar_position: 4
description: ReChecker 是一个 Metamod 插件，可按文件名和 md5 哈希校验客户端文件。
slug: /rechecker/compilling
keywords:
  - rechecker
  - metamod
  - plugin
  - compilling
  - 构建说明
tags:
  - rechecker
  - compilling
last_update:
  date: 07/21/2025
  author: STAM
---

# 构建说明

### 检查前置条件

**Windows**

- Visual Studio（C++14 标准）或更新版本

**Linux**

- CMake 3.1 或更新版本
- GCC（默认），也可选用 ICC 或 Clang

### 克隆仓库

```bash
git clone https://github.com/rehlds/ReChecker.git
cd ReChecker
```

### 在 Windows 上构建

在 Visual Studio 中打开 `msvc/rechecker.sln` 并开始构建。输出文件为 `rechecker_mm.dll`。

### 在 Linux 上构建

使用随附的 `compile.sh` 脚本，它是对 CMake 的一层封装：

```bash
./compile.sh
```

该脚本会创建 `build/` 目录，用 CMake 完成配置，然后运行 `make`。所有额外参数都会转发给 CMake，因此可以通过它们开启项目的构建选项：

```bash
./compile.sh -DDEBUG=ON               # debug build
./compile.sh -DUSE_CLANG_COMPILER=ON  # build with Clang instead of GCC
./compile.sh -DUSE_INTEL_COMPILER=ON  # build with ICC
```

Linux 构建的输出文件为 `rechecker_mm_i386.so`。

关于各文件在服务器上的存放位置，见[安装](./installing.md)。
