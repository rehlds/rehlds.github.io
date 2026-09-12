---
id: hitbox-fixer-install
title: Instalacja
sidebar_position: 2
description: Hitbox Fixer - zewnętrzna wtyczka Metamoda naprawiająca błędne hitboksy graczy po stronie serwera w Counter-Strike 1.6, Half-Life i Adrenaline Gamer.
slug: /hitbox-fixer/install
---

<head>
  <title>Hitbox Fixer: Instalacja | ReHLDS</title>
</head>

# Instalacja

Hitbox Fixer to wtyczka Metamoda. Wymaga zainstalowanych i działających [ReHLDS](/pl/docs/rehlds/install) `3.10`+ (albo oryginalnego HLDS w wersji `8648`) oraz Metamoda.

## 1. Zdobądź Hitbox Fixer

Pobierz `hitbox_fix-bin-*.zip` ze [strony wydań](https://github.com/Garey27/hitbox_fixer/releases) albo [skompiluj wtyczkę ze źródeł](./compilling.md).

## 2. Rozpakuj do katalogu swojej modyfikacji

Archiwum jest już przygotowane pod serwer. Skopiuj z niego folder `addons/` do `<mod>/addons/`:

| Ścieżka w archiwum | Do czego służy |
| --- | --- |
| `addons/hitboxfixer/hitbox_fix_mm.dll` | Plik binarny wtyczki dla Windowsa. |
| `addons/hitboxfixer/hitbox_fix_mm_i386.so` | Plik binarny wtyczki dla Linuksa. |
| `addons/hitboxfixer/hbf.cfg` | Plik konfiguracyjny, czytany przy starcie. |

Zostaw tylko plik binarny pasujący do platformy twojego serwera.

:::note

W archiwum jest też `vis/hitbox_vis.asi`, moduł wizualizacji po stronie klienta, służący do oglądania hitboksów w grze. Nie należy do instalacji serwerowej i nie jest potrzebny, żeby poprawka działała — pomiń go, o ile nie badasz hitboksów na kliencie.

:::

## 3. Zarejestruj wtyczkę w Metamodzie

Dopisz wiersz do `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\hitboxfixer\hitbox_fix_mm.dll
linux addons/hitboxfixer/hitbox_fix_mm_i386.so
```

## 4. Sprawdź

Uruchom serwer i wykonaj `meta list` w konsoli — wtyczka powinna pojawić się na liście jako wczytana. Jeśli jej nie ma, sprawdź, czy silnik to ReHLDS `3.10`+ albo HLDS `8648`; inne wersje nie są obsługiwane.

Cvar `hbf_enabled` opisano w [Ustawieniach](./settings.md).
