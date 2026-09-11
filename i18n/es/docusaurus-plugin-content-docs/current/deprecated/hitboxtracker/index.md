---
id: hitboxtracker
title: hitboxtracker
sidebar_position: 1
description: hitboxtracker es una herramienta de desarrollo obsoleta de ReHLDS que dibujaba en el cliente la posición de las cajas de impacto calculada por el servidor.
slug: /hitboxtracker
---

# ¿Qué es hitboxtracker?

:::warning Obsoleto

hitboxtracker está **obsoleto y sin mantenimiento**. Se documenta aquí solo como referencia: no lo instales en un servidor actual.

Para tener cajas de impacto correctas en un servidor moderno, usa [Hitbox Fixer](/es/docs/hitbox-fixer) de @Garey27, que la propia organización ReHLDS señala como la alternativa vigente. Ten en cuenta que no son equivalentes: hitboxtracker solo *mostraba* el problema, mientras que Hitbox Fixer lo *corrige*.

:::

hitboxtracker era una herramienta de desarrollo, no una función del servidor. Constaba de un plugin de Metamod en el servidor y un módulo acompañante en el cliente, y dibujaba en la pantalla del cliente la posición real de las cajas de impacto **tal como las calculaba el servidor**, junto a donde el cliente creía que estaban.

Eso hacía visible toda una categoría de problemas que de otro modo no se ven: cuando ambos conjuntos de cajas no coinciden, los disparos que parecen acertar se registran como fallos. Diagnosticar eso sin una herramienta así es ir a ciegas.

## Por qué está obsoleto

El proyecto se archivó en favor de un plugin que corrige las cajas de impacto directamente en lugar de dibujarlas. Además, el método de dibujado dependía de builds concretas del cliente y de un lanzador propio, algo que envejeció mal.

## Cómo funcionaba

El plugin del servidor enviaba al cliente los datos de las cajas calculadas a través del canal de mensajes `svc_director`; las versiones anteriores usaban delta, algo que cambió en `v1.1`. El módulo del cliente dibujaba después esas cajas mediante dos modos adicionales añadidos a la cvar estándar `r_drawentities`.

Esos modos están en [Configuración](./settings.md), y la instalación que requería, en [Instalación](./installing.md).
