---
id: reunion-settings
title: Configurações
sidebar_position: 3
description: ReUnion - plugin do Metamod que permite a clientes não Steam dos protocolos 47 e 48 se conectarem a servidores ReHLDS.
slug: /reunion/settings
---

<head>
  <title>ReUnion: Configurações | ReHLDS</title>
</head>

# Configurações

O ReUnion é configurado inteiramente pelo `reunion.cfg`. O arquivo padrão é bem comentado — esta página resume cada seção.

:::warning

O próprio arquivo começa com um "não altere nada se você não sabe o que isso significa", e não é à toa — a maioria dos valores padrão já está ajustada. Mude os valores de forma consciente, um de cada vez.

:::

## Tipos de ID de cliente (`cid_*`)

Cada opção `cid_*` atribui um tipo de ID a uma categoria de cliente. Os códigos de tipo disponíveis são:

| Código | Significado |
| --- | --- |
| `1` | Steam ID real (ou gerado a partir do hardware) (`STEAM_xx:xx:xx`). |
| `2` | Valve ID real (ou gerado a partir do hardware) (`VALVE_xx:xx:xx`). |
| `3` | ID `STEAM_` gerado a partir do IP do cliente. |
| `4` | ID `VALVE_` gerado a partir do IP do cliente. |
| `5` | Descontinuado — o cliente é recusado. |
| `6` | Reservado para uso futuro. |
| `7` | HLTV. |
| `8` | `STEAM_ID_LAN`. |
| `9` | `STEAM_ID_PENDING`. |
| `10` | `VALVE_ID_LAN`. |
| `11` | `VALVE_ID_PENDING`. |
| `12` | `STEAM_666:88:666`. |

| Opção | Padrão | Aplica-se a |
| --- | --- | --- |
| `cid_Steam` | `1` | Clientes Steam legítimos. |
| `cid_SteamPending` | `5` | Clientes que se autorizaram com sucesso, mas não receberam um Steam ID utilizável. |
| `cid_HLTV` | `5` | Relays de HLTV. |
| `cid_NoSteam47` | `5` | Clientes do protocolo 47 sem suporte à geração de ID único. |
| `cid_NoSteam48` | `5` | Clientes do protocolo 48 sem suporte à geração de ID único. |
| `cid_RevEmu` | `1` | revEmu ≥ 9.74. |
| `cid_RevEmu2013` | `1` | RevEmu 2013. |
| `cid_SC2009` | `1` | SteamClient 2009 / revEmu > 9.82. |
| `cid_OldRevEmu` | `1` | Versões mais antigas do revEmu. |
| `cid_SteamEmu` | `1` | SteamEmu do hCupa. |
| `cid_AVSMP` | `1` | AVSMP (Steam pirateada). |
| `cid_Setti` | `3` | Scanner de servidores SETTI. |
| `cid_SXEI` | `1` | Clientes sXeI. |

A `HLTVExcept_IP` (padrão `127.0.0.1`) permite que um HLTV de um IP específico entre mesmo quando a `cid_HLTV` recusa clientes HLTV.

## Configurações de autenticação

| Opção | Padrão | Descrição |
| --- | --- | --- |
| `AuthVersion` | `4` | Versão do protocolo de autorização: `1` DProto (descontinuada), `2` Reunion 2015–2018, `3` Reunion 2018–2024, `4` atual (recomendada). |
| `SteamIdHashSalt` | *(vazio)* | Sal usado no hash dos Steam IDs gerados, que os altera de forma irreversível para impedir o roubo de IDs. O comprimento recomendado é de 32 caracteres ou mais, com o mínimo de 16. Com `AuthVersion >= 3`, um valor vazio faz o ReUnion **falhar na inicialização** — defina `0` explicitamente para desativar o hash (não recomendado) em vez de deixar em branco. |
| `SC2009_RevCompatMode` | `1` | Torna os IDs gerados pelo SC2009 compatíveis com os do revEmu. Não pode ser desativada quando `AuthVersion >= 3`. |
| `EnableSXEIdGeneration` | `0` | Ativa a geração de IDs a partir dos dados do cliente sXeI. Só ative isso se você realmente mantiver uma configuração compatível com sXeI. |
| `EnableGenPrefix2` | `0` | Acrescenta um segundo prefixo de ID para reduzir a chance de colisão nos IDs gerados. Só tem efeito com a `SteamIdHashSalt` definida; não pode ser desativada com `AuthVersion >= 3`. |

### Prefixos de authid legados

As opções `IPGen_Prefix1/2`, `Native_Prefix1`, `RevEmu*_Prefix1`, `SC2009_Prefix1`, `OldRevEmu_Prefix1`, `SteamEmu_Prefix1`, `AVSMP_Prefix1`, `Setti_Prefix1` e `SXEI_Prefix1` só valem quando a `AuthVersion` é `1` ou `2`. Com a `AuthVersion = 4` recomendada, esta seção inteira é ignorada — deixe-a nos valores padrão.

Independentemente da versão, o `banid` sempre usa o SteamID **sem** nenhum prefixo.

## Consultas ao servidor

| Opção | Padrão | Descrição |
| --- | --- | --- |
| `ServerInfoAnswerType` | `0` | `0` respostas no formato novo (Steam) (recomendado), `1` respostas no formato antigo do GoldSrc, `2` híbrido — visível para os dois, mas responde a cada consulta 3 vezes. |
| `FixBuggedQuery` | `1` | Corrige clientes com uma lista de servidores defeituosa, que de outro modo travariam na conexão. |
| `EnableQueryLimiter` | `1` | Limita a taxa das consultas ao servidor (TSource, lista de jogadores etc.). Defina `0` se você já limitar a taxa externamente. |
| `QueryFloodBanLevel` | `400` | Consultas por segundo que disparam um banimento de IP. Faixa de `320` a `2048`; o tráfego legítimo raramente passa de ~80/s. |
| `QueryFloodBanTime` | `10` | Duração do banimento, em minutos, por flood de consultas, de `0` a `60`. `0` bloqueia sem banir. |
| `QueryLimiterExceptIP` | *(seção, vazia)* | Lista de IPs (um por linha, sob `[QueryLimiterExceptIP]`) excluídos do limitador de consultas. |
| `AllowSplitPackets` | `0` | Permite dividir os pacotes de saída maiores que 1400 bytes, como faz o cliente Steam original. Algumas ferramentas de monitoramento não suportam isso. |
| `IDClientsLimit` | `1` | Número máximo de clientes simultâneos com o mesmo Steam ID, de `0` a `32`. `0` desativa o limite. Útil ao depurar com várias instâncias do cliente. |

## Registro de logs

| Opção | Padrão | Descrição |
| --- | --- | --- |
| `LoggingMode` | `0` | `0` nenhum, `1` console, `2` arquivos de log, `3` ambos. |

## Perguntas frequentes

- **Defini a `SteamIdHashSalt` como no DProto, mas os jogadores recebem SteamIDs diferentes.** O ReUnion usa um algoritmo de hash diferente e mais seguro. Conhecer o SteamID de um jogador de antes de a `SteamIdHashSalt` ser ativada não ajuda a reproduzi-lo depois.
- **Dá para fazer alguma coisa contra quem troca de SteamID?** Não — os trocadores de ID geram tíquetes de autorização válidos, então o servidor não tem como saber que um ID foi substituído. Definir a `SteamIdHashSalt` pelo menos impede que alguém falsifique deliberadamente o ID de *um outro jogador específico*.
- **Algumas ferramentas de monitoramento de servidor não conseguem obter a lista de jogadores.** Provavelmente elas usam um formato de consulta desatualizado; use uma biblioteca de consultas atual, como a [PHP-Source-Query](https://github.com/xPaw/PHP-Source-Query) ou equivalente.
- **O DProto tinha uma opção `Game_Name`; o ReUnion não tem.** Altere o nome do jogo informado a partir de um plugin.
