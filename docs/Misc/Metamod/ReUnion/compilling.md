---
id: reunion-compilling
title: Compilling
sidebar_position: 4
description: ReUnion - Metamod plugin that allows protocol 47 and 48 non-steam clients to connect to ReHLDS servers.
slug: /reunion/compilling
---

<head>
  <title>ReUnion: Compilling | ReHLDS</title>
</head>

# Build instructions

### Checking requirements

**Windows**

- Visual Studio 2015 (C++14 standard) or later

**Linux**

- CMake 3.10 or newer
- One of: GCC 4.9.2+, ICC 15.0.1 20141023+, or Clang (LLVM) 6.0+

### Clone the repository

```bash
git clone https://github.com/rehlds/ReUnion.git
cd ReUnion
```

### Building on Windows

Open `msvc/Reunion.sln` in Visual Studio, select `Release` (or `Debug`), and build. The output is `reunion_mm.dll`.

:::note

CMake does not support building on Windows — `CMakeLists.txt` fails on purpose with a message pointing you to `msvc/Reunion.sln`. CMake is used for the Linux build only.

:::

### Building on Linux

Use the provided `build.sh` script:

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

The Linux build produces `reunion_mm_i386.so`. See [Installation](./installing.md) for where each binary and `reunion.cfg` go on a server.
