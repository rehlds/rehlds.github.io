---
id: regamedll-cs-bots
title: Uso de bots
sidebar_position: 5
description: Instale, ative, configure e resolva problemas do sistema zBot embutido no ReGameDLL_CS.
slug: /regamedll-cs/bots
---

# Uso de bots

O ReGameDLL_CS inclui o código do zBot usado no Counter-Strike: Condition Zero. Servidores dedicados precisam ativá-lo explicitamente, e os servidores de CS 1.6 também precisam dos perfis e recursos de bots, distribuídos à parte.

:::warning Opção antiga de linha de comando

Não use a antiga opção `-bots` na linha de comando do HLDS. Ela foi removida do projeto em favor da CVar `bot_enable`.

:::

## Ativação dos bots no CS 1.6

1. Instale uma versão atual do ReGameDLL_CS.
2. Baixe o [`bot_profiles.zip`](https://github.com/rehlds/ReGameDLL_CS/raw/refs/heads/master/regamedll/extra/zBot/bot_profiles.zip) oficial.
3. Extraia o arquivo na raiz do servidor, de modo que os arquivos de `cstrike` se juntem aos de `<servidor>/cstrike`.
4. Crie ou edite o `<servidor>/cstrike/game_init.cfg` e defina:

```text
bot_enable "1"
```

5. Reinicie o servidor por completo.

O arquivo normal de lançamento `regamedll-bin-*.zip` não inclui o pacote de perfis de bots do CS 1.6, então instalar apenas a GameDLL não basta.

## Ativação dos bots no Condition Zero

O Condition Zero já traz os perfis e recursos normais do zBot. Em um servidor dedicado, edite o `<servidor>/czero/game_init.cfg` e defina:

```text
bot_enable "1"
```

Depois reinicie o servidor por completo. Servidores locais (listen servers) ativam o zBot independentemente dessa CVar.

## Como adicionar e remover bots

Execute estes comandos no console do servidor ou por RCON:

| Comando | Resultado |
| --- | --- |
| `bot_add` | Adiciona um bot aleatório, usando a `bot_join_team` como preferência de time. |
| `bot_add <perfil>` | Adiciona o perfil indicado do `BotProfile.db`. |
| `bot_add_t [perfil]` | Adiciona um bot Terrorista aleatório ou nomeado. |
| `bot_add_ct [perfil]` | Adiciona um bot Contraterrorista aleatório ou nomeado. |
| `bot_kill` ou `bot_kill all` | Mata todos os bots vivos sem removê-los. |
| `bot_kill <nome>` | Mata um bot. Use aspas em nomes que contenham espaços. |
| `bot_kick` ou `bot_kick all` | Remove todos os bots e zera a cota, para que eles não sejam readicionados na hora. |
| `bot_kick <nome>` | Remove um bot e reduz a cota. |
| `bot_about` | Imprime informações sobre a implementação dos bots. |

Adicionar um bot manualmente aumenta a `bot_quota`; expulsar um manualmente a reduz.

## Configuração da quantidade de bots

A `bot_quota_mode` controla como a `bot_quota` é interpretada.

### Manter exatamente seis bots

```text
bot_quota_mode "normal"
bot_quota "6"
bot_join_after_player "0"
```

### Manter dez jogadores ativos no total

No modo `fill`, a soma de humanos e bots é mantida perto da cota:

```text
bot_quota_mode "fill"
bot_quota "10"
```

### Manter dois bots por humano

No modo `match`, a cota é uma proporção entre humanos e bots:

```text
bot_quota_mode "match"
bot_quota "2"
```

Configurações úteis de cota:

| CVar | Valores | Significado |
| --- | --- | --- |
| `bot_join_after_player` | `0`, `1`, `2` | `0`: os bots podem entrar em um servidor vazio. `1`: esperam por um humano em TR/CT. `2`: esperam por qualquer humano conectado, inclusive espectadores. |
| `bot_join_delay` | segundos | Atrasa a entrada dos bots depois de uma troca de mapa. |
| `bot_auto_vacate` | `0` ou `1` | Quando ativada, mantém um slot livre para um jogador humano. |
| `bot_join_team` | `any`, `T`, `CT` | Time preferido dos bots adicionados automaticamente. |

## Dificuldade, conversa e objetivos

```text
bot_difficulty "2"
bot_chatter "minimal"
bot_defer_to_human "0"
```

- `bot_difficulty`: `0` fácil, `1` normal, `2` difícil, `3` especialista.
- `bot_chatter`: normalmente `off`, `radio`, `minimal` ou `normal`.
- `bot_defer_to_human 0`: os bots podem cumprir os objetivos do cenário.
- `bot_deathmatch 1`: os bots adotam o comportamento de deathmatch e não cumprem o cenário normal.
- `bot_freeze 1`: impede os bots de se moverem, o que é útil em testes.

Também há predefinições de armamento:

```text
bot_knives_only
bot_pistols_only
bot_snipers_only
bot_all_weapons
```

## Navegação em mapas personalizados

Os bots precisam de um arquivo de navegação em `<mod>/maps/<mapa>.nav`. Se um mapa personalizado não trouxer um, execute:

```text
bot_nav_analyze
```

A análise de navegação pode demorar e grava um novo arquivo `.nav`. As builds atuais do ReGameDLL_CS recarregam os dados de navegação gerados depois da análise, sem exigir um reinício de mapa em separado.

Faça backup dos arquivos `.nav` editados à mão antes de refazer a análise. Os demais comandos `bot_nav_*` são ferramentas avançadas de edição e devem ser usados em um servidor de testes.

## Exemplo de configuração de bots

Depois de ativar os bots no `game_init.cfg`, coloque o comportamento cotidiano deles no `game.cfg` ou em um arquivo separado executado pela configuração do seu servidor:

```text
bot_quota_mode "fill"
bot_quota "12"
bot_join_after_player "2"
bot_join_delay "5"
bot_auto_vacate "1"
bot_difficulty "2"
bot_chatter "minimal"
bot_defer_to_human "0"
```

Veja a [Solução de problemas](../troubbleshouting/) se os comandos `bot_*` não forem reconhecidos ou se os bots não entrarem.
