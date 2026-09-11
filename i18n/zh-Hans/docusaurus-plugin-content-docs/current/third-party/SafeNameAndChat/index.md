---
id: safenameandchat
title: SafeNameAndChat
sidebar_position: 1
description: SafeNameAndChat 是第三方 Metamod 插件，用于化解玩家昵称和聊天消息中的本地化字符串与命令注入漏洞。
slug: /safenameandchat
---

# 什么是 SafeNameAndChat？

SafeNameAndChat 是 [@WPMGPRoSToTeMa](https://github.com/WPMGPRoSToTeMa) 编写的 Metamod 插件，它在引擎把玩家昵称和聊天消息转发出去之前先做净化处理，封堵了 GoldSrc 中一类由来已久的漏洞：精心构造的昵称或消息可以让其他玩家的客户端崩溃，或者注入控制台命令。

:::note

这是一个第三方项目。它位于 ReHLDS 组织之外，也不由该组织维护——请向它自己的[问题追踪器](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/issues)反馈问题。

:::

## 它防范什么

GoldSrc 客户端会对某些字符做特殊处理，把它们放进昵称或聊天里的玩家就能加以利用：

- **本地化字符串（`#`）**——含有 `#Spec_Help_Text` 这类标记的消息或昵称，会让接收方客户端把它们当作本地化键去解析。视具体标记而定，客户端会崩溃。
- **格式化符（`%`）**——`%s` 之类进入客户端的格式化函数。
- **昵称中的与号（`&`）**——在某些客户端昵称渲染路径中处理不当。
- **昵称中通过 `+` 注入命令**——`+` 紧跟字母或数字，会复现 `+命令` 这种绑定语法。

插件并不踢出玩家，也不直接删除这些字符，而是把每个问题字符替换成对应的 **Unicode 全角孪生字符**——`#` 变成 `＃`，`%` 变成 `％`。人读起来文本没有变化，但客户端不再把它当作标记。它还可以去除不可打印字符，并裁掉首尾空白。

## 环境要求

- Metamod（推荐 Metamod-R）。
- [ReHLDS](/zh-Hans/docs/rehlds/install) 不是必需的，但插件会在运行时检测并加以利用——它在启动时查询 `VREHLDS_HLDS_API_VERSION001`，若得到响应就走感知引擎的代码路径。

该插件可以随时加载和卸载（`meta load` / `meta unload` 无需重启服务器即可生效）。

安装方法见[安装](./installing.md)，十一个 `SNAC_*` 变量见[设置](./settings.md)。
