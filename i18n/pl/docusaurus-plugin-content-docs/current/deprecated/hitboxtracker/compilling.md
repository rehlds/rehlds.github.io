---
id: hitboxtracker-compilling
title: Kompilacja
sidebar_position: 4
description: hitboxtracker - porzucone narzędzie deweloperskie ReHLDS, które rysowało na kliencie położenie hitboksów wyliczone przez serwer.
slug: /hitboxtracker/compilling
---

<head>
  <title>hitboxtracker: Kompilacja | ReHLDS</title>
</head>

# Instrukcja kompilacji

:::warning Projekt porzucony

Zachowane dla orientacji. hitboxtracker nie jest już utrzymywany — przeczytaj [Czym jest hitboxtracker?](./index.md).

:::

### Sprawdzenie wymagań

- Visual Studio, z obsługą trzech celów C++ tego projektu.

Pliki nagłówkowe HLSDK i Metamoda są dołączone w `dep/`, więc nie trzeba pobierać niczego dodatkowo.

### Sklonowanie repozytorium

```bash
git clone https://github.com/rehlds/hitboxtracker.git
cd hitboxtracker
```

### Kompilacja

Otwórz `msvc/hitboxtracker.sln` w Visual Studio i skompiluj. Rozwiązanie zawiera trzy projekty, po jednym na każdą z trzech części, których narzędzie potrzebowało:

| Projekt | Daje | Działa na |
| --- | --- | --- |
| `server` | `hitboxtracker_mm.dll` | Na serwerze, jako wtyczka Metamoda. |
| `client` | `hitboxtracker.dll` | Na kliencie gry, jako moduł rysujący. |
| `launcher` | `cs.exe` | Na kliencie gry, do wczytania modułu. |

:::note

W repozytorium jest wyłącznie rozwiązanie Visual Studio — nie ma tu konfiguracji CMake ani `build.sh`, w odróżnieniu od pozostałych projektów organizacji. Mimo to opublikowane wydanie zawiera również plik serwerowy dla Linuksa (`hitboxtracker_mm_i386.so`), powstały poza tym rozwiązaniem.

:::

Miejsce każdego z wyników opisano w [Instalacji](./installing.md).
