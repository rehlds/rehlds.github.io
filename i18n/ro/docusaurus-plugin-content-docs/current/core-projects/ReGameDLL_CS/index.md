---
id: regamedll-cs
title: ReGameDLL_CS
sidebar_position: 1
description: Prezentare actuală, note de compatibilitate, descărcări și pașii următori pentru administratorii de server și dezvoltatorii ReGameDLL_CS.
slug: /regamedll-cs
---

# ReGameDLL_CS

ReGameDLL_CS este un înlocuitor al GameDLL-ului de server al Counter-Strike (`mp.dll` pe Windows și `cs.so` pe Linux), obținut prin inginerie inversă și întreținut activ. Este bazat pe GameDLL-ul original al Counter-Strike din versiunea 6153 beta a HLDS și aduce corecturi, setări noi de server, susținere încorporată pentru boți și un API extins pentru moduri și pluginuri.

Proiectul este compatibil cu conținutul oficial de server al Valve pentru:

- Counter-Strike 1.6 (`cstrike`)
- Counter-Strike: Condition Zero (`czero`)

Folosiți [cea mai recentă versiune stabilă](https://github.com/rehlds/ReGameDLL_CS/releases/latest) pe serverele de producție. Versiunile de dezvoltare sunt disponibile în [fluxul de lucru GitHub Actions](https://github.com/rehlds/ReGameDLL_CS/actions/workflows/build.yml) al proiectului, dar pot conține modificări care nu au ajuns încă într-o versiune stabilă.

## Ce aduce ReGameDLL_CS

- Corecturi de erori din joc și de pe partea serverului.
- Reguli de joc suplimentare și CVar-uri configurabile.
- Susținere încorporată pentru zBot, inclusiv moduri de cotă a boților și unelte de navigare.
- Inteligența artificială îmbunătățită a ostaticilor din Condition Zero, care poate fi instalată și pentru CS 1.6.
- Comenzi noi de server, precum `game version`, `endround` și `swapteams`.
- Un API extins al GameDLL-ului, folosit de proiecte precum [ReAPI](https://github.com/rehlds/ReAPI).

Lista completă și actualizată permanent a setărilor se află în fișierul [`game.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game.cfg) din depozitul proiectului.

## Avertisment privind compatibilitatea

:::warning Compatibilitate binară

ReGameDLL_CS nu este compatibil la nivel binar cu GameDLL-ul original al Valve, fiindcă este compilat cu alte compilatoare. Pluginurile care inspectează sau modifică binarul original după semnături ori decalaje, cum sunt unele pluginuri bazate pe Orpheu, pot da greș sau pot bloca serverul.

Preferați API-urile susținute, precum ReAPI, și testați fiecare plugin dependent de binar înainte de a-l pune pe un server de producție.

:::

Pluginurile obișnuite de AMX Mod X și Metamod, care folosesc interfețe documentate, în general nu sunt afectate de acest avertisment.

## Fișierele dintr-o versiune

Arhiva stabilă `regamedll-bin-*.zip` conține versiuni separate pentru `win32` și `linux32`:

| Platformă | GameDLL | Calea în arhivă |
| --- | --- | --- |
| Windows | `mp.dll` | `bin/win32/cstrike/dlls/mp.dll` |
| Linux x86 | `cs.so` | `bin/linux32/cstrike/dlls/cs.so` |

Fiecare folder de platformă mai conține `game.cfg`, `game_init.cfg` și `delta.lst`. Profilurile și sunetele zBot pentru CS 1.6 sunt distribuite separat; vedeți [Utilizarea boților](./bots/).

## Unde continuați

- [Instalarea sau actualizarea ReGameDLL_CS](./install/)
- [Configurarea regulilor de joc și a comenzilor de server](./settings/)
- [Instalarea și administrarea zBot](./bots/)
- [Compilarea ReGameDLL_CS din sursă](./compilling/)
- [Depanarea unui server](./troubbleshouting/)

După instalare, rulați această comandă în consola serverului:

```text
game version
```

O instalare reușită afișează versiunea ReGameDLL_CS, data compilării și adresa proiectului.
