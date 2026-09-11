---
id: hitbox-fixer-settings
title: Configurações
sidebar_position: 3
description: Hitbox Fixer - plugin de terceiros para Metamod que corrige as hitboxes de jogador incorretas do lado do servidor no Counter-Strike 1.6, no Half-Life e no Adrenaline Gamer.
slug: /hitbox-fixer/settings
---

<head>
  <title>Hitbox Fixer: Configurações | ReHLDS</title>
</head>

# Configurações

O Hitbox Fixer é configurado pelo `addons/hitboxfixer/hbf.cfg`, que fica ao lado do binário do plugin. Ele contém uma única cvar.

## Cvar

| Cvar | Padrão | Descrição |
| --- | --- | --- |
| `hbf_enabled` | `1` | Ativa a correção das hitboxes. Defina `0` para desligar o plugin sem descarregá-lo do Metamod. |

A configuração padrão distribuída tem uma linha só:

```text
hbf_enabled "1"
```

:::note

Desligar a `hbf_enabled` restaura o comportamento original (defeituoso) das hitboxes do motor. A chave existe principalmente para você comparar a diferença em um servidor ao vivo ao investigar reclamações sobre o registro de acertos — não há motivo para deixá-la em `0` na operação normal.

:::
