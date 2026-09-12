---
id: rechecker-settings
title: "ReChecker: Setări"
sidebar_label: Setări
sidebar_position: 3
description: ReChecker este un plugin Metamod care permite verificarea fișierelor clientului după nume și după hash-ul md5.
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

# Setări

ReChecker se configurează prin `addons/rechecker/resources.ini` (aflat lângă binarul lui) și printr-un singur cvar de consolă.

## Formatul fișierului `resources.ini`

Fiecare regulă este un rând cu o cale, un hash (sau un cuvânt-cheie) și o comandă de executat la potrivire, plus indicatori opționali:

```text
path to file        hash          "exec cmd"      [FLAGS]
"../opengl32.dll"    3cc7f256      "kick [userid]"
```

### Câmpul hash

| Valoare | Semnificație |
| --- | --- |
| Un hash în hexazecimal (de exemplu `3cc7f256`) | Corespunde exact acelui hash. 4 octeți (8 caractere hexazecimale) sunt suficienți — nu aveți nevoie de MD5-ul complet. |
| `UNKNOWN` | Corespunde oricărui hash neacoperit de altă regulă pentru aceeași cale. |
| `MISSING` | Corespunde situației în care fișierul nu a fost trimis deloc de client. |

### Indicatori

| Indicator | Efect |
| --- | --- |
| `BREAK` | Oprește verificarea regulilor următoare pentru acest client de îndată ce aceasta se potrivește. |
| `IGNORE` | Trece acest hash anume pe lista celor permise — nu se execută nicio comandă. |

### Simboluri în comenzi

Disponibile în interiorul șirului `"exec cmd"`:

| Simbol | Valoare |
| --- | --- |
| `[name]` | Porecla clientului. |
| `[ip]` | Adresa IP a clientului. |
| `[id]` | Indexul clientului. |
| `[userid]` | Identificatorul de utilizator al clientului. |
| `[steamid]` | SteamID-ul clientului. |
| `[file_name]` | Calea fișierului verificat. |
| `[file_hash]` | Hash-ul răspunsului clientului pentru acel fișier. |
| `[file_md5hash]` | Hash-ul MD5 complet al răspunsului clientului pentru acel fișier. |

### Exemple de reguli

```ini
; Elimină jucătorul la un hash de fișier cunoscut ca fiind rău și oprește verificarea regulilor următoare pentru el
"../demoplayer.dll"    ad6d0e43    "kick [userid] 'WallHack Detected'"    BREAK

; Trece pe lista celor permise un hash cunoscut ca fiind bun, pentru aceeași cale
"../demoplayer.dll"    7ef5b581    IGNORE

; Consemnează în jurnal (fără să elimine) orice hash al unui fișier pe care încă nu îl urmăriți
"../demoplayer.dll"    UNKNOWN     "echo ' -> file: ([file_name]), md5hex: ([file_md5hash]) for ([name])'"

; Elimină jucătorul când un fișier este așteptat, dar lipsește
"../opengl32.dll"      MISSING     "kick [userid] 'OpenGL32 Missing'"     BREAK
```

`resources.ini` acceptă un marcaj BOM în UTF-8 și rânduri de comentariu care încep cu `;`. Porniți de la șablonul [`dist/resources.ini`](https://github.com/rehlds/ReChecker/blob/master/dist/resources.ini) al proiectului, care vine cu semnături pentru o serie de fișiere de cheat cunoscute de-a lungul timpului, și extindeți-l dumneavoastră.

## Variabilă de consolă

| Cvar | Implicit | Descriere |
| --- | --- | --- |
| `rch_log` | `0` | Nivelul de detaliu al jurnalului. `0` dezactivează jurnalizarea; valorile mai mari consemnează mai multe detalii. |

## Jurnale

Când `rch_log` este activat, ReChecker scrie fișiere de jurnal zilnice în `addons/rechecker/logs/`.
