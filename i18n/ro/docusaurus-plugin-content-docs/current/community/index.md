---
id: community
title: Utilitare ale comunității
sidebar_position: 1
description: Utilitare create de comunitate în jurul ReHLDS - enumerate ca referință, fără a fi produse sau susținute de organizația ReHLDS.
slug: /community
---

# Utilitare ale comunității

Această pagină enumeră utilitare terțe pe care comunitatea le-a construit în jurul ReHLDS. Ele **nu sunt produse, verificate sau susținute de organizația ReHLDS** și apar aici doar pentru ca cine dă peste ele să afle despre ce este vorba.

:::warning

Tot ce se află pe această pagină se folosește pe propria răspundere. Aceste unelte nu sunt auditate de organizație, iar o problemă provocată de una dintre ele ține de propriul ei sistem de raportare, nu de cel al ReHLDS. Dacă vreți o configurație pe care să o înțelegeți și pentru care să existe asistență, urmați [ghidul de instalare ReHLDS](/ro/docs/rehlds/install) și instalați fiecare componentă pe cont propriu.

:::

## rehlds-installer

[lukasenka/rehlds-installer](https://github.com/lukasenka/rehlds-installer) este un script de shell care instalează dintr-o singură rulare un set complet de server pe un sistem Linux bazat pe Debian — ReHLDS, Metamod-R, AMX Mod X, ReGameDLL_CS și ReUnion împreună, descărcând versiunile curente ale fiecăruia.

**Cui se adresează:** distribuțiilor din familia Debian — Debian, Ubuntu, Linux Mint, Pop!\_OS, Kali.

**De ce ați putea să îl luați în seamă:** reduce o instalare manuală în mai mulți pași la o singură comandă, ceea ce este atrăgător pentru un prim server.

Aspecte de cântărit înainte de a-l rula:

- **Rulează ca root și este descărcat din rețea.** Modul de utilizare documentat descarcă scriptul în `/root/` și îl execută. Citiți scriptul înainte să îl rulați, la fel ca în cazul oricărui instalator de acest fel.
- **Distribuie un binar precompilat.** Depozitul include un `cs.so` compilat, alături de script. Acel binar nu este produs de organizația ReHLDS și nu intră sub semnătura versiunilor ei — [versiunile ReHLDS](/ro/docs/rehlds/install) sunt semnate cu GPG și pot fi verificate, dar un binar inclus într-un depozit terț nu poate fi verificat la fel.
- **Nu este declarată nicio licență.** Depozitul nu conține un fișier `LICENSE`, așa că termenii pentru reutilizarea sau redistribuirea lui sunt nedefiniți.
- **Este proiectul unei singure persoane.** Primește actualizări constant, dar nu există o organizație în spate și niciun angajament de asistență.
- **Doar în engleză.** Scriptul și documentația lui nu sunt traduse.

Dacă îl folosiți, tratați rezultatul ca pe un punct de plecare și verificați apoi fiecare componentă — `meta version`, `amxx version`, `amxx modules` și `game version` în consola serverului vă vor spune ce s-a instalat de fapt.

:::note

Includerea unei unelte pe această pagină nu înseamnă o recomandare. Dacă întrețineți un utilitar legat de ReHLDS și vreți să apară aici, deschideți un pull request pe [rehlds.github.io](https://github.com/rehlds/rehlds.github.io) — așteptați-vă să fie descris fără ocolișuri, cu tot cu rezerve, la fel ca tot ce este mai sus.

:::
