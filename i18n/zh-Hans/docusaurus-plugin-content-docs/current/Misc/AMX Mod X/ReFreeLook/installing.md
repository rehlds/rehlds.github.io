---
id: refreelook-install
title: "ReFreeLook: 安装"
sidebar_label: 安装
sidebar_position: 2
description: ReFreeLook 是一个 AMX Mod X 模块，让观战的管理员可以使用任意视角模式，而不受 `mp_forcecamera` 或 `mp_forcechasecam` 取值的限制。仅适用于最新版 `ReGameDLL_CS`。
slug: /refreelook/install
keywords:
  - refreelook
  - AMX Mod X
  - amxx
  - amx
  - module
  - install
  - 安装
tags:
  - refreelook
  - install
  - 安装
last_update:
  date: 07/21/2025
  author: STAM
---

# 安装

ReFreeLook 是一个 AMX Mod X **模块**（不是 Metamod 插件），需要最新版的 [ReGameDLL_CS](/zh-Hans/docs/regamedll-cs/install) 和 AMX Mod X 已经安装并正常运行。

## 1. 获取 ReFreeLook

从[发行页面](https://github.com/rehlds/ReFreeLook/releases)下载构建好的版本，或[从源代码构建](./compilling.md)。

## 2. 停止服务器

无论是首次安装还是更新，都请先停止服务器。

## 3. 放置模块

把与平台相符的文件复制到模组的 AMX Mod X 模块目录中：

| 平台 | 文件 | 存放位置 |
| --- | --- | --- |
| Windows | `refreelook_amxx.dll` | `<mod>/addons/amxmodx/modules/refreelook_amxx.dll` |
| Linux | `refreelook_amxx_i386.so` | `<mod>/addons/amxmodx/modules/refreelook_amxx_i386.so` |

## 4. 注册模块

打开 `<mod>/addons/amxmodx/configs/modules.ini`，在文件末尾加入一行：

```text
refreelook
```

## 5. 配置游戏变量

只有当观战视角确实受到限制时，ReFreeLook 才有意义：

- 把 `mp_forcechasecam` 和 `mp_forcecamera` 设为**相同**的值。
- 确认 `mp_fadetoblack` 为 `0`。

## 6. 配置管理员权限

把 `afl_admin_access_flags` 设为应当豁免视角限制的权限标志。标志列表与默认值见[设置](./settings.md)。

## 7. 启动服务器

启动服务器并确认模块已加载（在控制台或日志的 AMX Mod X 模块列表中查找 `refreelook`）。
