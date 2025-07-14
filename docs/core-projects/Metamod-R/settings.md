---
id: metamod-r-settings
title: Settings
sidebar_position: 3
description: Metamod-r is an optimized version of the original Metamod, enhancing performance and compatibility for Half-Life 1 servers.
slug: /metamod-r/settings
---

# Settings

## Connection of the plugins in plugins.ini
As example we will use a mythical plugin `metaPlugin`. Installation of other plugins is similar.
 
* Create the `plugins.ini` file in the `addons\metamod`folder (in case of absence of this file)
* Create a folder for the new plugin in the `addons` folder._For example, **meta Plugin** folder._
* * Put your plugin `metaPlugin.dll` (or `meta Plugin.so`) to the created folder `addons\metamod\metaplugins`.
* Open the `plugins.ini` file from the `metamod` folder with any text editor.
* * To connect the plugin `metaPlugin.dll`(or `meta Plugin.so`) write the following lines to the `plugins file.ini`:

_For Windows versions of your server:_
```
win32 addons\metaPlugin\metaPlugin.dll
```
_For Linux versions of your server:_
```
linux addons/metaPlugin/metaPlugin.so
```
* Save your file `plugins.ini` and launch the server.
* The installation is **completed**.

_You can check plugin performance via `meta list` command in the server console ._
![](https://i.imgur.com/1fVXBzc.png)

in case of negative result,
![](https://i.imgur.com/nGXAokG.png)
apply to [Troubbleshouting](https://github.com/theAsmodai/metamod-r/wiki/Troubbleshouting).

# List of console commands
Write command with `meta` word. _For example, `meta version`_.

```
     version                - information of metamod version
     list                   - list of uploaded plugins
     game                   - information about gamedll (list of registered msg, id and size)
     cmds                   - list of console commands, added from third-party plugins
     cvars                  - cvar list, added from third-party plugins
     refresh                - reloading of metamod-r
     config                 - configuration from config.ini 
     load <name>            - find and upload plugin on specified path
     unload <plugin>        - upload the plugin
     reload <plugin>        - reload the plugin
     info <plugin>          - information about the plugin
     pause <plugin>         - pause the plugin
     unpause <plugin>       - resume the operation of all installed plugins
     retry <plugin>         - retry download of a failed plugins
     clear <plugin>         - upload failed plugins from the memory
     force_unload <plugin>  - forced unloading of plugin
     require <plugin>       - turn off the server if the specified plugin doesn't work
```

### debuglevel 
 
| **var** | debuglevel 
| :----- | -----:
| **type** | int
| **contains** | from 0 to 42
| **default** | 0
| **overridden** |  `+localinfo mm_debug <число>`
| **example** | `debuglevel 0`
| **description** | Sets the initial debugging level for metamod (same as cvar "meta_debug"). Where `<number>` is an integer, 0 and up. Default is normally 0.  If hlds is run with "-dev", default is 3.

### gamedll
| **var** | gamedll
| :----- | -----:
| **type** | string
| **contains** | `<path>`
| **default** | null
| **overridden** |  `+localinfo mm_gamedll <путь>`
| **example** |  `gamedll dlls/hl.dll`, `gamedll ../podbot/podbot.dll`, `gamedll /home/bots/dlls/mybot.dll`
| **description** | Overrides the auto-detected gamedll, in particular for bots. Where `<path>` is an absolute path, or a path relative to the gamedir. Default is empty, with gamedll being auto-recognized based on the gamedir.

### exec_cfg 
| **var** | exec_cfg 
| :----- | -----:
| **Тип** | string
| **type** | `<file>`
| **default** | `addons/metamod/exec.cfg`
| **overridden** |  `+localinfo mm_execcfg <файл>`
| **example** |  `exec_cfg configs/debugging.cfg`, `exec_cfg ../clan/match.cfg`
| **description** | Overrides the default filename containing hlds commands to run just after loading Metamod. Where `<file>` is a path relative to the gamedir.  Note!  This CANNOT be an absolute path, as hlds will not "exec" absolute pathnames.
 
### clientmeta 
| **var** | clientmeta 
| :----- | -----:
| **type** | bool
| **contains** | `<yes/no>`
| **default** | `yes`
| **overridden** |  `+localinfo mm_clientmeta <yes/no>`
| **example** |  `clientmeta yes`, `clientmeta no`
| **description** | Setting to disable or enable Metamod's client commands ('meta list' and 'meta version'). Extra setting for "Metamod+All-Mod-Support Patch". 

### dynalign_list
| **var** | clientmeta 
| :----- | -----:
| **type** | bool
| **contains** | `<yes/no>`
| **default** | `no`
| **overridden** |   
| **example** |  `dynalign_list yes`, `dynalign_list no`
| **description** | Setting to disable or enable plugins list dynamic alignment into output.  **NOTE**: This option affect's on incorrect parse from HLSW on Tab `Metamod Plugins`.
