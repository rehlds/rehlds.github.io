---
id: regamedll-cs-compilling
title: Building from source
sidebar_position: 7
description: Build ReGameDLL_CS from source on Windows or Linux.
slug: /regamedll-cs/compilling
---

# Building from source

Most server operators should use an official release. Build from source when you are developing ReGameDLL_CS, testing an unreleased change, or need a custom build configuration.

## Requirements

- Git 1.8.5 or newer
- CMake 3.10 or newer
- Windows: Visual Studio 2015 or newer
- Linux: GCC 4.9.2 or newer, or Clang 6 or newer
- A toolchain capable of producing 32-bit binaries and the corresponding 32-bit development libraries

Check the upstream README and CI configuration if a newer branch raises these minimum versions.

## Clone the repository

```bash
git clone --recursive https://github.com/rehlds/ReGameDLL_CS.git
cd ReGameDLL_CS
```

If you cloned without `--recursive`, initialize the submodules before building:

```bash
git submodule update --init --recursive
```

## Windows

Open `msvc/ReGameDLL.sln` in Visual Studio, select the desired configuration, and build the solution. Use the generated `mp.dll` as the server GameDLL.

## Linux

The repository provides `build.sh` as the supported build entry point:

```bash
./build.sh --compiler=gcc --jobs=4
```

To build with Clang instead:

```bash
./build.sh --compiler=clang --jobs=4
```

Useful environment options documented by the project include:

```bash
DEBUG=1 ./build.sh --compiler=gcc --jobs=4
USE_STATIC_LIBSTDC=1 ./build.sh --compiler=gcc --jobs=4
```

`DEBUG=1` creates a debug build. `USE_STATIC_LIBSTDC=1` statically links the C++ standard library where supported.

## Staging a custom build

Copy the resulting GameDLL to a test server first:

- Windows: `cstrike/dlls/mp.dll` or `czero/dlls/mp.dll`
- Linux: `cstrike/dlls/cs.so` or `czero/dlls/cs.so`

Keep a backup of the previous binary and test without third-party plugins before deploying to production. Source snapshots can contain changes that have not yet gone through a stable release cycle.
