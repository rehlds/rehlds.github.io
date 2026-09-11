---
id: regamedll-cs-troubbleshouting
title: Solução de problemas
sidebar_position: 6
description: Problemas comuns de instalação, configuração e bots no ReGameDLL_CS.
slug: /regamedll-cs/troubbleshouting
---

# Solução de problemas

## O `game version` não mostra o ReGameDLL

Provavelmente o servidor ainda está carregando a GameDLL anterior.

1. Pare o servidor por completo.
2. Confirme que você copiou o binário do sistema operacional correto para `cstrike/dlls` ou `czero/dlls`.
3. Verifique se o servidor está usando o diretório de jogo que você editou (`-game cstrike` ou `-game czero`).
4. Inicie o servidor e execute `game version` no console dele.

No Linux, verifique também o dono do arquivo e as permissões de leitura. Lembre-se de que o binário oficial do servidor é de 32 bits, então o host precisa das bibliotecas de runtime de 32 bits necessárias.

## Os comandos de bots não são reconhecidos

Em um servidor dedicado, a `bot_enable` precisa estar definida antes de a GameDLL inicializar.

1. Defina `bot_enable "1"` no `cstrike/game_init.cfg` ou no `czero/game_init.cfg`.
2. No Counter-Strike 1.6, instale o conteúdo do `bot_profiles.zip` oficial dentro de `cstrike`.
3. Reinicie o servidor por completo; alterar a cvar depois da inicialização não basta.

Não acrescente `-bots` nem `-host-improv` à linha de comando. Essas chaves antigas foram removidas em favor das cvars.

## Os bots estão ativados, mas não entram

Verifique os valores ativos de:

```text
bot_quota
bot_quota_mode
bot_join_after_player
bot_join_team
```

Para um teste simples, use:

```cfg
bot_quota_mode "normal"
bot_quota "4"
bot_join_after_player "0"
bot_join_team "any"
```

Depois troque de mapa ou reinicie o servidor. Você também pode executar `bot_add` manualmente para distinguir um problema de cota de um problema de dados de bots ou de navegação.

## Faltam perfis ou nomes de bots

O Counter-Strike 1.6 não traz todos os dados de bots do Condition Zero. Extraia o arquivo `regamedll/extra/zBot/bot_profiles.zip` do repositório no diretório `cstrike`, mantendo a estrutura de pastas intacta. Se você indicar um nome de perfil no `bot_add`, ele precisa existir no banco de perfis instalado.

## Os bots não conseguem navegar em um mapa personalizado

Pode ser que o mapa não tenha uma malha de navegação compatível. Inicie o mapa, adicione um bot e use o `bot_nav_analyze` no console do servidor. A análise pode consumir um tempo considerável de CPU. Salve ou recarregue os dados de navegação gerados antes de usá-los em um servidor de produção.

## O servidor trava depois da substituição da GameDLL

- Desative temporariamente os plugins do Metamod e teste o ReGameDLL_CS sozinho.
- Atualize o ReHLDS, o Metamod-R e os plugins para versões compatíveis.
- Remova os plugins que aplicam patches em endereços fixos ou que dependem de offsets da GameDLL da Valve, a menos que a documentação deles declare suporte ao ReGameDLL_CS.
- Restaure o `delta.lst` do lançamento caso ele tenha sido sobrescrito sem querer por uma versão incompatível.

## Uma configuração não surte efeito

- Coloque as configurações que só valem na inicialização, como a `bot_enable`, no `game_init.cfg` e reinicie o processo.
- Coloque as configurações de jogabilidade no `game.cfg` ou em outra config executada depois que o mapa carrega.
- Procure a mesma cvar em arquivos de configuração posteriores; a última atribuição prevalece.
- Compare a sua configuração com a do arquivo do lançamento atual ao atualizar. Versões novas podem acrescentar cvars ou mudar valores padrão.

## Como relatar um problema

Antes de abrir uma issue, reúna:

- a saída do `game version`;
- as versões do ReHLDS/HLDS, do Metamod e do ReGameDLL_CS;
- o sistema operacional e o diretório do jogo;
- a lista de plugins;
- o log de console relevante e uma configuração mínima que reproduza o problema.

Relate os problemas reproduzíveis do ReGameDLL_CS no [rastreador de issues do projeto](https://github.com/rehlds/ReGameDLL_CS/issues).
