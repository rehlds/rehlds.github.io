---
id: reapi-compilling
title: Compilling
sidebar_position: 4
description: ReAPI - AMXModX module providing APIs for ReHLDS, ReGameDLL, and Metamod plugins (e.g., ReUnion, ReVoice).
slug: /reapi/compilling
---

<head>
  <title>ReAPI: Compilling | ReHLDS</title>
</head>

# Build instructions

Most users should use an [official release](https://github.com/rehlds/ReAPI/releases). Build from source when you are developing ReAPI itself, testing an unreleased change, or need a custom build.

### Checking requirements

There are several software requirements for building ReAPI:

**Windows**

- Visual Studio 2015 (C++14 standard) or later

**Linux**

- Git 1.8.5 or newer
- CMake 3.10 or newer
- One of: GCC 4.9.2+, ICC 15.0.1 20141023+, or Clang (LLVM) 6.0+

### Clone the repository

```bash
git clone https://github.com/rehlds/ReAPI.git
cd ReAPI
```

### Building on Windows

Open `msvc/reapi.sln` in Visual Studio, select `Release` (or `Debug`) from the solution configurations, and build. The output is `reapi_amxx.dll`.

:::note

CMake does not support building on Windows — `CMakeLists.txt` fails on purpose with a message pointing you to `msvc/reapi.sln`. CMake is used for the Linux build only.

:::

### Building on Linux

Use the provided `build.sh` script, optionally passing a preferred compiler and job count:

```bash
./build.sh --compiler=[gcc|icc|clang] --jobs=[N]
```

For example:

```bash
./build.sh --compiler=gcc --jobs=4    # GCC
./build.sh --compiler=intel           # ICC
./build.sh --compiler=clang           # Clang / LLVM
```

You can also pass CMake definitions through `build.sh` with `-D<option>=[ON|OFF]`:

| Definition | Effect |
| --- | --- |
| `DEBUG` | Enables debugging mode. |
| `USE_STATIC_LIBSTDC` | Statically links `libstdc++`. |

The Linux build produces `reapi_amxx_i386.so`.

#### Checking the build environment (Debian / Ubuntu)

```bash
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install -y gcc-multilib g++-multilib
sudo apt-get install -y build-essential
sudo apt-get install -y libc6-dev libc6-dev-i386
```

Then pick a compiler:

```bash
sudo apt-get install -y gcc g++
# or
sudo apt-get install -y clang
```

### Staging a custom build

A release also bundles the Pawn headers from `reapi/extra/amxmodx/scripting/include/` alongside the binary — copy those too if you're testing a build that changed the public API. See [Installation](./installing.md) for where each file goes on a server.
