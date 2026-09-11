---
id: hitbox-fixer-settings
title: Settings
sidebar_position: 3
description: Hitbox Fixer - third-party Metamod plugin that fixes incorrect server-side player hitboxes in Counter-Strike 1.6, Half-Life and Adrenaline Gamer.
slug: /hitbox-fixer/settings
---

<head>
  <title>Hitbox Fixer: Settings | ReHLDS</title>
</head>

# Settings

Hitbox Fixer is configured through `addons/hitboxfixer/hbf.cfg`, which sits next to the plugin binary. It holds a single cvar.

## Cvar

| Cvar | Default | Description |
| --- | --- | --- |
| `hbf_enabled` | `1` | Enables the hitbox correction. Set to `0` to turn the plugin off without unloading it from Metamod. |

The shipped default config is one line:

```text
hbf_enabled "1"
```

:::note

Turning `hbf_enabled` off restores the engine's original (broken) hitbox behavior. The switch exists mainly so you can A/B the difference on a live server when investigating hit registration complaints — there's no reason to leave it at `0` in normal operation.

:::
