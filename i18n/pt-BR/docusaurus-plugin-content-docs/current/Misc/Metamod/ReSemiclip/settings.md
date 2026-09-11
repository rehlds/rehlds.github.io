---
id: resemiclip-settings
title: Configurações
sidebar_position: 3
description: ReSemiclip - plugin do Metamod que controla a possibilidade de atravessar outros jogadores. O módulo Semiclip de `joaquimandrade` foi usado como referência.
slug: /resemiclip/settings
---

<head>
  <title>ReSemiclip: Configurações | ReHLDS</title>
</head>

# Configurações

## `config.ini`

O `addons/resemiclip/config.ini` guarda os padrões de todo o servidor, em linhas no formato `chave = valor;`:

| Chave | Faixa | Padrão (distribuído) | Descrição |
| --- | --- | --- | --- |
| `semiclip` | `0`–`1` | `1` | Desliga ou liga o semiclip. |
| `team` | `0`–`3` | `3` | A quem se aplica: `0` a todos, `1` só aos Terroristas, `2` só aos Contraterroristas, `3` só aos companheiros de time. |
| `time` | `0`–`180` | `0` | Segundos a partir do início do round durante os quais o semiclip fica ativo. `0` significa que ele fica ativo permanentemente, e não apenas por uma janela. |
| `crouch` | `0`–`1` | `1` | Permite que os jogadores pulem em cima de um jogador agachado. |
| `effects` | `0`–`1` | `0` | Define se a transparência do jogador varia conforme a distância entre os jogadores. |
| `distance` | `64`–`250` | `200` | Distância (em unidades) a partir da qual os efeitos de transparência e semiclip se aplicam. |
| `transparency` | `0`–`255` | `120` | Nível de transparência do jogador enquanto ele está em semiclip. |
| `penetfire` | `0`–`1` | `0` | Permite que os tiros atravessem companheiros de time em semiclip. |

Valores fora da faixa são ajustados ao limite válido mais próximo, em vez de serem recusados.

## Ajustes por mapa e por prefixo

O ReSemiclip carrega a configuração nesta ordem, e cada etapa sobrescreve apenas as chaves que define:

1. `addons/resemiclip/config.ini` — padrões de todo o servidor.
2. `addons/resemiclip/maps/prefix_<prefixo>.ini` — em que `<prefixo>` é tudo o que vem antes do primeiro sublinhado no nome do mapa atual (por exemplo, `de` em `de_dust2`).
3. `addons/resemiclip/maps/<nomedomapa>.ini` — o nome exato do mapa atual (por exemplo, `de_dust2.ini`).

:::note

Os arquivos de exemplo distribuídos em `maps/` (`_de_dust2.ini`, `_prefix_de.ini`) têm um sublinhado inicial de propósito — esse não é um nome de arquivo que o ReSemiclip realmente procure. Eles são modelos inertes; renomeie-os para o nome exato esperado (`de_dust2.ini`, `prefix_de.ini`) para ativá-los.

:::

## Comando de console em tempo real

```text
semiclip_option <chave> <valor>
```

Altera uma configuração em tempo de execução usando as mesmas chaves do `config.ini` (por exemplo, `semiclip_option time 5`). Execute `semiclip_option` sem argumentos (ou com uma chave inválida) para imprimir as configurações ativas no momento.
