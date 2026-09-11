---
id: hitboxtracker-install
title: Installation
sidebar_position: 2
description: hitboxtracker - deprecated ReHLDS dev-tool that drew the server-calculated hitbox positions on the client.
slug: /hitboxtracker/install
---

<head>
  <title>hitboxtracker: Installing | ReHLDS</title>
</head>

# Installation

:::warning Deprecated

These instructions are kept for reference. hitboxtracker is no longer maintained — see [What is hitboxtracker?](./index.md) before using any of this, and prefer [Hitbox Fixer](/docs/hitbox-fixer) on a current server.

:::

hitboxtracker needed **both** halves installed: a plugin on the server and a module on the client. Installing only one did nothing.

## Requirements

- Client: Counter-Strike 1.6 build `4554` or later.
- Server: Metamod `1.20` or later.

## 1. Get hitboxtracker

Download `hitboxtracker.zip` from the [releases page](https://github.com/rehlds/hitboxtracker/releases). The archive holds both halves:

| Path in the archive | Purpose |
| --- | --- |
| `server/cstrike/addons/hitboxtracker/hitboxtracker_mm.dll` | Server plugin, Windows. |
| `server/cstrike/addons/hitboxtracker/hitboxtracker_mm_i386.so` | Server plugin, Linux. |
| `client/hitboxtracker.dll` | Client-side rendering module. |
| `client/cs.exe` | The project's own launcher, which loads that module. |

## 2. Install the server plugin

Copy the binary matching your platform into `<mod>/addons/hitboxtracker/` and register it in `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\hitboxtracker\hitboxtracker_mm.dll
linux addons/hitboxtracker/hitboxtracker_mm_i386.so
```

## 3. Install the client module

Put `hitboxtracker.dll` and `cs.exe` into the working directory of the Counter-Strike 1.6 client, then start the game through `cs.exe` rather than the normal shortcut — the launcher is what loads the module.

## 4. Verify

Join a server running the plugin and set `r_drawentities` to `6` or `7`. If the extra hitbox rendering doesn't appear, either the client was started without the launcher or the server plugin isn't loaded — check `meta list` on the server.

See [Settings](./settings.md) for what each `r_drawentities` value does.
