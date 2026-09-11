---
id: reunion-install
title: Instalación
sidebar_position: 2
description: ReUnion es un plugin de Metamod que permite a los clientes sin Steam con los protocolos 47 y 48 conectarse a servidores ReHLDS.
slug: /reunion/install
---

<head>
  <title>ReUnion: Instalación | ReHLDS</title>
</head>

# Instalación

ReUnion es un plugin de Metamod y necesita que [ReHLDS](/es/docs/rehlds/install) (API `3.10`+) y Metamod (se recomienda Metamod-R) ya estén instalados y funcionando.

## 1. Consigue ReUnion

Descarga una versión desde la [página de versiones](https://github.com/rehlds/ReUnion/releases) o [compílalo desde el código fuente](./compilling.md).

## 2. Coloca el plugin

Crea una carpeta `reunion` dentro de `addons`, en el directorio de tu mod (`<gamedir>`: `cstrike` para Counter-Strike, `valve` para Half-Life, etc.) y pon ahí el binario que corresponda a tu plataforma:

| Plataforma | Archivo | Destino |
| --- | --- | --- |
| Windows | `reunion_mm.dll` | `<gamedir>/addons/reunion/reunion_mm.dll` |
| Linux | `reunion_mm_i386.so` | `<gamedir>/addons/reunion/reunion_mm_i386.so` |

## 3. Registra el plugin en Metamod

Edita `<gamedir>/addons/metamod/plugins.ini` y añade estas líneas, preferiblemente al **principio** del archivo:

```text
win32 addons\reunion\reunion_mm.dll
linux addons/reunion/reunion_mm_i386.so
```

## 4. Añade el archivo de configuración

Copia el `reunion.cfg` del archivo de la versión donde ReUnion pueda encontrarlo. Lo busca en este orden y usa el primero que localiza:

1. Junto a su propio binario: `<gamedir>/addons/reunion/reunion.cfg`.
2. La raíz del directorio del juego: `<gamedir>/reunion.cfg`.
3. El directorio de trabajo del servidor: `reunion.cfg`.

El formato del archivo está en [Configuración](./settings.md).

## 5. Arranca el servidor y verifica

Inicia el servidor y ejecuta `meta list` en la consola:

```text
Currently loaded plugins:
      description      stat pend  file              vers      src   load  unlod
 [ 1] Reunion          RUN   -    reunion_mm_i386.  v0.1.58   ini   Start Never
 [ 2] AMX Mod X        RUN   -    amxmodx_mm_i386.  v1.8.1.3  ini   Start ANY
2 plugins, 2 running
```

Si aparece `fail` en lugar de `RUN`, arranca el servidor con `-console +log on +mp_logecho 1` y revisa la salida de consola: ahí se indica el motivo por el que ReUnion no se cargó (lo habitual es que falte el `reunion.cfg` o no sea válido, o que la versión de ReHLDS sea incompatible).

## Extras opcionales

El archivo de la versión incluye además `reunion_api.h` (una cabecera de C para otros plugins de Metamod/GameDLL que quieran consultar ReUnion directamente; [ReAPI](/es/docs/reapi) la usa) y un par de scripts opcionales de AMX Mod X en `addons/amxmodx/scripting/` (`reu_test.sma` y `updatehint.sma`) que puedes compilar y cargar aparte si quieres un plugin de prueba o un aviso de cliente desactualizado. Ninguno de los dos es necesario para que ReUnion funcione.
