---
id: regamedll-cs-settings
title: Configuração e comandos
sidebar_position: 4
description: Configure os arquivos do ReGameDLL_CS, as CVars de jogabilidade mais comuns e os comandos de console do servidor.
slug: /regamedll-cs/settings
---

# Configuração e comandos

O ReGameDLL_CS acrescenta configurações às CVars padrão do servidor de Counter-Strike. Comece pelos arquivos de configuração incluídos no mesmo lançamento da sua GameDLL.

## Arquivos de configuração

| Arquivo | Serve para |
| --- | --- |
| `<mod>/game.cfg` | Regras de jogabilidade do ReGameDLL_CS, comportamento do HUD, movimentação, respawn, dano e extensões de cota de bots. |
| `<mod>/game_init.cfg` | Configurações que precisam ser conhecidas durante a inicialização da GameDLL: `bot_enable`, `hostage_ai_enable` e `mp_hullbounds_sets`. |
| `<mod>/server.cfg` | Configurações normais do servidor, como hostname, senhas, registro de logs e CVars padrão do Counter-Strike. |

`<mod>` significa `cstrike` no CS 1.6 ou `czero` no Condition Zero.

:::important

Depois de alterar o `game_init.cfg`, reinicie por completo o processo do servidor. Só trocar de mapa pode não reinicializar recursos como os bots embutidos.

:::

## Configurações comuns do ReGameDLL_CS

Os valores abaixo são os que vêm na configuração da versão estável atual. O seu servidor pode sobrescrevê-los.

| CVar | Valor distribuído | Finalidade |
| --- | ---: | --- |
| `mp_freeforall` | `0` | Ativa o modo todos contra todos quando definida como `1`. |
| `mp_round_infinite` | `0` | Impede que determinadas condições do cenário encerrem o round. Também aceita flags como `a`, `e` ou combinações como `ae`. |
| `mp_round_restart_delay` | `5` | Espera em segundos antes do round seguinte depois de uma vitória. |
| `mp_roundrespawn_time` | `20` | Tempo após o início do round durante o qual um jogador que entra ainda pode nascer; `-1` remove o limite. |
| `mp_forcerespawn` | `0` | Faz os jogadores mortos renascerem automaticamente após a espera indicada. |
| `mp_maxmoney` | `16000` | Dinheiro máximo do jogador; o ReGameDLL_CS permite valores de até `999999`. |
| `mp_buy_anywhere` | `0` | Permite comprar em qualquer lugar para os dois times (`1`), só para os TR (`2`) ou só para os CT (`3`). |
| `mp_infinite_ammo` | `0` | `1` mantém o pente da arma cheio; `2` dá munição de reserva infinita. |
| `mp_infinite_grenades` | `0` | Ativa granadas infinitas quando definida como `1`. |
| `mp_free_armor` | `0` | Dá colete (`1`) ou colete e capacete (`2`) ao nascer. |
| `mp_team_flash` | `1` | Controla se as granadas de luz afetam os companheiros de time e quem as arremessou. |
| `sv_autobunnyhopping` | `0` | Pula automaticamente enquanto a tecla de pulo estiver pressionada. |
| `sv_enablebunnyhopping` | `0` | Permite que a velocidade ultrapasse o limite normal de corrida. |
| `mp_scoreboard_showhealth` | `3` | Controla de quem a vida é enviada e exibida no placar. |
| `mp_scoreboard_showmoney` | `3` | Controla de quem o dinheiro é enviado e exibido no placar. |
| `mp_allow_point_servercommand` | `0` | Permite que mapas executem comandos de servidor. Mantenha desativada para mapas não confiáveis. |

Para conhecer todas as configurações disponíveis, os valores aceitos e as observações de segurança, use o [`dist/game.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game.cfg) do repositório como fonte definitiva.

## Comandos de servidor

Execute-os no console do servidor ou, quando aplicável, por uma sessão de RCON autorizada.

| Comando | Descrição |
| --- | --- |
| `game version` | Imprime a versão da build da GameDLL carregada, a data e o endereço do projeto. |
| `endround` | Encerra o round em empate. |
| `endround T` | Encerra o round com vitória dos Terroristas. |
| `endround CT` | Encerra o round com vitória dos Contraterroristas. |
| `swapteams` | Troca os times e reinicia após a espera padrão de um segundo. |
| `swapteams 0` | Troca os times sem reiniciar o round. |
| `swapteams <segundos>` | Troca os times e reinicia após a espera indicada. |
| `give weapon_ak47` | Dá a arma indicada; exige `sv_cheats 1`. |
| `impulse 255` | Dá todas as armas; exige `sv_cheats 1`. |
| `impulse 200` | Ativa o noclip com aceleração no ar; exige `sv_cheats 1`. |

Os comandos específicos de bots e os exemplos de cota estão documentados em [Uso de bots](../bots/).

## Fluxo seguro de configuração

1. Guarde uma cópia da configuração original de cada lançamento.
2. Altere um grupo de configurações por vez.
3. Reinicie ou troque de mapa conforme necessário e depois confira o valor efetivo no console do servidor.
4. Registre os seus valores personalizados fora do arquivo do lançamento, para que uma atualização não os sobrescreva em silêncio.
