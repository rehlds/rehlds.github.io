---
id: safenameandchat-settings
title: Settings
sidebar_position: 3
description: SafeNameAndChat - third-party Metamod plugin that neutralizes localization-string and command-injection exploits in player names and chat messages.
slug: /safenameandchat/settings
---

<head>
  <title>SafeNameAndChat: Settings | ReHLDS</title>
</head>

# Settings

SafeNameAndChat is configured through `SafeNameAndChat.cfg`, which the plugin `exec`s from its own directory at startup. It is a plain list of cvar assignments, and every protection defaults to on.

## Chat cvars

| Cvar | Default | Description |
| --- | --- | --- |
| `SNAC_Chat_ReplaceNumberSign` | `1` | Replaces `#` with the fullwidth `＃`, so the client can't resolve the text as a localization key. |
| `SNAC_Chat_ReplacePercentSign` | `1` | Replaces `%` with the fullwidth `％`, so it can't reach a client-side format function. |
| `SNAC_Chat_RemoveUnprintable` | `1` | Drops unprintable characters from the message. |
| `SNAC_Chat_TrimSpaces` | `1` | Trims leading and trailing whitespace, including characters that merely render as a space. |
| `SNAC_Chat_TruncateToEngineLimitAfterReplace` | `1` | Re-truncates the message to the engine's byte limit *after* substitution. Fullwidth replacements are three UTF-8 bytes where the original was one, so a message that fit before can overflow afterwards. The limit applied is 127 bytes, or 125 when the message's surrounding quotes are restored. |

## Name cvars

| Cvar | Default | Description |
| --- | --- | --- |
| `SNAC_Name_ReplaceNumberSign` | `1` | Replaces `#` with `＃` in player names. |
| `SNAC_Name_ReplacePercentSign` | `1` | Replaces `%` with `％` in player names. |
| `SNAC_Name_ReplaceAmpersand` | `1` | Replaces `&` with `＆` in player names. |
| `SNAC_Name_ReplacePlusSign` | `1` | Neutralizes `+command` syntax: when a `+` is immediately followed by an ASCII letter or digit, that following character is replaced with its fullwidth form, breaking the bind syntax while leaving the name readable. |
| `SNAC_Name_RemoveUnprintable` | `1` | Drops unprintable characters from the name. |
| `SNAC_Name_TrimSpaces` | `1` | Trims leading and trailing whitespace from the name. |

## Read-only cvar

| Cvar | Description |
| --- | --- |
| `SNAC_Version` | Reports the loaded plugin version. Registered as a server cvar; not settable. |

## The shipped default config

```text
SNAC_Chat_ReplaceNumberSign                 1
SNAC_Chat_ReplacePercentSign                1
SNAC_Chat_RemoveUnprintable                 1
SNAC_Chat_TrimSpaces                        1
SNAC_Chat_TruncateToEngineLimitAfterReplace 1

SNAC_Name_ReplaceNumberSign                 1
SNAC_Name_ReplacePercentSign                1
SNAC_Name_ReplaceAmpersand                  1
SNAC_Name_ReplacePlusSign                   1
SNAC_Name_RemoveUnprintable                 1
SNAC_Name_TrimSpaces                        1
```

:::warning

Turning an option off re-opens the exploit it covers. If you disable something to work around a conflict with another plugin, disable the narrowest option rather than the whole chat or name group, and check whether the conflicting plugin is doing its own sanitizing first.

:::

:::note

If every option in a group is `0`, the plugin skips that group's processing entirely rather than running a no-op pass — so a fully disabled group costs nothing.

:::
