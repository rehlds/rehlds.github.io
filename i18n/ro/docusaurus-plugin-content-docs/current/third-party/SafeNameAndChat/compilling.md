---
id: safenameandchat-compilling
title: Compilare
sidebar_position: 4
description: SafeNameAndChat - plugin Metamod terț care neutralizează exploit-urile cu șiruri de localizare și cu injectare de comenzi din numele jucătorilor și din mesajele de discuție.
slug: /safenameandchat/compilling
---

<head>
  <title>SafeNameAndChat: Compilare | ReHLDS</title>
</head>

# Instrucțiuni de compilare

Majoritatea administratorilor de server ar trebui să folosească o [versiune publicată](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/releases). Compilați din sursă atunci când testați o modificare nepublicată sau când aveți nevoie de o compilare personalizată. Fișierele antet HLSDK de care are nevoie pluginul sunt incluse în `hlsdk/`.

### Verificarea cerințelor

**Windows**

- Visual Studio 2015 (standardul C++14) sau mai nou

**Linux**

- Git 1.8.5 sau mai nou
- CMake 3.10 sau mai nou
- Unul dintre: GCC 4.9.2+, ICC 15.0.1 20141023+ sau Clang (LLVM) 6.0+

### Clonarea depozitului

```bash
git clone https://github.com/WPMGPRoSToTeMa/SafeNameAndChat.git
cd SafeNameAndChat
```

### Compilarea pe Windows

Deschideți `SafeNameAndChat.sln` în Visual Studio, alegeți `Release` (sau `Debug`) dintre configurațiile soluției și platforma **x86**, apoi compilați.

### Compilarea pe Linux

Folosiți scriptul `build.sh` pus la dispoziție:

```bash
./build.sh --compiler=[gcc|icc|clang] --jobs=[N]
```

De exemplu:

```bash
./build.sh --compiler=gcc --jobs=4    # GCC
./build.sh --compiler=intel           # ICC
./build.sh --compiler=clang           # Clang / LLVM
```

Puteți transmite și definiții CMake prin `build.sh`, cu `-D<opțiune>=[ON|OFF]`:

| Definiție | Efect |
| --- | --- |
| `DEBUG` | Activează modul de depanare. |
| `USE_STATIC_LIBSTDC` | Leagă static biblioteca `libstdc++`. |

#### Pregătirea mediului de compilare (Debian / Ubuntu)

```bash
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install -y gcc-multilib g++-multilib
sudo apt-get install -y build-essential
sudo apt-get install -y libc6-dev libc6-dev-i386
```

Apoi alegeți un compilator:

```bash
sudo apt-get install -y gcc g++
# sau
sudo apt-get install -y clang
```

### Rezultatul

Compilarea produce `SafeNameAndChat.so` pe Linux și `SafeNameAndChat.dll` pe Windows. Vedeți [Instalare](./installing.md) pentru locul fiecăruia pe server și nu uitați să copiați `SafeNameAndChat.cfg` alături — pluginul caută fișierul de configurare în propriul director.
