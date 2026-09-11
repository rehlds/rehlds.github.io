---
id: rechecker-settings
title: "ReChecker: 设置"
sidebar_label: 设置
sidebar_position: 3
description: ReChecker 是一个 Metamod 插件，可按文件名和 md5 哈希校验客户端文件。
slug: /rechecker/settings
keywords:
  - rechecker
  - metamod
  - plugin
  - settings
  - 设置
tags:
  - rechecker
  - settings
last_update:
  date: 07/21/2025
  author: STAM
---

# 设置

ReChecker 通过 `addons/rechecker/resources.ini`（与插件文件同一目录）和一个控制台变量进行配置。

## `resources.ini` 的格式

每条规则占一行，包含路径、哈希（或关键字）以及命中时执行的命令，另可附加标志：

```text
path to file        hash          "exec cmd"      [FLAGS]
"../opengl32.dll"    3cc7f256      "kick [userid]"
```

### 哈希字段

| 取值 | 含义 |
| --- | --- |
| 十六进制哈希（例如 `3cc7f256`） | 匹配该具体哈希。4 个字节（8 个十六进制字符）即可，无需完整的 MD5。 |
| `UNKNOWN` | 匹配同一路径下未被其他规则覆盖的任何哈希。 |
| `MISSING` | 当客户端根本没有传输该文件时匹配。 |

### 标志

| 标志 | 作用 |
| --- | --- |
| `BREAK` | 该规则命中后，不再对此客户端检查后续规则。 |
| `IGNORE` | 把这个具体哈希加入白名单——不执行任何命令。 |

### 命令中的占位符

可在 `"exec cmd"` 字符串中使用：

| 占位符 | 取值 |
| --- | --- |
| `[name]` | 客户端的昵称。 |
| `[ip]` | 客户端的 IP 地址。 |
| `[id]` | 客户端的索引。 |
| `[userid]` | 客户端的 userid。 |
| `[steamid]` | 客户端的 SteamID。 |
| `[file_name]` | 被校验文件的路径。 |
| `[file_hash]` | 客户端就该文件返回内容的哈希。 |
| `[file_md5hash]` | 客户端就该文件返回内容的完整 MD5 哈希。 |

### 规则示例

```ini
; Kick on a known bad file hash, stop checking further rules for this client
"../demoplayer.dll"    ad6d0e43    "kick [userid] 'WallHack Detected'"    BREAK

; Whitelist a known-good hash for the same path
"../demoplayer.dll"    7ef5b581    IGNORE

; Log (but don't kick) any hash of a file you're not tracking yet
"../demoplayer.dll"    UNKNOWN     "echo ' -> file: ([file_name]), md5hex: ([file_md5hash]) for ([name])'"

; Kick when a file is expected but missing
"../opengl32.dll"      MISSING     "kick [userid] 'OpenGL32 Missing'"     BREAK
```

`resources.ini` 支持 UTF-8 BOM，以及以 `;` 开头的注释行。建议以项目的 [`dist/resources.ini`](https://github.com/rehlds/ReChecker/blob/master/dist/resources.ini) 模板为起点——其中已包含若干历史上已知作弊文件的特征——再由你自行扩充。

## 控制台变量

| CVar | 默认值 | 说明 |
| --- | --- | --- |
| `rch_log` | `0` | 日志详细程度。`0` 表示关闭日志；数值越大记录越详细。 |

## 日志

启用 `rch_log` 后，ReChecker 会把按日分割的日志文件写入 `addons/rechecker/logs/`。
