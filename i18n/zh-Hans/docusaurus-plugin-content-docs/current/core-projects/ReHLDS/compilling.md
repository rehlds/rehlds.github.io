---
id: rehlds-compilling
title: 构建说明
sidebar_position: 5
description: ReHLDS 是对原版 HLDS 重新工程化后的版本，为 Half-Life、Counter-Strike 1.6 等游戏提供更强的安全性、性能和模组能力。
slug: /rehlds/compilling
---

<head>
  <title>ReHLDS: 构建说明 | ReHLDS</title>
</head>

# 构建说明

大多数服务器管理员使用[官方发行版](https://github.com/rehlds/ReHLDS/releases)即可。只有在你参与 ReHLDS 开发、需要验证尚未发布的改动，或者需要定制构建时，才需要从源代码编译。

### 检查前置条件

构建 ReHLDS 需要若干软件：

**Windows**

- Visual Studio 2015（C++14 标准）或更新版本

**Linux**

- CMake 3.10 或更新版本
- 以下编译器之一：GCC 4.9.2+、ICC 15.0.1 20141023+ 或 Clang（LLVM）6.0+

### 克隆仓库

```bash
git clone https://github.com/rehlds/ReHLDS.git
cd ReHLDS
```

### 在 Windows 上构建

在 Visual Studio 中打开 `msvc/ReHLDS.sln`，从解决方案配置中选择 `Release Swds`（调试构建则选 `Debug Swds`），然后开始构建。

:::note

CMake 不支持在 Windows 上构建——`CMakeLists.txt` 会故意报错，并提示你改用 `msvc/ReHLDS.sln`。CMake 仅用于 Linux 构建。

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

#### 检查构建环境（Debian / Ubuntu）

```bash
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install -y gcc-multilib g++-multilib
sudo apt-get install -y build-essential
sudo apt-get install -y libc6-dev libc6-dev-i386
sudo apt-get install -y cmake
```

然后选择一个编译器：

```bash
sudo apt-get install -y gcc g++
# 或者
sudo apt-get install -y clang
```

### 运行单元测试

项目的 CI 会在常规构建之前，使用专门的 CMake 构建类型编译并运行单元测试套件：

```bash
cmake -DCMAKE_BUILD_TYPE=Unittests -B build
cmake --build build -j8
LD_LIBRARY_PATH="rehlds/lib/linux32:$LD_LIBRARY_PATH" ./build/rehlds/engine_i486
```

退出码为 `0` 或 `3` 表示测试通过；其他任何退出码都表示测试失败。

### 构建产物

Linux 上构建成功后会在 `build/` 目录下生成 `engine_i486.so`（以及专用服务器、HLTV 和文件系统相关的二进制文件），其目录结构与[安装](./installing.md)时替换的一致。在 Windows 上，生成的 DLL 和 EXE 位于对应的 `msvc/<配置名>` 目录中。
