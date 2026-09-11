---
id: reamxmodx-install
title: Installation
sidebar_position: 2
description: ReAMXModX - obsolete fork of AMX Mod X that added ReHLDS and ReGameDLL API support before upstream AMX Mod X did.
slug: /reamxmodx/install
---

<head>
  <title>ReAMXModX: Installing | ReHLDS</title>
</head>

# Installation

:::warning Deprecated

Do not install ReAMXModX on a current server. Install [AMX Mod X](https://www.amxmodx.org/) from AlliedModders instead — it supports ReHLDS natively, which is the only thing this fork existed to add.

:::

## There are no builds to install

ReAMXModX **published no releases**. The repository contains source only — no release page, no archives, no prebuilt binaries. Anyone wanting to run it had to [build it from source](./compilling.md) first.

That alone makes it unsuitable for a normal server install today: you would be compiling a 2016 snapshot of AMX Mod X yourself, then maintaining it alone.

## If you are migrating away from it

If you inherited a server running a build of this fork, moving to upstream AMX Mod X is the intended path:

1. Install a current [AMX Mod X](https://www.amxmodx.org/downloads-new.php) release for your mod, following its own documentation.
2. Keep your existing `configs/` — the fork never changed the configuration format, so `amxx.cfg`, `users.ini`, `cmds.ini` and the rest carry over unchanged. See [Settings](./settings.md).
3. Recompile your own `.sma` plugins against the current AMX Mod X includes.
4. Verify with `amxx version` and `amxx modules` in the server console.

For engine-level and GameDLL-level access from Pawn on a modern stack, use [ReAPI](/docs/reapi) rather than a patched AMX Mod X — that is the supported way to reach ReHLDS and ReGameDLL_CS internals today.
