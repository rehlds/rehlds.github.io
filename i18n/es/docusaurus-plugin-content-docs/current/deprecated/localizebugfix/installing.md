---
id: localizebugfix-install
title: Instalación
sidebar_position: 2
description: LocalizeBug Fix es un plugin de Metamod archivado, obra de s1lentq, que bloqueaba los exploits de cadenas de localización en nombres de jugador y chat en HLDS.
slug: /localizebugfix/install
---

<head>
  <title>LocalizeBug Fix: Instalación | ReHLDS</title>
</head>

# Instalación

:::warning Obsoleto

Estas instrucciones se conservan como referencia. El proyecto está archivado: consulta [¿Qué es LocalizeBug Fix?](./index.md) y usa [SafeNameAndChat](/es/docs/safenameandchat/install) en un servidor actual.

:::

LocalizeBug Fix era un plugin de Metamod y se instalaba como cualquier otro.

## 1. Consigue LocalizeBug Fix

La última versión es la [`2.4`](https://github.com/s1lentq/localizebugfix/releases), de septiembre de 2015 (`localizebugfix_2_4.7z`). El repositorio incluye además binarios ya compilados de las versiones `2.0`, `2.3` y `2.4` en `bin/`.

## 2. Coloca el plugin

Copia el binario que corresponda a tu plataforma en una carpeta dentro de `addons`:

| Plataforma | Archivo |
| --- | --- |
| Windows | `localizebugfix.dll` |
| Linux | `localizebugfix_mm_i386.so` |

## 3. Registra el plugin en Metamod

Añade la línea correspondiente a `<mod>/addons/metamod/plugins.ini`.

:::note

El plugin se declaraba cargable solo al arrancar (`PT_STARTUP`) y nunca descargable (`PT_NEVER`), así que `meta load` y `meta unload` no funcionaban con él: tenía que estar presente al iniciar el servidor, y retirarlo exigía un reinicio.

:::

## 4. Verifica

Inicia el servidor y ejecuta `meta list`: el plugin se registraba como `LocalizeBug Fix`.
