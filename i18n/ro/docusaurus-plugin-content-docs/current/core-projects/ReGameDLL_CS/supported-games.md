---
id: regamedll-cs-supported-games
title: Jocuri și platforme compatibile
sidebar_position: 3
description: Jocuri, sisteme de operare și motoare compatibile cu ReGameDLL_CS.
slug: /regamedll-cs/supported-games
---

# Jocuri și platforme compatibile

ReGameDLL_CS este un GameDLL de server pentru versiunile GoldSrc ale Counter-Strike și Counter-Strike: Condition Zero.

## Jocuri compatibile

| Joc | Directorul jocului | Observații |
| --- | --- | --- |
| Counter-Strike 1.6 | `cstrike` | Complet compatibil. Pachetul opțional cu datele zBot este necesar dacă vreți să folosiți boții încorporați. |
| Counter-Strike: Condition Zero | `czero` | Complet compatibil. Resursele boților vin odată cu jocul. |

ReGameDLL_CS nu este un GameDLL de înlocuire directă pentru alte moduri GoldSrc. Nu îl instalați în directoare precum `valve`, `dod` sau `tfc`.

## Platforme de server compatibile

Arhivele oficiale ale versiunilor conțin binare de server pe 32 de biți pentru ambele platforme principale:

| Platformă | GameDLL |
| --- | --- |
| Windows | `dlls/mp.dll` |
| Linux | `dlls/cs.so` |

Arhiva păstrează fiecare platformă în `bin/win32` sau `bin/linux32`. Copiați conținutul directorului potrivit în directorul jocului dumneavoastră.

ReGameDLL_CS înlocuiește doar logica jocului. Aveți nevoie în continuare de un motor GoldSrc compatibil, cum este HLDS-ul actual de pe Steam sau ReHLDS, precum și de fișierele originale ale jocului.

## Compatibilitatea cu motoare și clienți

- ReHLDS este recomandat pentru serverele dedicate, dar ReGameDLL_CS poate rula și pe o instalare compatibilă de HLDS de pe Steam.
- De regulă, jucătorii nu trebuie să instaleze ReGameDLL_CS. Este un înlocuitor care ține de partea serverului.
- Țineți GameDLL-ul, motorul, Metamod și pluginurile serverului actualizate împreună. Pluginurile vechi care modifică direct binarul pot depinde de decalajele din GameDLL-ul original al Valve și pot fi incompatibile.
- Motoarele alternative, precum Xash3D, sunt proiecte separate. Compatibilitatea lor poate să difere de cea din mediul oficial Steam/ReHLDS și ar trebui verificată la proiectul motorului respectiv.
