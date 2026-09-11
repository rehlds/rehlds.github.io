---
id: safenameandchat
title: SafeNameAndChat
sidebar_position: 1
description: SafeNameAndChat - plugin de terceiros para Metamod que neutraliza exploits de strings de localização e de injeção de comandos nos nomes dos jogadores e nas mensagens de bate-papo.
slug: /safenameandchat
---

# O que é o SafeNameAndChat?

O SafeNameAndChat é um plugin do Metamod feito por [@WPMGPRoSToTeMa](https://github.com/WPMGPRoSToTeMa) que higieniza os nomes dos jogadores e as mensagens de bate-papo antes de o motor repassá-los, fechando uma família de exploits antigos do GoldSrc em que um nome ou uma mensagem forjada derruba o cliente dos outros jogadores ou injeta comandos de console.

:::note

Este é um projeto de terceiros. Ele fica fora da organização ReHLDS e não é mantido por ela — relate os problemas no [rastreador de issues](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/issues) dele.

:::

## Do que ele protege

O cliente do GoldSrc trata certos caracteres de forma especial, e um jogador que os coloque em um nome ou em uma linha de bate-papo pode abusar disso:

- **Strings de localização (`#`)** — uma mensagem ou um nome que contenha tokens como `#Spec_Help_Text` faz o cliente que os recebe resolvê-los como chaves de localização. Dependendo do token, o cliente trava.
- **Especificadores de formato (`%`)** — `%s` e companhia chegando a uma função de formatação do lado do cliente.
- **E comercial (`&`) nos nomes** — tratado de forma incorreta em alguns caminhos de renderização de nomes no cliente.
- **Injeção de comandos pelo `+` nos nomes** — um `+` seguido imediatamente de uma letra ou de um dígito reproduz a sintaxe de bind `+comando`.

Em vez de expulsar o jogador ou remover os caracteres, o plugin substitui cada caractere problemático pelo **equivalente Unicode de largura completa** — o `#` vira `＃`, e o `%` vira `％`. O texto continua igual aos olhos de uma pessoa, mas o cliente deixa de tratá-lo como um token. Ele também pode descartar caracteres não imprimíveis e remover os espaços no começo e no fim.

## Requisitos

- Metamod (o Metamod-R é o recomendado).
- O [ReHLDS](/pt-BR/docs/rehlds/install) não é obrigatório, mas é detectado em tempo de execução e usado quando está presente — o plugin consulta a `VREHLDS_HLDS_API_VERSION001` na inicialização e adota um caminho que leva o motor em conta caso ela responda.

O plugin pode ser carregado e descarregado a qualquer momento (`meta load` / `meta unload` funcionam sem reiniciar).

Veja a [Instalação](./installing.md) para configurá-lo e as [Configurações](./settings.md) para conhecer as onze cvars `SNAC_*`.
