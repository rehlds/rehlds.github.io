---
id: reamxmodx-settings
title: Setări
sidebar_position: 3
description: ReAMXModX - fork învechit al AMX Mod X, care a adăugat susținerea API-urilor ReHLDS și ReGameDLL înainte să o facă AMX Mod X oficial.
slug: /reamxmodx/settings
---

<head>
  <title>ReAMXModX: Setări | ReHLDS</title>
</head>

# Setări

:::warning Abandonat

Păstrat ca referință. Folosiți [AMX Mod X](https://www.amxmodx.org/) de la AlliedModders — citiți [Ce este ReAMXModX?](./index.md).

:::

ReAMXModX **nu a introdus nicio configurație proprie**. Modificările lui erau legături interne de SDK pentru API-urile ReHLDS și ReGameDLL, nu funcții destinate utilizatorului, așa că întreaga suprafață de configurare este cea a AMX Mod X oficial.

Forkul conține setul standard de fișiere de configurare AMX Mod X, în `configs/`:

| Fișier | Rol |
| --- | --- |
| `amxx.cfg` | Configurația principală și cvar-urile AMX Mod X. |
| `core.ini` | Setările modulului de bază. |
| `configs.ini` | Alegerea configurației pentru fiecare mod. |
| `modules.ini` | Modulele care se încarcă la pornire. |
| `plugins.ini` | Pluginurile care se încarcă la pornire. |
| `users.ini` | Conturile de administrator și drepturile de acces. |
| `cmds.ini`, `clcmds.ini` | Definițiile comenzilor de server și de client. |
| `cvars.ini` | Definițiile cvar-urilor folosite de meniuri. |
| `maps.ini` | Lista hărților folosită de meniurile de hărți. |
| `hamdata.ini` | Decalajele funcțiilor Ham Sandwich. |
| `custommenuitems.cfg`, `miscstats.ini` | Elementele de meniu și afișarea statisticilor. |

Toate se comportă exact așa cum sunt descrise de AlliedModders — forkul nu a schimbat niciun format și nicio valoare implicită.

:::note

Fiindcă configurația este identică, un server care trece de la acest fork la AMX Mod X oficial actual își poate păstra directorul `configs/` ca atare. Merită verificată manual o singură excepție: `hamdata.ini` conține decalaje de funcții, legate de versiunea AMX Mod X și de GameDLL-ul pe care îl rulați, așa că luați copia din versiunea actuală, în loc să o duceți mai departe pe cea din 2016.

:::

Pentru referința de bază, vedeți [documentația AMX Mod X](https://wiki.alliedmods.net/Category:AMX_Mod_X) și [lista comenzilor AMX Mod X](https://wiki.alliedmods.net/Commands_(AMX_Mod_X)).
