---
id: resemiclip-install
title: Instalacja
sidebar_position: 2
description: ReSemiclip - wtyczka Metamoda decydująca o tym, czy gracze mogą przez siebie przechodzić. Jako wzorzec posłużył moduł Semiclip autorstwa `joaquimandrade`.
slug: /resemiclip/install
---

<head>
  <title>ReSemiclip: Instalacja | ReHLDS</title>
</head>

# Instalacja

ReSemiclip to wtyczka Metamoda i wymaga zainstalowanych oraz działających [ReHLDS](/pl/docs/rehlds/install), [ReGameDLL_CS](/pl/docs/regamedll-cs/install) i Metamoda (zalecany Metamod-R) — zakłada bowiem hooki na funkcje z obu warstw.

## 1. Zdobądź ReSemiclip

Pobierz `resemiclip-*.zip` ze [strony wydań](https://github.com/rehlds/ReSemiclip/releases) albo [skompiluj wtyczkę ze źródeł](./compilling.md). Archiwum wydania zawiera już gotowy do użycia folder `addons/resemiclip/` z plikiem binarnym i domyślnym `config.ini`.

## 2. Rozpakuj do katalogu swojej modyfikacji

Skopiuj folder `addons/resemiclip/` z archiwum do `<mod>/addons/resemiclip/`. Otrzymasz:

| Ścieżka | Do czego służy |
| --- | --- |
| `addons/resemiclip/resemiclip_mm.dll` albo `resemiclip_mm_i386.so` | Plik binarny wtyczki (osobny dla każdej platformy — zostaw tylko ten pasujący do twojego serwera). |
| `addons/resemiclip/config.ini` | Domyślne ustawienia dla całego serwera. |
| `addons/resemiclip/maps/` | Przykładowe pliki z ustawieniami dla konkretnej mapy i dla przedrostka. |

## 3. Zarejestruj wtyczkę w Metamodzie

Dopisz wiersz do `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\resemiclip\resemiclip_mm.dll
linux addons/resemiclip/resemiclip_mm_i386.so
```

## 4. Skonfiguruj

Edytuj `addons/resemiclip/config.ini`, żeby ustawić wartości domyślne dla całego serwera, i opcjonalnie dodaj ustawienia dla wybranych map albo przedrostków w `addons/resemiclip/maps/`. Pełny format i kolejność wczytywania opisano w [Ustawieniach](./settings.md).

## 5. Sprawdź

Uruchom serwer i wykonaj `meta list` — na liście powinien pojawić się wczytany `ReSemiclip`. Wykonaj `semiclip_option` bez argumentów w konsoli, żeby wypisać aktualnie obowiązujące ustawienia.
