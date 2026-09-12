---
id: safenameandchat-install
title: Instalacja
sidebar_position: 2
description: SafeNameAndChat - zewnętrzna wtyczka Metamoda unieszkodliwiająca exploity z ciągami lokalizacyjnymi i wstrzykiwaniem poleceń w nazwach graczy i wiadomościach czatu.
slug: /safenameandchat/install
---

<head>
  <title>SafeNameAndChat: Instalacja | ReHLDS</title>
</head>

# Instalacja

SafeNameAndChat to wtyczka Metamoda i wymaga zainstalowanego oraz działającego Metamoda (zalecany Metamod-R).

## 1. Zdobądź SafeNameAndChat

Pobierz pliki binarne ze [strony wydań](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/releases) albo [skompiluj wtyczkę ze źródeł](./compilling.md). Wydanie zawiera dwa pliki:

| Platforma | Plik |
| --- | --- |
| Windows | `SafeNameAndChat.dll` |
| Linux | `SafeNameAndChat.so` |

## 2. Umieść wtyczkę na miejscu

Utwórz folder `SafeNameAndChat` w `addons`, w katalogu swojej modyfikacji, i umieść tam plik binarny pasujący do twojej platformy:

```text
<mod>/addons/SafeNameAndChat/SafeNameAndChat.dll
<mod>/addons/SafeNameAndChat/SafeNameAndChat.so
```

## 3. Dodaj plik konfiguracyjny

Skopiuj plik [`SafeNameAndChat.cfg`](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/blob/master/SafeNameAndChat.cfg) z projektu obok pliku binarnego. Wtyczka buduje ścieżkę na podstawie własnego położenia i przy starcie wykonuje (`exec`) stamtąd `SafeNameAndChat.cfg`, więc plik musi leżeć w tym samym folderze co wtyczka — a nie w katalogu głównym modyfikacji.

## 4. Zarejestruj wtyczkę w Metamodzie

Dopisz wiersz do `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\SafeNameAndChat\SafeNameAndChat.dll
linux addons/SafeNameAndChat/SafeNameAndChat.so
```

## 5. Sprawdź

Uruchom serwer i wykonaj `meta list` — na liście powinien pojawić się wczytany `SafeNameAndChat` (w logach oznaczany jako `SNAC`). Sprawdź `SNAC_Version` w konsoli, żeby potwierdzić, która wersja działa.

Ponieważ wtyczka jest oznaczona jako możliwa do wczytania w dowolnym momencie, na działającym serwerze możesz też użyć `meta load addons/SafeNameAndChat/SafeNameAndChat.so` zamiast go restartować.

Cvary opisano w [Ustawieniach](./settings.md).
