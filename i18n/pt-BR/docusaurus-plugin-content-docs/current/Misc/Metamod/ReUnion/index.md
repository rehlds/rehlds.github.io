---
id: reunion
title: ReUnion
sidebar_position: 1
description: ReUnion - plugin do Metamod que permite a clientes não Steam dos protocolos 47 e 48 se conectarem a servidores ReHLDS.
slug: /reunion
---

# O que é o ReUnion?

O ReUnion é um plugin do [Metamod](https://github.com/rehlds/Metamod-R) que permite a clientes GoldSrc não Steam (protocolos 47 e 48) se conectarem a servidores [ReHLDS](/pt-BR/docs/rehlds). Ele é a continuação do projeto DProto, adaptada especificamente para o ReHLDS.

Historicamente, boa parte dos jogadores de Half-Life/Counter-Strike se conecta por clientes não Steam que usam emuladores variados (revEmu, SteamEmu, SC2009 e outros). O ReUnion autentica esses clientes e atribui identificadores (`STEAM_`/`VALVE_`) a eles conforme a sua configuração, corrige problemas de compatibilidade com a lista de servidores e as consultas que alguns desses clientes provocam e acrescenta proteção contra flood de consultas — tudo isso sem exigir uma instalação separada do DProto.

Você pode encontrar servidores rodando o ReUnion pelo [Game Tracker](http://www.gametracker.com/search/?search_by=server_variable&search_by2=reu_version).

## Do que ele cuida

- **Identificação de clientes** — atribui um ID no estilo `STEAM_`/`VALVE_` a cada cliente que se conecta, com regras separadas por tipo de cliente (Steam real, revEmu, SteamEmu, SC2009, AVSMP, scanners SETTI, sXeI e outros). Veja as [Configurações](./settings.md).
- **Proteção de SteamID** — um hash com sal opcional (`SteamIdHashSalt`) torna os IDs gerados irreversíveis, o que impede a falsificação e o roubo de SteamID.
- **Compatibilidade com consultas ao servidor** — correções para clientes com tratamento defeituoso das consultas da lista de servidores, além de uma limitação de taxa opcional contra abusos por flood de consultas.

## Requisitos

- ReHLDS com API `3.10` ou mais recente.
- Metamod (o Metamod-R é o recomendado).

Veja a [Instalação](./installing.md).

:::note

O ReUnion já teve suporte ao emulador `SmartSteamEmu3`. Esse suporte foi removido quando o projeto virou código aberto, já que dependia de um código de autorização sensível. Isso raramente afeta a população real dos servidores, porque esse emulador é pouco comum entre os clientes não Steam.

:::
