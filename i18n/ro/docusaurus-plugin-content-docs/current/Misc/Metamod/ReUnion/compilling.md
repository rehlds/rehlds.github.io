---
id: reunion-compilling
title: Compilare
sidebar_position: 4
description: ReUnion - plugin Metamod care permite clienților non-Steam cu protocoalele 47 și 48 să se conecteze la servere ReHLDS.
slug: /reunion/compilling
---

<head>
  <title>ReUnion: Compilare | ReHLDS</title>
</head>

# Instrucțiuni de compilare

### Verificarea cerințelor

**Windows**

- Visual Studio 2015 (standardul C++14) sau mai nou

**Linux**

- CMake 3.10 sau mai nou
- Unul dintre: GCC 4.9.2+, ICC 15.0.1 20141023+ sau Clang (LLVM) 6.0+

### Clonarea depozitului

```bash
git clone https://github.com/rehlds/ReUnion.git
cd ReUnion
```

### Compilarea pe Windows

Deschideți `msvc/Reunion.sln` în Visual Studio, alegeți `Release` (sau `Debug`) și compilați. Rezultatul este `reunion_mm.dll`.

:::note

CMake nu permite compilarea pe Windows — `CMakeLists.txt` eșuează intenționat, cu un mesaj care vă trimite la `msvc/Reunion.sln`. CMake este folosit doar pentru compilarea pe Linux.

:::

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
| `DEBUG` | Activează modul de depanare. |
| `USE_STATIC_LIBSTDC` | Leagă static biblioteca `libstdc++`. |

#### Pregătirea mediului de compilare (Debian / Ubuntu)

```bash
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install -y gcc-multilib g++-multilib
sudo apt-get install -y build-essential
sudo apt-get install -y libc6-dev libc6-dev-i386
```

Apoi alegeți un compilator:

```bash
sudo apt-get install -y gcc g++
# sau
sudo apt-get install -y clang
```

Compilarea pe Linux produce `reunion_mm_i386.so`. Vedeți [Instalare](./installing.md) pentru locul fiecărui binar și al fișierului `reunion.cfg` pe server.
