---
id: refreelook-settings
title: "ReFreeLook: Ustawienia"
sidebar_label: Ustawienia
sidebar_position: 3
description: ReFreeLook - moduł AMX Mod X pozwalający administratorom w trybie obserwatora korzystać z dowolnego trybu kamery, niezależnie od wartości `mp_forcecamera` czy `mp_forcechasecam`. Działa tylko z najnowszą wersją `ReGameDLL_CS`.
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

# Ustawienia

ReFreeLook ma jeden cvar.

## `afl_admin_access_flags`

Uprawnienia zwolnione z narzuconego przez serwer trybu kamery obserwatora (`mp_forcecamera`/`mp_forcechasecam`). Gracz, którego poziom dostępu w AMX Mod X obejmuje **którekolwiek** z wymienionych uprawnień, dostaje nieograniczoną kontrolę nad kamerą podczas obserwowania. Uprawnienia się sumują — łącz dowolną liczbę liter.

| Domyślnie |
| --- |
| `d` |

Uprawnienia to standardowe uprawnienia AMX Mod X (opisane w `users.ini`):

| Uprawnienie | Dostęp |
| --- | --- |
| `a` | Immunitet (nie da się takiego gracza wyrzucić, zbanować, zabić ani spoliczkować, nie działają na niego inne polecenia administracyjne). |
| `b` | Rezerwacja (może wejść na zarezerwowane miejsce). |
| `c` | Polecenie `amx_kick`. |
| `d` | Polecenia `amx_ban` i `amx_unban` (bany stałe i tymczasowe). |
| `e` | Polecenia `amx_slay` i `amx_slap`. |
| `f` | Polecenie `amx_map`. |
| `g` | Polecenie `amx_cvar` (nie wszystkie cvary są dostępne). |
| `h` | Polecenie `amx_cfg`. |
| `i` | Polecenie `amx_chat` i pozostałe polecenia czatu. |
| `j` | Polecenie `amx_vote` i pozostałe polecenia głosowania. |
| `k` | Dostęp do cvara `sv_password` (przez `amx_cvar`). |
| `l` | Dostęp do polecenia `amx_rcon` i cvara `rcon_password` (przez `amx_cvar`). |
| `m`–`t` | Poziomy własne A–H, dla dodatkowych wtyczek. |
| `u` | Dostęp do menu. |
| `v` | `amx_ban`/`amx_unban`, wyłącznie bany tymczasowe (przy `amx_unban` tylko bany nałożone samodzielnie podczas bieżącej mapy). |
| `z` | Użytkownik (bez uprawnień administracyjnych). |

Skoro domyślną wartością jest `d` (polecenia banowania), większość serwerów będzie chciała dopisać uprawnienie albo uprawnienia, z których faktycznie korzysta jej ekipa moderatorska i administracyjna — na przykład:

```text
afl_admin_access_flags "cd"
```

daje swobodną kamerę każdemu, kto ma uprawnienie do wyrzucania (`c`) albo do banowania (`d`).
