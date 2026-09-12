---
id: reunion
title: ReUnion
sidebar_position: 1
description: ReUnion - plugin Metamod care permite clienților non-Steam cu protocoalele 47 și 48 să se conecteze la servere ReHLDS.
slug: /reunion
---

# Ce este ReUnion?

ReUnion este un plugin [Metamod](https://github.com/rehlds/Metamod-R) care le permite clienților GoldSrc non-Steam (protocoalele 47 și 48) să se conecteze la servere [ReHLDS](/ro/docs/rehlds). Este continuarea proiectului DProto, adaptată anume pentru ReHLDS.

De-a lungul timpului, o bună parte dintre jucătorii de Half-Life și Counter-Strike s-au conectat prin clienți non-Steam care folosesc emulatoare diverse (revEmu, SteamEmu, SC2009 și altele). ReUnion îi autentifică pe acești clienți și le atribuie identificatori (`STEAM_`/`VALVE_`) potrivit configurației dumneavoastră, corectează problemele de compatibilitate cu lista de servere și cu interogările pe care unii dintre acești clienți le provoacă și adaugă o protecție împotriva inundării cu interogări — toate acestea fără o instalare separată de DProto.

Puteți găsi servere care rulează ReUnion prin [Game Tracker](http://www.gametracker.com/search/?search_by=server_variable&search_by2=reu_version).

## De ce se ocupă

- **Identificarea clienților** — atribuie fiecărui client care se conectează un identificator în stilul `STEAM_`/`VALVE_`, cu reguli separate pentru fiecare tip de client (Steam real, revEmu, SteamEmu, SC2009, AVSMP, scanerele SETTI, sXeI și altele). Vedeți [Setări](./settings.md).
- **Protecția SteamID** — un hash opțional cu sare (`SteamIdHashSalt`) face ca identificatorii generați să nu poată fi deduși invers, ceea ce împiedică falsificarea și furtul de SteamID.
- **Compatibilitatea cu interogările către server** — corecturi pentru clienții cu o listă de servere defectuoasă, plus o limitare opțională a ratei împotriva abuzurilor prin inundarea cu interogări.

## Cerințe

- ReHLDS cu API `3.10` sau mai nou.
- Metamod (se recomandă Metamod-R).

Vedeți [Instalare](./installing.md).

:::note

ReUnion a susținut cândva emulatorul `SmartSteamEmu3`. Această susținere a fost eliminată când proiectul a devenit cu sursă deschisă, fiindcă se baza pe un cod de autorizare sensibil. Acest lucru afectează rareori populația reală a serverelor, fiindcă emulatorul respectiv este puțin răspândit printre clienții non-Steam.

:::
