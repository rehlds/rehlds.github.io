---
id: reapi-compilling
title: Kompilacja
sidebar_position: 4
description: ReAPI - moduł AMX Mod X udostępniający API dla ReHLDS, ReGameDLL i wtyczek Metamoda (na przykład ReUnion i ReVoice).
slug: /reapi/compilling
---

<head>
  <title>ReAPI: Kompilacja | ReHLDS</title>
</head>

# Instrukcja kompilacji

Większość użytkowników powinna sięgnąć po [oficjalne wydanie](https://github.com/rehlds/ReAPI/releases). Kompiluj ze źródeł, gdy rozwijasz sam ReAPI, testujesz niewydaną jeszcze zmianę albo potrzebujesz własnej wersji.

### Sprawdzenie wymagań

Kompilacja ReAPI wymaga kilku rzeczy:

**Windows**

- Visual Studio 2015 (standard C++14) lub nowsze

**Linux**

- Git 1.8.5 lub nowszy
- CMake 3.10 lub nowszy
- Jeden z: GCC 4.9.2+, ICC 15.0.1 20141023+ albo Clang (LLVM) 6.0+

### Sklonowanie repozytorium

```bash
git clone https://github.com/rehlds/ReAPI.git
cd ReAPI
```

### Kompilacja w Windowsie

Otwórz `msvc/reapi.sln` w Visual Studio, wybierz `Release` (albo `Debug`) spośród konfiguracji rozwiązania i skompiluj. Wynikiem jest `reapi_amxx.dll`.

:::note

CMake nie obsługuje kompilacji w Windowsie — `CMakeLists.txt` celowo kończy się błędem i komunikatem kierującym do `msvc/reapi.sln`. CMake służy wyłącznie do kompilacji pod Linuksem.

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

Kompilacja pod Linuksem daje `reapi_amxx_i386.so`.

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

### Przygotowanie własnej wersji

Wydanie zawiera obok pliku binarnego także pliki nagłówkowe Pawna z `reapi/extra/amxmodx/scripting/include/` — skopiuj i je, jeśli testujesz wersję, która zmieniła publiczne API. Miejsce każdego pliku na serwerze opisano w [Instalacji](./installing.md).
