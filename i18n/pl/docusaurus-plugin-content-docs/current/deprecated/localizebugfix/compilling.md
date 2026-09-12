---
id: localizebugfix-compilling
title: Kompilacja
sidebar_position: 4
description: LocalizeBug Fix - zarchiwizowana wtyczka Metamoda autorstwa s1lentq, blokująca exploity z ciągami lokalizacyjnymi w nazwach graczy i na czacie w HLDS.
slug: /localizebugfix/compilling
---

<head>
  <title>LocalizeBug Fix: Kompilacja | ReHLDS</title>
</head>

# Instrukcja kompilacji

:::warning Projekt porzucony

Zachowane dla orientacji. Repozytorium jest zarchiwizowane na GitHubie i nie przyjmuje pull requestów — przeczytaj [Czym jest LocalizeBug Fix?](./index.md).

:::

### Sprawdzenie wymagań

**Windows**

- Visual Studio, dla `msvc/localizebugfix.sln`

**Linux**

- Kompilator Intel C++ (`icpc`) — `Makefile` ma na sztywno wpisaną ścieżkę `/opt/intel/bin/icpc` i korzysta z flag charakterystycznych dla Intela (`-static-intel`, `-no-intel-extensions`, `-ipo`). Kompilacja GCC albo Clangiem wymaga ich usunięcia.

Pliki nagłówkowe HLSDK i Metamoda są dołączone w `sdk/`, więc nie trzeba pobierać niczego dodatkowo.

### Sklonowanie repozytorium

```bash
git clone https://github.com/s1lentq/localizebugfix.git
cd localizebugfix
```

### Kompilacja w Windowsie

Otwórz `msvc/localizebugfix.sln` w Visual Studio i skompiluj. Wynikiem jest `localizebugfix.dll`.

### Kompilacja w Linuksie

```bash
make
```

Wynikiem jest `localizebugfix_mm_i386.so`.

:::note

Gotowe pliki binarne wersji `2.0`, `2.3` i `2.4` znajdują się w repozytorium w katalogu `bin/`, więc kompilacja rzadko kiedy była potrzebna, nawet gdy projekt był aktywny.

:::

Miejsce każdego pliku opisano w [Instalacji](./installing.md).
