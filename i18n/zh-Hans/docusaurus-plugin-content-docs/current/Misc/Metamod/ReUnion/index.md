---
id: reunion
title: ReUnion
sidebar_position: 1
description: ReUnion 是一个 Metamod 插件，让使用协议 47 和 48 的非 Steam 客户端能够连接到 ReHLDS 服务器。
slug: /reunion
---

# 什么是 ReUnion？

ReUnion 是一个 [Metamod](https://github.com/rehlds/Metamod-R) 插件，让非 Steam（协议 47 和 48）的 GoldSrc 客户端能够连接到 [ReHLDS](/zh-Hans/docs/rehlds) 服务器。它是 DProto 项目的延续，并专门针对 ReHLDS 做了适配。

长期以来，相当一部分 Half-Life／Counter-Strike 玩家通过各类模拟器（revEmu、SteamEmu、SC2009 等）使用非 Steam 客户端联机。ReUnion 会对这些客户端进行鉴权，并按照你的配置为其分配标识符（`STEAM_`/`VALVE_`），修复其中某些客户端引发的服务器浏览器与查询兼容性问题，还能防范查询洪水攻击——而且全部无需另行安装 DProto。

你可以通过 [Game Tracker](http://www.gametracker.com/search/?search_by=server_variable&search_by2=reu_version) 找到正在运行 ReUnion 的服务器。

## 它负责什么

- **客户端识别**——为每个接入的客户端分配 `STEAM_`/`VALVE_` 形式的 ID，并按客户端类型分别设定规则（真实 Steam、revEmu、SteamEmu、SC2009、AVSMP、SETTI 扫描器、sXeI 等）。参见[设置](./settings.md)。
- **SteamID 保护**——可选的加盐哈希（`SteamIdHashSalt`）使生成的 ID 不可逆推，从而防止 SteamID 被伪造或盗用。
- **服务器查询兼容性**——修复服务器浏览器查询处理有缺陷的客户端，并提供可选的查询频率限制以防范洪水滥用。

## 环境要求

- ReHLDS API `3.10` 或更新版本。
- Metamod（推荐 Metamod-R）。

参见[安装](./installing.md)。

:::note

ReUnion 曾经支持 `SmartSteamEmu3` 模拟器。项目开源时移除了这项支持，因为它依赖敏感的授权代码。这对服务器的实际人气影响很小，因为该模拟器在非 Steam 客户端中并不常见。

:::
