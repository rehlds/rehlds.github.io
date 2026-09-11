---
id: metamod-r-install
title: Instalação
sidebar_position: 2
description: O Metamod-R é uma versão otimizada do Metamod original, com mais desempenho e melhor compatibilidade para servidores de Half-Life 1.
slug: /metamod-r/install
---

<head>
  <title>Metamod-R: Instalação | ReHLDS</title>
</head>

# Instalação

Consulte a [lista de jogos compatíveis](/pt-BR/docs/metamod-r/supported-games) e verifique se o seu jogo aparece nela. _Não fique chateado se não aparecer. Depois da instalação, você pode testar o funcionamento do **Metamod-r** com o seu mod `não suportado` após um ajuste fino feito com base neste [artigo](/pt-BR/docs/metamod-r/settings). Existe a possibilidade de o jogo iniciar._

# Compatibilidade

**O Metamod-r é incompatível com o `HLDS` original. É necessário ter o [ReHLDS](https://github.com/rehlds/ReHLDS) instalado (`API 3.1+`). Não há garantia de que o produto funcione em um ambiente diferente.**

| HLDS| [ReHLDS](https://github.com/rehlds/ReHLDS)| SO
|---------| -------|  -------|  
| :x: | `API 3.1+` | ![](https://i.imgur.com/AzhAYR4.png) ![](https://i.imgur.com/t23p9tU.png) |  

# Instalação no servidor de jogo
* Baixe a versão mais recente do _**Metamod-r**_ [![Download](https://camo.githubusercontent.com/2b15ec2fc402e02b66fde9eab7e896406caeddac/687474703a2f2f7265686c64732e6f72672f76657273696f6e2f6d6574616d6f642d2d722e737667)](http://teamcity.rehlds.org/guestAuth/downloadArtifacts.html?buildTypeId=Metamod_Publish&buildId=lastSuccessful) para qualquer lugar conveniente.
* Extraia a pasta _**addons**_ do arquivo zip baixado para dentro da pasta do seu mod.![](https://i.imgur.com/ptx3MZx.png)
_Em caso de dúvida ao determinar o nome do diretório, consulte a tabela-resumo que está **[aqui](/pt-BR/docs/metamod-r/troubbleshouting)**._
* Encontre o arquivo `liblist.gam` na pasta do mod, faça uma cópia de segurança dele (se quiser) e abra o arquivo em um editor de texto de sua preferência.
* Localize no arquivo `liblist.gam` as linhas que contêm `gamedll` e `gamedll_linux`. _No `Half-Life 1`, por exemplo, elas ficam assim:_
```
gamedll "dlls\hl.dll"
gamedll_linux "dlls/hl.so"
```
_já no `Counter-Strike 1.6`:_

```
gamedll "dlls\mp.dll"
gamedll_linux "dlls/cs.so"
```
* Na linha desejada, substitua o conteúdo pelo caminho do metamod-r:

_Para as versões Windows do seu servidor:_
```
gamedll "addons\metamod\metamod.dll"
```
_Para as versões Linux do seu servidor:_
```
gamedll_linux "addons/metamod/metamod_i386.so"
```
* Salve as alterações no arquivo `liblist.gam`.
* A instalação do **Metamod-r** está concluída.

# Verificação

Depois de instalar o **Metamod-r** com sucesso, você pode conferir o funcionamento iniciando o servidor de jogo.

O **Metamod-r** está funcionando:
![](https://i.imgur.com/VScngBr.png)
Se não estiver,
![](https://i.imgur.com/HPKRiBF.png)
consulte [o guia de solução de problemas](/pt-BR/docs/metamod-r/troubbleshouting).
