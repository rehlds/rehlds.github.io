---
id: reunion-settings
title: Settings
sidebar_position: 3
description: ReUnion - Metamod plugin that allows protocol 47 and 48 non-steam clients to connect to ReHLDS servers.
slug: /reunion/settings
---

<head>
  <title>ReUnion: Settings | ReHLDS</title>
</head>

# Settings

ReUnion is configured entirely through `reunion.cfg`. The default file is heavily commented — this page summarizes each section.

:::warning

The file itself opens with "don't change anything if you don't know what it means" for a reason — most defaults are already tuned. Change values deliberately, one at a time.

:::

## Client ID types (`cid_*`)

Each `cid_*` option assigns an ID type to a category of client. The available type codes are:

| Code | Meaning |
| --- | --- |
| `1` | Real (or hardware-generated) Steam ID (`STEAM_xx:xx:xx`). |
| `2` | Real (or hardware-generated) Valve ID (`VALVE_xx:xx:xx`). |
| `3` | `STEAM_` ID generated from the client's IP. |
| `4` | `VALVE_` ID generated from the client's IP. |
| `5` | Deprecated — the client is rejected. |
| `6` | Reserved for future use. |
| `7` | HLTV. |
| `8` | `STEAM_ID_LAN`. |
| `9` | `STEAM_ID_PENDING`. |
| `10` | `VALVE_ID_LAN`. |
| `11` | `VALVE_ID_PENDING`. |
| `12` | `STEAM_666:88:666`. |

| Option | Default | Applies to |
| --- | --- | --- |
| `cid_Steam` | `1` | Legitimate Steam clients. |
| `cid_SteamPending` | `5` | Clients that authorized successfully but didn't receive a usable Steam ID. |
| `cid_HLTV` | `5` | HLTV relays. |
| `cid_NoSteam47` | `5` | Protocol 47 clients without unique ID generation support. |
| `cid_NoSteam48` | `5` | Protocol 48 clients without unique ID generation support. |
| `cid_RevEmu` | `1` | revEmu ≥ 9.74. |
| `cid_RevEmu2013` | `1` | RevEmu 2013. |
| `cid_SC2009` | `1` | SteamClient 2009 / revEmu > 9.82. |
| `cid_OldRevEmu` | `1` | Older revEmu versions. |
| `cid_SteamEmu` | `1` | hCupa's SteamEmu. |
| `cid_AVSMP` | `1` | AVSMP (cracked Steam). |
| `cid_Setti` | `3` | SETTI server scanner. |
| `cid_SXEI` | `1` | sXeI clients. |

`HLTVExcept_IP` (default `127.0.0.1`) lets an HLTV from a specific IP join even when `cid_HLTV` rejects HLTV clients.

## Auth settings

| Option | Default | Description |
| --- | --- | --- |
| `AuthVersion` | `4` | Authorization protocol version: `1` DProto (deprecated), `2` Reunion 2015–2018, `3` Reunion 2018–2024, `4` current (recommended). |
| `SteamIdHashSalt` | *(empty)* | Salt for hashing generated Steam IDs, irreversibly changing them to prevent ID stealing. Recommended length 32+ characters, minimum 16. With `AuthVersion >= 3` an empty value makes ReUnion **fail to initialize** — set `0` explicitly to disable hashing (not recommended) instead of leaving it empty. |
| `SC2009_RevCompatMode` | `1` | Makes SC2009-generated IDs compatible with revEmu. Cannot be disabled when `AuthVersion >= 3`. |
| `EnableSXEIdGeneration` | `0` | Enables ID generation based on sXeI client data. Only enable this if you actually run an sXeI-compatible setup. |
| `EnableGenPrefix2` | `0` | Adds a second ID prefix to reduce collision chance for generated IDs. Only effective with `SteamIdHashSalt` set; cannot be disabled with `AuthVersion >= 3`. |

### Legacy authid prefixes

The `IPGen_Prefix1/2`, `Native_Prefix1`, `RevEmu*_Prefix1`, `SC2009_Prefix1`, `OldRevEmu_Prefix1`, `SteamEmu_Prefix1`, `AVSMP_Prefix1`, `Setti_Prefix1`, and `SXEI_Prefix1` options only apply when `AuthVersion` is `1` or `2`. With the recommended `AuthVersion = 4`, this whole section is ignored — leave it at its defaults.

Regardless of version, `banid` always uses the SteamID **without** any prefix.

## Server queries

| Option | Default | Description |
| --- | --- | --- |
| `ServerInfoAnswerType` | `0` | `0` new-style (Steam) answers (recommended), `1` old-style GoldSrc answers, `2` hybrid — visible to both, but answers every query 3 times. |
| `FixBuggedQuery` | `1` | Fixes clients with a buggy server browser that would otherwise hang on connect. |
| `EnableQueryLimiter` | `1` | Rate-limits server queries (TSource, player list, etc.). Set `0` if you already rate-limit externally. |
| `QueryFloodBanLevel` | `400` | Queries/second that triggers an IP ban. Range `320`–`2048`; legitimate traffic rarely exceeds ~80/sec. |
| `QueryFloodBanTime` | `10` | Ban duration in minutes for query flooding, `0`–`60`. `0` blocks without banning. |
| `QueryLimiterExceptIP` | *(section, empty)* | List of IPs (one per line under `[QueryLimiterExceptIP]`) excluded from the query limiter. |
| `AllowSplitPackets` | `0` | Allow splitting outgoing packets larger than 1400 bytes, as the original Steam client does. Some monitoring tools don't support this. |
| `IDClientsLimit` | `1` | Max simultaneous clients from the same Steam ID, `0`–`32`. `0` disables the limit. Useful when debugging with multiple client instances. |

## Logging

| Option | Default | Description |
| --- | --- | --- |
| `LoggingMode` | `0` | `0` none, `1` console, `2` log files, `3` both. |

## Frequently asked

- **I set `SteamIdHashSalt` like in DProto, but players get different SteamIDs.** ReUnion uses a different, more secure hashing algorithm. Knowing a player's SteamID from before `SteamIdHashSalt` was enabled doesn't help reproduce it afterward.
- **Can I do anything about SteamID changers?** No — ID changers generate valid authorization tickets, so the server can't tell an ID was substituted. Setting `SteamIdHashSalt` at least prevents someone from deliberately spoofing a *specific* other player's ID.
- **Some server monitoring tools can't fetch the player list.** They're likely using an outdated query format; use a current query library such as [PHP-Source-Query](https://github.com/xPaw/PHP-Source-Query) or equivalent.
- **DProto had a `Game_Name` option; ReUnion doesn't.** Change the reported game name from a plugin instead.
