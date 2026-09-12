---
id: regamedll-cs-compilling
title: Compilarea din sursă
sidebar_position: 7
description: Compilați ReGameDLL_CS din codul sursă, pe Windows sau pe Linux.
slug: /regamedll-cs/compilling
---

# Compilarea din sursă

Majoritatea administratorilor de server ar trebui să folosească o versiune oficială. Compilați din sursă atunci când dezvoltați ReGameDLL_CS, când testați o modificare nepublicată sau când aveți nevoie de o configurație de compilare proprie.

## Cerințe

- Git 1.8.5 sau mai nou
- CMake 3.10 sau mai nou
- Windows: Visual Studio 2015 sau mai nou
- Linux: GCC 4.9.2 sau mai nou ori Clang 6 sau mai nou
- Un set de unelte capabil să genereze binare pe 32 de biți și bibliotecile de dezvoltare pe 32 de biți corespunzătoare

Consultați fișierul README și configurația de integrare continuă din depozit dacă o ramură mai nouă ridică aceste versiuni minime.

## Clonarea depozitului

```bash
git clone --recursive https://github.com/rehlds/ReGameDLL_CS.git
cd ReGameDLL_CS
```

Dacă ați clonat fără `--recursive`, inițializați submodulele înainte de compilare:

```bash
git submodule update --init --recursive
```

## Windows

Deschideți `msvc/ReGameDLL.sln` în Visual Studio, alegeți configurația dorită și compilați soluția. Folosiți `mp.dll` rezultat ca GameDLL al serverului.

## Linux

Depozitul pune la dispoziție `build.sh` ca punct oficial de pornire a compilării:

```bash
./build.sh --compiler=gcc --jobs=4
```

Ca să compilați cu Clang:

```bash
./build.sh --compiler=clang --jobs=4
```

Printre opțiunile de mediu documentate de proiect se numără:

```bash
DEBUG=1 ./build.sh --compiler=gcc --jobs=4
USE_STATIC_LIBSTDC=1 ./build.sh --compiler=gcc --jobs=4
```

`DEBUG=1` produce o compilare de depanare. `USE_STATIC_LIBSTDC=1` leagă static biblioteca standard C++, acolo unde acest lucru este susținut.

## Pregătirea unei compilări proprii

Copiați GameDLL-ul rezultat mai întâi pe un server de test:

- Windows: `cstrike/dlls/mp.dll` sau `czero/dlls/mp.dll`
- Linux: `cstrike/dlls/cs.so` sau `czero/dlls/cs.so`

Păstrați o copie a binarului anterior și testați fără pluginuri terțe înainte de a-l pune în producție. Instantaneele codului sursă pot conține modificări care nu au trecut încă printr-un ciclu de lansare stabilă.
