---
id: refreelook
title: "ReFreeLook"
sidebar_label: ReFreeLook
sidebar_position: 1
description: ReFreeLook - módulo do AMX Mod X que permite aos administradores em modo espectador usar qualquer modo de câmera, independentemente do valor de `mp_forcecamera` ou `mp_forcechasecam`. Funciona apenas com a versão mais recente do `ReGameDLL_CS`.
slug: /refreelook
keywords:
  - refreelook
  - AMX Mod X
  - amxx
  - amx
  - module
tags:
  - refreelook
  - amxx module
last_update:
  date: 07/21/2025
  author: STAM
---

# O que é o ReFreeLook?

O ReFreeLook é um módulo do AMX Mod X que permite aos administradores com as flags de acesso adequadas assistirem livremente como espectadores, independentemente do valor de `mp_forcecamera` ou `mp_forcechasecam` imposto aos espectadores comuns. Ele é uma continuação, baseada no [ReGameDLL_CS](/pt-BR/docs/regamedll-cs), do [AdminFreeLook do Arkshine](https://github.com/Arkshine/AdminFreeLook).

Os servidores costumam travar os modos de câmera do espectador (`mp_forcecamera`/`mp_forcechasecam`) para impedir que jogadores espionem posições em favor dos companheiros de time. O ReFreeLook isenta dessa restrição os administradores que correspondem a um conjunto configurável de flags de acesso, de modo que a equipe mantenha liberdade total de câmera para moderar enquanto os espectadores comuns seguem limitados.

## Requisitos

- A versão **mais recente** do [ReGameDLL_CS](/pt-BR/docs/regamedll-cs/install) — o ReFreeLook aplica hooks em funções da GameDLL que só existem lá; ele não funciona com o HLDS/GameDLL puro.
- AMX Mod X.

Veja a [Instalação](./installing.md) e as [Configurações](./settings.md) para conhecer a única cvar que controla quem ganha a câmera livre.
