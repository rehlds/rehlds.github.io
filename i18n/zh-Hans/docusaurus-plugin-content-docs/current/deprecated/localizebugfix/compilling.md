---
id: localizebugfix-compilling
title: 构建说明
sidebar_position: 4
description: LocalizeBug Fix 是 s1lentq 编写的 Metamod 插件（已归档），用于阻止 HLDS 上玩家昵称和聊天中的本地化字符串漏洞。
slug: /localizebugfix/compilling
---

<head>
  <title>LocalizeBug Fix: 构建说明 | ReHLDS</title>
</head>

# 构建说明

:::warning 已废弃

此处记录仅供参考。该仓库已在 GitHub 上归档，不再接受 Pull Request——参见[什么是 LocalizeBug Fix？](./index.md)。

:::

### 检查前置条件

**Windows**

- Visual Studio，用于 `msvc/localizebugfix.sln`

**Linux**

- Intel C++ 编译器（`icpc`）——`Makefile` 中硬编码了 `/opt/intel/bin/icpc`，并使用了 Intel 专有的编译选项（`-static-intel`、`-no-intel-extensions`、`-ipo`）。若要用 GCC 或 Clang 构建，需要把这些选项清理掉。

HLSDK 和 Metamod 头文件已内置在 `sdk/` 目录中，无需额外下载。

### 克隆仓库

```bash
git clone https://github.com/s1lentq/localizebugfix.git
cd localizebugfix
```

### 在 Windows 上构建

在 Visual Studio 中打开 `msvc/localizebugfix.sln` 并开始构建。输出文件为 `localizebugfix.dll`。

### 在 Linux 上构建

```bash
make
```

输出文件为 `localizebugfix_mm_i386.so`。

:::note

`2.0`、`2.3` 和 `2.4` 版本构建好的文件已提交在仓库的 `bin/` 目录中，因此即便在项目活跃时期，也很少需要自行构建。

:::

各文件的存放位置见[安装](./installing.md)。
