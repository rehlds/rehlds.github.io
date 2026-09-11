---
id: safenameandchat-install
title: Installation
sidebar_position: 2
description: SafeNameAndChat - third-party Metamod plugin that neutralizes localization-string and command-injection exploits in player names and chat messages.
slug: /safenameandchat/install
---

<head>
  <title>SafeNameAndChat: Installing | ReHLDS</title>
</head>

# Installation

SafeNameAndChat is a Metamod plugin and needs Metamod (Metamod-R recommended) already installed and working.

## 1. Get SafeNameAndChat

Download the binaries from the [releases page](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/releases), or [build it from source](./compilling.md). A release ships two files:

| Platform | File |
| --- | --- |
| Windows | `SafeNameAndChat.dll` |
| Linux | `SafeNameAndChat.so` |

## 2. Place the plugin

Create a `SafeNameAndChat` folder under `addons` in your mod directory and put the binary matching your platform there:

```text
<mod>/addons/SafeNameAndChat/SafeNameAndChat.dll
<mod>/addons/SafeNameAndChat/SafeNameAndChat.so
```

## 3. Add the config file

Copy the project's [`SafeNameAndChat.cfg`](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/blob/master/SafeNameAndChat.cfg) next to the binary. The plugin builds the path from its own location and `exec`s `SafeNameAndChat.cfg` from there at startup, so the file has to sit in the same folder as the plugin — not in the mod root.

## 4. Register the plugin with Metamod

Add a line to `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\SafeNameAndChat\SafeNameAndChat.dll
linux addons/SafeNameAndChat/SafeNameAndChat.so
```

## 5. Verify

Start the server and run `meta list` — `SafeNameAndChat` should be listed as loaded (its log tag is `SNAC`). Check `SNAC_Version` in the console to confirm which build is running.

Because the plugin is marked loadable at any time, you can also `meta load addons/SafeNameAndChat/SafeNameAndChat.so` on a running server instead of restarting.

See [Settings](./settings.md) for the cvars.
