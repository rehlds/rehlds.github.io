---
id: safenameandchat-settings
title: Configurações
sidebar_position: 3
description: SafeNameAndChat - plugin de terceiros para Metamod que neutraliza exploits de strings de localização e de injeção de comandos nos nomes dos jogadores e nas mensagens de bate-papo.
slug: /safenameandchat/settings
---

<head>
  <title>SafeNameAndChat: Configurações | ReHLDS</title>
</head>

# Configurações

O SafeNameAndChat é configurado pelo `SafeNameAndChat.cfg`, que o plugin executa (`exec`) a partir do próprio diretório na inicialização. Ele é uma lista simples de atribuições de cvars, e todas as proteções vêm ativadas por padrão.

## Cvars do bate-papo

| Cvar | Padrão | Descrição |
| --- | --- | --- |
| `SNAC_Chat_ReplaceNumberSign` | `1` | Substitui o `#` pelo `＃` de largura completa, para que o cliente não consiga resolver o texto como uma chave de localização. |
| `SNAC_Chat_ReplacePercentSign` | `1` | Substitui o `%` pelo `％` de largura completa, para que ele não chegue a uma função de formatação do lado do cliente. |
| `SNAC_Chat_RemoveUnprintable` | `1` | Descarta os caracteres não imprimíveis da mensagem. |
| `SNAC_Chat_TrimSpaces` | `1` | Remove os espaços do começo e do fim, incluindo caracteres que apenas se parecem com um espaço. |
| `SNAC_Chat_TruncateToEngineLimitAfterReplace` | `1` | Trunca de novo a mensagem no limite de bytes do motor *depois* da substituição. Os caracteres de largura completa ocupam três bytes em UTF-8 onde o original ocupava um, então uma mensagem que cabia antes pode estourar depois. O limite aplicado é de 127 bytes, ou 125 quando as aspas ao redor da mensagem são restauradas. |

## Cvars dos nomes

| Cvar | Padrão | Descrição |
| --- | --- | --- |
| `SNAC_Name_ReplaceNumberSign` | `1` | Substitui o `#` pelo `＃` nos nomes dos jogadores. |
| `SNAC_Name_ReplacePercentSign` | `1` | Substitui o `%` pelo `％` nos nomes dos jogadores. |
| `SNAC_Name_ReplaceAmpersand` | `1` | Substitui o `&` pelo `＆` nos nomes dos jogadores. |
| `SNAC_Name_ReplacePlusSign` | `1` | Neutraliza a sintaxe `+comando`: quando um `+` é seguido imediatamente de uma letra ou de um dígito ASCII, esse caractere seguinte é trocado pela forma de largura completa, o que quebra a sintaxe de bind e mantém o nome legível. |
| `SNAC_Name_RemoveUnprintable` | `1` | Descarta os caracteres não imprimíveis do nome. |
| `SNAC_Name_TrimSpaces` | `1` | Remove os espaços do começo e do fim do nome. |

## Cvar somente leitura

| Cvar | Descrição |
| --- | --- |
| `SNAC_Version` | Informa a versão carregada do plugin. É registrada como uma cvar de servidor; não é editável. |

## A configuração padrão distribuída

```text
SNAC_Chat_ReplaceNumberSign                 1
SNAC_Chat_ReplacePercentSign                1
SNAC_Chat_RemoveUnprintable                 1
SNAC_Chat_TrimSpaces                        1
SNAC_Chat_TruncateToEngineLimitAfterReplace 1

SNAC_Name_ReplaceNumberSign                 1
SNAC_Name_ReplacePercentSign                1
SNAC_Name_ReplaceAmpersand                  1
SNAC_Name_ReplacePlusSign                   1
SNAC_Name_RemoveUnprintable                 1
SNAC_Name_TrimSpaces                        1
```

:::warning

Desligar uma opção reabre o exploit que ela cobre. Se você desativar algo para contornar um conflito com outro plugin, desative a opção mais específica possível, em vez do grupo inteiro de bate-papo ou de nomes, e verifique antes se o plugin conflitante não está fazendo a própria higienização.

:::

:::note

Se todas as opções de um grupo estiverem em `0`, o plugin pula por completo o processamento daquele grupo, em vez de executar uma passagem sem efeito — então um grupo totalmente desativado não custa nada.

:::
