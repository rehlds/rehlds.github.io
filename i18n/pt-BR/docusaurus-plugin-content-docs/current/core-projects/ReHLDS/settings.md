---
id: rehlds-settings
title: Configurações
sidebar_position: 3
description: O ReHLDS é uma versão reconstruída do HLDS original, com mais segurança, mais desempenho e melhores recursos de modding para jogos como Half-Life e Counter-Strike 1.6.
slug: /rehlds/settings
---

<head>
  <title>ReHLDS: Configurações | ReHLDS</title>
</head>

# Configurações

O ReHLDS acrescenta um conjunto de variáveis de console do servidor (cvars) às já existentes no HLDS, voltadas principalmente ao ajuste de anticheat e antiabuso, à rede e a correções de comportamento. Defina-as no `server.cfg` ou em qualquer config executada na inicialização.

## Cvars

| Cvar | Padrão | Descrição |
| --- | --- | --- |
| `sv_auto_precache_sounds_in_models` | `0` | Faz o precache automático dos sons associados aos models. |
| `sv_delayed_spray_upload` | `0` | Envia os sprays personalizados depois da entrada no jogo, e não durante a conexão. Aumenta a velocidade de envio. |
| `sv_echo_unknown_cmd` | `0` | Exibe no console quando um cliente tenta executar um comando desconhecido. |
| `sv_rcon_condebug` | `1` | Imprime no console a saída de depuração do rcon. |
| `sv_force_ent_intersection` | `0` | Usada por plugins de terceiros para forçar a colisão de entidades `SOLID_SLIDEBOX`. |
| `sv_rehlds_force_dlmax` | `0` | Força a cvar `cl_dlmax` do cliente para `1024`, evitando fragmentação excessiva de pacotes. |
| `sv_rehlds_hull_centering` | `0` | Usa o centro do hull em vez de um canto. |
| `sv_rehlds_movecmdrate_max_avg` | `400` | Nível médio máximo de comandos "move" permitido antes de um banimento. |
| `sv_rehlds_movecmdrate_avg_punish` | `5` | Tempo de banimento em minutos por exceder `sv_rehlds_movecmdrate_max_avg` (`0` = permanente, negativo = kick). |
| `sv_rehlds_movecmdrate_max_burst` | `2500` | Nível máximo de rajada de comandos "move" permitido antes de um banimento. |
| `sv_rehlds_movecmdrate_burst_punish` | `5` | Tempo de banimento em minutos por exceder `sv_rehlds_movecmdrate_max_burst` (`0` = permanente, negativo = kick). |
| `sv_rehlds_send_mapcycle` | `0` | Envia o `mapcycle.txt` na mensagem de informações do servidor (igual ao comportamento do HLDS original; não é usado pelo cliente). |
| `sv_rehlds_stringcmdrate_max_avg` | `80` | Nível médio máximo de comandos "string" permitido antes de um banimento. |
| `sv_rehlds_stringcmdrate_avg_punish` | `5` | Tempo de banimento em minutos por exceder `sv_rehlds_stringcmdrate_max_avg` (`0` = permanente, negativo = kick). |
| `sv_rehlds_stringcmdrate_max_burst` | `400` | Nível máximo de rajada de comandos "string" permitido antes de um banimento. |
| `sv_rehlds_stringcmdrate_burst_punish` | `5` | Tempo de banimento em minutos por exceder `sv_rehlds_stringcmdrate_max_burst` (`0` = permanente, negativo = kick). |
| `sv_rehlds_userinfo_transmitted_fields` | `""` | Apenas as chaves de userinfo listadas aqui são transmitidas aos clientes pela rede. Vazio significa que todos os campos são transmitidos (exceto as chaves com o prefixo `_`). Coloque uma barra invertida antes de cada chave, por exemplo `\name\model\*sid\*hltv\bottomcolor\topcolor`. Veja [Userinfo keys](https://github.com/rehlds/ReHLDS/wiki/Userinfo-keys) para a referência completa. |
| `sv_rehlds_attachedentities_playeranimationspeed_fix` | `0` | Corrige um bug na velocidade da animação de passada que ocorre quando o jogador tem entidades anexadas (aiments). Pode causar atraso na animação quando o `cl_updaterate` é baixo. |
| `sv_rehlds_maxclients_from_single_ip` | `5` | Limita as conexões simultâneas vindas de um mesmo endereço IP (não afeta jogadores já conectados). |
| `sv_rehlds_local_gametime` | `0` | Reduz a sensação de "lag" quando o mesmo mapa fica rodando por muito tempo. |
| `sv_rehlds_allow_large_sprays` | `1` | Permite logos personalizados maiores que 64x64. |
| `sv_use_entity_file` | `0` | Controla o uso de um arquivo de entidades próprio por mapa (`maps/[nome do mapa].ent`). `0` = entidades originais, `1` = usa os arquivos `.ent` do diretório maps, `2` = usa os arquivos `.ent` e cria um se ele não existir. |
| `sv_usercmd_custom_random_seed` | `0` | Gera uma semente aleatória adicional, independente do cliente. |
| `sv_net_incoming_decompression` | `1` | Descomprime os dados comprimidos recebidos em transferências de arquivo. |
| `sv_net_incoming_decompression_max_ratio` | `80.0` | Proporção máxima permitida entre os dados comprimidos e os descomprimidos na transferência de arquivos, de `0` a `100`. Uma proporção perto de 90 indica um grande volume de dados descomprimidos com baixa entropia. |
| `sv_net_incoming_decompression_max_size` | `65536` | Tamanho máximo permitido, em bytes, para os dados descomprimidos de transferência de arquivos, de `16` a `65536`. |
| `sv_net_incoming_decompression_min_failures` | `4` | Número mínimo de falhas de descompressão necessárias para que uma conexão seja marcada para possível punição, de `0` a `10`. |
| `sv_net_incoming_decompression_max_failures` | `10` | Número máximo de falhas de descompressão permitidas dentro da janela de monitoramento antes que uma ação seja tomada, de `0` a `10`. |
| `sv_net_incoming_decompression_min_failuretime` | `0.1` | Janela de tempo em segundos, de `0.1` a `10.0`, dentro da qual as falhas de descompressão são contabilizadas. |
| `sv_net_incoming_decompression_punish` | `-1` | Tempo de banimento em minutos por fragmentos bzip2 malformados ou anormais (`0` = permanente, negativo = kick). |
| `sv_tags` | `""` | Lista separada por vírgulas de "gametags" do servidor, usada para filtragem em interfaces de matchmaking e na lista de servidores. |
| `sv_filterban` | `1` | Modo de filtragem por IP. `-1` = recusa todos os jogadores incondicionalmente, `0` = sem verificações, `1` = expulsa os jogadores que correspondem a um filtro de IP ou a uma entrada de banimento. |
| `sv_rehlds_movecmd_max_ticks` | `24` | Número máximo de comandos de movimento que o servidor processa de um mesmo jogador em um único frame (comandos, não pacotes). |
| `sv_rehlds_movecmd_max_null_streak` | `0` | Número máximo permitido de comandos de movimento consecutivos com duração zero (comandos vazios). `0` desativa a verificação. |
| `sv_rehlds_movecmd_clamp_interp` | `1` | Bloqueia comandos de movimento com um valor de `ex_interp` fora da faixa válida. |
| `sv_rehlds_movecmdtime_samples` | `120` | Número de frames usados para calcular a média da velocidade de movimento de um cliente. Valores maiores = mais precisão, mas detecção mais lenta. |
| `sv_rehlds_movecmdtime_max_error` | `300` | Quanto (em ms) o relógio interno de jogo de um cliente pode se desviar do relógio do servidor antes que a velocidade seja avaliada. As penalidades só se aplicam se `sv_rehlds_movecmdtime_max_scale` / `_min_scale` também forem violados. |
| `sv_rehlds_movecmdtime_max_scale` | `3.0` | Proporção máxima da velocidade base de jogo do cliente. Clientes que acelerarem acima disso recebem avisos. |
| `sv_rehlds_movecmdtime_min_scale` | `0.5` | Proporção mínima da velocidade base de jogo do cliente. Clientes que desacelerarem abaixo disso recebem avisos. |
| `sv_rehlds_movecmdtime_max_warnings` | `-1` | Número máximo de avisos de speedhack/slowmo permitidos antes da punição. `-1` desativa a detecção. |
| `sv_rehlds_movecmdtime_punish` | `-1` | Punição por speedhack ou lentidão artificial (`-1` = kick, `0` = banimento permanente, negativo = kick). |
| `sv_reconnect_timeout` | `30` | Prazo rígido, em segundos, para que um cliente reinicie a conexão depois de uma troca de mapa, independentemente da atividade do netchannel. Fecha um exploit de slot fantasma em que um cheat bloqueia o comando `reconnect` e mantém o netchannel vivo, de modo que o `sv_timeout` nunca dispara. `0` desativa o recurso. |

:::note

A `sv_rehlds_userinfo_transmitted_fields` é a configuração mais usada junto com ajustes de privacidade e anticheat. Veja a [página Userinfo keys no wiki](https://github.com/rehlds/ReHLDS/wiki/Userinfo-keys) para o tipo do valor, a transmissão padrão e as observações de privacidade de cada chave padrão.

:::

## Arquivos

| Cvar | Padrão | Descrição |
| --- | --- | --- |
| `listipcfgfile` | `listip.cfg` | Arquivo usado para os banimentos permanentes por IP. |
| `syserror_logfile` | `sys_error.log` | Arquivo usado para o log de erros do sistema. |

## Comandos de console

| Comando | Descrição |
| --- | --- |
| `rescount` | Imprime no console do servidor a contagem total de recursos em precache. |
| `reslist <sound \| model \| decal \| generic \| event>` | Imprime os recursos em precache do tipo indicado. Útil para gerenciar recursos e os limites de precache do GoldSrc. |
| `rcon_adduser <ipaddress/CIDR>` | Adiciona um endereço IP ou uma faixa CIDR à lista de usuários do RCON, concedendo acesso privilegiado ao console. Sem nenhum usuário de RCON, qualquer pessoa com a senha correta pode usar o RCON. |
| `rcon_deluser <ipaddress> {removeAll}` | Remove um endereço IP ou uma faixa CIDR da lista de usuários do RCON. |
| `rcon_users` | Lista todos os endereços IP e faixas CIDR presentes na lista de usuários do RCON. |
