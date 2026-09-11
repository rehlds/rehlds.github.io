---
id: localizebugfix-settings
title: Configuración
sidebar_position: 3
description: LocalizeBug Fix es un plugin de Metamod archivado, obra de s1lentq, que bloqueaba los exploits de cadenas de localización en nombres de jugador y chat en HLDS.
slug: /localizebugfix/settings
---

<head>
  <title>LocalizeBug Fix: Configuración | ReHLDS</title>
</head>

# Configuración

:::warning Obsoleto

Se conserva como referencia. El proyecto está archivado: consulta [¿Qué es LocalizeBug Fix?](./index.md).

:::

LocalizeBug Fix **no tenía configuración**. No registraba cvars ni comandos de consola, y no incluía ningún archivo de configuración. Cargar el plugin activaba la protección; no había nada que ajustar.

Esa es una diferencia real con su sustituto moderno: [SafeNameAndChat](/es/docs/safenameandchat/settings) expone once cvars que permiten elegir qué caracteres se sanean en los nombres y cuáles en el chat. LocalizeBug Fix era todo o nada.

:::note

Si has llegado a esta página buscando suavizar el comportamiento del plugin porque interfiere con algo, no existe ningún ajuste para eso: las únicas opciones son cargarlo o no. En un servidor actual, usa [SafeNameAndChat](/es/docs/safenameandchat), donde sí se pueden desactivar protecciones concretas.

:::
