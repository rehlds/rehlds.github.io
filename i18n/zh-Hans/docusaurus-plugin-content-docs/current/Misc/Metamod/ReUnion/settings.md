---
id: reunion-settings
title: 设置
sidebar_position: 3
description: ReUnion 是一个 Metamod 插件，让使用协议 47 和 48 的非 Steam 客户端能够连接到 ReHLDS 服务器。
slug: /reunion/settings
---

<head>
  <title>ReUnion: 设置 | ReHLDS</title>
</head>

# 设置

ReUnion 完全通过 `reunion.cfg` 进行配置。默认的配置文件写有详尽的注释——本页对其中各节做简要说明。

:::warning

配置文件开头写着「如果不清楚含义就不要改动任何内容」，这话是有道理的——大多数默认值都已调校妥当。请有意识地逐项修改。

:::

## 客户端 ID 类型（`cid_*`）

每个 `cid_*` 选项为某一类客户端指定 ID 类型。可用的类型代码如下：

| 代码 | 含义 |
| --- | --- |
| `1` | 真实的（或依据硬件生成的）Steam ID（`STEAM_xx:xx:xx`）。 |
| `2` | 真实的（或依据硬件生成的）Valve ID（`VALVE_xx:xx:xx`）。 |
| `3` | 依据客户端 IP 生成的 `STEAM_` 标识符。 |
| `4` | 依据客户端 IP 生成的 `VALVE_` 标识符。 |
| `5` | 已弃用——拒绝该客户端。 |
| `6` | 保留，供将来使用。 |
| `7` | HLTV。 |
| `8` | `STEAM_ID_LAN`。 |
| `9` | `STEAM_ID_PENDING`。 |
| `10` | `VALVE_ID_LAN`。 |
| `11` | `VALVE_ID_PENDING`。 |
| `12` | `STEAM_666:88:666`。 |

| 选项 | 默认值 | 适用对象 |
| --- | --- | --- |
| `cid_Steam` | `1` | 正规的 Steam 客户端。 |
| `cid_SteamPending` | `5` | 授权成功但未获得可用 Steam ID 的客户端。 |
| `cid_HLTV` | `5` | HLTV 转播端。 |
| `cid_NoSteam47` | `5` | 不支持生成唯一标识符的协议 47 客户端。 |
| `cid_NoSteam48` | `5` | 不支持生成唯一标识符的协议 48 客户端。 |
| `cid_RevEmu` | `1` | revEmu ≥ 9.74。 |
| `cid_RevEmu2013` | `1` | RevEmu 2013。 |
| `cid_SC2009` | `1` | SteamClient 2009 / revEmu > 9.82。 |
| `cid_OldRevEmu` | `1` | 较旧的 revEmu 版本。 |
| `cid_SteamEmu` | `1` | hCupa 的 SteamEmu。 |
| `cid_AVSMP` | `1` | AVSMP（破解版 Steam）。 |
| `cid_Setti` | `3` | SETTI 服务器扫描器。 |
| `cid_SXEI` | `1` | sXeI 客户端。 |

`HLTVExcept_IP`（默认 `127.0.0.1`）可以让来自指定 IP 的 HLTV 在 `cid_HLTV` 拒绝 HLTV 客户端时依然接入。

## 授权设置

| 选项 | 默认值 | 说明 |
| --- | --- | --- |
| `AuthVersion` | `4` | 授权协议版本：`1` 为 DProto（已弃用），`2` 为 Reunion 2015–2018，`3` 为 Reunion 2018–2024，`4` 为当前版本（推荐）。 |
| `SteamIdHashSalt` | *（空）* | 用于对生成的 Steam ID 做哈希的盐值，使其不可逆推，从而防止标识符被盗用。建议长度 32 个字符以上，最少 16 个。当 `AuthVersion >= 3` 时，留空会导致 ReUnion **初始化失败**——若要关闭哈希（不推荐），请显式填 `0`，而不要留空。 |
| `SC2009_RevCompatMode` | `1` | 让 SC2009 生成的标识符与 revEmu 兼容。当 `AuthVersion >= 3` 时无法关闭。 |
| `EnableSXEIdGeneration` | `0` | 启用基于 sXeI 客户端数据的标识符生成。只有当你确实部署了支持 sXeI 的环境时才应开启。 |
| `EnableGenPrefix2` | `0` | 添加第二个标识符前缀，降低生成标识符发生碰撞的概率。仅在设置了 `SteamIdHashSalt` 时生效；当 `AuthVersion >= 3` 时无法关闭。 |

### 旧版 authid 前缀

`IPGen_Prefix1/2`、`Native_Prefix1`、`RevEmu*_Prefix1`、`SC2009_Prefix1`、`OldRevEmu_Prefix1`、`SteamEmu_Prefix1`、`AVSMP_Prefix1`、`Setti_Prefix1` 和 `SXEI_Prefix1` 这些选项仅在 `AuthVersion` 为 `1` 或 `2` 时生效。使用推荐的 `AuthVersion = 4` 时，整节都会被忽略——保持默认值即可。

无论使用哪个版本，`banid` 始终使用**不带**任何前缀的 SteamID。

## 服务器查询

| 选项 | 默认值 | 说明 |
| --- | --- | --- |
| `ServerInfoAnswerType` | `0` | `0` 为新式（Steam）应答（推荐），`1` 为旧式 GoldSrc 应答，`2` 为混合模式：两边都可见，但每个查询会应答三次。 |
| `FixBuggedQuery` | `1` | 修复服务器浏览器有缺陷的客户端，否则它们会在连接时卡死。 |
| `EnableQueryLimiter` | `1` | 限制服务器查询（TSource、玩家列表等）的频率。若你已在外部做了限流，可设为 `0`。 |
| `QueryFloodBanLevel` | `400` | 触发 IP 封禁的每秒查询次数。范围 `320`–`2048`；正常流量很少超过每秒约 80 次。 |
| `QueryFloodBanTime` | `10` | 查询洪水的封禁时长（分钟），范围 `0`–`60`。`0` 表示只拦截而不封禁。 |
| `QueryLimiterExceptIP` | *（配置节，默认为空）* | 不受查询限流影响的 IP 列表（在 `[QueryLimiterExceptIP]` 节中每行一个）。 |
| `AllowSplitPackets` | `0` | 允许把大于 1400 字节的出站数据包拆分，与原版 Steam 客户端的做法一致。部分监控工具不支持这一点。 |
| `IDClientsLimit` | `1` | 同一 Steam ID 允许的并发客户端数，范围 `0`–`32`。`0` 表示取消限制。在用多个客户端实例调试时很有用。 |

## 日志

| 选项 | 默认值 | 说明 |
| --- | --- | --- |
| `LoggingMode` | `0` | `0` 关闭，`1` 输出到控制台，`2` 写入日志文件，`3` 两者都做。 |

## 常见问题

- **我按 DProto 的方式设置了 `SteamIdHashSalt`，但玩家的 SteamID 不一样。** ReUnion 使用的是另一套更安全的哈希算法。知道启用 `SteamIdHashSalt` 之前的玩家 SteamID，并不能帮助推算出之后的结果。
- **对于 SteamID 篡改能做些什么吗？** 没有办法——ID 篡改工具会生成合法的授权票据，服务器无从判断标识符是否被替换。至少设置了 `SteamIdHashSalt` 之后，别人无法刻意冒充*某个特定*玩家的 ID。
- **某些服务器监控工具取不到玩家列表。** 它们多半在使用过时的查询格式；请改用当前的查询库，例如 [PHP-Source-Query](https://github.com/xPaw/PHP-Source-Query) 或同类实现。
- **DProto 有 `Game_Name` 选项，ReUnion 没有。** 请改从插件中修改对外显示的游戏名称。
