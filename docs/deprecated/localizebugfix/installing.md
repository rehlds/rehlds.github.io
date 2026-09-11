---
id: localizebugfix-install
title: Installation
sidebar_position: 2
description: LocalizeBug Fix - archived Metamod plugin by s1lentq that blocked localization-string exploits in player names and chat on HLDS.
slug: /localizebugfix/install
---

<head>
  <title>LocalizeBug Fix: Installing | ReHLDS</title>
</head>

# Installation

:::warning Deprecated

These instructions are kept for reference. The project is archived — see [What is LocalizeBug Fix?](./index.md) and prefer [SafeNameAndChat](/docs/safenameandchat/install) on a current server.

:::

LocalizeBug Fix was a Metamod plugin, installed the same way as any other.

## 1. Get LocalizeBug Fix

The final release is [`2.4`](https://github.com/s1lentq/localizebugfix/releases) from September 2015 (`localizebugfix_2_4.7z`). The repository also carries prebuilt binaries for versions `2.0`, `2.3` and `2.4` under `bin/`.

## 2. Place the plugin

Copy the binary matching your platform into a folder under `addons`:

| Platform | File |
| --- | --- |
| Windows | `localizebugfix.dll` |
| Linux | `localizebugfix_mm_i386.so` |

## 3. Register the plugin with Metamod

Add the matching line to `<mod>/addons/metamod/plugins.ini`.

:::note

The plugin declared itself loadable at startup only (`PT_STARTUP`) and never unloadable (`PT_NEVER`), so `meta load` and `meta unload` did not work on it — it had to be present when the server started, and a restart was required to remove it.

:::

## 4. Verify

Start the server and run `meta list` — the plugin registered itself as `LocalizeBug Fix`.
