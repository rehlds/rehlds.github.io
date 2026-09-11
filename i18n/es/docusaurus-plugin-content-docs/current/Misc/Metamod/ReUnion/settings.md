---
id: reunion-settings
title: Configuración
sidebar_position: 3
description: ReUnion es un plugin de Metamod que permite a los clientes sin Steam con los protocolos 47 y 48 conectarse a servidores ReHLDS.
slug: /reunion/settings
---

<head>
  <title>ReUnion: Configuración | ReHLDS</title>
</head>

# Configuración

ReUnion se configura por completo mediante `reunion.cfg`. El archivo predeterminado está ampliamente comentado; esta página resume cada una de sus secciones.

:::warning

El archivo empieza con un «no cambies nada si no sabes lo que significa», y no sin motivo: la mayoría de los valores predeterminados ya están ajustados. Modifícalos de forma deliberada y de uno en uno.

:::

## Tipos de identificador de cliente (`cid_*`)

Cada opción `cid_*` asigna un tipo de identificador a una categoría de clientes. Los códigos de tipo disponibles son:

| Código | Significado |
| --- | --- |
| `1` | Steam ID auténtico (o generado a partir del hardware) (`STEAM_xx:xx:xx`). |
| `2` | Valve ID auténtico (o generado a partir del hardware) (`VALVE_xx:xx:xx`). |
| `3` | Identificador `STEAM_` generado a partir de la IP del cliente. |
| `4` | Identificador `VALVE_` generado a partir de la IP del cliente. |
| `5` | Obsoleto: el cliente es rechazado. |
| `6` | Reservado para uso futuro. |
| `7` | HLTV. |
| `8` | `STEAM_ID_LAN`. |
| `9` | `STEAM_ID_PENDING`. |
| `10` | `VALVE_ID_LAN`. |
| `11` | `VALVE_ID_PENDING`. |
| `12` | `STEAM_666:88:666`. |

| Opción | Valor predeterminado | Se aplica a |
| --- | --- | --- |
| `cid_Steam` | `1` | Clientes legítimos de Steam. |
| `cid_SteamPending` | `5` | Clientes que se autorizaron correctamente pero no recibieron un Steam ID utilizable. |
| `cid_HLTV` | `5` | Repetidores de HLTV. |
| `cid_NoSteam47` | `5` | Clientes del protocolo 47 sin capacidad de generar un identificador único. |
| `cid_NoSteam48` | `5` | Clientes del protocolo 48 sin capacidad de generar un identificador único. |
| `cid_RevEmu` | `1` | revEmu ≥ 9.74. |
| `cid_RevEmu2013` | `1` | RevEmu 2013. |
| `cid_SC2009` | `1` | SteamClient 2009 / revEmu > 9.82. |
| `cid_OldRevEmu` | `1` | Versiones antiguas de revEmu. |
| `cid_SteamEmu` | `1` | SteamEmu de hCupa. |
| `cid_AVSMP` | `1` | AVSMP (Steam pirateado). |
| `cid_Setti` | `3` | Escáner de servidores SETTI. |
| `cid_SXEI` | `1` | Clientes de sXeI. |

`HLTVExcept_IP` (predeterminado `127.0.0.1`) permite que un HLTV desde una IP concreta entre incluso cuando `cid_HLTV` rechaza a los clientes HLTV.

## Ajustes de autorización

| Opción | Valor predeterminado | Descripción |
| --- | --- | --- |
| `AuthVersion` | `4` | Versión del protocolo de autorización: `1` DProto (obsoleta), `2` Reunion 2015–2018, `3` Reunion 2018–2024, `4` la actual (recomendada). |
| `SteamIdHashSalt` | *(vacío)* | Sal para aplicar hash a los Steam ID generados, cambiándolos de forma irreversible para impedir el robo de identificadores. Longitud recomendada: 32 caracteres o más; mínima, 16. Con `AuthVersion >= 3`, dejarlo vacío hace que ReUnion **no se inicialice**: para desactivar el hash (no recomendado), pon `0` de forma explícita en lugar de dejarlo en blanco. |
| `SC2009_RevCompatMode` | `1` | Hace que los identificadores generados por SC2009 sean compatibles con revEmu. No se puede desactivar con `AuthVersion >= 3`. |
| `EnableSXEIdGeneration` | `0` | Activa la generación de identificadores a partir de los datos del cliente sXeI. Actívalo solo si realmente tienes una instalación compatible con sXeI. |
| `EnableGenPrefix2` | `0` | Añade un segundo prefijo de identificador para reducir la probabilidad de colisiones entre los identificadores generados. Solo surte efecto con `SteamIdHashSalt` definido; no se puede desactivar con `AuthVersion >= 3`. |

### Prefijos de authid heredados

Las opciones `IPGen_Prefix1/2`, `Native_Prefix1`, `RevEmu*_Prefix1`, `SC2009_Prefix1`, `OldRevEmu_Prefix1`, `SteamEmu_Prefix1`, `AVSMP_Prefix1`, `Setti_Prefix1` y `SXEI_Prefix1` solo se aplican cuando `AuthVersion` vale `1` o `2`. Con el valor recomendado `AuthVersion = 4`, toda esta sección se ignora: déjala con sus valores predeterminados.

Sea cual sea la versión, `banid` usa siempre el SteamID **sin** ningún prefijo.

## Consultas al servidor

| Opción | Valor predeterminado | Descripción |
| --- | --- | --- |
| `ServerInfoAnswerType` | `0` | `0` respuestas del tipo nuevo (Steam), recomendado; `1` respuestas del tipo antiguo de GoldSrc; `2` híbrido: visible en ambos, pero responde tres veces a cada consulta. |
| `FixBuggedQuery` | `1` | Corrige el comportamiento de los clientes con un listado de servidores defectuoso que, de otro modo, se quedarían colgados al conectar. |
| `EnableQueryLimiter` | `1` | Limita la frecuencia de las consultas al servidor (TSource, lista de jugadores, etc.). Ponlo a `0` si ya limitas la frecuencia por medios externos. |
| `QueryFloodBanLevel` | `400` | Consultas por segundo que provocan el baneo de una IP. Rango `320`–`2048`; el tráfico legítimo rara vez supera las ~80 por segundo. |
| `QueryFloodBanTime` | `10` | Duración del baneo, en minutos, por avalancha de consultas, `0`–`60`. El valor `0` bloquea sin banear. |
| `QueryLimiterExceptIP` | *(sección, vacía)* | Lista de IP (una por línea bajo `[QueryLimiterExceptIP]`) excluidas del limitador de consultas. |
| `AllowSplitPackets` | `0` | Permite dividir los paquetes salientes de más de 1400 bytes, como hace el cliente original de Steam. Algunas herramientas de monitorización no lo admiten. |
| `IDClientsLimit` | `1` | Máximo de clientes simultáneos con el mismo Steam ID, `0`–`32`. El valor `0` desactiva el límite. Resulta útil al depurar con varias instancias del cliente. |

## Registro

| Opción | Valor predeterminado | Descripción |
| --- | --- | --- |
| `LoggingMode` | `0` | `0` desactivado, `1` consola, `2` archivos de registro, `3` ambos. |

## Preguntas frecuentes

- **Puse `SteamIdHashSalt` igual que en DProto, pero los jugadores tienen SteamIDs distintos.** ReUnion usa un algoritmo de hash diferente y más seguro. Conocer el SteamID de un jugador de antes de activar `SteamIdHashSalt` no ayuda a reproducirlo después.
- **¿Puedo hacer algo contra los programas que cambian el SteamID?** No: esos programas generan tickets de autorización válidos, así que el servidor no puede saber que el identificador ha sido sustituido. Definir `SteamIdHashSalt` al menos impide que alguien suplante deliberadamente el ID de *un jugador concreto*.
- **Algunas herramientas de monitorización no consiguen obtener la lista de jugadores.** Lo más probable es que usen un formato de consulta obsoleto; emplea una biblioteca de consultas actual, como [PHP-Source-Query](https://github.com/xPaw/PHP-Source-Query) o equivalente.
- **DProto tenía la opción `Game_Name`; ReUnion no.** Cambia el nombre del juego que se muestra desde un plugin.
