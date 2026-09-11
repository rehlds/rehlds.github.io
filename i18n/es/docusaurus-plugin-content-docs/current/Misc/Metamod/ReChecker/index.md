---
id: rechecker
title: "ReChecker"
sidebar_label: ReChecker
sidebar_position: 1
description: ReChecker es un plugin de Metamod que permite comprobar los archivos del cliente por su nombre y su hash md5.
slug: /rechecker
keywords:
  - rechecker
  - metamod
  - plugin
tags:
  - rechecker
  - metamod plugin
last_update:
  date: 07/21/2025
  author: STAM
---

# ¿Qué es ReChecker?

ReChecker es un plugin de [Metamod](https://github.com/rehlds/Metamod-R) para [ReHLDS](/es/docs/rehlds) que inspecciona los archivos que un cliente envía al conectarse o al descargar, a través del sistema de recursos y consistencia del motor, y los compara con una lista de reglas que tú defines. Cuando la ruta y el hash de un archivo (o el hecho de que falte o no se reconozca) coinciden con una regla, ReChecker ejecuta el comando de consola que elijas, normalmente `kick` o un mensaje de registro.

Sirve para detectar bibliotecas de trampas conocidas y archivos inyectados por su firma estática (ruta más un prefijo corto del MD5), con independencia de la lógica antitrampas que funcione por otro lado.

## Cómo funciona

Para cada recurso relevante que transfiere un cliente, ReChecker lo compara con las reglas de `resources.ini`:

- Una regla puede coincidir con un **hash concreto**, con `UNKNOWN` (cualquier cosa que no se reconozca explícitamente) o con `MISSING` (el archivo no llegó a enviarse).
- Una regla que coincide ejecuta el comando configurado, sustituyendo marcadores como `[userid]`, `[name]`, `[file_name]` y `[file_md5hash]`.
- El indicador `BREAK` detiene la comprobación del resto de reglas para ese cliente en cuanto una coincide; `IGNORE` incluye un hash concreto en la lista blanca.

El formato completo de `resources.ini` está en [Configuración](./settings.md).

## Qué incluye

El proyecto trae un `resources.ini` inicial con firmas de varios archivos de trampas históricamente conocidos (wallhacks, aimbots, inyectores de DLL). Tómalo como punto de partida que tú mismo mantienes: no es una base de datos de trampas que se actualice de forma continua.

## Requisitos

ReChecker depende de la API ampliada del motor de [ReHLDS](/es/docs/rehlds/install): no se carga sobre un HLDS normal. También requiere tener Metamod instalado previamente (se recomienda Metamod-R). Consulta [Instalación](./installing.md).
