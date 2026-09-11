---
id: rehlds-install
title: 安装
sidebar_position: 2
description: ReHLDS 是对原版 HLDS 重新工程化后的版本，为 Half-Life、Counter-Strike 1.6 等游戏提供更强的安全性、性能和模组能力。
slug: /rehlds/install
---

<head>
  <title>ReHLDS: 安装 | ReHLDS</title>
</head>

# 安装

ReHLDS 可以直接替换 HLDS 的引擎文件。安装过程就是先通过 Steam 下载一个基础的 HLDS 服务器，然后用 ReHLDS 的构建覆盖引擎文件。

## 1. 安装基础 HLDS 服务器

ReHLDS 需要**周年更新前**的 Steam HLDS 构建（引擎版本 8684 或更低）。使用 `steamcmd` 下载：

```text
app_set_config 90 mod cstrike
app_update 90 -beta steam_legacy validate
```

如果你运行的不是 Counter-Strike 1.6，请把 `mod cstrike` 换成目标模组。

:::warning

ReHLDS 与通过旧版 `hldsupdatetool` 安装的 5xxx 及更早构建不兼容。请始终按上面的方式通过 `steamcmd` 安装。

:::

## 2. 下载 ReHLDS

从以下任一处获取构建：

- [正式发行版](https://github.com/rehlds/ReHLDS/releases)——稳定版本，推荐用于生产服务器。
- [开发构建](https://github.com/rehlds/ReHLDS/actions/workflows/build.yml)——最新的 CI 产物，适合验证即将发布的修复。

选择与服务器平台相符的压缩包（Windows 或 32 位 Linux）。

## 3. 替换引擎文件

1. 完全停止服务器。
2. 备份当前的引擎文件。
3. 用 ReHLDS 的文件覆盖原始文件：

| 平台 | 需替换的文件 | 调试符号（可选） |
| --- | --- | --- |
| Windows | `swds.dll` | `swds.pdb` |
| Linux | `engine_i486.so` | — |

Windows 压缩包中还包含 `hlds.exe` / `hltv.exe` 以及 ReHLTV 组件的动态库（`core.dll`、`proxy.dll`、`demoplayer.dll`、`director.dll`、`filesystem_stdio.dll`）；请把你的部署用到的那些文件与 `swds.dll` 一并复制。

4. 在 Linux 上，请确认替换后的文件保留了原有权限（运行服务器的账户可读可执行）。
5. 启动服务器。ReHLDS 会在启动时的控制台输出中标识自己，因此可以通过日志确认替换是否成功。

## 验证发行版签名（可选，但建议执行）

Linux 的发行压缩包使用 GPG 签名。公钥指纹为：

```text
63547829004f07716f7be4856c32c4282e60fb67
```

1. 从密钥服务器下载公钥，例如 [keyserver.ubuntu.com](https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x63547829004f07716f7be4856c32c4282e60fb67)。
2. 导入公钥：

```bash
gpg --import 63547829004f07716f7be4856c32c4282e60fb67.asc
```

3. 同时下载发行压缩包及其附带的 `.asc` 签名文件。
4. 执行验证：

```bash
gpg --verify some-rehlds.zip.asc some-rehlds.zip
```

## 兼容性说明

- ReHLDS 与原版 HLDS **不是二进制兼容**的（二者由不同的编译器构建）。对引擎做底层二进制修补或特征码扫描的插件——已知的例子是 Orpheu——除非显式支持 ReHLDS，否则可能无法工作。
- 如果你打算使用 Metamod-R、ReAPI 或 ReGameDLL_CS，请先安装 ReHLDS——这些项目都假定它已经就位。参见 [Metamod-R 安装](/zh-Hans/docs/metamod-r/install)和 [ReGameDLL_CS 安装](/zh-Hans/docs/regamedll-cs/install)。
