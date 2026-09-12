---
id: rechecker-compilling
title: "ReChecker: Compilare"
sidebar_label: Compilare
sidebar_position: 4
description: ReChecker este un plugin Metamod care permite verificarea fișierelor clientului după nume și după hash-ul md5.
slug: /rechecker/compilling
keywords:
  - rechecker
  - metamod
  - plugin
  - compilling
tags:
  - rechecker
  - compilling
last_update:
  date: 07/21/2025
  author: STAM
---

# Instrucțiuni de compilare

### Verificarea cerințelor

**Windows**

- Visual Studio (standardul C++14) sau mai nou

**Linux**

- CMake 3.1 sau mai nou
- GCC (implicit) sau, opțional, ICC ori Clang

### Clonarea depozitului

```bash
git clone https://github.com/rehlds/ReChecker.git
cd ReChecker
```

### Compilarea pe Windows

Deschideți `msvc/rechecker.sln` în Visual Studio și compilați. Rezultatul este `rechecker_mm.dll`.

### Compilarea pe Linux

Folosiți scriptul `compile.sh` pus la dispoziție, care înfășoară CMake:

```bash
./compile.sh
```

El creează un director `build/`, configurează proiectul cu CMake și rulează `make`. Toate argumentele suplimentare sunt transmise mai departe către CMake, așa că puteți activa opțiunile de compilare ale proiectului:

```bash
./compile.sh -DDEBUG=ON               # compilare de depanare
./compile.sh -DUSE_CLANG_COMPILER=ON  # compilează cu Clang în loc de GCC
./compile.sh -DUSE_INTEL_COMPILER=ON  # compilează cu ICC
```

Compilarea pe Linux produce `rechecker_mm_i386.so`.

Vedeți [Instalare](./installing.md) pentru locul fiecărui binar pe server.
