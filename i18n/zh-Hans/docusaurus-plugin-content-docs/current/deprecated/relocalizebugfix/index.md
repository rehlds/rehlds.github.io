---
id: relocalizebugfix
title: ReLocalizeBug Fix
sidebar_position: 1
description: ReLocalizeBug Fix 是已废弃的 Metamod 插件，用于阻止 ReHLDS 服务器上玩家昵称和聊天中的本地化字符串漏洞。
slug: /relocalizebugfix
---

# 什么是 ReLocalizeBug Fix？

:::warning 已废弃

ReLocalizeBug Fix **已废弃，且与现代版本的 ReHLDS 不兼容**。在当前构建上运行它可能导致不稳定和难以预料的行为。它[自 2017 年起即被标记为废弃](https://github.com/rehlds/rehlds/issues/328#issuecomment-275837883)。

对于这一类漏洞，在当前的服务器上请使用 [SafeNameAndChat](/zh-Hans/docs/safenameandchat)。

:::

ReLocalizeBug Fix 是一个 Metamod 插件，用于解决 Half-Life 专用服务器上与本地化相关的缺陷——也就是把 `#` 开头的本地化标记放进玩家昵称或聊天消息后，会让收到它的客户端崩溃的那个漏洞。

它是在 [s1lentq 的 LocalizeBug Fix](/zh-Hans/docs/localizebugfix) 基础上扩展、并针对 ReHLDS 适配而来的。其唯一的公开版本 `v2.8` 发布于 2016 年 11 月，也是第一个兼容 ReHLDS 的版本。

## 为什么被废弃

ReHLDS 引擎本身向前发展了。随着引擎获得了自己的修复和防护，该插件的做法不再与引擎的行为相符，于是在次年被标记为废弃。此后发布的 ReHLDS 构建，它从未适配过。

项目自身 README 中的警告毫不含糊：把该插件用于较新版本的 ReHLDS，可能导致不稳定和难以预料的行为。

## 该用什么替代

[SafeNameAndChat](/zh-Hans/docs/safenameandchat) 覆盖同一类漏洞，并且仍在维护。它的处理方式也更温和——把问题字符替换成外形相近的字符，而不是丢弃或拦截整条消息，因此玩家得以保留自己的昵称。

关于该插件的实际使用方式，见[安装](./installing.md)和[设置](./settings.md)。
