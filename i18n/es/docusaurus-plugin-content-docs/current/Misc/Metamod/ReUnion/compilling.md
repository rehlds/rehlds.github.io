---
id: reunion-compilling
title: Instrucciones de compilación
sidebar_position: 4
description: ReUnion es un plugin de Metamod que permite a los clientes sin Steam con los protocolos 47 y 48 conectarse a servidores ReHLDS.
slug: /reunion/compilling
---

<head>
  <title>ReUnion: Instrucciones de compilación | ReHLDS</title>
</head>

# Instrucciones de compilación

### Requisitos previos

**Windows**

- Visual Studio 2015 (estándar C++14) o posterior

**Linux**

- CMake 3.10 o posterior
- Uno de estos compiladores: GCC 4.9.2+, ICC 15.0.1 20141023+ o Clang (LLVM) 6.0+

### Clonar el repositorio

```bash
git clone https://github.com/rehlds/ReUnion.git
cd ReUnion
```

### Compilar en Windows

Abre `msvc/Reunion.sln` en Visual Studio, selecciona `Release` (o `Debug`) y compila. El resultado es `reunion_mm.dll`.

:::note

CMake no admite la compilación en Windows: `CMakeLists.txt` falla a propósito con un mensaje que te remite a `msvc/Reunion.sln`. CMake se usa únicamente para la compilación en Linux.

:::

### Compilar en Linux

Usa el script `build.sh` incluido:

```bash
./build.sh --compiler=[gcc|icc|clang] --jobs=[N]
```

Por ejemplo:

```bash
./build.sh --compiler=gcc --jobs=4    # GCC
./build.sh --compiler=intel           # ICC
./build.sh --compiler=clang           # Clang / LLVM
```

También puedes pasar definiciones de CMake a través de `build.sh` con `-D<opción>=[ON|OFF]`:

| Definición | Efecto |
| --- | --- |
| `DEBUG` | Activa el modo de depuración. |
| `USE_STATIC_LIBSTDC` | Enlaza `libstdc++` de forma estática. |

#### Comprobar el entorno de compilación (Debian / Ubuntu)

```bash
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install -y gcc-multilib g++-multilib
sudo apt-get install -y build-essential
sudo apt-get install -y libc6-dev libc6-dev-i386
```

Después elige un compilador:

```bash
sudo apt-get install -y gcc g++
# o bien
sudo apt-get install -y clang
```

La compilación en Linux genera `reunion_mm_i386.so`. En [Instalación](./installing.md) se indica dónde van los binarios y el `reunion.cfg` en el servidor.
