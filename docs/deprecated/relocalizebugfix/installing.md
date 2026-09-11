---
id: relocalizebugfix-install
title: Installation
sidebar_position: 2
description: ReLocalizeBug Fix - deprecated Metamod plugin that blocked localization-string exploits in player names and chat on ReHLDS servers.
slug: /relocalizebugfix/install
---

<head>
  <title>ReLocalizeBug Fix: Installing | ReHLDS</title>
</head>

# Installation

:::warning Deprecated

These instructions are kept for reference only. The plugin is **incompatible with modern ReHLDS versions** — see [What is ReLocalizeBug Fix?](./index.md) and use [SafeNameAndChat](/docs/safenameandchat/install) instead.

:::

ReLocalizeBug Fix was a Metamod plugin, installed the same way as any other.

## 1. Get ReLocalizeBug Fix

The final release is [`v2.8`](https://github.com/rehlds/relocalizebugfix/releases) (`relocalizebugfix-v2.8.zip`). The repository also carries prebuilt binaries under `bin/`.

## 2. Place the plugin

Copy the binary matching your platform into `<mod>/addons/relocalizebugfix/`:

| Platform | File |
| --- | --- |
| Windows | `relocalizebugfix_mm.dll` |
| Linux | `relocalizebugfix_mm_i386.so` |

## 3. Register the plugin with Metamod

Add these lines to your `<mod>/addons/metamod/plugins.ini` file:

```ini
win32 addons\relocalizebugfix\relocalizebugfix_mm.dll
linux addons/relocalizebugfix/relocalizebugfix_mm_i386.so
```

:::note

The plugin declared itself loadable at startup only (`PT_STARTUP`) and never unloadable (`PT_NEVER`), so `meta load` and `meta unload` did not work on it — it had to be present when the server started, and a restart was required to remove it.

:::

## 4. Verify

Start the server and run `meta list` — the plugin registered itself as `ReLocalizeBug Fix`. On a modern ReHLDS build, expect it to misbehave rather than work; that is the incompatibility described on the [overview page](./index.md), not a setup mistake.
