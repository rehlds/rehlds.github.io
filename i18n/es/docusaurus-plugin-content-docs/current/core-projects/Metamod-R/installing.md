---
id: metamod-r-install
title: Instalación
sidebar_position: 2
description: Metamod-R es una versión optimizada del Metamod original que mejora el rendimiento y la compatibilidad en servidores de Half-Life 1.
slug: /metamod-r/install
---

<head>
  <title>Metamod-R: Instalación | ReHLDS</title>
</head>

# Instalación

Consulta primero la [lista de juegos compatibles](/es/docs/metamod-r/supported-games) y comprueba que el tuyo aparece en ella. _Si no está, no te desanimes. Después de instalarlo puedes probar el funcionamiento de **Metamod-r** con tu mod `no compatible` tras un ajuste fino, siguiendo [este artículo](/es/docs/metamod-r/settings). Existe la posibilidad de que el juego arranque._

# Compatibilidad

**Metamod-r no es compatible con el `HLDS` original. Es necesario tener instalado [ReHLDS](https://github.com/rehlds/ReHLDS) (`API 3.1+`). No hay ninguna garantía de que el producto funcione en otro entorno.**

| HLDS| [ReHLDS](https://github.com/rehlds/ReHLDS)| SO
|---------| -------|  -------|  
| :x: | `API 3.1+` | ![](https://i.imgur.com/AzhAYR4.png) ![](https://i.imgur.com/t23p9tU.png) |  

# Instalación en el servidor de juego
* Descarga la última versión de _**Metamod-r**_ [![Download](https://camo.githubusercontent.com/2b15ec2fc402e02b66fde9eab7e896406caeddac/687474703a2f2f7265686c64732e6f72672f76657273696f6e2f6d6574616d6f642d2d722e737667)](http://teamcity.rehlds.org/guestAuth/downloadArtifacts.html?buildTypeId=Metamod_Publish&buildId=lastSuccessful) en el lugar que prefieras.
* Descomprime la carpeta _**addons**_ del archivo zip descargado dentro de la carpeta de tu mod.![](https://i.imgur.com/ptx3MZx.png)
_Si tienes dudas al identificar el nombre del directorio, consulta la tabla resumen que encontrarás **[aquí](/es/docs/metamod-r/troubbleshouting)**._
* Busca el archivo `liblist.gam` en la carpeta del mod, haz una copia de seguridad (si quieres) y ábrelo con el editor de texto que prefieras.
* Localiza en `liblist.gam` las líneas que contienen `gamedll` y `gamedll_linux`. _Por ejemplo, en `Half-Life 1` tienen este aspecto:_
```
gamedll "dlls\hl.dll"
gamedll_linux "dlls/hl.so"
```
_y en `Counter-Strike 1.6`, este otro:_

```
gamedll "dlls\mp.dll"
gamedll_linux "dlls/cs.so"
```
* Sustituye en la línea correspondiente la ruta por la de metamod-r:

_Para servidores en Windows:_
```
gamedll "addons\metamod\metamod.dll"
```
_Para servidores en Linux:_
```
gamedll_linux "addons/metamod/metamod_i386.so"
```
* Guarda los cambios en `liblist.gam`.
* La instalación de **Metamod-r** ha terminado.

# Comprobación

Tras instalar correctamente **Metamod-r**, puedes verificar su funcionamiento arrancando el servidor de juego.

**Metamod-r** funciona:
![](https://i.imgur.com/VScngBr.png)
Si no es así:
![](https://i.imgur.com/HPKRiBF.png)
consulta la [guía de solución de problemas](/es/docs/metamod-r/troubbleshouting).
