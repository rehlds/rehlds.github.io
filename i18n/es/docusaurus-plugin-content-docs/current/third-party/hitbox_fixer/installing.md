---
id: hitbox-fixer-install
title: Instalación
sidebar_position: 2
description: Hitbox Fixer es un plugin de Metamod de terceros que corrige las cajas de impacto del lado del servidor en Counter-Strike 1.6, Half-Life y Adrenaline Gamer.
slug: /hitbox-fixer/install
---

<head>
  <title>Hitbox Fixer: Instalación | ReHLDS</title>
</head>

# Instalación

Hitbox Fixer es un plugin de Metamod. Necesita [ReHLDS](/es/docs/rehlds/install) `3.10`+ (o el HLDS original, build `8648`) y Metamod ya instalados y funcionando.

## 1. Consigue Hitbox Fixer

Descarga `hitbox_fix-bin-*.zip` desde la [página de versiones](https://github.com/Garey27/hitbox_fixer/releases) o [compílalo desde el código fuente](./compilling.md).

## 2. Descomprime en el directorio de tu mod

El archivo ya viene organizado para un servidor. Copia su `addons/` dentro de `<mod>/addons/`:

| Ruta dentro del archivo | Para qué sirve |
| --- | --- |
| `addons/hitboxfixer/hitbox_fix_mm.dll` | Binario del plugin para Windows. |
| `addons/hitboxfixer/hitbox_fix_mm_i386.so` | Binario del plugin para Linux. |
| `addons/hitboxfixer/hbf.cfg` | Archivo de configuración, se lee al arrancar. |

Conserva solo el binario que corresponda a la plataforma de tu servidor.

:::note

El archivo contiene además `vis/hitbox_vis.asi`, un módulo de visualización del lado del cliente para inspeccionar las cajas de impacto dentro del juego. No forma parte de la instalación del servidor ni hace falta para que la corrección funcione: déjalo fuera salvo que estés depurando cajas de impacto en un cliente.

:::

## 3. Registra el plugin en Metamod

Añade estas líneas a `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\hitboxfixer\hitbox_fix_mm.dll
linux addons/hitboxfixer/hitbox_fix_mm_i386.so
```

## 4. Verifica

Inicia el servidor y ejecuta `meta list` en la consola: el plugin debería aparecer como cargado. Si no es así, comprueba que el motor es ReHLDS `3.10`+ o HLDS `8648`; otras builds no son compatibles.

Consulta [Configuración](./settings.md) para `hbf_enabled`.
