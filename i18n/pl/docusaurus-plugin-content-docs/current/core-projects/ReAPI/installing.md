---
id: reapi-install
title: Instalacja
sidebar_position: 2
description: ReAPI - moduł AMX Mod X udostępniający API dla ReHLDS, ReGameDLL i wtyczek Metamoda (na przykład ReUnion i ReVoice).
slug: /reapi/install
---

<head>
  <title>ReAPI: Instalacja | ReHLDS</title>
</head>

# Instalacja

ReAPI to moduł AMX Mod X. Wymaga zainstalowanego i działającego AMX Mod X, a przy tym podpina się pod warstwy leżące niżej, więc kolejność instalacji ma znaczenie.

## Zanim zaczniesz

Upewnij się, że poniższe rzeczy są już zainstalowane i działają:

1. [ReHLDS](/pl/docs/rehlds/install) — wymagany dla wszystkich hooków i składowych na poziomie silnika.
2. Metamod-R (albo Metamod) oraz AMX Mod X.
3. [ReGameDLL_CS](/pl/docs/regamedll-cs/install) — potrzebny tylko wtedy, gdy twoje wtyczki korzystają z hooków albo składowych na poziomie GameDLL (`reapi_gamedll.inc`). Wtyczki działające wyłącznie na poziomie silnika obejdą się bez niego.

## 1. Pobierz ReAPI

Weź `reapi-bin-*.zip` z [najnowszego wydania](https://github.com/rehlds/ReAPI/releases/latest). Archiwum zawiera jeden folder `addons/` z plikami binarnymi dla obu platform i z plikami dołączanymi Pawna.

## 2. Rozpakuj do katalogu swojej modyfikacji

Skopiuj zawartość `addons/amxmodx/` z archiwum do `<mod>/addons/amxmodx/`:

| Z archiwum | Trafia do | Do czego służy |
| --- | --- | --- |
| `addons/amxmodx/modules/reapi_amxx.dll` | `<mod>/addons/amxmodx/modules/` | Plik binarny modułu dla Windowsa. |
| `addons/amxmodx/modules/reapi_amxx_i386.so` | `<mod>/addons/amxmodx/modules/` | Plik binarny modułu dla Linuksa. |
| `addons/amxmodx/scripting/include/reapi*.inc`, `cssdk_const.inc` | `<mod>/addons/amxmodx/scripting/include/` | Pliki nagłówkowe Pawna potrzebne do **skompilowania** wtyczek korzystających z ReAPI. |

Potrzebujesz tylko pliku binarnego pasującego do platformy twojego serwera; pliki dołączane nie zależą od platformy i są potrzebne wyłącznie na maszynie, na której kompilujesz wtyczki `.sma`.

## 3. Włącz moduł

Sposób wczytania modułu zależy od twojej wersji AMX Mod X:

:::note

W wersjach AMX Mod X na tyle nowych, że definiują `AMXX_VERSION_NUM >= 175`, sam `reapi.inc` deklaruje `#pragma reqlib reapi` / `#pragma loadlib reapi`. Każda wtyczka zawierająca `#include <reapi>` automatycznie wymaga modułu i go wczytuje — **bez ręcznego wpisu w `modules.ini`**.

:::

W starszych wersjach AMX Mod X dopisz samodzielnie wiersz `reapi` do `<mod>/addons/amxmodx/configs/modules.ini`, żeby moduł wczytywał się przy starcie.

## 4. Sprawdź

Uruchom serwer i poszukaj w logu startowym AMX Mod X (albo wykonaj `meta list` czy wypisz listę modułów AMXX w konsoli) potwierdzenia, że `ReAPI` wczytał się poprawnie. Jeśli się nie wczytuje, sprawdź jeszcze raz, czy skopiowałeś plik binarny odpowiadający twojemu systemowi i czy ReHLDS (a także ReGameDLL_CS, jeśli go używasz) faktycznie są na miejscu — ReAPI zależy od nich w czasie działania, a nie tylko przy kompilacji.

## Kompilowanie wtyczek z ReAPI

Wskaż kompilatorowi AMXX (`amxxpc`) katalog `scripting/include` zawierający pliki nagłówkowe ReAPI skopiowane w kroku 2, a potem po prostu dodaj `#include <reapi>` w kodzie swojej wtyczki. Dostępne funkcje natywne i API łańcuchów hooków opisano w [Ustawieniach](./settings.md).
