---
id: hitbox-fixer
title: Hitbox Fixer
sidebar_position: 1
description: Hitbox Fixer - plugin de terceiros para Metamod que corrige as hitboxes de jogador incorretas do lado do servidor no Counter-Strike 1.6, no Half-Life e no Adrenaline Gamer.
slug: /hitbox-fixer
---

# O que é o Hitbox Fixer?

O Hitbox Fixer é um plugin do Metamod feito por [@Garey27](https://github.com/Garey27) que corrige as hitboxes de jogador do lado do servidor no Counter-Strike 1.6, no Half-Life e no Adrenaline Gamer. Em um servidor sem a correção, as caixas contra as quais o motor testa os tiros podem ficar longe de onde o modelo do jogador realmente está, de modo que acertos são contabilizados como erros (e vice-versa).

:::note

Este é um projeto de terceiros. Ele fica fora da organização ReHLDS e não é mantido por ela — relate os problemas no [rastreador de issues](https://github.com/Garey27/hitbox_fixer/issues) dele.

:::

## O que ele corrige

- Hitboxes simplesmente quebradas quando `numblends == 1` — isso abrange as animações de agachar e de ficar em pé durante a recarga de uma arma ou a instalação do C4.
- O backtracking das hitboxes com base na posição do lado do cliente, para que o servidor teste contra o ponto onde o atirador de fato viu o alvo.
- A posição errada das hitboxes ao nascer, que decorre do backtracking corrigido.

O autor indica que o suporte completo ao `setupbones` para entidades que não são jogadores ainda está pendente, então as correções acima valem para os jogadores.

## Requisitos

Um destes:

- [ReHLDS](/pt-BR/docs/rehlds/install) na versão `3.10` ou superior — recomendado.
- HLDS original, build `8648`.

Além do Metamod (o Metamod-R é o recomendado) para carregar o plugin.

## Mods compatíveis

Counter-Strike 1.6, Half-Life e Adrenaline Gamer. O autor aceita pedidos para outros mods pelo rastreador de issues.

Veja a [Instalação](./installing.md) para configurá-lo e as [Configurações](./settings.md) para conhecer a única cvar que ele acrescenta.
