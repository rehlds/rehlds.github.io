---
id: hitbox-fixer
title: Hitbox Fixer
sidebar_position: 1
description: Hitbox Fixer - plugin Metamod terț care corectează hitbox-urile greșite ale jucătorilor de partea serverului, în Counter-Strike 1.6, Half-Life și Adrenaline Gamer.
slug: /hitbox-fixer
---

# Ce este Hitbox Fixer?

Hitbox Fixer este un plugin Metamod creat de [@Garey27](https://github.com/Garey27), care corectează hitbox-urile jucătorilor de partea serverului, în Counter-Strike 1.6, Half-Life și Adrenaline Gamer. Pe un server necorectat, cutiile față de care motorul verifică focurile de armă pot ajunge departe de locul unde se află de fapt modelul jucătorului, așa că loviturile sunt socotite rateuri (și invers).

:::note

Acesta este un proiect terț. El se află în afara organizației ReHLDS și nu este întreținut de ea — raportați problemele în propriul lui [sistem de raportare](https://github.com/Garey27/hitbox_fixer/issues).

:::

## Ce corectează

- Hitbox-uri pur și simplu defecte când `numblends == 1` — ceea ce cuprinde animațiile de ghemuire și de ridicare în timpul reîncărcării unei arme sau al plasării C4.
- Recalcularea retroactivă a hitbox-urilor pe baza poziției de pe client, pentru ca serverul să verifice față de locul în care trăgătorul chiar a văzut ținta.
- Poziția greșită a hitbox-urilor la apariția în joc, care decurge din recalcularea retroactivă corectată.

Autorul menționează că susținerea completă a `setupbones` pentru entitățile care nu sunt jucători este încă în lucru, așa că aceste corecturi privesc jucătorii.

## Cerințe

Una dintre variantele:

- [ReHLDS](/ro/docs/rehlds/install) versiunea `3.10` sau mai nouă — recomandat.
- HLDS original, versiunea `8648`.

Plus Metamod (se recomandă Metamod-R), pentru încărcarea pluginului.

## Moduri compatibile

Counter-Strike 1.6, Half-Life și Adrenaline Gamer. Autorul primește cereri pentru alte moduri prin sistemul de raportare.

Vedeți [Instalare](./installing.md) pentru configurare și [Setări](./settings.md) pentru singurul cvar pe care îl adaugă.
