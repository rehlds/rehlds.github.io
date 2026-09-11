---
id: metamod-r-install
title: 安装
sidebar_position: 2
description: Metamod-R 是原版 Metamod 的优化版本，为 Half-Life 1 服务器提升性能与兼容性。
slug: /metamod-r/install
---

<head>
  <title>Metamod-R: 安装 | ReHLDS</title>
</head>

# 安装

请先查看[支持的游戏列表](/zh-Hans/docs/metamod-r/supported-games)，确认其中有你的游戏。_如果没有也不必沮丧。安装之后，你可以按照这篇[文档](/zh-Hans/docs/metamod-r/settings)进行细致调整，再验证 **Metamod-r** 与你那个`不受支持的`模组能否配合工作。游戏有可能正常启动。_

# 兼容性

**Metamod-r 与原版 `HLDS` 不兼容。必须事先安装 [ReHLDS](https://github.com/rehlds/ReHLDS)（`API 3.1+`）。在其他环境下无法保证该产品能够正常工作。**

| HLDS| [ReHLDS](https://github.com/rehlds/ReHLDS)| 操作系统
|---------| -------|  -------|  
| :x: | `API 3.1+` | ![](https://i.imgur.com/AzhAYR4.png) ![](https://i.imgur.com/t23p9tU.png) |  

# 在游戏服务器上安装
* 把最新版本的 _**Metamod-r**_ [![Download](https://camo.githubusercontent.com/2b15ec2fc402e02b66fde9eab7e896406caeddac/687474703a2f2f7265686c64732e6f72672f76657273696f6e2f6d6574616d6f642d2d722e737667)](http://teamcity.rehlds.org/guestAuth/downloadArtifacts.html?buildTypeId=Metamod_Publish&buildId=lastSuccessful) 下载到任意方便的位置。
* 把下载到的 zip 压缩包中的 _**addons**_ 目录解压到你的模组目录中。![](https://i.imgur.com/ptx3MZx.png)
_如果在确定目录名称时遇到困难，请参考**[这里](/zh-Hans/docs/metamod-r/troubbleshouting)**给出的汇总表格。_
* 在模组目录中找到 `liblist.gam` 文件，按需为它做一份备份，然后用任意顺手的文本编辑器打开。
* 在 `liblist.gam` 中找到包含 `gamedll` 和 `gamedll_linux` 的行。_例如 `Half-Life 1` 的内容是这样：_
```
gamedll "dlls\hl.dll"
gamedll_linux "dlls/hl.so"
```
_而 `Counter-Strike 1.6` 则是：_

```
gamedll "dlls\mp.dll"
gamedll_linux "dlls/cs.so"
```
* 把对应行中的路径替换为 metamod-r 的路径：

_Windows 版服务器：_
```
gamedll "addons\metamod\metamod.dll"
```
_Linux 版服务器：_
```
gamedll_linux "addons/metamod/metamod_i386.so"
```
* 保存对 `liblist.gam` 的修改。
* **Metamod-r** 安装完成。

# 检查

成功安装 **Metamod-r** 之后，可以启动游戏服务器来验证是否工作正常。

**Metamod-r** 正常工作时：
![](https://i.imgur.com/VScngBr.png)
如果没有正常工作：
![](https://i.imgur.com/HPKRiBF.png)
请参阅[故障排查指南](/zh-Hans/docs/metamod-r/troubbleshouting)。
