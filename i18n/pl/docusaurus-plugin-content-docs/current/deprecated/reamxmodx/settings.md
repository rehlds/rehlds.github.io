---
id: reamxmodx-settings
title: Ustawienia
sidebar_position: 3
description: ReAMXModX - przestarzały fork AMX Mod X, który dodał obsługę API ReHLDS i ReGameDLL, zanim zrobił to oficjalny AMX Mod X.
slug: /reamxmodx/settings
---

<head>
  <title>ReAMXModX: Ustawienia | ReHLDS</title>
</head>

# Ustawienia

:::warning Projekt porzucony

Zachowane dla orientacji. Użyj [AMX Mod X](https://www.amxmodx.org/) od AlliedModders — przeczytaj [Czym jest ReAMXModX?](./index.md).

:::

ReAMXModX **nie wprowadził żadnej własnej konfiguracji**. Jego zmiany to wewnętrzny kod spajający SDK dla API ReHLDS i ReGameDLL, a nie funkcje dla użytkownika, więc cała przestrzeń konfiguracji należy do oficjalnego AMX Mod X.

Fork zawiera standardowy zestaw plików konfiguracyjnych AMX Mod X w katalogu `configs/`:

| Plik | Do czego służy |
| --- | --- |
| `amxx.cfg` | Główna konfiguracja i cvary AMX Mod X. |
| `core.ini` | Ustawienia modułu rdzenia. |
| `configs.ini` | Wybór konfiguracji dla poszczególnych modyfikacji. |
| `modules.ini` | Moduły wczytywane przy starcie. |
| `plugins.ini` | Wtyczki wczytywane przy starcie. |
| `users.ini` | Konta administratorów i ich uprawnienia. |
| `cmds.ini`, `clcmds.ini` | Definicje poleceń serwerowych i klienckich. |
| `cvars.ini` | Definicje cvarów używanych przez menu. |
| `maps.ini` | Lista map używana przez menu map. |
| `hamdata.ini` | Przesunięcia funkcji Ham Sandwich. |
| `custommenuitems.cfg`, `miscstats.ini` | Pozycje menu i wyświetlanie statystyk. |

Wszystkie działają dokładnie tak, jak opisuje AlliedModders — fork nie zmienił żadnego formatu ani wartości domyślnej.

:::note

Skoro konfiguracja jest identyczna, serwer przechodzący z tego forka na bieżący oficjalny AMX Mod X może zachować katalog `configs/` bez zmian. Warto ręcznie sprawdzić jeden wyjątek: `hamdata.ini` zawiera przesunięcia funkcji, powiązane z wersją AMX Mod X i biblioteką GameDLL, której używasz, więc weź kopię z bieżącego wydania, zamiast przenosić dalej tę z 2016 roku.

:::

Miarodajny opis znajdziesz w [dokumentacji AMX Mod X](https://wiki.alliedmods.net/Category:AMX_Mod_X) i w [spisie poleceń AMX Mod X](https://wiki.alliedmods.net/Commands_(AMX_Mod_X)).
