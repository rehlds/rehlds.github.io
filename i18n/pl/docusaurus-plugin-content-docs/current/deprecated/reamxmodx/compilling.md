---
id: reamxmodx-compilling
title: Kompilacja
sidebar_position: 4
description: ReAMXModX - przestarzały fork AMX Mod X, który dodał obsługę API ReHLDS i ReGameDLL, zanim zrobił to oficjalny AMX Mod X.
slug: /reamxmodx/compilling
---

<head>
  <title>ReAMXModX: Kompilacja | ReHLDS</title>
</head>

# Instrukcja kompilacji

:::warning Projekt porzucony

Zachowane dla orientacji. Fork jest zamrożony na migawce AMX Mod X z 2016 roku i nie publikuje wydań — kompilacja to jedyny sposób, żeby zdobyć pliki binarne, i nie ma po temu dobrego powodu. Przeczytaj [Czym jest ReAMXModX?](./index.md).

:::

ReAMXModX dziedziczy system kompilacji AMX Mod X bez zmian; nie dokłada własnych narzędzi budowania.

### Sklonowanie repozytorium

```bash
git clone https://github.com/rehlds/reamxmodx.git
cd reamxmodx
```

### Kompilacja w Windowsie

Fork zawiera rozwiązania Visual Studio 2012, po jednym na komponent — i to właśnie pod nie faktycznie pisano jego commity:

| Rozwiązanie | Komponent |
| --- | --- |
| `amxmodx/msvc12/amxmodx_mm.sln` | Rdzeń AMX Mod X (wtyczka Metamoda). |
| `modules/<nazwa>/msvc12/<nazwa>.sln` | Każdy moduł — `cstrike`, `csx`, `engine`, `fakemeta`, `nvault`, `sockets` i pozostałe. |
| `compiler/amxxpc/amxxpc.sln`, `compiler/libpc300/libpc300.sln` | Kompilator Pawna. |
| `installer/installtool/installtool.sln` | Narzędzie instalacyjne. |

Każde kompiluje się osobno — nie ma jednego rozwiązania obejmującego cały projekt.

### Kompilacja w Linuksie

W drzewie znajdują się skrypty `AMBuilder` dla [AMBuild](https://github.com/alliedmodders/ambuild), systemu budowania AlliedModders, w katalogach `amxmodx/` i `plugins/`.

:::note

Ta migawka nie ma pliku `configure.py` ani `AMBuildScript` w katalogu głównym repozytorium, a stamtąd AMBuild normalnie prowadzi kompilację. Uzyskanie działającej wersji dla Linuksa oznacza więc samodzielne dostarczenie tego rusztowania z odpowiadającej mu rewizji oficjalnego AMX Mod X (`1.8.3`, `git5067`). To w dużej mierze dlatego fork jest dziś niepraktyczny w kompilacji.

:::

### Wynik

Pełna kompilacja daje `amxmodx_mm_i386.so` / `amxmodx_mm.dll` dla rdzenia oraz po jednym pliku binarnym na moduł, rozłożone dokładnie tak, jak oczekuje tego oficjalny AMX Mod X, w `addons/amxmodx/`.

Jeśli chcesz mieć działający AMX Mod X na ReHLDS, weź [bieżące wydanie projektu oficjalnego](https://www.amxmodx.org/downloads-new.php), zamiast kompilować ten fork.
