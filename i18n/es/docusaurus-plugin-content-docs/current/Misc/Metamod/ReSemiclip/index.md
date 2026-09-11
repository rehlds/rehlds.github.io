---
id: resemiclip
title: ReSemiclip
sidebar_position: 1
description: ReSemiclip es un plugin de Metamod que controla la posibilidad de atravesar a otros jugadores. Se tomó como referencia el módulo Semiclip de `joaquimandrade`.
slug: /resemiclip
---

# ¿Qué es ReSemiclip?

ReSemiclip es un plugin de [Metamod](https://github.com/rehlds/Metamod-R) para servidores de Counter-Strike que permite a los jugadores atravesarse entre sí bajo condiciones configurables, en lugar de bloquearse mutuamente el paso. Es una versión mantenida del clásico concepto «Semiclip», que toma como referencia el [módulo Semiclip de joaquimandrade](https://github.com/joaquimandrade).

## Qué controla

- **A quién se aplica**: a todo el mundo, solo a los terroristas, solo a los antiterroristas o solo a los compañeros de equipo.
- **Cuándo se aplica**: durante un intervalo fijo desde el inicio de la ronda (útil justo tras aparecer, cuando los jugadores tienden a quedarse atascados unos con otros) o de forma permanente.
- **Agacharse**: permite saltar sobre un compañero agachado en lugar de quedarse bloqueado.
- **Aviso visual**: transparencia opcional para los jugadores lo bastante cerca como para atravesarse, de modo que el efecto se vea en lugar de sorprender.
- **Comportamiento de las balas**: opcionalmente, permite que los disparos atraviesen a los compañeros sobre los que está actuando el semiclip.

Todo ello se configura de forma global y también por mapa o por prefijo de mapa. El formato completo de `config.ini` está en [Configuración](./settings.md).

## Requisitos

ReSemiclip engancha funciones tanto a nivel de motor ([ReHLDS](/es/docs/rehlds/install)) como a nivel de GameDLL ([ReGameDLL_CS](/es/docs/regamedll-cs/install)), así que ambos son necesarios por debajo de Metamod. Consulta [Instalación](./installing.md).
