---
id: hitboxtracker-install
title: Instalacja
sidebar_position: 2
description: hitboxtracker - porzucone narzędzie deweloperskie ReHLDS, które rysowało na kliencie położenie hitboksów wyliczone przez serwer.
slug: /hitboxtracker/install
---

<head>
  <title>hitboxtracker: Instalacja | ReHLDS</title>
</head>

# Instalacja

:::warning Projekt porzucony

Ta instrukcja jest zachowana dla orientacji. hitboxtracker nie jest już utrzymywany — zanim z czegokolwiek tutaj skorzystasz, przeczytaj [Czym jest hitboxtracker?](./index.md), a na obecnym serwerze wybierz [Hitbox Fixera](/pl/docs/hitbox-fixer).

:::

hitboxtracker wymagał zainstalowania **obu** części: wtyczki na serwerze i modułu na kliencie. Zainstalowanie tylko jednej nie dawało nic.

## Wymagania

- Klient: Counter-Strike 1.6 w wersji `4554` albo nowszej.
- Serwer: Metamod `1.20` albo nowszy.

## 1. Zdobądź hitboxtracker

Pobierz `hitboxtracker.zip` ze [strony wydań](https://github.com/rehlds/hitboxtracker/releases). Archiwum zawiera obie części:

| Ścieżka w archiwum | Do czego służy |
| --- | --- |
| `server/cstrike/addons/hitboxtracker/hitboxtracker_mm.dll` | Wtyczka serwerowa, Windows. |
| `server/cstrike/addons/hitboxtracker/hitboxtracker_mm_i386.so` | Wtyczka serwerowa, Linux. |
| `client/hitboxtracker.dll` | Moduł rysujący po stronie klienta. |
| `client/cs.exe` | Własny program uruchamiający projektu, który wczytuje ten moduł. |

## 2. Zainstaluj wtyczkę serwerową

Skopiuj plik binarny pasujący do twojej platformy do `<mod>/addons/hitboxtracker/` i zarejestruj go w `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\hitboxtracker\hitboxtracker_mm.dll
linux addons/hitboxtracker/hitboxtracker_mm_i386.so
```

## 3. Zainstaluj moduł kliencki

Umieść `hitboxtracker.dll` i `cs.exe` w katalogu roboczym klienta Counter-Strike 1.6, a potem uruchamiaj grę przez `cs.exe`, a nie przez zwykły skrót — to program uruchamiający wczytuje moduł.

## 4. Sprawdź

Wejdź na serwer z zainstalowaną wtyczką i ustaw `r_drawentities` na `6` albo `7`. Jeśli dodatkowe rysowanie hitboksów się nie pojawi, to albo klient wystartował bez programu uruchamiającego, albo wtyczka serwerowa nie jest wczytana — sprawdź to poleceniem `meta list` na serwerze.

Znaczenie poszczególnych wartości `r_drawentities` opisano w [Ustawieniach](./settings.md).
