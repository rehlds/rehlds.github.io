---
id: localizebugfix
title: LocalizeBug Fix
sidebar_position: 1
description: LocalizeBug Fix - plugin arquivado do Metamod, feito por s1lentq, que bloqueava exploits de strings de localização nos nomes dos jogadores e no bate-papo em servidores HLDS.
slug: /localizebugfix
---

# O que é o LocalizeBug Fix?

:::warning Descontinuado

O LocalizeBug Fix está **arquivado e não é mais mantido**. O repositório foi arquivado no GitHub em 2015 e não aceita alterações. Ele está documentado aqui apenas como referência.

Para essa classe de exploit em um servidor atual, use o [SafeNameAndChat](/pt-BR/docs/safenameandchat).

:::

O LocalizeBug Fix era um plugin do Metamod feito por [@s1lentq](https://github.com/s1lentq) que fechava um exploit do GoldSrc em que tokens de localização embutidos no nome de um jogador ou em uma mensagem de bate-papo derrubavam todos os clientes que os recebiam.

Ele é a primeira geração dessa correção. A organização ReHLDS depois o estendeu como [ReLocalizeBugFix](/pt-BR/docs/relocalizebugfix) — que hoje também está descontinuado.

## O exploit que ele bloqueava

O cliente do GoldSrc resolve os tokens iniciados por `#` em certas mensagens como chaves de localização. O autor documentou dois vetores:

- **Bate-papo.** Uma mensagem que passa pelo `client_print_color` / `client_print` contendo tokens, por exemplo:

  ```text
  s1lent :#Spec_Help_Text Hello people! #Spec_Duck
  ```

  Todos os clientes que recebiam a mensagem travavam.

- **Nome do jogador pelo `ShowMenu`.** Um nome como:

  ```text
  name "q#Buy#Buy#Buy#Buy#Buy#Buy#Buy"
  ```

  travava os clientes quando eles abriam o menu da lista de jogadores.

## Por que ele foi descontinuado

O plugin era voltado ao HLDS original e foi substituído pelo ReLocalizeBugFix nos servidores ReHLDS; esse sucessor, por sua vez, foi [descontinuado em 2017](https://github.com/rehlds/rehlds/issues/328#issuecomment-275837883). Os servidores modernos obtêm essa proteção pelo [SafeNameAndChat](/pt-BR/docs/safenameandchat), que higieniza os caracteres problemáticos em vez de bloquear a mensagem.

Veja a [Instalação](./installing.md) e as [Configurações](./settings.md) para saber como era o plugin em uso.
