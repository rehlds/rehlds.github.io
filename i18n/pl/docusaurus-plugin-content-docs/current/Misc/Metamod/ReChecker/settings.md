---
id: rechecker-settings
title: "ReChecker: Ustawienia"
sidebar_label: Ustawienia
sidebar_position: 3
description: ReChecker to wtyczka Metamoda, która pozwala sprawdzać pliki klienta po nazwie i skrócie md5.
slug: /rechecker/settings
keywords:
  - rechecker
  - metamod
  - plugin
  - settings
tags:
  - rechecker
  - settings
last_update:
  date: 07/21/2025
  author: STAM
---

# Ustawienia

ReChecker konfiguruje się przez `addons/rechecker/resources.ini` (leżący obok jego pliku binarnego) i przez jeden cvar konsoli.

## Format pliku `resources.ini`

Każda reguła to wiersz zawierający ścieżkę, skrót (albo słowo kluczowe) i polecenie do wykonania przy dopasowaniu, a także opcjonalne flagi:

```text
path to file        hash          "exec cmd"      [FLAGS]
"../opengl32.dll"    3cc7f256      "kick [userid]"
```

### Pole skrótu

| Wartość | Znaczenie |
| --- | --- |
| Skrót szesnastkowy (na przykład `3cc7f256`) | Pasuje dokładnie do tego skrótu. Wystarczą 4 bajty (8 znaków szesnastkowych) — pełny MD5 nie jest potrzebny. |
| `UNKNOWN` | Pasuje do każdego skrótu nieobjętego inną regułą dla tej samej ścieżki. |
| `MISSING` | Pasuje, gdy klient w ogóle nie wysłał pliku. |

### Flagi

| Flaga | Działanie |
| --- | --- |
| `BREAK` | Przerywa sprawdzanie kolejnych reguł dla tego klienta, gdy tylko ta pasuje. |
| `IGNORE` | Dopuszcza ten konkretny skrót — żadne polecenie nie zostanie wykonane. |

### Symbole w poleceniach

Dostępne wewnątrz ciągu `"exec cmd"`:

| Symbol | Wartość |
| --- | --- |
| `[name]` | Pseudonim klienta. |
| `[ip]` | Adres IP klienta. |
| `[id]` | Indeks klienta. |
| `[userid]` | Identyfikator użytkownika klienta. |
| `[steamid]` | SteamID klienta. |
| `[file_name]` | Ścieżka sprawdzanego pliku. |
| `[file_hash]` | Skrót odpowiedzi klienta dla tego pliku. |
| `[file_md5hash]` | Pełny skrót MD5 odpowiedzi klienta dla tego pliku. |

### Przykładowe reguły

```ini
; Wyrzuca gracza przy znanym złym skrócie pliku i przerywa sprawdzanie kolejnych reguł dla niego
"../demoplayer.dll"    ad6d0e43    "kick [userid] 'WallHack Detected'"    BREAK

; Dopuszcza znany dobry skrót dla tej samej ścieżki
"../demoplayer.dll"    7ef5b581    IGNORE

; Zapisuje w logu (bez wyrzucania) dowolny skrót pliku, którego jeszcze nie śledzisz
"../demoplayer.dll"    UNKNOWN     "echo ' -> file: ([file_name]), md5hex: ([file_md5hash]) for ([name])'"

; Wyrzuca gracza, gdy oczekiwanego pliku brakuje
"../opengl32.dll"      MISSING     "kick [userid] 'OpenGL32 Missing'"     BREAK
```

`resources.ini` obsługuje znacznik BOM w UTF-8 oraz wiersze komentarza zaczynające się od `;`. Zacznij od wzorcowego pliku [`dist/resources.ini`](https://github.com/rehlds/ReChecker/blob/master/dist/resources.ini) z projektu, który zawiera sygnatury wielu znanych na przestrzeni lat plików z cheatami, i rozbuduj go samodzielnie.

## Zmienna konsoli

| Cvar | Domyślnie | Opis |
| --- | --- | --- |
| `rch_log` | `0` | Poziom szczegółowości logu. `0` wyłącza logowanie; wyższe wartości zapisują więcej szczegółów. |

## Logi

Gdy `rch_log` jest włączone, ReChecker zapisuje dzienne pliki logów w `addons/rechecker/logs/`.
