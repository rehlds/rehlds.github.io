---
id: revoice-install
title: 安装
sidebar_position: 2
description: ReVoice 是一个 Metamod 插件，作为语音转码器修复 ReHLDS 服务器上非 Steam 与 Steam 客户端之间的语音聊天。
slug: /revoice/install
---

<head>
  <title>ReVoice: 安装 | ReHLDS</title>
</head>

# 安装

:::warning 已废弃

维护者已把 ReVoice 标记为**已废弃**——在把它部署到生产服务器之前，请先阅读[什么是 ReVoice？](./index.md)。

:::

ReVoice 是一个 Metamod 插件，需要 [ReHLDS](/zh-Hans/docs/rehlds/install) 和 Metamod（推荐 Metamod-R）已经安装并正常运行。

## 1. 获取 ReVoice

从[发行页面](https://github.com/rehlds/ReVoice/releases)下载发行版，或[从源代码构建](./compilling.md)。

## 2. 放置插件

在模组目录的 `addons` 下创建 `revoice` 文件夹，并把与平台相符的文件放进去：

| 平台 | 文件 | 存放位置 |
| --- | --- | --- |
| Windows | `revoice_mm.dll` | `<mod>/addons/revoice/revoice_mm.dll` |
| Linux | `revoice_mm_i386.so` | `<mod>/addons/revoice/revoice_mm_i386.so` |

## 3. 在 Metamod 中注册插件

在 `<mod>/addons/metamod/plugins.ini` 中加入以下内容：

```text
win32 addons\revoice\revoice_mm.dll
linux addons/revoice/revoice_mm_i386.so
```

## 4. 添加配置文件

把项目的 [`data/revoice.cfg`](https://github.com/rehlds/ReVoice/blob/master/data/revoice.cfg) 复制到插件文件旁边：`<mod>/addons/revoice/revoice.cfg`。ReVoice 在启动时用 `exec` 执行该文件，因此它使用的是普通服务器配置的语法（直接为变量赋值，用 `//` 注释）——参见[设置](./settings.md)。

## 5. 启用语音聊天并验证

确认服务器上已启用 `sv_voiceenable`。启动服务器并执行 `meta list`——列表中应出现已加载的 `Revoice`。在控制台执行 `rev version` 和 `rev status`，确认插件处于工作状态并查看其当前状况。
