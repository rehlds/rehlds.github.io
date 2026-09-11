---
id: hitbox-fixer-install
title: 安装
sidebar_position: 2
description: Hitbox Fixer 是第三方 Metamod 插件，修复 Counter-Strike 1.6、Half-Life 和 Adrenaline Gamer 中服务端玩家碰撞框错位的问题。
slug: /hitbox-fixer/install
---

<head>
  <title>Hitbox Fixer: 安装 | ReHLDS</title>
</head>

# 安装

Hitbox Fixer 是一个 Metamod 插件，需要 [ReHLDS](/zh-Hans/docs/rehlds/install) `3.10`+（或原版 HLDS 构建 `8648`）以及 Metamod 已经安装并正常运行。

## 1. 获取 Hitbox Fixer

从[发行页面](https://github.com/Garey27/hitbox_fixer/releases)下载 `hitbox_fix-bin-*.zip`，或[从源代码构建](./compilling.md)。

## 2. 解压到模组目录

压缩包的目录结构已经按服务器布置好。把其中的 `addons/` 复制到 `<mod>/addons/`：

| 压缩包中的路径 | 用途 |
| --- | --- |
| `addons/hitboxfixer/hitbox_fix_mm.dll` | Windows 平台的插件文件。 |
| `addons/hitboxfixer/hitbox_fix_mm_i386.so` | Linux 平台的插件文件。 |
| `addons/hitboxfixer/hbf.cfg` | 配置文件，启动时读取。 |

只保留与服务器平台相符的那个文件。

:::note

压缩包中还有 `vis/hitbox_vis.asi`，这是用于在游戏内查看碰撞框的客户端可视化模块。它不属于服务器安装内容，修复本身也不需要它——除非你要在客户端调试碰撞框，否则不必理会。

:::

## 3. 在 Metamod 中注册插件

在 `<mod>/addons/metamod/plugins.ini` 中加入以下内容：

```text
win32 addons\hitboxfixer\hitbox_fix_mm.dll
linux addons/hitboxfixer/hitbox_fix_mm_i386.so
```

## 4. 验证

启动服务器并在控制台执行 `meta list`——插件应出现在已加载列表中。如果没有，请确认引擎是 ReHLDS `3.10`+ 或 HLDS `8648`；其他构建不受支持。

关于 `hbf_enabled`，见[设置](./settings.md)。
