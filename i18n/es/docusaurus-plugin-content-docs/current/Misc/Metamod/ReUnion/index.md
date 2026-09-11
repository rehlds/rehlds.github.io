---
id: reunion
title: ReUnion
sidebar_position: 1
description: ReUnion es un plugin de Metamod que permite a los clientes sin Steam con los protocolos 47 y 48 conectarse a servidores ReHLDS.
slug: /reunion
---

# ¿Qué es ReUnion?

ReUnion es un plugin de [Metamod](https://github.com/rehlds/Metamod-R) que permite a los clientes de GoldSrc sin Steam (protocolos 47 y 48) conectarse a servidores [ReHLDS](/es/docs/rehlds). Es la continuación del proyecto DProto, adaptada específicamente a ReHLDS.

Históricamente, buena parte de los jugadores de Half-Life/Counter-Strike se conecta mediante clientes sin Steam que usan emuladores diversos (revEmu, SteamEmu, SC2009 y otros). ReUnion autentica esos clientes y les asigna identificadores (`STEAM_`/`VALVE_`) según tu configuración, corrige los problemas de compatibilidad con el listado de servidores y las consultas que provocan algunos de ellos, y añade protección frente a avalanchas de consultas, todo ello sin necesidad de instalar DProto aparte.

Puedes encontrar servidores que ejecutan ReUnion a través de [Game Tracker](http://www.gametracker.com/search/?search_by=server_variable&search_by2=reu_version).

## De qué se encarga

- **Identificación de clientes**: asigna a cada cliente que se conecta un identificador con formato `STEAM_`/`VALVE_`, con reglas distintas según el tipo de cliente (Steam auténtico, revEmu, SteamEmu, SC2009, AVSMP, escáneres SETTI, sXeI y más). Consulta [Configuración](./settings.md).
- **Protección del SteamID**: un hash con sal opcional (`SteamIdHashSalt`) hace irreversibles los identificadores generados, lo que impide suplantar o robar SteamIDs.
- **Compatibilidad de las consultas al servidor**: correcciones para clientes que gestionan mal las consultas del listado de servidores, más un limitador opcional de frecuencia frente a avalanchas de consultas.

## Requisitos

- ReHLDS API `3.10` o posterior.
- Metamod (se recomienda Metamod-R).

Consulta [Instalación](./installing.md).

:::note

ReUnion admitía anteriormente el emulador `SmartSteamEmu3`. Ese soporte se retiró al publicar el código del proyecto, porque dependía de código de autorización sensible. Rara vez afecta a la afluencia real de jugadores, ya que ese emulador es poco frecuente entre los clientes sin Steam.

:::
