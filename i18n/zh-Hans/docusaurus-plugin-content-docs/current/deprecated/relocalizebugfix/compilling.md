---
id: relocalizebugfix-compilling
title: 构建说明
sidebar_position: 4
description: ReLocalizeBug Fix 是已废弃的 Metamod 插件，用于阻止 ReHLDS 服务器上玩家昵称和聊天中的本地化字符串漏洞。
slug: /relocalizebugfix/compilling
---

<head>
  <title>ReLocalizeBug Fix: 构建说明 | ReHLDS</title>
</head>

# 构建说明

:::warning 已废弃

此处记录仅供参考。该插件已不再维护，且与现代版本的 ReHLDS 不兼容——参见[什么是 ReLocalizeBug Fix？](./index.md)。

:::

### 检查前置条件

**Windows**

- Visual Studio，用于 `msvc/relocalizebugfix.sln`

**Linux**

- Intel C++ 编译器（`icpc`）——`Makefile` 中硬编码了 `/opt/intel/bin/icpc`，并使用了 Intel 专有的编译选项（`-static-intel`、`-no-intel-extensions`、`-ipo`、`-fasm-blocks`）。若要用 GCC 或 Clang 构建，需要把这些选项清理掉。

CSSDK 和 Metamod 头文件已内置在 `cssdk/` 和 `metamod/` 目录中，无需额外下载。该项目早于该组织在维护中的项目所使用的 CMake 与 `build.sh` 组合。

### 克隆仓库

```bash
git clone https://github.com/rehlds/relocalizebugfix.git
cd relocalizebugfix
```

### 在 Windows 上构建

在 Visual Studio 中打开 `msvc/relocalizebugfix.sln` 并开始构建。输出文件为 `relocalizebugfix_mm.dll`。

### 在 Linux 上构建

```bash
make
```

产物位于 `Release/` 目录，名为 `relocalizebugfix_mm_i386.so`。

:::note

构建好的文件已提交在仓库的 `bin/` 目录中，因此即便在项目活跃时期，也很少需要自行构建。

:::

各文件的存放位置见[安装](./installing.md)。
