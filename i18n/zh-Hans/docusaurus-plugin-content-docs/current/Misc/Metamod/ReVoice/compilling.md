---
id: revoice-compilling
title: 构建说明
sidebar_position: 4
description: ReVoice 是一个 Metamod 插件，作为语音转码器修复 ReHLDS 服务器上非 Steam 与 Steam 客户端之间的语音聊天。
slug: /revoice/compilling
---

<head>
  <title>ReVoice: 构建说明 | ReHLDS</title>
</head>

# 构建说明

与 ReHLDS 组织的其他插件不同，ReVoice 使用的不是 `build.sh` 封装，而是现代的 CMake（3.21+）加 [CMake 预设](https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html)。

### 检查前置条件

- CMake 3.21 或更新版本
- [Ninja](https://ninja-build.org/)（Ninja Multi-Config 预设会用到）
- Windows：Visual Studio 2022 或 Clang
- Linux：GCC 或 Clang

Speex、SILK、Opus、`rehlsdk` 和 Metamod SDK 等依赖已内置在 `external/` 目录中——没有需要初始化的 git 子模块。

### 克隆仓库

```bash
git clone https://github.com/rehlds/ReVoice.git
cd ReVoice
```

### 在 Linux 上构建

```bash
cmake --preset ninja-gcc-linux
cmake --build --preset ninja-gcc-linux-release
```

要改用 Clang，把 `gcc` 换成 `clang` 即可（`ninja-clang-linux`）。如果你不想自己配置工具链，仓库中还提供了开箱即用的开发容器（`.devcontainer/`，Ubuntu 24.04，含 GCC 与 Clang）。

### 在 Windows 上构建

```powershell
cmake --preset vs2022-msvc-windows
cmake --build --preset vs2022-msvc-windows-release
```

要改用 Clang，把 `msvc` 换成 `clang` 即可（`vs2022-clang-windows`）。也可以在执行完 `cmake --preset` 之后直接打开生成的 Visual Studio 解决方案。

### 构建产物

两个平台分别生成 `revoice_mm.dll`（Windows）或 `revoice_mm_i386.so`（Linux），位于 `bin/<编译器>-<配置>/` 目录下。关于它在服务器上的存放位置，见[安装](./installing.md)。
