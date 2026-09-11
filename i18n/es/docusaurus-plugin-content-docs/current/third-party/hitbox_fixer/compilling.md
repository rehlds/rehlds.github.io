---
id: hitbox-fixer-compilling
title: Instrucciones de compilación
sidebar_position: 4
description: Hitbox Fixer es un plugin de Metamod de terceros que corrige las cajas de impacto del lado del servidor en Counter-Strike 1.6, Half-Life y Adrenaline Gamer.
slug: /hitbox-fixer/compilling
---

<head>
  <title>Hitbox Fixer: Instrucciones de compilación | ReHLDS</title>
</head>

# Instrucciones de compilación

A la mayoría de administradores les basta con una [versión ya compilada](https://github.com/Garey27/hitbox_fixer/releases). Compila desde el código fuente si estás probando un cambio aún no publicado o necesitas una compilación propia.

El proyecto usa CMake a secas: no hay un envoltorio `build.sh`. Las cabeceras del SDK que necesita vienen incluidas en `include/`.

### Requisitos previos

- CMake 3.18 o posterior
- Una cadena de herramientas de 32 bits: el plugin se compila para `i386`, así que en un sistema de 64 bits hacen falta los paquetes multilib
- Linux: GCC o Clang, más Ninja (lo que usa la CI del proyecto)
- Windows: Visual Studio con el conjunto de herramientas para la plataforma Win32

#### Comprobar el entorno de compilación (Debian / Ubuntu)

```bash
sudo apt-get update
sudo apt-get install -y git gcc-multilib g++-multilib ninja-build cmake
```

### Clonar el repositorio

```bash
git clone https://github.com/Garey27/hitbox_fixer.git
cd hitbox_fixer
```

### Compilar en Linux

```bash
cmake -B build -G Ninja -DCMAKE_BUILD_TYPE=Release
cmake --build build --config Release --parallel
```

### Compilar en Windows

Indica explícitamente la plataforma Win32: una configuración predeterminada de 64 bits no produce un plugin utilizable:

```powershell
cmake -B build -A Win32 -DCMAKE_BUILD_TYPE=Release
cmake --build build --config Release --parallel
```

### Resultado de la compilación

La compilación genera `hitbox_fix_mm_i386.so` en Linux y `hitbox_fix_mm.dll` en Windows. En [Instalación](./installing.md) se indica dónde va cada uno en el servidor; copia junto a ellos el `dist/hbf.cfg`.
