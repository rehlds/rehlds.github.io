---
id: revoice
title: ReVoice
sidebar_position: 1
description: ReVoice - Metamod plugin, voice transcoder which fixes voice chat between non-steam and steam clients at ReHLDS servers.
slug: /revoice
---

# What is ReVoice?

:::warning Deprecated

ReVoice is marked **Deprecated** by its maintainers. The repository is still available and buildable, but it is not under active development — test thoroughly before relying on it in production, and check the [issue tracker](https://github.com/rehlds/ReVoice/issues) for known problems before deploying.

:::

ReVoice is a [Metamod](https://github.com/rehlds/Metamod-R) plugin for [ReHLDS](/docs/rehlds) that fixes voice chat compatibility between Steam and non-Steam clients on the same server. Real Steam clients and non-Steam (protocol 47/48, the kind [ReUnion](/docs/reunion) lets connect) clients don't natively use the same voice codec, so without ReVoice, voice chat between the two groups can end up broken or one-directional. ReVoice transcodes voice data between codecs (Speex, Opus, and SILK) so both groups can hear each other.

## Requirements

- [ReHLDS](/docs/rehlds/install) and Metamod (Metamod-R recommended).
- `sv_voiceenable` must be enabled on the server — ReVoice fixes codec compatibility, it doesn't enable voice chat itself.
- Commonly deployed alongside [ReUnion](/docs/reunion/install), since that's what creates the Steam/non-Steam client mix in the first place.

See [Installation](./installing.md).
