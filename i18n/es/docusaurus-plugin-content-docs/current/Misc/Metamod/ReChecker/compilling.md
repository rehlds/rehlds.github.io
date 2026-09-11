---
id: rechecker-compilling
title: "ReChecker: Instrucciones de compilación"
sidebar_label: Instrucciones de compilación
sidebar_position: 4
description: ReChecker es un plugin de Metamod que permite comprobar los archivos del cliente por su nombre y su hash md5.
slug: /rechecker/compilling
keywords:
  - rechecker
  - metamod
  - plugin
  - compilling
  - compilación
tags:
  - rechecker
  - compilling
last_update:
  date: 07/21/2025
  author: STAM
---

# Instrucciones de compilación

### Requisitos previos

**Windows**

- Visual Studio (estándar C++14) o posterior

**Linux**

- CMake 3.1 o posterior
- GCC (predeterminado) o, si lo prefieres, ICC o Clang

### Clonar el repositorio

```bash
git clone https://github.com/rehlds/ReChecker.git
cd ReChecker
```

### Compilar en Windows

Abre `msvc/rechecker.sln` en Visual Studio y compila. El resultado es `rechecker_mm.dll`.

### Compilar en Linux

Usa el script `compile.sh` incluido, que envuelve a CMake:

```bash
./compile.sh
```

Crea un directorio `build/`, configura con CMake y ejecuta `make`. Todos los argumentos adicionales se pasan a CMake, así que puedes activar con ellos las opciones de compilación del proyecto:

```bash
./compile.sh -DDEBUG=ON               # debug build
./compile.sh -DUSE_CLANG_COMPILER=ON  # build with Clang instead of GCC
./compile.sh -DUSE_INTEL_COMPILER=ON  # build with ICC
```

La compilación en Linux genera `rechecker_mm_i386.so`.

En [Instalación](./installing.md) se indica dónde va cada binario en el servidor.
