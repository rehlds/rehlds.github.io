---
id: reapi-compilling
title: Instrucciones de compilación
sidebar_position: 4
description: ReAPI es un módulo de AMXModX que ofrece APIs de ReHLDS, ReGameDLL y de plugins de Metamod (por ejemplo, ReUnion o ReVoice).
slug: /reapi/compilling
---

<head>
  <title>ReAPI: Instrucciones de compilación | ReHLDS</title>
</head>

# Instrucciones de compilación

A la mayoría de usuarios les basta con una [versión oficial](https://github.com/rehlds/ReAPI/releases). Compilar desde el código fuente tiene sentido si estás desarrollando el propio ReAPI, probando un cambio aún no publicado o necesitas una compilación propia.

### Requisitos previos

Compilar ReAPI requiere varios componentes:

**Windows**

- Visual Studio 2015 (estándar C++14) o posterior

**Linux**

- Git 1.8.5 o posterior
- CMake 3.10 o posterior
- Uno de estos compiladores: GCC 4.9.2+, ICC 15.0.1 20141023+ o Clang (LLVM) 6.0+

### Clonar el repositorio

```bash
git clone https://github.com/rehlds/ReAPI.git
cd ReAPI
```

### Compilar en Windows

Abre `msvc/reapi.sln` en Visual Studio, selecciona `Release` (o `Debug`) entre las configuraciones de la solución y compila. El resultado es `reapi_amxx.dll`.

:::note

CMake no admite la compilación en Windows: `CMakeLists.txt` falla a propósito con un mensaje que te remite a `msvc/reapi.sln`. CMake se usa únicamente para la compilación en Linux.

:::

### Compilar en Linux

Usa el script `build.sh` incluido, indicando si quieres el compilador y el número de tareas en paralelo:

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

La compilación en Linux genera `reapi_amxx_i386.so`.

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

### Preparar una compilación propia

Una versión incluye además las cabeceras de Pawn de `reapi/extra/amxmodx/scripting/include/` junto al binario; cópialas también si estás probando una compilación que haya cambiado la API pública. En [Instalación](./installing.md) se indica dónde va cada archivo en el servidor.
