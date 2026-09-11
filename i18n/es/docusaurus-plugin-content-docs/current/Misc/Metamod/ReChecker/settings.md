---
id: rechecker-settings
title: "ReChecker: Configuración"
sidebar_label: Configuración
sidebar_position: 3
description: ReChecker es un plugin de Metamod que permite comprobar los archivos del cliente por su nombre y su hash md5.
slug: /rechecker/settings
keywords:
  - rechecker
  - metamod
  - plugin
  - settings
tags:
  - rechecker
  - settings
last_update:
  date: 07/21/2025
  author: STAM
---

# Configuración

ReChecker se configura mediante `addons/rechecker/resources.ini` (junto a su binario) y una única cvar de consola.

## Formato de `resources.ini`

Cada regla es una línea con una ruta, un hash (o una palabra clave) y un comando que se ejecuta cuando coincide, más indicadores opcionales:

```text
path to file        hash          "exec cmd"      [FLAGS]
"../opengl32.dll"    3cc7f256      "kick [userid]"
```

### Campo del hash

| Valor | Significado |
| --- | --- |
| Un hash hexadecimal (por ejemplo, `3cc7f256`) | Coincide con ese hash exacto. Bastan 4 bytes (8 caracteres hexadecimales): no hace falta el MD5 completo. |
| `UNKNOWN` | Coincide con cualquier hash no cubierto por otra regla para esa misma ruta. |
| `MISSING` | Coincide cuando el cliente no ha enviado el archivo. |

### Indicadores

| Indicador | Efecto |
| --- | --- |
| `BREAK` | Deja de comprobar el resto de reglas para este cliente en cuanto esta coincide. |
| `IGNORE` | Incluye este hash concreto en la lista blanca: no se ejecuta ningún comando. |

### Marcadores en los comandos

Disponibles dentro de la cadena `"exec cmd"`:

| Marcador | Valor |
| --- | --- |
| `[name]` | Apodo del cliente. |
| `[ip]` | Dirección IP del cliente. |
| `[id]` | Índice del cliente. |
| `[userid]` | Userid del cliente. |
| `[steamid]` | SteamID del cliente. |
| `[file_name]` | Ruta del archivo comprobado. |
| `[file_hash]` | Hash de la respuesta del cliente para ese archivo. |
| `[file_md5hash]` | Hash MD5 completo de la respuesta del cliente para ese archivo. |

### Reglas de ejemplo

```ini
; Kick on a known bad file hash, stop checking further rules for this client
"../demoplayer.dll"    ad6d0e43    "kick [userid] 'WallHack Detected'"    BREAK

; Whitelist a known-good hash for the same path
"../demoplayer.dll"    7ef5b581    IGNORE

; Log (but don't kick) any hash of a file you're not tracking yet
"../demoplayer.dll"    UNKNOWN     "echo ' -> file: ([file_name]), md5hex: ([file_md5hash]) for ([name])'"

; Kick when a file is expected but missing
"../opengl32.dll"      MISSING     "kick [userid] 'OpenGL32 Missing'"     BREAK
```

`resources.ini` admite una marca BOM en UTF-8 y líneas de comentario que empiezan por `;`. Parte de la plantilla [`dist/resources.ini`](https://github.com/rehlds/ReChecker/blob/master/dist/resources.ini) del proyecto, que ya incluye firmas de varios archivos de trampas históricamente conocidos, y amplíala tú mismo.

## Variable de consola

| Cvar | Valor predeterminado | Descripción |
| --- | --- | --- |
| `rch_log` | `0` | Nivel de detalle del registro. `0` lo desactiva; los valores más altos registran más detalle. |

## Registros

Con `rch_log` activado, ReChecker escribe archivos de registro diarios en `addons/rechecker/logs/`.
