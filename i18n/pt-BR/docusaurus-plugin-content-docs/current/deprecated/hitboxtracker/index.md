---
id: hitboxtracker
title: hitboxtracker
sidebar_position: 1
description: hitboxtracker - ferramenta de desenvolvimento descontinuada do ReHLDS que desenhava no cliente as posições das hitboxes calculadas pelo servidor.
slug: /hitboxtracker
---

# O que é o hitboxtracker?

:::warning Descontinuado

O hitboxtracker está **descontinuado e não é mais mantido**. Ele está documentado aqui apenas como referência — não o instale em um servidor atual.

Para ter hitboxes corretas em um servidor moderno, use o [Hitbox Fixer](/pt-BR/docs/hitbox-fixer) do @Garey27, que a organização ReHLDS indica como a alternativa ativa. Note que os dois não são equivalentes: o hitboxtracker apenas *mostrava* o problema, enquanto o Hitbox Fixer o *corrige*.

:::

O hitboxtracker era uma ferramenta de desenvolvimento, e não um recurso de servidor. Ele consistia em um plugin do Metamod no servidor e um módulo correspondente no cliente, e desenhava na tela do cliente a posição real das hitboxes **conforme o servidor as calculava** — ao lado de onde o cliente achava que elas estavam.

Isso tornava visível uma classe de problemas que, de outro modo, seria invisível: quando os dois conjuntos de caixas não coincidem, tiros que parecem acertos são contabilizados como erros. Diagnosticar isso sem uma ferramenta dessas significa adivinhar.

## Por que ele foi descontinuado

O projeto foi arquivado em favor de um plugin que corrige as hitboxes de fato, em vez de apenas desenhá-las. A abordagem de renderização também dependia de builds específicas do cliente e de um lançador próprio, o que envelheceu mal.

## Como ele funcionava

O plugin do servidor enviava os dados calculados das hitboxes ao cliente pelo canal de mensagens `svc_director` — as versões anteriores usavam o delta, o que mudou na `v1.1`. O módulo do cliente então renderizava essas caixas por meio de dois modos extras acrescentados à cvar padrão `r_drawentities`.

Veja as [Configurações](./settings.md) para conhecer esses modos, e a [Instalação](./installing.md) para ver o que ele exigia.
