---
id: rehlds-compilling
title: Compilling
sidebar_position: 5
description: ReHLDS is a re-engineered version of the original HLDS, providing enhanced security, performance, and modding capabilities for games like Half-Life and Counter-Strike 1.6.
slug: /rehlds/compilling
---

<head>
  <title>ReHLDS: Compilling | ReHLDS</title>
</head>

# Build instructions

Most server operators should use an [official release](https://github.com/rehlds/ReHLDS/releases). Build from source when you are developing ReHLDS, testing an unreleased change, or need a custom build.

### Checking requirements

There are several software requirements for building ReHLDS:

**Windows**

- Visual Studio 2015 (C++14 standard) or later

**Linux**

- CMake 3.10 or newer
- One of: GCC 4.9.2+, ICC 15.0.1 20141023+, or Clang (LLVM) 6.0+

### Clone the repository

```bash
git clone https://github.com/rehlds/ReHLDS.git
cd ReHLDS
```

### Building on Windows

Open `msvc/ReHLDS.sln` in Visual Studio and select `Release Swds` (or `Debug Swds` for a debug build) from the solution configurations, then build.

:::note

CMake does not support building on Windows — `CMakeLists.txt` fails on purpose with a message pointing you to `msvc/ReHLDS.sln`. CMake is used for the Linux build only.

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

#### Checking the build environment (Debian / Ubuntu)

```bash
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install -y gcc-multilib g++-multilib
sudo apt-get install -y build-essential
sudo apt-get install -y libc6-dev libc6-dev-i386
sudo apt-get install -y cmake
```

Then pick a compiler:

```bash
sudo apt-get install -y gcc g++
# or
sudo apt-get install -y clang
```

### Running the unit tests

The project's CI builds and runs the unit test suite before a regular build, using a dedicated CMake build type:

```bash
cmake -DCMAKE_BUILD_TYPE=Unittests -B build
cmake --build build -j8
LD_LIBRARY_PATH="rehlds/lib/linux32:$LD_LIBRARY_PATH" ./build/rehlds/engine_i486
```

An exit code of `0` or `3` means the suite passed; any other exit code indicates a test failure.

### Output

A successful Linux build produces `engine_i486.so` (plus the dedicated server, HLTV, and filesystem binaries) under `build/`, matching the layout replaced during [installation](./installing.md). On Windows, the built DLLs/EXEs land in the corresponding `msvc/<Configuration>` folder.
