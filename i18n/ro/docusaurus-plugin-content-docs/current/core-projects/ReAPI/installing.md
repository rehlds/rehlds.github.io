---
id: reapi-install
title: Instalare
sidebar_position: 2
description: ReAPI - modul AMX Mod X care oferă API-uri pentru ReHLDS, ReGameDLL și pluginurile Metamod (de exemplu, ReUnion și ReVoice).
slug: /reapi/install
---

<head>
  <title>ReAPI: Instalare | ReHLDS</title>
</head>

# Instalare

ReAPI este un modul AMX Mod X. El are nevoie de AMX Mod X deja instalat și funcțional și se leagă de straturile de dedesubt, așa că ordinea instalării contează.

## Înainte de a începe

Verificați că următoarele sunt deja instalate și funcționează:

1. [ReHLDS](/ro/docs/rehlds/install) — necesar pentru toate hook-urile și membrii de la nivelul motorului.
2. Metamod-R (sau Metamod) și AMX Mod X.
3. [ReGameDLL_CS](/ro/docs/regamedll-cs/install) — necesar doar dacă pluginurile dumneavoastră folosesc hook-uri sau membri de la nivelul GameDLL-ului (`reapi_gamedll.inc`). Pluginurile care țin doar de nivelul motorului funcționează și fără el.

## 1. Descărcați ReAPI

Luați `reapi-bin-*.zip` din [cea mai recentă versiune](https://github.com/rehlds/ReAPI/releases/latest). Arhiva conține un singur folder `addons/`, cu binarele pentru ambele platforme și cu fișierele de includere Pawn.

## 2. Dezarhivați în directorul modului dumneavoastră

Copiați conținutul folderului `addons/amxmodx/` din arhivă în `<mod>/addons/amxmodx/`:

| Din arhivă | Ajunge în | Rol |
| --- | --- | --- |
| `addons/amxmodx/modules/reapi_amxx.dll` | `<mod>/addons/amxmodx/modules/` | Binarul modulului pentru Windows. |
| `addons/amxmodx/modules/reapi_amxx_i386.so` | `<mod>/addons/amxmodx/modules/` | Binarul modulului pentru Linux. |
| `addons/amxmodx/scripting/include/reapi*.inc`, `cssdk_const.inc` | `<mod>/addons/amxmodx/scripting/include/` | Fișierele antet Pawn necesare pentru **compilarea** pluginurilor care folosesc ReAPI. |

Aveți nevoie doar de binarul potrivit platformei serverului dumneavoastră; fișierele de includere nu depind de platformă și sunt necesare doar pe mașina unde compilați pluginurile `.sma`.

## 3. Activați modulul

Felul în care este încărcat modulul depinde de versiunea dumneavoastră de AMX Mod X:

:::note

La versiunile de AMX Mod X suficient de noi cât să definească `AMXX_VERSION_NUM >= 175`, fișierul `reapi.inc` declară el însuși `#pragma reqlib reapi` / `#pragma loadlib reapi`. Orice plugin care are `#include <reapi>` cere și încarcă automat modulul — **fără să fie nevoie de o intrare adăugată manual în `modules.ini`**.

:::

La versiunile mai vechi de AMX Mod X, adăugați dumneavoastră un rând `reapi` în `<mod>/addons/amxmodx/configs/modules.ini`, ca modulul să fie încărcat la pornire.

## 4. Verificați

Porniți serverul și căutați în jurnalul de pornire al AMX Mod X (sau rulați `meta list` ori afișați lista modulelor AMXX în consolă) confirmarea că `ReAPI` s-a încărcat cu succes. Dacă nu se încarcă, verificați din nou că ați copiat binarul potrivit sistemului dumneavoastră și că ReHLDS (și ReGameDLL_CS, dacă îl folosiți) sunt într-adevăr instalate — ReAPI depinde de ele la execuție, nu doar la compilare.

## Compilarea pluginurilor cu ReAPI

Îndreptați compilatorul AMXX (`amxxpc`) către un director `scripting/include` care conține fișierele antet ReAPI copiate la pasul 2, apoi scrieți pur și simplu `#include <reapi>` în codul pluginului dumneavoastră. Vedeți [Setări](./settings.md) pentru funcțiile native disponibile și pentru API-ul lanțurilor de hook-uri.
