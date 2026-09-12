---
id: metamod-r-settings
title: Configurações
sidebar_position: 3
description: O Metamod-R é uma versão otimizada do Metamod original, com mais desempenho e melhor compatibilidade para servidores de Half-Life 1.
slug: /metamod-r/settings
---

<head>
  <title>Metamod-R: Configurações | ReHLDS</title>
</head>

# Configurações

## Ativação dos plugins no plugins.ini
Como exemplo, vamos usar um plugin fictício chamado `metaPlugin`. A instalação dos demais plugins é parecida.
 
* Crie o arquivo `plugins.ini` na pasta `addons\metamod` (caso ele não exista)
* Crie uma pasta para o novo plugin dentro da pasta `addons`._Por exemplo, a pasta **metaPlugin**._
* * Coloque o seu plugin `metaPlugin.dll` (ou `metaPlugin.so`) na pasta criada `addons\metaPlugin`.
* Abra o arquivo `plugins.ini` da pasta `metamod` em um editor de texto qualquer.
* * Para ativar o plugin `metaPlugin.dll` (ou `metaPlugin.so`), escreva as seguintes linhas no arquivo `plugins.ini`:

_Para as versões Windows do seu servidor:_
```
win32 addons\metaPlugin\metaPlugin.dll
```
_Para as versões Linux do seu servidor:_
```
linux addons/metaPlugin/metaPlugin.so
```
* Salve o arquivo `plugins.ini` e inicie o servidor.
* A instalação está **concluída**.

_Você pode conferir o funcionamento do plugin com o comando `meta list` no console do servidor._
![](https://i.imgur.com/1fVXBzc.png)

em caso de resultado negativo,
![](https://i.imgur.com/nGXAokG.png)
consulte a [Solução de problemas](https://github.com/rehlds/metamod-r/wiki/Troubbleshouting).

# Lista de comandos de console
Escreva o comando precedido da palavra `meta`. _Por exemplo, `meta version`_.

```
     version                - informações sobre a versão do metamod
     list                   - lista dos plugins carregados
     game                   - informações sobre a gamedll (lista das msg registradas, id e tamanho)
     cmds                   - lista dos comandos de console adicionados por plugins de terceiros
     cvars                  - lista das cvars adicionadas por plugins de terceiros
     refresh                - recarrega o metamod-r
     config                 - configuração vinda do config.ini 
     load <nome>            - localiza e carrega o plugin no caminho indicado
     unload <plugin>        - descarrega o plugin
     reload <plugin>        - recarrega o plugin
     info <plugin>          - informações sobre o plugin
     pause <plugin>         - pausa o plugin
     unpause <plugin>       - retoma a execução de todos os plugins instalados
     retry <plugin>         - tenta carregar de novo os plugins que falharam
     clear <plugin>         - remove da memória os plugins que falharam
     force_unload <plugin>  - descarrega o plugin à força
     require <plugin>       - desliga o servidor se o plugin indicado não funcionar
```

### debuglevel 
 
| **var** | debuglevel 
| :----- | -----:
| **tipo** | int
| **valores** | de 0 a 42
| **padrão** | 0
| **sobrescrito por** |  `+localinfo mm_debug <número>`
| **exemplo** | `debuglevel 0`
| **descrição** | Define o nível inicial de depuração do metamod (equivalente à cvar "meta_debug"). Onde `<número>` é um inteiro, de 0 para cima. O padrão normalmente é 0.  Se o hlds for iniciado com "-dev", o padrão passa a ser 3.

### gamedll
| **var** | gamedll
| :----- | -----:
| **tipo** | string
| **valores** | `<caminho>`
| **padrão** | null
| **sobrescrito por** |  `+localinfo mm_gamedll <caminho>`
| **exemplo** |  `gamedll dlls/hl.dll`, `gamedll ../podbot/podbot.dll`, `gamedll /home/bots/dlls/mybot.dll`
| **descrição** | Substitui a gamedll detectada automaticamente, em especial no caso de bots. Onde `<caminho>` é um caminho absoluto ou relativo ao diretório do jogo. O padrão é vazio, com a gamedll sendo reconhecida automaticamente a partir do diretório do jogo.

### exec_cfg 
| **var** | exec_cfg 
| :----- | -----:
| **tipo** | string
| **valores** | `<arquivo>`
| **padrão** | `addons/metamod/exec.cfg`
| **sobrescrito por** |  `+localinfo mm_execcfg <arquivo>`
| **exemplo** |  `exec_cfg configs/debugging.cfg`, `exec_cfg ../clan/match.cfg`
| **descrição** | Substitui o nome de arquivo padrão que contém os comandos do hlds executados logo depois do carregamento do Metamod. Onde `<arquivo>` é um caminho relativo ao diretório do jogo.  Atenção!  Ele NÃO pode ser um caminho absoluto, pois o hlds não executa "exec" em caminhos absolutos.
 
### clientmeta 
| **var** | clientmeta 
| :----- | -----:
| **tipo** | bool
| **valores** | `<yes/no>`
| **padrão** | `yes`
| **sobrescrito por** |  `+localinfo mm_clientmeta <yes/no>`
| **exemplo** |  `clientmeta yes`, `clientmeta no`
| **descrição** | Configuração para desativar ou ativar os comandos de cliente do Metamod ('meta list' e 'meta version'). Configuração adicional do "Metamod+All-Mod-Support Patch". 

### dynalign_list
| **var** | dynalign_list 
| :----- | -----:
| **tipo** | bool
| **valores** | `<yes/no>`
| **padrão** | `no`
| **sobrescrito por** |   
| **exemplo** |  `dynalign_list yes`, `dynalign_list no`
| **descrição** | Configuração para desativar ou ativar o alinhamento dinâmico da lista de plugins na saída.  **ATENÇÃO**: esta opção afeta a leitura incorreta feita pelo HLSW na aba `Metamod Plugins`.
