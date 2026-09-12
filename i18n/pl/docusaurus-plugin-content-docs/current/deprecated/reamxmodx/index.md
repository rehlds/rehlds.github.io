---
id: reamxmodx
title: ReAMXModX
sidebar_position: 1
description: ReAMXModX - przestarzały fork AMX Mod X, który dodał obsługę API ReHLDS i ReGameDLL, zanim zrobił to oficjalny AMX Mod X.
slug: /reamxmodx
---

# Czym jest ReAMXModX?

:::warning Projekt porzucony

ReAMXModX jest **przestarzały**. Oficjalny AMX Mod X zyskał w międzyczasie własną obsługę ReHLDS, co odebrało temu forkowi cały powód istnienia.

Użyj [AMX Mod X](https://www.amxmodx.org/) od AlliedModders. Wszystko, co oferował ten fork, jest dziś w projekcie oficjalnym — utrzymywane i wydawane.

:::

ReAMXModX był forkiem AMX Mod X, zaimportowanym w sierpniu 2016 z gałęzi rozwojowej `1.8.3` (`git5067`). Jego celem było nauczenie AMX Mod X API ReHLDS i ReGameDLL w czasach, gdy projekt oficjalny nic o nich nie wiedział.

## Co zmieniał

Commity tego forka są wąskie i konkretne. W rdzeniu AMX Mod X i w kilku modułach dokładał kod spajający SDK dla interfejsów ReHLDS i ReGameDLL — `mod_rehlds_api.cpp` i `mod_gamedll_api.cpp` pojawiają się w rdzeniu oraz w modułach `cstrike`, `csx`, `engine` i `fakemeta` — co w ostatnim commicie doprowadziło obsługę do API `3.x` ReHLDS i API `5.x` ReGameDLL.

Poza tym niósł kilka poprawek:

- Wyciek pamięci w `unregister_forward`.
- Błąd czatu związany z lokalizacją.
- Poprawki wyrównania danych dla wersji linuksowych.

## Dlaczego jest przestarzały

Oficjalny AMX Mod X zyskał obsługę ReHLDS, więc osobny fork niosący tę obsługę przestał być do czegokolwiek potrzebny. Prace tutaj skończyły się w grudniu 2016, a projekt nie opublikował żadnego wydania — nie ma tu pliku binarnego do zainstalowania, jest wyłącznie kod źródłowy zamrożony na dziewięcioletniej już migawce AMX Mod X.

Uruchomienie go dzisiaj oznaczałoby AMX Mod X z 2016 roku, pozbawiony wszystkiego, co projekt oficjalny wydał od tamtej pory, w zamian za obsługę ReHLDS, którą projekt oficjalny i tak zapewnia.

W [Instalacji](./installing.md), [Ustawieniach](./settings.md) i [Kompilacji](./compilling.md) opisano, co oznaczała praca z nim.
