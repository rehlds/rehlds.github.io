---
id: localizebugfix-install
title: Instalacja
sidebar_position: 2
description: LocalizeBug Fix - zarchiwizowana wtyczka Metamoda autorstwa s1lentq, blokująca exploity z ciągami lokalizacyjnymi w nazwach graczy i na czacie w HLDS.
slug: /localizebugfix/install
---

<head>
  <title>LocalizeBug Fix: Instalacja | ReHLDS</title>
</head>

# Instalacja

:::warning Projekt porzucony

Ta instrukcja jest zachowana dla orientacji. Projekt jest zarchiwizowany — przeczytaj [Czym jest LocalizeBug Fix?](./index.md), a na obecnym serwerze wybierz [SafeNameAndChat](/pl/docs/safenameandchat/install).

:::

LocalizeBug Fix był wtyczką Metamoda, instalowaną tak samo jak każda inna.

## 1. Zdobądź LocalizeBug Fix

Ostatnie wydanie to [`2.4`](https://github.com/s1lentq/localizebugfix/releases) z września 2015 (`localizebugfix_2_4.7z`). Repozytorium zawiera też gotowe pliki binarne wersji `2.0`, `2.3` i `2.4` w katalogu `bin/`.

## 2. Umieść wtyczkę na miejscu

Skopiuj plik binarny pasujący do twojej platformy do folderu w `addons`:

| Platforma | Plik |
| --- | --- |
| Windows | `localizebugfix.dll` |
| Linux | `localizebugfix_mm_i386.so` |

## 3. Zarejestruj wtyczkę w Metamodzie

Dopisz odpowiedni wiersz do `<mod>/addons/metamod/plugins.ini`.

:::note

Wtyczka deklarowała się jako możliwa do wczytania wyłącznie przy starcie (`PT_STARTUP`) i nigdy niemożliwa do wyładowania (`PT_NEVER`), więc `meta load` i `meta unload` na niej nie działały — musiała być obecna przy uruchomieniu serwera, a jej usunięcie wymagało restartu.

:::

## 4. Sprawdź

Uruchom serwer i wykonaj `meta list` — wtyczka rejestrowała się pod nazwą `LocalizeBug Fix`.
