---
id: reapi-compilling
title: 构建说明
sidebar_position: 4
description: ReAPI 是一个 AMXModX 模块，为 ReHLDS、ReGameDLL 以及 Metamod 插件（例如 ReUnion、ReVoice）提供 API。
slug: /reapi/compilling
---

<head>
  <title>ReAPI: 构建说明 | ReHLDS</title>
</head>

# 构建说明

大多数用户使用[官方发行版](https://github.com/rehlds/ReAPI/releases)即可。只有在你参与 ReAPI 本身的开发、需要验证尚未发布的改动，或者需要定制构建时，才需要从源代码编译。

### 检查前置条件

构建 ReAPI 需要若干软件：

**Windows**

- Visual Studio 2015（C++14 标准）或更新版本

**Linux**

- Git 1.8.5 或更新版本
- CMake 3.10 或更新版本
- 以下编译器之一：GCC 4.9.2+、ICC 15.0.1 20141023+ 或 Clang（LLVM）6.0+

### 克隆仓库

```bash
git clone https://github.com/rehlds/ReAPI.git
cd ReAPI
```

### 在 Windows 上构建

在 Visual Studio 中打开 `msvc/reapi.sln`，从解决方案配置中选择 `Release`（或 `Debug`），然后开始构建。输出文件为 `reapi_amxx.dll`。

:::note

CMake 不支持在 Windows 上构建——`CMakeLists.txt` 会故意报错，并提示你改用 `msvc/reapi.sln`。CMake 仅用于 Linux 构建。

:::

### 在 Linux 上构建

使用随附的 `build.sh` 脚本，可按需指定编译器和并行任务数：

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

Linux 构建的输出文件为 `reapi_amxx_i386.so`。

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

### 准备自定义构建

发行包中除模块文件外，还附带了来自 `reapi/extra/amxmodx/scripting/include/` 的 Pawn 头文件——如果你测试的构建改动了公开 API，请把它们一并复制。各文件在服务器上的存放位置见[安装](./installing.md)。
