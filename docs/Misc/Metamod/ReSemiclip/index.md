---
id: resemiclip
title: ReSemiclip
sidebar_position: 1
description: ReSemiclip - Metamod plugin controls the ability to pass through players. The module Semiclip by `joaquimandrade` was used as a reference.
slug: /resemiclip
---

# What is ReSemiclip?

ReSemiclip is a [Metamod](https://github.com/rehlds/Metamod-R) plugin for Counter-Strike servers that lets players pass through each other under configurable conditions, instead of blocking one another's movement. It's a maintained take on the classic "Semiclip" concept, using [joaquimandrade's Semiclip module](https://github.com/joaquimandrade) as a reference implementation.

## What it controls

- **Who it applies to** — everyone, only Terrorists, only Counter-Terrorists, or only teammates.
- **When it applies** — for a fixed time window from the start of the round (useful right after spawn, when players tend to get stuck on each other), or permanently.
- **Crouching** — lets players jump onto a crouching teammate instead of being blocked.
- **Visual feedback** — optional transparency for players close enough to "clip" through each other, so it's visible rather than surprising.
- **Bullet behavior** — optionally lets gunfire pass through teammates that are currently semiclipped.

All of this is configurable globally, and per-map or per-map-prefix. See [Settings](./settings.md) for the full `config.ini` format.

## Requirements

ReSemiclip hooks both engine-level ([ReHLDS](/docs/rehlds/install)) and GameDLL-level ([ReGameDLL_CS](/docs/regamedll-cs/install)) functions, so both are required underneath Metamod. See [Installation](./installing.md).
