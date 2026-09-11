---
id: regamedll-cs-troubbleshouting
title: Solución de problemas
sidebar_position: 6
description: Problemas habituales de instalación, configuración y bots en ReGameDLL_CS.
slug: /regamedll-cs/troubbleshouting
---

# Solución de problemas

## `game version` no muestra ReGameDLL

Lo más probable es que el servidor siga cargando la GameDLL anterior.

1. Detén el servidor por completo.
2. Comprueba que copiaste el binario del sistema operativo correcto en `cstrike/dlls` o `czero/dlls`.
3. Comprueba que el servidor usa el directorio de juego que editaste (`-game cstrike` o `-game czero`).
4. Inicia el servidor y ejecuta `game version` en su consola.

En Linux, revisa además el propietario del archivo y los permisos de lectura. Recuerda que el binario oficial del servidor es de 32 bits, así que el host necesita las bibliotecas de ejecución de 32 bits correspondientes.

## Los comandos de bots no existen

En un servidor dedicado, `bot_enable` debe estar definido antes de que se inicialice la GameDLL.

1. Pon `bot_enable "1"` en `cstrike/game_init.cfg` o `czero/game_init.cfg`.
2. En Counter-Strike 1.6, instala el contenido del `bot_profiles.zip` oficial dentro de `cstrike`.
3. Reinicia el servidor por completo; cambiar la cvar después del arranque no basta.

No añadas `-bots` ni `-host-improv` a la línea de comandos. Esos parámetros antiguos se retiraron en favor de las cvars.

## Los bots están activados pero no entran

Comprueba los valores activos de:

```text
bot_quota
bot_quota_mode
bot_join_after_player
bot_join_team
```

Para una prueba sencilla, usa:

```cfg
bot_quota_mode "normal"
bot_quota "4"
bot_join_after_player "0"
bot_join_team "any"
```

Después cambia de mapa o reinicia el servidor. También puedes ejecutar `bot_add` a mano para distinguir entre un problema de cuota y un problema de datos de bots o de navegación.

## Faltan perfiles o nombres de bots

Counter-Strike 1.6 no incluye todos los datos de bots de Condition Zero. Descomprime el archivo `regamedll/extra/zBot/bot_profiles.zip` del repositorio dentro del directorio `cstrike` y conserva intacta su estructura de carpetas. Si indicas un nombre de perfil en `bot_add`, ese perfil debe existir en la base de perfiles instalada.

## Los bots no saben moverse por un mapa personalizado

Puede que el mapa no tenga una malla de navegación compatible. Carga el mapa, añade un bot y ejecuta `bot_nav_analyze` desde la consola del servidor. El análisis puede consumir bastante CPU. Guarda o recarga los datos de navegación generados antes de usarlos en un servidor de producción.

## El servidor se cierra tras sustituir la GameDLL

- Desactiva temporalmente los plugins de Metamod y prueba ReGameDLL_CS por sí solo.
- Actualiza ReHLDS, Metamod-R y los plugins a versiones compatibles.
- Retira los plugins que parcheen direcciones fijas o dependan de desplazamientos de la GameDLL de Valve, salvo que su documentación indique expresamente que admiten ReGameDLL_CS.
- Restaura el `delta.lst` de la versión si se sobrescribió por accidente con uno incompatible.

## Un ajuste no surte efecto

- Pon en `game_init.cfg` los ajustes que solo se leen al inicializar, como `bot_enable`, y reinicia el proceso.
- Pon los ajustes de jugabilidad en `game.cfg` o en otra configuración que se ejecute después de cargar el mapa.
- Busca esa misma cvar en configuraciones posteriores; la última asignación es la que manda.
- Al actualizar, compara tu configuración con la del archivo de la nueva versión. Las versiones nuevas pueden añadir cvars o cambiar valores predeterminados.

## Cómo informar de un problema

Antes de abrir una incidencia, reúne:

- la salida de `game version`;
- las versiones de ReHLDS/HLDS, Metamod y ReGameDLL_CS;
- el sistema operativo y el directorio del juego;
- la lista de plugins;
- el registro de consola pertinente y una configuración mínima que reproduzca el problema.

Informa de los problemas reproducibles de ReGameDLL_CS en el [repositorio del proyecto](https://github.com/rehlds/ReGameDLL_CS/issues).
