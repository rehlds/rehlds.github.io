---
id: hitboxtracker
title: hitboxtracker
sidebar_position: 1
description: hitboxtracker 是 ReHLDS 的已废弃开发工具，用于在客户端绘制服务器计算出的碰撞框位置。
slug: /hitboxtracker
---

# 什么是 hitboxtracker？

:::warning 已废弃

hitboxtracker **已废弃，不再维护**。此处记录仅供参考——请勿在当前的服务器上部署。

要在现代服务器上获得正确的碰撞框，请使用 @Garey27 的 [Hitbox Fixer](/zh-Hans/docs/hitbox-fixer)，ReHLDS 组织也把它列为现行的替代品。请注意二者并不等价：hitboxtracker 只是把问题*显示*出来，而 Hitbox Fixer 是真正*修复*它。

:::

hitboxtracker 是一个开发工具，而不是服务器功能。它由服务器上的一个 Metamod 插件和客户端的一个配套模块组成，会在客户端屏幕上把**服务器计算出的**碰撞框真实位置画出来——就画在客户端自认为的位置旁边。

这让一类原本看不见的问题变得可见：当两套框对不上时，看起来像命中的射击会被判为未命中。没有这类工具，排查这种问题只能靠猜。

## 为什么被废弃

项目被搁置，取而代之的是一个直接修正碰撞框、而非把它画出来的插件。此外，它的绘制方式依赖特定的客户端构建和一个自带的启动器，随着时间推移越来越难以维护。

## 工作方式

服务器插件通过 `svc_director` 消息通道把计算好的碰撞框数据发给客户端——更早的版本使用 delta，这一点在 `v1.1` 中改变。客户端模块随后借助为标准 `r_drawentities` 变量新增的两种模式来绘制这些框。

这些模式见[设置](./settings.md)，它所需要的安装步骤见[安装](./installing.md)。
