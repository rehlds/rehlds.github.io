---
id: resemiclip-compilling
title: Instrucciones de compilación
sidebar_position: 4
description: ReSemiclip es un plugin de Metamod que controla la posibilidad de atravesar a otros jugadores. Se tomó como referencia el módulo Semiclip de `joaquimandrade`.
slug: /resemiclip/compilling
---

<head>
  <title>ReSemiclip: Instrucciones de compilación | ReHLDS</title>
</head>

# Instrucciones de compilación

### Requisitos previos

**Windows**

- Visual Studio (estándar C++14) o posterior

**Linux**

- CMake 3.1 o posterior
- Uno de estos: GCC (predeterminado), ICC o Clang

### Clonar el repositorio

```bash
git clone https://github.com/rehlds/ReSemiclip.git
cd ReSemiclip
```

### Compilar en Windows

Abre `msvc/resemiclip.sln` en Visual Studio y compila. El resultado es `resemiclip_mm.dll`.

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
| `DEBUG` | Activa una compilación de depuración. |
| `USE_STATIC_LIBSTDC` | Enlaza `libstdc++` de forma estática. |

La compilación en Linux genera `resemiclip_mm_i386.so`.

En [Instalación](./installing.md) se indica dónde va cada binario en el servidor; si estás probando un cambio en el formato de configuración, copia junto a él también `dist/config.ini` y `dist/maps/`.
