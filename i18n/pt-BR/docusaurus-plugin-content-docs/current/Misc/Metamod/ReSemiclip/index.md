---
id: resemiclip
title: ReSemiclip
sidebar_position: 1
description: ReSemiclip - plugin do Metamod que controla a possibilidade de atravessar outros jogadores. O módulo Semiclip de `joaquimandrade` foi usado como referência.
slug: /resemiclip
---

# O que é o ReSemiclip?

O ReSemiclip é um plugin do [Metamod](https://github.com/rehlds/Metamod-R) para servidores de Counter-Strike que permite aos jogadores atravessarem uns aos outros sob condições configuráveis, em vez de bloquearem o movimento alheio. É uma versão mantida do clássico conceito de "Semiclip", tendo o [módulo Semiclip do joaquimandrade](https://github.com/joaquimandrade) como implementação de referência.

## O que ele controla

- **A quem se aplica** — a todos, só aos Terroristas, só aos Contraterroristas ou só aos companheiros de time.
- **Quando se aplica** — por uma janela de tempo fixa a partir do início do round (útil logo depois do nascimento, quando os jogadores costumam travar uns nos outros) ou permanentemente.
- **Agachar** — permite que os jogadores pulem em cima de um companheiro agachado, em vez de ficarem bloqueados.
- **Retorno visual** — transparência opcional para os jogadores próximos o bastante para se atravessarem, de modo que o efeito fique visível em vez de surpreender.
- **Comportamento dos tiros** — opcionalmente permite que os disparos atravessem companheiros de time que estejam em semiclip no momento.

Tudo isso é configurável globalmente e também por mapa ou por prefixo de mapa. Veja as [Configurações](./settings.md) para conhecer o formato completo do `config.ini`.

## Requisitos

O ReSemiclip aplica hooks em funções tanto do nível do motor ([ReHLDS](/pt-BR/docs/rehlds/install)) quanto do nível da GameDLL ([ReGameDLL_CS](/pt-BR/docs/regamedll-cs/install)), então os dois são necessários sob o Metamod. Veja a [Instalação](./installing.md).
