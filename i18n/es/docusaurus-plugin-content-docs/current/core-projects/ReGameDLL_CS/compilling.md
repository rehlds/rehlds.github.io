---
id: regamedll-cs-compilling
title: Compilar desde el código fuente
sidebar_position: 7
description: Compila ReGameDLL_CS desde el código fuente en Windows o Linux.
slug: /regamedll-cs/compilling
---

# Compilar desde el código fuente

A la mayoría de administradores les basta con una versión oficial. Compilar desde el código fuente tiene sentido si estás desarrollando ReGameDLL_CS, probando un cambio aún no publicado o necesitas una configuración de compilación propia.

## Requisitos

- Git 1.8.5 o posterior
- CMake 3.10 o posterior
- Windows: Visual Studio 2015 o posterior
- Linux: GCC 4.9.2 o posterior, o Clang 6 o posterior
- Un conjunto de herramientas capaz de generar binarios de 32 bits, junto con las bibliotecas de desarrollo de 32 bits correspondientes

Consulta el README y la configuración de CI del repositorio por si una rama más reciente eleva estas versiones mínimas.

## Clonar el repositorio

```bash
git clone --recursive https://github.com/rehlds/ReGameDLL_CS.git
cd ReGameDLL_CS
```

Si clonaste sin `--recursive`, inicializa los submódulos antes de compilar:

```bash
git submodule update --init --recursive
```

## Windows

Abre `msvc/ReGameDLL.sln` en Visual Studio, elige la configuración que quieras y compila la solución. Usa el `mp.dll` generado como GameDLL del servidor.

## Linux

El repositorio proporciona `build.sh` como punto de entrada admitido para la compilación:

```bash
./build.sh --compiler=gcc --jobs=4
```

Para compilar con Clang en su lugar:

```bash
./build.sh --compiler=clang --jobs=4
```

Entre las opciones de entorno documentadas por el proyecto están:

```bash
DEBUG=1 ./build.sh --compiler=gcc --jobs=4
USE_STATIC_LIBSTDC=1 ./build.sh --compiler=gcc --jobs=4
```

`DEBUG=1` genera una compilación de depuración. `USE_STATIC_LIBSTDC=1` enlaza de forma estática la biblioteca estándar de C++ donde sea posible.

## Probar una compilación propia

Copia primero la GameDLL resultante a un servidor de pruebas:

- Windows: `cstrike/dlls/mp.dll` o `czero/dlls/mp.dll`
- Linux: `cstrike/dlls/cs.so` o `czero/dlls/cs.so`

Conserva una copia del binario anterior y prueba sin plugins de terceros antes de desplegar en producción. Las instantáneas del código fuente pueden contener cambios que todavía no han pasado por un ciclo de versión estable.
