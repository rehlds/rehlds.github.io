---
id: hitbox-fixer-compilling
title: Compilare
sidebar_position: 4
description: Hitbox Fixer - plugin Metamod terț care corectează hitbox-urile greșite ale jucătorilor de partea serverului, în Counter-Strike 1.6, Half-Life și Adrenaline Gamer.
slug: /hitbox-fixer/compilling
---

<head>
  <title>Hitbox Fixer: Compilare | ReHLDS</title>
</head>

# Instrucțiuni de compilare

Majoritatea administratorilor de server ar trebui să folosească o [versiune publicată](https://github.com/Garey27/hitbox_fixer/releases). Compilați din sursă atunci când testați o modificare nepublicată sau când aveți nevoie de o compilare personalizată.

Proiectul folosește CMake simplu — nu există un înveliș `build.sh`. Fișierele antet ale SDK-ului de care are nevoie sunt incluse în `include/`.

### Verificarea cerințelor

- CMake 3.18 sau mai nou
- Un set de unelte pe 32 de biți — pluginul este compilat pentru `i386`, așa că o gazdă pe 64 de biți are nevoie de pachetele multilib
- Linux: GCC sau Clang, plus Ninja (ceea ce folosește sistemul de integrare continuă al proiectului)
- Windows: Visual Studio cu setul de unelte pentru platforma Win32

#### Pregătirea mediului de compilare (Debian / Ubuntu)

```bash
sudo apt-get update
sudo apt-get install -y git gcc-multilib g++-multilib ninja-build cmake
```

### Clonarea depozitului

```bash
git clone https://github.com/Garey27/hitbox_fixer.git
cd hitbox_fixer
```

### Compilarea pe Linux

```bash
cmake -B build -G Ninja -DCMAKE_BUILD_TYPE=Release
cmake --build build --config Release --parallel
```

### Compilarea pe Windows

Configurați explicit pentru platforma Win32 — o configurație implicită pe 64 de biți nu produce un plugin utilizabil:

```powershell
cmake -B build -A Win32 -DCMAKE_BUILD_TYPE=Release
cmake --build build --config Release --parallel
```

### Rezultatul

Compilarea produce `hitbox_fix_mm_i386.so` pe Linux și `hitbox_fix_mm.dll` pe Windows. Vedeți [Instalare](./installing.md) pentru locul fiecăruia pe server și copiați alături `dist/hbf.cfg`.
