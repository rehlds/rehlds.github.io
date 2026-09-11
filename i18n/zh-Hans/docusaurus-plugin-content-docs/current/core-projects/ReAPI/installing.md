---
id: reapi-install
title: 安装
sidebar_position: 2
description: ReAPI 是一个 AMXModX 模块，为 ReHLDS、ReGameDLL 以及 Metamod 插件（例如 ReUnion、ReVoice）提供 API。
slug: /reapi/install
---

<head>
  <title>ReAPI: 安装 | ReHLDS</title>
</head>

# 安装

ReAPI 是一个 AMX Mod X 模块，需要 AMX Mod X 已经安装并正常运行；同时它会挂接到下层组件，因此安装顺序很重要。

## 开始之前

请确认以下组件均已安装且工作正常：

1. [ReHLDS](/zh-Hans/docs/rehlds/install)——所有引擎层面的钩子和成员都依赖它。
2. Metamod-R（或 Metamod）以及 AMX Mod X。
3. [ReGameDLL_CS](/zh-Hans/docs/regamedll-cs/install)——仅当你的插件用到 GameDLL 层面的钩子或成员（`reapi_gamedll.inc`）时才需要。纯引擎层面的插件没有它也能工作。

## 1. 下载 ReAPI

从[最新发行版](https://github.com/rehlds/ReAPI/releases/latest)获取 `reapi-bin-*.zip`。压缩包中只有一个 `addons/` 目录，内含两个平台的模块文件和 Pawn 头文件。

## 2. 解压到模组目录

把压缩包中 `addons/amxmodx/` 的内容复制到 `<mod>/addons/amxmodx/`：

| 压缩包中的位置 | 复制到 | 用途 |
| --- | --- | --- |
| `addons/amxmodx/modules/reapi_amxx.dll` | `<mod>/addons/amxmodx/modules/` | Windows 平台的模块文件。 |
| `addons/amxmodx/modules/reapi_amxx_i386.so` | `<mod>/addons/amxmodx/modules/` | Linux 平台的模块文件。 |
| `addons/amxmodx/scripting/include/reapi*.inc`、`cssdk_const.inc` | `<mod>/addons/amxmodx/scripting/include/` | **编译**使用 ReAPI 的插件所需的 Pawn 头文件。 |

你只需要与服务器平台相符的那个模块文件；头文件与平台无关，只在你编译 `.sma` 插件的机器上才需要。

## 3. 启用模块

模块的加载方式取决于你的 AMX Mod X 版本：

:::note

在定义了 `AMXX_VERSION_NUM >= 175` 的较新 AMX Mod X 中，`reapi.inc` 自身声明了 `#pragma reqlib reapi` / `#pragma loadlib reapi`。任何写了 `#include <reapi>` 的插件都会自动要求并加载该模块——**无需手动往 `modules.ini` 里添加条目**。

:::

在较旧的 AMX Mod X 构建中，需要你自己在 `<mod>/addons/amxmodx/configs/modules.ini` 中加入一行 `reapi`，模块才会在启动时加载。

## 4. 验证

启动服务器，查看 AMX Mod X 的启动日志（或在控制台执行 `meta list`，或查看 AMXX 的模块列表），确认 `ReAPI` 已成功加载。如果加载失败，请再次确认复制的是与操作系统相符的模块文件，并且 ReHLDS（以及在需要时的 ReGameDLL_CS）确实已经就位——ReAPI 在运行时就依赖它们，而不只是在编译时。

## 针对 ReAPI 编译插件

把 AMXX 编译器（`amxxpc`）指向包含第 2 步所复制 ReAPI 头文件的 `scripting/include` 目录，然后在插件源码中直接写 `#include <reapi>` 即可。可用的原生函数和钩子链 API 见[设置](./settings.md)。
