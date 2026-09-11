---
id: revoice
title: ReVoice
sidebar_position: 1
description: ReVoice es un plugin de Metamod, un transcodificador de voz que corrige el chat de voz entre clientes sin Steam y con Steam en servidores ReHLDS.
slug: /revoice
---

# ¿Qué es ReVoice?

:::warning Obsoleto

Sus mantenedores han marcado ReVoice como **obsoleto**. El repositorio sigue disponible y se puede compilar, pero ya no está en desarrollo activo: pruébalo a fondo antes de confiar en él en producción y revisa las [incidencias](https://github.com/rehlds/ReVoice/issues) en busca de problemas conocidos antes de desplegarlo.

:::

ReVoice es un plugin de [Metamod](https://github.com/rehlds/Metamod-R) para [ReHLDS](/es/docs/rehlds) que corrige la compatibilidad del chat de voz entre clientes con Steam y sin Steam en un mismo servidor. Los clientes auténticos de Steam y los que no lo son (protocolos 47/48, los que [ReUnion](/es/docs/reunion) permite conectar) no usan de forma nativa el mismo códec de voz, así que sin ReVoice el chat de voz entre ambos grupos puede fallar o funcionar en un solo sentido. ReVoice transcodifica los datos de voz entre códecs (Speex, Opus y SILK) para que ambos grupos puedan oírse.

## Requisitos

- [ReHLDS](/es/docs/rehlds/install) y Metamod (se recomienda Metamod-R).
- `sv_voiceenable` debe estar activado en el servidor: ReVoice corrige la compatibilidad de códecs, pero no activa por sí mismo el chat de voz.
- Suele desplegarse junto a [ReUnion](/es/docs/reunion/install), porque es este el que crea la mezcla de clientes con y sin Steam.

Consulta [Instalación](./installing.md).
