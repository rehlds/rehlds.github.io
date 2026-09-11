---
id: hitbox-fixer-compilling
title: Compilling
sidebar_position: 4
description: Hitbox Fixer - third-party Metamod plugin that fixes incorrect server-side player hitboxes in Counter-Strike 1.6, Half-Life and Adrenaline Gamer.
slug: /hitbox-fixer/compilling
---

<head>
  <title>Hitbox Fixer: Compilling | ReHLDS</title>
</head>

# Build instructions

Most server operators should use a [release build](https://github.com/Garey27/hitbox_fixer/releases). Build from source when you are testing an unreleased change or need a custom build.

The project uses plain CMake — there is no `build.sh` wrapper. The SDK headers it needs are vendored under `include/`.

### Checking requirements

- CMake 3.18 or newer
- A 32-bit toolchain — the plugin is built for `i386`, so a 64-bit host needs the multilib packages
- Linux: GCC or Clang, plus Ninja (what the project's CI uses)
- Windows: Visual Studio with the Win32 platform toolset

#### Checking the build environment (Debian / Ubuntu)

```bash
sudo apt-get update
sudo apt-get install -y git gcc-multilib g++-multilib ninja-build cmake
```

### Clone the repository

```bash
git clone https://github.com/Garey27/hitbox_fixer.git
cd hitbox_fixer
```

### Building on Linux

```bash
cmake -B build -G Ninja -DCMAKE_BUILD_TYPE=Release
cmake --build build --config Release --parallel
```

### Building on Windows

Configure for the Win32 platform explicitly — a default 64-bit configuration will not produce a usable plugin:

```powershell
cmake -B build -A Win32 -DCMAKE_BUILD_TYPE=Release
cmake --build build --config Release --parallel
```

### Output

The build produces `hitbox_fix_mm_i386.so` on Linux and `hitbox_fix_mm.dll` on Windows. See [Installation](./installing.md) for where each goes on a server, and copy `dist/hbf.cfg` alongside it.
