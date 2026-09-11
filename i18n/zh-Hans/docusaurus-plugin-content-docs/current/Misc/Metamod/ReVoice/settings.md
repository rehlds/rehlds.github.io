---
id: revoice-settings
title: 设置
sidebar_position: 3
description: ReVoice 是一个 Metamod 插件，作为语音转码器修复 ReHLDS 服务器上非 Steam 与 Steam 客户端之间的语音聊天。
slug: /revoice/settings
---

<head>
  <title>ReVoice: 设置 | ReHLDS</title>
</head>

# 设置

ReVoice 通过 `addons/revoice/revoice.cfg` 配置。该文件在启动时像普通服务器配置一样被 `exec` 执行——它是一串控制台变量赋值，而不是 INI 文件。

## 控制台变量

| CVar | 默认值 | 说明 |
| --- | --- | --- |
| `REV_DefaultCodec` | `speex` | ReVoice 把普通玩家的出站语音转码成的编解码器。可取 `speex` 或 `opus`。 |
| `REV_HltvCodec` | `opus` | ReVoice 把 HLTV 的出站语音转码成的编解码器。可取 `speex` 或 `opus`。 |
| `revoice_version` | *（当前版本）* | 只读；报告已加载的 ReVoice 版本。 |

随包提供的默认配置：

```text
REV_HltvCodec opus		// speex, opus
REV_DefaultCodec speex	// speex, opus
```

变量的改动会立即生效——ReVoice 会监听这两个编解码器变量的变化并重新应用，无需重启。

:::note

`sv_voiceenable` 是引擎的标准变量，不是 ReVoice 的设置；只有它为 `1`，语音聊天才能工作。ReVoice 只是在语音聊天已经启用的前提下，修复 Steam 与非 Steam 客户端之间的编解码器兼容性。

:::

## 控制台命令

```text
rev version
rev status
```

- `rev version`——输出已加载的 ReVoice 版本、构建日期和提交。
- `rev status`——输出详细的运行状态（专为诊断语音问题而添加）。
