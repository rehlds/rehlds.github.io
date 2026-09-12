---
id: regamedll-cs-supported-games
title: Obsługiwane gry i platformy
sidebar_position: 3
description: Gry, systemy operacyjne i silniki obsługiwane przez ReGameDLL_CS.
slug: /regamedll-cs/supported-games
---

# Obsługiwane gry i platformy

ReGameDLL_CS to serwerowa biblioteka GameDLL dla wersji GoldSrc Counter-Strike’a i Counter-Strike: Condition Zero.

## Obsługiwane gry

| Gra | Katalog gry | Uwagi |
| --- | --- | --- |
| Counter-Strike 1.6 | `cstrike` | W pełni obsługiwany. Opcjonalny pakiet danych zBot jest potrzebny, jeśli chcesz korzystać z wbudowanych botów. |
| Counter-Strike: Condition Zero | `czero` | W pełni obsługiwany. Zasoby botów są dołączone do gry. |

ReGameDLL_CS nie jest biblioteką GameDLL, którą można bez zmian podłożyć pod inne modyfikacje GoldSrc. Nie instaluj go w katalogach takich jak `valve`, `dod` czy `tfc`.

## Obsługiwane platformy serwerowe

Oficjalne archiwa wydań zawierają 32-bitowe pliki serwerowe dla obu głównych platform:

| Platforma | GameDLL |
| --- | --- |
| Windows | `dlls/mp.dll` |
| Linux | `dlls/cs.so` |

Archiwum trzyma każdą platformę w `bin/win32` albo `bin/linux32`. Skopiuj zawartość odpowiedniego katalogu do katalogu swojej gry.

ReGameDLL_CS zastępuje wyłącznie logikę gry. Nadal potrzebujesz zgodnego silnika GoldSrc, takiego jak obecny HLDS ze Steama albo ReHLDS, oraz oryginalnych plików gry.

## Zgodność z silnikami i klientami

- Na serwerach dedykowanych zalecany jest ReHLDS, ale ReGameDLL_CS zadziała też na zgodnej instalacji HLDS ze Steama.
- Gracze zwykle nie muszą instalować ReGameDLL_CS. To zamiennik działający po stronie serwera.
- Aktualizuj bibliotekę GameDLL, silnik, Metamoda i wtyczki serwera razem. Stare wtyczki modyfikujące pliki binarne mogą polegać na przesunięciach z oryginalnej biblioteki GameDLL Valve i okazać się niezgodne.
- Alternatywne silniki, takie jak Xash3D, to osobne projekty. Ich zgodność może się różnić od środowiska oficjalnego Steam/ReHLDS i należy ją sprawdzić u twórców danego silnika.
