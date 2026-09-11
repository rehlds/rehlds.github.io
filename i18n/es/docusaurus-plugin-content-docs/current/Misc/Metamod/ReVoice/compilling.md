---
id: revoice-compilling
title: Instrucciones de compilación
sidebar_position: 4
description: ReVoice es un plugin de Metamod, un transcodificador de voz que corrige el chat de voz entre clientes sin Steam y con Steam en servidores ReHLDS.
slug: /revoice/compilling
---

<head>
  <title>ReVoice: Instrucciones de compilación | ReHLDS</title>
</head>

# Instrucciones de compilación

A diferencia de los demás plugins de la organización ReHLDS, ReVoice no usa un envoltorio `build.sh`, sino una configuración moderna con CMake (3.21+) y [presets de CMake](https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html).

### Requisitos previos

- CMake 3.21 o posterior
- [Ninja](https://ninja-build.org/) (lo usan los presets Ninja Multi-Config)
- Windows: Visual Studio 2022 o Clang
- Linux: GCC o Clang

Las dependencias de Speex, SILK, Opus, `rehlsdk` y el SDK de Metamod vienen incluidas en `external/`: no hay submódulos de git que inicializar.

### Clonar el repositorio

```bash
git clone https://github.com/rehlds/ReVoice.git
cd ReVoice
```

### Compilar en Linux

```bash
cmake --preset ninja-gcc-linux
cmake --build --preset ninja-gcc-linux-release
```

Cambia `gcc` por `clang` para usar Clang (`ninja-clang-linux`). Si prefieres no montar tú mismo la cadena de herramientas, el repositorio incluye además un contenedor de desarrollo listo para usar (`.devcontainer/`, Ubuntu 24.04 con GCC y Clang).

### Compilar en Windows

```powershell
cmake --preset vs2022-msvc-windows
cmake --build --preset vs2022-msvc-windows-release
```

Cambia `msvc` por `clang` para compilar con Clang (`vs2022-clang-windows`). También puedes abrir directamente la solución de Visual Studio generada tras el paso `cmake --preset`.

### Resultado de la compilación

Ambas plataformas generan `revoice_mm.dll` (Windows) o `revoice_mm_i386.so` (Linux) dentro de `bin/<compilador>-<configuración>/`. En [Instalación](./installing.md) se indica dónde va en el servidor.
