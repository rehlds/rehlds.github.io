---
id: safenameandchat-install
title: Instalación
sidebar_position: 2
description: SafeNameAndChat es un plugin de Metamod de terceros que neutraliza los exploits de cadenas de localización e inyección de comandos en los nombres de jugador y los mensajes de chat.
slug: /safenameandchat/install
---

<head>
  <title>SafeNameAndChat: Instalación | ReHLDS</title>
</head>

# Instalación

SafeNameAndChat es un plugin de Metamod y necesita que Metamod (se recomienda Metamod-R) ya esté instalado y funcionando.

## 1. Consigue SafeNameAndChat

Descarga los binarios desde la [página de versiones](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/releases) o [compílalo desde el código fuente](./compilling.md). Cada versión trae dos archivos:

| Plataforma | Archivo |
| --- | --- |
| Windows | `SafeNameAndChat.dll` |
| Linux | `SafeNameAndChat.so` |

## 2. Coloca el plugin

Crea una carpeta `SafeNameAndChat` dentro de `addons`, en el directorio de tu mod, y pon ahí el binario que corresponda a tu plataforma:

```text
<mod>/addons/SafeNameAndChat/SafeNameAndChat.dll
<mod>/addons/SafeNameAndChat/SafeNameAndChat.so
```

## 3. Añade el archivo de configuración

Copia el [`SafeNameAndChat.cfg`](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/blob/master/SafeNameAndChat.cfg) del proyecto junto al binario. El plugin construye la ruta a partir de su propia ubicación y ejecuta con `exec` el `SafeNameAndChat.cfg` que encuentre ahí al arrancar, así que el archivo tiene que estar en la misma carpeta que el plugin, no en la raíz del mod.

## 4. Registra el plugin en Metamod

Añade estas líneas a `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\SafeNameAndChat\SafeNameAndChat.dll
linux addons/SafeNameAndChat/SafeNameAndChat.so
```

## 5. Verifica

Inicia el servidor y ejecuta `meta list`: `SafeNameAndChat` debería aparecer como cargado (su etiqueta de registro es `SNAC`). Consulta `SNAC_Version` en la consola para confirmar qué versión se está ejecutando.

Como el plugin está marcado como cargable en cualquier momento, también puedes ejecutar `meta load addons/SafeNameAndChat/SafeNameAndChat.so` en un servidor en marcha en lugar de reiniciarlo.

Las cvars están en [Configuración](./settings.md).
