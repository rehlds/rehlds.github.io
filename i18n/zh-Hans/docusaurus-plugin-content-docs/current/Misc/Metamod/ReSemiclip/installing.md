---
id: resemiclip-install
title: 安装
sidebar_position: 2
description: ReSemiclip 是一个 Metamod 插件，用于控制玩家之间能否互相穿过。参考实现为 `joaquimandrade` 的 Semiclip 模块。
slug: /resemiclip/install
---

<head>
  <title>ReSemiclip: 安装 | ReHLDS</title>
</head>

# 安装

ReSemiclip 是一个 Metamod 插件，需要 [ReHLDS](/zh-Hans/docs/rehlds/install)、[ReGameDLL_CS](/zh-Hans/docs/regamedll-cs/install) 和 Metamod（推荐 Metamod-R）已经安装并正常运行——它会挂接这两层的函数。

## 1. 获取 ReSemiclip

从[发行页面](https://github.com/rehlds/ReSemiclip/releases)下载 `resemiclip-*.zip`，或[从源代码构建](./compilling.md)。发行压缩包中已经包含一个可直接使用的 `addons/resemiclip/` 目录，内含插件文件和默认的 `config.ini`。

## 2. 解压到模组目录

把压缩包中的 `addons/resemiclip/` 复制到 `<mod>/addons/resemiclip/`。最终会得到：

| 路径 | 用途 |
| --- | --- |
| `addons/resemiclip/resemiclip_mm.dll` 或 `resemiclip_mm_i386.so` | 插件文件（与平台相关——只保留与服务器相符的那个）。 |
| `addons/resemiclip/config.ini` | 全服务器通用的默认设置。 |
| `addons/resemiclip/maps/` | 按地图和按前缀覆盖配置的示例文件。 |

## 3. 在 Metamod 中注册插件

在 `<mod>/addons/metamod/plugins.ini` 中加入以下内容：

```text
win32 addons\resemiclip\resemiclip_mm.dll
linux addons/resemiclip/resemiclip_mm_i386.so
```

## 4. 进行配置

编辑 `addons/resemiclip/config.ini` 设定全服务器默认值，并可在 `addons/resemiclip/maps/` 中按地图或前缀添加覆盖配置。完整格式与加载顺序见[设置](./settings.md)。

## 5. 验证

启动服务器并执行 `meta list`——列表中应出现已加载的 `ReSemiclip`。在控制台执行不带参数的 `semiclip_option`，可以打印当前生效的设置。
