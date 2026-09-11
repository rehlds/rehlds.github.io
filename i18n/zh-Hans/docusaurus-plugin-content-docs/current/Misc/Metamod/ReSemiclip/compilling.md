---
id: resemiclip-compilling
title: 构建说明
sidebar_position: 4
description: ReSemiclip 是一个 Metamod 插件，用于控制玩家之间能否互相穿过。参考实现为 `joaquimandrade` 的 Semiclip 模块。
slug: /resemiclip/compilling
---

<head>
  <title>ReSemiclip: 构建说明 | ReHLDS</title>
</head>

# 构建说明

### 检查前置条件

**Windows**

- Visual Studio（C++14 标准）或更新版本

**Linux**

- CMake 3.1 或更新版本
- 以下之一：GCC（默认）、ICC 或 Clang

### 克隆仓库

```bash
git clone https://github.com/rehlds/ReSemiclip.git
cd ReSemiclip
```

### 在 Windows 上构建

在 Visual Studio 中打开 `msvc/resemiclip.sln` 并开始构建。输出文件为 `resemiclip_mm.dll`。

### 在 Linux 上构建

使用随附的 `build.sh` 脚本：

```bash
./build.sh --compiler=[gcc|icc|clang] --jobs=[N]
```

例如：

```bash
./build.sh --compiler=gcc --jobs=4    # GCC
./build.sh --compiler=intel           # ICC
./build.sh --compiler=clang           # Clang / LLVM
```

也可以通过 `build.sh` 以 `-D<选项>=[ON|OFF]` 的形式传递 CMake 定义：

| 定义 | 作用 |
| --- | --- |
| `DEBUG` | 启用调试构建。 |
| `USE_STATIC_LIBSTDC` | 静态链接 `libstdc++`。 |

Linux 构建的输出文件为 `resemiclip_mm_i386.so`。

关于各文件在服务器上的存放位置，见[安装](./installing.md)；如果你要验证配置格式方面的改动，请把 `dist/config.ini` 和 `dist/maps/` 也一并复制过去。
