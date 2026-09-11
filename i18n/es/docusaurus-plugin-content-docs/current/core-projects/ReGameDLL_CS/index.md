---
id: regamedll-cs
title: ReGameDLL_CS
sidebar_position: 1
description: Panorama actual, notas de compatibilidad, descargas y siguientes pasos de ReGameDLL_CS para administradores de servidores y desarrolladores.
slug: /regamedll-cs
---

# ReGameDLL_CS

ReGameDLL_CS es un sustituto de la GameDLL de servidor de Counter-Strike (`mp.dll` en Windows y `cs.so` en Linux), obtenido mediante ingeniería inversa y mantenido de forma activa. Parte de la GameDLL original de Counter-Strike de la build 6153 beta de HLDS, y aporta correcciones, nuevos ajustes de servidor, soporte integrado de bots y una API ampliada para mods y plugins.

El proyecto admite el contenido oficial de servidor de Valve para:

- Counter-Strike 1.6 (`cstrike`)
- Counter-Strike: Condition Zero (`czero`)

Usa la [última versión estable](https://github.com/rehlds/ReGameDLL_CS/releases/latest) en servidores de producción. Las builds de desarrollo están disponibles en el [flujo de trabajo de GitHub Actions](https://github.com/rehlds/ReGameDLL_CS/actions/workflows/build.yml) del proyecto, pero pueden incluir cambios que aún no han llegado a una versión estable.

## Qué aporta ReGameDLL_CS

- Correcciones de errores de jugabilidad y del lado del servidor.
- Reglas de juego adicionales y CVars configurables.
- Soporte integrado de zBot, con modos de cuota de bots y herramientas de navegación.
- IA de rehenes de Condition Zero mejorada, que también puede instalarse en CS 1.6.
- Nuevos comandos de servidor como `game version`, `endround` y `swapteams`.
- Una API de GameDLL ampliada que usan proyectos como [ReAPI](https://github.com/rehlds/ReAPI).

La lista completa y actualizada de ajustes se mantiene en el [`game.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game.cfg) del repositorio.

## Aviso de compatibilidad

:::warning Compatibilidad binaria

ReGameDLL_CS no es compatible a nivel binario con la GameDLL original de Valve, porque se compila con compiladores distintos. Los plugins que inspeccionan o parchean el binario original por firmas o desplazamientos, como algunos basados en Orpheu, pueden fallar o provocar el cierre del servidor.

Da preferencia a APIs con soporte, como ReAPI, y prueba todo plugin que dependa del binario antes de desplegarlo en un servidor de producción.

:::

Los plugins habituales de AMX Mod X y Metamod que usan interfaces documentadas no suelen verse afectados por este aviso.

## Archivos de una versión

El archivo estable `regamedll-bin-*.zip` contiene builds separadas para `win32` y `linux32`:

| Plataforma | GameDLL | Ruta dentro del archivo |
| --- | --- | --- |
| Windows | `mp.dll` | `bin/win32/cstrike/dlls/mp.dll` |
| Linux x86 | `cs.so` | `bin/linux32/cstrike/dlls/cs.so` |

La carpeta de cada plataforma incluye además `game.cfg`, `game_init.cfg` y `delta.lst`. Los perfiles y sonidos de zBot para CS 1.6 se distribuyen aparte; consulta [Uso de bots](./bots/).

## Qué consultar a continuación

- [Instalar o actualizar ReGameDLL_CS](./install/)
- [Configurar las reglas de juego y los comandos de servidor](./settings/)
- [Instalar y manejar zBot](./bots/)
- [Compilar ReGameDLL_CS desde el código fuente](./compilling/)
- [Solucionar problemas de un servidor](./troubbleshouting/)

Después de instalarlo, ejecuta este comando en la consola del servidor:

```text
game version
```

Si la instalación es correcta, se mostrarán la versión de la build de ReGameDLL_CS, su fecha de compilación y la dirección del proyecto.
