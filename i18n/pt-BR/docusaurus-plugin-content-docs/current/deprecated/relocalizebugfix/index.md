---
id: relocalizebugfix
title: ReLocalizeBug Fix
sidebar_position: 1
description: ReLocalizeBug Fix - plugin descontinuado do Metamod que bloqueava exploits de strings de localização nos nomes dos jogadores e no bate-papo em servidores ReHLDS.
slug: /relocalizebugfix
---

# O que é o ReLocalizeBug Fix?

:::warning Descontinuado

O ReLocalizeBug Fix está **descontinuado e é incompatível com as versões modernas do ReHLDS**. Rodá-lo em uma build atual pode causar instabilidade e comportamentos inesperados. Ele está [descontinuado desde 2017](https://github.com/rehlds/rehlds/issues/328#issuecomment-275837883).

Para essa classe de exploit em um servidor atual, use o [SafeNameAndChat](/pt-BR/docs/safenameandchat).

:::

O ReLocalizeBug Fix era um plugin do Metamod que resolvia bugs relacionados à localização em servidores dedicados de Half-Life — o exploit em que tokens de localização iniciados por `#` no nome de um jogador ou em uma mensagem de bate-papo derrubam os clientes que os recebem.

Ele foi desenvolvido como uma extensão do [LocalizeBug Fix do s1lentq](/pt-BR/docs/localizebugfix), adaptada para o ReHLDS. O seu único lançamento público, a `v2.8`, saiu em novembro de 2016 e foi a primeira versão compatível com o ReHLDS.

## Por que ele foi descontinuado

O próprio motor do ReHLDS seguiu em frente. À medida que o motor ganhou correções e proteções próprias, a abordagem do plugin deixou de corresponder ao que o motor faz, e ele foi marcado como descontinuado no ano seguinte. Ele nunca foi atualizado para as builds do ReHLDS que vieram depois.

O aviso no próprio README do projeto é claro: usar este plugin com versões mais novas do ReHLDS pode levar a instabilidade e comportamentos inesperados.

## O que usar no lugar

O [SafeNameAndChat](/pt-BR/docs/safenameandchat) cobre a mesma classe de exploit e é mantido. Ele também adota uma abordagem mais suave — substitui os caracteres problemáticos por sósias, em vez de descartar ou bloquear a mensagem, de modo que os jogadores mantêm os seus nomes.

Veja a [Instalação](./installing.md) e as [Configurações](./settings.md) para saber como era o plugin em uso.
