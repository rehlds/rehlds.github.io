---
id: reapi-compilling
title: Compilare
sidebar_position: 4
description: ReAPI - modul AMX Mod X care oferă API-uri pentru ReHLDS, ReGameDLL și pluginurile Metamod (de exemplu, ReUnion și ReVoice).
slug: /reapi/compilling
---

<head>
  <title>ReAPI: Compilare | ReHLDS</title>
</head>

# Instrucțiuni de compilare

Majoritatea utilizatorilor ar trebui să folosească o [versiune oficială](https://github.com/rehlds/ReAPI/releases). Compilați din sursă atunci când dezvoltați ReAPI însuși, când testați o modificare nepublicată sau când aveți nevoie de o compilare personalizată.

### Verificarea cerințelor

Compilarea ReAPI presupune câteva cerințe software:

**Windows**

- Visual Studio 2015 (standardul C++14) sau mai nou

**Linux**

- Git 1.8.5 sau mai nou
- CMake 3.10 sau mai nou
- Unul dintre: GCC 4.9.2+, ICC 15.0.1 20141023+ sau Clang (LLVM) 6.0+

### Clonarea depozitului

```bash
git clone https://github.com/rehlds/ReAPI.git
cd ReAPI
```

### Compilarea pe Windows

Deschideți `msvc/reapi.sln` în Visual Studio, alegeți `Release` (sau `Debug`) dintre configurațiile soluției și compilați. Rezultatul este `reapi_amxx.dll`.

:::note

CMake nu permite compilarea pe Windows — `CMakeLists.txt` eșuează intenționat, cu un mesaj care vă trimite la `msvc/reapi.sln`. CMake este folosit doar pentru compilarea pe Linux.

:::

### Compilarea pe Linux

Folosiți scriptul `build.sh` pus la dispoziție, indicând opțional compilatorul preferat și numărul de sarcini:

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

Compilarea pe Linux produce `reapi_amxx_i386.so`.

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

### Pregătirea unei compilări proprii

O versiune publicată include, alături de binar, și fișierele antet Pawn din `reapi/extra/amxmodx/scripting/include/` — copiați-le și pe acestea dacă testați o compilare care a schimbat API-ul public. Vedeți [Instalare](./installing.md) pentru locul fiecărui fișier pe server.
