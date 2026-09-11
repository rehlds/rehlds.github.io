---
id: reapi
title: ReAPI
sidebar_position: 1
description: ReAPI - AMXModX module providing APIs for ReHLDS, ReGameDLL, and Metamod plugins (e.g., ReUnion, ReVoice).
slug: /reapi
---

# What is ReAPI?

ReAPI is an AMX Mod X module that exposes the internals of [ReHLDS](/docs/rehlds) and [ReGameDLL_CS](/docs/regamedll-cs) to Pawn plugins as regular natives, instead of forcing plugin authors to patch raw memory offsets or reverse-engineer structures themselves. It gives Pawn code safe, versioned access to engine and GameDLL behavior that plain AMX Mod X and Metamod cannot reach.

## What it gives you

- **Hook chains** — intercept engine (ReHLDS) and GameDLL (ReGameDLL_CS) functions in `pre` and `post`, with fine-grained control over the return value and even the original function's arguments.
- **Member accessors** — read and write internal engine/GameDLL struct members (player, weapon, grenade, game rules, and more) by name instead of by hand-computed offset.
- **Runtime capability checks** — natives such as `is_rehlds()`, `is_regamedll()`, `has_reunion()`, `has_vtc()`, and `has_rechecker()` let a plugin adapt itself to whatever stack it's actually running on.
- **Optional integration headers** — `reapi_reunion.inc`, `reapi_vtc.inc`, and `reapi_rechecker.inc` expose hooks into [ReUnion](/docs/reunion), the VTC anti-cheat, and [ReChecker](/docs/rechecker) when those are installed.

## Requirements at a glance

- AMX Mod X, running on top of Metamod-R (or Metamod) and [ReHLDS](/docs/rehlds/install). Engine-level hooks and members need ReHLDS.
- [ReGameDLL_CS](/docs/regamedll-cs/install) if your plugin uses GameDLL-level hooks or members (`reapi_gamedll.inc`). Purely engine-level plugins can run without it.

See [Installation](./installing.md) for the exact setup steps.

## A minimal example

```pawn
#include <amxmodx>
#include <reapi>

public plugin_init()
{
	register_plugin("ReAPI Test", "1.0", "s1lent");
	RegisterHookChain(RG_CBasePlayer_GiveAmmo, "CBasePlayer_GiveAmmo");
}

public CBasePlayer_GiveAmmo(const this, iAmount, szName[], iMax)
{
	server_print("-> CBasePlayer_GiveAmmo: index:(%d), amount:(%d), name:(%s), max:(%d)", this, iAmount, szName, iMax);
	return HC_CONTINUE;
}
```

This hooks `CBasePlayer::GiveAmmo` on the GameDLL side and logs every call without altering behavior (`HC_CONTINUE`). See [Settings](./settings.md) for the full hook chain API and the available return/argument types.

## Where to go next

- [Installation](./installing.md) — install the module and enable it in your plugins.
- [Settings](./settings.md) — the hook chain and member-access API, with the natives you'll actually call.
- [Compiling](./compilling.md) — build ReAPI from source.
- [Credits](./credits.md) — license and project links.
