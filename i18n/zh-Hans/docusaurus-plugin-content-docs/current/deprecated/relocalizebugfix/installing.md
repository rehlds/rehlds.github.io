---
id: relocalizebugfix-install
title: 安装
sidebar_position: 2
description: ReLocalizeBug Fix 是已废弃的 Metamod 插件，用于阻止 ReHLDS 服务器上玩家昵称和聊天中的本地化字符串漏洞。
slug: /relocalizebugfix/install
---

<head>
  <title>ReLocalizeBug Fix: 安装 | ReHLDS</title>
</head>

# 安装

:::warning 已废弃

以下说明仅供参考。该插件**与现代版本的 ReHLDS 不兼容**——参见[什么是 ReLocalizeBug Fix？](./index.md)，并改用 [SafeNameAndChat](/zh-Hans/docs/safenameandchat/install)。

:::

ReLocalizeBug Fix 是一个 Metamod 插件，安装方式与其他插件相同。

## 1. 获取 ReLocalizeBug Fix

最后一个版本是 [`v2.8`](https://github.com/rehlds/relocalizebugfix/releases)（`relocalizebugfix-v2.8.zip`）。仓库的 `bin/` 目录中也放有构建好的文件。

## 2. 放置插件

把与平台相符的文件复制到 `<mod>/addons/relocalizebugfix/`：

| 平台 | 文件 |
| --- | --- |
| Windows | `relocalizebugfix_mm.dll` |
| Linux | `relocalizebugfix_mm_i386.so` |

## 3. 在 Metamod 中注册插件

在 `<mod>/addons/metamod/plugins.ini` 文件中加入以下内容：

```ini
win32 addons\relocalizebugfix\relocalizebugfix_mm.dll
linux addons/relocalizebugfix/relocalizebugfix_mm_i386.so
```

:::note

该插件声明自己只能在启动时加载（`PT_STARTUP`）且永不可卸载（`PT_NEVER`），因此 `meta load` 和 `meta unload` 对它无效——它必须在服务器启动时就已就位，移除它则需要重启。

:::

## 4. 验证

启动服务器并执行 `meta list`——该插件注册的名称是 `ReLocalizeBug Fix`。在现代 ReHLDS 构建上，预期它会出问题而不是正常工作；那正是[概览页](./index.md)所说的不兼容，而非你的安装失误。
