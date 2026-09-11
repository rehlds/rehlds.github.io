---
id: hitboxtracker
title: hitboxtracker
sidebar_position: 1
description: hitboxtracker - deprecated ReHLDS dev-tool that drew the server-calculated hitbox positions on the client.
slug: /hitboxtracker
---

# What is hitboxtracker?

:::warning Deprecated

hitboxtracker is **deprecated and no longer maintained**. It is documented here for reference only — do not deploy it on a current server.

For working hitboxes on a modern server, use [Hitbox Fixer](/docs/hitbox-fixer) by @Garey27, which the ReHLDS organization names as the active alternative. Note the two are not equivalent: hitboxtracker only *visualized* the problem, Hitbox Fixer *fixes* it.

:::

hitboxtracker was a development tool, not a server feature. It consisted of a Metamod plugin on the server and a companion module on the client, and it drew the true position of the hitboxes **as the server calculated them** on the client's screen — next to where the client thought they were.

That made a class of otherwise invisible problems visible: when the two sets of boxes don't line up, shots that look like hits register as misses. Diagnosing that without a tool like this means guessing.

## Why it's deprecated

The project was archived in favor of a plugin that corrects the hitboxes outright rather than drawing them. The rendering approach also depended on specific client builds and a custom launcher, which aged badly.

## How it worked

The server plugin sent the computed hitbox data to the client over the `svc_director` message channel — earlier versions used delta, which changed in `v1.1`. The client module then rendered those boxes through two extra modes added to the standard `r_drawentities` cvar.

See [Settings](./settings.md) for those modes, and [Installation](./installing.md) for the setup it required.
