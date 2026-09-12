---
id: rechecker
title: "ReChecker"
sidebar_label: ReChecker
sidebar_position: 1
description: ReChecker este un plugin Metamod care permite verificarea fișierelor clientului după nume și după hash-ul md5.
slug: /rechecker
keywords:
  - rechecker
  - metamod
  - plugin
tags:
  - rechecker
  - metamod plugin
last_update:
  date: 07/21/2025
  author: STAM
---

# Ce este ReChecker?

ReChecker este un plugin [Metamod](https://github.com/rehlds/Metamod-R) pentru [ReHLDS](/ro/docs/rehlds), care inspectează fișierele trimise de un client prin sistemul de resurse și de verificare a integrității al motorului, la conectare sau la descărcare, și le compară cu o listă de reguli furnizată de dumneavoastră. Când calea și hash-ul unui fișier (ori faptul că lipsește sau că nu este recunoscut) corespund unei reguli, ReChecker execută o comandă de consolă la alegerea dumneavoastră — de obicei `kick` sau un mesaj în jurnal.

El servește la depistarea bibliotecilor DLL de cheat cunoscute și a fișierelor injectate, după semnătura statică a fișierului (calea plus un prefix scurt al MD5-ului), independent de logica anti-cheat care rulează în altă parte.

## Cum funcționează

Pentru fiecare resursă relevantă transferată de un client, ReChecker o confruntă cu regulile din `resources.ini`:

- O regulă poate corespunde unui **hash anume**, valorii `UNKNOWN` (orice nu este recunoscut explicit) sau valorii `MISSING` (fișierul nu a fost trimis deloc).
- O regulă care se potrivește execută o comandă configurată, în care simboluri precum `[userid]`, `[name]`, `[file_name]` și `[file_md5hash]` sunt înlocuite cu valorile reale.
- Indicatorul `BREAK` oprește verificarea regulilor următoare pentru acel client de îndată ce una se potrivește; `IGNORE` trece un anumit hash pe lista celor permise.

Vedeți [Setări](./settings.md) pentru formatul complet al fișierului `resources.ini`.

## Ce este inclus

Proiectul vine cu un `resources.ini` de pornire, cu semnături pentru o serie de fișiere de cheat cunoscute de-a lungul timpului (wallhack-uri, aimbot-uri, injectoare de DLL). Tratați-l ca pe un punct de plecare pe care îl întrețineți dumneavoastră — nu este o bază de date de cheat-uri actualizată permanent.

## Cerințe

ReChecker depinde de API-ul extins al motorului [ReHLDS](/ro/docs/rehlds/install) — el nu se încarcă pe HLDS-ul simplu. De asemenea, are nevoie ca Metamod (se recomandă Metamod-R) să fie instalat mai întâi. Vedeți [Instalare](./installing.md).
