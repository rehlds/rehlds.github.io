---
id: regamedll-cs-install
title: Instalacja i aktualizacje
sidebar_position: 2
description: Zainstaluj lub zaktualizuj bieżące wydanie ReGameDLL_CS na serwerach Counter-Strike 1.6 i Condition Zero.
slug: /regamedll-cs/install
---

# Instalacja i aktualizacje

Ta instrukcja dotyczy dedykowanych serwerów Counter-Strike 1.6 i Counter-Strike: Condition Zero w Windowsie albo w 32-bitowym Linuksie.

## Zanim zaczniesz

1. Zatrzymaj serwer całkowicie.
2. Zrób kopię zapasową katalogu docelowej modyfikacji (`cstrike` albo `czero`), zwłaszcza folderu `dlls` i plików konfiguracyjnych.
3. Pobierz `regamedll-bin-*.zip` z [najnowszego wydania stabilnego](https://github.com/rehlds/ReGameDLL_CS/releases/latest).

:::note

Na stronie wydania jest też plik podpisu `.zip.asc`. Służy do weryfikacji i nie jest samym pakietem serwera.

:::

## Wybierz wersję dla właściwej platformy

| Platforma serwera | Folder w archiwum | Główny plik binarny |
| --- | --- | --- |
| Windows | `bin/win32/cstrike` | `dlls/mp.dll` |
| Linux x86 | `bin/linux32/cstrike` | `dlls/cs.so` |

Archiwum używa nazwy folderu `cstrike` dla obu obsługiwanych gier. Przy instalacji na Condition Zero skopiuj zawartość tego folderu do katalogu `czero` swojego serwera.

## Instalacja w Windowsie

1. Otwórz `bin/win32/cstrike` w pobranym archiwum.
2. Skopiuj zawartość do katalogu docelowej modyfikacji:
   - CS 1.6: `<serwer>/cstrike`
   - Condition Zero: `<serwer>/czero`
3. Sprawdź, czy `<mod>/dlls/mp.dll` został podmieniony.
4. Scal dołączone pliki konfiguracyjne w sposób opisany niżej.

## Instalacja w Linuksie

Rozpakuj archiwum, a następnie skopiuj wersję linuksową do katalogu docelowej modyfikacji. Dla CS 1.6 na przykład:

```bash
unzip regamedll-bin-*.zip
cp -a bin/linux32/cstrike/. /path/to/server/cstrike/
```

Dla Condition Zero jako cel podaj `/path/to/server/czero/`. Sprawdź, czy `<mod>/dlls/cs.so` został podmieniony i czy nadal może go odczytać konto, na którym działa serwer.

## Scalanie plików konfiguracyjnych

Nie nadpisuj bezmyślnie konfiguracji, którą już dostosowałeś.

| Plik | Do czego służy |
| --- | --- |
| `game.cfg` | Ustawienia rozgrywki i rozszerzone CVary ReGameDLL_CS. |
| `game_init.cfg` | Wczesne ustawienia GameDLL, takie jak `bot_enable` i `hostage_ai_enable`. |
| `delta.lst` | Definicje delta sieci dołączone do bieżącej wersji. Trzymaj ten plik w zgodzie z wydaniem. |

Przy pierwszej instalacji skopiuj wszystkie trzy pliki. Przy aktualizacji:

1. Podmień GameDLL i `delta.lst` na wersje z wydania.
2. Porównaj swoje `game.cfg` i `game_init.cfg` z nowymi kopiami.
3. Przenieś nowe CVary i komentarze, zachowując swoje wartości.

Najnowsze wzorce z repozytorium to [`game.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game.cfg) i [`game_init.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game_init.cfg).

## Uruchomienie i sprawdzenie

Uruchom serwer i wykonaj:

```text
game version
```

Jeśli polecenie nie jest rozpoznawane, nowa biblioteka GameDLL się nie wczytała. Sprawdź plik binarny wybranej platformy, katalog docelowej modyfikacji, uprawnienia plików oraz wpisy `gamedll` / `gamedll_linux` w `liblist.gam` modyfikacji.

## Aktualizacja istniejącej instalacji

Postępuj tak samo jak przy nowej instalacji: zatrzymaj serwer, zrób kopie zapasowe, podmień właściwą bibliotekę GameDLL i `delta.lst`, scal zmiany w konfiguracji, a potem sprawdź poleceniem `game version`.

Przed aktualizacją przeczytaj [informacje o wydaniu](https://github.com/rehlds/ReGameDLL_CS/releases). Nowe wersje mogą dodawać CVary albo zmieniać zachowanie API, co wpływa na ReAPI i wtyczki serwera.

## Opcjonalny tryb beta

ReGameDLL_CS zachowuje opcjonalny tryb beta z najnowszymi zmianami zaczerpniętymi z oficjalnej wersji Counter-Strike’a od Valve. Dodawaj `-beta` do wiersza poleceń HLDS tylko wtedy, gdy naprawdę chcesz ten tryb przetestować. Sprawdź zgodność wtyczek, zanim użyjesz go na serwerze produkcyjnym.
