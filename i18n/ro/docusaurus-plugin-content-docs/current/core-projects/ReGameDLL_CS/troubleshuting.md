---
id: regamedll-cs-troubbleshouting
title: Depanare
sidebar_position: 6
description: Probleme obișnuite de instalare, de configurare și de boți în ReGameDLL_CS.
slug: /regamedll-cs/troubbleshouting
---

# Depanare

## `game version` nu afișează ReGameDLL

Probabil serverul încarcă încă GameDLL-ul anterior.

1. Opriți complet serverul.
2. Verificați că ați copiat binarul pentru sistemul de operare potrivit în `cstrike/dlls` sau `czero/dlls`.
3. Verificați că serverul folosește directorul de joc pe care l-ați modificat (`-game cstrike` sau `-game czero`).
4. Porniți serverul și rulați `game version` în consola lui.

Pe Linux, verificați și proprietarul fișierului și permisiunile de citire. Rețineți că binarul oficial al serverului este pe 32 de biți, așa că gazda are nevoie de bibliotecile de execuție pe 32 de biți.

## Comenzile pentru boți nu sunt recunoscute

Pe un server dedicat, `bot_enable` trebuie stabilit înainte de inițializarea GameDLL-ului.

1. Puneți `bot_enable "1"` în `cstrike/game_init.cfg` sau în `czero/game_init.cfg`.
2. La Counter-Strike 1.6, instalați conținutul fișierului oficial `bot_profiles.zip` în `cstrike`.
3. Reporniți complet serverul; schimbarea cvar-ului după pornire nu este suficientă.

Nu adăugați `-bots` sau `-host-improv` în linia de comandă. Aceste opțiuni vechi au fost eliminate în favoarea cvar-urilor.

## Boții sunt activați, dar nu intră în joc

Verificați valorile active pentru:

```text
bot_quota
bot_quota_mode
bot_join_after_player
bot_join_team
```

Pentru o verificare simplă, folosiți:

```cfg
bot_quota_mode "normal"
bot_quota "4"
bot_join_after_player "0"
bot_join_team "any"
```

Apoi schimbați harta sau reporniți serverul. Puteți rula și `bot_add` manual, ca să deosebiți o problemă de cotă de una legată de datele boților sau de navigare.

## Lipsesc profiluri sau nume de boți

Counter-Strike 1.6 nu vine cu toate datele boților din Condition Zero. Dezarhivați fișierul `regamedll/extra/zBot/bot_profiles.zip` din depozit în directorul `cstrike`, păstrând structura de foldere neatinsă. Dacă indicați un nume de profil în `bot_add`, acesta trebuie să existe în baza de profiluri instalată.

## Boții nu reușesc să navigheze pe o hartă personalizată

Se poate ca harta să nu aibă o rețea de navigare compatibilă. Porniți harta, adăugați un bot și folosiți `bot_nav_analyze` din consola serverului. Analiza poate consuma un timp considerabil de procesor. Salvați sau reîncărcați datele de navigare generate înainte de a le folosi pe un server de producție.

## Serverul se blochează după înlocuirea GameDLL-ului

- Dezactivați temporar pluginurile Metamod și testați ReGameDLL_CS de unul singur.
- Actualizați ReHLDS, Metamod-R și pluginurile la versiuni compatibile.
- Eliminați pluginurile care modifică adrese fixe sau care se bazează pe decalajele din GameDLL-ul Valve, dacă documentația lor nu menționează explicit susținerea pentru ReGameDLL_CS.
- Restabiliți fișierul `delta.lst` din versiunea instalată, dacă a fost suprascris din greșeală cu unul incompatibil.

## O setare nu are niciun efect

- Puneți setările valabile doar la inițializare, precum `bot_enable`, în `game_init.cfg` și reporniți procesul.
- Puneți setările de joc în `game.cfg` sau într-un alt fișier de configurare executat după încărcarea hărții.
- Căutați același cvar în fișierele de configurare de mai târziu; ultima atribuire este cea care contează.
- Comparați configurația dumneavoastră cu arhiva versiunii actuale la fiecare actualizare. Versiunile noi pot adăuga cvar-uri sau pot schimba valorile implicite.

## Cum raportați o problemă

Înainte de a deschide o sesizare, adunați:

- rezultatul comenzii `game version`;
- versiunile ReHLDS/HLDS, Metamod și ReGameDLL_CS;
- sistemul de operare și directorul jocului;
- lista pluginurilor;
- mesajele relevante din consolă și o configurație minimă care reproduce problema.

Raportați problemele reproductibile ale ReGameDLL_CS în [sistemul de raportare al proiectului](https://github.com/rehlds/ReGameDLL_CS/issues).
