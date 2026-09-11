---
id: rechecker-install
title: "ReChecker: Instalación"
sidebar_label: Instalación
sidebar_position: 2
description: ReChecker es un plugin de Metamod que permite comprobar los archivos del cliente por su nombre y su hash md5.
slug: /rechecker/install
keywords:
  - rechecker
  - metamod
  - plugin
  - install
tags:
  - rechecker
  - install
last_update:
  date: 07/21/2025
  author: STAM
---

# Instalación

ReChecker es un plugin de Metamod y necesita que [ReHLDS](/es/docs/rehlds/install) y Metamod (se recomienda Metamod-R) ya estén instalados y funcionando.

## 1. Consigue ReChecker

Descarga una versión desde la [página de versiones](https://github.com/rehlds/ReChecker/releases) o [compílalo desde el código fuente](./compilling.md).

## 2. Coloca el plugin

Crea una carpeta `rechecker` dentro de `addons`, en el directorio de tu mod, y pon ahí el binario que corresponda a tu plataforma:

| Plataforma | Archivo | Destino |
| --- | --- | --- |
| Windows | `rechecker_mm.dll` | `<mod>/addons/rechecker/rechecker_mm.dll` |
| Linux | `rechecker_mm_i386.so` | `<mod>/addons/rechecker/rechecker_mm_i386.so` |

## 3. Añade el archivo de reglas

Copia la plantilla [`dist/resources.ini`](https://github.com/rehlds/ReChecker/blob/master/dist/resources.ini) del proyecto junto al binario:

```text
<mod>/addons/rechecker/resources.ini
```

ReChecker lee `resources.ini` del mismo directorio en el que está su propio binario, no de la raíz del mod. El formato del archivo está en [Configuración](./settings.md).

## 4. Registra el plugin en Metamod

Añade estas líneas a `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\rechecker\rechecker_mm.dll
linux addons/rechecker/rechecker_mm_i386.so
```

## 5. Verifica

Inicia el servidor y ejecuta `meta list` en la consola: `Rechecker` debería aparecer como cargado. Si no se carga, comprueba que el servidor ejecuta realmente ReHLDS (ReChecker usa la API ampliada del motor de ReHLDS y se negará a cargarse sobre un HLDS normal).
