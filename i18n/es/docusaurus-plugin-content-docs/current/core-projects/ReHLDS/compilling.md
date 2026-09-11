---
id: rehlds-compilling
title: Instrucciones de compilación
sidebar_position: 5
description: ReHLDS es una versión reconstruida del HLDS original que aporta mayor seguridad, rendimiento y capacidad de modding a juegos como Half-Life y Counter-Strike 1.6.
slug: /rehlds/compilling
---

<head>
  <title>ReHLDS: Instrucciones de compilación | ReHLDS</title>
</head>

# Instrucciones de compilación

A la mayoría de administradores les basta con una [versión oficial](https://github.com/rehlds/ReHLDS/releases). Compilar desde el código fuente tiene sentido si estás desarrollando ReHLDS, probando un cambio aún no publicado o necesitas una compilación propia.

### Requisitos previos

Compilar ReHLDS requiere varios componentes:

**Windows**

- Visual Studio 2015 (estándar C++14) o posterior

**Linux**

- CMake 3.10 o posterior
- Uno de estos compiladores: GCC 4.9.2+, ICC 15.0.1 20141023+ o Clang (LLVM) 6.0+

### Clonar el repositorio

```bash
git clone https://github.com/rehlds/ReHLDS.git
cd ReHLDS
```

### Compilar en Windows

Abre `msvc/ReHLDS.sln` en Visual Studio, selecciona `Release Swds` (o `Debug Swds` para una compilación de depuración) entre las configuraciones de la solución y compila.

:::note

CMake no admite la compilación en Windows: `CMakeLists.txt` falla a propósito con un mensaje que te remite a `msvc/ReHLDS.sln`. CMake se usa únicamente para la compilación en Linux.

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

#### Comprobar el entorno de compilación (Debian / Ubuntu)

```bash
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install -y gcc-multilib g++-multilib
sudo apt-get install -y build-essential
sudo apt-get install -y libc6-dev libc6-dev-i386
sudo apt-get install -y cmake
```

Después elige un compilador:

```bash
sudo apt-get install -y gcc g++
# o bien
sudo apt-get install -y clang
```

### Ejecutar las pruebas unitarias

La CI del proyecto compila y ejecuta el conjunto de pruebas unitarias antes de una compilación normal, usando un tipo de compilación de CMake específico:

```bash
cmake -DCMAKE_BUILD_TYPE=Unittests -B build
cmake --build build -j8
LD_LIBRARY_PATH="rehlds/lib/linux32:$LD_LIBRARY_PATH" ./build/rehlds/engine_i486
```

Un código de salida `0` o `3` significa que las pruebas han pasado; cualquier otro código indica un fallo.

### Resultado de la compilación

Una compilación correcta en Linux genera `engine_i486.so` (además de los binarios del servidor dedicado, de HLTV y del sistema de archivos) dentro de `build/`, con la misma estructura que se sustituye durante la [instalación](./installing.md). En Windows, las DLL y los EXE generados quedan en la carpeta `msvc/<Configuración>` correspondiente.
