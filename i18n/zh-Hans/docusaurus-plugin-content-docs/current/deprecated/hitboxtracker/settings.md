---
id: hitboxtracker-settings
title: 设置
sidebar_position: 3
description: hitboxtracker 是 ReHLDS 的已废弃开发工具，用于在客户端绘制服务器计算出的碰撞框位置。
slug: /hitboxtracker/settings
---

<head>
  <title>hitboxtracker: 设置 | ReHLDS</title>
</head>

# 设置

:::warning 已废弃

此处记录仅供参考。hitboxtracker 已不再维护——参见[什么是 hitboxtracker？](./index.md)。

:::

hitboxtracker 没有添加自己的控制台变量。它为标准的客户端变量 `r_drawentities` 扩展了两种额外模式，因此全部操作都在客户端控制台完成。

## `r_drawentities`

| 取值 | 说明 |
| --- | --- |
| `0` | 不绘制实体。 |
| `1` | 默认——正常绘制实体。 |
| `2` | 以骨架形式绘制实体。 |
| `3` | 以碰撞框形式绘制实体。 |
| `4` | 以半透明碰撞框绘制实体，并在其下显示模型。 |
| `5` | 为玩家和武器分别绘制单独的框。 |
| `6` | 由 hitboxtracker 添加。与 `4` 相同，另外还绘制服务器计算出的碰撞框真实位置。 |
| `7` | 由 hitboxtracker 添加。与 `6` 相同，但不使用半透明。 |

`0`–`5` 是引擎自身的取值，没有这个工具也能用。只有 `6` 和 `7` 需要 hitboxtracker 的两半都已安装。

:::note

`6` 和 `7` 两种模式的意义正在于那段*偏差*：你把客户端自己的框与服务器的框作对比，两者之间可见的错位，就解释了那些原本看起来像是玩家臆想的命中判定投诉。

:::
