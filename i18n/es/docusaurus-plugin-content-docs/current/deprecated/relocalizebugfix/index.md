---
id: relocalizebugfix
title: ReLocalizeBug Fix
sidebar_position: 1
description: ReLocalizeBug Fix es un plugin de Metamod obsoleto que bloqueaba los exploits de cadenas de localización en nombres de jugador y chat en servidores ReHLDS.
slug: /relocalizebugfix
---

# ¿Qué es ReLocalizeBug Fix?

:::warning Obsoleto

ReLocalizeBug Fix está **obsoleto y es incompatible con las versiones modernas de ReHLDS**. Ejecutarlo sobre una build actual puede provocar inestabilidad y comportamientos imprevistos. Está [marcado como obsoleto desde 2017](https://github.com/rehlds/rehlds/issues/328#issuecomment-275837883).

Para esta clase de exploit en un servidor actual, usa [SafeNameAndChat](/es/docs/safenameandchat).

:::

ReLocalizeBug Fix era un plugin de Metamod que resolvía errores relacionados con la localización en servidores dedicados de Half-Life: el exploit por el cual los tokens de localización con prefijo `#` en el nombre o en el mensaje de un jugador hacen fallar a los clientes que los reciben.

Se desarrolló como extensión de [LocalizeBug Fix, de s1lentq](/es/docs/localizebugfix), adaptado a ReHLDS. Su única versión pública, la `v2.8`, salió en noviembre de 2016 y fue la primera compatible con ReHLDS.

## Por qué está obsoleto

El propio motor ReHLDS siguió avanzando. A medida que incorporó sus propias correcciones y protecciones, el enfoque del plugin dejó de encajar con lo que hace el motor, y al año siguiente se marcó como obsoleto. Nunca se actualizó para las builds de ReHLDS posteriores.

El aviso del propio README del proyecto no deja lugar a dudas: usar este plugin con versiones más recientes de ReHLDS puede provocar inestabilidad y comportamientos imprevistos.

## Qué usar en su lugar

[SafeNameAndChat](/es/docs/safenameandchat) cubre la misma clase de exploit y sí se mantiene. Además, su enfoque es más suave: sustituye los caracteres problemáticos por otros parecidos en lugar de eliminarlos o bloquear el mensaje, así que los jugadores conservan su nombre.

Cómo era usarlo está en [Instalación](./installing.md) y [Configuración](./settings.md).
