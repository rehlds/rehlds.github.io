---
id: hitboxtracker-install
title: 安装
sidebar_position: 2
description: hitboxtracker 是 ReHLDS 的已废弃开发工具，用于在客户端绘制服务器计算出的碰撞框位置。
slug: /hitboxtracker/install
---

<head>
  <title>hitboxtracker: 安装 | ReHLDS</title>
</head>

# 安装

:::warning 已废弃

以下说明仅供参考。hitboxtracker 已不再维护——动手之前请先阅读[什么是 hitboxtracker？](./index.md)，在当前的服务器上请改用 [Hitbox Fixer](/zh-Hans/docs/hitbox-fixer)。

:::

hitboxtracker 需要**两边**都安装：服务器上的插件和客户端上的模块。只装其中一半不会有任何效果。

## 环境要求

- 客户端：Counter-Strike 1.6 构建 `4554` 或更新版本。
- 服务器：Metamod `1.20` 或更新版本。

## 1. 获取 hitboxtracker

从[发行页面](https://github.com/rehlds/hitboxtracker/releases)下载 `hitboxtracker.zip`。压缩包中两边的内容都有：

| 压缩包中的路径 | 用途 |
| --- | --- |
| `server/cstrike/addons/hitboxtracker/hitboxtracker_mm.dll` | 服务器插件，Windows。 |
| `server/cstrike/addons/hitboxtracker/hitboxtracker_mm_i386.so` | 服务器插件，Linux。 |
| `client/hitboxtracker.dll` | 客户端绘制模块。 |
| `client/cs.exe` | 项目自带的启动器，用于加载该模块。 |

## 2. 安装服务器插件

把与平台相符的文件复制到 `<mod>/addons/hitboxtracker/`，并在 `<mod>/addons/metamod/plugins.ini` 中注册：

```text
win32 addons\hitboxtracker\hitboxtracker_mm.dll
linux addons/hitboxtracker/hitboxtracker_mm_i386.so
```

## 3. 安装客户端模块

把 `hitboxtracker.dll` 和 `cs.exe` 放进 Counter-Strike 1.6 客户端的工作目录，并通过 `cs.exe` 而不是常规快捷方式启动游戏——模块是由这个启动器加载的。

## 4. 验证

连入装有该插件的服务器，把 `r_drawentities` 设为 `6` 或 `7`。如果没有出现额外的碰撞框绘制，说明要么客户端不是通过启动器启动的，要么服务器插件没有加载——请在服务器上执行 `meta list` 检查。

各个 `r_drawentities` 取值的含义见[设置](./settings.md)。
