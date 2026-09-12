---
id: hitbox-fixer
title: Hitbox Fixer
sidebar_position: 1
description: Hitbox Fixer - zewnętrzna wtyczka Metamoda naprawiająca błędne hitboksy graczy po stronie serwera w Counter-Strike 1.6, Half-Life i Adrenaline Gamer.
slug: /hitbox-fixer
---

# Czym jest Hitbox Fixer?

Hitbox Fixer to wtyczka Metamoda autorstwa [@Garey27](https://github.com/Garey27), która naprawia hitboksy graczy po stronie serwera w Counter-Strike 1.6, Half-Life i Adrenaline Gamer. Na niepoprawionym serwerze bryły, względem których silnik sprawdza strzały, potrafią znaleźć się z dala od miejsca, w którym naprawdę stoi model gracza, więc trafienia liczą się jako chybienia (i odwrotnie).

:::note

To projekt zewnętrzny. Stoi poza organizacją ReHLDS i nie jest przez nią utrzymywany — problemy zgłaszaj w jego własnym [systemie zgłoszeń](https://github.com/Garey27/hitbox_fixer/issues).

:::

## Co naprawia

- Zupełnie popsute hitboksy przy `numblends == 1` — dotyczy to animacji kucania i wstawania podczas przeładowywania broni albo podkładania C4.
- Cofanie pozycji hitboksów w czasie na podstawie położenia po stronie klienta, żeby serwer sprawdzał trafienie tam, gdzie strzelający faktycznie widział cel.
- Błędne położenie hitboksów przy pojawieniu się w grze, wynikające z poprawionego cofania w czasie.

Autor zaznacza, że pełna obsługa `setupbones` dla obiektów niebędących graczami wciąż czeka na realizację, więc powyższe poprawki dotyczą graczy.

## Wymagania

Jedno z dwojga:

- [ReHLDS](/pl/docs/rehlds/install) w wersji `3.10` albo nowszej — zalecane.
- Oryginalny HLDS, wersja `8648`.

Do wczytania wtyczki potrzebny jest też Metamod (zalecany Metamod-R).

## Obsługiwane modyfikacje

Counter-Strike 1.6, Half-Life i Adrenaline Gamer. Prośby o inne modyfikacje autor przyjmuje przez system zgłoszeń.

W [Instalacji](./installing.md) opisano konfigurację, a w [Ustawieniach](./settings.md) — jedyny cvar, który wtyczka dokłada.
