---
id: hitboxtracker-settings
title: Configuración
sidebar_position: 3
description: hitboxtracker es una herramienta de desarrollo obsoleta de ReHLDS que dibujaba en el cliente la posición de las cajas de impacto calculada por el servidor.
slug: /hitboxtracker/settings
---

<head>
  <title>hitboxtracker: Configuración | ReHLDS</title>
</head>

# Configuración

:::warning Obsoleto

Se conserva como referencia. hitboxtracker ya no se mantiene: consulta [¿Qué es hitboxtracker?](./index.md).

:::

hitboxtracker no añadía cvars propias. Ampliaba la cvar estándar del cliente `r_drawentities` con dos modos adicionales, así que todo se manejaba desde la consola del cliente.

## `r_drawentities`

| Valor | Descripción |
| --- | --- |
| `0` | No dibuja entidades. |
| `1` | Predeterminado: dibuja las entidades con normalidad. |
| `2` | Dibuja las entidades como esqueletos. |
| `3` | Dibuja las entidades como cajas de impacto. |
| `4` | Dibuja las entidades con cajas de impacto translúcidas y el modelo por debajo. |
| `5` | Caja independiente para el jugador y para el arma. |
| `6` | Añadido por hitboxtracker. Igual que `4`, pero dibuja además la posición real de las cajas calculada por el servidor. |
| `7` | Añadido por hitboxtracker. Igual que `6`, pero sin translucidez. |

Los valores `0`–`5` son propios del motor y funcionan sin esta herramienta. Solo `6` y `7` requerían tener instaladas las dos mitades de hitboxtracker.

:::note

El sentido de los modos `6` y `7` estaba precisamente en la *diferencia*: comparabas las cajas del propio cliente con las del servidor, y un desfase visible entre ambas explicaba quejas sobre el registro de impactos que de otro modo parecían imaginaciones del jugador.

:::
