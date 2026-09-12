---
id: revoice-install
title: Instalacja
sidebar_position: 2
description: ReVoice - wtyczka Metamoda, transkoder głosu naprawiający rozmowy głosowe między klientami steamowymi i non-steam na serwerach ReHLDS.
slug: /revoice/install
---

<head>
  <title>ReVoice: Instalacja | ReHLDS</title>
</head>

# Instalacja

:::warning Projekt porzucony

ReVoice został oznaczony przez opiekunów jako **porzucony** — zanim wdrożysz go na serwerze produkcyjnym, przeczytaj [Czym jest ReVoice?](./index.md).

:::

ReVoice to wtyczka Metamoda i wymaga zainstalowanych oraz działających [ReHLDS](/pl/docs/rehlds/install) i Metamoda (zalecany Metamod-R).

## 1. Zdobądź ReVoice

Pobierz wydanie ze [strony wydań](https://github.com/rehlds/ReVoice/releases) albo [skompiluj je ze źródeł](./compilling.md).

## 2. Umieść wtyczkę na miejscu

Utwórz folder `revoice` w `addons`, w katalogu swojej modyfikacji, i umieść tam plik binarny pasujący do twojej platformy:

| Platforma | Plik | Miejsce docelowe |
| --- | --- | --- |
| Windows | `revoice_mm.dll` | `<mod>/addons/revoice/revoice_mm.dll` |
| Linux | `revoice_mm_i386.so` | `<mod>/addons/revoice/revoice_mm_i386.so` |

## 3. Zarejestruj wtyczkę w Metamodzie

Dopisz wiersz do `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\revoice\revoice_mm.dll
linux addons/revoice/revoice_mm_i386.so
```

## 4. Dodaj plik konfiguracyjny

Skopiuj plik [`data/revoice.cfg`](https://github.com/rehlds/ReVoice/blob/master/data/revoice.cfg) z projektu obok pliku binarnego: `<mod>/addons/revoice/revoice.cfg`. ReVoice wykonuje (`exec`) ten plik przy starcie, więc korzysta ze zwykłej składni konfiguracji serwera (proste przypisania cvarów, komentarze po `//`) — zobacz [Ustawienia](./settings.md).

## 5. Włącz rozmowy głosowe i sprawdź

Upewnij się, że `sv_voiceenable` jest włączone na serwerze. Uruchom go i wykonaj `meta list` — na liście powinien pojawić się wczytany `Revoice`. Wykonaj `rev version` i `rev status` w konsoli, żeby potwierdzić, że działa, i sprawdzić jego bieżący stan.
