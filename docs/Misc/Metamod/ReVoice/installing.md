---
id: revoice-install
title: Installation
sidebar_position: 2
description: ReVoice - Metamod plugin, voice transcoder which fixes voice chat between non-steam and steam clients at ReHLDS servers.
slug: /revoice/install
---

<head>
  <title>ReVoice: Installing | ReHLDS</title>
</head>

# Installing

:::warning Deprecated

ReVoice is marked **Deprecated** by its maintainers — see [What is ReVoice?](./index.md) before deploying it to a production server.

:::

ReVoice is a Metamod plugin and needs [ReHLDS](/docs/rehlds/install) and Metamod (Metamod-R recommended) already installed and working.

## 1. Get ReVoice

Download a release from the [releases page](https://github.com/rehlds/ReVoice/releases), or [build it from source](./compilling.md).

## 2. Place the plugin

Create a `revoice` folder under `addons` in your mod directory and place the binary matching your platform there:

| Platform | File | Destination |
| --- | --- | --- |
| Windows | `revoice_mm.dll` | `<mod>/addons/revoice/revoice_mm.dll` |
| Linux | `revoice_mm_i386.so` | `<mod>/addons/revoice/revoice_mm_i386.so` |

## 3. Register the plugin with Metamod

Add a line to `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\revoice\revoice_mm.dll
linux addons/revoice/revoice_mm_i386.so
```

## 4. Add the config file

Copy the project's [`data/revoice.cfg`](https://github.com/rehlds/ReVoice/blob/master/data/revoice.cfg) next to the binary: `<mod>/addons/revoice/revoice.cfg`. ReVoice `exec`s this file at startup, so it uses normal server-config syntax (plain cvar assignments, `//` comments) — see [Settings](./settings.md).

## 5. Enable voice chat and verify

Make sure `sv_voiceenable` is enabled on the server. Start it and run `meta list` — you should see `Revoice` listed as loaded. Run `rev version` and `rev status` in the console to confirm it's active and check its current state.
