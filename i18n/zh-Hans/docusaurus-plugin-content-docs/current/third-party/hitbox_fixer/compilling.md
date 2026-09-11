---
id: hitbox-fixer-compilling
title: 构建说明
sidebar_position: 4
description: Hitbox Fixer 是第三方 Metamod 插件，修复 Counter-Strike 1.6、Half-Life 和 Adrenaline Gamer 中服务端玩家碰撞框错位的问题。
slug: /hitbox-fixer/compilling
---

<head>
  <title>Hitbox Fixer: 构建说明 | ReHLDS</title>
</head>

# 构建说明

大多数服务器管理员使用[发行版构建](https://github.com/Garey27/hitbox_fixer/releases)即可。只有在你要验证尚未发布的改动，或者需要定制构建时，才需要从源代码编译。

项目使用纯 CMake——没有 `build.sh` 封装。所需的 SDK 头文件已内置在 `include/` 目录中。

### 检查前置条件

- CMake 3.18 或更新版本
- 32 位工具链——插件面向 `i386` 构建，因此 64 位主机需要 multilib 软件包
- Linux：GCC 或 Clang，以及 Ninja（项目 CI 所使用的）
- Windows：带 Win32 平台工具集的 Visual Studio

#### 检查构建环境（Debian / Ubuntu）

```bash
sudo apt-get update
sudo apt-get install -y git gcc-multilib g++-multilib ninja-build cmake
```

### 克隆仓库

```bash
git clone https://github.com/Garey27/hitbox_fixer.git
cd hitbox_fixer
```

### 在 Linux 上构建

```bash
cmake -B build -G Ninja -DCMAKE_BUILD_TYPE=Release
cmake --build build --config Release --parallel
```

### 在 Windows 上构建

必须显式指定 Win32 平台——默认的 64 位配置不会生成可用的插件：

```powershell
cmake -B build -A Win32 -DCMAKE_BUILD_TYPE=Release
cmake --build build --config Release --parallel
```

### 构建产物

构建会在 Linux 上生成 `hitbox_fix_mm_i386.so`，在 Windows 上生成 `hitbox_fix_mm.dll`。关于它们在服务器上的存放位置，见[安装](./installing.md)，并把 `dist/hbf.cfg` 一并复制过去。
