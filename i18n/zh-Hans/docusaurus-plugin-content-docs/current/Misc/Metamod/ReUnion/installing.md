---
id: reunion-install
title: 安装
sidebar_position: 2
description: ReUnion 是一个 Metamod 插件，让使用协议 47 和 48 的非 Steam 客户端能够连接到 ReHLDS 服务器。
slug: /reunion/install
---

<head>
  <title>ReUnion: 安装 | ReHLDS</title>
</head>

# 安装

ReUnion 是一个 Metamod 插件，需要 [ReHLDS](/zh-Hans/docs/rehlds/install)（API `3.10`+）和 Metamod（推荐 Metamod-R）已经安装并正常运行。

## 1. 获取 ReUnion

从[发行页面](https://github.com/rehlds/ReUnion/releases)下载构建好的版本，或[从源代码构建](./compilling.md)。

## 2. 放置插件

在模组目录（`<gamedir>`——Counter-Strike 为 `cstrike`，Half-Life 为 `valve`，以此类推）的 `addons` 下创建 `reunion` 文件夹，并把与平台相符的文件放进去：

| 平台 | 文件 | 存放位置 |
| --- | --- | --- |
| Windows | `reunion_mm.dll` | `<gamedir>/addons/reunion/reunion_mm.dll` |
| Linux | `reunion_mm_i386.so` | `<gamedir>/addons/reunion/reunion_mm_i386.so` |

## 3. 在 Metamod 中注册插件

编辑 `<gamedir>/addons/metamod/plugins.ini`，添加以下内容，最好放在文件**开头**：

```text
win32 addons\reunion\reunion_mm.dll
linux addons/reunion/reunion_mm_i386.so
```

## 4. 添加配置文件

把发行包中的 `reunion.cfg` 复制到 ReUnion 能找到的位置。它按以下顺序查找，并使用找到的第一个文件：

1. 与插件文件同一目录——`<gamedir>/addons/reunion/reunion.cfg`。
2. 游戏目录根部——`<gamedir>/reunion.cfg`。
3. 服务器的工作目录——`reunion.cfg`。

配置文件的格式见[设置](./settings.md)。

## 5. 启动服务器并验证

启动服务器，在控制台执行 `meta list`：

```text
Currently loaded plugins:
      description      stat pend  file              vers      src   load  unlod
 [ 1] Reunion          RUN   -    reunion_mm_i386.  v0.1.58   ini   Start Never
 [ 2] AMX Mod X        RUN   -    amxmodx_mm_i386.  v1.8.1.3  ini   Start ANY
2 plugins, 2 running
```

如果显示的是 `fail` 而不是 `RUN`，请用 `-console +log on +mp_logecho 1` 启动服务器并查看控制台输出——其中会写明 ReUnion 加载失败的原因（常见的是 `reunion.cfg` 缺失或有误，或者 ReHLDS 版本不兼容）。

## 附带的可选内容

发行压缩包中还包含 `reunion_api.h`（供其他需要直接调用 ReUnion 的 Metamod/GameDLL 插件使用的 C 头文件——[ReAPI](/zh-Hans/docs/reapi) 就用到了它），以及 `addons/amxmodx/scripting/` 下的两个可选 AMX Mod X 脚本（`reu_test.sma`、`updatehint.sma`）。如果你需要一个测试插件或客户端过旧的提示信息，可以单独编译并加载它们。ReUnion 自身的运行并不需要这两者。
