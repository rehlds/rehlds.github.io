---
id: relocalizebugfix
title: ReLocalizeBug Fix
sidebar_position: 1
description: ReLocalizeBug Fix - plugin Metamod abandonat, care bloca exploit-urile cu șiruri de localizare din numele jucătorilor și din discuții, pe serverele ReHLDS.
slug: /relocalizebugfix
---

# Ce este ReLocalizeBug Fix?

:::warning Abandonat

ReLocalizeBug Fix este **abandonat și incompatibil cu versiunile moderne de ReHLDS**. Rularea lui pe o versiune actuală poate duce la instabilitate și la comportamente neașteptate. El este [abandonat din 2017](https://github.com/rehlds/rehlds/issues/328#issuecomment-275837883).

Pentru această categorie de exploit-uri pe un server actual, folosiți [SafeNameAndChat](/ro/docs/safenameandchat).

:::

ReLocalizeBug Fix era un plugin Metamod care rezolva erori legate de localizare pe serverele dedicate de Half-Life — exploit-ul în care simbolurile de localizare cu prefixul `#` din numele unui jucător sau dintr-un mesaj de discuție blochează clienții care le primesc.

A fost dezvoltat ca o extindere a [LocalizeBug Fix al lui s1lentq](/ro/docs/localizebugfix) și adaptat pentru ReHLDS. Singura lui versiune publică, `v2.8`, a apărut în noiembrie 2016 și a fost prima compatibilă cu ReHLDS.

## De ce a fost abandonat

Motorul ReHLDS a mers mai departe. Pe măsură ce el a primit propriile corecturi și protecții, abordarea pluginului a încetat să se mai potrivească cu ce face motorul, iar în anul următor pluginul a fost marcat ca abandonat. El nu a mai fost niciodată actualizat pentru versiunile de ReHLDS care au urmat.

Avertismentul din propriul README al proiectului este lipsit de echivoc: folosirea acestui plugin cu versiuni mai noi de ReHLDS poate duce la instabilitate și la comportamente neașteptate.

## Ce să folosiți în schimb

[SafeNameAndChat](/ro/docs/safenameandchat) acoperă aceeași categorie de exploit-uri și este întreținut. El adoptă și o abordare mai blândă — înlocuiește caracterele problematice cu unele asemănătoare la vedere, în loc să șteargă sau să blocheze mesajul, așa că jucătorii își păstrează numele.

Vedeți [Instalare](./installing.md) și [Setări](./settings.md) pentru felul în care arăta pluginul în folosință.
