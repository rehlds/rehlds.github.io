---
id: refreelook-settings
title: "ReFreeLook: Configuración"
sidebar_label: Configuración
sidebar_position: 3
description: ReFreeLook es un módulo de AMX Mod X que permite a los administradores en modo espectador usar cualquier modo de cámara, sea cual sea el valor de `mp_forcecamera` o `mp_forcechasecam`. Solo funciona con la última versión de `ReGameDLL_CS`.
slug: /refreelook/settings
keywords:
  - refreelook
  - AMX Mod X
  - amxx
  - amx
  - module
  - settings
tags:
  - refreelook
  - settings
last_update:
  date: 07/21/2025
  author: STAM
---

# Configuración

ReFreeLook tiene una única cvar.

## `afl_admin_access_flags`

Permisos que quedan exentos del modo de cámara de espectador impuesto por el servidor (`mp_forcecamera`/`mp_forcechasecam`). Un jugador cuyo nivel de acceso en AMX Mod X incluya **cualquiera** de los permisos indicados obtiene control de cámara sin restricciones mientras observa. Los permisos se suman: combina tantas letras como quieras.

| Valor predeterminado |
| --- |
| `d` |

Los permisos son los estándar de AMX Mod X (tal como se documentan en `users.ini`):

| Permiso | Acceso |
| --- | --- |
| `a` | Inmunidad (no se le puede expulsar, banear, matar ni abofetear, ni le afectan otros comandos de administración). |
| `b` | Reserva (puede entrar en plazas reservadas). |
| `c` | Comando `amx_kick`. |
| `d` | Comandos `amx_ban` y `amx_unban` (baneos permanentes y temporales). |
| `e` | Comandos `amx_slay` y `amx_slap`. |
| `f` | Comando `amx_map`. |
| `g` | Comando `amx_cvar` (no están disponibles todas las cvars). |
| `h` | Comando `amx_cfg`. |
| `i` | Comando `amx_chat` y otros comandos de chat. |
| `j` | Comando `amx_vote` y otros comandos de votación. |
| `k` | Acceso a la cvar `sv_password` (mediante `amx_cvar`). |
| `l` | Acceso al comando `amx_rcon` y a la cvar `rcon_password` (mediante `amx_cvar`). |
| `m`–`t` | Niveles personalizados A–H, para otros plugins. |
| `u` | Acceso a los menús. |
| `v` | `amx_ban`/`amx_unban`, solo baneos temporales (para `amx_unban`, solo los baneos aplicados por uno mismo durante el mapa actual). |
| `z` | Usuario normal (sin permisos de administración). |

Como el valor predeterminado es `d` (comandos de baneo), la mayoría de los servidores querrán añadir los permisos que use realmente su grupo de moderadores o administradores, por ejemplo:

```text
afl_admin_access_flags "cd"
```

Con esto, la cámara libre queda disponible para cualquiera que tenga el permiso de expulsión (`c`) o de baneo (`d`).
