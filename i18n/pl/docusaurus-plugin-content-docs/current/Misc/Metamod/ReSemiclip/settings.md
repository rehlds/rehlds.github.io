---
id: resemiclip-settings
title: Ustawienia
sidebar_position: 3
description: ReSemiclip - wtyczka Metamoda decydująca o tym, czy gracze mogą przez siebie przechodzić. Jako wzorzec posłużył moduł Semiclip autorstwa `joaquimandrade`.
slug: /resemiclip/settings
---

<head>
  <title>ReSemiclip: Ustawienia | ReHLDS</title>
</head>

# Ustawienia

## `config.ini`

Plik `addons/resemiclip/config.ini` zawiera ustawienia domyślne dla całego serwera, w postaci wierszy `klucz = wartość;`:

| Klucz | Zakres | Domyślnie (z wydania) | Opis |
| --- | --- | --- | --- |
| `semiclip` | `0`–`1` | `1` | Wyłącza albo włącza semiclip. |
| `team` | `0`–`3` | `3` | Kogo dotyczy: `0` wszystkich, `1` tylko terrorystów, `2` tylko antyterrorystów, `3` tylko współdrużynników. |
| `time` | `0`–`180` | `0` | Liczba sekund od początku rundy, przez które semiclip działa. `0` oznacza, że działa na stałe, a nie tylko przez chwilę. |
| `crouch` | `0`–`1` | `1` | Pozwala graczom wskoczyć na kucającego gracza. |
| `effects` | `0`–`1` | `0` | Decyduje, czy przezroczystość gracza zmienia się wraz z odległością między graczami. |
| `distance` | `64`–`250` | `200` | Odległość (w jednostkach), od której działają efekty przezroczystości i semiclipu. |
| `transparency` | `0`–`255` | `120` | Poziom przezroczystości gracza objętego semiclipem. |
| `penetfire` | `0`–`1` | `0` | Pozwala pociskom przechodzić przez współdrużynników objętych semiclipem. |

Wartości spoza zakresu są sprowadzane do najbliższej dopuszczalnej granicy, a nie odrzucane.

## Ustawienia dla mapy i dla przedrostka

ReSemiclip wczytuje konfigurację w tej kolejności, a każdy krok nadpisuje tylko te klucze, które sam określa:

1. `addons/resemiclip/config.ini` — wartości domyślne dla całego serwera.
2. `addons/resemiclip/maps/prefix_<przedrostek>.ini` — gdzie `<przedrostek>` to wszystko, co w nazwie bieżącej mapy poprzedza pierwsze podkreślenie (na przykład `de` dla `de_dust2`).
3. `addons/resemiclip/maps/<nazwamapy>.ini` — dokładna nazwa bieżącej mapy (na przykład `de_dust2.ini`).

:::note

Przykładowe pliki dołączone w `maps/` (`_de_dust2.ini`, `_prefix_de.ini`) mają wiodące podkreślenie celowo — to nie jest nazwa pliku, której ReSemiclip faktycznie szuka. To nieaktywne wzorce; żeby je włączyć, zmień im nazwy na dokładnie oczekiwane (`de_dust2.ini`, `prefix_de.ini`).

:::

## Polecenie konsoli działające na żywo

```text
semiclip_option <klucz> <wartość>
```

Zmienia jedno ustawienie w trakcie działania, używając tych samych kluczy co `config.ini` (na przykład `semiclip_option time 5`). Wykonaj `semiclip_option` bez argumentów (albo z nieprawidłowym kluczem), żeby zamiast tego wypisać aktualnie obowiązujące ustawienia.
