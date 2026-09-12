---
id: reamxmodx-install
title: Instalare
sidebar_position: 2
description: ReAMXModX - fork învechit al AMX Mod X, care a adăugat susținerea API-urilor ReHLDS și ReGameDLL înainte să o facă AMX Mod X oficial.
slug: /reamxmodx/install
---

<head>
  <title>ReAMXModX: Instalare | ReHLDS</title>
</head>

# Instalare

:::warning Abandonat

Nu instalați ReAMXModX pe un server actual. Instalați în schimb [AMX Mod X](https://www.amxmodx.org/) de la AlliedModders — el susține ReHLDS în mod nativ, singurul lucru pentru care exista acest fork.

:::

## Nu există versiuni de instalat

ReAMXModX **nu a publicat nicio versiune**. Depozitul conține doar cod sursă — nicio pagină de versiuni, nicio arhivă, niciun binar precompilat. Oricine voia să îl ruleze trebuia mai întâi să îl [compileze din sursă](./compilling.md).

Numai acest lucru îl face nepotrivit astăzi pentru o instalare obișnuită de server: ați compila singur un instantaneu din 2016 al AMX Mod X și l-ați întreține apoi pe cont propriu.

## Dacă migrați de la el

Dacă ați moștenit un server care rulează o versiune a acestui fork, trecerea la AMX Mod X oficial este calea prevăzută:

1. Instalați o versiune actuală de [AMX Mod X](https://www.amxmodx.org/downloads-new.php) pentru modul dumneavoastră, urmând documentația lui.
2. Păstrați directorul `configs/` existent — forkul nu a schimbat niciodată formatul configurației, așa că `amxx.cfg`, `users.ini`, `cmds.ini` și celelalte trec mai departe nemodificate. Vedeți [Setări](./settings.md).
3. Recompilați propriile pluginuri `.sma` cu fișierele de includere actuale ale AMX Mod X.
4. Verificați cu `amxx version` și `amxx modules` în consola serverului.

Pentru acces la nivelul motorului și la cel al GameDLL-ului din Pawn, pe o configurație modernă, folosiți [ReAPI](/ro/docs/reapi) în locul unui AMX Mod X modificat — aceasta este calea susținută pentru a ajunge astăzi la mecanismele interne ale ReHLDS și ReGameDLL_CS.
