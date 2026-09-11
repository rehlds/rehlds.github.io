---
id: resemiclip-install
title: Instalación
sidebar_position: 2
description: ReSemiclip es un plugin de Metamod que controla la posibilidad de atravesar a otros jugadores. Se tomó como referencia el módulo Semiclip de `joaquimandrade`.
slug: /resemiclip/install
---

<head>
  <title>ReSemiclip: Instalación | ReHLDS</title>
</head>

# Instalación

ReSemiclip es un plugin de Metamod y necesita que [ReHLDS](/es/docs/rehlds/install), [ReGameDLL_CS](/es/docs/regamedll-cs/install) y Metamod (se recomienda Metamod-R) ya estén instalados y funcionando: engancha funciones de ambas capas.

## 1. Consigue ReSemiclip

Descarga `resemiclip-*.zip` desde la [página de versiones](https://github.com/rehlds/ReSemiclip/releases) o [compílalo desde el código fuente](./compilling.md). El archivo de la versión ya contiene una carpeta `addons/resemiclip/` lista para usar, con el binario y un `config.ini` predeterminado.

## 2. Descomprime en el directorio de tu mod

Copia la carpeta `addons/resemiclip/` del archivo dentro de `<mod>/addons/resemiclip/`. Acabarás con:

| Ruta | Para qué sirve |
| --- | --- |
| `addons/resemiclip/resemiclip_mm.dll` o `resemiclip_mm_i386.so` | El binario del plugin (según la plataforma: conserva solo el que corresponda a tu servidor). |
| `addons/resemiclip/config.ini` | Ajustes predeterminados para todo el servidor. |
| `addons/resemiclip/maps/` | Archivos de ejemplo para sobrescribir ajustes por mapa y por prefijo. |

## 3. Registra el plugin en Metamod

Añade estas líneas a `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\resemiclip\resemiclip_mm.dll
linux addons/resemiclip/resemiclip_mm_i386.so
```

## 4. Configura

Edita `addons/resemiclip/config.ini` para los valores predeterminados de todo el servidor y, si quieres, añade ajustes por mapa o por prefijo en `addons/resemiclip/maps/`. El formato completo y el orden de carga están en [Configuración](./settings.md).

## 5. Verifica

Inicia el servidor y ejecuta `meta list`: `ReSemiclip` debería aparecer como cargado. Ejecuta `semiclip_option` sin argumentos en la consola para mostrar los ajustes activos en ese momento.
