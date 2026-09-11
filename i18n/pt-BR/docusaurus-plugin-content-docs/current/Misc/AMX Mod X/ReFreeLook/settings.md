---
id: refreelook-settings
title: "ReFreeLook: Configurações"
sidebar_label: Configurações
sidebar_position: 3
description: ReFreeLook - módulo do AMX Mod X que permite aos administradores em modo espectador usar qualquer modo de câmera, independentemente do valor de `mp_forcecamera` ou `mp_forcechasecam`. Funciona apenas com a versão mais recente do `ReGameDLL_CS`.
slug: /refreelook/settings
keywords:
  - refreelook
  - AMX Mod X
  - amxx
  - amx
  - module
  - settings
tags:
  - refreelook
  - settings
last_update:
  date: 07/21/2025
  author: STAM
---

# Configurações

O ReFreeLook tem uma única cvar.

## `afl_admin_access_flags`

Flags de acesso isentas do modo de câmera de espectador imposto pelo servidor (`mp_forcecamera`/`mp_forcechasecam`). Um jogador cujo nível de acesso no AMX Mod X inclua **qualquer uma** das flags listadas ganha controle irrestrito da câmera enquanto assiste. As flags são cumulativas — combine quantas letras quiser.

| Padrão |
| --- |
| `d` |

As flags são as flags de acesso padrão do AMX Mod X (conforme documentado no `users.ini`):

| Flag | Acesso |
| --- | --- |
| `a` | Imunidade (não pode ser expulso, banido, morto nem esbofeteado, nem afetado por outros comandos de administração). |
| `b` | Reserva (pode entrar em slots reservados). |
| `c` | Comando `amx_kick`. |
| `d` | Comandos `amx_ban` e `amx_unban` (banimentos permanentes e temporários). |
| `e` | Comandos `amx_slay` e `amx_slap`. |
| `f` | Comando `amx_map`. |
| `g` | Comando `amx_cvar` (nem todas as cvars ficam disponíveis). |
| `h` | Comando `amx_cfg`. |
| `i` | Comando `amx_chat` e demais comandos de bate-papo. |
| `j` | Comando `amx_vote` e demais comandos de votação. |
| `k` | Acesso à cvar `sv_password` (pelo `amx_cvar`). |
| `l` | Acesso ao comando `amx_rcon` e à cvar `rcon_password` (pelo `amx_cvar`). |
| `m`–`t` | Níveis personalizados A–H, para plugins adicionais. |
| `u` | Acesso ao menu. |
| `v` | `amx_ban`/`amx_unban`, apenas banimentos temporários (no `amx_unban`, apenas os banimentos aplicados pela própria pessoa durante o mapa atual). |
| `z` | Usuário (sem acesso administrativo). |

Como o padrão é `d` (comandos de banimento), a maioria dos servidores vai querer acrescentar a flag (ou as flags) que o seu grupo real de moderação e administração usa — por exemplo:

```text
afl_admin_access_flags "cd"
```

concede câmera livre a quem tiver a flag de expulsão (`c`) ou de banimento (`d`).
