---
id: regamedll-cs
title: ReGameDLL_CS
sidebar_position: 1
description: Panorama atual, notas de compatibilidade, downloads e próximos passos para administradores de servidor e desenvolvedores do ReGameDLL_CS.
slug: /regamedll-cs
---

# ReGameDLL_CS

O ReGameDLL_CS é um substituto da GameDLL de servidor do Counter-Strike (`mp.dll` no Windows e `cs.so` no Linux), obtido por engenharia reversa e mantido ativamente. Ele é baseado na GameDLL original do Counter-Strike da build 6153 beta do HLDS e traz correções, novas configurações de servidor, suporte a bots embutido e uma API estendida para mods e plugins.

O projeto é compatível com o conteúdo oficial de servidor da Valve para:

- Counter-Strike 1.6 (`cstrike`)
- Counter-Strike: Condition Zero (`czero`)

Use a [versão estável mais recente](https://github.com/rehlds/ReGameDLL_CS/releases/latest) em servidores de produção. As builds de desenvolvimento ficam disponíveis no [workflow do GitHub Actions](https://github.com/rehlds/ReGameDLL_CS/actions/workflows/build.yml) do projeto, mas podem conter mudanças que ainda não chegaram a uma versão estável.

## O que o ReGameDLL_CS acrescenta

- Correções de bugs de jogabilidade e do lado do servidor.
- Regras de jogo adicionais e CVars configuráveis.
- Suporte embutido ao zBot, com modos de cota de bots e ferramentas de navegação.
- IA de reféns aprimorada do Condition Zero, que também pode ser instalada no CS 1.6.
- Novos comandos de servidor, como `game version`, `endround` e `swapteams`.
- Uma API estendida da GameDLL, usada por projetos como o [ReAPI](https://github.com/rehlds/ReAPI).

A lista completa e continuamente atualizada das configurações fica no arquivo [`game.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game.cfg) do repositório.

## Aviso de compatibilidade

:::warning Compatibilidade binária

O ReGameDLL_CS não é compatível em nível binário com a GameDLL original da Valve, porque é compilado com compiladores diferentes. Plugins que inspecionam ou aplicam patches no binário original por assinaturas ou offsets, como alguns plugins baseados em Orpheu, podem falhar ou derrubar o servidor.

Prefira APIs suportadas, como o ReAPI, e teste todo plugin dependente de binário antes de colocá-lo em um servidor de produção.

:::

Os plugins comuns de AMX Mod X e Metamod que usam interfaces documentadas em geral não são afetados por esse aviso.

## Arquivos de um lançamento

O arquivo estável `regamedll-bin-*.zip` contém builds separadas para `win32` e `linux32`:

| Plataforma | GameDLL | Caminho no lançamento |
| --- | --- | --- |
| Windows | `mp.dll` | `bin/win32/cstrike/dlls/mp.dll` |
| Linux x86 | `cs.so` | `bin/linux32/cstrike/dlls/cs.so` |

Cada pasta de plataforma também contém `game.cfg`, `game_init.cfg` e `delta.lst`. Os perfis e sons do zBot para o CS 1.6 são distribuídos à parte; veja [Uso de bots](./bots/).

## Por onde continuar

- [Instalar ou atualizar o ReGameDLL_CS](./install/)
- [Configurar regras de jogo e comandos de servidor](./settings/)
- [Instalar e operar o zBot](./bots/)
- [Compilar o ReGameDLL_CS a partir do código-fonte](./compilling/)
- [Resolver problemas em um servidor](./troubbleshouting/)

Depois da instalação, execute este comando no console do servidor:

```text
game version
```

Uma instalação bem-sucedida imprime a versão da build do ReGameDLL_CS, a data da build e o endereço do projeto.
