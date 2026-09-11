---
id: reamxmodx-settings
title: Configuración
sidebar_position: 3
description: ReAMXModX es una bifurcación obsoleta de AMX Mod X que añadió compatibilidad con las APIs de ReHLDS y ReGameDLL antes de que la tuviera el proyecto original.
slug: /reamxmodx/settings
---

<head>
  <title>ReAMXModX: Configuración | ReHLDS</title>
</head>

# Configuración

:::warning Obsoleto

Se conserva como referencia. Usa [AMX Mod X](https://www.amxmodx.org/) de AlliedModders: consulta [¿Qué es ReAMXModX?](./index.md).

:::

ReAMXModX **no introdujo configuración propia**. Sus cambios eran pegamento interno del SDK para las APIs de ReHLDS y ReGameDLL, no funciones de cara al usuario, así que toda la superficie de configuración es la del AMX Mod X original.

La bifurcación incluye el conjunto estándar de configuraciones de AMX Mod X en `configs/`:

| Archivo | Para qué sirve |
| --- | --- |
| `amxx.cfg` | Configuración principal de AMX Mod X y sus cvars. |
| `core.ini` | Ajustes del módulo del núcleo. |
| `configs.ini` | Selección de configuración según el mod. |
| `modules.ini` | Qué módulos cargar al arrancar. |
| `plugins.ini` | Qué plugins cargar al arrancar. |
| `users.ini` | Cuentas de administrador y permisos. |
| `cmds.ini`, `clcmds.ini` | Definiciones de comandos de servidor y de cliente. |
| `cvars.ini` | Definiciones de cvars usadas por los menús. |
| `maps.ini` | Lista de mapas para los menús de mapa. |
| `hamdata.ini` | Desplazamientos de funciones para Ham Sandwich. |
| `custommenuitems.cfg`, `miscstats.ini` | Elementos de menú y presentación de estadísticas. |

Todos se comportan exactamente como documenta AlliedModders: la bifurcación no cambió ni sus formatos ni sus valores predeterminados.

:::note

Como la configuración es idéntica, un servidor que pase de esta bifurcación al AMX Mod X original actual puede conservar su directorio `configs/` tal cual. Merece la pena revisar a mano una excepción: `hamdata.ini` guarda desplazamientos de funciones, y esos dependen de la versión de AMX Mod X y de la GameDLL que ejecutes, así que toma la copia de la versión actual en lugar de arrastrar la de 2016.

:::

La referencia autorizada es la [documentación de AMX Mod X](https://wiki.alliedmods.net/Category:AMX_Mod_X) y la [referencia de comandos de AMX Mod X](https://wiki.alliedmods.net/Commands_(AMX_Mod_X)).
