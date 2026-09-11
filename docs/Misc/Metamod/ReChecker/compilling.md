---
id: rechecker-compilling
title: "ReChecker: Compilling"
sidebar_label: Compilling
sidebar_position: 4
description: ReChecker - Metamod plugin that gives the ability to check client files by their name and md5 hash.
slug: /rechecker/compilling
keywords:
  - rechecker
  - metamod
  - plugin
  - compilling
tags:
  - rechecker
  - compilling
last_update:
  date: 07/21/2025
  author: STAM
---

# Build instructions

### Checking requirements

**Windows**

- Visual Studio (C++14 standard) or later

**Linux**

- CMake 3.1 or newer
- GCC (default), or optionally ICC or Clang

### Clone the repository

```bash
git clone https://github.com/rehlds/ReChecker.git
cd ReChecker
```

### Building on Windows

Open `msvc/rechecker.sln` in Visual Studio and build. The output is `rechecker_mm.dll`.

### Building on Linux

Use the provided `compile.sh` script, which wraps CMake:

```bash
./compile.sh
```

It creates a `build/` directory, configures with CMake, and runs `make`. Any extra arguments are forwarded to CMake, so you can enable the project's build options:

```bash
./compile.sh -DDEBUG=ON               # debug build
./compile.sh -DUSE_CLANG_COMPILER=ON  # build with Clang instead of GCC
./compile.sh -DUSE_INTEL_COMPILER=ON  # build with ICC
```

The Linux build produces `rechecker_mm_i386.so`.

See [Installation](./installing.md) for where each binary goes on a server.
