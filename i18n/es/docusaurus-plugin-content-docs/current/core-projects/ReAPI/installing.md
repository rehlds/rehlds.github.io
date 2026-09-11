---
id: reapi-install
title: Instalación
sidebar_position: 2
description: ReAPI es un módulo de AMXModX que ofrece APIs de ReHLDS, ReGameDLL y de plugins de Metamod (por ejemplo, ReUnion o ReVoice).
slug: /reapi/install
---

<head>
  <title>ReAPI: Instalación | ReHLDS</title>
</head>

# Instalación

ReAPI es un módulo de AMX Mod X. Necesita que AMX Mod X ya esté instalado y funcionando, y se engancha a las capas que hay por debajo, así que el orden de instalación importa.

## Antes de empezar

Comprueba que lo siguiente ya está instalado y funcionando:

1. [ReHLDS](/es/docs/rehlds/install) — necesario para todos los enganches y miembros a nivel de motor.
2. Metamod-R (o Metamod) y AMX Mod X.
3. [ReGameDLL_CS](/es/docs/regamedll-cs/install) — solo hace falta si tus plugins usan enganches o miembros de la GameDLL (`reapi_gamedll.inc`). Los plugins que solo trabajan a nivel de motor funcionan sin él.

## 1. Descarga ReAPI

Obtén `reapi-bin-*.zip` desde la [última versión](https://github.com/rehlds/ReAPI/releases/latest). El archivo contiene una única carpeta `addons/` con los binarios del módulo para ambas plataformas y las cabeceras de Pawn.

## 2. Descomprime en el directorio de tu mod

Copia el contenido de `addons/amxmodx/` del archivo dentro de `<mod>/addons/amxmodx/`:

| Desde el archivo | Va a | Para qué |
| --- | --- | --- |
| `addons/amxmodx/modules/reapi_amxx.dll` | `<mod>/addons/amxmodx/modules/` | Binario del módulo para Windows. |
| `addons/amxmodx/modules/reapi_amxx_i386.so` | `<mod>/addons/amxmodx/modules/` | Binario del módulo para Linux. |
| `addons/amxmodx/scripting/include/reapi*.inc`, `cssdk_const.inc` | `<mod>/addons/amxmodx/scripting/include/` | Cabeceras de Pawn necesarias para **compilar** plugins que usen ReAPI. |

Solo necesitas el binario que corresponda a la plataforma de tu servidor; las cabeceras son independientes de la plataforma y únicamente hacen falta en la máquina donde compiles los plugins `.sma`.

## 3. Activa el módulo

La forma de cargar el módulo depende de tu versión de AMX Mod X:

:::note

En las versiones de AMX Mod X lo bastante recientes como para definir `AMXX_VERSION_NUM >= 175`, el propio `reapi.inc` declara `#pragma reqlib reapi` / `#pragma loadlib reapi`. Cualquier plugin con `#include <reapi>` requiere y carga el módulo automáticamente: **no hace falta añadir ninguna entrada a `modules.ini`**.

:::

En compilaciones más antiguas de AMX Mod X, añade tú mismo una línea `reapi` a `<mod>/addons/amxmodx/configs/modules.ini` para que el módulo se cargue al arrancar.

## 4. Verifica

Inicia el servidor y revisa el registro de arranque de AMX Mod X (o ejecuta `meta list` o el listado de módulos de AMXX en la consola) para comprobar que `ReAPI` se ha cargado correctamente. Si no lo hace, vuelve a comprobar que copiaste el binario de tu sistema operativo y que ReHLDS (y ReGameDLL_CS, si lo usas) están realmente instalados: ReAPI depende de ellos en tiempo de ejecución, no solo al compilar.

## Compilar plugins con ReAPI

Indica al compilador de AMXX (`amxxpc`) un directorio `scripting/include` que contenga las cabeceras de ReAPI copiadas en el paso 2 y, a continuación, basta con añadir `#include <reapi>` al código de tu plugin. Las nativas disponibles y la API de cadenas de enganches están en [Configuración](./settings.md).
