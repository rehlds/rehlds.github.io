---
id: reapi-settings
title: Settings
sidebar_position: 3
description: ReAPI - AMXModX module providing APIs for ReHLDS, ReGameDLL, and Metamod plugins (e.g., ReUnion, ReVoice).
slug: /reapi/settings
---

<head>
  <title>ReAPI: Settings | ReHLDS</title>
</head>

# Settings

ReAPI has no server console variables of its own — it's a scripting API, not an end-user plugin. "Configuring" ReAPI means using its natives correctly from your Pawn code. This page covers the building blocks.

## Include files

| Header | Provides |
| --- | --- |
| `reapi.inc` | Core module: hook chain natives, member-access macros, capability checks. Include this one; it pulls in the rest. |
| `reapi_engine.inc` / `reapi_engine_const.inc` | Engine-level (ReHLDS) hookable functions and their constants. |
| `reapi_gamedll.inc` / `reapi_gamedll_const.inc` | GameDLL-level (ReGameDLL_CS) hookable functions and their constants. Only usable when ReGameDLL_CS is running. |
| `cssdk_const.inc` | Counter-Strike SDK constants shared across the above headers. |
| `reapi_reunion.inc` | Hooks into [ReUnion](/docs/reunion), when installed. |
| `reapi_vtc.inc` | Hooks into the VTC anti-cheat integration, when installed. |
| `reapi_rechecker.inc` | Hooks into [ReChecker](/docs/rechecker), when installed. |

`reapi.inc` includes all of the above automatically — `reapi_engine.inc` is only meaningful with ReHLDS, and `reapi_gamedll.inc` only with ReGameDLL_CS.

## Hook chains

A hook chain lets your plugin intercept an engine or GameDLL function call.

```pawn
native HookChain:RegisterHookChain(ReAPIFunc:function_id, const callback[], post = 0);
native bool:DisableHookChain(HookChain:hook);
native bool:EnableHookChain(HookChain:hook);
native SetHookChainReturn(AType:type, any:...);
native any:GetHookChainReturn(AType:type, any:...);
native SetHookChainArg(number, AType:type, any:...);
native bool:IsReapiHookOriginalWasCalled(ReAPIFunc:function_id);
native HookChain:GetCurrentHookChainHandle();
```

`function_id` is one of the `RG_*` constants declared in `reapi_engine_const.inc` (engine functions) or `reapi_gamedll_const.inc` (GameDLL functions) — see those headers for the full, versioned list of hookable functions and their callback signatures.

### Hook chain return types

Return one of these from your hook callback to control what happens next:

| Constant | Effect |
| --- | --- |
| `HC_CONTINUE` | The plugin didn't take any action; continue normally. |
| `HC_SUPERCEDE` | Skip the real function; use the value set via `SetHookChainReturn` instead. |
| `HC_BREAK` | Skip all remaining forwards **and** the real function; use the set return value. Skips every following AMXX plugin's hook — use carefully. |
| `HC_BYPASS` | Skip calls for all following AMXX plugins, but still call the original function. In `pre`, this also skips `post` forwards. |

### Argument/return value types

`SetHookChainReturn`, `GetHookChainReturn`, and `SetHookChainArg` all take an `AType:` value describing how to interpret the following arguments:

```pawn
enum AType
{
	ATYPE_INTEGER = 0,
	ATYPE_FLOAT,
	ATYPE_STRING,
	ATYPE_CLASSPTR,
	ATYPE_EDICT,
	ATYPE_EVARS,
	ATYPE_BOOL,
	ATYPE_VECTOR,
	ATYPE_TRACE
};
```

## Member access

Read and write internal struct members (player, weapon, grenade, game rules, and more) by name instead of a hand-computed offset:

```pawn
set_member(entity, m_iSomeMember, value);
value = get_member(entity, m_iSomeMember);
```

By default `set_member`/`get_member` resolve to the bounds-checked `set_member_s`/`get_member_s` variants. Define `MEMBER_UNSAFE` before `#include <reapi>` if you need the unchecked, slightly faster variants and understand the risk.

## Runtime capability checks

Use these to make a plugin adapt to whatever stack it's actually running on, instead of assuming:

| Native | Returns true when |
| --- | --- |
| `is_rehlds()` | The server is running ReHLDS. |
| `is_regamedll()` | The server is running ReGameDLL_CS. |
| `has_reunion()` | ReUnion is installed. |
| `has_vtc()` | The VTC anti-cheat integration is installed. |
| `has_rechecker()` | ReChecker is installed. |

## Other utility natives

| Native | Purpose |
| --- | --- |
| `bool:FClassnameIs(entityIndex, const className[])` | Checks an entity's classname; also validates the entity. |
| `WeaponIdType:GetGrenadeType(entityIndex)` | Returns the grenade type of an entity. |
| `engset_view(index, viewEntity)` / `get_viewent(index)` | Get/set a player's view entity. |
| `bool:is_entity(entityIndex)` | Checks whether an index is a valid entity. |

For the full, up-to-date native list and hookable function IDs, treat `reapi.inc`, `reapi_engine_const.inc`, and `reapi_gamedll_const.inc` (installed alongside your plugins' `scripting/include`) as the source of truth — they are versioned together with the binary you're running.
