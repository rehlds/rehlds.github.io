---
id: refreelook-compilling
title: "ReFreeLook: Compilling"
sidebar_label: Compilling
sidebar_position: 4
description: ReFreeLook - AMX Mod X module whichs allows spectating admins to use any camera modes regardless of the `mp_forcecamera` or `mp_forcechasecam` value. This only works for latest `ReGameDLL_CS` version.
slug: /refreelook/compilling
keywords:
  - refreelook
  - AMX Mod X
  - amxx
  - amx
  - module
  - compilling
tags:
  - refreelook
  - compilling
last_update:
  date: 07/21/2025
  author: STAM
---

# Build instructions

Unlike the other ReHLDS-org plugins, ReFreeLook builds with a plain `Makefile` on Linux (no CMake) and a Visual Studio solution on Windows. The Metamod and CSSDK headers it needs are vendored under `include/` — there's nothing extra to fetch.

### Checking requirements

**Windows**

- Visual Studio (C++11 standard) or later

**Linux**

- The Intel C++ Compiler (`icpc`), or Clang/GCC with the Makefile's `COMPILER` variable adjusted

### Clone the repository

```bash
git clone https://github.com/rehlds/ReFreeLook.git
cd ReFreeLook
```

### Building on Windows

Open `msvc/refreelook.sln` in Visual Studio and build. The output is `refreelook_amxx.dll`.

### Building on Linux

The `Makefile` defaults to the Intel compiler (`/opt/intel/bin/icpc`). If you don't have ICC installed, override `COMPILER` on the command line:

```bash
make COMPILER=clang
```

GCC also works with a small Makefile edit if you don't have Clang either — the flags in the Makefile are written for ICC/Clang specifically. The build produces `refreelook_amxx_i386.so` under `Release/`.

```bash
make clean   # remove build artifacts
```

See [Installation](./installing.md) for where the binary goes on a server.
