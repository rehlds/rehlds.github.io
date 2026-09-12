---
id: regamedll-cs-settings
title: Configurare și comenzi
sidebar_position: 4
description: Configurați fișierele ReGameDLL_CS, CVar-urile de joc cele mai folosite și comenzile de consolă ale serverului.
slug: /regamedll-cs/settings
---

# Configurare și comenzi

ReGameDLL_CS adaugă setări peste CVar-urile standard ale serverului de Counter-Strike. Porniți de la fișierele de configurare incluse în aceeași versiune cu GameDLL-ul dumneavoastră.

## Fișiere de configurare

| Fișier | Se folosește pentru |
| --- | --- |
| `<mod>/game.cfg` | Regulile de joc ale ReGameDLL_CS, comportamentul HUD-ului, deplasarea, reapariția, daunele și extensiile cotei de boți. |
| `<mod>/game_init.cfg` | Setările care trebuie cunoscute în timpul inițializării GameDLL-ului: `bot_enable`, `hostage_ai_enable` și `mp_hullbounds_sets`. |
| `<mod>/server.cfg` | Setările obișnuite ale serverului, precum numele, parolele, jurnalizarea și CVar-urile standard Counter-Strike. |

`<mod>` înseamnă `cstrike` la CS 1.6 sau `czero` la Condition Zero.

:::important

După modificarea `game_init.cfg`, reporniți complet procesul serverului. Doar schimbarea hărții s-ar putea să nu reinițializeze funcții precum boții încorporați.

:::

## Setări ReGameDLL_CS folosite frecvent

Valorile de mai jos sunt cele din configurația versiunii stabile curente. Serverul dumneavoastră le poate suprascrie.

| CVar | Valoarea distribuită | Rol |
| --- | ---: | --- |
| `mp_freeforall` | `0` | Activează modul fiecare-pentru-sine când este pusă pe `1`. |
| `mp_round_infinite` | `0` | Împiedică anumite condiții ale scenariului să încheie runda. Acceptă și opțiuni precum `a`, `e` sau combinații precum `ae`. |
| `mp_round_restart_delay` | `5` | Pauza în secunde înaintea rundei următoare, după o victorie. |
| `mp_roundrespawn_time` | `20` | Intervalul de după începerea rundei în care un jucător care intră mai poate apărea în joc; `-1` elimină limita. |
| `mp_forcerespawn` | `0` | Îi readuce automat în joc pe jucătorii uciși, după pauza indicată. |
| `mp_maxmoney` | `16000` | Suma maximă de bani a unui jucător; ReGameDLL_CS permite valori de până la `999999`. |
| `mp_buy_anywhere` | `0` | Permite cumpărarea oriunde pentru ambele echipe (`1`), doar pentru teroriști (`2`) sau doar pentru antiteroriști (`3`). |
| `mp_infinite_ammo` | `0` | `1` menține încărcătorul plin; `2` oferă muniție de rezervă nelimitată. |
| `mp_infinite_grenades` | `0` | Activează grenadele nelimitate când este pusă pe `1`. |
| `mp_free_armor` | `0` | Oferă vestă (`1`) sau vestă și cască (`2`) la apariția în joc. |
| `mp_team_flash` | `1` | Stabilește dacă grenadele orbitoare îi afectează pe coechipieri și pe cel care le aruncă. |
| `sv_autobunnyhopping` | `0` | Sare automat cât timp tasta de săritură este ținută apăsată. |
| `sv_enablebunnyhopping` | `0` | Permite ca viteza să depășească limita normală de alergare. |
| `mp_scoreboard_showhealth` | `3` | Stabilește a cui viață este trimisă și afișată în tabelul de scor. |
| `mp_scoreboard_showmoney` | `3` | Stabilește ai cui bani sunt trimiși și afișați în tabelul de scor. |
| `mp_allow_point_servercommand` | `0` | Permite hărților să execute comenzi de server. Țineți-o dezactivată pentru hărțile în care nu aveți încredere. |

Pentru toate setările disponibile, valorile acceptate și observațiile de siguranță, folosiți [`dist/game.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game.cfg) din depozit ca sursă de referință.

## Comenzi de server

Rulați-le din consola serverului sau, unde este cazul, printr-o sesiune RCON autorizată.

| Comandă | Descriere |
| --- | --- |
| `game version` | Afișează versiunea GameDLL-ului încărcat, data și adresa proiectului. |
| `endround` | Încheie runda la egalitate. |
| `endround T` | Încheie runda cu victoria teroriștilor. |
| `endround CT` | Încheie runda cu victoria antiteroriștilor. |
| `swapteams` | Schimbă echipele între ele și repornește runda după pauza implicită de o secundă. |
| `swapteams 0` | Schimbă echipele fără să repornească runda. |
| `swapteams <secunde>` | Schimbă echipele și repornește runda după pauza indicată. |
| `give weapon_ak47` | Oferă arma indicată; necesită `sv_cheats 1`. |
| `impulse 255` | Oferă toate armele; necesită `sv_cheats 1`. |
| `impulse 200` | Activează noclip cu accelerare în aer; necesită `sv_cheats 1`. |

Comenzile specifice boților și exemplele de cotă sunt documentate în [Utilizarea boților](../bots/).

## Un mod sigur de a lucra cu configurația

1. Păstrați o copie a configurației nemodificate din fiecare versiune.
2. Schimbați câte un grup de setări pe rând.
3. Reporniți sau schimbați harta, după caz, apoi verificați valoarea efectivă în consola serverului.
4. Notați-vă valorile personalizate în afara arhivei versiunii, ca o actualizare să nu le poată suprascrie pe tăcute.
