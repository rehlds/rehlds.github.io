---
id: hitbox-fixer-install
title: Installation
sidebar_position: 2
description: Hitbox Fixer - third-party Metamod plugin that fixes incorrect server-side player hitboxes in Counter-Strike 1.6, Half-Life and Adrenaline Gamer.
slug: /hitbox-fixer/install
---

<head>
  <title>Hitbox Fixer: Installing | ReHLDS</title>
</head>

# Installation

Hitbox Fixer is a Metamod plugin. It needs [ReHLDS](/docs/rehlds/install) `3.10`+ (or stock HLDS build `8648`) and Metamod already installed and working.

## 1. Get Hitbox Fixer

Download `hitbox_fix-bin-*.zip` from the [releases page](https://github.com/Garey27/hitbox_fixer/releases), or [build it from source](./compilling.md).

## 2. Extract into your mod directory

The archive is already laid out for a server. Copy its `addons/` into `<mod>/addons/`:

| Path in the archive | Purpose |
| --- | --- |
| `addons/hitboxfixer/hitbox_fix_mm.dll` | Plugin binary for Windows. |
| `addons/hitboxfixer/hitbox_fix_mm_i386.so` | Plugin binary for Linux. |
| `addons/hitboxfixer/hbf.cfg` | Configuration file, read at startup. |

Keep only the binary matching your server's platform.

:::note

The archive also contains `vis/hitbox_vis.asi`, a client-side visualisation module for inspecting hitboxes in-game. It is not part of the server install and is not required for the fix to work — leave it out unless you are debugging hitboxes on a client.

:::

## 3. Register the plugin with Metamod

Add a line to `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\hitboxfixer\hitbox_fix_mm.dll
linux addons/hitboxfixer/hitbox_fix_mm_i386.so
```

## 4. Verify

Start the server and run `meta list` in the console — the plugin should be listed as loaded. If it isn't, confirm the engine is ReHLDS `3.10`+ or HLDS `8648`; other builds are not supported.

See [Settings](./settings.md) for `hbf_enabled`.
