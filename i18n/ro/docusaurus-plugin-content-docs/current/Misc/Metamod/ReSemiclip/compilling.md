---
id: resemiclip-compilling
title: Compilare
sidebar_position: 4
description: ReSemiclip - plugin Metamod care stabilește dacă jucătorii pot trece unii prin alții. Modulul Semiclip al lui `joaquimandrade` a fost folosit ca referință.
slug: /resemiclip/compilling
---

<head>
  <title>ReSemiclip: Compilare | ReHLDS</title>
</head>

# Instrucțiuni de compilare

### Verificarea cerințelor

**Windows**

- Visual Studio (standardul C++14) sau mai nou

**Linux**

- CMake 3.1 sau mai nou
- Unul dintre: GCC (implicit), ICC sau Clang

### Clonarea depozitului

```bash
git clone https://github.com/rehlds/ReSemiclip.git
cd ReSemiclip
```

### Compilarea pe Windows

Deschideți `msvc/resemiclip.sln` în Visual Studio și compilați. Rezultatul este `resemiclip_mm.dll`.

### Compilarea pe Linux

Folosiți scriptul `build.sh` pus la dispoziție:

```bash
./build.sh --compiler=[gcc|icc|clang] --jobs=[N]
```

De exemplu:

```bash
./build.sh --compiler=gcc --jobs=4    # GCC
./build.sh --compiler=intel           # ICC
./build.sh --compiler=clang           # Clang / LLVM
```

Puteți transmite și definiții CMake prin `build.sh`, cu `-D<opțiune>=[ON|OFF]`:

| Definiție | Efect |
| --- | --- |
| `DEBUG` | Produce o compilare de depanare. |
| `USE_STATIC_LIBSTDC` | Leagă static biblioteca `libstdc++`. |

Compilarea pe Linux produce `resemiclip_mm_i386.so`.

Vedeți [Instalare](./installing.md) pentru locul fiecărui binar pe server și copiați alături `dist/config.ini` și `dist/maps/`, dacă testați o modificare a formatului configurației.
