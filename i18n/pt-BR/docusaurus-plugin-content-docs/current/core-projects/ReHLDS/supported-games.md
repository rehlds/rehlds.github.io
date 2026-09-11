---
id: rehlds-supported-games
title: Jogos compatíveis
sidebar_position: 1
description: O ReHLDS é uma versão reconstruída do HLDS original, com mais segurança, mais desempenho e melhores recursos de modding para jogos como Half-Life e Counter-Strike 1.6.
slug: /rehlds/supported-games
---

<head>
  <title>ReHLDS: Jogos compatíveis | ReHLDS</title>
</head>

# Jogos compatíveis

O ReHLDS substitui o **motor** do HLDS em si (`swds.dll` / `engine_i486.so`), e não a GameDLL de um mod específico. Por causa disso, "jogos compatíveis" é, na verdade, uma questão de duas coisas: com qual build do HLDS o ReHLDS é compatível e em qual plataforma você o executa. Qualquer mod de GoldSrc que rode naquela build do HLDS — Half-Life, Counter-Strike 1.6, Condition Zero, Day of Defeat, Team Fortress Classic, Deathmatch Classic e mods de terceiros — também roda sobre o ReHLDS.

## Compatibilidade com as builds do motor

| Build do HLDS | Situação |
| --- | --- |
| Build pré-anniversary da Steam (versão do motor ≤ 8684), baixada pelo `steamcmd` | :heavy_check_mark: Totalmente compatível |
| Builds antigas 5xxx e anteriores baixadas pelo antigo `hldsupdatetool` | :x: Incompatível |

:::warning

O ReHLDS não é compatível com a plataforma antiga 5xxx e anteriores instalada pelo `hldsupdatetool`. Confirme que você está rodando a build pré-anniversary descrita na [Instalação](./installing.md) antes de relatar um problema.

:::

## Plataformas suportadas

| Plataforma | Binário | Requisito de CPU |
| --- | --- | --- |
| Windows | `swds.dll` | SSE, SSE2, SSE3 (SSE4.1 / SSE4.2 usados quando disponíveis) |
| Linux (32 bits) | `engine_i486.so` | SSE, SSE2, SSE3 (SSE4.1 / SSE4.2 usados quando disponíveis) |

O ReHLDS é distribuído junto com o **ReHLTV**, uma build aprimorada do proxy/relay do Half-Life TV, então as configurações de HLTV recebem as mesmas correções e os mesmos limites ampliados sem precisar de um download separado.

## Compatibilidade com mods e plugins

Como o ReHLDS substitui apenas a camada do motor, a compatibilidade no nível do mod (GameDLL, plugins de Metamod, plugins de AMX Mod X) costuma depender do próprio mod e do próprio plugin, e não do ReHLDS. Dois pontos merecem atenção:

- O ReHLDS **não é compatível em nível binário** com o HLDS original — ele é compilado com compiladores diferentes dos usados nos binários originais da Valve. Plugins que fazem patching binário direto ou varredura de assinaturas no motor (o Orpheu, por exemplo) podem não funcionar corretamente e precisam de suporte explícito ao ReHLDS.
- Para saber a situação atual de compatibilidade de um mod específico combinado com o [Metamod-R](/pt-BR/docs/metamod-r/supported-games) ou com o [ReGameDLL_CS](/pt-BR/docs/regamedll-cs/supported-games), consulte a página de jogos compatíveis daquele projeto — essas camadas ficam diretamente sobre o ReHLDS.
