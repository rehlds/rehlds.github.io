---
id: resemiclip-settings
title: Settings
sidebar_position: 3
description: ReSemiclip - Metamod plugin controls the ability to pass through players. The module Semiclip by `joaquimandrade` was used as a reference.
slug: /resemiclip/settings
---

<head>
  <title>ReSemiclip: Settings | ReHLDS</title>
</head>

# Settings

## `config.ini`

`addons/resemiclip/config.ini` holds the server-wide defaults, as `key = value;` lines:

| Key | Range | Default (shipped) | Description |
| --- | --- | --- | --- |
| `semiclip` | `0`–`1` | `1` | Turn semiclip off/on. |
| `team` | `0`–`3` | `3` | Who it applies to: `0` everyone, `1` Terrorists only, `2` Counter-Terrorists only, `3` teammates only. |
| `time` | `0`–`180` | `0` | Seconds from the start of the round during which semiclip is active. `0` means it's active permanently instead of only for a window. |
| `crouch` | `0`–`1` | `1` | Let players jump onto a crouching player. |
| `effects` | `0`–`1` | `0` | Whether player transparency scales with the distance between players. |
| `distance` | `64`–`250` | `200` | Distance (in units) at which transparency/semiclip effects apply. |
| `transparency` | `0`–`255` | `120` | Player transparency level while semiclipped. |
| `penetfire` | `0`–`1` | `0` | Allow bullets to pass through semiclipped teammates. |

Out-of-range values are clamped to the nearest valid bound rather than rejected.

## Per-map and per-prefix overrides

ReSemiclip loads configuration in this order, with each step overriding only the keys it sets:

1. `addons/resemiclip/config.ini` — server-wide defaults.
2. `addons/resemiclip/maps/prefix_<prefix>.ini` — where `<prefix>` is everything in the current map name before the first underscore (e.g. `de` for `de_dust2`).
3. `addons/resemiclip/maps/<mapname>.ini` — the exact current map name (e.g. `de_dust2.ini`).

:::note

The example files shipped under `maps/` (`_de_dust2.ini`, `_prefix_de.ini`) are named with a leading underscore on purpose — that's not a filename ReSemiclip actually looks for. They're inert templates; rename them to the exact expected filename (`de_dust2.ini`, `prefix_de.ini`) to activate them.

:::

## Live console command

```text
semiclip_option <key> <value>
```

Changes one setting at runtime using the same keys as `config.ini` (for example, `semiclip_option time 5`). Run `semiclip_option` with no arguments (or an invalid key) to print the currently active settings instead.
