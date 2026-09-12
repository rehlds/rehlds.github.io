---
id: safenameandchat
title: SafeNameAndChat
sidebar_position: 1
description: SafeNameAndChat - plugin Metamod terț care neutralizează exploit-urile cu șiruri de localizare și cu injectare de comenzi din numele jucătorilor și din mesajele de discuție.
slug: /safenameandchat
---

# Ce este SafeNameAndChat?

SafeNameAndChat este un plugin Metamod creat de [@WPMGPRoSToTeMa](https://github.com/WPMGPRoSToTeMa), care curăță numele jucătorilor și mesajele de discuție înainte ca motorul să le trimită mai departe, închizând o familie de exploit-uri vechi din GoldSrc, în care un nume sau un mesaj special alcătuit blochează clienții celorlalți jucători ori injectează comenzi de consolă.

:::note

Acesta este un proiect terț. El se află în afara organizației ReHLDS și nu este întreținut de ea — raportați problemele în propriul lui [sistem de raportare](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/issues).

:::

## Împotriva a ce protejează

Clientul GoldSrc tratează anumite caractere în mod special, iar un jucător care le pune într-un nume sau într-un rând de discuție poate abuza de acest lucru:

- **Șiruri de localizare (`#`)** — un mesaj sau un nume care conține simboluri precum `#Spec_Help_Text` îl face pe clientul care le primește să le interpreteze drept chei de localizare. În funcție de simbol, clienții se blochează.
- **Specificatori de format (`%`)** — `%s` și celelalte ajung într-o funcție de formatare de partea clientului.
- **Ampersandul (`&`) în nume** — tratat greșit în unele căi de afișare a numelui pe client.
- **Injectarea de comenzi prin `+` în nume** — un `+` urmat imediat de o literă sau de o cifră reproduce sintaxa de asociere `+comandă`.

În loc să elimine jucătorul sau să șteargă caracterele, pluginul înlocuiește fiecare caracter problematic cu **echivalentul lui Unicode de lățime întreagă** — `#` devine `＃`, iar `%` devine `％`. Textul arată la fel pentru un om, dar clientul nu îl mai tratează ca pe un simbol. Pluginul poate și să înlăture caracterele neafișabile și să taie spațiile de la început și de la sfârșit.

## Cerințe

- Metamod (se recomandă Metamod-R).
- [ReHLDS](/ro/docs/rehlds/install) nu este obligatoriu, dar este detectat în timpul execuției și folosit când este prezent — pluginul interoghează `VREHLDS_HLDS_API_VERSION001` la pornire și urmează o cale care ține cont de motor, dacă primește răspuns.

Pluginul poate fi încărcat și descărcat oricând (`meta load` / `meta unload` funcționează fără repornire).

Vedeți [Instalare](./installing.md) pentru configurare și [Setări](./settings.md) pentru cele unsprezece cvar-uri `SNAC_*`.
