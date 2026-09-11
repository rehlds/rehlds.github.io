---
id: revoice-compilling
title: Compilling
sidebar_position: 4
description: ReVoice - Metamod plugin, voice transcoder which fixes voice chat between non-steam and steam clients at ReHLDS servers.
slug: /revoice/compilling
---

<head>
  <title>ReVoice: Compilling | ReHLDS</title>
</head>

# Build instructions

Unlike the other ReHLDS-org plugins, ReVoice uses a modern CMake (3.21+) + [CMake Presets](https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html) setup instead of a `build.sh` wrapper.

### Checking requirements

- CMake 3.21 or newer
- [Ninja](https://ninja-build.org/) (used by the Ninja Multi-Config presets)
- Windows: Visual Studio 2022, or Clang
- Linux: GCC or Clang

The Speex, SILK, Opus, `rehlsdk`, and Metamod SDK dependencies are vendored under `external/` — there are no git submodules to initialize.

### Clone the repository

```bash
git clone https://github.com/rehlds/ReVoice.git
cd ReVoice
```

### Building on Linux

```bash
cmake --preset ninja-gcc-linux
cmake --build --preset ninja-gcc-linux-release
```

Swap `gcc` for `clang` to use Clang instead (`ninja-clang-linux`). A ready-to-use dev container is also provided (`.devcontainer/`, Ubuntu 24.04 with GCC/Clang) if you'd rather not set up the toolchain yourself.

### Building on Windows

```powershell
cmake --preset vs2022-msvc-windows
cmake --build --preset vs2022-msvc-windows-release
```

Swap `msvc` for `clang` to build with Clang instead (`vs2022-clang-windows`). You can also open the generated Visual Studio solution directly after the `cmake --preset` step.

### Output

Both platforms produce `revoice_mm.dll` (Windows) or `revoice_mm_i386.so` (Linux) under `bin/<compiler>-<config>/`. See [Installation](./installing.md) for where it goes on a server.
