---
id: refreelook-install
title: "ReFreeLook: Instalacja"
sidebar_label: Instalacja
sidebar_position: 2
description: ReFreeLook - moduł AMX Mod X pozwalający administratorom w trybie obserwatora korzystać z dowolnego trybu kamery, niezależnie od wartości `mp_forcecamera` czy `mp_forcechasecam`. Działa tylko z najnowszą wersją `ReGameDLL_CS`.
slug: /refreelook/install
keywords:
  - refreelook
  - AMX Mod X
  - amxx
  - amx
  - module
  - install
tags:
  - refreelook
  - install
last_update:
  date: 07/21/2025
  author: STAM
---

# Instalacja

ReFreeLook to **moduł** AMX Mod X (a nie wtyczka Metamoda) i wymaga zainstalowanych oraz działających najnowszego [ReGameDLL_CS](/pl/docs/regamedll-cs/install) i AMX Mod X.

## 1. Zdobądź ReFreeLook

Pobierz wersję ze [strony wydań](https://github.com/rehlds/ReFreeLook/releases) albo [skompiluj ją ze źródeł](./compilling.md).

## 2. Zatrzymaj serwer

Zatrzymaj serwer przed instalacją albo aktualizacją — niezależnie od tego, czy to pierwsza instalacja, czy aktualizacja.

## 3. Umieść moduł na miejscu

Skopiuj plik binarny pasujący do twojej platformy do folderu modułów AMX Mod X twojej modyfikacji:

| Platforma | Plik | Miejsce docelowe |
| --- | --- | --- |
| Windows | `refreelook_amxx.dll` | `<mod>/addons/amxmodx/modules/refreelook_amxx.dll` |
| Linux | `refreelook_amxx_i386.so` | `<mod>/addons/amxmodx/modules/refreelook_amxx_i386.so` |

## 4. Zarejestruj moduł

Otwórz `<mod>/addons/amxmodx/configs/modules.ini` i dopisz na końcu wiersz:

```text
refreelook
```

## 5. Ustaw cvary rozgrywki

ReFreeLook ma znaczenie tylko wtedy, gdy kamery obserwatorów są faktycznie ograniczone:

- Ustaw `mp_forcechasecam` i `mp_forcecamera` na **tę samą** wartość.
- Upewnij się, że `mp_fadetoblack` ma wartość `0`.

## 6. Ustaw uprawnienia administratorów

W `afl_admin_access_flags` wpisz uprawnienia, które mają być zwolnione z ograniczenia kamery. Listę uprawnień i wartość domyślną opisano w [Ustawieniach](./settings.md).

## 7. Uruchom serwer

Uruchom serwer i sprawdź, czy moduł się wczytał (poszukaj `refreelook` na liście modułów AMX Mod X w konsoli albo w logu).
