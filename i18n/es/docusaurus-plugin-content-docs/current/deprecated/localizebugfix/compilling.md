---
id: localizebugfix-compilling
title: Instrucciones de compilación
sidebar_position: 4
description: LocalizeBug Fix es un plugin de Metamod archivado, obra de s1lentq, que bloqueaba los exploits de cadenas de localización en nombres de jugador y chat en HLDS.
slug: /localizebugfix/compilling
---

<head>
  <title>LocalizeBug Fix: Instrucciones de compilación | ReHLDS</title>
</head>

# Instrucciones de compilación

:::warning Obsoleto

Se conserva como referencia. El repositorio está archivado en GitHub y no admite pull requests: consulta [¿Qué es LocalizeBug Fix?](./index.md).

:::

### Requisitos previos

**Windows**

- Visual Studio, para `msvc/localizebugfix.sln`

**Linux**

- El compilador Intel C++ (`icpc`): el `Makefile` fija la ruta `/opt/intel/bin/icpc` y usa opciones propias de Intel (`-static-intel`, `-no-intel-extensions`, `-ipo`). Compilar con GCC o Clang exige eliminarlas.

Las cabeceras del HLSDK y de Metamod vienen incluidas en `sdk/`, así que no hay nada más que descargar.

### Clonar el repositorio

```bash
git clone https://github.com/s1lentq/localizebugfix.git
cd localizebugfix
```

### Compilar en Windows

Abre `msvc/localizebugfix.sln` en Visual Studio y compila. El resultado es `localizebugfix.dll`.

### Compilar en Linux

```bash
make
```

El resultado es `localizebugfix_mm_i386.so`.

:::note

Los binarios ya compilados de las versiones `2.0`, `2.3` y `2.4` están en el propio repositorio, dentro de `bin/`, así que rara vez hacía falta compilar, incluso cuando el proyecto estaba activo.

:::

Dónde iba cada archivo está en [Instalación](./installing.md).
