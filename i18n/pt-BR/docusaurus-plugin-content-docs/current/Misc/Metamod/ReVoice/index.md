---
id: revoice
title: ReVoice
sidebar_position: 1
description: ReVoice - plugin do Metamod, transcodificador de voz que corrige o bate-papo por voz entre clientes Steam e não Steam em servidores ReHLDS.
slug: /revoice
---

# O que é o ReVoice?

:::warning Descontinuado

O ReVoice foi marcado como **descontinuado** pelos mantenedores dele. O repositório continua disponível e compilável, mas o projeto não está em desenvolvimento ativo — teste bem antes de depender dele em produção e verifique no [rastreador de issues](https://github.com/rehlds/ReVoice/issues) quais problemas são conhecidos antes de colocá-lo no ar.

:::

O ReVoice é um plugin do [Metamod](https://github.com/rehlds/Metamod-R) para o [ReHLDS](/pt-BR/docs/rehlds) que corrige a compatibilidade do bate-papo por voz entre clientes Steam e não Steam em um mesmo servidor. Clientes Steam reais e clientes não Steam (dos protocolos 47/48, o tipo que o [ReUnion](/pt-BR/docs/reunion) permite conectar) não usam nativamente o mesmo codec de voz, então, sem o ReVoice, a conversa por voz entre os dois grupos pode ficar quebrada ou funcionar em uma direção só. O ReVoice transcodifica os dados de voz entre os codecs (Speex, Opus e SILK) para que os dois grupos consigam se ouvir.

## Requisitos

- [ReHLDS](/pt-BR/docs/rehlds/install) e Metamod (o Metamod-R é o recomendado).
- A `sv_voiceenable` precisa estar ativada no servidor — o ReVoice corrige a compatibilidade entre codecs, mas não ativa o bate-papo por voz por conta própria.
- Costuma ser instalado junto do [ReUnion](/pt-BR/docs/reunion/install), já que é ele que cria a mistura de clientes Steam e não Steam em primeiro lugar.

Veja a [Instalação](./installing.md).
