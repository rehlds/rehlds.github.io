---
id: hitboxtracker
title: hitboxtracker
sidebar_position: 1
description: hitboxtracker - porzucone narzędzie deweloperskie ReHLDS, które rysowało na kliencie położenie hitboksów wyliczone przez serwer.
slug: /hitboxtracker
---

# Czym jest hitboxtracker?

:::warning Projekt porzucony

hitboxtracker jest **porzucony i nie jest już utrzymywany**. Opisujemy go tu wyłącznie dla orientacji — nie instaluj go na obecnym serwerze.

Żeby hitboksy działały poprawnie na nowoczesnym serwerze, użyj [Hitbox Fixera](/pl/docs/hitbox-fixer) autorstwa @Garey27, którego organizacja ReHLDS wskazuje jako aktywną alternatywę. Zwróć uwagę, że te dwa projekty nie są równoważne: hitboxtracker jedynie *pokazywał* problem, a Hitbox Fixer go *naprawia*.

:::

hitboxtracker był narzędziem deweloperskim, a nie funkcją serwera. Składał się z wtyczki Metamoda po stronie serwera i towarzyszącego jej modułu po stronie klienta, a na ekranie klienta rysował prawdziwe położenie hitboksów **tak, jak wyliczał je serwer** — obok miejsca, w którym widział je klient.

Dzięki temu widoczna stawała się cała kategoria problemów, które inaczej pozostają niewidoczne: gdy oba zestawy brył się nie pokrywają, strzały wyglądające na trafienia liczą się jako chybienia. Rozpoznanie tego bez takiego narzędzia sprowadza się do zgadywania.

## Dlaczego został porzucony

Projekt zarchiwizowano na rzecz wtyczki, która wprost poprawia hitboksy, zamiast je tylko rysować. Sposób rysowania zależał też od konkretnych wersji klienta i od własnego programu uruchamiającego, co źle zniosło upływ czasu.

## Jak działał

Wtyczka serwerowa wysyłała klientowi wyliczone dane hitboksów kanałem komunikatów `svc_director` — wcześniejsze wersje używały delty, co zmieniło się w `v1.1`. Moduł kliencki rysował potem te bryły za pomocą dwóch dodatkowych trybów dołożonych do standardowego cvara `r_drawentities`.

Tryby te opisano w [Ustawieniach](./settings.md), a wymagania konfiguracyjne w [Instalacji](./installing.md).
