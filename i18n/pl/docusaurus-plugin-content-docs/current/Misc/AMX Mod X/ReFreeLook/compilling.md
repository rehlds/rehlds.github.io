---
id: refreelook-compilling
title: "ReFreeLook: Kompilacja"
sidebar_label: Kompilacja
sidebar_position: 4
description: ReFreeLook - moduł AMX Mod X pozwalający administratorom w trybie obserwatora korzystać z dowolnego trybu kamery, niezależnie od wartości `mp_forcecamera` czy `mp_forcechasecam`. Działa tylko z najnowszą wersją `ReGameDLL_CS`.
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

# Instrukcja kompilacji

W odróżnieniu od pozostałych wtyczek organizacji ReHLDS, ReFreeLook kompiluje się w Linuksie zwykłym `Makefile` (bez CMake), a w Windowsie rozwiązaniem Visual Studio. Potrzebne pliki nagłówkowe Metamoda i CSSDK są dołączone w `include/` — nie trzeba pobierać niczego dodatkowo.

### Sprawdzenie wymagań

**Windows**

- Visual Studio (standard C++11) lub nowsze

**Linux**

- Kompilator Intel C++ (`icpc`) albo Clang/GCC z poprawioną zmienną `COMPILER` w pliku Makefile

### Sklonowanie repozytorium

```bash
git clone https://github.com/rehlds/ReFreeLook.git
cd ReFreeLook
```

### Kompilacja w Windowsie

Otwórz `msvc/refreelook.sln` w Visual Studio i skompiluj. Wynikiem jest `refreelook_amxx.dll`.

### Kompilacja w Linuksie

`Makefile` domyślnie korzysta z kompilatora Intela (`/opt/intel/bin/icpc`). Jeśli nie masz zainstalowanego ICC, nadpisz `COMPILER` w wierszu poleceń:

```bash
make COMPILER=clang
```

GCC też zadziała po niewielkiej poprawce w pliku Makefile, jeśli nie masz również Clanga — flagi w Makefile napisano konkretnie pod ICC i Clanga. Kompilacja daje `refreelook_amxx_i386.so` w `Release/`.

```bash
make clean   # usuwa wyniki kompilacji
```

Miejsce pliku binarnego na serwerze opisano w [Instalacji](./installing.md).
