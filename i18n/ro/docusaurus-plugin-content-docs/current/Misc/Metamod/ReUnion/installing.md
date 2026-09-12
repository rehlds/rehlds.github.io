---
id: reunion-install
title: Instalare
sidebar_position: 2
description: ReUnion - plugin Metamod care permite clienților non-Steam cu protocoalele 47 și 48 să se conecteze la servere ReHLDS.
slug: /reunion/install
---

<head>
  <title>ReUnion: Instalare | ReHLDS</title>
</head>

# Instalare

ReUnion este un plugin Metamod și are nevoie de [ReHLDS](/ro/docs/rehlds/install) (API `3.10`+) și de Metamod (se recomandă Metamod-R) deja instalate și funcționale.

## 1. Obțineți ReUnion

Descărcați o versiune din [pagina de versiuni](https://github.com/rehlds/ReUnion/releases) sau [compilați-l din sursă](./compilling.md).

## 2. Puneți pluginul la locul lui

Creați un folder `reunion` în `addons`, în directorul modului dumneavoastră (`<gamedir>` — `cstrike` la Counter-Strike, `valve` la Half-Life etc.) și puneți acolo binarul potrivit platformei dumneavoastră:

| Platformă | Fișier | Destinație |
| --- | --- | --- |
| Windows | `reunion_mm.dll` | `<gamedir>/addons/reunion/reunion_mm.dll` |
| Linux | `reunion_mm_i386.so` | `<gamedir>/addons/reunion/reunion_mm_i386.so` |

## 3. Înregistrați pluginul în Metamod

Editați `<gamedir>/addons/metamod/plugins.ini` și adăugați acest rând, de preferință la **începutul** fișierului:

```text
win32 addons\reunion\reunion_mm.dll
linux addons/reunion/reunion_mm_i386.so
```

## 4. Adăugați fișierul de configurare

Copiați fișierul `reunion.cfg` din arhiva versiunii, ca ReUnion să îl poată găsi. El caută în această ordine și folosește primul fișier găsit:

1. Lângă propriul binar — `<gamedir>/addons/reunion/reunion.cfg`.
2. În rădăcina directorului jocului — `<gamedir>/reunion.cfg`.
3. În directorul de lucru al serverului — `reunion.cfg`.

Vedeți [Setări](./settings.md) pentru formatul fișierului de configurare.

## 5. Porniți serverul și verificați

Porniți serverul și rulați `meta list` în consolă:

```text
Currently loaded plugins:
      description      stat pend  file              vers      src   load  unlod
 [ 1] Reunion          RUN   -    reunion_mm_i386.  v0.1.58   ini   Start Never
 [ 2] AMX Mod X        RUN   -    amxmodx_mm_i386.  v1.8.1.3  ini   Start ANY
2 plugins, 2 running
```

Dacă apare `fail` în loc de `RUN`, porniți serverul cu `-console +log on +mp_logecho 1` și examinați mesajele din consolă — ele arată motivul pentru care ReUnion nu s-a încărcat (de obicei un `reunion.cfg` lipsă ori nevalid sau o versiune incompatibilă de ReHLDS).

## Elemente suplimentare opționale

Arhiva versiunii mai conține `reunion_api.h` (un fișier antet C pentru alte pluginuri Metamod sau GameDLL care vor să interogheze direct ReUnion — [ReAPI](/ro/docs/reapi) îl folosește) și câteva scripturi AMX Mod X opționale în `addons/amxmodx/scripting/` (`reu_test.sma`, `updatehint.sma`), pe care le puteți compila și încărca separat dacă vreți un plugin de test sau un mesaj de avertizare pentru clienții învechiți. Niciunul dintre ele nu este necesar pentru ca ReUnion în sine să funcționeze.
