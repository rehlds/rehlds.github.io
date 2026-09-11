---
id: resemiclip
title: ReSemiclip
sidebar_position: 1
description: ReSemiclip 是一个 Metamod 插件，用于控制玩家之间能否互相穿过。参考实现为 `joaquimandrade` 的 Semiclip 模块。
slug: /resemiclip
---

# 什么是 ReSemiclip？

ReSemiclip 是面向 Counter-Strike 服务器的 [Metamod](https://github.com/rehlds/Metamod-R) 插件，它让玩家在可配置的条件下互相穿过，而不是彼此阻挡移动。它是经典「Semiclip」思路的一个持续维护版本，参考实现为 [joaquimandrade 的 Semiclip 模块](https://github.com/joaquimandrade)。

## 它能控制什么

- **作用对象**——所有人、仅恐怖分子、仅反恐精英，或仅限队友。
- **生效时机**——从回合开始起的一段固定时间内（适合刚出生时玩家容易卡在一起的场景），或者一直生效。
- **蹲下**——允许玩家跳到正在蹲下的队友身上，而不是被挡住。
- **视觉提示**——可选地为距离足够近、可以互相穿过的玩家加上透明效果，使这一行为可见，而不是让人意外。
- **子弹行为**——可选地让射击穿过当前处于 semiclip 状态的队友。

以上全部既可以全局配置，也可以按地图或地图前缀分别配置。`config.ini` 的完整格式见[设置](./settings.md)。

## 环境要求

ReSemiclip 同时挂接引擎层面（[ReHLDS](/zh-Hans/docs/rehlds/install)）和 GameDLL 层面（[ReGameDLL_CS](/zh-Hans/docs/regamedll-cs/install)）的函数，因此在 Metamod 之下这两者都是必需的。参见[安装](./installing.md)。
