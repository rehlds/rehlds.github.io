---
id: metamod-r-settings
title: Setări
sidebar_position: 3
description: Metamod-R este o versiune optimizată a Metamod original, cu performanță sporită și compatibilitate mai bună pentru serverele de Half-Life 1.
slug: /metamod-r/settings
---

<head>
  <title>Metamod-R: Setări | ReHLDS</title>
</head>

# Setări

## Activarea pluginurilor în plugins.ini
Ca exemplu vom folosi un plugin imaginar, `metaPlugin`. Instalarea celorlalte pluginuri este asemănătoare.
 
* Creați fișierul `plugins.ini` în folderul `addons\metamod` (dacă acesta nu există)
* Creați un folder pentru noul plugin în folderul `addons`._De exemplu, folderul **metaPlugin**._
* * Puneți pluginul dumneavoastră `metaPlugin.dll` (sau `metaPlugin.so`) în folderul creat `addons\metaPlugin`.
* Deschideți fișierul `plugins.ini` din folderul `metamod` cu orice editor de text.
* * Ca să activați pluginul `metaPlugin.dll` (sau `metaPlugin.so`), scrieți următoarele rânduri în fișierul `plugins.ini`:

_Pentru versiunile Windows ale serverului dumneavoastră:_
```
win32 addons\metaPlugin\metaPlugin.dll
```
_Pentru versiunile Linux ale serverului dumneavoastră:_
```
linux addons/metaPlugin/metaPlugin.so
```
* Salvați fișierul `plugins.ini` și porniți serverul.
* Instalarea este **încheiată**.

_Puteți verifica funcționarea pluginului cu comanda `meta list` în consola serverului._
![](https://i.imgur.com/1fVXBzc.png)

în caz de rezultat negativ,
![](https://i.imgur.com/nGXAokG.png)
consultați [Depanarea](https://github.com/rehlds/metamod-r/wiki/Troubbleshouting).

# Lista comenzilor de consolă
Scrieți comanda precedată de cuvântul `meta`. _De exemplu, `meta version`_.

```
     version                - informații despre versiunea metamod
     list                   - lista pluginurilor încărcate
     game                   - informații despre gamedll (lista mesajelor înregistrate, id și dimensiune)
     cmds                   - lista comenzilor de consolă adăugate de pluginuri terțe
     cvars                  - lista cvar-urilor adăugate de pluginuri terțe
     refresh                - reîncarcă metamod-r
     config                 - configurația din config.ini 
     load <nume>            - găsește și încarcă pluginul de la calea indicată
     unload <plugin>        - descarcă pluginul
     reload <plugin>        - reîncarcă pluginul
     info <plugin>          - informații despre plugin
     pause <plugin>         - pune pluginul pe pauză
     unpause <plugin>       - reia funcționarea tuturor pluginurilor instalate
     retry <plugin>         - încearcă din nou încărcarea pluginurilor eșuate
     clear <plugin>         - șterge din memorie pluginurile eșuate
     force_unload <plugin>  - descarcă forțat pluginul
     require <plugin>       - oprește serverul dacă pluginul indicat nu funcționează
```

### debuglevel 
 
| **var** | debuglevel 
| :----- | -----:
| **tip** | int
| **valori** | de la 0 la 42
| **implicit** | 0
| **se suprascrie cu** |  `+localinfo mm_debug <număr>`
| **exemplu** | `debuglevel 0`
| **descriere** | Stabilește nivelul inițial de depanare pentru metamod (echivalent cu cvar-ul "meta_debug"). Unde `<număr>` este un întreg, de la 0 în sus. Valoarea implicită este de obicei 0.  Dacă hlds este pornit cu "-dev", valoarea implicită devine 3.

### gamedll
| **var** | gamedll
| :----- | -----:
| **tip** | string
| **valori** | `<cale>`
| **implicit** | null
| **se suprascrie cu** |  `+localinfo mm_gamedll <cale>`
| **exemplu** |  `gamedll dlls/hl.dll`, `gamedll ../podbot/podbot.dll`, `gamedll /home/bots/dlls/mybot.dll`
| **descriere** | Înlocuiește gamedll-ul detectat automat, în special în cazul boților. Unde `<cale>` este o cale absolută sau una relativă la directorul jocului. Valoarea implicită este goală, gamedll-ul fiind recunoscut automat după directorul jocului.

### exec_cfg 
| **var** | exec_cfg 
| :----- | -----:
| **tip** | string
| **valori** | `<fișier>`
| **implicit** | `addons/metamod/exec.cfg`
| **se suprascrie cu** |  `+localinfo mm_execcfg <fișier>`
| **exemplu** |  `exec_cfg configs/debugging.cfg`, `exec_cfg ../clan/match.cfg`
| **descriere** | Înlocuiește numele implicit al fișierului care conține comenzile hlds executate imediat după încărcarea Metamod. Unde `<fișier>` este o cale relativă la directorul jocului.  Atenție!  Aceasta NU poate fi o cale absolută, fiindcă hlds nu execută "exec" pe căi absolute.
 
### clientmeta 
| **var** | clientmeta 
| :----- | -----:
| **tip** | bool
| **valori** | `<yes/no>`
| **implicit** | `yes`
| **se suprascrie cu** |  `+localinfo mm_clientmeta <yes/no>`
| **exemplu** |  `clientmeta yes`, `clientmeta no`
| **descriere** | Setare pentru dezactivarea sau activarea comenzilor de client ale Metamod ('meta list' și 'meta version'). Setare suplimentară pentru "Metamod+All-Mod-Support Patch". 

### dynalign_list
| **var** | dynalign_list 
| :----- | -----:
| **tip** | bool
| **valori** | `<yes/no>`
| **implicit** | `no`
| **se suprascrie cu** |   
| **exemplu** |  `dynalign_list yes`, `dynalign_list no`
| **descriere** | Setare pentru dezactivarea sau activarea alinierii dinamice a listei de pluginuri la afișare.  **ATENȚIE**: această opțiune influențează interpretarea greșită făcută de HLSW în fila `Metamod Plugins`.
