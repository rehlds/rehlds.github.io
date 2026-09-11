---
id: rehlds-settings
title: Configuración
sidebar_position: 3
description: ReHLDS es una versión reconstruida del HLDS original que aporta mayor seguridad, rendimiento y capacidad de modding a juegos como Half-Life y Counter-Strike 1.6.
slug: /rehlds/settings
---

<head>
  <title>ReHLDS: Configuración | ReHLDS</title>
</head>

# Configuración

ReHLDS añade un conjunto de variables de consola (cvars) a las estándar de HLDS, orientadas sobre todo al ajuste antitrampas y antiabuso, a la red y a correcciones de comportamiento. Defínelas en `server.cfg` o en cualquier configuración que se ejecute al arrancar.

## Cvars

| Cvar | Valor predeterminado | Descripción |
| --- | --- | --- |
| `sv_auto_precache_sounds_in_models` | `0` | Precarga automáticamente los sonidos asociados a los modelos. |
| `sv_delayed_spray_upload` | `0` | Sube los grafitis personalizados al entrar en la partida en lugar de al conectar. Aumenta la velocidad de subida. |
| `sv_echo_unknown_cmd` | `0` | Muestra un aviso en consola cuando un cliente intenta ejecutar un comando desconocido. |
| `sv_rcon_condebug` | `1` | Muestra en consola la información de depuración de RCON. |
| `sv_force_ent_intersection` | `0` | Lo usan plugins de terceros para forzar la colisión de entidades `SOLID_SLIDEBOX`. |
| `sv_rehlds_force_dlmax` | `0` | Fuerza la cvar `cl_dlmax` del cliente a `1024`, evitando una fragmentación excesiva de los paquetes. |
| `sv_rehlds_hull_centering` | `0` | Usa el centro del volumen de colisión en lugar de una esquina. |
| `sv_rehlds_movecmdrate_max_avg` | `400` | Nivel medio máximo de comandos de movimiento permitido antes de aplicar un baneo. |
| `sv_rehlds_movecmdrate_avg_punish` | `5` | Duración del baneo en minutos por superar `sv_rehlds_movecmdrate_max_avg` (`0` = permanente, negativo = expulsión). |
| `sv_rehlds_movecmdrate_max_burst` | `2500` | Nivel de pico máximo de comandos de movimiento permitido antes de aplicar un baneo. |
| `sv_rehlds_movecmdrate_burst_punish` | `5` | Duración del baneo en minutos por superar `sv_rehlds_movecmdrate_max_burst` (`0` = permanente, negativo = expulsión). |
| `sv_rehlds_send_mapcycle` | `0` | Envía `mapcycle.txt` en el mensaje de información del servidor (igual que el HLDS original; el cliente no lo usa). |
| `sv_rehlds_stringcmdrate_max_avg` | `80` | Nivel medio máximo de comandos de texto permitido antes de aplicar un baneo. |
| `sv_rehlds_stringcmdrate_avg_punish` | `5` | Duración del baneo en minutos por superar `sv_rehlds_stringcmdrate_max_avg` (`0` = permanente, negativo = expulsión). |
| `sv_rehlds_stringcmdrate_max_burst` | `400` | Nivel de pico máximo de comandos de texto permitido antes de aplicar un baneo. |
| `sv_rehlds_stringcmdrate_burst_punish` | `5` | Duración del baneo en minutos por superar `sv_rehlds_stringcmdrate_max_burst` (`0` = permanente, negativo = expulsión). |
| `sv_rehlds_userinfo_transmitted_fields` | `""` | Solo se transmiten a los clientes por red las claves de userinfo indicadas aquí. Vacío significa que se transmiten todos los campos (salvo las claves con prefijo `_`). Antepón una barra invertida a cada clave, por ejemplo `\name\model\*sid\*hltv\bottomcolor\topcolor`. La referencia completa está en [Userinfo keys](https://github.com/rehlds/ReHLDS/wiki/Userinfo-keys). |
| `sv_rehlds_attachedentities_playeranimationspeed_fix` | `0` | Corrige un fallo en la velocidad de la animación de las piernas cuando el jugador tiene entidades asociadas (aiments). Puede provocar retardo en la animación si `cl_updaterate` es bajo. |
| `sv_rehlds_maxclients_from_single_ip` | `5` | Limita las conexiones simultáneas desde una misma dirección IP (no afecta a los jugadores ya conectados). |
| `sv_rehlds_local_gametime` | `0` | Reduce la sensación de «lag» cuando el mismo mapa lleva mucho tiempo en marcha. |
| `sv_rehlds_allow_large_sprays` | `1` | Permite grafitis personalizados de más de 64x64. |
| `sv_use_entity_file` | `0` | Controla el uso de un archivo de entidades propio por mapa (`maps/[nombre del mapa].ent`). `0` = entidades originales, `1` = usar los archivos `.ent` del directorio de mapas, `2` = usar los `.ent` y crear uno si no existe. |
| `sv_usercmd_custom_random_seed` | `0` | Genera una semilla aleatoria adicional independiente del cliente. |
| `sv_net_incoming_decompression` | `1` | Descomprime los datos comprimidos entrantes en las transferencias de archivos. |
| `sv_net_incoming_decompression_max_ratio` | `80.0` | Relación máxima permitida entre datos comprimidos y sin comprimir en las transferencias de archivos, `0`–`100`. Un valor cercano a 90 indica un gran volumen de datos sin comprimir y con poca entropía. |
| `sv_net_incoming_decompression_max_size` | `65536` | Tamaño máximo permitido, en bytes, de los datos descomprimidos en una transferencia de archivos, `16`–`65536`. |
| `sv_net_incoming_decompression_min_failures` | `4` | Número mínimo de fallos de descompresión para marcar una conexión como candidata a sanción, `0`–`10`. |
| `sv_net_incoming_decompression_max_failures` | `10` | Número máximo de fallos de descompresión dentro de la ventana de seguimiento antes de actuar, `0`–`10`. |
| `sv_net_incoming_decompression_min_failuretime` | `0.1` | Ventana de tiempo, en segundos, `0.1`–`10.0`, durante la cual se contabilizan los fallos de descompresión. |
| `sv_net_incoming_decompression_punish` | `-1` | Duración del baneo en minutos por fragmentos bzip2 malformados o anómalos (`0` = permanente, negativo = expulsión). |
| `sv_tags` | `""` | Lista de «etiquetas de juego» del servidor, separadas por comas, usada para filtrar en el emparejamiento y en los listados de servidores. |
| `sv_filterban` | `1` | Modo de filtrado por IP. `-1` = rechazar a todos los jugadores sin excepción, `0` = no comprobar nada, `1` = expulsar a los jugadores que coincidan con un filtro o baneo de IP. |
| `sv_rehlds_movecmd_max_ticks` | `24` | Número máximo de comandos de movimiento que el servidor procesa de un mismo jugador en un solo fotograma (comandos, no paquetes). |
| `sv_rehlds_movecmd_max_null_streak` | `0` | Número máximo de comandos de movimiento consecutivos con duración cero (comandos vacíos). `0` desactiva la comprobación. |
| `sv_rehlds_movecmd_clamp_interp` | `1` | Bloquea los comandos de movimiento cuyo valor de `ex_interp` esté fuera de rango. |
| `sv_rehlds_movecmdtime_samples` | `120` | Número de fotogramas usados para promediar la velocidad de movimiento del cliente. Cuanto mayor, más preciso pero más lento en detectar. |
| `sv_rehlds_movecmdtime_max_error` | `300` | Desviación máxima, en milisegundos, entre el reloj interno del cliente y el del servidor antes de evaluar la velocidad. La sanción solo se aplica si además se incumplen `sv_rehlds_movecmdtime_max_scale` / `_min_scale`. |
| `sv_rehlds_movecmdtime_max_scale` | `3.0` | Proporción máxima de velocidad de juego base del cliente. Los clientes que la superen reciben avisos. |
| `sv_rehlds_movecmdtime_min_scale` | `0.5` | Proporción mínima de velocidad de juego base del cliente. Los clientes que queden por debajo reciben avisos. |
| `sv_rehlds_movecmdtime_max_warnings` | `-1` | Número máximo de avisos por speedhack o ralentización antes de aplicar una sanción. `-1` desactiva la detección. |
| `sv_rehlds_movecmdtime_punish` | `-1` | Sanción por speedhack o ralentización (`-1` = expulsión, `0` = baneo permanente, negativo = expulsión). |
| `sv_reconnect_timeout` | `30` | Plazo máximo, en segundos, para que un cliente vuelva a iniciar la conexión tras un cambio de mapa, con independencia de la actividad del canal de red. Cierra un exploit de «plazas fantasma» en el que una trampa bloquea el comando `reconnect` manteniendo vivo el canal de red para que `sv_timeout` no llegue a dispararse. `0` lo desactiva. |

:::note

`sv_rehlds_userinfo_transmitted_fields` es el ajuste que más se usa junto con configuraciones de privacidad y antitrampas. El tipo de valor, si se transmite de forma predeterminada y las notas de privacidad de cada clave estándar están en la [página del wiki Userinfo keys](https://github.com/rehlds/ReHLDS/wiki/Userinfo-keys).

:::

## Archivos

| Cvar | Valor predeterminado | Descripción |
| --- | --- | --- |
| `listipcfgfile` | `listip.cfg` | Archivo usado para los baneos permanentes por IP. |
| `syserror_logfile` | `sys_error.log` | Archivo de registro de errores del sistema. |

## Comandos de consola

| Comando | Descripción |
| --- | --- |
| `rescount` | Muestra en la consola del servidor el número total de recursos precargados. |
| `reslist <sound \| model \| decal \| generic \| event>` | Muestra los recursos precargados del tipo indicado. Útil para gestionar recursos y controlar los límites de precarga de GoldSrc. |
| `rcon_adduser <ipaddress/CIDR>` | Añade una dirección IP o un rango CIDR a la lista de usuarios de RCON, concediéndole acceso privilegiado a la consola. Mientras la lista esté vacía, cualquiera con la contraseña correcta puede usar RCON. |
| `rcon_deluser <ipaddress> {removeAll}` | Elimina una dirección IP o un rango CIDR de la lista de usuarios de RCON. |
| `rcon_users` | Muestra todas las direcciones IP y rangos CIDR de la lista de usuarios de RCON. |
