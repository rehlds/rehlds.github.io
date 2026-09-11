---
id: hitboxtracker-settings
title: Configurações
sidebar_position: 3
description: hitboxtracker - ferramenta de desenvolvimento descontinuada do ReHLDS que desenhava no cliente as posições das hitboxes calculadas pelo servidor.
slug: /hitboxtracker/settings
---

<head>
  <title>hitboxtracker: Configurações | ReHLDS</title>
</head>

# Configurações

:::warning Descontinuado

Mantido como referência. O hitboxtracker não é mais mantido — leia [O que é o hitboxtracker?](./index.md).

:::

O hitboxtracker não acrescentava cvars próprias. Ele estendia a cvar padrão `r_drawentities` do lado do cliente com dois modos extras, de modo que tudo era conduzido pelo console do cliente.

## `r_drawentities`

| Valor | Descrição |
| --- | --- |
| `0` | Nenhuma entidade. |
| `1` | Padrão — desenha as entidades normalmente. |
| `2` | Entidades desenhadas como esqueletos. |
| `3` | Entidades desenhadas como hitboxes. |
| `4` | Entidades desenhadas com hitboxes translúcidas e o modelo por baixo delas. |
| `5` | Caixa individual para o jogador e para a arma. |
| `6` | Acrescentado pelo hitboxtracker. Igual ao `4`, mas também desenha a posição real das hitboxes conforme calculada pelo servidor. |
| `7` | Acrescentado pelo hitboxtracker. Igual ao `6`, mas sem translucidez. |

Os valores de `0` a `5` são do próprio motor e funcionam sem a ferramenta. Apenas o `6` e o `7` exigiam as duas metades do hitboxtracker instaladas.

:::note

O objetivo dos modos `6` e `7` era justamente a *diferença*: você comparava as caixas do próprio cliente com as do servidor, e um deslocamento visível entre elas explicava reclamações sobre o registro de acertos que, de outro modo, pareceriam coisa da cabeça do jogador.

:::
