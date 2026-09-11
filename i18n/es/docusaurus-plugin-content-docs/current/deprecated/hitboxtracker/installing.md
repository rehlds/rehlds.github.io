---
id: hitboxtracker-install
title: Instalación
sidebar_position: 2
description: hitboxtracker es una herramienta de desarrollo obsoleta de ReHLDS que dibujaba en el cliente la posición de las cajas de impacto calculada por el servidor.
slug: /hitboxtracker/install
---

<head>
  <title>hitboxtracker: Instalación | ReHLDS</title>
</head>

# Instalación

:::warning Obsoleto

Estas instrucciones se conservan como referencia. hitboxtracker ya no se mantiene: consulta [¿Qué es hitboxtracker?](./index.md) antes de aplicar nada de esto y usa [Hitbox Fixer](/es/docs/hitbox-fixer) en un servidor actual.

:::

hitboxtracker necesitaba **ambas** mitades instaladas: un plugin en el servidor y un módulo en el cliente. Instalar solo una no hacía nada.

## Requisitos

- Cliente: Counter-Strike 1.6 build `4554` o posterior.
- Servidor: Metamod `1.20` o posterior.

## 1. Consigue hitboxtracker

Descarga `hitboxtracker.zip` desde la [página de versiones](https://github.com/rehlds/hitboxtracker/releases). El archivo contiene las dos mitades:

| Ruta dentro del archivo | Para qué sirve |
| --- | --- |
| `server/cstrike/addons/hitboxtracker/hitboxtracker_mm.dll` | Plugin del servidor, Windows. |
| `server/cstrike/addons/hitboxtracker/hitboxtracker_mm_i386.so` | Plugin del servidor, Linux. |
| `client/hitboxtracker.dll` | Módulo de dibujado del cliente. |
| `client/cs.exe` | El lanzador propio del proyecto, que carga ese módulo. |

## 2. Instala el plugin del servidor

Copia el binario que corresponda a tu plataforma en `<mod>/addons/hitboxtracker/` y regístralo en `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\hitboxtracker\hitboxtracker_mm.dll
linux addons/hitboxtracker/hitboxtracker_mm_i386.so
```

## 3. Instala el módulo del cliente

Pon `hitboxtracker.dll` y `cs.exe` en el directorio de trabajo del cliente de Counter-Strike 1.6 y arranca el juego mediante `cs.exe` en lugar del acceso directo habitual: es el lanzador el que carga el módulo.

## 4. Verifica

Entra en un servidor que ejecute el plugin y pon `r_drawentities` en `6` o `7`. Si no aparece el dibujado adicional de cajas, o bien el cliente se arrancó sin el lanzador, o bien el plugin del servidor no está cargado: comprueba `meta list` en el servidor.

Lo que hace cada valor de `r_drawentities` está en [Configuración](./settings.md).
