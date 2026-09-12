---
id: metamod-r-settings
title: Ustawienia
sidebar_position: 3
description: Metamod-R to zoptymalizowana wersja oryginalnego Metamoda, z lepszą wydajnością i zgodnością dla serwerów Half-Life 1.
slug: /metamod-r/settings
---

<head>
  <title>Metamod-R: Ustawienia | ReHLDS</title>
</head>

# Ustawienia

## Podłączanie wtyczek w plugins.ini
Jako przykładu użyjemy wymyślonej wtyczki `metaPlugin`. Instalacja pozostałych wtyczek wygląda podobnie.
 
* Utwórz plik `plugins.ini` w folderze `addons\metamod` (jeśli go tam nie ma)
* Utwórz folder dla nowej wtyczki w folderze `addons`._Na przykład folder **metaPlugin**._
* * Umieść swoją wtyczkę `metaPlugin.dll` (albo `metaPlugin.so`) w utworzonym folderze `addons\metaPlugin`.
* Otwórz plik `plugins.ini` z folderu `metamod` w dowolnym edytorze tekstu.
* * Żeby podłączyć wtyczkę `metaPlugin.dll` (albo `metaPlugin.so`), wpisz do pliku `plugins.ini` następujące wiersze:

_Dla windowsowych wersji twojego serwera:_
```
win32 addons\metaPlugin\metaPlugin.dll
```
_Dla linuksowych wersji twojego serwera:_
```
linux addons/metaPlugin/metaPlugin.so
```
* Zapisz plik `plugins.ini` i uruchom serwer.
* Instalacja jest **zakończona**.

_Działanie wtyczki sprawdzisz poleceniem `meta list` w konsoli serwera._
![](https://i.imgur.com/1fVXBzc.png)

w razie niepowodzenia,
![](https://i.imgur.com/nGXAokG.png)
zajrzyj do [Rozwiązywania problemów](https://github.com/rehlds/metamod-r/wiki/Troubbleshouting).

# Lista poleceń konsoli
Polecenie poprzedź słowem `meta`. _Na przykład `meta version`_.

```
     version                - informacje o wersji metamoda
     list                   - lista wczytanych wtyczek
     game                   - informacje o gamedll (lista zarejestrowanych komunikatów, id i rozmiar)
     cmds                   - lista poleceń konsoli dodanych przez zewnętrzne wtyczki
     cvars                  - lista cvarów dodanych przez zewnętrzne wtyczki
     refresh                - ponowne wczytanie metamod-r
     config                 - konfiguracja z config.ini 
     load <nazwa>           - znajduje i wczytuje wtyczkę ze wskazanej ścieżki
     unload <wtyczka>       - wyładowuje wtyczkę
     reload <wtyczka>       - wczytuje wtyczkę ponownie
     info <wtyczka>         - informacje o wtyczce
     pause <wtyczka>        - wstrzymuje wtyczkę
     unpause <wtyczka>      - wznawia działanie wszystkich zainstalowanych wtyczek
     retry <wtyczka>        - ponawia wczytanie wtyczek, które się nie powiodły
     clear <wtyczka>        - usuwa z pamięci wtyczki, które się nie wczytały
     force_unload <wtyczka> - wymusza wyładowanie wtyczki
     require <wtyczka>      - wyłącza serwer, jeśli wskazana wtyczka nie działa
```

### debuglevel 
 
| **var** | debuglevel 
| :----- | -----:
| **typ** | int
| **przyjmuje** | od 0 do 42
| **domyślnie** | 0
| **nadpisywane przez** |  `+localinfo mm_debug <liczba>`
| **przykład** | `debuglevel 0`
| **opis** | Ustawia początkowy poziom diagnostyki metamoda (odpowiednik cvara "meta_debug"). Gdzie `<liczba>` to liczba całkowita, od 0 w górę. Domyślnie zwykle 0.  Jeśli hlds uruchomiono z "-dev", domyślną wartością jest 3.

### gamedll
| **var** | gamedll
| :----- | -----:
| **typ** | string
| **przyjmuje** | `<ścieżka>`
| **domyślnie** | null
| **nadpisywane przez** |  `+localinfo mm_gamedll <ścieżka>`
| **przykład** |  `gamedll dlls/hl.dll`, `gamedll ../podbot/podbot.dll`, `gamedll /home/bots/dlls/mybot.dll`
| **opis** | Zastępuje automatycznie wykryty gamedll, szczególnie w przypadku botów. Gdzie `<ścieżka>` to ścieżka bezwzględna albo względna wobec katalogu gry. Domyślnie wartość jest pusta, a gamedll rozpoznawany jest automatycznie na podstawie katalogu gry.

### exec_cfg 
| **var** | exec_cfg 
| :----- | -----:
| **typ** | string
| **przyjmuje** | `<plik>`
| **domyślnie** | `addons/metamod/exec.cfg`
| **nadpisywane przez** |  `+localinfo mm_execcfg <plik>`
| **przykład** |  `exec_cfg configs/debugging.cfg`, `exec_cfg ../clan/match.cfg`
| **opis** | Zastępuje domyślną nazwę pliku z poleceniami hlds wykonywanymi zaraz po wczytaniu Metamoda. Gdzie `<plik>` to ścieżka względna wobec katalogu gry.  Uwaga!  NIE może to być ścieżka bezwzględna, bo hlds nie wykonuje "exec" na ścieżkach bezwzględnych.
 
### clientmeta 
| **var** | clientmeta 
| :----- | -----:
| **typ** | bool
| **przyjmuje** | `<yes/no>`
| **domyślnie** | `yes`
| **nadpisywane przez** |  `+localinfo mm_clientmeta <yes/no>`
| **przykład** |  `clientmeta yes`, `clientmeta no`
| **opis** | Ustawienie wyłączające lub włączające klienckie polecenia Metamoda ('meta list' i 'meta version'). Dodatkowe ustawienie dla "Metamod+All-Mod-Support Patch". 

### dynalign_list
| **var** | dynalign_list 
| :----- | -----:
| **typ** | bool
| **przyjmuje** | `<yes/no>`
| **domyślnie** | `no`
| **nadpisywane przez** |   
| **przykład** |  `dynalign_list yes`, `dynalign_list no`
| **opis** | Ustawienie wyłączające lub włączające dynamiczne wyrównywanie listy wtyczek przy wypisywaniu.  **UWAGA**: ta opcja wpływa na błędne odczytanie danych przez HLSW w zakładce `Metamod Plugins`.
