---
id: revoice-compilling
title: Compilare
sidebar_position: 4
description: ReVoice - plugin Metamod, transcodor de voce care repară discuția prin voce între clienții Steam și non-Steam pe serverele ReHLDS.
slug: /revoice/compilling
---

<head>
  <title>ReVoice: Compilare | ReHLDS</title>
</head>

# Instrucțiuni de compilare

Spre deosebire de celelalte pluginuri ale organizației ReHLDS, ReVoice folosește o configurație modernă, cu CMake (3.21+) și [CMake Presets](https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html), în locul unui înveliș `build.sh`.

### Verificarea cerințelor

- CMake 3.21 sau mai nou
- [Ninja](https://ninja-build.org/) (folosit de configurațiile Ninja Multi-Config)
- Windows: Visual Studio 2022 sau Clang
- Linux: GCC sau Clang

Dependențele Speex, SILK, Opus, `rehlsdk` și SDK-ul Metamod sunt incluse în `external/` — nu există submodule git de inițializat.

### Clonarea depozitului

```bash
git clone https://github.com/rehlds/ReVoice.git
cd ReVoice
```

### Compilarea pe Linux

```bash
cmake --preset ninja-gcc-linux
cmake --build --preset ninja-gcc-linux-release
```

Înlocuiți `gcc` cu `clang` ca să folosiți Clang (`ninja-clang-linux`). Există și un container de dezvoltare gata pregătit (`.devcontainer/`, Ubuntu 24.04 cu GCC/Clang), dacă preferați să nu configurați singur setul de unelte.

### Compilarea pe Windows

```powershell
cmake --preset vs2022-msvc-windows
cmake --build --preset vs2022-msvc-windows-release
```

Înlocuiți `msvc` cu `clang` ca să compilați cu Clang (`vs2022-clang-windows`). Puteți deschide și direct soluția Visual Studio generată, după pasul `cmake --preset`.

### Rezultatul

Ambele platforme produc `revoice_mm.dll` (Windows) sau `revoice_mm_i386.so` (Linux) în `bin/<compilator>-<configurație>/`. Vedeți [Instalare](./installing.md) pentru locul lui pe server.
