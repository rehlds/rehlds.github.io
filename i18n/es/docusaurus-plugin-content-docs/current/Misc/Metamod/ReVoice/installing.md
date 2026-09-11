---
id: revoice-install
title: Instalación
sidebar_position: 2
description: ReVoice es un plugin de Metamod, un transcodificador de voz que corrige el chat de voz entre clientes sin Steam y con Steam en servidores ReHLDS.
slug: /revoice/install
---

<head>
  <title>ReVoice: Instalación | ReHLDS</title>
</head>

# Instalación

:::warning Obsoleto

Sus mantenedores han marcado ReVoice como **obsoleto**: consulta [¿Qué es ReVoice?](./index.md) antes de desplegarlo en un servidor de producción.

:::

ReVoice es un plugin de Metamod y necesita que [ReHLDS](/es/docs/rehlds/install) y Metamod (se recomienda Metamod-R) ya estén instalados y funcionando.

## 1. Consigue ReVoice

Descarga una versión desde la [página de versiones](https://github.com/rehlds/ReVoice/releases) o [compílalo desde el código fuente](./compilling.md).

## 2. Coloca el plugin

Crea una carpeta `revoice` dentro de `addons`, en el directorio de tu mod, y pon ahí el binario que corresponda a tu plataforma:

| Plataforma | Archivo | Destino |
| --- | --- | --- |
| Windows | `revoice_mm.dll` | `<mod>/addons/revoice/revoice_mm.dll` |
| Linux | `revoice_mm_i386.so` | `<mod>/addons/revoice/revoice_mm_i386.so` |

## 3. Registra el plugin en Metamod

Añade estas líneas a `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\revoice\revoice_mm.dll
linux addons/revoice/revoice_mm_i386.so
```

## 4. Añade el archivo de configuración

Copia el [`data/revoice.cfg`](https://github.com/rehlds/ReVoice/blob/master/data/revoice.cfg) del proyecto junto al binario: `<mod>/addons/revoice/revoice.cfg`. ReVoice lo ejecuta con `exec` al arrancar, así que usa la sintaxis normal de configuración de servidor (asignaciones de cvars y comentarios con `//`). Consulta [Configuración](./settings.md).

## 5. Activa el chat de voz y verifica

Comprueba que `sv_voiceenable` está activado en el servidor. Arráncalo y ejecuta `meta list`: `Revoice` debería aparecer como cargado. Ejecuta `rev version` y `rev status` en la consola para confirmar que está activo y ver su estado actual.
