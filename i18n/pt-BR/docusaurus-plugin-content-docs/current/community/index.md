---
id: community
title: Utilitários da comunidade
sidebar_position: 1
description: Utilitários criados pela comunidade em torno do ReHLDS - listados como referência, sem serem produzidos nem suportados pela organização ReHLDS.
slug: /community
---

# Utilitários da comunidade

Esta página lista utilitários de terceiros que a comunidade construiu em torno do ReHLDS. Eles **não são produzidos, revisados nem suportados pela organização ReHLDS** e aparecem aqui apenas para que quem os encontrar saiba do que se trata.

:::warning

Tudo o que está nesta página é usado por sua conta e risco. Essas ferramentas não passam por auditoria da organização, e um problema causado por uma delas pertence ao rastreador de issues dela, não ao do ReHLDS. Se você quer uma configuração que consiga entender e para a qual haja suporte, siga o [guia de instalação do ReHLDS](/pt-BR/docs/rehlds/install) e instale cada componente por conta própria.

:::

## rehlds-installer

O [lukasenka/rehlds-installer](https://github.com/lukasenka/rehlds-installer) é um script de shell que monta uma pilha de servidor completa em um sistema Linux baseado em Debian de uma só vez — ReHLDS, Metamod-R, AMX Mod X, ReGameDLL_CS e ReUnion juntos, baixando as versões atuais de cada um.

**A quem se destina:** distribuições da família Debian — Debian, Ubuntu, Linux Mint, Pop!\_OS, Kali.

**Por que você talvez queira olhar para ele:** reduz uma instalação manual de várias etapas a um único comando, o que é atraente para um primeiro servidor.

Pontos a considerar antes de executá-lo:

- **Ele roda como root e é baixado pela rede.** O uso documentado baixa o script para `/root/` e o executa. Leia o script antes de rodá-lo, como você faria com qualquer instalador desse formato.
- **Ele distribui um binário pré-compilado.** O repositório inclui um `cs.so` compilado junto do script. Esse binário não é gerado pela organização ReHLDS e não está coberto pela assinatura dos lançamentos dela — os [lançamentos do ReHLDS](/pt-BR/docs/rehlds/install) são assinados com GPG e podem ser verificados, mas um binário embutido em um repositório de terceiros não pode ser conferido da mesma forma.
- **Nenhuma licença é declarada.** O repositório não tem arquivo `LICENSE`, então os termos para reutilizá-lo ou redistribuí-lo são indefinidos.
- **É o projeto de uma pessoa só.** Ele recebe atualizações com frequência, mas não há uma organização por trás nem compromisso de suporte.
- **Somente em inglês.** O script e a documentação dele não são traduzidos.

Se você usá-lo, trate o resultado como um ponto de partida e verifique cada componente depois — `meta version`, `amxx version`, `amxx modules` e `game version` no console do servidor vão dizer o que de fato acabou instalado.

:::note

Incluir uma ferramenta nesta página não é um endosso. Se você mantém um utilitário relacionado ao ReHLDS e quer vê-lo listado, abra um pull request no [rehlds.github.io](https://github.com/rehlds/rehlds.github.io) — espere que ele seja descrito de forma direta, ressalvas incluídas, do mesmo jeito que tudo acima.

:::
