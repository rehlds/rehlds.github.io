---
id: reamxmodx-compilling
title: Compilling
sidebar_position: 4
description: ReAMXModX - obsolete fork of AMX Mod X that added ReHLDS and ReGameDLL API support before upstream AMX Mod X did.
slug: /reamxmodx/compilling
---

<head>
  <title>ReAMXModX: Compilling | ReHLDS</title>
</head>

# Build instructions

:::warning Deprecated

Kept for reference. The fork is frozen at a 2016 snapshot of AMX Mod X and publishes no releases — building it is the only way to obtain binaries, and there is no good reason to. See [What is ReAMXModX?](./index.md).

:::

ReAMXModX inherits AMX Mod X's build system unchanged; it adds no build tooling of its own.

### Clone the repository

```bash
git clone https://github.com/rehlds/reamxmodx.git
cd reamxmodx
```

### Building on Windows

The fork carries Visual Studio 2012 solutions, one per component, which is what its commits were actually maintained against:

| Solution | Component |
| --- | --- |
| `amxmodx/msvc12/amxmodx_mm.sln` | The AMX Mod X core (Metamod plugin). |
| `modules/<name>/msvc12/<name>.sln` | Each module — `cstrike`, `csx`, `engine`, `fakemeta`, `nvault`, `sockets` and the rest. |
| `compiler/amxxpc/amxxpc.sln`, `compiler/libpc300/libpc300.sln` | The Pawn compiler. |
| `installer/installtool/installtool.sln` | The installer tool. |

Each is built separately — there is no single solution covering the whole project.

### Building on Linux

The tree carries `AMBuilder` scripts for [AMBuild](https://github.com/alliedmodders/ambuild), AlliedModders' build system, under `amxmodx/` and `plugins/`.

:::note

This snapshot has no `configure.py` or `AMBuildScript` at the repository root, which is what AMBuild normally drives the build from. Producing a working Linux build therefore means supplying that scaffolding from the matching upstream AMX Mod X revision (`1.8.3`, `git5067`) yourself. This is a large part of why the fork is impractical to build today.

:::

### Output

A complete build produces `amxmodx_mm_i386.so` / `amxmodx_mm.dll` for the core plus a binary per module, laid out exactly as upstream AMX Mod X expects under `addons/amxmodx/`.

If you want a working AMX Mod X on ReHLDS, take a [current upstream release](https://www.amxmodx.org/downloads-new.php) instead of building this.
