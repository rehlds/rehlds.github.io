---
id: reamxmodx-settings
title: 设置
sidebar_position: 3
description: ReAMXModX 是 AMX Mod X 的一个过时分支，在上游尚未支持之前为其加入了 ReHLDS 与 ReGameDLL 的 API 支持。
slug: /reamxmodx/settings
---

<head>
  <title>ReAMXModX: 设置 | ReHLDS</title>
</head>

# 设置

:::warning 已废弃

此处记录仅供参考。请使用 AlliedModders 的 [AMX Mod X](https://www.amxmodx.org/)——参见[什么是 ReAMXModX？](./index.md)。

:::

ReAMXModX **没有引入任何自己的配置**。它的改动是面向 ReHLDS 和 ReGameDLL API 的内部 SDK 胶水代码，而不是面向用户的功能，因此全部配置项都属于上游的 AMX Mod X。

该分支在 `configs/` 目录中保留了 AMX Mod X 的标准配置文件集：

| 文件 | 用途 |
| --- | --- |
| `amxx.cfg` | AMX Mod X 的主配置及其变量。 |
| `core.ini` | 核心模块设置。 |
| `configs.ini` | 针对具体模组的配置选择。 |
| `modules.ini` | 启动时加载哪些模块。 |
| `plugins.ini` | 启动时加载哪些插件。 |
| `users.ini` | 管理员账号与权限标志。 |
| `cmds.ini`、`clcmds.ini` | 服务器命令与客户端命令的定义。 |
| `cvars.ini` | 菜单所使用的变量定义。 |
| `maps.ini` | 地图菜单所使用的地图列表。 |
| `hamdata.ini` | Ham Sandwich 的函数偏移。 |
| `custommenuitems.cfg`、`miscstats.ini` | 菜单项与统计信息显示。 |

以上全部行为都与 AlliedModders 的文档所述完全一致——该分支没有改动它们的格式或默认值。

:::note

由于配置完全相同，从该分支迁移到当前上游 AMX Mod X 的服务器可以原样保留 `configs/` 目录。有一个例外值得手工核对：`hamdata.ini` 记录的是函数偏移，而这些偏移与 AMX Mod X 的版本和你所运行的 GameDLL 绑定——请采用当前发行版中的那一份，而不要把 2016 年的副本沿用下去。

:::

权威参考请见 [AMX Mod X 文档](https://wiki.alliedmods.net/Category:AMX_Mod_X)和 [AMX Mod X 命令参考](https://wiki.alliedmods.net/Commands_(AMX_Mod_X))。
