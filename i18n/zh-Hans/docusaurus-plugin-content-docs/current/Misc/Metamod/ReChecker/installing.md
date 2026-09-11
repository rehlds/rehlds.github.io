---
id: rechecker-install
title: "ReChecker: 安装"
sidebar_label: 安装
sidebar_position: 2
description: ReChecker 是一个 Metamod 插件，可按文件名和 md5 哈希校验客户端文件。
slug: /rechecker/install
keywords:
  - rechecker
  - metamod
  - plugin
  - install
  - 安装
tags:
  - rechecker
  - install
last_update:
  date: 07/21/2025
  author: STAM
---

# 安装

ReChecker 是一个 Metamod 插件，需要 [ReHLDS](/zh-Hans/docs/rehlds/install) 和 Metamod（推荐 Metamod-R）已经安装并正常运行。

## 1. 获取 ReChecker

从[发行页面](https://github.com/rehlds/ReChecker/releases)下载构建好的版本，或[从源代码构建](./compilling.md)。

## 2. 放置插件

在模组目录的 `addons` 下创建 `rechecker` 文件夹，并把与平台相符的文件放进去：

| 平台 | 文件 | 存放位置 |
| --- | --- | --- |
| Windows | `rechecker_mm.dll` | `<mod>/addons/rechecker/rechecker_mm.dll` |
| Linux | `rechecker_mm_i386.so` | `<mod>/addons/rechecker/rechecker_mm_i386.so` |

## 3. 添加规则文件

把项目的 [`dist/resources.ini`](https://github.com/rehlds/ReChecker/blob/master/dist/resources.ini) 模板复制到插件文件旁边：

```text
<mod>/addons/rechecker/resources.ini
```

ReChecker 从插件文件所在的同一目录读取 `resources.ini`，而不是从模组根目录。文件格式见[设置](./settings.md)。

## 4. 在 Metamod 中注册插件

在 `<mod>/addons/metamod/plugins.ini` 中加入以下内容：

```text
win32 addons\rechecker\rechecker_mm.dll
linux addons/rechecker/rechecker_mm_i386.so
```

## 5. 验证

启动服务器并在控制台执行 `meta list`——列表中应出现已加载的 `Rechecker`。如果加载失败，请确认服务器确实运行在 ReHLDS 上（ReChecker 使用 ReHLDS 的扩展引擎 API，在原版 HLDS 上会拒绝加载）。
