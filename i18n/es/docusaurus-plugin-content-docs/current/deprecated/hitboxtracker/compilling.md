---
id: hitboxtracker-compilling
title: Instrucciones de compilación
sidebar_position: 4
description: hitboxtracker es una herramienta de desarrollo obsoleta de ReHLDS que dibujaba en el cliente la posición de las cajas de impacto calculada por el servidor.
slug: /hitboxtracker/compilling
---

<head>
  <title>hitboxtracker: Instrucciones de compilación | ReHLDS</title>
</head>

# Instrucciones de compilación

:::warning Obsoleto

Se conserva como referencia. hitboxtracker ya no se mantiene: consulta [¿Qué es hitboxtracker?](./index.md).

:::

### Requisitos previos

- Visual Studio, con soporte para los tres objetivos de C++ del proyecto.

Las cabeceras del HLSDK y de Metamod vienen incluidas en `dep/`, así que no hay nada más que descargar.

### Clonar el repositorio

```bash
git clone https://github.com/rehlds/hitboxtracker.git
cd hitboxtracker
```

### Compilación

Abre `msvc/hitboxtracker.sln` en Visual Studio y compila. La solución contiene tres proyectos, uno por cada pieza que necesitaba la herramienta:

| Proyecto | Genera | Se ejecuta en |
| --- | --- | --- |
| `server` | `hitboxtracker_mm.dll` | El servidor, como plugin de Metamod. |
| `client` | `hitboxtracker.dll` | El cliente del juego, como módulo de dibujado. |
| `launcher` | `cs.exe` | El cliente del juego, para cargar el módulo. |

:::note

El repositorio solo incluye la solución de Visual Studio: aquí no hay configuración de CMake ni `build.sh`, a diferencia de los demás proyectos de la organización. Aun así, la versión publicada incluye un binario de servidor para Linux (`hitboxtracker_mm_i386.so`), generado fuera de esta solución.

:::

Dónde iba cada resultado está en [Instalación](./installing.md).
