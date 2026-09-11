---
id: metamod-r-settings
title: Configuración
sidebar_position: 3
description: Metamod-R es una versión optimizada del Metamod original que mejora el rendimiento y la compatibilidad en servidores de Half-Life 1.
slug: /metamod-r/settings
---

<head>
  <title>Metamod-R: Configuración | ReHLDS</title>
</head>

# Configuración

## Cómo enlazar plugins en plugins.ini
Como ejemplo usaremos un plugin ficticio llamado `metaPlugin`. La instalación de otros plugins es idéntica.
 
* Crea el archivo `plugins.ini` en la carpeta `addons\metamod` (si aún no existe)
* Crea una carpeta para el nuevo plugin dentro de `addons`._Por ejemplo, la carpeta **meta Plugin**._
* * Coloca tu plugin `metaPlugin.dll` (o `meta Plugin.so`) en la carpeta recién creada `addons\metamod\metaplugins`.
* Abre el archivo `plugins.ini` de la carpeta `metamod` con cualquier editor de texto.
* * Para enlazar el plugin `metaPlugin.dll`(o `meta Plugin.so`), escribe las líneas siguientes en `plugins file.ini`:

_Para servidores en Windows:_
```
win32 addons\metaPlugin\metaPlugin.dll
```
_Para servidores en Linux:_
```
linux addons/metaPlugin/metaPlugin.so
```
* Guarda `plugins.ini` e inicia el servidor.
* La instalación ha **terminado**.

_Puedes comprobar el funcionamiento del plugin con el comando `meta list` en la consola del servidor._
![](https://i.imgur.com/1fVXBzc.png)

si el resultado no es el esperado,
![](https://i.imgur.com/nGXAokG.png)
consulta [Troubbleshouting](https://github.com/rehlds/metamod-r/wiki/Troubbleshouting).

# Lista de comandos de consola
El comando se escribe precedido de `meta`. _Por ejemplo, `meta version`_.

```
     version                - muestra información sobre la versión de metamod
     list                   - muestra la lista de plugins cargados
     game                   - muestra información sobre la gamedll (lista de msg registrados, su id y su tamaño)
     cmds                   - lista de comandos de consola añadidos por plugins de terceros
     cvars                  - lista de cvars añadidas por plugins de terceros
     refresh                - recarga metamod-r
     config                 - muestra la configuración de config.ini
     load <name>            - busca y carga el plugin en la ruta indicada
     unload <plugin>        - descarga el plugin indicado
     reload <plugin>        - recarga el plugin indicado
     info <plugin>          - muestra información detallada del plugin indicado
     pause <plugin>         - pausa el funcionamiento del plugin
     unpause <plugin>       - reanuda el funcionamiento de todos los plugins pausados
     retry <plugin>         - reintenta la carga de un plugin que falló
     clear <plugin>         - descarga de memoria los plugins que fallaron
     force_unload <plugin>  - fuerza la descarga del plugin
     require <plugin>       - apaga el servidor si el plugin indicado no está en marcha
```

### debuglevel 
 
| **variable** | debuglevel 
| :----- | -----:
| **tipo** | int
| **valores** | de 0 a 42
| **predeterminado** | 0
| **se sobrescribe con** |  `+localinfo mm_debug <número>`
| **ejemplo** | `debuglevel 0`
| **descripción** | Define el nivel inicial de depuración de metamod (equivalente a la cvar "meta_debug"). Donde `<número>` es un entero de 0 en adelante. Lo normal es que el valor predeterminado sea 0. Si hlds se ejecuta con "-dev", el predeterminado es 3.

### gamedll
| **variable** | gamedll
| :----- | -----:
| **tipo** | string
| **valores** | `<ruta>`
| **predeterminado** | null
| **se sobrescribe con** |  `+localinfo mm_gamedll <ruta>`
| **ejemplo** |  `gamedll dlls/hl.dll`, `gamedll ../podbot/podbot.dll`, `gamedll /home/bots/dlls/mybot.dll`
| **descripción** | Sobrescribe la gamedll detectada automáticamente, sobre todo para bots. Donde `<ruta>` es una ruta absoluta o relativa al directorio del juego. El valor predeterminado está vacío y la gamedll se reconoce automáticamente a partir de ese directorio.

### exec_cfg 
| **variable** | exec_cfg 
| :----- | -----:
| **Тип** | string
| **tipo** | `<archivo>`
| **predeterminado** | `addons/metamod/exec.cfg`
| **se sobrescribe con** |  `+localinfo mm_execcfg <archivo>`
| **ejemplo** |  `exec_cfg configs/debugging.cfg`, `exec_cfg ../clan/match.cfg`
| **descripción** | Sobrescribe el nombre predeterminado del archivo que contiene los comandos de hlds que se ejecutan justo después de cargar Metamod. Donde `<archivo>` es una ruta relativa al directorio del juego. ¡Atención! NO puede ser una ruta absoluta, ya que hlds no ejecuta "exec" sobre rutas absolutas.
 
### clientmeta 
| **variable** | clientmeta 
| :----- | -----:
| **tipo** | bool
| **valores** | `<yes/no>`
| **predeterminado** | `yes`
| **se sobrescribe con** |  `+localinfo mm_clientmeta <yes/no>`
| **ejemplo** |  `clientmeta yes`, `clientmeta no`
| **descripción** | Permite desactivar o activar los comandos de cliente de Metamod ('meta list' y 'meta version'). Ajuste adicional para "Metamod+All-Mod-Support Patch".

### dynalign_list
| **variable** | clientmeta 
| :----- | -----:
| **tipo** | bool
| **valores** | `<yes/no>`
| **predeterminado** | `no`
| **se sobrescribe con** |   
| **ejemplo** |  `dynalign_list yes`, `dynalign_list no`
| **descripción** | Permite desactivar o activar la alineación dinámica de la lista de plugins en la salida. **ATENCIÓN**: esta opción afecta a la lectura incorrecta por parte de HLSW en la pestaña `Metamod Plugins`.
