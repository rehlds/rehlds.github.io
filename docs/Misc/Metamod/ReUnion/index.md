---
id: reunion
title: ReUnion
sidebar_position: 1
description: ReUnion - Metamod plugin that allows protocol 47 and 48 non-steam clients to connect to ReHLDS servers.
slug: /reunion
---

# What is ReUnion?

ReUnion is a [Metamod](https://github.com/rehlds/Metamod-R) plugin that lets non-Steam (protocol 47 and 48) GoldSrc clients connect to [ReHLDS](/docs/rehlds) servers. It's a continuation of the DProto project, adapted specifically for ReHLDS.

Historically, a large share of Half-Life/Counter-Strike players connect through non-Steam clients using a variety of emulators (revEmu, SteamEmu, SC2009, and others). ReUnion authenticates and assigns identifiers (`STEAM_`/`VALVE_`) to these clients per your configuration, fixes server-browser/query compatibility issues some of these clients trigger, and adds flood protection for query abuse — all without requiring a separate DProto install.

You can find servers running ReUnion via [Game Tracker](http://www.gametracker.com/search/?search_by=server_variable&search_by2=reu_version).

## What it handles

- **Client identification** — assigns a `STEAM_`/`VALVE_`-style ID per connecting client, with separate rules per client type (real Steam, revEmu, SteamEmu, SC2009, AVSMP, SETTI scanners, sXeI, and more). See [Settings](./settings.md).
- **SteamID protection** — an optional salted hash (`SteamIdHashSalt`) makes generated IDs irreversible, preventing SteamID spoofing/stealing.
- **Server query compatibility** — fixes for clients with buggy server-browser query handling, plus optional rate-limiting against query flood abuse.

## Requirements

- ReHLDS API `3.10` or newer.
- Metamod (Metamod-R recommended).

See [Installation](./installing.md).

:::note

ReUnion previously supported the `SmartSteamEmu3` emulator. That support was removed when the project was open-sourced, since it relied on sensitive authorization code. This rarely affects real server population, as that emulator is uncommon among non-Steam clients.

:::
