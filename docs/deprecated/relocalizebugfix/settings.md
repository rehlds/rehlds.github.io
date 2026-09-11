---
id: relocalizebugfix-settings
title: Settings
sidebar_position: 3
description: ReLocalizeBug Fix - deprecated Metamod plugin that blocked localization-string exploits in player names and chat on ReHLDS servers.
slug: /relocalizebugfix/settings
---

<head>
  <title>ReLocalizeBug Fix: Settings | ReHLDS</title>
</head>

# Settings

:::warning Deprecated

Kept for reference. The plugin is incompatible with modern ReHLDS versions — see [What is ReLocalizeBug Fix?](./index.md).

:::

ReLocalizeBug Fix had **no configuration**. Like the [LocalizeBug Fix](/docs/localizebugfix/settings) it was built from, it registered no cvars and no console commands, and shipped no config file. Loading the plugin enabled the protection; there was nothing to tune.

Its modern replacement, [SafeNameAndChat](/docs/safenameandchat/settings), exposes eleven cvars covering names and chat separately, so individual protections can be turned off when they conflict with something else.

:::note

Because there were no settings, there is also no way to make this plugin behave on a ReHLDS build it does not support. If it misbehaves, the answer is to remove it, not to configure around it.

:::
