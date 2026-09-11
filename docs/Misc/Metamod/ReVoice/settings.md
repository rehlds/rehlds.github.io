---
id: revoice-settings
title: Settings
sidebar_position: 3
description: ReVoice - Metamod plugin, voice transcoder which fixes voice chat between non-steam and steam clients at ReHLDS servers.
slug: /revoice/settings
---

<head>
  <title>ReVoice: Settings | ReHLDS</title>
</head>

# Settings

ReVoice is configured through `addons/revoice/revoice.cfg`, which is `exec`'d at startup like a normal server config file — it's a list of cvar assignments, not an INI file.

## Cvars

| Cvar | Default | Description |
| --- | --- | --- |
| `REV_DefaultCodec` | `speex` | Codec ReVoice transcodes regular players' outgoing voice into. Accepts `speex` or `opus`. |
| `REV_HltvCodec` | `opus` | Codec ReVoice transcodes HLTV's outgoing voice into. Accepts `speex` or `opus`. |
| `revoice_version` | *(current version)* | Read-only; reports the loaded ReVoice version. |

The shipped default config:

```text
REV_HltvCodec opus		// speex, opus
REV_DefaultCodec speex	// speex, opus
```

Cvar changes take effect immediately — ReVoice listens for changes to both codec cvars and re-applies them without a restart.

:::note

`sv_voiceenable` is a standard engine cvar, not a ReVoice setting — it must be `1` for voice chat to work at all. ReVoice only fixes codec compatibility between Steam and non-Steam clients once voice chat is already enabled.

:::

## Console command

```text
rev version
rev status
```

- `rev version` — prints the loaded ReVoice version, build date, and commit.
- `rev status` — prints detailed runtime status (added specifically for diagnosing voice issues).
