---
id: localizebugfix-install
title: 安装
sidebar_position: 2
description: LocalizeBug Fix 是 s1lentq 编写的 Metamod 插件（已归档），用于阻止 HLDS 上玩家昵称和聊天中的本地化字符串漏洞。
slug: /localizebugfix/install
---

<head>
  <title>LocalizeBug Fix: 安装 | ReHLDS</title>
</head>

# 安装

:::warning 已废弃

以下说明仅供参考。该项目已归档——参见[什么是 LocalizeBug Fix？](./index.md)，在当前的服务器上请改用 [SafeNameAndChat](/zh-Hans/docs/safenameandchat/install)。

:::

LocalizeBug Fix 是一个 Metamod 插件，安装方式与其他插件相同。

## 1. 获取 LocalizeBug Fix

最后一个版本是 2015 年 9 月的 [`2.4`](https://github.com/s1lentq/localizebugfix/releases)（`localizebugfix_2_4.7z`）。仓库的 `bin/` 目录中也放有 `2.0`、`2.3` 和 `2.4` 版本构建好的文件。

## 2. 放置插件

把与平台相符的文件复制到 `addons` 下的某个目录中：

| 平台 | 文件 |
| --- | --- |
| Windows | `localizebugfix.dll` |
| Linux | `localizebugfix_mm_i386.so` |

## 3. 在 Metamod 中注册插件

在 `<mod>/addons/metamod/plugins.ini` 中加入对应的一行。

:::note

该插件声明自己只能在启动时加载（`PT_STARTUP`）且永不可卸载（`PT_NEVER`），因此 `meta load` 和 `meta unload` 对它无效——它必须在服务器启动时就已就位，移除它则需要重启。

:::

## 4. 验证

启动服务器并执行 `meta list`——该插件注册的名称是 `LocalizeBug Fix`。
