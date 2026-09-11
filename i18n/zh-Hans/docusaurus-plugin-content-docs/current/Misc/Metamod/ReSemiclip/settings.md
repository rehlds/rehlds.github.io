---
id: resemiclip-settings
title: 设置
sidebar_position: 3
description: ReSemiclip 是一个 Metamod 插件，用于控制玩家之间能否互相穿过。参考实现为 `joaquimandrade` 的 Semiclip 模块。
slug: /resemiclip/settings
---

<head>
  <title>ReSemiclip: 设置 | ReHLDS</title>
</head>

# 设置

## `config.ini`

`addons/resemiclip/config.ini` 保存全服务器通用的默认值，每行形如 `键 = 值;`：

| 键 | 取值范围 | 默认值（随包提供） | 说明 |
| --- | --- | --- | --- |
| `semiclip` | `0`–`1` | `1` | 关闭或开启 semiclip。 |
| `team` | `0`–`3` | `3` | 作用对象：`0` 所有人，`1` 仅恐怖分子，`2` 仅反恐精英，`3` 仅队友。 |
| `time` | `0`–`180` | `0` | 从回合开始起 semiclip 生效的秒数。`0` 表示一直生效，而不是只在这段时间内生效。 |
| `crouch` | `0`–`1` | `1` | 允许玩家跳到正在蹲下的玩家身上。 |
| `effects` | `0`–`1` | `0` | 玩家的透明度是否随玩家间距离变化。 |
| `distance` | `64`–`250` | `200` | 透明效果与 semiclip 生效的距离（单位）。 |
| `transparency` | `0`–`255` | `120` | 处于 semiclip 状态时玩家的透明度。 |
| `penetfire` | `0`–`1` | `0` | 允许子弹穿过处于 semiclip 状态的队友。 |

超出范围的取值不会被拒绝，而是收敛到最接近的合法边界。

## 按地图与按前缀的覆盖配置

ReSemiclip 按以下顺序加载配置，每一步只覆盖其中设定过的键：

1. `addons/resemiclip/config.ini`——全服务器默认值。
2. `addons/resemiclip/maps/prefix_<前缀>.ini`，其中 `<前缀>` 是当前地图名中第一个下划线之前的部分（例如 `de_dust2` 的前缀是 `de`）。
3. `addons/resemiclip/maps/<地图名>.ini`——与当前地图名完全一致（例如 `de_dust2.ini`）。

:::note

`maps/` 目录下随包提供的示例文件（`_de_dust2.ini`、`_prefix_de.ini`）刻意以下划线开头——这样的文件名 ReSemiclip 并不会去查找。它们只是未生效的模板；把文件重命名为确切的预期名称（`de_dust2.ini`、`prefix_de.ini`）即可启用。

:::

## 运行时的控制台命令

```text
semiclip_option <key> <value>
```

在服务器运行期间修改单项设置，使用的键与 `config.ini` 相同（例如 `semiclip_option time 5`）。若要改为打印当前生效的设置，执行不带参数、或带一个无效键的 `semiclip_option`。
