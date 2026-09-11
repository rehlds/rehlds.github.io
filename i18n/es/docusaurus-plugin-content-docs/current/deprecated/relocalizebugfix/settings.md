---
id: relocalizebugfix-settings
title: Configuración
sidebar_position: 3
description: ReLocalizeBug Fix es un plugin de Metamod obsoleto que bloqueaba los exploits de cadenas de localización en nombres de jugador y chat en servidores ReHLDS.
slug: /relocalizebugfix/settings
---

<head>
  <title>ReLocalizeBug Fix: Configuración | ReHLDS</title>
</head>

# Configuración

:::warning Obsoleto

Se conserva como referencia. El plugin es incompatible con las versiones modernas de ReHLDS: consulta [¿Qué es ReLocalizeBug Fix?](./index.md).

:::

ReLocalizeBug Fix **no tenía configuración**. Igual que el [LocalizeBug Fix](/es/docs/localizebugfix/settings) del que partía, no registraba cvars ni comandos de consola, y no incluía ningún archivo de configuración. Cargar el plugin activaba la protección; no había nada que ajustar.

Su sustituto moderno, [SafeNameAndChat](/es/docs/safenameandchat/settings), expone once cvars que cubren por separado los nombres y el chat, de modo que se pueden desactivar protecciones concretas cuando entran en conflicto con otra cosa.

:::note

Como no había ajustes, tampoco hay forma de hacer que este plugin se comporte bien en una build de ReHLDS que no admite. Si falla, la respuesta es quitarlo, no intentar configurarlo para sortear el problema.

:::
