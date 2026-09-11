---
id: revoice-settings
title: Configurações
sidebar_position: 3
description: ReVoice - plugin do Metamod, transcodificador de voz que corrige o bate-papo por voz entre clientes Steam e não Steam em servidores ReHLDS.
slug: /revoice/settings
---

<head>
  <title>ReVoice: Configurações | ReHLDS</title>
</head>

# Configurações

O ReVoice é configurado pelo `addons/revoice/revoice.cfg`, que é executado (`exec`) na inicialização como um arquivo de configuração de servidor comum — ele é uma lista de atribuições de cvars, e não um arquivo INI.

## Cvars

| Cvar | Padrão | Descrição |
| --- | --- | --- |
| `REV_DefaultCodec` | `speex` | Codec para o qual o ReVoice transcodifica a voz de saída dos jogadores comuns. Aceita `speex` ou `opus`. |
| `REV_HltvCodec` | `opus` | Codec para o qual o ReVoice transcodifica a voz de saída do HLTV. Aceita `speex` ou `opus`. |
| `revoice_version` | *(versão atual)* | Somente leitura; informa a versão do ReVoice carregada. |

A configuração padrão distribuída:

```text
REV_HltvCodec opus		// speex, opus
REV_DefaultCodec speex	// speex, opus
```

As mudanças nas cvars valem na hora — o ReVoice fica atento a alterações nas duas cvars de codec e as reaplica sem reiniciar.

:::note

A `sv_voiceenable` é uma cvar padrão do motor, e não uma configuração do ReVoice — ela precisa estar em `1` para que o bate-papo por voz funcione. O ReVoice apenas corrige a compatibilidade de codecs entre clientes Steam e não Steam depois que o bate-papo por voz já está ativado.

:::

## Comando de console

```text
rev version
rev status
```

- `rev version` — imprime a versão do ReVoice carregada, a data da build e o commit.
- `rev status` — imprime o estado detalhado em tempo de execução (acrescentado especificamente para diagnosticar problemas de voz).
