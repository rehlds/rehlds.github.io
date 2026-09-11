---
id: refreelook-install
title: "ReFreeLook: Instalación"
sidebar_label: Instalación
sidebar_position: 2
description: ReFreeLook es un módulo de AMX Mod X que permite a los administradores en modo espectador usar cualquier modo de cámara, sea cual sea el valor de `mp_forcecamera` o `mp_forcechasecam`. Solo funciona con la última versión de `ReGameDLL_CS`.
slug: /refreelook/install
keywords:
  - refreelook
  - AMX Mod X
  - amxx
  - amx
  - module
  - install
  - instalación
tags:
  - refreelook
  - install
  - instalación
last_update:
  date: 07/21/2025
  author: STAM
---

# Instalación

ReFreeLook es un **módulo** de AMX Mod X (no un plugin de Metamod) y necesita que la última versión de [ReGameDLL_CS](/es/docs/regamedll-cs/install) y AMX Mod X ya estén instalados y funcionando.

## 1. Consigue ReFreeLook

Descarga una versión desde la [página de versiones](https://github.com/rehlds/ReFreeLook/releases) o [compílalo desde el código fuente](./compilling.md).

## 2. Detén el servidor

Detén el servidor antes de instalar o actualizar, tanto si es una primera instalación como si es una actualización.

## 3. Coloca el módulo

Copia el binario que corresponda a tu plataforma en la carpeta de módulos de AMX Mod X de tu mod:

| Plataforma | Archivo | Destino |
| --- | --- | --- |
| Windows | `refreelook_amxx.dll` | `<mod>/addons/amxmodx/modules/refreelook_amxx.dll` |
| Linux | `refreelook_amxx_i386.so` | `<mod>/addons/amxmodx/modules/refreelook_amxx_i386.so` |

## 4. Registra el módulo

Abre `<mod>/addons/amxmodx/configs/modules.ini` y añade una línea al final:

```text
refreelook
```

## 5. Configura las cvars del juego

ReFreeLook solo tiene sentido cuando las cámaras de espectador están realmente restringidas:

- Pon `mp_forcechasecam` y `mp_forcecamera` en el **mismo** valor.
- Comprueba que `mp_fadetoblack` vale `0`.

## 6. Configura los permisos de administrador

Pon en `afl_admin_access_flags` los permisos que deben quedar exentos de la restricción de cámara. La lista de permisos y el valor predeterminado están en [Configuración](./settings.md).

## 7. Arranca el servidor

Inicia el servidor y comprueba que el módulo se ha cargado (busca `refreelook` en la lista de módulos de AMX Mod X, en la consola o en el registro).
