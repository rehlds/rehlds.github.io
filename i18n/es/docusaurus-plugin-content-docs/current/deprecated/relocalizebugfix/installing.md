---
id: relocalizebugfix-install
title: Instalación
sidebar_position: 2
description: ReLocalizeBug Fix es un plugin de Metamod obsoleto que bloqueaba los exploits de cadenas de localización en nombres de jugador y chat en servidores ReHLDS.
slug: /relocalizebugfix/install
---

<head>
  <title>ReLocalizeBug Fix: Instalación | ReHLDS</title>
</head>

# Instalación

:::warning Obsoleto

Estas instrucciones se conservan solo como referencia. El plugin es **incompatible con las versiones modernas de ReHLDS**: consulta [¿Qué es ReLocalizeBug Fix?](./index.md) y usa [SafeNameAndChat](/es/docs/safenameandchat/install) en su lugar.

:::

ReLocalizeBug Fix era un plugin de Metamod y se instalaba como cualquier otro.

## 1. Consigue ReLocalizeBug Fix

La última versión es la [`v2.8`](https://github.com/rehlds/relocalizebugfix/releases) (`relocalizebugfix-v2.8.zip`). El repositorio incluye además binarios ya compilados en `bin/`.

## 2. Coloca el plugin

Copia el binario que corresponda a tu plataforma en `<mod>/addons/relocalizebugfix/`:

| Plataforma | Archivo |
| --- | --- |
| Windows | `relocalizebugfix_mm.dll` |
| Linux | `relocalizebugfix_mm_i386.so` |

## 3. Registra el plugin en Metamod

Añade estas líneas a tu archivo `<mod>/addons/metamod/plugins.ini`:

```ini
win32 addons\relocalizebugfix\relocalizebugfix_mm.dll
linux addons/relocalizebugfix/relocalizebugfix_mm_i386.so
```

:::note

El plugin se declaraba cargable solo al arrancar (`PT_STARTUP`) y nunca descargable (`PT_NEVER`), así que `meta load` y `meta unload` no funcionaban con él: tenía que estar presente al iniciar el servidor, y retirarlo exigía un reinicio.

:::

## 4. Verifica

Inicia el servidor y ejecuta `meta list`: el plugin se registraba como `ReLocalizeBug Fix`. En una build moderna de ReHLDS, lo esperable es que falle en lugar de funcionar; eso es la incompatibilidad descrita en la [página de introducción](./index.md), no un error de instalación.
