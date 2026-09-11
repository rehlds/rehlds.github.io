---
id: hitbox-fixer-settings
title: Configuración
sidebar_position: 3
description: Hitbox Fixer es un plugin de Metamod de terceros que corrige las cajas de impacto del lado del servidor en Counter-Strike 1.6, Half-Life y Adrenaline Gamer.
slug: /hitbox-fixer/settings
---

<head>
  <title>Hitbox Fixer: Configuración | ReHLDS</title>
</head>

# Configuración

Hitbox Fixer se configura mediante `addons/hitboxfixer/hbf.cfg`, que está junto al binario del plugin. Contiene una única cvar.

## Cvar

| Cvar | Valor predeterminado | Descripción |
| --- | --- | --- |
| `hbf_enabled` | `1` | Activa la corrección de las cajas de impacto. Ponlo a `0` para desactivar el plugin sin descargarlo de Metamod. |

La configuración predeterminada que se distribuye es una sola línea:

```text
hbf_enabled "1"
```

:::note

Desactivar `hbf_enabled` restaura el comportamiento original (defectuoso) de las cajas de impacto del motor. El interruptor existe sobre todo para poder comparar ambas situaciones en un servidor real al investigar quejas sobre el registro de impactos: en funcionamiento normal no hay motivo para dejarlo en `0`.

:::
