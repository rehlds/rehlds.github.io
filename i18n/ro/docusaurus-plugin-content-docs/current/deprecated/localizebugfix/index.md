---
id: localizebugfix
title: LocalizeBug Fix
sidebar_position: 1
description: LocalizeBug Fix - plugin Metamod arhivat, creat de s1lentq, care bloca exploit-urile cu șiruri de localizare din numele jucătorilor și din discuții, pe HLDS.
slug: /localizebugfix
---

# Ce este LocalizeBug Fix?

:::warning Abandonat

LocalizeBug Fix este **arhivat și nu mai este întreținut**. Depozitul a fost arhivat pe GitHub în 2015 și nu mai primește modificări. Este documentat aici doar ca referință.

Pentru această categorie de exploit-uri pe un server actual, folosiți [SafeNameAndChat](/ro/docs/safenameandchat).

:::

LocalizeBug Fix era un plugin Metamod creat de [@s1lentq](https://github.com/s1lentq), care închidea un exploit din GoldSrc în care simbolurile de localizare puse în numele unui jucător sau într-un mesaj de discuție blocau toți clienții care le primeau.

Este prima generație a acestei corecturi. Organizația ReHLDS l-a extins ulterior sub numele [ReLocalizeBugFix](/ro/docs/relocalizebugfix) — care, la rândul lui, este acum abandonat.

## Exploit-ul pe care îl bloca

Clientul GoldSrc interpretează simbolurile cu prefixul `#` din anumite mesaje drept chei de localizare. Autorul a documentat două căi de atac:

- **Discuția.** Un mesaj trimis prin `client_print_color` / `client_print` care conține astfel de simboluri, de exemplu:

  ```text
  s1lent :#Spec_Help_Text Hello people! #Spec_Duck
  ```

  Toți clienții care primeau mesajul se blocau.

- **Numele jucătorului, prin `ShowMenu`.** Un nume precum:

  ```text
  name "q#Buy#Buy#Buy#Buy#Buy#Buy#Buy"
  ```

  bloca clienții atunci când aceștia deschideau meniul cu lista jucătorilor.

## De ce a fost abandonat

Pluginul viza HLDS-ul simplu și a fost înlocuit de ReLocalizeBugFix pe serverele ReHLDS; acel succesor a fost, la rândul lui, [abandonat în 2017](https://github.com/rehlds/rehlds/issues/328#issuecomment-275837883). Serverele moderne primesc această protecție de la [SafeNameAndChat](/ro/docs/safenameandchat), care curăță caracterele problematice în loc să blocheze mesajul.

Vedeți [Instalare](./installing.md) și [Setări](./settings.md) pentru felul în care arăta pluginul în folosință.
