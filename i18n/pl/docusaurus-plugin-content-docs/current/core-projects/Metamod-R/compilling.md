---
id: metamod-r-compilling
title: Kompilacja
sidebar_position: 5
description: Metamod-R to zoptymalizowana wersja oryginalnego Metamoda, z lepszą wydajnością i zgodnością dla serwerów Half-Life 1.
slug: /metamod-r/compilling
---

<head>
  <title>Metamod-R: Kompilacja | ReHLDS</title>
</head>

# Instrukcja kompilacji

### Sprawdzenie wymagań
Kompilacja Metamod-r wymaga kilku rzeczy:

#### Windows
<pre>
Visual Studio 2015 (standard C++14) lub nowsze
</pre>

#### Linux
<pre>
git >= 1.8.5
cmake >= 3.10
GCC >= 4.9.2 (opcjonalnie)
ICC >= 15.0.1 20141023 (opcjonalnie)
LLVM (Clang) >= 6.0 (opcjonalnie)
</pre>

### Kompilacja

#### Windows
Użyj `Visual Studio`: otwórz `msvc/metamod.sln` i wybierz `Release` albo `Debug` z listy konfiguracji rozwiązania

#### Linux

* Dodatkowe opcje przez `build.sh --compiler=[gcc] --jobs=[N] -D[opcja]=[ON albo OFF]` (bez nawiasów kwadratowych)

<pre>
-c=|--compiler=[icc|gcc|clang]  - Wybiera preferowany kompilator C/C++
-j=|--jobs=[N]                  - Określa, ile zadań (poleceń) wykonuje się równolegle (dla szybszej kompilacji)

<sub>Definicje (-D)</sub>
DEBUG                           - Włącza tryb diagnostyczny
USE_STATIC_LIBSTDC              - Włącza statyczne dołączenie biblioteki libstdc++
</pre>

* ICC          <pre>./build.sh --compiler=intel</pre>
* LLVM (Clang) <pre>./build.sh --compiler=clang</pre>
* GCC          <pre>./build.sh --compiler=gcc</pre>

##### Przygotowanie środowiska kompilacji (Debian / Ubuntu)

<details>
<summary>Kliknij, żeby rozwinąć</summary>

<ul>
<li>
Instalacja potrzebnych pakietów
<pre>
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install -y gcc-multilib g++-multilib
sudo apt-get install -y build-essential
sudo apt-get install -y libc6-dev libc6-dev-i386
</pre>
</li>

<li>
Instalacja wybranego kompilatora C/C++
<pre>
1) sudo apt-get install -y gcc g++
2) sudo apt-get install -y clang
</pre>
</li>
</ul>

</details>
