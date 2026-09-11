---
id: revoice
title: ReVoice
sidebar_position: 1
description: ReVoice 是一个 Metamod 插件，作为语音转码器修复 ReHLDS 服务器上非 Steam 与 Steam 客户端之间的语音聊天。
slug: /revoice
---

# 什么是 ReVoice？

:::warning 已废弃

维护者已把 ReVoice 标记为**已废弃**。仓库仍然可用、也能构建，但已不再积极开发——在生产环境依赖它之前请充分测试，部署前也请先查看[问题追踪器](https://github.com/rehlds/ReVoice/issues)中已知的问题。

:::

ReVoice 是面向 [ReHLDS](/zh-Hans/docs/rehlds) 的 [Metamod](https://github.com/rehlds/Metamod-R) 插件，用于修复同一服务器上 Steam 与非 Steam 客户端之间语音聊天的兼容性问题。真正的 Steam 客户端与非 Steam 客户端（协议 47/48，也就是 [ReUnion](/zh-Hans/docs/reunion) 允许接入的那一类）原生使用的语音编解码器并不相同，因此如果没有 ReVoice，两类玩家之间的语音可能出错，或者只能单向通话。ReVoice 会在不同编解码器（Speex、Opus 和 SILK）之间转码语音数据，使双方都能听到彼此。

## 环境要求

- [ReHLDS](/zh-Hans/docs/rehlds/install) 和 Metamod（推荐 Metamod-R）。
- 服务器上必须启用 `sv_voiceenable`——ReVoice 修复的是编解码器兼容性，它本身并不开启语音聊天。
- 通常与 [ReUnion](/zh-Hans/docs/reunion/install) 一同部署，因为正是后者带来了 Steam 与非 Steam 客户端混杂的局面。

参见[安装](./installing.md)。
