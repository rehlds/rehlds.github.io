---
id: safenameandchat
title: SafeNameAndChat
sidebar_position: 1
description: SafeNameAndChat es un plugin de Metamod de terceros que neutraliza los exploits de cadenas de localización e inyección de comandos en los nombres de jugador y los mensajes de chat.
slug: /safenameandchat
---

# ¿Qué es SafeNameAndChat?

SafeNameAndChat es un plugin de Metamod de [@WPMGPRoSToTeMa](https://github.com/WPMGPRoSToTeMa) que sanea los nombres de jugador y los mensajes de chat antes de que el motor los reenvíe, cerrando así toda una familia de exploits antiguos de GoldSrc en los que un nombre o un mensaje preparado a propósito hace fallar el cliente de otros jugadores o inyecta comandos de consola.

:::note

Este es un proyecto de terceros. Está fuera de la organización ReHLDS y no lo mantiene: informa de los problemas en su propio [repositorio](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/issues).

:::

## De qué protege

El cliente de GoldSrc trata ciertos caracteres de forma especial, y un jugador que los ponga en su nombre o en el chat puede aprovecharse de ello:

- **Cadenas de localización (`#`)**: un mensaje o un nombre con tokens como `#Spec_Help_Text` hace que el cliente que los recibe los resuelva como claves de localización. Según el token, los clientes se cierran.
- **Especificadores de formato (`%`)**: `%s` y similares llegando a una función de formato en el lado del cliente.
- **Ampersand (`&`) en los nombres**: mal tratado en algunas rutas de dibujado de nombres del cliente.
- **Inyección de comandos mediante `+` en los nombres**: un `+` seguido inmediatamente de una letra o un número reproduce la sintaxis de asignación `+comando`.

En lugar de expulsar al jugador o eliminar los caracteres, el plugin sustituye cada carácter problemático por su **equivalente Unicode de ancho completo**: `#` pasa a ser `＃`, y `%` pasa a ser `％`. Para una persona el texto se lee igual, pero el cliente ya no lo interpreta como un token. También puede eliminar caracteres no imprimibles y recortar los espacios del principio y del final.

## Requisitos

- Metamod (se recomienda Metamod-R).
- [ReHLDS](/es/docs/rehlds/install) no es obligatorio, pero se detecta en tiempo de ejecución y se aprovecha si está: el plugin consulta `VREHLDS_HLDS_API_VERSION001` al arrancar y, si responde, sigue una ruta consciente del motor.

El plugin se puede cargar y descargar en cualquier momento (`meta load` / `meta unload` funcionan sin reiniciar).

Consulta [Instalación](./installing.md) para ponerlo en marcha y [Configuración](./settings.md) para las once cvars `SNAC_*`.
