---
id: resemiclip-compilling
title: Compilling
sidebar_position: 4
description: ReSemiclip - Metamod plugin controls the ability to pass through players. The module Semiclip by `joaquimandrade` was used as a reference.
slug: /resemiclip/compilling
---

<head>
  <title>ReSemiclip: Compilling | ReHLDS</title>
</head>

# Build instructions

### Checking requirements

**Windows**

- Visual Studio (C++14 standard) or later

**Linux**

- CMake 3.1 or newer
- One of: GCC (default), ICC, or Clang

### Clone the repository

```bash
git clone https://github.com/rehlds/ReSemiclip.git
cd ReSemiclip
```

### Building on Windows

Open `msvc/resemiclip.sln` in Visual Studio and build. The output is `resemiclip_mm.dll`.

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
| `DEBUG` | Enables a debug build. |
| `USE_STATIC_LIBSTDC` | Statically links `libstdc++`. |

The Linux build produces `resemiclip_mm_i386.so`.

See [Installation](./installing.md) for where each binary goes on a server, and copy `dist/config.ini` and `dist/maps/` alongside it if you're testing a config format change.
