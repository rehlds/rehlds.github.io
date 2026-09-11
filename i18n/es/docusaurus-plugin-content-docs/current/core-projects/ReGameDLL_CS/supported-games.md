---
id: regamedll-cs-supported-games
title: Juegos y plataformas compatibles
sidebar_position: 3
description: Juegos, sistemas operativos y motores compatibles con ReGameDLL_CS.
slug: /regamedll-cs/supported-games
---

# Juegos y plataformas compatibles

ReGameDLL_CS es una GameDLL de servidor para las versiones GoldSrc de Counter-Strike y Counter-Strike: Condition Zero.

## Juegos compatibles

| Juego | Directorio del juego | Notas |
| --- | --- | --- |
| Counter-Strike 1.6 | `cstrike` | Totalmente compatible. El paquete opcional de datos de zBot es necesario si quieres usar los bots integrados. |
| Counter-Strike: Condition Zero | `czero` | Totalmente compatible. Los recursos de los bots vienen con el juego. |

ReGameDLL_CS no es una GameDLL intercambiable para otros mods de GoldSrc. No la instales en directorios como `valve`, `dod` o `tfc`.

## Plataformas de servidor compatibles

Los archivos de las versiones oficiales contienen binarios de servidor de 32 bits para ambas plataformas principales:

| Plataforma | GameDLL |
| --- | --- |
| Windows | `dlls/mp.dll` |
| Linux | `dlls/cs.so` |

El archivo guarda cada plataforma en `bin/win32` o `bin/linux32`. Copia el contenido del directorio que corresponda dentro del directorio de tu juego.

ReGameDLL_CS sustituye únicamente la lógica del juego. Sigues necesitando un motor GoldSrc compatible, como el HLDS actual de Steam o ReHLDS, además de los recursos originales del juego.

## Compatibilidad con motores y clientes

- Para servidores dedicados se recomienda ReHLDS, aunque ReGameDLL_CS también funciona sobre una instalación compatible de HLDS de Steam.
- Los jugadores no necesitan instalar ReGameDLL_CS: es un sustituto del lado del servidor.
- Mantén actualizados a la vez la GameDLL, el motor, Metamod y los plugins del servidor. Los plugins antiguos que parchean binarios pueden depender de desplazamientos de la GameDLL original de Valve y resultar incompatibles.
- Los motores alternativos como Xash3D son proyectos aparte. Su compatibilidad puede diferir del entorno oficial de Steam/ReHLDS y conviene consultarla con el proyecto del motor.
