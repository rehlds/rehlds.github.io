---
id: resemiclip
title: ReSemiclip
sidebar_position: 1
description: ReSemiclip - plugin Metamod care stabilește dacă jucătorii pot trece unii prin alții. Modulul Semiclip al lui `joaquimandrade` a fost folosit ca referință.
slug: /resemiclip
---

# Ce este ReSemiclip?

ReSemiclip este un plugin [Metamod](https://github.com/rehlds/Metamod-R) pentru serverele de Counter-Strike, care le permite jucătorilor să treacă unii prin alții în condiții configurabile, în loc să își blocheze reciproc mișcarea. Este o variantă întreținută a clasicului concept „Semiclip”, care folosește [modulul Semiclip al lui joaquimandrade](https://github.com/joaquimandrade) ca implementare de referință.

## Ce stabilește

- **Cui i se aplică** — tuturor, doar teroriștilor, doar antiteroriștilor sau doar coechipierilor.
- **Când se aplică** — pe un interval fix de la începutul rundei (util imediat după apariția în joc, când jucătorii tind să se blocheze unii în alții) sau permanent.
- **Ghemuirea** — le permite jucătorilor să sară pe un coechipier ghemuit, în loc să fie blocați.
- **Semnalul vizual** — transparență opțională pentru jucătorii aflați suficient de aproape ca să treacă unii prin alții, astfel încât efectul să se vadă, nu să surprindă.
- **Comportamentul gloanțelor** — opțional, le permite focurilor de armă să treacă prin coechipierii aflați în semiclip.

Toate acestea se pot configura global, dar și pentru fiecare hartă sau prefix de hartă în parte. Vedeți [Setări](./settings.md) pentru formatul complet al fișierului `config.ini`.

## Cerințe

ReSemiclip pune hook-uri atât pe funcții de la nivelul motorului ([ReHLDS](/ro/docs/rehlds/install)), cât și pe funcții de la nivelul GameDLL-ului ([ReGameDLL_CS](/ro/docs/regamedll-cs/install)), așa că amândouă sunt necesare sub Metamod. Vedeți [Instalare](./installing.md).
