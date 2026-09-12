---
id: resemiclip-install
title: Instalare
sidebar_position: 2
description: ReSemiclip - plugin Metamod care stabilește dacă jucătorii pot trece unii prin alții. Modulul Semiclip al lui `joaquimandrade` a fost folosit ca referință.
slug: /resemiclip/install
---

<head>
  <title>ReSemiclip: Instalare | ReHLDS</title>
</head>

# Instalare

ReSemiclip este un plugin Metamod și are nevoie de [ReHLDS](/ro/docs/rehlds/install), de [ReGameDLL_CS](/ro/docs/regamedll-cs/install) și de Metamod (se recomandă Metamod-R) deja instalate și funcționale — el pune hook-uri pe funcții din ambele straturi.

## 1. Obțineți ReSemiclip

Descărcați `resemiclip-*.zip` din [pagina de versiuni](https://github.com/rehlds/ReSemiclip/releases) sau [compilați-l din sursă](./compilling.md). Arhiva versiunii conține deja un folder `addons/resemiclip/` gata de folosit, cu binarul și un `config.ini` implicit.

## 2. Dezarhivați în directorul modului dumneavoastră

Copiați folderul `addons/resemiclip/` din arhivă în `<mod>/addons/resemiclip/`. Veți obține:

| Cale | Rol |
| --- | --- |
| `addons/resemiclip/resemiclip_mm.dll` sau `resemiclip_mm_i386.so` | Binarul pluginului (specific fiecărei platforme — păstrați-l doar pe cel potrivit serverului dumneavoastră). |
| `addons/resemiclip/config.ini` | Setările implicite, valabile pentru tot serverul. |
| `addons/resemiclip/maps/` | Fișiere-exemplu cu setări pentru o anumită hartă sau pentru un prefix. |

## 3. Înregistrați pluginul în Metamod

Adăugați un rând în `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\resemiclip\resemiclip_mm.dll
linux addons/resemiclip/resemiclip_mm_i386.so
```

## 4. Configurați

Editați `addons/resemiclip/config.ini` pentru setările implicite ale întregului server și, dacă vreți, adăugați setări pentru anumite hărți sau prefixe în `addons/resemiclip/maps/`. Vedeți [Setări](./settings.md) pentru formatul complet și pentru ordinea de încărcare.

## 5. Verificați

Porniți serverul și rulați `meta list` — `ReSemiclip` ar trebui să apară în listă ca încărcat. Rulați `semiclip_option` fără argumente în consolă, ca să afișați setările active în acel moment.
