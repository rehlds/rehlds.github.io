---
id: relocalizebugfix-compilling
title: Kompilacja
sidebar_position: 4
description: ReLocalizeBug Fix - porzucona wtyczka Metamoda blokująca exploity z ciągami lokalizacyjnymi w nazwach graczy i na czacie na serwerach ReHLDS.
slug: /relocalizebugfix/compilling
---

<head>
  <title>ReLocalizeBug Fix: Kompilacja | ReHLDS</title>
</head>

# Instrukcja kompilacji

:::warning Projekt porzucony

Zachowane dla orientacji. Wtyczka nie jest już utrzymywana i jest niezgodna z nowoczesnymi wersjami ReHLDS — przeczytaj [Czym jest ReLocalizeBug Fix?](./index.md).

:::

### Sprawdzenie wymagań

**Windows**

- Visual Studio, dla `msvc/relocalizebugfix.sln`

**Linux**

- Kompilator Intel C++ (`icpc`) — `Makefile` ma na sztywno wpisaną ścieżkę `/opt/intel/bin/icpc` i korzysta z flag charakterystycznych dla Intela (`-static-intel`, `-no-intel-extensions`, `-ipo`, `-fasm-blocks`). Kompilacja GCC albo Clangiem wymaga ich usunięcia.

Pliki nagłówkowe CSSDK i Metamoda są dołączone w `cssdk/` oraz `metamod/`, więc nie trzeba pobierać niczego dodatkowo. Ten projekt powstał przed konfiguracją z CMake i `build.sh`, używaną w utrzymywanych projektach organizacji.

### Sklonowanie repozytorium

```bash
git clone https://github.com/rehlds/relocalizebugfix.git
cd relocalizebugfix
```

### Kompilacja w Windowsie

Otwórz `msvc/relocalizebugfix.sln` w Visual Studio i skompiluj. Wynikiem jest `relocalizebugfix_mm.dll`.

### Kompilacja w Linuksie

```bash
make
```

Wynik trafia do `Release/` pod nazwą `relocalizebugfix_mm_i386.so`.

:::note

Gotowe pliki binarne znajdują się w repozytorium w katalogu `bin/`, więc kompilacja rzadko kiedy była potrzebna, nawet gdy projekt był aktywny.

:::

Miejsce każdego pliku opisano w [Instalacji](./installing.md).
