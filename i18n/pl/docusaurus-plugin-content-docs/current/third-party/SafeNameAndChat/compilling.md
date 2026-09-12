---
id: safenameandchat-compilling
title: Kompilacja
sidebar_position: 4
description: SafeNameAndChat - zewnętrzna wtyczka Metamoda unieszkodliwiająca exploity z ciągami lokalizacyjnymi i wstrzykiwaniem poleceń w nazwach graczy i wiadomościach czatu.
slug: /safenameandchat/compilling
---

<head>
  <title>SafeNameAndChat: Kompilacja | ReHLDS</title>
</head>

# Instrukcja kompilacji

Większość administratorów serwerów powinna sięgnąć po [gotowe wydanie](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/releases). Kompiluj ze źródeł, gdy testujesz niewydaną jeszcze zmianę albo potrzebujesz własnej wersji. Potrzebne wtyczce pliki nagłówkowe HLSDK są dołączone w `hlsdk/`.

### Sprawdzenie wymagań

**Windows**

- Visual Studio 2015 (standard C++14) lub nowsze

**Linux**

- Git 1.8.5 lub nowszy
- CMake 3.10 lub nowszy
- Jeden z: GCC 4.9.2+, ICC 15.0.1 20141023+ albo Clang (LLVM) 6.0+

### Sklonowanie repozytorium

```bash
git clone https://github.com/WPMGPRoSToTeMa/SafeNameAndChat.git
cd SafeNameAndChat
```

### Kompilacja w Windowsie

Otwórz `SafeNameAndChat.sln` w Visual Studio, wybierz `Release` (albo `Debug`) spośród konfiguracji rozwiązania oraz platformę **x86**, a następnie skompiluj.

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

### Wynik

Kompilacja daje `SafeNameAndChat.so` w Linuksie i `SafeNameAndChat.dll` w Windowsie. Miejsce każdego z nich na serwerze opisano w [Instalacji](./installing.md); pamiętaj też, żeby skopiować obok `SafeNameAndChat.cfg` — wtyczka szuka konfiguracji we własnym katalogu.
