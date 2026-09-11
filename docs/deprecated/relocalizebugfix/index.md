---
id: relocalizebugfix
title: ReLocalizeBug Fix
sidebar_position: 1
description: ReLocalizeBug Fix - deprecated Metamod plugin that blocked localization-string exploits in player names and chat on ReHLDS servers.
slug: /relocalizebugfix
---

# What is ReLocalizeBug Fix?

:::warning Deprecated

ReLocalizeBug Fix is **deprecated and incompatible with modern ReHLDS versions**. Running it on a current build may cause instability and unexpected behavior. It has been [deprecated since 2017](https://github.com/rehlds/rehlds/issues/328#issuecomment-275837883).

For this class of exploit on a current server, use [SafeNameAndChat](/docs/safenameandchat).

:::

ReLocalizeBug Fix was a Metamod plugin that resolved localization-related bugs on Half-Life dedicated servers — the exploit where `#`-prefixed localization tokens in a player's name or chat message crash the clients that receive them.

It was developed as an extension of [LocalizeBug Fix by s1lentq](/docs/localizebugfix) and adapted for ReHLDS. Its single public release, `v2.8`, arrived in November 2016 and was the first version compatible with ReHLDS.

## Why it's deprecated

The ReHLDS engine itself moved on. As the engine gained its own fixes and protections, the plugin's approach stopped matching what the engine does, and it was marked deprecated the following year. It was never updated for the ReHLDS builds that came after.

The warning in the project's own README is unambiguous: using this plugin with newer versions of ReHLDS may lead to instability and unexpected behavior.

## What to use instead

[SafeNameAndChat](/docs/safenameandchat) covers the same exploit class and is maintained. It also takes a gentler approach — it substitutes the offending characters with lookalikes instead of dropping or blocking the message, so players keep their names.

See [Installation](./installing.md) and [Settings](./settings.md) for what the plugin looked like in use.
