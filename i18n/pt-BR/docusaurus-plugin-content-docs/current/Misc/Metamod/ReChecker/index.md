---
id: rechecker
title: "ReChecker"
sidebar_label: ReChecker
sidebar_position: 1
description: ReChecker é um plugin do Metamod que permite verificar os arquivos do cliente pelo nome e pelo hash md5.
slug: /rechecker
keywords:
  - rechecker
  - metamod
  - plugin
tags:
  - rechecker
  - metamod plugin
last_update:
  date: 07/21/2025
  author: STAM
---

# O que é o ReChecker?

O ReChecker é um plugin do [Metamod](https://github.com/rehlds/Metamod-R) para o [ReHLDS](/pt-BR/docs/rehlds) que inspeciona os arquivos que um cliente envia pelo sistema de recursos e consistência do motor, durante a conexão ou o download, e os compara com uma lista de regras fornecida por você. Quando o caminho e o hash de um arquivo (ou o fato de ele estar ausente ou não reconhecido) correspondem a uma regra, o ReChecker executa um comando de console à sua escolha — normalmente um `kick` ou uma mensagem de log.

Ele serve para pegar DLLs de cheat conhecidas e arquivos injetados pela assinatura estática do arquivo (caminho + um prefixo curto do MD5), independentemente da lógica de anticheat que rode em outro lugar.

## Como ele funciona

Para cada recurso relevante transferido por um cliente, o ReChecker o confronta com as regras do `resources.ini`:

- Uma regra pode corresponder a um **hash específico**, a `UNKNOWN` (qualquer coisa não reconhecida explicitamente) ou a `MISSING` (o arquivo não foi enviado).
- Uma regra correspondente executa um comando configurado, com marcadores como `[userid]`, `[name]`, `[file_name]` e `[file_md5hash]` substituídos pelos valores reais.
- A flag `BREAK` interrompe a verificação das regras seguintes para aquele cliente assim que uma corresponde; a `IGNORE` coloca um hash específico na lista de permissões.

Veja as [Configurações](./settings.md) para conhecer o formato completo do `resources.ini`.

## O que vem incluído

O projeto traz um `resources.ini` inicial com assinaturas de vários arquivos de cheat historicamente conhecidos (wallhacks, aimbots, injetores de DLL). Trate-o como um ponto de partida que você mesmo mantém — ele não é um banco de dados de cheats continuamente atualizado.

## Requisitos

O ReChecker depende da API estendida do motor do [ReHLDS](/pt-BR/docs/rehlds/install) — ele não carrega no HLDS puro. Ele também exige que o Metamod (o Metamod-R é o recomendado) esteja instalado antes. Veja a [Instalação](./installing.md).
