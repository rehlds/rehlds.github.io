---
id: hitbox-fixer
title: Hitbox Fixer
sidebar_position: 1
description: Hitbox Fixer - third-party Metamod plugin that fixes incorrect server-side player hitboxes in Counter-Strike 1.6, Half-Life and Adrenaline Gamer.
slug: /hitbox-fixer
---

# What is Hitbox Fixer?

Hitbox Fixer is a Metamod plugin by [@Garey27](https://github.com/Garey27) that corrects server-side player hitboxes in Counter-Strike 1.6, Half-Life and Adrenaline Gamer. On an unpatched server the boxes the engine tests shots against can sit away from where the player model actually is, so hits register as misses (and the reverse).

:::note

This is a third-party project. It lives outside the ReHLDS organization and is not maintained by it — report problems to its own [issue tracker](https://github.com/Garey27/hitbox_fixer/issues).

:::

## What it fixes

- Hitboxes that are outright broken when `numblends == 1` — this covers the ducking and standing animations while reloading a weapon or planting the C4.
- Hitbox backtracking based on the client-side position, so the server tests against where the shooter actually saw the target.
- Wrong hitbox position on spawn, which falls out of the corrected backtracking.

The author lists full `setupbones` support for non-player entities as still outstanding, so the fixes above apply to players.

## Requirements

One of:

- [ReHLDS](/docs/rehlds/install) version `3.10` or above — recommended.
- Stock HLDS build `8648`.

Plus Metamod (Metamod-R recommended) to load the plugin.

## Supported mods

Counter-Strike 1.6, Half-Life and Adrenaline Gamer. The author accepts requests for other mods through the issue tracker.

See [Installation](./installing.md) to set it up and [Settings](./settings.md) for the single cvar it adds.
