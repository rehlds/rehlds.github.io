---
id: hitboxtracker
title: hitboxtracker
sidebar_position: 1
description: hitboxtracker - unealtă de dezvoltare abandonată din ReHLDS, care desena pe client pozițiile hitbox-urilor calculate de server.
slug: /hitboxtracker
---

# Ce este hitboxtracker?

:::warning Abandonat

hitboxtracker este **abandonat și nu mai este întreținut**. Este documentat aici doar ca referință — nu îl instalați pe un server actual.

Pentru hitbox-uri funcționale pe un server modern, folosiți [Hitbox Fixer](/ro/docs/hitbox-fixer) al lui @Garey27, pe care organizația ReHLDS îl indică drept alternativa activă. Rețineți că cele două nu sunt echivalente: hitboxtracker doar *arăta* problema, în timp ce Hitbox Fixer o *rezolvă*.

:::

hitboxtracker era o unealtă de dezvoltare, nu o funcție de server. Era alcătuit dintr-un plugin Metamod pe server și un modul pereche pe client și desena pe ecranul clientului poziția reală a hitbox-urilor, **așa cum le calcula serverul** — alături de locul în care clientul credea că se află.

Astfel devenea vizibilă o categorie de probleme altminteri invizibile: când cele două seturi de cutii nu se suprapun, focurile de armă care par lovituri sunt socotite rateuri. Diagnosticarea acestui lucru fără o asemenea unealtă înseamnă ghicit.

## De ce a fost abandonat

Proiectul a fost arhivat în favoarea unui plugin care corectează hitbox-urile de-a dreptul, în loc doar să le deseneze. Modul de afișare depindea și de anumite versiuni de client și de un lansator propriu, ceea ce a îmbătrânit prost.

## Cum funcționa

Pluginul de pe server trimitea clientului datele calculate ale hitbox-urilor prin canalul de mesaje `svc_director` — versiunile anterioare foloseau delta, lucru schimbat în `v1.1`. Modulul de pe client desena apoi acele cutii prin două moduri suplimentare adăugate cvar-ului standard `r_drawentities`.

Vedeți [Setări](./settings.md) pentru aceste moduri și [Instalare](./installing.md) pentru ce presupunea configurarea lui.
