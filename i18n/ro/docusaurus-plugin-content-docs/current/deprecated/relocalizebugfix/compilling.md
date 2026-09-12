---
id: relocalizebugfix-compilling
title: Compilare
sidebar_position: 4
description: ReLocalizeBug Fix - plugin Metamod abandonat, care bloca exploit-urile cu șiruri de localizare din numele jucătorilor și din discuții, pe serverele ReHLDS.
slug: /relocalizebugfix/compilling
---

<head>
  <title>ReLocalizeBug Fix: Compilare | ReHLDS</title>
</head>

# Instrucțiuni de compilare

:::warning Abandonat

Păstrate ca referință. Pluginul nu mai este întreținut și este incompatibil cu versiunile moderne de ReHLDS — citiți [Ce este ReLocalizeBug Fix?](./index.md).

:::

### Verificarea cerințelor

**Windows**

- Visual Studio, pentru `msvc/relocalizebugfix.sln`

**Linux**

- Compilatorul Intel C++ (`icpc`) — `Makefile`-ul fixează calea `/opt/intel/bin/icpc` și folosește opțiuni specifice Intel (`-static-intel`, `-no-intel-extensions`, `-ipo`, `-fasm-blocks`). Compilarea cu GCC sau Clang presupune înlăturarea lor.

Fișierele antet CSSDK și Metamod sunt incluse în `cssdk/` și în `metamod/`, așa că nu este nimic în plus de descărcat. Acest proiect este anterior configurației cu CMake și `build.sh` folosite în proiectele întreținute ale organizației.

### Clonarea depozitului

```bash
git clone https://github.com/rehlds/relocalizebugfix.git
cd relocalizebugfix
```

### Compilarea pe Windows

Deschideți `msvc/relocalizebugfix.sln` în Visual Studio și compilați. Rezultatul este `relocalizebugfix_mm.dll`.

### Compilarea pe Linux

```bash
make
```

Rezultatul ajunge în `Release/`, sub numele `relocalizebugfix_mm_i386.so`.

:::note

Binare precompilate sunt incluse în depozit, în `bin/`, așa că rareori era nevoie de compilare, chiar și pe vremea când proiectul era activ.

:::

Vedeți [Instalare](./installing.md) pentru locul fiecărui fișier.
