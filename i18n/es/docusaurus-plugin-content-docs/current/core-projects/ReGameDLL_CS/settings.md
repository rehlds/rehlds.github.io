---
id: regamedll-cs-settings
title: Configuración y comandos
sidebar_position: 4
description: Configura los archivos de ReGameDLL_CS, las CVars de juego más habituales y los comandos de consola del servidor.
slug: /regamedll-cs/settings
---

# Configuración y comandos

ReGameDLL_CS añade ajustes propios a las CVars estándar del servidor de Counter-Strike. Parte de los archivos de configuración incluidos en la misma versión que tu GameDLL.

## Archivos de configuración

| Archivo | Para qué sirve |
| --- | --- |
| `<mod>/game.cfg` | Reglas de juego de ReGameDLL_CS, comportamiento del HUD, movimiento, reaparición, daño y extensiones de la cuota de bots. |
| `<mod>/game_init.cfg` | Ajustes que deben conocerse mientras se inicializa la GameDLL: `bot_enable`, `hostage_ai_enable` y `mp_hullbounds_sets`. |
| `<mod>/server.cfg` | Ajustes normales del servidor, como el nombre, las contraseñas, el registro y las CVars estándar de Counter-Strike. |

`<mod>` significa `cstrike` para CS 1.6 o `czero` para Condition Zero.

:::important

Después de modificar `game_init.cfg`, reinicia por completo el proceso del servidor. Un simple cambio de mapa puede no bastar para reinicializar funciones como los bots integrados.

:::

## Ajustes habituales de ReGameDLL_CS

Los valores siguientes son los que trae la configuración de la versión estable actual. Tu servidor puede sobrescribirlos.

| CVar | Valor de la versión | Para qué sirve |
| --- | ---: | --- |
| `mp_freeforall` | `0` | Activa el modo todos contra todos cuando vale `1`. |
| `mp_round_infinite` | `0` | Impide que determinadas condiciones del escenario terminen la ronda. Admite indicadores como `a`, `e` o combinaciones como `ae`. |
| `mp_round_restart_delay` | `5` | Retardo en segundos antes de la siguiente ronda tras una victoria. |
| `mp_roundrespawn_time` | `20` | Tiempo tras el inicio de la ronda durante el cual un jugador que entra todavía puede aparecer; `-1` elimina el límite. |
| `mp_forcerespawn` | `0` | Hace reaparecer automáticamente a los jugadores muertos tras el retardo indicado. |
| `mp_maxmoney` | `16000` | Dinero máximo del jugador; ReGameDLL_CS admite valores de hasta `999999`. |
| `mp_buy_anywhere` | `0` | Permite comprar en cualquier sitio a ambos equipos (`1`), solo a los T (`2`) o solo a los CT (`3`). |
| `mp_infinite_ammo` | `0` | `1` mantiene el cargador lleno; `2` da munición de reserva infinita. |
| `mp_infinite_grenades` | `0` | Activa las granadas infinitas cuando vale `1`. |
| `mp_free_armor` | `0` | Da chaleco (`1`) o chaleco y casco (`2`) al aparecer. |
| `mp_team_flash` | `1` | Controla si las granadas cegadoras afectan a los compañeros y a quien las lanza. |
| `sv_autobunnyhopping` | `0` | Salta automáticamente mientras se mantiene pulsada la tecla de salto. |
| `sv_enablebunnyhopping` | `0` | Permite superar el límite normal de velocidad de carrera. |
| `mp_scoreboard_showhealth` | `3` | Controla de quién se envía y se muestra la salud en la tabla de puntuaciones. |
| `mp_scoreboard_showmoney` | `3` | Controla de quién se envía y se muestra el dinero en la tabla de puntuaciones. |
| `mp_allow_point_servercommand` | `0` | Permite que los mapas ejecuten comandos del servidor. Mantenlo desactivado con mapas en los que no confíes. |

Para conocer todos los ajustes disponibles, sus valores admitidos y las notas de seguridad, toma como referencia el [`dist/game.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game.cfg) del repositorio.

## Comandos de servidor

Ejecútalos desde la consola del servidor o, cuando proceda, mediante una sesión de RCON autorizada.

| Comando | Descripción |
| --- | --- |
| `game version` | Muestra la versión de la build de la GameDLL cargada, su fecha y la dirección del proyecto. |
| `endround` | Termina la ronda en empate. |
| `endround T` | Termina la ronda con victoria de los terroristas. |
| `endround CT` | Termina la ronda con victoria de los antiterroristas. |
| `swapteams` | Intercambia los equipos y reinicia tras el retardo predeterminado de un segundo. |
| `swapteams 0` | Intercambia los equipos sin reiniciar la ronda. |
| `swapteams <segundos>` | Intercambia los equipos y reinicia tras el retardo indicado. |
| `give weapon_ak47` | Entrega el arma indicada; requiere `sv_cheats 1`. |
| `impulse 255` | Entrega todas las armas; requiere `sv_cheats 1`. |
| `impulse 200` | Activa el modo noclip con aceleración en el aire; requiere `sv_cheats 1`. |

Los comandos específicos de los bots y los ejemplos de cuota están documentados en [Uso de bots](../bots/).

## Un método seguro de configuración

1. Conserva una copia de la configuración sin modificar de cada versión.
2. Cambia un grupo de ajustes cada vez.
3. Reinicia o cambia de mapa según haga falta y comprueba el valor efectivo en la consola del servidor.
4. Guarda tus valores personalizados fuera del archivo de la versión, para que una actualización no pueda sobrescribirlos sin que te des cuenta.
