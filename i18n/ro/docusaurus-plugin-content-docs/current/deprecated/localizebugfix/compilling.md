---
id: localizebugfix-compilling
title: Compilare
sidebar_position: 4
description: LocalizeBug Fix - plugin Metamod arhivat, creat de s1lentq, care bloca exploit-urile cu șiruri de localizare din numele jucătorilor și din discuții, pe HLDS.
slug: /localizebugfix/compilling
---

<head>
  <title>LocalizeBug Fix: Compilare | ReHLDS</title>
</head>

# Instrucțiuni de compilare

:::warning Abandonat

Păstrate ca referință. Depozitul este arhivat pe GitHub și nu acceptă pull request-uri — citiți [Ce este LocalizeBug Fix?](./index.md).

:::

### Verificarea cerințelor

**Windows**

- Visual Studio, pentru `msvc/localizebugfix.sln`

**Linux**

- Compilatorul Intel C++ (`icpc`) — `Makefile`-ul fixează calea `/opt/intel/bin/icpc` și folosește opțiuni specifice Intel (`-static-intel`, `-no-intel-extensions`, `-ipo`). Compilarea cu GCC sau Clang presupune înlăturarea acelor opțiuni.

Fișierele antet HLSDK și Metamod sunt incluse în `sdk/`, așa că nu este nimic în plus de descărcat.

### Clonarea depozitului

```bash
git clone https://github.com/s1lentq/localizebugfix.git
cd localizebugfix
```

### Compilarea pe Windows

Deschideți `msvc/localizebugfix.sln` în Visual Studio și compilați. Rezultatul este `localizebugfix.dll`.

### Compilarea pe Linux

```bash
make
```

Rezultatul este `localizebugfix_mm_i386.so`.

:::note

Binare precompilate pentru versiunile `2.0`, `2.3` și `2.4` sunt incluse în depozit, în `bin/`, așa că rareori era nevoie de compilare, chiar și pe vremea când proiectul era activ.

:::

Vedeți [Instalare](./installing.md) pentru locul fiecărui fișier.
