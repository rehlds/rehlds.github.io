---
id: hitbox-fixer-settings
title: Ustawienia
sidebar_position: 3
description: Hitbox Fixer - zewnętrzna wtyczka Metamoda naprawiająca błędne hitboksy graczy po stronie serwera w Counter-Strike 1.6, Half-Life i Adrenaline Gamer.
slug: /hitbox-fixer/settings
---

<head>
  <title>Hitbox Fixer: Ustawienia | ReHLDS</title>
</head>

# Ustawienia

Hitbox Fixer konfiguruje się przez `addons/hitboxfixer/hbf.cfg`, leżący obok pliku binarnego wtyczki. Zawiera jeden cvar.

## Cvar

| Cvar | Domyślnie | Opis |
| --- | --- | --- |
| `hbf_enabled` | `1` | Włącza poprawianie hitboksów. Ustaw `0`, żeby wyłączyć wtyczkę bez wyładowywania jej z Metamoda. |

Domyślna konfiguracja z wydania ma jeden wiersz:

```text
hbf_enabled "1"
```

:::note

Wyłączenie `hbf_enabled` przywraca pierwotne (wadliwe) zachowanie hitboksów silnika. Ten przełącznik istnieje głównie po to, żeby dało się porównać różnicę na działającym serwerze przy badaniu skarg na rozpoznawanie trafień — w normalnej pracy nie ma powodu zostawiać go na `0`.

:::
