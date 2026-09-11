---
id: regamedll-cs-bots
title: Uso de bots
sidebar_position: 5
description: Instala, activa, configura y soluciona problemas del sistema zBot integrado en ReGameDLL_CS.
slug: /regamedll-cs/bots
---

# Uso de bots

ReGameDLL_CS incluye el código de zBot que utiliza Counter-Strike: Condition Zero. Los servidores dedicados deben activarlo de forma explícita, y los servidores de CS 1.6 necesitan además los perfiles y recursos de bots, que se distribuyen aparte.

:::warning Opción antigua de línea de comandos

No uses la antigua opción `-bots` en la línea de comandos de HLDS. Se retiró en favor de la CVar `bot_enable`.

:::

## Activar los bots en CS 1.6

1. Instala una versión actual de ReGameDLL_CS.
2. Descarga el archivo oficial [`bot_profiles.zip`](https://github.com/rehlds/ReGameDLL_CS/raw/refs/heads/master/regamedll/extra/zBot/bot_profiles.zip).
3. Descomprímelo en la raíz del servidor, de modo que sus archivos de `cstrike` se integren en `<server>/cstrike`.
4. Crea o edita `<server>/cstrike/game_init.cfg` y define:

```text
bot_enable "1"
```

5. Reinicia el servidor por completo.

El archivo habitual `regamedll-bin-*.zip` no incluye el paquete de perfiles de bots para CS 1.6, así que instalar solo la GameDLL no basta.

## Activar los bots en Condition Zero

Condition Zero ya trae los perfiles y recursos habituales de zBot. En un servidor dedicado, edita `<server>/czero/game_init.cfg` y define:

```text
bot_enable "1"
```

Después reinicia el servidor por completo. En los servidores tipo *listen*, zBot se activa con independencia de esta CVar.

## Añadir y quitar bots

Ejecuta estos comandos en la consola del servidor o mediante RCON:

| Comando | Resultado |
| --- | --- |
| `bot_add` | Añade un bot aleatorio, usando `bot_join_team` como equipo preferido. |
| `bot_add <perfil>` | Añade el perfil indicado de `BotProfile.db`. |
| `bot_add_t [perfil]` | Añade un bot terrorista aleatorio o con el perfil indicado. |
| `bot_add_ct [perfil]` | Añade un bot antiterrorista aleatorio o con el perfil indicado. |
| `bot_kill` o `bot_kill all` | Mata a todos los bots vivos sin expulsarlos. |
| `bot_kill <nombre>` | Mata a un bot concreto. Entrecomilla los nombres que contengan espacios. |
| `bot_kick` o `bot_kick all` | Expulsa a todos los bots y reinicia la cuota para que no vuelvan a añadirse de inmediato. |
| `bot_kick <nombre>` | Expulsa a un bot y reduce la cuota. |
| `bot_about` | Muestra información sobre la implementación de los bots. |

Añadir un bot a mano incrementa `bot_quota`; expulsarlo a mano la reduce.

## Configurar el número de bots

`bot_quota_mode` determina cómo se interpreta `bot_quota`.

### Mantener exactamente seis bots

```text
bot_quota_mode "normal"
bot_quota "6"
bot_join_after_player "0"
```

### Mantener diez jugadores activos en total

En el modo `fill`, la suma de humanos y bots se mantiene cerca de la cuota:

```text
bot_quota_mode "fill"
bot_quota "10"
```

### Mantener dos bots por cada humano

En el modo `match`, la cuota es una proporción de bots por humano:

```text
bot_quota_mode "match"
bot_quota "2"
```

Ajustes útiles de la cuota:

| CVar | Valores | Significado |
| --- | --- | --- |
| `bot_join_after_player` | `0`, `1`, `2` | `0`: los bots pueden entrar en un servidor vacío. `1`: esperan a que haya un humano en T/CT. `2`: esperan a cualquier humano conectado, incluidos los espectadores. |
| `bot_join_delay` | segundos | Retrasa la entrada de los bots tras un cambio de mapa. |
| `bot_auto_vacate` | `0` o `1` | Si está activo, mantiene una plaza libre para un jugador humano. |
| `bot_join_team` | `any`, `T`, `CT` | Equipo preferido para los bots añadidos automáticamente. |

## Dificultad, comunicación y objetivos

```text
bot_difficulty "2"
bot_chatter "minimal"
bot_defer_to_human "0"
```

- `bot_difficulty`: `0` fácil, `1` normal, `2` difícil, `3` experto.
- `bot_chatter`: habitualmente `off`, `radio`, `minimal` o `normal`.
- `bot_defer_to_human 0`: los bots pueden cumplir los objetivos del escenario.
- `bot_deathmatch 1`: los bots se comportan como en deathmatch y no siguen el escenario normal.
- `bot_freeze 1`: impide que los bots se muevan, lo que resulta útil para hacer pruebas.

También hay ajustes rápidos de armamento:

```text
bot_knives_only
bot_pistols_only
bot_snipers_only
bot_all_weapons
```

## Navegación en mapas personalizados

Los bots necesitan un archivo de navegación en `<mod>/maps/<mapa>.nav`. Si un mapa personalizado no lo incluye, ejecuta:

```text
bot_nav_analyze
```

El análisis de navegación puede tardar y genera un archivo `.nav` nuevo. Las builds actuales de ReGameDLL_CS recargan los datos de navegación generados al terminar el análisis, sin necesidad de reiniciar el mapa aparte.

Haz copia de seguridad de los archivos `.nav` editados a mano antes de volver a ejecutar el análisis. Los demás comandos `bot_nav_*` son herramientas de edición avanzadas y conviene usarlas en un servidor de pruebas.

## Ejemplo de configuración de bots

Una vez activados los bots en `game_init.cfg`, pon el comportamiento habitual en `game.cfg` o en un archivo aparte que ejecute la configuración de tu servidor:

```text
bot_quota_mode "fill"
bot_quota "12"
bot_join_after_player "2"
bot_join_delay "5"
bot_auto_vacate "1"
bot_difficulty "2"
bot_chatter "minimal"
bot_defer_to_human "0"
```

Consulta [Solución de problemas](../troubbleshouting/) si los comandos `bot_*` no existen o si los bots no entran.
