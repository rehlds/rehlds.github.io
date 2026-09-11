---
id: rehlds-settings
title: 设置
sidebar_position: 3
description: ReHLDS 是对原版 HLDS 重新工程化后的版本，为 Half-Life、Counter-Strike 1.6 等游戏提供更强的安全性、性能和模组能力。
slug: /rehlds/settings
---

<head>
  <title>ReHLDS: 设置 | ReHLDS</title>
</head>

# 设置

ReHLDS 在标准 HLDS 控制台变量（cvar）之外新增了一组服务器变量，主要用于反作弊与防滥用调节、网络处理以及行为修复。可在 `server.cfg` 或任何随启动执行的配置文件中设置它们。

## 控制台变量

| CVar | 默认值 | 说明 |
| --- | --- | --- |
| `sv_auto_precache_sounds_in_models` | `0` | 自动预缓存绑定在模型上的音效。 |
| `sv_delayed_spray_upload` | `0` | 在玩家进入游戏后再上传自定义喷漆，而不是在连接时上传。可提高上传速度。 |
| `sv_echo_unknown_cmd` | `0` | 当客户端尝试执行未知命令时，在控制台输出提示。 |
| `sv_rcon_condebug` | `1` | 在控制台输出 RCON 调试信息。 |
| `sv_force_ent_intersection` | `0` | 供第三方插件使用，用于强制 `SOLID_SLIDEBOX` 实体产生碰撞。 |
| `sv_rehlds_force_dlmax` | `0` | 强制把客户端的 `cl_dlmax` 变量设为 `1024`，避免数据包过度分片。 |
| `sv_rehlds_hull_centering` | `0` | 使用碰撞体的中心而非其角点。 |
| `sv_rehlds_movecmdrate_max_avg` | `400` | 触发封禁前允许的「移动」命令平均速率上限。 |
| `sv_rehlds_movecmdrate_avg_punish` | `5` | 超出 `sv_rehlds_movecmdrate_max_avg` 时的封禁时长（分钟）。`0` 表示永久封禁，负值表示踢出。 |
| `sv_rehlds_movecmdrate_max_burst` | `2500` | 触发封禁前允许的「移动」命令峰值速率上限。 |
| `sv_rehlds_movecmdrate_burst_punish` | `5` | 超出 `sv_rehlds_movecmdrate_max_burst` 时的封禁时长（分钟）。`0` 表示永久封禁，负值表示踢出。 |
| `sv_rehlds_send_mapcycle` | `0` | 在服务器信息消息中发送 `mapcycle.txt`（与原版 HLDS 行为一致；客户端并不使用）。 |
| `sv_rehlds_stringcmdrate_max_avg` | `80` | 触发封禁前允许的「字符串」命令平均速率上限。 |
| `sv_rehlds_stringcmdrate_avg_punish` | `5` | 超出 `sv_rehlds_stringcmdrate_max_avg` 时的封禁时长（分钟）。`0` 表示永久封禁，负值表示踢出。 |
| `sv_rehlds_stringcmdrate_max_burst` | `400` | 触发封禁前允许的「字符串」命令峰值速率上限。 |
| `sv_rehlds_stringcmdrate_burst_punish` | `5` | 超出 `sv_rehlds_stringcmdrate_max_burst` 时的封禁时长（分钟）。`0` 表示永久封禁，负值表示踢出。 |
| `sv_rehlds_userinfo_transmitted_fields` | `""` | 只有在此列出的 userinfo 键才会通过网络发送给客户端。留空表示发送全部字段（以 `_` 开头的键除外）。每个键前需加反斜杠，例如 `\name\model\*sid\*hltv\bottomcolor\topcolor`。完整参考见 [Userinfo keys](https://github.com/rehlds/ReHLDS/wiki/Userinfo-keys)。 |
| `sv_rehlds_attachedentities_playeranimationspeed_fix` | `0` | 修复玩家身上附着实体（aiments）时出现的步态动画速度错误。当 `cl_updaterate` 较低时可能导致动画延迟。 |
| `sv_rehlds_maxclients_from_single_ip` | `5` | 限制同一 IP 地址的并发连接数（不影响已连接的玩家）。 |
| `sv_rehlds_local_gametime` | `0` | 减轻同一张地图长时间运行后玩家感觉到的「延迟」。 |
| `sv_rehlds_allow_large_sprays` | `1` | 允许大于 64x64 的自定义喷漆。 |
| `sv_use_entity_file` | `0` | 控制是否为地图使用单独的实体文件（`maps/[地图名].ent`）。`0` 为原始实体，`1` 为使用 maps 目录下的 `.ent` 文件，`2` 为使用 `.ent` 文件并在缺失时创建。 |
| `sv_usercmd_custom_random_seed` | `0` | 填充一个独立于客户端的额外随机数种子。 |
| `sv_net_incoming_decompression` | `1` | 解压传入的、经过压缩的文件传输数据。 |
| `sv_net_incoming_decompression_max_ratio` | `80.0` | 文件传输中压缩前后数据量的最大允许比值，范围 `0`–`100`。接近 90 的比值意味着数据量大且熵值低。 |
| `sv_net_incoming_decompression_max_size` | `65536` | 文件传输中解压后数据的最大允许字节数，范围 `16`–`65536`。 |
| `sv_net_incoming_decompression_min_failures` | `4` | 连接被标记为可能受罚之前所需的最少解压失败次数，范围 `0`–`10`。 |
| `sv_net_incoming_decompression_max_failures` | `10` | 在统计窗口内允许的最大解压失败次数，超出后将采取措施，范围 `0`–`10`。 |
| `sv_net_incoming_decompression_min_failuretime` | `0.1` | 统计解压失败的时间窗口（秒），范围 `0.1`–`10.0`。 |
| `sv_net_incoming_decompression_punish` | `-1` | 针对畸形或异常 bzip2 分片的封禁时长（分钟）。`0` 表示永久封禁，负值表示踢出。 |
| `sv_tags` | `""` | 服务器「游戏标签」列表，以逗号分隔，用于匹配和服务器浏览器中的筛选。 |
| `sv_filterban` | `1` | IP 过滤模式。`-1` 表示无条件拒绝所有玩家，`0` 表示不做检查，`1` 表示踢出命中 IP 过滤或封禁记录的玩家。 |
| `sv_rehlds_movecmd_max_ticks` | `24` | 服务器在单帧内处理同一玩家移动命令的最大数量（按命令计，而非按数据包计）。 |
| `sv_rehlds_movecmd_max_null_streak` | `0` | 允许连续出现的零时长移动命令（空命令）的最大数量。`0` 表示关闭该检查。 |
| `sv_rehlds_movecmd_clamp_interp` | `1` | 拦截 `ex_interp` 取值超出允许范围的移动命令。 |
| `sv_rehlds_movecmdtime_samples` | `120` | 用于平均客户端移动速度的帧数。数值越大越准确，但检测越慢。 |
| `sv_rehlds_movecmdtime_max_error` | `300` | 在评估速度之前，允许客户端内部游戏时钟与服务器时钟相差的毫秒数。只有同时违反 `sv_rehlds_movecmdtime_max_scale` / `_min_scale` 时才会施加惩罚。 |
| `sv_rehlds_movecmdtime_max_scale` | `3.0` | 客户端基础游戏速度的上限倍率。超出此值加速的客户端会收到警告。 |
| `sv_rehlds_movecmdtime_min_scale` | `0.5` | 客户端基础游戏速度的下限倍率。低于此值减速的客户端会收到警告。 |
| `sv_rehlds_movecmdtime_max_warnings` | `-1` | 施加惩罚前允许的加速／减速外挂警告次数。`-1` 表示关闭检测。 |
| `sv_rehlds_movecmdtime_punish` | `-1` | 针对加速或减速作弊的惩罚（`-1` 表示踢出，`0` 表示永久封禁，负值表示踢出）。 |
| `sv_reconnect_timeout` | `30` | 换图后客户端必须在此秒数内重新发起连接，与网络通道是否活跃无关。这堵住了一个「幽灵槽位」漏洞：外挂拦截 `reconnect` 命令的同时保持网络通道存活，使 `sv_timeout` 永不触发。`0` 表示关闭该检查。 |

:::note

`sv_rehlds_userinfo_transmitted_fields` 是最常与隐私和反作弊配置搭配使用的设置。每个标准键的取值类型、默认是否发送以及隐私方面的说明，请参见 [Userinfo keys 维基页面](https://github.com/rehlds/ReHLDS/wiki/Userinfo-keys)。

:::

## 文件

| CVar | 默认值 | 说明 |
| --- | --- | --- |
| `listipcfgfile` | `listip.cfg` | 用于存放永久 IP 封禁的文件。 |
| `syserror_logfile` | `sys_error.log` | 系统错误日志文件。 |

## 控制台命令

| 命令 | 说明 |
| --- | --- |
| `rescount` | 在服务器控制台输出已预缓存资源的总数。 |
| `reslist <sound \| model \| decal \| generic \| event>` | 输出指定类型的已预缓存资源。便于管理资源并核对 GoldSrc 的预缓存上限。 |
| `rcon_adduser <ipaddress/CIDR>` | 把某个 IP 地址或 CIDR 网段加入 RCON 用户列表，授予其特权控制台访问。列表为空时，任何知道正确密码的人都能使用 RCON。 |
| `rcon_deluser <ipaddress> {removeAll}` | 把某个 IP 地址或 CIDR 网段从 RCON 用户列表中移除。 |
| `rcon_users` | 列出 RCON 用户列表中的所有 IP 地址和 CIDR 网段。 |
