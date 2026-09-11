---
id: revoice-settings
title: Configuración
sidebar_position: 3
description: ReVoice es un plugin de Metamod, un transcodificador de voz que corrige el chat de voz entre clientes sin Steam y con Steam en servidores ReHLDS.
slug: /revoice/settings
---

<head>
  <title>ReVoice: Configuración | ReHLDS</title>
</head>

# Configuración

ReVoice se configura mediante `addons/revoice/revoice.cfg`, que se ejecuta con `exec` al arrancar como cualquier archivo de configuración del servidor: es una lista de asignaciones de cvars, no un archivo INI.

## Cvars

| Cvar | Valor predeterminado | Descripción |
| --- | --- | --- |
| `REV_DefaultCodec` | `speex` | Códec al que ReVoice transcodifica la voz saliente de los jugadores normales. Admite `speex` u `opus`. |
| `REV_HltvCodec` | `opus` | Códec al que ReVoice transcodifica la voz saliente de HLTV. Admite `speex` u `opus`. |
| `revoice_version` | *(versión actual)* | Solo lectura; indica la versión de ReVoice cargada. |

La configuración predeterminada que se distribuye:

```text
REV_HltvCodec opus		// speex, opus
REV_DefaultCodec speex	// speex, opus
```

Los cambios en las cvars surten efecto de inmediato: ReVoice detecta los cambios en ambas cvars de códec y los vuelve a aplicar sin reiniciar.

:::note

`sv_voiceenable` es una cvar estándar del motor, no un ajuste de ReVoice, y debe valer `1` para que el chat de voz funcione siquiera. ReVoice solo corrige la compatibilidad de códecs entre clientes con y sin Steam una vez que el chat de voz ya está activado.

:::

## Comando de consola

```text
rev version
rev status
```

- `rev version`: muestra la versión de ReVoice cargada, la fecha de compilación y el commit.
- `rev status`: muestra el estado detallado en ejecución (añadido específicamente para diagnosticar problemas de voz).
