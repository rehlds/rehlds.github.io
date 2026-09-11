---
id: reamxmodx
title: ReAMXModX
sidebar_position: 1
description: ReAMXModX es una bifurcación obsoleta de AMX Mod X que añadió compatibilidad con las APIs de ReHLDS y ReGameDLL antes de que la tuviera el proyecto original.
slug: /reamxmodx
---

# ¿Qué es ReAMXModX?

:::warning Obsoleto

ReAMXModX está **obsoleto**. El AMX Mod X original incorporó desde entonces su propia compatibilidad con ReHLDS, lo que dejó a esta bifurcación sin razón de ser.

Usa [AMX Mod X](https://www.amxmodx.org/) de AlliedModders. Todo lo que ofrecía esta bifurcación está hoy en el proyecto original, mantenido y con versiones publicadas.

:::

ReAMXModX era una bifurcación de AMX Mod X, tomada en agosto de 2016 del árbol de desarrollo `1.8.3` (`git5067`). Su objetivo era enseñar a AMX Mod X a trabajar con las APIs de ReHLDS y ReGameDLL en una época en la que el proyecto original no sabía nada de ellas.

## Qué cambió

Los commits de la bifurcación son concretos y de alcance limitado. En el núcleo de AMX Mod X y en varios módulos añadió el pegamento del SDK para las interfaces de ReHLDS y ReGameDLL —`mod_rehlds_api.cpp` y `mod_gamedll_api.cpp` aparecen en el núcleo y en los módulos `cstrike`, `csx`, `engine` y `fakemeta`—, y en el último commit llevó la compatibilidad hasta la API `3.x` de ReHLDS y la `5.x` de ReGameDLL.

Junto a eso incluía algunas correcciones:

- Una fuga de memoria en `unregister_forward`.
- Un error del chat relacionado con la localización.
- Correcciones de alineación de datos para las compilaciones de Linux.

## Por qué está obsoleto

AMX Mod X incorporó compatibilidad con ReHLDS, así que mantener una bifurcación solo para eso dejó de tener sentido. El trabajo aquí terminó en diciembre de 2016, y el proyecto no publicó ninguna versión: no hay binario que instalar, solo código congelado en una instantánea de AMX Mod X de hace nueve años.

Ejecutarlo hoy significaría usar un AMX Mod X de 2016 al que le falta todo lo que ha publicado el proyecto original desde entonces, a cambio de una compatibilidad con ReHLDS que este ya ofrece de todos modos.

Cómo era trabajar con él está en [Instalación](./installing.md), [Configuración](./settings.md) e [Instrucciones de compilación](./compilling.md).
