---
id: safenameandchat-settings
title: 设置
sidebar_position: 3
description: SafeNameAndChat 是第三方 Metamod 插件，用于化解玩家昵称和聊天消息中的本地化字符串与命令注入漏洞。
slug: /safenameandchat/settings
---

<head>
  <title>SafeNameAndChat: 设置 | ReHLDS</title>
</head>

# 设置

SafeNameAndChat 通过 `SafeNameAndChat.cfg` 配置，插件在启动时会从自身所在目录 `exec` 执行该文件。它是一串控制台变量赋值，所有防护默认全部开启。

## 聊天相关变量

| CVar | 默认值 | 说明 |
| --- | --- | --- |
| `SNAC_Chat_ReplaceNumberSign` | `1` | 把 `#` 替换为全角的 `＃`，使客户端无法把文本解析为本地化键。 |
| `SNAC_Chat_ReplacePercentSign` | `1` | 把 `%` 替换为全角的 `％`，使其无法进入客户端的格式化函数。 |
| `SNAC_Chat_RemoveUnprintable` | `1` | 从消息中去除不可打印字符。 |
| `SNAC_Chat_TrimSpaces` | `1` | 裁掉首尾空白，包括那些仅仅渲染成空格的字符。 |
| `SNAC_Chat_TruncateToEngineLimitAfterReplace` | `1` | 在替换*之后*按引擎的字节上限重新截断消息。全角替换字符占 3 个 UTF-8 字节，而原字符只占 1 个，因此替换前放得下的消息替换后可能超长。所用上限为 127 字节；若需要恢复消息两端的引号，则为 125 字节。 |

## 昵称相关变量

| CVar | 默认值 | 说明 |
| --- | --- | --- |
| `SNAC_Name_ReplaceNumberSign` | `1` | 把玩家昵称中的 `#` 替换为 `＃`。 |
| `SNAC_Name_ReplacePercentSign` | `1` | 把玩家昵称中的 `%` 替换为 `％`。 |
| `SNAC_Name_ReplaceAmpersand` | `1` | 把玩家昵称中的 `&` 替换为 `＆`。 |
| `SNAC_Name_ReplacePlusSign` | `1` | 化解 `+命令` 语法：当 `+` 后紧跟 ASCII 字母或数字时，把后面那个字符替换为全角形式，从而破坏绑定语法，同时保持昵称可读。 |
| `SNAC_Name_RemoveUnprintable` | `1` | 从昵称中去除不可打印字符。 |
| `SNAC_Name_TrimSpaces` | `1` | 裁掉昵称首尾的空白。 |

## 只读变量

| CVar | 说明 |
| --- | --- |
| `SNAC_Version` | 报告已加载的插件版本。注册为服务器变量，不可设置。 |

## 随包提供的默认配置

```text
SNAC_Chat_ReplaceNumberSign                 1
SNAC_Chat_ReplacePercentSign                1
SNAC_Chat_RemoveUnprintable                 1
SNAC_Chat_TrimSpaces                        1
SNAC_Chat_TruncateToEngineLimitAfterReplace 1

SNAC_Name_ReplaceNumberSign                 1
SNAC_Name_ReplacePercentSign                1
SNAC_Name_ReplaceAmpersand                  1
SNAC_Name_ReplacePlusSign                   1
SNAC_Name_RemoveUnprintable                 1
SNAC_Name_TrimSpaces                        1
```

:::warning

关闭任何一项，都会重新打开它所封堵的漏洞。如果你为了绕开与其他插件的冲突而禁用某项，请只关掉范围最窄的那一个，而不是整个聊天组或昵称组；并且先确认冲突的插件是否已经在做自己的文本净化。

:::

:::note

如果某一组的所有选项都是 `0`，插件会完全跳过该组的处理，而不是执行一次空转——因此彻底关闭的组不会带来任何开销。

:::
