---
id: reamxmodx-compilling
title: Compilare
sidebar_position: 4
description: ReAMXModX - fork învechit al AMX Mod X, care a adăugat susținerea API-urilor ReHLDS și ReGameDLL înainte să o facă AMX Mod X oficial.
slug: /reamxmodx/compilling
---

<head>
  <title>ReAMXModX: Compilare | ReHLDS</title>
</head>

# Instrucțiuni de compilare

:::warning Abandonat

Păstrate ca referință. Forkul este înghețat la un instantaneu din 2016 al AMX Mod X și nu publică versiuni — compilarea lui este singura cale de a obține binare, iar pentru asta nu există un motiv bun. Citiți [Ce este ReAMXModX?](./index.md).

:::

ReAMXModX moștenește nemodificat sistemul de compilare al AMX Mod X; el nu adaugă unelte proprii de compilare.

### Clonarea depozitului

```bash
git clone https://github.com/rehlds/reamxmodx.git
cd reamxmodx
```

### Compilarea pe Windows

Forkul conține soluții Visual Studio 2012, câte una pentru fiecare componentă, iar acestea sunt cele pe care le întrețineau commit-urile lui:

| Soluție | Componentă |
| --- | --- |
| `amxmodx/msvc12/amxmodx_mm.sln` | Nucleul AMX Mod X (plugin Metamod). |
| `modules/<nume>/msvc12/<nume>.sln` | Fiecare modul — `cstrike`, `csx`, `engine`, `fakemeta`, `nvault`, `sockets` și celelalte. |
| `compiler/amxxpc/amxxpc.sln`, `compiler/libpc300/libpc300.sln` | Compilatorul Pawn. |
| `installer/installtool/installtool.sln` | Unealta de instalare. |

Fiecare se compilează separat — nu există o soluție unică pentru întregul proiect.

### Compilarea pe Linux

Arborele conține scripturi `AMBuilder` pentru [AMBuild](https://github.com/alliedmodders/ambuild), sistemul de compilare al AlliedModders, în `amxmodx/` și în `plugins/`.

:::note

Acest instantaneu nu are un `configure.py` sau un `AMBuildScript` în rădăcina depozitului, de unde AMBuild conduce în mod normal compilarea. Prin urmare, obținerea unei compilări funcționale pentru Linux înseamnă să furnizați dumneavoastră acea structură, luată din revizia corespunzătoare a AMX Mod X oficial (`1.8.3`, `git5067`). Acesta este în bună măsură motivul pentru care forkul este nepractic de compilat astăzi.

:::

### Rezultatul

O compilare completă produce `amxmodx_mm_i386.so` / `amxmodx_mm.dll` pentru nucleu, plus câte un binar pentru fiecare modul, așezate exact așa cum se așteaptă AMX Mod X oficial, în `addons/amxmodx/`.

Dacă vreți un AMX Mod X funcțional peste ReHLDS, luați o [versiune actuală a proiectului oficial](https://www.amxmodx.org/downloads-new.php), în loc să îl compilați pe acesta.
