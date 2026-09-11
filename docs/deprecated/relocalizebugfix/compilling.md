---
id: relocalizebugfix-compilling
title: Compilling
sidebar_position: 4
description: ReLocalizeBug Fix - deprecated Metamod plugin that blocked localization-string exploits in player names and chat on ReHLDS servers.
slug: /relocalizebugfix/compilling
---

<head>
  <title>ReLocalizeBug Fix: Compilling | ReHLDS</title>
</head>

# Build instructions

:::warning Deprecated

Kept for reference. The plugin is no longer maintained and is incompatible with modern ReHLDS versions — see [What is ReLocalizeBug Fix?](./index.md).

:::

### Checking requirements

**Windows**

- Visual Studio, for `msvc/relocalizebugfix.sln`

**Linux**

- The Intel C++ Compiler (`icpc`) — the `Makefile` hardcodes `/opt/intel/bin/icpc` and uses Intel-specific flags (`-static-intel`, `-no-intel-extensions`, `-ipo`, `-fasm-blocks`). Building with GCC or Clang requires editing those out.

The CSSDK and Metamod headers are vendored under `cssdk/` and `metamod/`, so there is nothing extra to fetch. This project predates the CMake and `build.sh` setup used by the organization's maintained projects.

### Clone the repository

```bash
git clone https://github.com/rehlds/relocalizebugfix.git
cd relocalizebugfix
```

### Building on Windows

Open `msvc/relocalizebugfix.sln` in Visual Studio and build. The output is `relocalizebugfix_mm.dll`.

### Building on Linux

```bash
make
```

The output lands in `Release/` as `relocalizebugfix_mm_i386.so`.

:::note

Prebuilt binaries are committed to the repository under `bin/`, so building was rarely necessary even when the project was active.

:::

See [Installation](./installing.md) for where each file went.
