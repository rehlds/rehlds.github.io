---
id: regamedll-cs-supported-games
title: Jogos e plataformas compatíveis
sidebar_position: 3
description: Jogos, sistemas operacionais e motores compatíveis com o ReGameDLL_CS.
slug: /regamedll-cs/supported-games
---

# Jogos e plataformas compatíveis

O ReGameDLL_CS é uma GameDLL do lado do servidor para as versões GoldSrc do Counter-Strike e do Counter-Strike: Condition Zero.

## Jogos compatíveis

| Jogo | Diretório do jogo | Observações |
| --- | --- | --- |
| Counter-Strike 1.6 | `cstrike` | Totalmente compatível. O pacote opcional de dados do zBot é necessário se você quiser usar os bots embutidos. |
| Counter-Strike: Condition Zero | `czero` | Totalmente compatível. Os recursos dos bots já vêm com o jogo. |

O ReGameDLL_CS não é uma GameDLL de substituição direta para outros mods de GoldSrc. Não o instale em diretórios como `valve`, `dod` ou `tfc`.

## Plataformas de servidor compatíveis

Os arquivos oficiais dos lançamentos contêm binários de servidor de 32 bits para as duas plataformas principais:

| Plataforma | GameDLL |
| --- | --- |
| Windows | `dlls/mp.dll` |
| Linux | `dlls/cs.so` |

O arquivo guarda cada plataforma em `bin/win32` ou `bin/linux32`. Copie o conteúdo do diretório correspondente para o diretório do seu jogo.

O ReGameDLL_CS substitui apenas a lógica do jogo. Você ainda precisa de um motor GoldSrc compatível, como o HLDS atual da Steam ou o ReHLDS, e dos arquivos originais do jogo.

## Compatibilidade com motores e clientes

- O ReHLDS é o recomendado para servidores dedicados, mas o ReGameDLL_CS também roda em uma instalação compatível do HLDS da Steam.
- Normalmente os jogadores não precisam instalar o ReGameDLL_CS. Ele é um substituto do lado do servidor.
- Mantenha a GameDLL, o motor, o Metamod e os plugins do servidor atualizados em conjunto. Plugins antigos que aplicam patches binários podem depender de offsets da GameDLL original da Valve e ser incompatíveis.
- Motores alternativos, como o Xash3D, são projetos separados. A compatibilidade deles pode diferir do ambiente oficial Steam/ReHLDS e deve ser verificada com o projeto do motor.
