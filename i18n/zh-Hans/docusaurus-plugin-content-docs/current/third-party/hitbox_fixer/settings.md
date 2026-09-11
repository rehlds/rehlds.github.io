---
id: hitbox-fixer-settings
title: 设置
sidebar_position: 3
description: Hitbox Fixer 是第三方 Metamod 插件，修复 Counter-Strike 1.6、Half-Life 和 Adrenaline Gamer 中服务端玩家碰撞框错位的问题。
slug: /hitbox-fixer/settings
---

<head>
  <title>Hitbox Fixer: 设置 | ReHLDS</title>
</head>

# 设置

Hitbox Fixer 通过 `addons/hitboxfixer/hbf.cfg` 配置，该文件与插件文件放在同一目录。其中只有一个控制台变量。

## 控制台变量

| CVar | 默认值 | 说明 |
| --- | --- | --- |
| `hbf_enabled` | `1` | 启用碰撞框修正。设为 `0` 可在不从 Metamod 卸载插件的前提下关闭它。 |

随包提供的默认配置只有一行：

```text
hbf_enabled "1"
```

:::note

关闭 `hbf_enabled` 会恢复引擎原有的（有问题的）碰撞框行为。这个开关主要是为了在排查命中判定投诉时，能在正式服务器上直接对比两种状态——日常运行没有理由让它保持 `0`。

:::
