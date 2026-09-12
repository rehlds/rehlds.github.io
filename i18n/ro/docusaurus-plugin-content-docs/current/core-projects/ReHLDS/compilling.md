---
id: rehlds-compilling
title: Compilare
sidebar_position: 5
description: ReHLDS este o versiune reconstruită a HLDS original, cu securitate sporită, performanță mai bună și capacități extinse de modding pentru jocuri precum Half-Life și Counter-Strike 1.6.
slug: /rehlds/compilling
---

<head>
  <title>ReHLDS: Compilare | ReHLDS</title>
</head>

# Instrucțiuni de compilare

Majoritatea administratorilor de server ar trebui să folosească o [versiune oficială](https://github.com/rehlds/ReHLDS/releases). Compilați din sursă atunci când dezvoltați ReHLDS, când testați o modificare nepublicată sau când aveți nevoie de o compilare personalizată.

### Verificarea cerințelor

Compilarea ReHLDS presupune câteva cerințe software:

**Windows**

- Visual Studio 2015 (standardul C++14) sau mai nou

**Linux**

- CMake 3.10 sau mai nou
- Unul dintre: GCC 4.9.2+, ICC 15.0.1 20141023+ sau Clang (LLVM) 6.0+

### Clonarea depozitului

```bash
git clone https://github.com/rehlds/ReHLDS.git
cd ReHLDS
```

### Compilarea pe Windows

Deschideți `msvc/ReHLDS.sln` în Visual Studio, alegeți `Release Swds` (sau `Debug Swds`, pentru o compilare de depanare) dintre configurațiile soluției, apoi compilați.

:::note

CMake nu permite compilarea pe Windows — `CMakeLists.txt` eșuează intenționat, cu un mesaj care vă trimite la `msvc/ReHLDS.sln`. CMake este folosit doar pentru compilarea pe Linux.

:::

### Compilarea pe Linux

Folosiți scriptul `build.sh` pus la dispoziție, indicând opțional compilatorul preferat și numărul de sarcini:

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
sudo apt-get install -y cmake
```

Apoi alegeți un compilator:

```bash
sudo apt-get install -y gcc g++
# sau
sudo apt-get install -y clang
```

### Rularea testelor unitare

Sistemul de integrare continuă al proiectului compilează și rulează suita de teste unitare înaintea compilării obișnuite, folosind un tip de compilare CMake dedicat:

```bash
cmake -DCMAKE_BUILD_TYPE=Unittests -B build
cmake --build build -j8
LD_LIBRARY_PATH="rehlds/lib/linux32:$LD_LIBRARY_PATH" ./build/rehlds/engine_i486
```

Un cod de ieșire `0` sau `3` înseamnă că suita a trecut; orice alt cod indică un test picat.

### Rezultatul

O compilare reușită pe Linux produce `engine_i486.so` (plus binarele pentru serverul dedicat, HLTV și sistemul de fișiere) în `build/`, în aceeași structură care este înlocuită la [instalare](./installing.md). Pe Windows, fișierele DLL și EXE compilate ajung în folderul `msvc/<Configurație>` corespunzător.
