---
id: regamedll-cs-compilling
title: Kompilacja ze źródeł
sidebar_position: 7
description: Skompiluj ReGameDLL_CS ze źródeł w Windowsie albo w Linuksie.
slug: /regamedll-cs/compilling
---

# Kompilacja ze źródeł

Większość administratorów serwerów powinna używać oficjalnego wydania. Kompiluj ze źródeł, gdy rozwijasz ReGameDLL_CS, testujesz niewydaną jeszcze zmianę albo potrzebujesz własnej konfiguracji kompilacji.

## Wymagania

- Git 1.8.5 lub nowszy
- CMake 3.10 lub nowszy
- Windows: Visual Studio 2015 lub nowsze
- Linux: GCC 4.9.2 lub nowszy albo Clang 6 lub nowszy
- Zestaw narzędzi zdolny tworzyć 32-bitowe pliki binarne oraz odpowiadające im 32-bitowe biblioteki programistyczne

Zajrzyj do pliku README i do konfiguracji ciągłej integracji w repozytorium, jeśli nowsza gałąź podnosi te minimalne wersje.

## Sklonowanie repozytorium

```bash
git clone --recursive https://github.com/rehlds/ReGameDLL_CS.git
cd ReGameDLL_CS
```

Jeśli sklonowałeś bez `--recursive`, przed kompilacją zainicjuj podmoduły:

```bash
git submodule update --init --recursive
```

## Windows

Otwórz `msvc/ReGameDLL.sln` w Visual Studio, wybierz żądaną konfigurację i skompiluj rozwiązanie. Powstały `mp.dll` jest serwerową biblioteką GameDLL.

## Linux

Repozytorium udostępnia `build.sh` jako oficjalny punkt wejścia do kompilacji:

```bash
./build.sh --compiler=gcc --jobs=4
```

Żeby skompilować Clangiem:

```bash
./build.sh --compiler=clang --jobs=4
```

Wśród udokumentowanych przez projekt opcji środowiskowych są:

```bash
DEBUG=1 ./build.sh --compiler=gcc --jobs=4
USE_STATIC_LIBSTDC=1 ./build.sh --compiler=gcc --jobs=4
```

`DEBUG=1` tworzy wersję diagnostyczną. `USE_STATIC_LIBSTDC=1` dołącza statycznie standardową bibliotekę C++, tam gdzie jest to obsługiwane.

## Przygotowanie własnej wersji

Skopiuj powstałą bibliotekę GameDLL najpierw na serwer testowy:

- Windows: `cstrike/dlls/mp.dll` albo `czero/dlls/mp.dll`
- Linux: `cstrike/dlls/cs.so` albo `czero/dlls/cs.so`

Zachowaj kopię poprzedniego pliku binarnego i przetestuj bez zewnętrznych wtyczek, zanim trafi na produkcję. Migawki kodu źródłowego mogą zawierać zmiany, które nie przeszły jeszcze cyklu wydania stabilnego.
