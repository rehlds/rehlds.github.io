---
id: community
title: 社区工具
sidebar_position: 1
description: 社区围绕 ReHLDS 构建的工具——仅供参考，并非由 ReHLDS 组织开发或支持。
slug: /community
---

# 社区工具

本页列出社区围绕 ReHLDS 构建的第三方工具。ReHLDS 组织**既不开发、也不审核或支持**它们；列在这里，只是为了让遇到它们的人能弄清楚它们是什么。

:::warning

本页中的任何内容，使用风险均由你自行承担。组织不会对这些工具进行审核，由它们引发的问题属于它们各自的问题追踪器，而不是 ReHLDS 的。如果你希望得到一套自己能理清、也能获得支持的部署，请按照 [ReHLDS 安装指南](/zh-Hans/docs/rehlds/install)自行安装每个组件。

:::

## rehlds-installer

[lukasenka/rehlds-installer](https://github.com/lukasenka/rehlds-installer) 是一个 shell 脚本，在基于 Debian 的 Linux 系统上一次性搭建完整的服务器技术栈——ReHLDS、Metamod-R、AMX Mod X、ReGameDLL_CS 和 ReUnion 一并安装，并拉取各自的当前发行版。

**面向的系统：** Debian 系发行版——Debian、Ubuntu、Linux Mint、Pop!\_OS、Kali。

**它的吸引力：** 把多步骤的手工安装压缩成一条命令，对第一台服务器来说很有诱惑力。

在运行之前值得掂量的几点：

- **它以 root 身份运行，并且从网络获取。** 文档给出的用法是把脚本下载到 `/root/` 再执行。请像对待任何同类安装脚本一样，先读一遍再运行。
- **它附带了预编译的二进制文件。** 仓库中除脚本外还有一个编译好的 `cs.so`。该文件并非由 ReHLDS 组织构建，也不在其发行版签名体系之内——[ReHLDS 的发行版](/zh-Hans/docs/rehlds/install)本身有 GPG 签名、可以校验，而放在第三方仓库中的二进制文件无法用同样的方式核实。
- **未声明许可证。** 仓库中没有 `LICENSE` 文件，因此复用或再分发的条款并不明确。
- **这是个人项目。** 它确实在积极更新，但背后没有组织，也没有支持承诺。
- **仅有英文。** 脚本及其文档都没有本地化。

如果你使用它，请把结果当作一个起点，随后逐一核实各个组件——在服务器控制台执行 `meta version`、`amxx version`、`amxx modules` 和 `game version`，就能看出实际装上了什么。

:::note

被列入本页并不意味着获得认可。如果你维护着与 ReHLDS 相关的工具并希望被列出，请向 [rehlds.github.io](https://github.com/rehlds/rehlds.github.io) 提交 Pull Request——并请预期它会像上面那样被如实描述，包括其中的注意事项。

:::
