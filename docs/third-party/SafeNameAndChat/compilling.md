---
id: safenameandchat-compilling
title: Compilling
sidebar_position: 4
description: SafeNameAndChat - third-party Metamod plugin that neutralizes localization-string and command-injection exploits in player names and chat messages.
slug: /safenameandchat/compilling
---

<head>
  <title>SafeNameAndChat: Compilling | ReHLDS</title>
</head>

# Build instructions

Most server operators should use a [release build](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/releases). Build from source when you are testing an unreleased change or need a custom build. The HLSDK headers the plugin needs are vendored under `hlsdk/`.

### Checking requirements

**Windows**

- Visual Studio 2015 (C++14 standard) or later

**Linux**

- Git 1.8.5 or newer
- CMake 3.10 or newer
- One of: GCC 4.9.2+, ICC 15.0.1 20141023+, or Clang (LLVM) 6.0+

### Clone the repository

```bash
git clone https://github.com/WPMGPRoSToTeMa/SafeNameAndChat.git
cd SafeNameAndChat
```

### Building on Windows

Open `SafeNameAndChat.sln` in Visual Studio, select `Release` (or `Debug`) from the solution configurations and the **x86** platform, then build.

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

### Output

The build produces `SafeNameAndChat.so` on Linux and `SafeNameAndChat.dll` on Windows. See [Installation](./installing.md) for where each goes on a server, and remember to copy `SafeNameAndChat.cfg` next to it — the plugin looks for the config in its own directory.
