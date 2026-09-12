---
id: metamod-r-install
title: Instalacja
sidebar_position: 2
description: Metamod-R to zoptymalizowana wersja oryginalnego Metamoda, z lepszą wydajnością i zgodnością dla serwerów Half-Life 1.
slug: /metamod-r/install
---

<head>
  <title>Metamod-R: Instalacja | ReHLDS</title>
</head>

# Instalacja

Sprawdź [listę obsługiwanych gier](/pl/docs/metamod-r/supported-games) i upewnij się, że twoja gra się na niej znajduje. _Nie przejmuj się, jeśli jej tam nie ma. Po instalacji możesz sprawdzić działanie **Metamod-r** ze swoją `nieobsługiwaną` modyfikacją po dostrojeniu według tego [artykułu](/pl/docs/metamod-r/settings). Jest szansa, że gra wystartuje._

# Zgodność

**Metamod-r nie jest zgodny z oryginalnym `HLDS`. Konieczne jest zainstalowanie [ReHLDS](https://github.com/rehlds/ReHLDS) (`API 3.1+`). Nie ma żadnej gwarancji, że produkt zadziała w innym środowisku.**

| HLDS| [ReHLDS](https://github.com/rehlds/ReHLDS)| System
|---------| -------|  -------|  
| :x: | `API 3.1+` | ![](https://i.imgur.com/AzhAYR4.png) ![](https://i.imgur.com/t23p9tU.png) |  

# Instalacja na serwerze gry
* Pobierz najnowszą wersję _**Metamod-r**_ [![Download](https://camo.githubusercontent.com/2b15ec2fc402e02b66fde9eab7e896406caeddac/687474703a2f2f7265686c64732e6f72672f76657273696f6e2f6d6574616d6f642d2d722e737667)](http://teamcity.rehlds.org/guestAuth/downloadArtifacts.html?buildTypeId=Metamod_Publish&buildId=lastSuccessful) w dowolne dogodne miejsce.
* Rozpakuj folder _**addons**_ z pobranego archiwum zip do folderu swojej modyfikacji.![](https://i.imgur.com/ptx3MZx.png)
_Jeśli masz wątpliwości co do nazwy katalogu, zajrzyj do tabeli zbiorczej, którą znajdziesz **[tutaj](/pl/docs/metamod-r/troubbleshouting)**._
* Znajdź plik `liblist.gam` w folderze modyfikacji, zrób jego kopię zapasową (jeśli chcesz) i otwórz go w dowolnym edytorze tekstu.
* Odszukaj w pliku `liblist.gam` wiersze zawierające `gamedll` i `gamedll_linux`. _W `Half-Life 1` wyglądają one tak:_
```
gamedll "dlls\hl.dll"
gamedll_linux "dlls/hl.so"
```
_a w `Counter-Strike 1.6`:_

```
gamedll "dlls\mp.dll"
gamedll_linux "dlls/cs.so"
```
* W odpowiednim wierszu wpisz ścieżkę do metamod-r:

_Dla windowsowych wersji twojego serwera:_
```
gamedll "addons\metamod\metamod.dll"
```
_Dla linuksowych wersji twojego serwera:_
```
gamedll_linux "addons/metamod/metamod_i386.so"
```
* Zapisz zmiany w pliku `liblist.gam`.
* Instalacja **Metamod-r** jest zakończona.

# Sprawdzenie

Po udanej instalacji **Metamod-r** możesz sprawdzić jego działanie, uruchamiając serwer gry.

**Metamod-r** działa:
![](https://i.imgur.com/VScngBr.png)
Jeśli nie działa,
![](https://i.imgur.com/HPKRiBF.png)
zajrzyj do [przewodnika rozwiązywania problemów](/pl/docs/metamod-r/troubbleshouting).
