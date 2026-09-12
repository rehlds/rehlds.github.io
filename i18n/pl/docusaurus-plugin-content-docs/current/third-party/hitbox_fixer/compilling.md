---
id: hitbox-fixer-compilling
title: Kompilacja
sidebar_position: 4
description: Hitbox Fixer - zewnętrzna wtyczka Metamoda naprawiająca błędne hitboksy graczy po stronie serwera w Counter-Strike 1.6, Half-Life i Adrenaline Gamer.
slug: /hitbox-fixer/compilling
---

<head>
  <title>Hitbox Fixer: Kompilacja | ReHLDS</title>
</head>

# Instrukcja kompilacji

Większość administratorów serwerów powinna sięgnąć po [gotowe wydanie](https://github.com/Garey27/hitbox_fixer/releases). Kompiluj ze źródeł, gdy testujesz niewydaną jeszcze zmianę albo potrzebujesz własnej wersji.

Projekt korzysta z czystego CMake — nie ma tu nakładki `build.sh`. Potrzebne pliki nagłówkowe SDK są dołączone w `include/`.

### Sprawdzenie wymagań

- CMake 3.18 lub nowszy
- Zestaw narzędzi 32-bitowych — wtyczka jest budowana pod `i386`, więc 64-bitowa maszyna potrzebuje pakietów multilib
- Linux: GCC albo Clang, a do tego Ninja (tego używa system ciągłej integracji projektu)
- Windows: Visual Studio z zestawem narzędzi platformy Win32

#### Przygotowanie środowiska kompilacji (Debian / Ubuntu)

```bash
sudo apt-get update
sudo apt-get install -y git gcc-multilib g++-multilib ninja-build cmake
```

### Sklonowanie repozytorium

```bash
git clone https://github.com/Garey27/hitbox_fixer.git
cd hitbox_fixer
```

### Kompilacja w Linuksie

```bash
cmake -B build -G Ninja -DCMAKE_BUILD_TYPE=Release
cmake --build build --config Release --parallel
```

### Kompilacja w Windowsie

Skonfiguruj projekt wyraźnie pod platformę Win32 — domyślna konfiguracja 64-bitowa nie da użytecznej wtyczki:

```powershell
cmake -B build -A Win32 -DCMAKE_BUILD_TYPE=Release
cmake --build build --config Release --parallel
```

### Wynik

Kompilacja daje `hitbox_fix_mm_i386.so` w Linuksie i `hitbox_fix_mm.dll` w Windowsie. Miejsce każdego z nich na serwerze opisano w [Instalacji](./installing.md); skopiuj obok także `dist/hbf.cfg`.
