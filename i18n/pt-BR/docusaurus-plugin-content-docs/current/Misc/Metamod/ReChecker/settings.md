---
id: rechecker-settings
title: "ReChecker: Configurações"
sidebar_label: Configurações
sidebar_position: 3
description: ReChecker é um plugin do Metamod que permite verificar os arquivos do cliente pelo nome e pelo hash md5.
slug: /rechecker/settings
keywords:
  - rechecker
  - metamod
  - plugin
  - settings
tags:
  - rechecker
  - settings
last_update:
  date: 07/21/2025
  author: STAM
---

# Configurações

O ReChecker é configurado pelo `addons/rechecker/resources.ini` (ao lado do binário dele) e por uma única cvar de console.

## Formato do `resources.ini`

Cada regra é uma linha com um caminho, um hash (ou uma palavra-chave) e um comando a executar quando houver correspondência, além de flags opcionais:

```text
path to file        hash          "exec cmd"      [FLAGS]
"../opengl32.dll"    3cc7f256      "kick [userid]"
```

### Campo do hash

| Valor | Significado |
| --- | --- |
| Um hash em hexadecimal (por exemplo, `3cc7f256`) | Corresponde exatamente a esse hash. 4 bytes (8 caracteres hexadecimais) bastam — não é preciso o MD5 completo. |
| `UNKNOWN` | Corresponde a qualquer hash não coberto por outra regra do mesmo caminho. |
| `MISSING` | Corresponde quando o arquivo não foi enviado pelo cliente. |

### Flags

| Flag | Efeito |
| --- | --- |
| `BREAK` | Interrompe a verificação das regras seguintes para este cliente assim que esta corresponder. |
| `IGNORE` | Coloca este hash específico na lista de permissões — nenhum comando é executado. |

### Marcadores dos comandos

Disponíveis dentro da string `"exec cmd"`:

| Marcador | Valor |
| --- | --- |
| `[name]` | Apelido do cliente. |
| `[ip]` | Endereço IP do cliente. |
| `[id]` | Índice do cliente. |
| `[userid]` | Userid do cliente. |
| `[steamid]` | SteamID do cliente. |
| `[file_name]` | Caminho do arquivo verificado. |
| `[file_hash]` | Hash da resposta do cliente para aquele arquivo. |
| `[file_md5hash]` | Hash MD5 completo da resposta do cliente para aquele arquivo. |

### Exemplos de regras

```ini
; Expulsa por um hash de arquivo sabidamente ruim e para de verificar as demais regras deste cliente
"../demoplayer.dll"    ad6d0e43    "kick [userid] 'WallHack Detected'"    BREAK

; Coloca na lista de permissões um hash sabidamente bom para o mesmo caminho
"../demoplayer.dll"    7ef5b581    IGNORE

; Registra no log (sem expulsar) qualquer hash de um arquivo que você ainda não acompanha
"../demoplayer.dll"    UNKNOWN     "echo ' -> file: ([file_name]), md5hex: ([file_md5hash]) for ([name])'"

; Expulsa quando um arquivo é esperado, mas está ausente
"../opengl32.dll"      MISSING     "kick [userid] 'OpenGL32 Missing'"     BREAK
```

O `resources.ini` aceita um BOM em UTF-8 e linhas de comentário iniciadas por `;`. Comece pelo modelo [`dist/resources.ini`](https://github.com/rehlds/ReChecker/blob/master/dist/resources.ini) do projeto, que já vem com assinaturas de vários arquivos de cheat historicamente conhecidos, e amplie-o por conta própria.

## Variável de console

| Cvar | Padrão | Descrição |
| --- | --- | --- |
| `rch_log` | `0` | Nível de detalhe do log. `0` desativa o registro; valores maiores registram mais detalhes. |

## Logs

Quando a `rch_log` está ativada, o ReChecker grava arquivos de log diários em `addons/rechecker/logs/`.
