---
id: localizebugfix
title: LocalizeBug Fix
sidebar_position: 1
description: LocalizeBug Fix 是 s1lentq 编写的 Metamod 插件（已归档），用于阻止 HLDS 上玩家昵称和聊天中的本地化字符串漏洞。
slug: /localizebugfix
---

# 什么是 LocalizeBug Fix？

:::warning 已废弃

LocalizeBug Fix **已归档，不再维护**。仓库已于 2015 年在 GitHub 上归档，不再接受任何改动。此处记录仅供参考。

对于这一类漏洞，在当前的服务器上请使用 [SafeNameAndChat](/zh-Hans/docs/safenameandchat)。

:::

LocalizeBug Fix 是 [@s1lentq](https://github.com/s1lentq) 编写的 Metamod 插件，用于封堵 GoldSrc 中的一个漏洞：嵌入玩家昵称或聊天消息中的本地化标记，会让每一个收到它的客户端崩溃。

它是这类修复的第一代。ReHLDS 组织后来把它扩展为 [ReLocalizeBug Fix](/zh-Hans/docs/relocalizebugfix)——而后者如今同样已经废弃。

## 它封堵的漏洞

GoldSrc 客户端会把某些消息中以 `#` 开头的标记当作本地化键来解析。作者记录了两条攻击途径：

- **聊天。** 经由 `client_print_color` / `client_print` 发送、含有标记的消息，例如：

  ```text
  s1lent :#Spec_Help_Text Hello people! #Spec_Duck
  ```

  每一个收到该消息的客户端都会崩溃。

- **通过 `ShowMenu` 的玩家昵称。** 形如：

  ```text
  name "q#Buy#Buy#Buy#Buy#Buy#Buy#Buy"
  ```

  的昵称，会让客户端在打开玩家列表菜单时崩溃。

## 为什么被废弃

该插件面向的是原版 HLDS，在 ReHLDS 服务器上被 ReLocalizeBugFix 取代；而后者又在 [2017 年被标记为废弃](https://github.com/rehlds/rehlds/issues/328#issuecomment-275837883)。现代服务器的这项防护来自 [SafeNameAndChat](/zh-Hans/docs/safenameandchat)，它会净化问题字符，而不是拦截整条消息。

关于该插件的实际使用方式，见[安装](./installing.md)和[设置](./settings.md)。
