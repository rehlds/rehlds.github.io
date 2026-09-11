---
id: reunion-compilling
title: 构建说明
sidebar_position: 4
description: ReUnion 是一个 Metamod 插件，让使用协议 47 和 48 的非 Steam 客户端能够连接到 ReHLDS 服务器。
slug: /reunion/compilling
---

<head>
  <title>ReUnion: 构建说明 | ReHLDS</title>
</head>

# 构建说明

### 检查前置条件

**Windows**

- Visual Studio 2015（C++14 标准）或更新版本

**Linux**

- CMake 3.10 或更新版本
- 以下编译器之一：GCC 4.9.2+、ICC 15.0.1 20141023+ 或 Clang（LLVM）6.0+

### 克隆仓库

```bash
git clone https://github.com/rehlds/ReUnion.git
cd ReUnion
```

### 在 Windows 上构建

在 Visual Studio 中打开 `msvc/Reunion.sln`，选择 `Release`（或 `Debug`）配置并开始构建。输出文件为 `reunion_mm.dll`。

:::note

CMake 不支持在 Windows 上构建——`CMakeLists.txt` 会故意报错，并提示你改用 `msvc/Reunion.sln`。CMake 仅用于 Linux 构建。

:::

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
| `DEBUG` | 启用调试模式。 |
| `USE_STATIC_LIBSTDC` | 静态链接 `libstdc++`。 |

#### 检查构建环境（Debian / Ubuntu）

```bash
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install -y gcc-multilib g++-multilib
sudo apt-get install -y build-essential
sudo apt-get install -y libc6-dev libc6-dev-i386
```

然后选择一个编译器：

```bash
sudo apt-get install -y gcc g++
# 或者
sudo apt-get install -y clang
```

Linux 构建的输出文件为 `reunion_mm_i386.so`。关于各文件和 `reunion.cfg` 在服务器上的存放位置，见[安装](./installing.md)。
