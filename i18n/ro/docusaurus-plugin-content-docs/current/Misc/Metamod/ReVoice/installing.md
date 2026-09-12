---
id: revoice-install
title: Instalare
sidebar_position: 2
description: ReVoice - plugin Metamod, transcodor de voce care repară discuția prin voce între clienții Steam și non-Steam pe serverele ReHLDS.
slug: /revoice/install
---

<head>
  <title>ReVoice: Instalare | ReHLDS</title>
</head>

# Instalare

:::warning Abandonat

ReVoice este marcat drept **abandonat** de cei care îl întrețin — citiți [Ce este ReVoice?](./index.md) înainte de a-l pune pe un server de producție.

:::

ReVoice este un plugin Metamod și are nevoie de [ReHLDS](/ro/docs/rehlds/install) și de Metamod (se recomandă Metamod-R) deja instalate și funcționale.

## 1. Obțineți ReVoice

Descărcați o versiune din [pagina de versiuni](https://github.com/rehlds/ReVoice/releases) sau [compilați-l din sursă](./compilling.md).

## 2. Puneți pluginul la locul lui

Creați un folder `revoice` în `addons`, în directorul modului dumneavoastră, și puneți acolo binarul potrivit platformei dumneavoastră:

| Platformă | Fișier | Destinație |
| --- | --- | --- |
| Windows | `revoice_mm.dll` | `<mod>/addons/revoice/revoice_mm.dll` |
| Linux | `revoice_mm_i386.so` | `<mod>/addons/revoice/revoice_mm_i386.so` |

## 3. Înregistrați pluginul în Metamod

Adăugați un rând în `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\revoice\revoice_mm.dll
linux addons/revoice/revoice_mm_i386.so
```

## 4. Adăugați fișierul de configurare

Copiați fișierul [`data/revoice.cfg`](https://github.com/rehlds/ReVoice/blob/master/data/revoice.cfg) al proiectului lângă binar: `<mod>/addons/revoice/revoice.cfg`. ReVoice execută (`exec`) acest fișier la pornire, așa că el folosește sintaxa obișnuită a fișierelor de configurare de server (atribuiri simple de cvar-uri, comentarii cu `//`) — vedeți [Setări](./settings.md).

## 5. Activați discuția prin voce și verificați

Verificați că `sv_voiceenable` este activat pe server. Porniți-l și rulați `meta list` — `Revoice` ar trebui să apară în listă ca încărcat. Rulați `rev version` și `rev status` în consolă, ca să confirmați că este activ și să vedeți starea lui curentă.
