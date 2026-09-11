---
id: localizebugfix-settings
title: Settings
sidebar_position: 3
description: LocalizeBug Fix - archived Metamod plugin by s1lentq that blocked localization-string exploits in player names and chat on HLDS.
slug: /localizebugfix/settings
---

<head>
  <title>LocalizeBug Fix: Settings | ReHLDS</title>
</head>

# Settings

:::warning Deprecated

Kept for reference. The project is archived — see [What is LocalizeBug Fix?](./index.md).

:::

LocalizeBug Fix had **no configuration**. It registered no cvars and no console commands, and it shipped no config file. Loading the plugin enabled the protection; there was nothing to tune.

That is a real difference from its modern replacement: [SafeNameAndChat](/docs/safenameandchat/settings) exposes eleven cvars so you can choose which characters are sanitized in names versus chat. LocalizeBug Fix was all-or-nothing.

:::note

If you are reading this page hoping to soften the plugin's behavior because it interferes with something, there is no setting to do that — the only options are loading it or not. On a current server, use [SafeNameAndChat](/docs/safenameandchat), where individual protections can be turned off.

:::
