---
id: regamedll-cs-install
title: Instalación y actualización
sidebar_position: 2
description: Instala o actualiza la versión actual de ReGameDLL_CS en servidores de Counter-Strike 1.6 y Condition Zero.
slug: /regamedll-cs/install
---

# Instalación y actualización

Estas instrucciones se aplican a servidores dedicados de Counter-Strike 1.6 y Counter-Strike: Condition Zero en Windows o en Linux de 32 bits.

## Antes de empezar

1. Detén el servidor por completo.
2. Haz una copia de seguridad del directorio del mod (`cstrike` o `czero`), en especial de su carpeta `dlls` y de los archivos de configuración.
3. Descarga `regamedll-bin-*.zip` desde la [última versión estable](https://github.com/rehlds/ReGameDLL_CS/releases/latest).

:::note

La página de versiones ofrece además un archivo de firma `.zip.asc`. Es una firma para verificar la descarga, no el paquete del servidor.

:::

## Elige la build de la plataforma correcta

| Plataforma del servidor | Carpeta dentro del archivo | Binario principal |
| --- | --- | --- |
| Windows | `bin/win32/cstrike` | `dlls/mp.dll` |
| Linux x86 | `bin/linux32/cstrike` | `dlls/cs.so` |

El archivo usa el nombre de carpeta `cstrike` para los dos juegos compatibles. Si lo instalas en Condition Zero, copia el contenido de esa carpeta en el directorio `czero` de tu servidor.

## Instalación en Windows

1. Abre `bin/win32/cstrike` dentro del archivo descargado.
2. Copia su contenido en el directorio del mod de destino:
   - CS 1.6: `<server>/cstrike`
   - Condition Zero: `<server>/czero`
3. Comprueba que se ha sustituido `<mod>/dlls/mp.dll`.
4. Combina los archivos de configuración incluidos tal como se explica más abajo.

## Instalación en Linux

Descomprime el archivo y copia la build de Linux en el directorio del mod de destino. Por ejemplo, para CS 1.6:

```bash
unzip regamedll-bin-*.zip
cp -a bin/linux32/cstrike/. /path/to/server/cstrike/
```

Para Condition Zero, usa `/path/to/server/czero/` como destino. Comprueba que se ha sustituido `<mod>/dlls/cs.so` y que sigue siendo legible por la cuenta con la que se ejecuta el servidor.

## Combina los archivos de configuración

No sobrescribas a ciegas una configuración que ya hayas personalizado.

| Archivo | Para qué sirve |
| --- | --- |
| `game.cfg` | Ajustes de jugabilidad de ReGameDLL_CS y CVars ampliadas. |
| `game_init.cfg` | Ajustes iniciales de la GameDLL, como `bot_enable` y `hostage_ai_enable`. |
| `delta.lst` | Definiciones delta de red incluidas en la build actual. Mantén este archivo sincronizado con la versión instalada. |

En una primera instalación, copia los tres archivos. Al actualizar:

1. Sustituye la GameDLL y `delta.lst` por las versiones del lanzamiento.
2. Compara tus `game.cfg` y `game_init.cfg` con las nuevas copias.
3. Incorpora las CVars y los comentarios nuevos conservando los valores que hayas elegido.

Las plantillas más recientes del repositorio son [`game.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game.cfg) y [`game_init.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game_init.cfg).

## Arranca y verifica

Inicia el servidor y ejecuta:

```text
game version
```

Si el comando no existe, la nueva GameDLL no se ha cargado. Revisa el binario de la plataforma elegida, el directorio del mod de destino, los permisos de los archivos y las entradas `gamedll` / `gamedll_linux` del `liblist.gam` del mod.

## Actualizar una instalación existente

Sigue el mismo procedimiento que en una instalación nueva: detén el servidor, haz copia de seguridad, sustituye la GameDLL correcta y `delta.lst`, combina los cambios de configuración y verifica con `game version`.

Revisa las [notas de la versión](https://github.com/rehlds/ReGameDLL_CS/releases) antes de actualizar. Las nuevas versiones pueden añadir CVars o cambiar el comportamiento de la API, lo que afecta a ReAPI y a los plugins del servidor.

## Modo beta opcional

ReGameDLL_CS conserva un modo beta opcional con los últimos cambios derivados de la versión oficial de Counter-Strike de Valve. Añade `-beta` a la línea de comandos de HLDS solo cuando quieras probar ese modo de forma deliberada. Comprueba la compatibilidad de los plugins antes de usarlo en un servidor de producción.
