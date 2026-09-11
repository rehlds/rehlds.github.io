---
id: safenameandchat
title: SafeNameAndChat
sidebar_position: 1
description: SafeNameAndChat - third-party Metamod plugin that neutralizes localization-string and command-injection exploits in player names and chat messages.
slug: /safenameandchat
---

# What is SafeNameAndChat?

SafeNameAndChat is a Metamod plugin by [@WPMGPRoSToTeMa](https://github.com/WPMGPRoSToTeMa) that sanitizes player names and chat messages before the engine sends them on, closing a family of long-standing GoldSrc exploits where a crafted name or message crashes other players' clients or injects console commands.

:::note

This is a third-party project. It lives outside the ReHLDS organization and is not maintained by it — report problems to its own [issue tracker](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/issues).

:::

## What it protects against

The GoldSrc client treats certain characters specially, and a player who puts them in a name or a chat line can abuse that:

- **Localization strings (`#`)** — a message or name containing tokens like `#Spec_Help_Text` makes the receiving client resolve them as localization keys. Depending on the token, clients crash.
- **Format specifiers (`%`)** — `%s` and friends reaching a format function on the client side.
- **Ampersand (`&`) in names** — mishandled in some client-side name rendering paths.
- **Command injection through `+` in names** — a `+` immediately followed by a letter or digit reproduces the `+command` bind syntax.

Rather than kicking the player or stripping the characters, the plugin substitutes each offending character with its **fullwidth Unicode twin** — `#` becomes `＃`, `%` becomes `％`. The text still reads the same to a human, but the client no longer treats it as a token. It can also drop unprintable characters and trim leading/trailing whitespace.

## Requirements

- Metamod (Metamod-R recommended).
- [ReHLDS](/docs/rehlds/install) is not required, but is detected at runtime and used when present — the plugin queries `VREHLDS_HLDS_API_VERSION001` on startup and takes an engine-aware path if it answers.

The plugin is loadable and unloadable at any time (`meta load` / `meta unload` work without a restart).

See [Installation](./installing.md) to set it up and [Settings](./settings.md) for the eleven `SNAC_*` cvars.
