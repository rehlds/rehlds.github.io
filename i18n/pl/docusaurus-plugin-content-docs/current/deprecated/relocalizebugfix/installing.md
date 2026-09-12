---
id: relocalizebugfix-install
title: Instalacja
sidebar_position: 2
description: ReLocalizeBug Fix - porzucona wtyczka Metamoda blokująca exploity z ciągami lokalizacyjnymi w nazwach graczy i na czacie na serwerach ReHLDS.
slug: /relocalizebugfix/install
---

<head>
  <title>ReLocalizeBug Fix: Instalacja | ReHLDS</title>
</head>

# Instalacja

:::warning Projekt porzucony

Ta instrukcja jest zachowana wyłącznie dla orientacji. Wtyczka jest **niezgodna z nowoczesnymi wersjami ReHLDS** — przeczytaj [Czym jest ReLocalizeBug Fix?](./index.md) i użyj zamiast niej [SafeNameAndChat](/pl/docs/safenameandchat/install).

:::

ReLocalizeBug Fix był wtyczką Metamoda, instalowaną tak samo jak każda inna.

## 1. Zdobądź ReLocalizeBug Fix

Ostatnie wydanie to [`v2.8`](https://github.com/rehlds/relocalizebugfix/releases) (`relocalizebugfix-v2.8.zip`). Repozytorium zawiera też gotowe pliki binarne w katalogu `bin/`.

## 2. Umieść wtyczkę na miejscu

Skopiuj plik binarny pasujący do twojej platformy do `<mod>/addons/relocalizebugfix/`:

| Platforma | Plik |
| --- | --- |
| Windows | `relocalizebugfix_mm.dll` |
| Linux | `relocalizebugfix_mm_i386.so` |

## 3. Zarejestruj wtyczkę w Metamodzie

Dopisz te wiersze do swojego pliku `<mod>/addons/metamod/plugins.ini`:

```ini
win32 addons\relocalizebugfix\relocalizebugfix_mm.dll
linux addons/relocalizebugfix/relocalizebugfix_mm_i386.so
```

:::note

Wtyczka deklarowała się jako możliwa do wczytania wyłącznie przy starcie (`PT_STARTUP`) i nigdy niemożliwa do wyładowania (`PT_NEVER`), więc `meta load` i `meta unload` na niej nie działały — musiała być obecna przy uruchomieniu serwera, a jej usunięcie wymagało restartu.

:::

## 4. Sprawdź

Uruchom serwer i wykonaj `meta list` — wtyczka rejestrowała się pod nazwą `ReLocalizeBug Fix`. Na nowoczesnej wersji ReHLDS spodziewaj się raczej wadliwego działania niż poprawnego; to właśnie niezgodność opisana na [stronie przeglądowej](./index.md), a nie błąd instalacji.
