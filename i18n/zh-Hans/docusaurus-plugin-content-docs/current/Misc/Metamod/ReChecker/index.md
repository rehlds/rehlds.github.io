---
id: rechecker
title: "ReChecker"
sidebar_label: ReChecker
sidebar_position: 1
description: ReChecker 是一个 Metamod 插件，可按文件名和 md5 哈希校验客户端文件。
slug: /rechecker
keywords:
  - rechecker
  - metamod
  - plugin
tags:
  - rechecker
  - metamod plugin
last_update:
  date: 07/21/2025
  author: STAM
---

# 什么是 ReChecker？

ReChecker 是面向 [ReHLDS](/zh-Hans/docs/rehlds) 的 [Metamod](https://github.com/rehlds/Metamod-R) 插件。当客户端连接或下载时，引擎的资源与一致性校验机制会传输一批文件，ReChecker 会检查这些文件，并与你提供的规则列表逐条比对。当某个文件的路径与哈希（或者它缺失、无法识别这一事实）命中某条规则时，ReChecker 就执行你指定的控制台命令——通常是 `kick` 或写一条日志。

它用于依据静态文件特征（路径加一小段 MD5 前缀）识别已知的作弊库和注入文件，与服务器上其他反作弊逻辑互不影响。

## 工作方式

对于客户端传输的每一个相关资源，ReChecker 都会与 `resources.ini` 中的规则比对：

- 规则可以匹配**某个具体哈希**、`UNKNOWN`（一切未被明确识别的内容）或 `MISSING`（客户端根本没有传输该文件）。
- 命中的规则会执行配置好的命令，并把 `[userid]`、`[name]`、`[file_name]`、`[file_md5hash]` 等占位符替换为实际值。
- `BREAK` 标志表示一旦命中，就不再对该客户端检查后续规则；`IGNORE` 则把某个具体哈希加入白名单。

`resources.ini` 的完整格式见[设置](./settings.md)。

## 随附内容

项目附带一份起步用的 `resources.ini`，其中包含若干历史上已知的作弊文件特征（透视、自瞄、DLL 注入器）。请把它当作由你自己维护的起点——它并不是一个持续更新的作弊特征库。

## 环境要求

ReChecker 依赖 [ReHLDS](/zh-Hans/docs/rehlds/install) 的扩展引擎 API——在原版 HLDS 上无法加载。同时需要先安装 Metamod（推荐 Metamod-R）。参见[安装](./installing.md)。
