---
id: regamedll-cs-settings
title: Konfiguracja i polecenia
sidebar_position: 4
description: Skonfiguruj pliki ReGameDLL_CS, najczęściej używane CVary rozgrywki i polecenia konsoli serwera.
slug: /regamedll-cs/settings
---

# Konfiguracja i polecenia

ReGameDLL_CS dokłada ustawienia do standardowych CVarów serwera Counter-Strike. Zacznij od plików konfiguracyjnych dołączonych do tego samego wydania co twoja biblioteka GameDLL.

## Pliki konfiguracyjne

| Plik | Do czego służy |
| --- | --- |
| `<mod>/game.cfg` | Zasady rozgrywki ReGameDLL_CS, zachowanie HUD-u, poruszanie się, odradzanie, obrażenia i rozszerzenia limitu botów. |
| `<mod>/game_init.cfg` | Ustawienia, które muszą być znane podczas inicjalizacji GameDLL: `bot_enable`, `hostage_ai_enable` i `mp_hullbounds_sets`. |
| `<mod>/server.cfg` | Zwykłe ustawienia serwera, takie jak nazwa, hasła, logowanie i standardowe CVary Counter-Strike’a. |

`<mod>` oznacza `cstrike` w CS 1.6 albo `czero` w Condition Zero.

:::important

Po zmianie `game_init.cfg` zrestartuj cały proces serwera. Sama zmiana mapy może nie zainicjalizować ponownie funkcji takich jak wbudowane boty.

:::

## Najczęściej używane ustawienia ReGameDLL_CS

Poniższe wartości pochodzą z konfiguracji bieżącego wydania stabilnego. Twój serwer może je nadpisać.

| CVar | Wartość z wydania | Do czego służy |
| --- | ---: | --- |
| `mp_freeforall` | `0` | Włącza tryb każdy na każdego, gdy ustawione na `1`. |
| `mp_round_infinite` | `0` | Nie pozwala wybranym warunkom scenariusza zakończyć rundy. Przyjmuje też flagi takie jak `a`, `e` albo połączenia w rodzaju `ae`. |
| `mp_round_restart_delay` | `5` | Przerwa w sekundach przed kolejną rundą po zwycięstwie. |
| `mp_roundrespawn_time` | `20` | Czas od początku rundy, w którym dołączający gracz może się jeszcze pojawić w grze; `-1` znosi to ograniczenie. |
| `mp_forcerespawn` | `0` | Automatycznie przywraca zabitych graczy do gry po podanej przerwie. |
| `mp_maxmoney` | `16000` | Maksymalna ilość pieniędzy gracza; ReGameDLL_CS dopuszcza wartości do `999999`. |
| `mp_buy_anywhere` | `0` | Pozwala kupować w dowolnym miejscu obu drużynom (`1`), tylko terrorystom (`2`) albo tylko antyterrorystom (`3`). |
| `mp_infinite_ammo` | `0` | `1` utrzymuje pełny magazynek; `2` daje nieskończoną amunicję zapasową. |
| `mp_infinite_grenades` | `0` | Włącza nieskończone granaty, gdy ustawione na `1`. |
| `mp_free_armor` | `0` | Daje kamizelkę (`1`) albo kamizelkę i hełm (`2`) przy pojawieniu się w grze. |
| `mp_team_flash` | `1` | Decyduje, czy granaty błyskowe działają na współdrużynników i na rzucającego. |
| `sv_autobunnyhopping` | `0` | Skacze automatycznie, dopóki klawisz skoku jest wciśnięty. |
| `sv_enablebunnyhopping` | `0` | Pozwala prędkości przekroczyć zwykły limit biegu. |
| `mp_scoreboard_showhealth` | `3` | Decyduje, czyje zdrowie jest wysyłane i pokazywane w tabeli wyników. |
| `mp_scoreboard_showmoney` | `3` | Decyduje, czyje pieniądze są wysyłane i pokazywane w tabeli wyników. |
| `mp_allow_point_servercommand` | `0` | Pozwala mapom wykonywać polecenia serwera. Przy mapach z niepewnego źródła trzymaj to wyłączone. |

Pełną listę dostępnych ustawień, przyjmowanych wartości i uwag o bezpieczeństwie znajdziesz w pliku [`dist/game.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game.cfg) w repozytorium — to on jest źródłem rozstrzygającym.

## Polecenia serwera

Wykonuj je w konsoli serwera albo, gdzie to możliwe, przez autoryzowaną sesję RCON.

| Polecenie | Opis |
| --- | --- |
| `game version` | Wypisuje wersję wczytanej biblioteki GameDLL, datę i adres projektu. |
| `endround` | Kończy rundę remisem. |
| `endround T` | Kończy rundę zwycięstwem terrorystów. |
| `endround CT` | Kończy rundę zwycięstwem antyterrorystów. |
| `swapteams` | Zamienia drużyny stronami i restartuje rundę po domyślnej sekundzie przerwy. |
| `swapteams 0` | Zamienia drużyny stronami bez restartu rundy. |
| `swapteams <sekundy>` | Zamienia drużyny stronami i restartuje rundę po podanej przerwie. |
| `give weapon_ak47` | Daje wskazaną broń; wymaga `sv_cheats 1`. |
| `impulse 255` | Daje wszystkie bronie; wymaga `sv_cheats 1`. |
| `impulse 200` | Włącza noclip z przyspieszeniem w powietrzu; wymaga `sv_cheats 1`. |

Polecenia dotyczące botów i przykłady limitów opisano w [Korzystaniu z botów](../bots/).

## Bezpieczny sposób pracy z konfiguracją

1. Zachowaj kopię niezmienionej konfiguracji z każdego wydania.
2. Zmieniaj po jednej grupie ustawień naraz.
3. Zrestartuj serwer albo zmień mapę, zależnie od potrzeby, a potem sprawdź w konsoli serwera wartość, która faktycznie obowiązuje.
4. Zapisuj swoje wartości poza archiwum wydania, żeby aktualizacja nie nadpisała ich po cichu.
