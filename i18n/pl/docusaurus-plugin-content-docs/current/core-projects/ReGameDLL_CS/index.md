---
id: regamedll-cs
title: ReGameDLL_CS
sidebar_position: 1
description: Aktualny przegląd, uwagi o zgodności, pliki do pobrania i dalsze kroki dla administratorów serwerów i programistów ReGameDLL_CS.
slug: /regamedll-cs
---

# ReGameDLL_CS

ReGameDLL_CS to odtworzony metodą inżynierii wstecznej i aktywnie utrzymywany zamiennik serwerowej biblioteki GameDLL Counter-Strike’a (`mp.dll` w Windowsie i `cs.so` w Linuksie). Opiera się na oryginalnej bibliotece GameDLL Counter-Strike’a z wersji 6153 beta HLDS i wnosi poprawki, nowe ustawienia serwera, wbudowaną obsługę botów oraz rozszerzone API dla modyfikacji i wtyczek.

Projekt obsługuje oficjalne serwerowe pliki Valve dla:

- Counter-Strike 1.6 (`cstrike`)
- Counter-Strike: Condition Zero (`czero`)

Na serwerach produkcyjnych używaj [najnowszego wydania stabilnego](https://github.com/rehlds/ReGameDLL_CS/releases/latest). Wersje rozwojowe są dostępne w [przepływie pracy GitHub Actions](https://github.com/rehlds/ReGameDLL_CS/actions/workflows/build.yml) projektu, ale mogą zawierać zmiany, które nie trafiły jeszcze do wydania stabilnego.

## Co wnosi ReGameDLL_CS

- Poprawki błędów w rozgrywce i po stronie serwera.
- Dodatkowe zasady gry i konfigurowalne CVary.
- Wbudowaną obsługę zBot, w tym tryby limitu botów i narzędzia nawigacji.
- Ulepszoną sztuczną inteligencję zakładników z Condition Zero, którą można zainstalować także w CS 1.6.
- Nowe polecenia serwera, takie jak `game version`, `endround` i `swapteams`.
- Rozszerzone API biblioteki GameDLL, z którego korzystają projekty takie jak [ReAPI](https://github.com/rehlds/ReAPI).

Pełną, stale aktualizowaną listę ustawień znajdziesz w pliku [`game.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game.cfg) w repozytorium projektu.

## Ostrzeżenie o zgodności

:::warning Zgodność binarna

ReGameDLL_CS nie jest zgodny na poziomie binarnym z oryginalną biblioteką GameDLL Valve, ponieważ jest budowany innymi kompilatorami. Wtyczki, które badają albo modyfikują oryginalny plik binarny po sygnaturach lub przesunięciach, jak niektóre wtyczki oparte na Orpheu, mogą zawieść albo wywrócić serwer.

Wybieraj obsługiwane API, takie jak ReAPI, i przetestuj każdą wtyczkę zależną od pliku binarnego, zanim trafi na serwer produkcyjny.

:::

Zwykłe wtyczki AMX Mod X i Metamoda, które korzystają z udokumentowanych interfejsów, na ogół nie są objęte tym ostrzeżeniem.

## Pliki w wydaniu

Stabilne archiwum `regamedll-bin-*.zip` zawiera osobne wersje dla `win32` i `linux32`:

| Platforma | GameDLL | Ścieżka w wydaniu |
| --- | --- | --- |
| Windows | `mp.dll` | `bin/win32/cstrike/dlls/mp.dll` |
| Linux x86 | `cs.so` | `bin/linux32/cstrike/dlls/cs.so` |

W każdym folderze platformy są też `game.cfg`, `game_init.cfg` i `delta.lst`. Profile i dźwięki zBot dla CS 1.6 rozprowadzane są osobno; zobacz [Korzystanie z botów](./bots/).

## Gdzie dalej

- [Instalacja lub aktualizacja ReGameDLL_CS](./install/)
- [Konfiguracja zasad gry i poleceń serwera](./settings/)
- [Instalacja i obsługa zBot](./bots/)
- [Kompilacja ReGameDLL_CS ze źródeł](./compilling/)
- [Rozwiązywanie problemów z serwerem](./troubbleshouting/)

Po instalacji uruchom w konsoli serwera to polecenie:

```text
game version
```

Udana instalacja wypisze wersję ReGameDLL_CS, datę kompilacji i adres projektu.
