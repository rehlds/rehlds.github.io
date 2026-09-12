---
id: refreelook-compilling
title: "ReFreeLook: Compilare"
sidebar_label: Compilare
sidebar_position: 4
description: ReFreeLook - modul AMX Mod X care le permite administratorilor aflați în modul spectator să folosească orice mod de cameră, indiferent de valoarea `mp_forcecamera` sau `mp_forcechasecam`. Funcționează doar cu cea mai recentă versiune de `ReGameDLL_CS`.
slug: /refreelook/compilling
keywords:
  - refreelook
  - AMX Mod X
  - amxx
  - amx
  - module
  - compilling
tags:
  - refreelook
  - compilling
last_update:
  date: 07/21/2025
  author: STAM
---

# Instrucțiuni de compilare

Spre deosebire de celelalte pluginuri ale organizației ReHLDS, ReFreeLook se compilează pe Linux cu un `Makefile` simplu (fără CMake), iar pe Windows cu o soluție Visual Studio. Fișierele antet Metamod și CSSDK de care are nevoie sunt incluse în `include/` — nu este nimic în plus de descărcat.

### Verificarea cerințelor

**Windows**

- Visual Studio (standardul C++11) sau mai nou

**Linux**

- Compilatorul Intel C++ (`icpc`) sau Clang/GCC, cu variabila `COMPILER` din Makefile ajustată

### Clonarea depozitului

```bash
git clone https://github.com/rehlds/ReFreeLook.git
cd ReFreeLook
```

### Compilarea pe Windows

Deschideți `msvc/refreelook.sln` în Visual Studio și compilați. Rezultatul este `refreelook_amxx.dll`.

### Compilarea pe Linux

`Makefile`-ul folosește implicit compilatorul Intel (`/opt/intel/bin/icpc`). Dacă nu aveți ICC instalat, suprascrieți `COMPILER` în linia de comandă:

```bash
make COMPILER=clang
```

GCC funcționează și el, cu o mică modificare a Makefile-ului, dacă nu aveți nici Clang — opțiunile din Makefile sunt scrise anume pentru ICC și Clang. Compilarea produce `refreelook_amxx_i386.so` în `Release/`.

```bash
make clean   # șterge rezultatele compilării
```

Vedeți [Instalare](./installing.md) pentru locul binarului pe server.
