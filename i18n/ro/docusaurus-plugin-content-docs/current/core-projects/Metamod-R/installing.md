---
id: metamod-r-install
title: Instalare
sidebar_position: 2
description: Metamod-R este o versiune optimizată a Metamod original, cu performanță sporită și compatibilitate mai bună pentru serverele de Half-Life 1.
slug: /metamod-r/install
---

<head>
  <title>Metamod-R: Instalare | ReHLDS</title>
</head>

# Instalare

Consultați [lista jocurilor compatibile](/ro/docs/metamod-r/supported-games) și verificați dacă jocul dumneavoastră apare acolo. _Nu vă supărați dacă nu apare. După instalare, puteți verifica funcționarea **Metamod-r** cu modul dumneavoastră `nesusținut`, după o reglare fină făcută pe baza acestui [articol](/ro/docs/metamod-r/settings). Există posibilitatea ca jocul să pornească._

# Compatibilitate

**Metamod-r este incompatibil cu `HLDS`-ul original. Este necesar să aveți instalat [ReHLDS](https://github.com/rehlds/ReHLDS) (`API 3.1+`). Nu există nicio garanție că produsul va funcționa într-un alt mediu.**

| HLDS| [ReHLDS](https://github.com/rehlds/ReHLDS)| SO
|---------| -------|  -------|  
| :x: | `API 3.1+` | ![](https://i.imgur.com/AzhAYR4.png) ![](https://i.imgur.com/t23p9tU.png) |  

# Instalarea pe serverul de joc
* Descărcați cea mai recentă versiune de _**Metamod-r**_ [![Download](https://camo.githubusercontent.com/2b15ec2fc402e02b66fde9eab7e896406caeddac/687474703a2f2f7265686c64732e6f72672f76657273696f6e2f6d6574616d6f642d2d722e737667)](http://teamcity.rehlds.org/guestAuth/downloadArtifacts.html?buildTypeId=Metamod_Publish&buildId=lastSuccessful) într-un loc convenabil.
* Dezarhivați folderul _**addons**_ din arhiva zip descărcată în folderul modului dumneavoastră.![](https://i.imgur.com/ptx3MZx.png)
_Dacă aveți dificultăți în stabilirea numelui directorului, consultați tabelul rezumativ, aflat **[aici](/ro/docs/metamod-r/troubbleshouting)**._
* Găsiți fișierul `liblist.gam` în folderul modului, faceți-i o copie de siguranță (dacă doriți) și deschideți-l cu orice editor de text.
* Găsiți în fișierul `liblist.gam` rândurile care conțin `gamedll` și `gamedll_linux`. _La `Half-Life 1`, de exemplu, arată așa:_
```
gamedll "dlls\hl.dll"
gamedll_linux "dlls/hl.so"
```
_iar la `Counter-Strike 1.6`:_

```
gamedll "dlls\mp.dll"
gamedll_linux "dlls/cs.so"
```
* În rândul dorit, înlocuiți conținutul cu calea către metamod-r:

_Pentru versiunile Windows ale serverului dumneavoastră:_
```
gamedll "addons\metamod\metamod.dll"
```
_Pentru versiunile Linux ale serverului dumneavoastră:_
```
gamedll_linux "addons/metamod/metamod_i386.so"
```
* Salvați modificările din fișierul `liblist.gam`.
* Instalarea **Metamod-r** este încheiată.

# Verificare

După instalarea cu succes a **Metamod-r**, puteți verifica funcționarea pornind serverul de joc.

**Metamod-r** funcționează:
![](https://i.imgur.com/VScngBr.png)
Dacă nu funcționează,
![](https://i.imgur.com/HPKRiBF.png)
consultați [ghidul de depanare](/ro/docs/metamod-r/troubbleshouting).
