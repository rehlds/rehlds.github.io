---
id: hitbox-fixer
title: Hitbox Fixer
sidebar_position: 1
description: Hitbox Fixer 是第三方 Metamod 插件，修复 Counter-Strike 1.6、Half-Life 和 Adrenaline Gamer 中服务端玩家碰撞框错位的问题。
slug: /hitbox-fixer
---

# 什么是 Hitbox Fixer？

Hitbox Fixer 是 [@Garey27](https://github.com/Garey27) 编写的 Metamod 插件，用于修正 Counter-Strike 1.6、Half-Life 和 Adrenaline Gamer 中服务端的玩家碰撞框。在未修复的服务器上，引擎用来判定命中的区域可能与玩家模型的实际位置不符，于是命中被判为未命中，反之亦然。

:::note

这是一个第三方项目。它位于 ReHLDS 组织之外，也不由该组织维护——请向它自己的[问题追踪器](https://github.com/Garey27/hitbox_fixer/issues)反馈问题。

:::

## 它修复了什么

- 当 `numblends == 1` 时完全错乱的碰撞框——这涵盖了换弹或安放 C4 时的蹲下与站立动画。
- 基于客户端位置的碰撞框回溯，使服务器按射击者实际看到的位置来判定命中。
- 出生时碰撞框位置错误的问题，这是回溯修正后自然得到的结果。

作者把非玩家实体的完整 `setupbones` 支持列为尚未完成，因此上述修复针对的是玩家。

## 环境要求

以下二者之一：

- [ReHLDS](/zh-Hans/docs/rehlds/install) `3.10` 或更高版本——推荐。
- 原版 HLDS 构建 `8648`。

此外还需要 Metamod（推荐 Metamod-R）来加载插件。

## 支持的模组

Counter-Strike 1.6、Half-Life 和 Adrenaline Gamer。作者接受通过问题追踪器提出的其他模组支持请求。

安装方法见[安装](./installing.md)，它新增的唯一控制台变量见[设置](./settings.md)。
