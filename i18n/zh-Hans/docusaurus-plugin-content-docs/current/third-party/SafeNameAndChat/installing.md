---
id: safenameandchat-install
title: 安装
sidebar_position: 2
description: SafeNameAndChat 是第三方 Metamod 插件，用于化解玩家昵称和聊天消息中的本地化字符串与命令注入漏洞。
slug: /safenameandchat/install
---

<head>
  <title>SafeNameAndChat: 安装 | ReHLDS</title>
</head>

# 安装

SafeNameAndChat 是一个 Metamod 插件，需要 Metamod（推荐 Metamod-R）已经安装并正常运行。

## 1. 获取 SafeNameAndChat

从[发行页面](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/releases)下载文件，或[从源代码构建](./compilling.md)。发行版中包含两个文件：

| 平台 | 文件 |
| --- | --- |
| Windows | `SafeNameAndChat.dll` |
| Linux | `SafeNameAndChat.so` |

## 2. 放置插件

在模组目录的 `addons` 下创建 `SafeNameAndChat` 文件夹，并把与平台相符的文件放进去：

```text
<mod>/addons/SafeNameAndChat/SafeNameAndChat.dll
<mod>/addons/SafeNameAndChat/SafeNameAndChat.so
```

## 3. 添加配置文件

把项目的 [`SafeNameAndChat.cfg`](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/blob/master/SafeNameAndChat.cfg) 复制到插件文件旁边。插件会依据自身所在位置拼出路径，并在启动时从那里 `exec` 执行 `SafeNameAndChat.cfg`，因此该文件必须与插件放在同一目录，而不是模组根目录。

## 4. 在 Metamod 中注册插件

在 `<mod>/addons/metamod/plugins.ini` 中加入以下内容：

```text
win32 addons\SafeNameAndChat\SafeNameAndChat.dll
linux addons/SafeNameAndChat/SafeNameAndChat.so
```

## 5. 验证

启动服务器并执行 `meta list`——列表中应出现已加载的 `SafeNameAndChat`（它的日志标记是 `SNAC`）。在控制台查看 `SNAC_Version`，可以确认正在运行的是哪个构建。

由于该插件标记为可随时加载，你也可以在运行中的服务器上执行 `meta load addons/SafeNameAndChat/SafeNameAndChat.so`，而不必重启。

各项变量见[设置](./settings.md)。
