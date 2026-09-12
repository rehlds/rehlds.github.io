---
id: revoice-compilling
title: Kompilacja
sidebar_position: 4
description: ReVoice - wtyczka Metamoda, transkoder głosu naprawiający rozmowy głosowe między klientami steamowymi i non-steam na serwerach ReHLDS.
slug: /revoice/compilling
---

<head>
  <title>ReVoice: Kompilacja | ReHLDS</title>
</head>

# Instrukcja kompilacji

W odróżnieniu od pozostałych wtyczek organizacji ReHLDS, ReVoice korzysta z nowoczesnej konfiguracji z CMake (3.21+) i [CMake Presets](https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html), zamiast z nakładki `build.sh`.

### Sprawdzenie wymagań

- CMake 3.21 lub nowszy
- [Ninja](https://ninja-build.org/) (używany przez ustawienia Ninja Multi-Config)
- Windows: Visual Studio 2022 albo Clang
- Linux: GCC albo Clang

Zależności Speex, SILK, Opus, `rehlsdk` oraz SDK Metamoda są dołączone w `external/` — nie ma żadnych podmodułów gita do zainicjowania.

### Sklonowanie repozytorium

```bash
git clone https://github.com/rehlds/ReVoice.git
cd ReVoice
```

### Kompilacja w Linuksie

```bash
cmake --preset ninja-gcc-linux
cmake --build --preset ninja-gcc-linux-release
```

Zamień `gcc` na `clang`, żeby użyć Clanga (`ninja-clang-linux`). Dostępny jest też gotowy kontener deweloperski (`.devcontainer/`, Ubuntu 24.04 z GCC/Clangiem), jeśli wolisz nie stawiać zestawu narzędzi samodzielnie.

### Kompilacja w Windowsie

```powershell
cmake --preset vs2022-msvc-windows
cmake --build --preset vs2022-msvc-windows-release
```

Zamień `msvc` na `clang`, żeby skompilować Clangiem (`vs2022-clang-windows`). Możesz też po kroku `cmake --preset` otworzyć wygenerowane rozwiązanie Visual Studio bezpośrednio.

### Wynik

Obie platformy dają `revoice_mm.dll` (Windows) albo `revoice_mm_i386.so` (Linux) w `bin/<kompilator>-<konfiguracja>/`. Miejsce pliku na serwerze opisano w [Instalacji](./installing.md).
