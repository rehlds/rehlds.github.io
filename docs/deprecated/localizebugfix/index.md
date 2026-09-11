---
id: localizebugfix
title: LocalizeBug Fix
sidebar_position: 1
description: LocalizeBug Fix - archived Metamod plugin by s1lentq that blocked localization-string exploits in player names and chat on HLDS.
slug: /localizebugfix
---

# What is LocalizeBug Fix?

:::warning Deprecated

LocalizeBug Fix is **archived and no longer maintained**. The repository was archived on GitHub in 2015 and accepts no changes. It is documented here for reference only.

For this class of exploit on a current server, use [SafeNameAndChat](/docs/safenameandchat).

:::

LocalizeBug Fix was a Metamod plugin by [@s1lentq](https://github.com/s1lentq) that closed a GoldSrc exploit in which localization tokens embedded in a player's name or chat message crash every client that receives them.

It is the first generation of this fix. The ReHLDS organization later extended it as [ReLocalizeBugFix](/docs/relocalizebugfix) — which is itself now deprecated.

## The exploit it blocked

The GoldSrc client resolves `#`-prefixed tokens in certain messages as localization keys. Two vectors were documented by the author:

- **Chat.** A message routed through `client_print_color` / `client_print` containing tokens, for example:

  ```text
  s1lent :#Spec_Help_Text Hello people! #Spec_Duck
  ```

  Every client that received the message crashed.

- **Player name via `ShowMenu`.** A name such as:

  ```text
  name "q#Buy#Buy#Buy#Buy#Buy#Buy#Buy"
  ```

  crashed clients when they opened the player list menu.

## Why it's deprecated

The plugin targeted stock HLDS and was superseded by ReLocalizeBugFix for ReHLDS servers; that successor was in turn [deprecated in 2017](https://github.com/rehlds/rehlds/issues/328#issuecomment-275837883). Modern servers get this protection from [SafeNameAndChat](/docs/safenameandchat), which sanitizes the offending characters instead of blocking the message.

See [Installation](./installing.md) and [Settings](./settings.md) for what the plugin looked like in use.
