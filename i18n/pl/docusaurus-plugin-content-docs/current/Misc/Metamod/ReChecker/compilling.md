---
id: rechecker-compilling
title: "ReChecker: Kompilacja"
sidebar_label: Kompilacja
sidebar_position: 4
description: ReChecker to wtyczka Metamoda, która pozwala sprawdzać pliki klienta po nazwie i skrócie md5.
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

# Instrukcja kompilacji

### Sprawdzenie wymagań

**Windows**

- Visual Studio (standard C++14) lub nowsze

**Linux**

- CMake 3.1 lub nowszy
- GCC (domyślnie) albo opcjonalnie ICC czy Clang

### Sklonowanie repozytorium

```bash
git clone https://github.com/rehlds/ReChecker.git
cd ReChecker
```

### Kompilacja w Windowsie

Otwórz `msvc/rechecker.sln` w Visual Studio i skompiluj. Wynikiem jest `rechecker_mm.dll`.

### Kompilacja w Linuksie

Skorzystaj z dołączonego skryptu `compile.sh`, który opakowuje CMake:

```bash
./compile.sh
```

Tworzy katalog `build/`, konfiguruje projekt przez CMake i uruchamia `make`. Wszystkie dodatkowe argumenty trafiają dalej do CMake, więc możesz włączyć opcje kompilacji projektu:

```bash
./compile.sh -DDEBUG=ON               # wersja diagnostyczna
./compile.sh -DUSE_CLANG_COMPILER=ON  # kompilacja Clangiem zamiast GCC
./compile.sh -DUSE_INTEL_COMPILER=ON  # kompilacja ICC
```

Kompilacja pod Linuksem daje `rechecker_mm_i386.so`.

Miejsce każdego pliku binarnego na serwerze opisano w [Instalacji](./installing.md).
