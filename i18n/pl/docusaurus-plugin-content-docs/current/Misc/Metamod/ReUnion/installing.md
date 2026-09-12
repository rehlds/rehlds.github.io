---
id: reunion-install
title: Instalacja
sidebar_position: 2
description: ReUnion - wtyczka Metamoda pozwalająca klientom non-steam z protokołami 47 i 48 łączyć się z serwerami ReHLDS.
slug: /reunion/install
---

<head>
  <title>ReUnion: Instalacja | ReHLDS</title>
</head>

# Instalacja

ReUnion to wtyczka Metamoda i wymaga zainstalowanych oraz działających [ReHLDS](/pl/docs/rehlds/install) (API `3.10`+) i Metamoda (zalecany Metamod-R).

## 1. Zdobądź ReUnion

Pobierz wersję ze [strony wydań](https://github.com/rehlds/ReUnion/releases) albo [skompiluj ją ze źródeł](./compilling.md).

## 2. Umieść wtyczkę na miejscu

Utwórz folder `reunion` w `addons`, w katalogu swojej modyfikacji (`<gamedir>` — `cstrike` w Counter-Strike, `valve` w Half-Life itd.) i umieść tam plik binarny pasujący do twojej platformy:

| Platforma | Plik | Miejsce docelowe |
| --- | --- | --- |
| Windows | `reunion_mm.dll` | `<gamedir>/addons/reunion/reunion_mm.dll` |
| Linux | `reunion_mm_i386.so` | `<gamedir>/addons/reunion/reunion_mm_i386.so` |

## 3. Zarejestruj wtyczkę w Metamodzie

Otwórz `<gamedir>/addons/metamod/plugins.ini` i dopisz ten wiersz, najlepiej na **początku** pliku:

```text
win32 addons\reunion\reunion_mm.dll
linux addons/reunion/reunion_mm_i386.so
```

## 4. Dodaj plik konfiguracyjny

Skopiuj `reunion.cfg` z archiwum wydania, żeby ReUnion mógł go znaleźć. Szuka go w tej kolejności i używa pierwszego napotkanego:

1. Obok własnego pliku binarnego — `<gamedir>/addons/reunion/reunion.cfg`.
2. W katalogu głównym gry — `<gamedir>/reunion.cfg`.
3. W katalogu roboczym serwera — `reunion.cfg`.

Format pliku konfiguracyjnego opisano w [Ustawieniach](./settings.md).

## 5. Uruchom serwer i sprawdź

Uruchom serwer i wykonaj `meta list` w konsoli:

```text
Currently loaded plugins:
      description      stat pend  file              vers      src   load  unlod
 [ 1] Reunion          RUN   -    reunion_mm_i386.  v0.1.58   ini   Start Never
 [ 2] AMX Mod X        RUN   -    amxmodx_mm_i386.  v1.8.1.3  ini   Start ANY
2 plugins, 2 running
```

Jeśli zamiast `RUN` widzisz `fail`, uruchom serwer z `-console +log on +mp_logecho 1` i przejrzyj komunikaty w konsoli — podadzą powód, dla którego ReUnion się nie wczytał (najczęściej brakujący albo nieprawidłowy `reunion.cfg`, ewentualnie niezgodna wersja ReHLDS).

## Opcjonalne dodatki

Archiwum wydania zawiera też `reunion_api.h` (plik nagłówkowy C dla innych wtyczek Metamoda albo GameDLL, które chcą odpytywać ReUnion bezpośrednio — korzysta z niego [ReAPI](/pl/docs/reapi)) oraz kilka opcjonalnych skryptów AMX Mod X w `addons/amxmodx/scripting/` (`reu_test.sma`, `updatehint.sma`), które możesz skompilować i wczytać osobno, jeśli chcesz mieć wtyczkę testową albo komunikat dla klientów z przestarzałą wersją. Żaden z nich nie jest potrzebny do działania samego ReUnion.
