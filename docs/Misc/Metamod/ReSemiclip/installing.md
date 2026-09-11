---
id: resemiclip-install
title: Installation
sidebar_position: 2
description: ReSemiclip - Metamod plugin controls the ability to pass through players. The module Semiclip by `joaquimandrade` was used as a reference.
slug: /resemiclip/install
---

<head>
  <title>ReSemiclip: Installing | ReHLDS</title>
</head>

# Installing

ReSemiclip is a Metamod plugin and needs [ReHLDS](/docs/rehlds/install), [ReGameDLL_CS](/docs/regamedll-cs/install), and Metamod (Metamod-R recommended) already installed and working — it hooks functions in both layers.

## 1. Get ReSemiclip

Download `resemiclip-*.zip` from the [releases page](https://github.com/rehlds/ReSemiclip/releases), or [build it from source](./compilling.md). The release archive already contains a ready-to-use `addons/resemiclip/` folder with the binary and a default `config.ini`.

## 2. Extract into your mod directory

Copy the archive's `addons/resemiclip/` into `<mod>/addons/resemiclip/`. You'll end up with:

| Path | Purpose |
| --- | --- |
| `addons/resemiclip/resemiclip_mm.dll` or `resemiclip_mm_i386.so` | The plugin binary (platform-specific — keep only the one matching your server). |
| `addons/resemiclip/config.ini` | Default, server-wide settings. |
| `addons/resemiclip/maps/` | Example per-map and per-prefix override files. |

## 3. Register the plugin with Metamod

Add a line to `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\resemiclip\resemiclip_mm.dll
linux addons/resemiclip/resemiclip_mm_i386.so
```

## 4. Configure

Edit `addons/resemiclip/config.ini` for server-wide defaults, and optionally add per-map or per-prefix overrides under `addons/resemiclip/maps/`. See [Settings](./settings.md) for the full format and load order.

## 5. Verify

Start the server and run `meta list` — you should see `ReSemiclip` listed as loaded. Run `semiclip_option` with no arguments in the console to print the currently active settings.
