---
id: regamedll-cs-troubbleshouting
title: Rozwiązywanie problemów
sidebar_position: 6
description: Typowe problemy z instalacją, konfiguracją i botami w ReGameDLL_CS.
slug: /regamedll-cs/troubbleshouting
---

# Rozwiązywanie problemów

## `game version` nie pokazuje ReGameDLL

Serwer prawdopodobnie wciąż wczytuje poprzednią bibliotekę GameDLL.

1. Zatrzymaj serwer całkowicie.
2. Sprawdź, czy skopiowałeś plik binarny dla właściwego systemu do `cstrike/dlls` albo `czero/dlls`.
3. Sprawdź, czy serwer korzysta z tego katalogu gry, który zmieniałeś (`-game cstrike` albo `-game czero`).
4. Uruchom serwer i wykonaj `game version` w jego konsoli.

W Linuksie sprawdź też właściciela pliku i uprawnienia do odczytu. Pamiętaj, że oficjalny plik serwera jest 32-bitowy, więc maszyna potrzebuje odpowiednich 32-bitowych bibliotek uruchomieniowych.

## Polecenia botów nie są rozpoznawane

Na serwerze dedykowanym `bot_enable` musi być ustawione, zanim biblioteka GameDLL się zainicjalizuje.

1. Ustaw `bot_enable "1"` w `cstrike/game_init.cfg` albo w `czero/game_init.cfg`.
2. W Counter-Strike 1.6 zainstaluj zawartość oficjalnego `bot_profiles.zip` w `cstrike`.
3. Zrestartuj cały serwer; zmiana cvara po starcie nie wystarczy.

Nie dodawaj `-bots` ani `-host-improv` do wiersza poleceń. Te stare przełączniki usunięto na rzecz cvarów.

## Boty są włączone, ale nie wchodzą do gry

Sprawdź obowiązujące wartości:

```text
bot_quota
bot_quota_mode
bot_join_after_player
bot_join_team
```

Do prostego sprawdzenia użyj:

```cfg
bot_quota_mode "normal"
bot_quota "4"
bot_join_after_player "0"
bot_join_team "any"
```

Potem zmień mapę albo zrestartuj serwer. Możesz też ręcznie wykonać `bot_add`, żeby odróżnić problem z limitem od problemu z danymi botów albo z nawigacją.

## Brakuje profili albo nazw botów

Counter-Strike 1.6 nie zawiera wszystkich danych botów z Condition Zero. Rozpakuj archiwum `regamedll/extra/zBot/bot_profiles.zip` z repozytorium do katalogu `cstrike`, zachowując strukturę folderów. Jeśli podajesz nazwę profilu w `bot_add`, musi ona istnieć w zainstalowanej bazie profili.

## Boty nie radzą sobie z nawigacją na własnej mapie

Mapa może nie mieć zgodnej siatki nawigacji. Uruchom mapę, dodaj bota i wykonaj `bot_nav_analyze` w konsoli serwera. Analiza potrafi mocno obciążyć procesor. Zapisz albo wczytaj ponownie wygenerowane dane nawigacji, zanim użyjesz ich na serwerze produkcyjnym.

## Serwer wysypuje się po podmianie biblioteki GameDLL

- Wyłącz na chwilę wtyczki Metamoda i przetestuj sam ReGameDLL_CS.
- Zaktualizuj ReHLDS, Metamod-R i wtyczki do zgodnych wersji.
- Usuń wtyczki modyfikujące sztywne adresy albo opierające się na przesunięciach z biblioteki GameDLL Valve, o ile ich dokumentacja nie wspomina wprost o obsłudze ReGameDLL_CS.
- Przywróć plik `delta.lst` z wydania, jeśli został przypadkiem nadpisany niezgodną wersją.

## Ustawienie nie działa

- Ustawienia obowiązujące tylko przy inicjalizacji, takie jak `bot_enable`, umieść w `game_init.cfg` i zrestartuj proces.
- Ustawienia rozgrywki umieść w `game.cfg` albo w innym pliku konfiguracyjnym wykonywanym po wczytaniu mapy.
- Poszukaj tego samego cvara w plikach konfiguracyjnych wykonywanych później; liczy się ostatnie przypisanie.
- Przy każdej aktualizacji porównuj swoją konfigurację z archiwum bieżącego wydania. Nowe wersje mogą dodawać cvary albo zmieniać wartości domyślne.

## Jak zgłosić problem

Zanim otworzysz zgłoszenie, zbierz:

- wynik polecenia `game version`;
- wersje ReHLDS/HLDS, Metamoda i ReGameDLL_CS;
- system operacyjny i katalog gry;
- listę wtyczek;
- istotne komunikaty z konsoli oraz minimalną konfigurację, która odtwarza problem.

Powtarzalne problemy ReGameDLL_CS zgłaszaj w [systemie zgłoszeń projektu](https://github.com/rehlds/ReGameDLL_CS/issues).
