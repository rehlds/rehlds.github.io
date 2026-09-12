---
id: refreelook-settings
title: "ReFreeLook: Setări"
sidebar_label: Setări
sidebar_position: 3
description: ReFreeLook - modul AMX Mod X care le permite administratorilor aflați în modul spectator să folosească orice mod de cameră, indiferent de valoarea `mp_forcecamera` sau `mp_forcechasecam`. Funcționează doar cu cea mai recentă versiune de `ReGameDLL_CS`.
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

# Setări

ReFreeLook are un singur cvar.

## `afl_admin_access_flags`

Drepturile de acces scutite de modul de cameră impus spectatorilor de către server (`mp_forcecamera`/`mp_forcechasecam`). Un jucător al cărui nivel de acces în AMX Mod X include **oricare** dintre drepturile enumerate primește control nelimitat al camerei cât timp este spectator. Drepturile se adună — combinați câte litere doriți.

| Implicit |
| --- |
| `d` |

Drepturile sunt cele standard din AMX Mod X (așa cum sunt descrise în `users.ini`):

| Drept | Acces |
| --- | --- |
| `a` | Imunitate (nu poate fi eliminat, interzis, ucis ori pălmuit și nu este afectat de alte comenzi de administrare). |
| `b` | Rezervare (poate intra pe locurile rezervate). |
| `c` | Comanda `amx_kick`. |
| `d` | Comenzile `amx_ban` și `amx_unban` (interdicții permanente și temporare). |
| `e` | Comenzile `amx_slay` și `amx_slap`. |
| `f` | Comanda `amx_map`. |
| `g` | Comanda `amx_cvar` (nu toate cvar-urile sunt disponibile). |
| `h` | Comanda `amx_cfg`. |
| `i` | Comanda `amx_chat` și celelalte comenzi de discuție. |
| `j` | Comanda `amx_vote` și celelalte comenzi de vot. |
| `k` | Acces la cvar-ul `sv_password` (prin `amx_cvar`). |
| `l` | Acces la comanda `amx_rcon` și la cvar-ul `rcon_password` (prin `amx_cvar`). |
| `m`–`t` | Niveluri personalizate A–H, pentru pluginuri suplimentare. |
| `u` | Acces la meniu. |
| `v` | `amx_ban`/`amx_unban`, doar interdicții temporare (la `amx_unban`, doar interdicțiile aplicate de persoana însăși în timpul hărții curente). |
| `z` | Utilizator (fără acces de administrare). |

Fiindcă valoarea implicită este `d` (comenzile de interdicție), majoritatea serverelor vor dori să adauge dreptul sau drepturile pe care le folosește efectiv echipa lor de moderare și administrare — de exemplu:

```text
afl_admin_access_flags "cd"
```

acordă cameră liberă oricui are dreptul de eliminare (`c`) sau pe cel de interdicție (`d`).
