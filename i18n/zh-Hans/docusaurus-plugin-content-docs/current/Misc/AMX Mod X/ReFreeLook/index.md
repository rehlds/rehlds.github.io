---
id: refreelook
title: "ReFreeLook"
sidebar_label: ReFreeLook
sidebar_position: 1
description: ReFreeLook 是一个 AMX Mod X 模块，让观战的管理员可以使用任意视角模式，而不受 `mp_forcecamera` 或 `mp_forcechasecam` 取值的限制。仅适用于最新版 `ReGameDLL_CS`。
slug: /refreelook
keywords:
  - refreelook
  - AMX Mod X
  - amxx
  - amx
  - module
tags:
  - refreelook
  - amxx module
last_update:
  date: 07/21/2025
  author: STAM
---

# 什么是 ReFreeLook？

ReFreeLook 是一个 AMX Mod X 模块，让拥有相应权限标志的管理员可以自由观战，而不受服务器强加给普通观战者的 `mp_forcecamera` 或 `mp_forcechasecam` 限制。它是 [Arkshine 的 AdminFreeLook](https://github.com/Arkshine/AdminFreeLook) 的延续，构建在 [ReGameDLL_CS](/zh-Hans/docs/regamedll-cs) 之上。

服务器通常会锁定观战视角模式（`mp_forcecamera`/`mp_forcechasecam`），以防玩家借观战为队友侦察。ReFreeLook 把具备指定权限标志的管理员排除在该限制之外：管理人员在进行管理工作时保有完整的视角自由，而普通观战者依旧受限。

## 环境要求

- **最新版**的 [ReGameDLL_CS](/zh-Hans/docs/regamedll-cs/install)——ReFreeLook 挂接的是只有它才具备的 GameDLL 函数，在原版 HLDS/GameDLL 上无法工作。
- AMX Mod X。

安装步骤见[安装](./installing.md)，控制谁能获得自由视角的那个唯一变量见[设置](./settings.md)。
