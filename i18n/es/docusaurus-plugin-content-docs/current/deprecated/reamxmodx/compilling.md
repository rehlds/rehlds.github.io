---
id: reamxmodx-compilling
title: Instrucciones de compilación
sidebar_position: 4
description: ReAMXModX es una bifurcación obsoleta de AMX Mod X que añadió compatibilidad con las APIs de ReHLDS y ReGameDLL antes de que la tuviera el proyecto original.
slug: /reamxmodx/compilling
---

<head>
  <title>ReAMXModX: Instrucciones de compilación | ReHLDS</title>
</head>

# Instrucciones de compilación

:::warning Obsoleto

Se conserva como referencia. La bifurcación está congelada en una instantánea de AMX Mod X de 2016 y no publica versiones: compilarla es la única forma de obtener binarios, y no hay buenas razones para hacerlo. Consulta [¿Qué es ReAMXModX?](./index.md).

:::

ReAMXModX hereda sin cambios el sistema de compilación de AMX Mod X; no añade herramientas propias.

### Clonar el repositorio

```bash
git clone https://github.com/rehlds/reamxmodx.git
cd reamxmodx
```

### Compilar en Windows

La bifurcación incluye soluciones de Visual Studio 2012, una por componente, que es contra lo que realmente se mantuvieron sus commits:

| Solución | Componente |
| --- | --- |
| `amxmodx/msvc12/amxmodx_mm.sln` | El núcleo de AMX Mod X (plugin de Metamod). |
| `modules/<nombre>/msvc12/<nombre>.sln` | Cada módulo: `cstrike`, `csx`, `engine`, `fakemeta`, `nvault`, `sockets` y los demás. |
| `compiler/amxxpc/amxxpc.sln`, `compiler/libpc300/libpc300.sln` | El compilador de Pawn. |
| `installer/installtool/installtool.sln` | La herramienta de instalación. |

Cada una se compila por separado: no hay una única solución que abarque todo el proyecto.

### Compilar en Linux

El árbol incluye scripts `AMBuilder` para [AMBuild](https://github.com/alliedmodders/ambuild), el sistema de compilación de AlliedModders, en `amxmodx/` y `plugins/`.

:::note

Esta instantánea no tiene ni `configure.py` ni `AMBuildScript` en la raíz del repositorio, que es desde donde AMBuild suele dirigir la compilación. Conseguir una compilación funcional en Linux implica, por tanto, aportar tú mismo ese andamiaje desde la revisión correspondiente del AMX Mod X original (`1.8.3`, `git5067`). Esa es buena parte del motivo por el que hoy resulta poco práctico compilar la bifurcación.

:::

### Resultado de la compilación

Una compilación completa genera `amxmodx_mm_i386.so` / `amxmodx_mm.dll` para el núcleo, más un binario por módulo, con exactamente la estructura que espera el AMX Mod X original bajo `addons/amxmodx/`.

Si lo que quieres es un AMX Mod X funcionando sobre ReHLDS, coge una [versión actual del proyecto original](https://www.amxmodx.org/downloads-new.php) en lugar de compilar esto.
