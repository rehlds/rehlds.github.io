---
id: regamedll-cs-compilling
title: 从源代码构建
sidebar_position: 7
description: 在 Windows 或 Linux 上从源代码构建 ReGameDLL_CS。
slug: /regamedll-cs/compilling
---

# 从源代码构建

大多数服务器管理员应直接使用官方发行版。只有在开发 ReGameDLL_CS、测试尚未发布的改动或需要自定义构建配置时，才建议从源代码构建。

## 环境要求

- Git 1.8.5 或更高版本
- CMake 3.10 或更高版本
- Windows：Visual Studio 2015 或更高版本
- Linux：GCC 4.9.2 或更高版本，或 Clang 6 或更高版本
- 能够生成 32 位二进制文件的工具链，以及对应的 32 位开发库

如果较新的分支提高了最低版本要求，请检查上游 README 和 CI 配置。

## 克隆仓库

```bash
git clone --recursive https://github.com/rehlds/ReGameDLL_CS.git
cd ReGameDLL_CS
```

如果克隆时没有使用 `--recursive`，请在构建前初始化子模块：

```bash
git submodule update --init --recursive
```

## Windows

使用 Visual Studio 打开 `msvc/ReGameDLL.sln`，选择需要的配置并构建解决方案。生成的 `mp.dll` 即为服务器 GameDLL。

## Linux

仓库提供的 `build.sh` 是受支持的构建入口：

```bash
./build.sh --compiler=gcc --jobs=4
```

使用 Clang 构建：

```bash
./build.sh --compiler=clang --jobs=4
```

项目还记录了以下实用环境选项：

```bash
DEBUG=1 ./build.sh --compiler=gcc --jobs=4
USE_STATIC_LIBSTDC=1 ./build.sh --compiler=gcc --jobs=4
```

`DEBUG=1` 会生成调试构建。平台支持时，`USE_STATIC_LIBSTDC=1` 会静态链接 C++ 标准库。

## 部署自定义构建

请先将生成的 GameDLL 复制到测试服务器：

- Windows：`cstrike/dlls/mp.dll` 或 `czero/dlls/mp.dll`
- Linux：`cstrike/dlls/cs.so` 或 `czero/dlls/cs.so`

部署到生产环境前，请备份之前的二进制文件，并在不加载第三方插件的情况下测试。源代码快照可能包含尚未经过稳定发行周期验证的改动。
