---
id: localizebugfix-compilling
title: Compilling
sidebar_position: 4
description: LocalizeBug Fix - archived Metamod plugin by s1lentq that blocked localization-string exploits in player names and chat on HLDS.
slug: /localizebugfix/compilling
---

<head>
  <title>LocalizeBug Fix: Compilling | ReHLDS</title>
</head>

# Build instructions

:::warning Deprecated

Kept for reference. The repository is archived on GitHub and accepts no pull requests — see [What is LocalizeBug Fix?](./index.md).

:::

### Checking requirements

**Windows**

- Visual Studio, for `msvc/localizebugfix.sln`

**Linux**

- The Intel C++ Compiler (`icpc`) — the `Makefile` hardcodes `/opt/intel/bin/icpc` and uses Intel-specific flags (`-static-intel`, `-no-intel-extensions`, `-ipo`). Building with GCC or Clang requires editing those flags out.

The HLSDK and Metamod headers are vendored under `sdk/`, so there is nothing extra to fetch.

### Clone the repository

```bash
git clone https://github.com/s1lentq/localizebugfix.git
cd localizebugfix
```

### Building on Windows

Open `msvc/localizebugfix.sln` in Visual Studio and build. The output is `localizebugfix.dll`.

### Building on Linux

```bash
make
```

The output is `localizebugfix_mm_i386.so`.

:::note

Prebuilt binaries for versions `2.0`, `2.3` and `2.4` are committed to the repository under `bin/`, so building was rarely necessary even when the project was active.

:::

See [Installation](./installing.md) for where each file went.
