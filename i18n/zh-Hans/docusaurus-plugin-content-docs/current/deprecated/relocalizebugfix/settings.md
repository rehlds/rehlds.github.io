---
id: relocalizebugfix-settings
title: 设置
sidebar_position: 3
description: ReLocalizeBug Fix 是已废弃的 Metamod 插件，用于阻止 ReHLDS 服务器上玩家昵称和聊天中的本地化字符串漏洞。
slug: /relocalizebugfix/settings
---

<head>
  <title>ReLocalizeBug Fix: 设置 | ReHLDS</title>
</head>

# 设置

:::warning 已废弃

此处记录仅供参考。该插件与现代版本的 ReHLDS 不兼容——参见[什么是 ReLocalizeBug Fix？](./index.md)。

:::

ReLocalizeBug Fix **没有任何配置**。与它所基于的 [LocalizeBug Fix](/zh-Hans/docs/localizebugfix/settings) 一样，它既不注册控制台变量也不注册命令，更不附带配置文件。加载插件即启用防护；没有任何可调之处。

它的现代替代品 [SafeNameAndChat](/zh-Hans/docs/safenameandchat/settings) 提供了十一个变量，分别覆盖昵称和聊天，因此在与其他功能冲突时可以单独关闭某一项防护。

:::note

由于它没有任何设置，也就没有办法让这个插件在它不支持的 ReHLDS 构建上正常工作。如果它出问题，答案是移除它，而不是想办法绕过去配置。

:::
