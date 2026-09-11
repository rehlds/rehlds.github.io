---
id: hitbox-fixer
title: Hitbox Fixer
sidebar_position: 1
description: Hitbox Fixer es un plugin de Metamod de terceros que corrige las cajas de impacto del lado del servidor en Counter-Strike 1.6, Half-Life y Adrenaline Gamer.
slug: /hitbox-fixer
---

# ¿Qué es Hitbox Fixer?

Hitbox Fixer es un plugin de Metamod de [@Garey27](https://github.com/Garey27) que corrige las cajas de impacto de los jugadores del lado del servidor en Counter-Strike 1.6, Half-Life y Adrenaline Gamer. En un servidor sin corregir, las cajas contra las que el motor comprueba los disparos pueden quedar desplazadas respecto a donde está realmente el modelo del jugador, de modo que los impactos se registran como fallos, y al revés.

:::note

Este es un proyecto de terceros. Está fuera de la organización ReHLDS y no lo mantiene: informa de los problemas en su propio [repositorio](https://github.com/Garey27/hitbox_fixer/issues).

:::

## Qué corrige

- Cajas de impacto directamente rotas cuando `numblends == 1`, lo que abarca las animaciones de agacharse y de estar de pie mientras se recarga un arma o se planta la C4.
- Retroceso temporal de las cajas de impacto según la posición del cliente, para que el servidor compruebe el disparo allí donde el tirador vio realmente al objetivo.
- Posición incorrecta de las cajas al aparecer, consecuencia del retroceso temporal corregido.

El autor señala que la compatibilidad completa de `setupbones` para entidades que no son jugadores sigue pendiente, así que las correcciones anteriores se aplican a los jugadores.

## Requisitos

Una de estas dos opciones:

- [ReHLDS](/es/docs/rehlds/install) versión `3.10` o superior (recomendado).
- HLDS original, build `8648`.

Además, Metamod (se recomienda Metamod-R) para cargar el plugin.

## Mods compatibles

Counter-Strike 1.6, Half-Life y Adrenaline Gamer. El autor acepta peticiones de compatibilidad con otros mods a través del repositorio.

Consulta [Instalación](./installing.md) para ponerlo en marcha y [Configuración](./settings.md) para la única cvar que añade.
