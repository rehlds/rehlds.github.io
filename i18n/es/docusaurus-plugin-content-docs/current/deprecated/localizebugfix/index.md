---
id: localizebugfix
title: LocalizeBug Fix
sidebar_position: 1
description: LocalizeBug Fix es un plugin de Metamod archivado, obra de s1lentq, que bloqueaba los exploits de cadenas de localización en nombres de jugador y chat en HLDS.
slug: /localizebugfix
---

# ¿Qué es LocalizeBug Fix?

:::warning Obsoleto

LocalizeBug Fix está **archivado y sin mantenimiento**. El repositorio se archivó en GitHub en 2015 y no admite cambios. Se documenta aquí solo como referencia.

Para esta clase de exploit en un servidor actual, usa [SafeNameAndChat](/es/docs/safenameandchat).

:::

LocalizeBug Fix era un plugin de Metamod de [@s1lentq](https://github.com/s1lentq) que cerraba un exploit de GoldSrc en el que los tokens de localización incrustados en el nombre o en el mensaje de chat de un jugador hacen fallar a todos los clientes que los reciben.

Es la primera generación de esta corrección. La organización ReHLDS la amplió después como [ReLocalizeBugFix](/es/docs/relocalizebugfix), que a su vez está hoy obsoleto.

## El exploit que bloqueaba

El cliente de GoldSrc resuelve como claves de localización los tokens con prefijo `#` en ciertos mensajes. El autor documentó dos vías:

- **Chat.** Un mensaje enviado a través de `client_print_color` / `client_print` que contenga tokens, por ejemplo:

  ```text
  s1lent :#Spec_Help_Text Hello people! #Spec_Duck
  ```

  Todos los clientes que recibían el mensaje se cerraban.

- **Nombre de jugador vía `ShowMenu`.** Un nombre como:

  ```text
  name "q#Buy#Buy#Buy#Buy#Buy#Buy#Buy"
  ```

  hacía fallar a los clientes al abrir el menú con la lista de jugadores.

## Por qué está obsoleto

El plugin apuntaba al HLDS estándar y fue sustituido por ReLocalizeBugFix en los servidores con ReHLDS; ese sucesor quedó a su vez [obsoleto en 2017](https://github.com/rehlds/rehlds/issues/328#issuecomment-275837883). Los servidores modernos obtienen esta protección de [SafeNameAndChat](/es/docs/safenameandchat), que sanea los caracteres problemáticos en lugar de bloquear el mensaje.

Cómo era usarlo está en [Instalación](./installing.md) y [Configuración](./settings.md).
