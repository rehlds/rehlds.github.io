---
id: rehlds-supported-games
title: Juegos compatibles
sidebar_position: 1
description: ReHLDS es una versión reconstruida del HLDS original que aporta mayor seguridad, rendimiento y capacidad de modding a juegos como Half-Life y Counter-Strike 1.6.
slug: /rehlds/supported-games
---

<head>
  <title>ReHLDS: Juegos compatibles | ReHLDS</title>
</head>

# Juegos compatibles

ReHLDS sustituye el **motor** HLDS en sí (`swds.dll` / `engine_i486.so`), no la GameDLL de un mod concreto. Por eso, la pregunta de «qué juegos son compatibles» se reduce en realidad a otras dos: con qué build de HLDS es compatible ReHLDS y en qué plataforma lo ejecutas. Cualquier mod de GoldSrc que funcione sobre esa build de HLDS —Half-Life, Counter-Strike 1.6, Condition Zero, Day of Defeat, Team Fortress Classic, Deathmatch Classic y mods de terceros— funcionará también sobre ReHLDS.

## Compatibilidad con las builds del motor

| Build de HLDS | Estado |
| --- | --- |
| Build de Steam anterior al aniversario (versión del motor ≤ 8684), descargada con `steamcmd` | :heavy_check_mark: Totalmente compatible |
| Builds 5xxx y anteriores descargadas con el antiguo `hldsupdatetool` | :x: No compatible |

:::warning

ReHLDS no es compatible con la antigua plataforma 5xxx o anterior instalada mediante `hldsupdatetool`. Antes de informar de un problema, comprueba que estás ejecutando la build anterior al aniversario descrita en [Instalación](./installing.md).

:::

## Plataformas compatibles

| Plataforma | Archivo del motor | Requisitos de CPU |
| --- | --- | --- |
| Windows | `swds.dll` | SSE, SSE2, SSE3 (se usan SSE4.1 / SSE4.2 cuando están disponibles) |
| Linux (32 bits) | `engine_i486.so` | SSE, SSE2, SSE3 (se usan SSE4.1 / SSE4.2 cuando están disponibles) |

ReHLDS se distribuye junto con **ReHLTV**, una versión mejorada del proxy/repetidor de Half-Life TV, de modo que las instalaciones con HLTV reciben las mismas correcciones y límites ampliados sin descargar nada aparte.

## Compatibilidad con mods y plugins

Como ReHLDS solo sustituye la capa del motor, la compatibilidad a nivel de mod (GameDLL, plugins de Metamod, plugins de AMX Mod X) depende por lo general del propio mod y del propio plugin, no de ReHLDS. Conviene tener presentes dos puntos:

- ReHLDS **no es compatible a nivel binario** con el HLDS original: se compila con compiladores distintos a los que usó Valve. Los plugins que parchean el motor a bajo nivel o escanean firmas en memoria (por ejemplo, Orpheu) pueden no funcionar correctamente y necesitan soporte explícito para ReHLDS.
- Para conocer el estado de compatibilidad actual de un mod concreto junto con [Metamod-R](/es/docs/metamod-r/supported-games) o [ReGameDLL_CS](/es/docs/regamedll-cs/supported-games), consulta la página de juegos compatibles de ese proyecto: esas capas se apoyan directamente sobre ReHLDS.
