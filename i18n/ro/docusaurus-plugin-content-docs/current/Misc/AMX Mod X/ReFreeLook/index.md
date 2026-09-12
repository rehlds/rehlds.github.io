---
id: refreelook
title: "ReFreeLook"
sidebar_label: ReFreeLook
sidebar_position: 1
description: ReFreeLook - modul AMX Mod X care le permite administratorilor aflați în modul spectator să folosească orice mod de cameră, indiferent de valoarea `mp_forcecamera` sau `mp_forcechasecam`. Funcționează doar cu cea mai recentă versiune de `ReGameDLL_CS`.
slug: /refreelook
keywords:
  - refreelook
  - AMX Mod X
  - amxx
  - amx
  - module
tags:
  - refreelook
  - amxx module
last_update:
  date: 07/21/2025
  author: STAM
---

# Ce este ReFreeLook?

ReFreeLook este un modul AMX Mod X care le permite administratorilor cu drepturile de acces potrivite să urmărească jocul liber ca spectatori, indiferent de valoarea `mp_forcecamera` sau `mp_forcechasecam` impusă spectatorilor obișnuiți. Este o continuare, bazată pe [ReGameDLL_CS](/ro/docs/regamedll-cs), a [AdminFreeLook al lui Arkshine](https://github.com/Arkshine/AdminFreeLook).

Serverele blochează de obicei modurile de cameră ale spectatorilor (`mp_forcecamera`/`mp_forcechasecam`), ca să îi împiedice pe jucători să cerceteze pozițiile în folosul coechipierilor. ReFreeLook îi scutește de această restricție pe administratorii care au drepturile dintr-un set configurabil, astfel încât echipa de moderare păstrează libertatea deplină a camerei, în timp ce spectatorii obișnuiți rămân limitați.

## Cerințe

- Cea **mai recentă** versiune de [ReGameDLL_CS](/ro/docs/regamedll-cs/install) — ReFreeLook pune hook-uri pe funcții ale GameDLL-ului care există doar acolo; el nu funcționează cu HLDS-ul și GameDLL-ul simple.
- AMX Mod X.

Vedeți [Instalare](./installing.md) și [Setări](./settings.md) pentru singurul cvar care stabilește cine primește camera liberă.
