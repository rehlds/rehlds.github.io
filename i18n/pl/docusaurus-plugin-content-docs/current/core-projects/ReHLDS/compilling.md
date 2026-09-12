---
id: rehlds-compilling
title: Kompilacja
sidebar_position: 5
description: ReHLDS to przebudowana wersja oryginalnego HLDS, z wyższym poziomem bezpieczeństwa, lepszą wydajnością i szerszymi możliwościami modyfikacji gier takich jak Half-Life i Counter-Strike 1.6.
slug: /rehlds/compilling
---

<head>
  <title>ReHLDS: Kompilacja | ReHLDS</title>
</head>

# Instrukcja kompilacji

Większość administratorów serwerów powinna używać [oficjalnego wydania](https://github.com/rehlds/ReHLDS/releases). Kompiluj ze źródeł, gdy rozwijasz ReHLDS, testujesz niewydaną jeszcze zmianę albo potrzebujesz własnej wersji.

### Sprawdzenie wymagań

Kompilacja ReHLDS wymaga kilku rzeczy:

**Windows**

- Visual Studio 2015 (standard C++14) lub nowsze

**Linux**

- CMake 3.10 lub nowszy
- Jeden z: GCC 4.9.2+, ICC 15.0.1 20141023+ albo Clang (LLVM) 6.0+

### Sklonowanie repozytorium

```bash
git clone https://github.com/rehlds/ReHLDS.git
cd ReHLDS
```

### Kompilacja w Windowsie

Otwórz `msvc/ReHLDS.sln` w Visual Studio, wybierz `Release Swds` (albo `Debug Swds`, jeśli chcesz wersję diagnostyczną) spośród konfiguracji rozwiązania, a następnie skompiluj.

:::note

CMake nie obsługuje kompilacji w Windowsie — `CMakeLists.txt` celowo kończy się błędem i komunikatem kierującym do `msvc/ReHLDS.sln`. CMake służy wyłącznie do kompilacji pod Linuksem.

:::

### Kompilacja w Linuksie

Skorzystaj z dołączonego skryptu `build.sh`, opcjonalnie podając wybrany kompilator i liczbę zadań:

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
sudo apt-get install -y cmake
```

Następnie wybierz kompilator:

```bash
sudo apt-get install -y gcc g++
# albo
sudo apt-get install -y clang
```

### Uruchomienie testów jednostkowych

System ciągłej integracji projektu kompiluje i uruchamia zestaw testów jednostkowych przed zwykłą kompilacją, korzystając z osobnego typu kompilacji CMake:

```bash
cmake -DCMAKE_BUILD_TYPE=Unittests -B build
cmake --build build -j8
LD_LIBRARY_PATH="rehlds/lib/linux32:$LD_LIBRARY_PATH" ./build/rehlds/engine_i486
```

Kod wyjścia `0` albo `3` oznacza, że zestaw testów przeszedł; każdy inny kod wskazuje na nieudany test.

### Wynik

Udana kompilacja pod Linuksem daje `engine_i486.so` (a także pliki serwera dedykowanego, HLTV i systemu plików) w katalogu `build/`, w takim samym układzie, jaki podmieniasz podczas [instalacji](./installing.md). W Windowsie skompilowane pliki DLL i EXE trafiają do odpowiedniego katalogu `msvc/<Konfiguracja>`.
