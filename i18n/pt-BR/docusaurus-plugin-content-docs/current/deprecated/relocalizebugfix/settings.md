---
id: relocalizebugfix-settings
title: Configurações
sidebar_position: 3
description: ReLocalizeBug Fix - plugin descontinuado do Metamod que bloqueava exploits de strings de localização nos nomes dos jogadores e no bate-papo em servidores ReHLDS.
slug: /relocalizebugfix/settings
---

<head>
  <title>ReLocalizeBug Fix: Configurações | ReHLDS</title>
</head>

# Configurações

:::warning Descontinuado

Mantido como referência. O plugin é incompatível com as versões modernas do ReHLDS — leia [O que é o ReLocalizeBug Fix?](./index.md).

:::

O ReLocalizeBug Fix **não tinha configuração**. Assim como o [LocalizeBug Fix](/pt-BR/docs/localizebugfix/settings) do qual foi derivado, ele não registrava cvars nem comandos de console, e não distribuía nenhum arquivo de configuração. Carregar o plugin já ativava a proteção; não havia nada a ajustar.

O substituto moderno dele, o [SafeNameAndChat](/pt-BR/docs/safenameandchat/settings), expõe onze cvars que tratam nomes e bate-papo separadamente, de modo que as proteções individuais podem ser desativadas quando entram em conflito com outra coisa.

:::note

Como não havia configurações, também não existe jeito de fazer este plugin se comportar em uma build do ReHLDS que ele não suporta. Se ele funcionar mal, a resposta é removê-lo, e não tentar contorná-lo por configuração.

:::
