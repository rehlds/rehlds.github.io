---
id: reamxmodx
title: ReAMXModX
sidebar_position: 1
description: ReAMXModX - fork obsoleto do AMX Mod X que acrescentou suporte às APIs do ReHLDS e do ReGameDLL antes de o AMX Mod X oficial fazê-lo.
slug: /reamxmodx
---

# O que é o ReAMXModX?

:::warning Descontinuado

O ReAMXModX está **obsoleto**. O AMX Mod X oficial passou a ter suporte próprio ao ReHLDS, o que eliminou toda a razão de existir deste fork.

Use o [AMX Mod X](https://www.amxmodx.org/) da AlliedModders. Tudo o que este fork oferecia está hoje no projeto oficial, mantido e com lançamentos.

:::

O ReAMXModX era um fork do AMX Mod X, importado em agosto de 2016 da árvore de desenvolvimento `1.8.3` (`git5067`). O objetivo dele era ensinar ao AMX Mod X as APIs do ReHLDS e do ReGameDLL numa época em que o projeto oficial não sabia nada sobre elas.

## O que ele mudava

Os commits do fork são estreitos e específicos. No núcleo do AMX Mod X e em vários módulos, ele acrescentou a cola de SDK para as interfaces do ReHLDS e do ReGameDLL — o `mod_rehlds_api.cpp` e o `mod_gamedll_api.cpp` aparecem no núcleo e nos módulos `cstrike`, `csx`, `engine` e `fakemeta` —, o que levou o suporte até a API `3.x` do ReHLDS e a API `5.x` do ReGameDLL no commit final.

Junto disso, ele trazia algumas correções:

- Um vazamento de memória no `unregister_forward`.
- Um bug de bate-papo envolvendo a localização.
- Correções de alinhamento de dados nas builds para Linux.

## Por que ele está obsoleto

O AMX Mod X oficial passou a ter suporte ao ReHLDS, então um fork à parte carregando esse suporte deixou de ser útil. O trabalho aqui terminou em dezembro de 2016, e o projeto não publicou nenhum lançamento — não há binário para instalar, apenas o código congelado em um instantâneo de nove anos atrás do AMX Mod X.

Rodá-lo hoje significaria usar um AMX Mod X de 2016, sem tudo o que o projeto oficial lançou desde então, em troca de um suporte ao ReHLDS que o oficial já oferece de qualquer forma.

Veja a [Instalação](./installing.md), as [Configurações](./settings.md) e a [Compilação](./compilling.md) para saber o que significava trabalhar com ele.
