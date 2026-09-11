---
id: hitboxtracker-settings
title: Settings
sidebar_position: 3
description: hitboxtracker - deprecated ReHLDS dev-tool that drew the server-calculated hitbox positions on the client.
slug: /hitboxtracker/settings
---

<head>
  <title>hitboxtracker: Settings | ReHLDS</title>
</head>

# Settings

:::warning Deprecated

Kept for reference. hitboxtracker is no longer maintained — see [What is hitboxtracker?](./index.md).

:::

hitboxtracker added no cvars of its own. It extended the standard client-side `r_drawentities` cvar with two extra modes, so everything was driven from the client console.

## `r_drawentities`

| Value | Description |
| --- | --- |
| `0` | No entities. |
| `1` | Default — draws entities normally. |
| `2` | Entities drawn as skeletons. |
| `3` | Entities drawn as hitboxes. |
| `4` | Entities drawn with translucent hitboxes and the model beneath them. |
| `5` | Individual box for the player and the weapon. |
| `6` | Added by hitboxtracker. Same as `4`, but also draws the true position of the hitboxes as calculated by the server. |
| `7` | Added by hitboxtracker. Same as `6`, but not translucent. |

Values `0`–`5` are the engine's own and work without the tool. Only `6` and `7` required both halves of hitboxtracker to be installed.

:::note

The point of modes `6` and `7` was the *gap*: you compared the client's own boxes against the server's, and a visible offset between them explained hit registration complaints that otherwise looked like the player imagining things.

:::
