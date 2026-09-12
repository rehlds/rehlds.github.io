---
id: resemiclip-compilling
title: Kompilacja
sidebar_position: 4
description: ReSemiclip - wtyczka Metamoda decydująca o tym, czy gracze mogą przez siebie przechodzić. Jako wzorzec posłużył moduł Semiclip autorstwa `joaquimandrade`.
slug: /resemiclip/compilling
---

<head>
  <title>ReSemiclip: Kompilacja | ReHLDS</title>
</head>

# Instrukcja kompilacji

### Sprawdzenie wymagań

**Windows**

- Visual Studio (standard C++14) lub nowsze

**Linux**

- CMake 3.1 lub nowszy
- Jeden z: GCC (domyślnie), ICC albo Clang

### Sklonowanie repozytorium

```bash
git clone https://github.com/rehlds/ReSemiclip.git
cd ReSemiclip
```

### Kompilacja w Windowsie

Otwórz `msvc/resemiclip.sln` w Visual Studio i skompiluj. Wynikiem jest `resemiclip_mm.dll`.

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
| `DEBUG` | Tworzy wersję diagnostyczną. |
| `USE_STATIC_LIBSTDC` | Dołącza statycznie bibliotekę `libstdc++`. |

Kompilacja pod Linuksem daje `resemiclip_mm_i386.so`.

Miejsce każdego pliku binarnego na serwerze opisano w [Instalacji](./installing.md); skopiuj obok także `dist/config.ini` i `dist/maps/`, jeśli testujesz zmianę formatu konfiguracji.
