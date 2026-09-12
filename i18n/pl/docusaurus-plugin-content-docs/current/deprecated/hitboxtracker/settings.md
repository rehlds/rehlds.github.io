---
id: hitboxtracker-settings
title: Ustawienia
sidebar_position: 3
description: hitboxtracker - porzucone narzędzie deweloperskie ReHLDS, które rysowało na kliencie położenie hitboksów wyliczone przez serwer.
slug: /hitboxtracker/settings
---

<head>
  <title>hitboxtracker: Ustawienia | ReHLDS</title>
</head>

# Ustawienia

:::warning Projekt porzucony

Zachowane dla orientacji. hitboxtracker nie jest już utrzymywany — przeczytaj [Czym jest hitboxtracker?](./index.md).

:::

hitboxtracker nie dokładał własnych cvarów. Rozszerzał standardowy, kliencki cvar `r_drawentities` o dwa dodatkowe tryby, więc wszystkim sterowało się z konsoli klienta.

## `r_drawentities`

| Wartość | Opis |
| --- | --- |
| `0` | Bez obiektów. |
| `1` | Domyślnie — rysuje obiekty normalnie. |
| `2` | Obiekty rysowane jako szkielety. |
| `3` | Obiekty rysowane jako hitboksy. |
| `4` | Obiekty rysowane z przezroczystymi hitboksami i modelem pod spodem. |
| `5` | Osobna bryła dla gracza i dla broni. |
| `6` | Dodany przez hitboxtrackera. Tak samo jak `4`, ale rysuje dodatkowo prawdziwe położenie hitboksów wyliczone przez serwer. |
| `7` | Dodany przez hitboxtrackera. Tak samo jak `6`, ale bez przezroczystości. |

Wartości od `0` do `5` należą do samego silnika i działają bez tego narzędzia. Tylko `6` i `7` wymagały zainstalowania obu części hitboxtrackera.

:::note

Sens trybów `6` i `7` tkwił właśnie w *rozbieżności*: porównywało się bryły klienta z bryłami serwera, a widoczne przesunięcie między nimi tłumaczyło skargi na rozpoznawanie trafień, które inaczej wyglądały na wymysł gracza.

:::
