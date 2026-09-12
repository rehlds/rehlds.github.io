---
id: reamxmodx
title: ReAMXModX
sidebar_position: 1
description: ReAMXModX - fork învechit al AMX Mod X, care a adăugat susținerea API-urilor ReHLDS și ReGameDLL înainte să o facă AMX Mod X oficial.
slug: /reamxmodx
---

# Ce este ReAMXModX?

:::warning Abandonat

ReAMXModX este **învechit**. AMX Mod X oficial a căpătat între timp propria susținere pentru ReHLDS, ceea ce a înlăturat întregul motiv de a exista al acestui fork.

Folosiți [AMX Mod X](https://www.amxmodx.org/) de la AlliedModders. Tot ce oferea acest fork se află astăzi în proiectul oficial, întreținut și cu versiuni publicate.

:::

ReAMXModX era un fork al AMX Mod X, importat în august 2016 din ramura de dezvoltare `1.8.3` (`git5067`). Scopul lui era să învețe AMX Mod X API-urile ReHLDS și ReGameDLL într-o vreme în care proiectul oficial nu știa nimic despre ele.

## Ce schimba

Commit-urile forkului sunt înguste și precise. În nucleul AMX Mod X și în mai multe module, el a adăugat legăturile de SDK pentru interfețele ReHLDS și ReGameDLL — `mod_rehlds_api.cpp` și `mod_gamedll_api.cpp` apar în nucleu și în modulele `cstrike`, `csx`, `engine` și `fakemeta` —, ceea ce a dus susținerea până la API-ul `3.x` al ReHLDS și API-ul `5.x` al ReGameDLL, în ultimul commit.

Pe lângă asta, aducea câteva corecturi:

- O scurgere de memorie în `unregister_forward`.
- O eroare de discuție legată de localizare.
- Corecturi de aliniere a datelor pentru versiunile de Linux.

## De ce este învechit

AMX Mod X oficial a căpătat susținere pentru ReHLDS, așa că un fork separat care purta această susținere a încetat să mai fie util. Lucrul aici s-a oprit în decembrie 2016, iar proiectul nu a publicat nicio versiune — nu există niciun binar de instalat, doar cod sursă înghețat la un instantaneu vechi de nouă ani al AMX Mod X.

Rularea lui astăzi ar însemna un AMX Mod X din 2016, lipsit de tot ce a publicat proiectul oficial de atunci, în schimbul unei susțineri pentru ReHLDS pe care proiectul oficial o oferă oricum.

Vedeți [Instalare](./installing.md), [Setări](./settings.md) și [Compilare](./compilling.md) pentru ce presupunea lucrul cu el.
