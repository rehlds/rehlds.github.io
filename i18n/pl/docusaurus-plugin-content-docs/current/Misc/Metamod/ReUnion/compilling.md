---
id: reunion-compilling
title: Kompilacja
sidebar_position: 4
description: ReUnion - wtyczka Metamoda pozwalająca klientom non-steam z protokołami 47 i 48 łączyć się z serwerami ReHLDS.
slug: /reunion/compilling
---

<head>
  <title>ReUnion: Kompilacja | ReHLDS</title>
</head>

# Instrukcja kompilacji

### Sprawdzenie wymagań

**Windows**

- Visual Studio 2015 (standard C++14) lub nowsze

**Linux**

- CMake 3.10 lub nowszy
- Jeden z: GCC 4.9.2+, ICC 15.0.1 20141023+ albo Clang (LLVM) 6.0+

### Sklonowanie repozytorium

```bash
git clone https://github.com/rehlds/ReUnion.git
cd ReUnion
```

### Kompilacja w Windowsie

Otwórz `msvc/Reunion.sln` w Visual Studio, wybierz `Release` (albo `Debug`) i skompiluj. Wynikiem jest `reunion_mm.dll`.

:::note

CMake nie obsługuje kompilacji w Windowsie — `CMakeLists.txt` celowo kończy się błędem i komunikatem kierującym do `msvc/Reunion.sln`. CMake służy wyłącznie do kompilacji pod Linuksem.

:::

### Kompilacja w Linuksie

Skorzystaj z dołączonego skryptu `build.sh`:

```bash
./build.sh --compiler=[gcc|icc|clang] --jobs=[N]
```

Na przykład:

```bash
./build.sh --compiler=gcc --jobs=4    # GCC
./build.sh --compiler=intel           # ICC
./build.sh --compiler=clang           # Clang / LLVM
```

Przez `build.sh` możesz też przekazać definicje CMake w postaci `-D<opcja>=[ON|OFF]`:

| Definicja | Działanie |
| --- | --- |
| `DEBUG` | Włącza tryb diagnostyczny. |
| `USE_STATIC_LIBSTDC` | Dołącza statycznie bibliotekę `libstdc++`. |

#### Przygotowanie środowiska kompilacji (Debian / Ubuntu)

```bash
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install -y gcc-multilib g++-multilib
sudo apt-get install -y build-essential
sudo apt-get install -y libc6-dev libc6-dev-i386
```

Następnie wybierz kompilator:

```bash
sudo apt-get install -y gcc g++
# albo
sudo apt-get install -y clang
```

Kompilacja pod Linuksem daje `reunion_mm_i386.so`. Miejsce każdego pliku binarnego i pliku `reunion.cfg` na serwerze opisano w [Instalacji](./installing.md).
