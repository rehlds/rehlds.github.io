---
id: rehlds-troubbleshouting
title: 故障排查
sidebar_position: 4
description: ReHLDS 是对原版 HLDS 重新工程化后的版本，为 Half-Life、Counter-Strike 1.6 等游戏提供更强的安全性、性能和模组能力。
slug: /rehlds/troubbleshouting
---

<head>
  <title>ReHLDS: 故障排查 | ReHLDS</title>
</head>

# 故障排查

## 服务器一启动就崩溃（「Illegal instruction」之类）

ReHLDS 的二进制文件需要 `SSE`、`SSE2` 和 `SSE3` 指令集（在可用时还会使用 `SSE4.1` / `SSE4.2`）。这几乎总是处理器或虚拟化的问题，而不是配置问题：

- 确认宿主机的处理器确实支持 SSE3。在 2005 年以后的真实硬件上很少出问题，但某些精简的 VPS 或虚拟机配置只向客户机暴露了缩减过的指令集。
- 如果服务器运行在虚拟机中，请检查虚拟化平台的处理器型号和特性透传设置。

## 引擎加载失败，或表现得像「文件不对」

通常是引擎版本或平台不匹配：

- 确认基础服务器是通过 `steamcmd` 安装的周年更新前 Steam 构建（引擎版本 ≤ 8684），具体见[安装](./installing.md)一节。ReHLDS **不兼容**通过旧版 `hldsupdatetool` 安装的 5xxx 及更早构建。
- 确认你复制的是与操作系统相符的文件：Windows 用 `swds.dll`，Linux 用 `engine_i486.so`。混用其他平台的文件（或只复制了一部分）都无法加载。
- 在 Linux 上，确认替换后的文件仍然对运行服务器的账户保留了读取和执行权限。

## 安装 ReHLDS 后第三方插件失效

ReHLDS 与原版 HLDS **不是二进制兼容**的——它使用与 Valve 原始文件不同的编译器构建。对引擎做底层二进制修补或特征码扫描的插件（已知的例子是 Orpheu）可能因此失效，除非插件显式支持 ReHLDS。在断定是 ReHLDS 本身的问题之前，请先查看该插件自己的更新日志和问题追踪器中有无关于 ReHLDS 兼容性的说明。

## GPG 签名验证失败

1. 确认你导入的是正确的公钥（指纹 `63547829004f07716f7be4856c32c4282e60fb67`），可从 [keyserver.ubuntu.com](https://keyserver.ubuntu.com/pks/lookup?search=63547829004f07716f7be4856c32c4282e60fb67+&fingerprint=on&op=index) 之类的密钥服务器获取。
2. 确认 `.asc` 签名文件与你下载的压缩包配套——它们按发行版成对发布，不同版本之间不能互换。
3. 如果其中任一文件被中间代理或 CDN 修改过，请重新下载两个文件（某些企业代理会改写下载的二进制内容）。

## 如何获取崩溃信息

如果服务器是崩溃退出而非正常退出：

- **Linux**——使用 `-debug` 参数启动服务器。若已安装 `gdb`，ReHLDS 会自动把崩溃详情写入 `debug.log`，通常足以定位崩溃位置，而无需完整的核心转储。若还想保留核心转储，请在启动服务器前为该进程开启（`ulimit -c unlimited`），并可考虑执行 `echo 1 > /proc/sys/kernel/core_uses_pid`，以免多次崩溃互相覆盖。
- **Windows**——通过 Windows 错误报告为 `hlds.exe` 开启小型转储或完整转储（在组策略中依次是 `计算机配置 → 管理模板 → Windows 组件 → Windows 错误报告`，或使用对应的注册表项），也可以使用专门的崩溃转储工具。

:::warning

崩溃转储和 `debug.log` 可能包含服务器的敏感信息（包括与 RCON 相关的数据）。请勿公开发布——与开发者共享时，请通过私密渠道直接发送，或放入加密并设置密码的压缩包。

:::

## 如何反馈问题

请在 [ReHLDS 问题追踪器](https://github.com/rehlds/ReHLDS/issues)中新建 issue，并附上：

- ReHLDS 的构建或版本（发行标签或提交）以及平台（Windows／Linux）。
- 安装所基于的 HLDS 引擎的确切构建或版本。
- 你运行的模组（Half-Life、Counter-Strike 1.6、Condition Zero 等）及其版本。
- 如有使用，请附上 Metamod、AMX Mod X、ReGameDLL_CS 的版本和插件列表。
- 复现问题的步骤，以及相关的控制台输出、`debug.log` 或崩溃转储。

一开始提供的细节越充分，维护者复现并修复问题就越快。
