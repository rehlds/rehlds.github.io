---
id: refreelook
title: "ReFreeLook"
sidebar_label: ReFreeLook
sidebar_position: 1
description: ReFreeLook es un módulo de AMX Mod X que permite a los administradores en modo espectador usar cualquier modo de cámara, sea cual sea el valor de `mp_forcecamera` o `mp_forcechasecam`. Solo funciona con la última versión de `ReGameDLL_CS`.
slug: /refreelook
keywords:
  - refreelook
  - AMX Mod X
  - amxx
  - amx
  - module
tags:
  - refreelook
  - amxx module
last_update:
  date: 07/21/2025
  author: STAM
---

# ¿Qué es ReFreeLook?

ReFreeLook es un módulo de AMX Mod X que permite a los administradores con los permisos adecuados observar la partida con libertad, al margen del valor de `mp_forcecamera` o `mp_forcechasecam` que se imponga a los espectadores normales. Es la continuación de [AdminFreeLook de Arkshine](https://github.com/Arkshine/AdminFreeLook), construida sobre [ReGameDLL_CS](/es/docs/regamedll-cs).

Los servidores suelen bloquear los modos de cámara de espectador (`mp_forcecamera`/`mp_forcechasecam`) para impedir que los jugadores espíen posiciones en beneficio de sus compañeros. ReFreeLook exime de esa restricción a los administradores que tengan un conjunto configurable de permisos, de modo que el personal conserva plena libertad de cámara para moderar mientras los espectadores normales siguen limitados.

## Requisitos

- La **última** versión de [ReGameDLL_CS](/es/docs/regamedll-cs/install): ReFreeLook engancha funciones de la GameDLL que solo existen ahí, y no funciona con un HLDS/GameDLL normales.
- AMX Mod X.

Consulta [Instalación](./installing.md) y [Configuración](./settings.md) para conocer la única cvar que decide quién obtiene la cámara libre.
