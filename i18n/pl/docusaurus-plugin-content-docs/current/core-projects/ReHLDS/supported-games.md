---
id: rehlds-supported-games
title: Obsługiwane gry
sidebar_position: 1
description: ReHLDS to przebudowana wersja oryginalnego HLDS, z wyższym poziomem bezpieczeństwa, lepszą wydajnością i szerszymi możliwościami modyfikacji gier takich jak Half-Life i Counter-Strike 1.6.
slug: /rehlds/supported-games
---

<head>
  <title>ReHLDS: Obsługiwane gry | ReHLDS</title>
</head>

# Obsługiwane gry

ReHLDS zastępuje sam **silnik** HLDS (`swds.dll` / `engine_i486.so`), a nie bibliotekę GameDLL konkretnej modyfikacji. Dlatego „obsługiwane gry” sprowadzają się w istocie do dwóch rzeczy: z którą wersją HLDS ReHLDS jest zgodny i na jakiej platformie go uruchamiasz. Każda modyfikacja GoldSrc, która działa na tej wersji HLDS — Half-Life, Counter-Strike 1.6, Condition Zero, Day of Defeat, Team Fortress Classic, Deathmatch Classic i modyfikacje zewnętrzne — zadziała też na ReHLDS.

## Zgodność z wersjami silnika

| Wersja HLDS | Stan |
| --- | --- |
| Steamowa wersja sprzed aktualizacji rocznicowej (wersja silnika ≤ 8684), pobrana przez `steamcmd` | :heavy_check_mark: W pełni obsługiwana |
| Stare wersje 5xxx i wcześniejsze, pobrane przez dawne `hldsupdatetool` | :x: Niezgodne |

:::warning

ReHLDS nie jest zgodny ze starą platformą 5xxx i wcześniejszą, instalowaną przez `hldsupdatetool`. Zanim zgłosisz problem, upewnij się, że używasz wersji sprzed aktualizacji rocznicowej, opisanej w [Instalacji](./installing.md).

:::

## Obsługiwane platformy

| Platforma | Plik binarny | Wymagania procesora |
| --- | --- | --- |
| Windows | `swds.dll` | SSE, SSE2, SSE3 (SSE4.1 / SSE4.2 używane, gdy są dostępne) |
| Linux (32-bitowy) | `engine_i486.so` | SSE, SSE2, SSE3 (SSE4.1 / SSE4.2 używane, gdy są dostępne) |

ReHLDS jest rozprowadzany razem z **ReHLTV**, ulepszoną wersją serwera pośredniczącego Half-Life TV, dzięki czemu konfiguracje HLTV dostają te same poprawki i podniesione limity bez osobnego pobierania.

## Zgodność z modyfikacjami i wtyczkami

Skoro ReHLDS zastępuje wyłącznie warstwę silnika, zgodność na poziomie modyfikacji (GameDLL, wtyczki Metamoda, wtyczki AMX Mod X) zależy zwykle od samej modyfikacji i wtyczki, a nie od ReHLDS. Dwie rzeczy warto mieć na uwadze:

- ReHLDS **nie jest zgodny na poziomie binarnym** z oryginalnym HLDS — jest budowany innymi kompilatorami niż oryginalne pliki Valve. Wtyczki, które modyfikują plik binarny wprost albo skanują silnik w poszukiwaniu sygnatur (na przykład Orpheu), mogą działać nieprawidłowo i wymagają wyraźnego wsparcia dla ReHLDS.
- Aktualny stan zgodności konkretnej modyfikacji w połączeniu z [Metamod-R](/pl/docs/metamod-r/supported-games) albo [ReGameDLL_CS](/pl/docs/regamedll-cs/supported-games) sprawdzisz na stronie obsługiwanych gier danego projektu — te warstwy leżą bezpośrednio na ReHLDS.
