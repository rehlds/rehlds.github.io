---
id: reamxmodx-settings
title: Configurações
sidebar_position: 3
description: ReAMXModX - fork obsoleto do AMX Mod X que acrescentou suporte às APIs do ReHLDS e do ReGameDLL antes de o AMX Mod X oficial fazê-lo.
slug: /reamxmodx/settings
---

<head>
  <title>ReAMXModX: Configurações | ReHLDS</title>
</head>

# Configurações

:::warning Descontinuado

Mantido como referência. Use o [AMX Mod X](https://www.amxmodx.org/) da AlliedModders — leia [O que é o ReAMXModX?](./index.md).

:::

O ReAMXModX **não introduziu nenhuma configuração própria**. As mudanças dele eram cola interna de SDK para as APIs do ReHLDS e do ReGameDLL, e não recursos voltados ao usuário, então toda a superfície de configuração é a do AMX Mod X oficial.

O fork traz o conjunto padrão de configurações do AMX Mod X em `configs/`:

| Arquivo | Finalidade |
| --- | --- |
| `amxx.cfg` | Configuração principal e cvars do AMX Mod X. |
| `core.ini` | Configurações do módulo do núcleo. |
| `configs.ini` | Seleção de configuração por mod. |
| `modules.ini` | Quais módulos carregar na inicialização. |
| `plugins.ini` | Quais plugins carregar na inicialização. |
| `users.ini` | Contas de administrador e flags de acesso. |
| `cmds.ini`, `clcmds.ini` | Definições de comandos de servidor e de cliente. |
| `cvars.ini` | Definições de cvars usadas pelos menus. |
| `maps.ini` | Lista de mapas usada pelos menus de mapa. |
| `hamdata.ini` | Offsets das funções do Ham Sandwich. |
| `custommenuitems.cfg`, `miscstats.ini` | Itens de menu e exibição de estatísticas. |

Todos eles se comportam exatamente como a AlliedModders documenta — o fork não alterou nenhum formato nem valor padrão.

:::note

Como a configuração é idêntica, um servidor que migre deste fork para o AMX Mod X oficial atual pode manter o diretório `configs/` como está. Vale conferir uma exceção à mão: o `hamdata.ini` guarda offsets de funções, que estão atrelados à versão do AMX Mod X e à GameDLL que você usa, então pegue a cópia do lançamento atual em vez de levar a de 2016 adiante.

:::

Para a referência definitiva, veja a [documentação do AMX Mod X](https://wiki.alliedmods.net/Category:AMX_Mod_X) e a [referência de comandos do AMX Mod X](https://wiki.alliedmods.net/Commands_(AMX_Mod_X)).
