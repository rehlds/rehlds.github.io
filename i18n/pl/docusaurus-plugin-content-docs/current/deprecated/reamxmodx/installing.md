---
id: reamxmodx-install
title: Instalacja
sidebar_position: 2
description: ReAMXModX - przestarzały fork AMX Mod X, który dodał obsługę API ReHLDS i ReGameDLL, zanim zrobił to oficjalny AMX Mod X.
slug: /reamxmodx/install
---

<head>
  <title>ReAMXModX: Instalacja | ReHLDS</title>
</head>

# Instalacja

:::warning Projekt porzucony

Nie instaluj ReAMXModX na obecnym serwerze. Zainstaluj zamiast tego [AMX Mod X](https://www.amxmodx.org/) od AlliedModders — natywnie obsługuje ReHLDS, czyli jedyną rzecz, dla której ten fork istniał.

:::

## Nie ma czego instalować

ReAMXModX **nie opublikował żadnego wydania**. Repozytorium zawiera wyłącznie kod źródłowy — bez strony wydań, bez archiwów, bez gotowych plików binarnych. Kto chciał go uruchomić, musiał najpierw [skompilować go ze źródeł](./compilling.md).

Już samo to czyni go dziś nieodpowiednim do zwykłej instalacji serwerowej: samodzielnie kompilowałbyś migawkę AMX Mod X z 2016 roku, a potem sam byś ją utrzymywał.

## Jeśli odchodzisz od tego forka

Jeśli odziedziczyłeś serwer działający na wersji tego forka, przejście na oficjalny AMX Mod X jest przewidzianą drogą:

1. Zainstaluj bieżące wydanie [AMX Mod X](https://www.amxmodx.org/downloads-new.php) dla swojej modyfikacji, zgodnie z jego dokumentacją.
2. Zachowaj dotychczasowy katalog `configs/` — fork nigdy nie zmieniał formatu konfiguracji, więc `amxx.cfg`, `users.ini`, `cmds.ini` i pozostałe przenoszą się bez zmian. Zobacz [Ustawienia](./settings.md).
3. Przekompiluj własne wtyczki `.sma` z bieżącymi plikami dołączanymi AMX Mod X.
4. Sprawdź poleceniami `amxx version` i `amxx modules` w konsoli serwera.

Do sięgania z Pawna na poziom silnika i biblioteki GameDLL na nowoczesnym zestawie użyj [ReAPI](/pl/docs/reapi) zamiast przerobionego AMX Mod X — to obsługiwany sposób na dotarcie dziś do wnętrzności ReHLDS i ReGameDLL_CS.
