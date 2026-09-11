---
id: regamedll-cs-install
title: Instalação e atualizações
sidebar_position: 2
description: Instale ou atualize a versão atual do ReGameDLL_CS em servidores de Counter-Strike 1.6 e Condition Zero.
slug: /regamedll-cs/install
---

# Instalação e atualizações

Estas instruções se aplicam a servidores dedicados de Counter-Strike 1.6 e Counter-Strike: Condition Zero no Windows ou no Linux de 32 bits.

## Antes de começar

1. Pare o servidor por completo.
2. Faça backup do diretório do mod de destino (`cstrike` ou `czero`), em especial da pasta `dlls` e dos arquivos de configuração.
3. Baixe o `regamedll-bin-*.zip` da [versão estável mais recente](https://github.com/rehlds/ReGameDLL_CS/releases/latest).

:::note

A página do lançamento também disponibiliza um arquivo de assinatura `.zip.asc`. Ele serve para verificação, e não é o pacote do servidor em si.

:::

## Escolha a build da plataforma correta

| Plataforma do servidor | Pasta dentro do arquivo | Binário principal |
| --- | --- | --- |
| Windows | `bin/win32/cstrike` | `dlls/mp.dll` |
| Linux x86 | `bin/linux32/cstrike` | `dlls/cs.so` |

O arquivo usa o nome de pasta `cstrike` para os dois jogos compatíveis. Ao instalar no Condition Zero, copie o conteúdo dessa pasta para o diretório `czero` do seu servidor.

## Instalação no Windows

1. Abra a pasta `bin/win32/cstrike` no arquivo baixado.
2. Copie o conteúdo dela para o diretório do mod de destino:
   - CS 1.6: `<servidor>/cstrike`
   - Condition Zero: `<servidor>/czero`
3. Confirme que o `<mod>/dlls/mp.dll` foi substituído.
4. Mescle os arquivos de configuração fornecidos conforme descrito abaixo.

## Instalação no Linux

Extraia o arquivo e copie a build para Linux no diretório do mod de destino. No CS 1.6, por exemplo:

```bash
unzip regamedll-bin-*.zip
cp -a bin/linux32/cstrike/. /path/to/server/cstrike/
```

No Condition Zero, use `/path/to/server/czero/` como destino. Confirme que o `<mod>/dlls/cs.so` foi substituído e continua legível para a conta que roda o servidor.

## Mescla dos arquivos de configuração

Não sobrescreva às cegas uma configuração que você já personalizou.

| Arquivo | Finalidade |
| --- | --- |
| `game.cfg` | Configurações de jogabilidade e CVars estendidas do ReGameDLL_CS. |
| `game_init.cfg` | Configurações iniciais da GameDLL, como `bot_enable` e `hostage_ai_enable`. |
| `delta.lst` | Definições de delta de rede distribuídas com a build atual. Mantenha este arquivo em sincronia com o lançamento. |

Em uma primeira instalação, copie os três arquivos. Durante uma atualização:

1. Substitua a GameDLL e o `delta.lst` pelas versões do lançamento.
2. Compare os seus `game.cfg` e `game_init.cfg` com as cópias novas.
3. Mescle as CVars e os comentários novos, preservando os valores que você escolheu.

Os modelos mais recentes do repositório são o [`game.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game.cfg) e o [`game_init.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game_init.cfg).

## Início e verificação

Inicie o servidor e execute:

```text
game version
```

Se o comando não for reconhecido, a nova GameDLL não foi carregada. Verifique o binário da plataforma escolhida, o diretório do mod de destino, as permissões dos arquivos e as entradas `gamedll` / `gamedll_linux` no `liblist.gam` do mod.

## Atualização de uma instalação existente

Siga o mesmo procedimento de uma instalação nova: pare o servidor, faça backup dos arquivos, substitua a GameDLL correta e o `delta.lst`, mescle as mudanças de configuração e verifique com o `game version`.

Leia as [notas de lançamento](https://github.com/rehlds/ReGameDLL_CS/releases) antes de atualizar. Versões novas podem acrescentar CVars ou mudar o comportamento da API, o que afeta o ReAPI e os plugins do servidor.

## Modo beta opcional

O ReGameDLL_CS mantém um modo beta opcional, com as mudanças mais recentes derivadas da versão oficial do Counter-Strike da Valve. Acrescente `-beta` à linha de comando do HLDS apenas quando você realmente quiser testar esse modo. Teste a compatibilidade dos plugins antes de usá-lo em um servidor de produção.
