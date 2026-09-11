---
id: relocalizebugfix-compilling
title: Instrucciones de compilación
sidebar_position: 4
description: ReLocalizeBug Fix es un plugin de Metamod obsoleto que bloqueaba los exploits de cadenas de localización en nombres de jugador y chat en servidores ReHLDS.
slug: /relocalizebugfix/compilling
---

<head>
  <title>ReLocalizeBug Fix: Instrucciones de compilación | ReHLDS</title>
</head>

# Instrucciones de compilación

:::warning Obsoleto

Se conserva como referencia. El plugin ya no se mantiene y es incompatible con las versiones modernas de ReHLDS: consulta [¿Qué es ReLocalizeBug Fix?](./index.md).

:::

### Requisitos previos

**Windows**

- Visual Studio, para `msvc/relocalizebugfix.sln`

**Linux**

- El compilador Intel C++ (`icpc`): el `Makefile` fija la ruta `/opt/intel/bin/icpc` y usa opciones propias de Intel (`-static-intel`, `-no-intel-extensions`, `-ipo`, `-fasm-blocks`). Compilar con GCC o Clang exige eliminarlas.

Las cabeceras del CSSDK y de Metamod vienen incluidas en `cssdk/` y `metamod/`, así que no hay nada más que descargar. Este proyecto es anterior a la combinación de CMake y `build.sh` que usan los proyectos mantenidos de la organización.

### Clonar el repositorio

```bash
git clone https://github.com/rehlds/relocalizebugfix.git
cd relocalizebugfix
```

### Compilar en Windows

Abre `msvc/relocalizebugfix.sln` en Visual Studio y compila. El resultado es `relocalizebugfix_mm.dll`.

### Compilar en Linux

```bash
make
```

El resultado aparece en `Release/` como `relocalizebugfix_mm_i386.so`.

:::note

Los binarios ya compilados están en el propio repositorio, dentro de `bin/`, así que rara vez hacía falta compilar, incluso cuando el proyecto estaba activo.

:::

Dónde iba cada archivo está en [Instalación](./installing.md).
