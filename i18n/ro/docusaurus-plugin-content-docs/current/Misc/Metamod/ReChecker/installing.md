---
id: rechecker-install
title: "ReChecker: Instalare"
sidebar_label: Instalare
sidebar_position: 2
description: ReChecker este un plugin Metamod care permite verificarea fișierelor clientului după nume și după hash-ul md5.
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

# Instalare

ReChecker este un plugin Metamod și are nevoie ca [ReHLDS](/ro/docs/rehlds/install) și Metamod (se recomandă Metamod-R) să fie deja instalate și funcționale.

## 1. Obțineți ReChecker

Descărcați o versiune din [pagina de versiuni](https://github.com/rehlds/ReChecker/releases) sau [compilați-l din sursă](./compilling.md).

## 2. Puneți pluginul la locul lui

Creați un folder `rechecker` în `addons`, în directorul modului dumneavoastră, și puneți acolo binarul potrivit platformei dumneavoastră:

| Platformă | Fișier | Destinație |
| --- | --- | --- |
| Windows | `rechecker_mm.dll` | `<mod>/addons/rechecker/rechecker_mm.dll` |
| Linux | `rechecker_mm_i386.so` | `<mod>/addons/rechecker/rechecker_mm_i386.so` |

## 3. Adăugați fișierul cu reguli

Copiați șablonul [`dist/resources.ini`](https://github.com/rehlds/ReChecker/blob/master/dist/resources.ini) al proiectului lângă binar:

```text
<mod>/addons/rechecker/resources.ini
```

ReChecker citește `resources.ini` din același director cu propriul binar, nu din rădăcina modului. Vedeți [Setări](./settings.md) pentru formatul fișierului.

## 4. Înregistrați pluginul în Metamod

Adăugați un rând în `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\rechecker\rechecker_mm.dll
linux addons/rechecker/rechecker_mm_i386.so
```

## 5. Verificați

Porniți serverul și rulați `meta list` în consolă — `Rechecker` ar trebui să apară în listă ca încărcat. Dacă nu se încarcă, verificați că serverul rulează într-adevăr ReHLDS (ReChecker folosește API-ul extins al motorului ReHLDS și refuză să se încarce pe HLDS-ul simplu).
