---
id: metamod-r-compilling
title: Instrucciones de compilación
sidebar_position: 5
description: Metamod-R es una versión optimizada del Metamod original que mejora el rendimiento y la compatibilidad en servidores de Half-Life 1.
slug: /metamod-r/compilling
---

<head>
  <title>Metamod-R: Instrucciones de compilación | ReHLDS</title>
</head>

# Instrucciones de compilación

### Requisitos previos
Compilar Metamod-r requiere varios componentes:

#### Windows
<pre>
Visual Studio 2015 (estándar C++14) y posteriores
</pre>

#### Linux
<pre>
git >= 1.8.5
cmake >= 3.10
GCC >= 4.9.2 (opcional)
ICC >= 15.0.1 20141023 (opcional)
LLVM (Clang) >= 6.0 (opcional)
</pre>

### Compilación

#### Windows
Usa `Visual Studio`: abre `msvc/metamod.sln` y selecciona `Release` o `Debug` en la lista de configuraciones de la solución

#### Linux

* Opciones adicionales mediante `build.sh --compiler=[gcc] --jobs=[N] -D[option]=[ON or OFF]` (sin corchetes)

<pre>
-c=|--compiler=[icc|gcc|clang]  - Selecciona el compilador de C/C++ que prefieras para compilar
-j=|--jobs=[N]                  - Indica el número de tareas (comandos) que se ejecutan a la vez (para compilar más rápido)

<sub>Definiciones (-D)</sub>
DEBUG                           - Activa el modo de depuración
USE_STATIC_LIBSTDC              - Enlaza de forma estática la biblioteca libstdc++
</pre>

* ICC          <pre>./build.sh --compiler=intel</pre>
* LLVM (Clang) <pre>./build.sh --compiler=clang</pre>
* GCC          <pre>./build.sh --compiler=gcc</pre>

##### Comprobar el entorno de compilación (Debian / Ubuntu)

<details>
<summary>Haz clic para desplegar</summary>

<ul>
<li>
Instalar los paquetes necesarios
<pre>
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install -y gcc-multilib g++-multilib
sudo apt-get install -y build-essential
sudo apt-get install -y libc6-dev libc6-dev-i386
</pre>
</li>

<li>
Elegir e instalar el compilador de C/C++ que prefieras
<pre>
1) sudo apt-get install -y gcc g++
2) sudo apt-get install -y clang
</pre>
</li>
</ul>

</details>
