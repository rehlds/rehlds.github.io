---
id: rechecker-install
title: "ReChecker: Instalacja"
sidebar_label: Instalacja
sidebar_position: 2
description: ReChecker to wtyczka Metamoda, która pozwala sprawdzać pliki klienta po nazwie i skrócie md5.
slug: /rechecker/install
keywords:
  - rechecker
  - metamod
  - plugin
  - install
tags:
  - rechecker
  - install
last_update:
  date: 07/21/2025
  author: STAM
---

# Instalacja

ReChecker to wtyczka Metamoda i wymaga, żeby [ReHLDS](/pl/docs/rehlds/install) oraz Metamod (zalecany Metamod-R) były już zainstalowane i działały.

## 1. Zdobądź ReChecker

Pobierz wersję ze [strony wydań](https://github.com/rehlds/ReChecker/releases) albo [skompiluj ją ze źródeł](./compilling.md).

## 2. Umieść wtyczkę na miejscu

Utwórz folder `rechecker` w `addons`, w katalogu swojej modyfikacji, i umieść tam plik binarny pasujący do twojej platformy:

| Platforma | Plik | Miejsce docelowe |
| --- | --- | --- |
| Windows | `rechecker_mm.dll` | `<mod>/addons/rechecker/rechecker_mm.dll` |
| Linux | `rechecker_mm_i386.so` | `<mod>/addons/rechecker/rechecker_mm_i386.so` |

## 3. Dodaj plik z regułami

Skopiuj wzorcowy plik [`dist/resources.ini`](https://github.com/rehlds/ReChecker/blob/master/dist/resources.ini) z projektu obok pliku binarnego:

```text
<mod>/addons/rechecker/resources.ini
```

ReChecker czyta `resources.ini` z tego samego katalogu co własny plik binarny, a nie z katalogu głównego modyfikacji. Format pliku opisano w [Ustawieniach](./settings.md).

## 4. Zarejestruj wtyczkę w Metamodzie

Dopisz wiersz do `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\rechecker\rechecker_mm.dll
linux addons/rechecker/rechecker_mm_i386.so
```

## 5. Sprawdź

Uruchom serwer i wykonaj `meta list` w konsoli — na liście powinien pojawić się wczytany `Rechecker`. Jeśli się nie wczytuje, sprawdź, czy serwer faktycznie działa na ReHLDS (ReChecker korzysta z rozszerzonego API silnika ReHLDS i odmawia wczytania na czystym HLDS).
