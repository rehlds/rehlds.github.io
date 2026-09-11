---
id: reamxmodx-install
title: 安装
sidebar_position: 2
description: ReAMXModX 是 AMX Mod X 的一个过时分支，在上游尚未支持之前为其加入了 ReHLDS 与 ReGameDLL 的 API 支持。
slug: /reamxmodx/install
---

<head>
  <title>ReAMXModX: 安装 | ReHLDS</title>
</head>

# 安装

:::warning 已废弃

请不要在当前的服务器上安装 ReAMXModX。改装 AlliedModders 的 [AMX Mod X](https://www.amxmodx.org/)——它原生支持 ReHLDS，而这正是该分支存在的唯一理由。

:::

## 没有可安装的构建

ReAMXModX **从未发布过任何版本**。仓库中只有源代码——没有发行页面，没有压缩包，也没有构建好的文件。任何想运行它的人，都得先[从源代码构建](./compilling.md)。

单凭这一点，它今天就不适合作为常规的服务器安装对象：你将不得不自己编译一份 2016 年的 AMX Mod X 快照，然后独自维护它。

## 如果你要从它迁移走

如果你接手了一台运行着该分支构建的服务器，迁移到上游 AMX Mod X 是既定的路径：

1. 按照官方文档，为你的模组安装一个当前的 [AMX Mod X](https://www.amxmodx.org/downloads-new.php) 发行版。
2. 保留现有的 `configs/` 目录——该分支从未改动配置格式，因此 `amxx.cfg`、`users.ini`、`cmds.ini` 等都可以原样沿用。参见[设置](./settings.md)。
3. 用当前的 AMX Mod X 头文件重新编译你自己的 `.sma` 插件。
4. 在服务器控制台执行 `amxx version` 和 `amxx modules` 验证结果。

在现代技术栈上，若需要从 Pawn 访问引擎层和 GameDLL 层，请使用 [ReAPI](/zh-Hans/docs/reapi)，而不是打过补丁的 AMX Mod X——这才是如今触及 ReHLDS 和 ReGameDLL_CS 内部实现的受支持方式。
