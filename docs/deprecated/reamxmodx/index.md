---
id: reamxmodx
title: ReAMXModX
sidebar_position: 1
description: ReAMXModX - obsolete fork of AMX Mod X that added ReHLDS and ReGameDLL API support before upstream AMX Mod X did.
slug: /reamxmodx
---

# What is ReAMXModX?

:::warning Deprecated

ReAMXModX is **obsolete**. Upstream AMX Mod X has since added ReHLDS support of its own, which removed this fork's entire reason to exist.

Use [AMX Mod X](https://www.amxmodx.org/) from AlliedModders. Everything this fork offered is in upstream today, maintained and released.

:::

ReAMXModX was a fork of AMX Mod X, imported in August 2016 from the `1.8.3` development tree (`git5067`). Its purpose was to teach AMX Mod X about the ReHLDS and ReGameDLL APIs at a time when upstream knew nothing about them.

## What it changed

The fork's commits are narrow and specific. Across the AMX Mod X core and several modules it added SDK glue for the ReHLDS and ReGameDLL interfaces — `mod_rehlds_api.cpp` and `mod_gamedll_api.cpp` appear in the core plus the `cstrike`, `csx`, `engine` and `fakemeta` modules — bringing support up to ReHLDS API `3.x` and ReGameDLL API `5.x` in the final commit.

Alongside that it carried a handful of fixes:

- A memory leak in `unregister_forward`.
- A chat bug involving localization.
- Data alignment corrections for the Linux builds.

## Why it's obsolete

Upstream AMX Mod X added ReHLDS support, so a separate fork carrying that support stopped being useful. Work here ended in December 2016, and the project published no releases at all — there is no binary to install, only source frozen at a nine-year-old snapshot of AMX Mod X.

Running it today would mean a 2016 AMX Mod X missing everything upstream has shipped since, in exchange for ReHLDS support upstream now provides anyway.

See [Installation](./installing.md), [Settings](./settings.md) and [Compiling](./compilling.md) for what working with it involved.
