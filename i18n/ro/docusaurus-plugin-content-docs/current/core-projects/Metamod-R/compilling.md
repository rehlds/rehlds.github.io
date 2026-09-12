---
id: metamod-r-compilling
title: Compilare
sidebar_position: 5
description: Metamod-R este o versiune optimizată a Metamod original, cu performanță sporită și compatibilitate mai bună pentru serverele de Half-Life 1.
slug: /metamod-r/compilling
---

<head>
  <title>Metamod-R: Compilare | ReHLDS</title>
</head>

# Instrucțiuni de compilare

### Verificarea cerințelor
Compilarea Metamod-r presupune câteva cerințe software:

#### Windows
<pre>
Visual Studio 2015 (standardul C++14) sau mai nou
</pre>

#### Linux
<pre>
git >= 1.8.5
cmake >= 3.10
GCC >= 4.9.2 (opțional)
ICC >= 15.0.1 20141023 (opțional)
LLVM (Clang) >= 6.0 (opțional)
</pre>

### Compilarea

#### Windows
Folosiți `Visual Studio`: deschideți `msvc/metamod.sln` și alegeți `Release` sau `Debug` din lista configurațiilor soluției

#### Linux

* Opțiuni suplimentare cu `build.sh --compiler=[gcc] --jobs=[N] -D[opțiune]=[ON sau OFF]` (fără paranteze drepte)

<pre>
-c=|--compiler=[icc|gcc|clang]  - Alege compilatorul C/C++ preferat pentru compilare
-j=|--jobs=[N]                  - Stabilește câte sarcini (comenzi) rulează simultan (pentru o compilare mai rapidă)

<sub>Definiții (-D)</sub>
DEBUG                           - Activează modul de depanare
USE_STATIC_LIBSTDC              - Activează legarea statică a bibliotecii libstdc++
</pre>

* ICC          <pre>./build.sh --compiler=intel</pre>
* LLVM (Clang) <pre>./build.sh --compiler=clang</pre>
* GCC          <pre>./build.sh --compiler=gcc</pre>

##### Pregătirea mediului de compilare (Debian / Ubuntu)

<details>
<summary>Faceți clic pentru a extinde</summary>

<ul>
<li>
Instalarea pachetelor necesare
<pre>
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install -y gcc-multilib g++-multilib
sudo apt-get install -y build-essential
sudo apt-get install -y libc6-dev libc6-dev-i386
</pre>
</li>

<li>
Instalarea compilatorului C/C++ preferat
<pre>
1) sudo apt-get install -y gcc g++
2) sudo apt-get install -y clang
</pre>
</li>
</ul>

</details>
