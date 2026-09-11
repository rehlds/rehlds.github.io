---
id: refreelook-compilling
title: "ReFreeLook: Instrucciones de compilación"
sidebar_label: Instrucciones de compilación
sidebar_position: 4
description: ReFreeLook es un módulo de AMX Mod X que permite a los administradores en modo espectador usar cualquier modo de cámara, sea cual sea el valor de `mp_forcecamera` o `mp_forcechasecam`. Solo funciona con la última versión de `ReGameDLL_CS`.
slug: /refreelook/compilling
keywords:
  - refreelook
  - AMX Mod X
  - amxx
  - amx
  - module
  - compilling
  - compilación
tags:
  - refreelook
  - compilling
  - compilación
last_update:
  date: 07/21/2025
  author: STAM
---

# Instrucciones de compilación

A diferencia de los demás plugins de la organización ReHLDS, ReFreeLook se compila con un `Makefile` normal en Linux (sin CMake) y con una solución de Visual Studio en Windows. Las cabeceras de Metamod y del CSSDK que necesita vienen incluidas en `include/`: no hay nada más que descargar.

### Requisitos previos

**Windows**

- Visual Studio (estándar C++11) o posterior

**Linux**

- El compilador Intel C++ (`icpc`), o bien Clang/GCC ajustando la variable `COMPILER` del Makefile

### Clonar el repositorio

```bash
git clone https://github.com/rehlds/ReFreeLook.git
cd ReFreeLook
```

### Compilar en Windows

Abre `msvc/refreelook.sln` en Visual Studio y compila. El resultado es `refreelook_amxx.dll`.

### Compilar en Linux

El `Makefile` usa por defecto el compilador de Intel (`/opt/intel/bin/icpc`). Si no tienes ICC instalado, sobrescribe `COMPILER` en la línea de comandos:

```bash
make COMPILER=clang
```

GCC también sirve con una pequeña edición del Makefile si tampoco tienes Clang: las opciones del Makefile están escritas expresamente para ICC y Clang. La compilación genera `refreelook_amxx_i386.so` dentro de `Release/`.

```bash
make clean   # elimina los archivos generados
```

En [Instalación](./installing.md) se indica dónde va el binario en el servidor.
