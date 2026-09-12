---
id: regamedll-cs-install
title: Instalare și actualizări
sidebar_position: 2
description: Instalați sau actualizați versiunea curentă ReGameDLL_CS pe serverele de Counter-Strike 1.6 și Condition Zero.
slug: /regamedll-cs/install
---

# Instalare și actualizări

Aceste instrucțiuni se aplică serverelor dedicate de Counter-Strike 1.6 și Counter-Strike: Condition Zero, pe Windows sau pe Linux de 32 de biți.

## Înainte de a începe

1. Opriți complet serverul.
2. Faceți o copie de siguranță a directorului modului vizat (`cstrike` sau `czero`), în special a folderului `dlls` și a fișierelor de configurare.
3. Descărcați `regamedll-bin-*.zip` din [cea mai recentă versiune stabilă](https://github.com/rehlds/ReGameDLL_CS/releases/latest).

:::note

Pagina versiunii pune la dispoziție și un fișier de semnătură `.zip.asc`. El servește la verificare și nu este pachetul serverului în sine.

:::

## Alegeți versiunea pentru platforma potrivită

| Platforma serverului | Folderul din arhivă | Binarul principal |
| --- | --- | --- |
| Windows | `bin/win32/cstrike` | `dlls/mp.dll` |
| Linux x86 | `bin/linux32/cstrike` | `dlls/cs.so` |

Arhiva folosește numele de folder `cstrike` pentru ambele jocuri compatibile. Când instalați pe Condition Zero, copiați conținutul acelui folder în directorul `czero` al serverului dumneavoastră.

## Instalarea pe Windows

1. Deschideți `bin/win32/cstrike` din arhiva descărcată.
2. Copiați conținutul în directorul modului vizat:
   - CS 1.6: `<server>/cstrike`
   - Condition Zero: `<server>/czero`
3. Verificați că `<mod>/dlls/mp.dll` a fost înlocuit.
4. Îmbinați fișierele de configurare furnizate, așa cum este descris mai jos.

## Instalarea pe Linux

Dezarhivați arhiva, apoi copiați versiunea pentru Linux în directorul modului vizat. La CS 1.6, de exemplu:

```bash
unzip regamedll-bin-*.zip
cp -a bin/linux32/cstrike/. /path/to/server/cstrike/
```

La Condition Zero, folosiți `/path/to/server/czero/` ca destinație. Verificați că `<mod>/dlls/cs.so` a fost înlocuit și că poate fi citit în continuare de contul care rulează serverul.

## Îmbinarea fișierelor de configurare

Nu suprascrieți orbește o configurație pe care ați personalizat-o deja.

| Fișier | Rol |
| --- | --- |
| `game.cfg` | Setările de joc și CVar-urile extinse ale ReGameDLL_CS. |
| `game_init.cfg` | Setări timpurii ale GameDLL-ului, precum `bot_enable` și `hostage_ai_enable`. |
| `delta.lst` | Definițiile delta de rețea distribuite cu versiunea curentă. Păstrați acest fișier sincronizat cu versiunea instalată. |

La o primă instalare, copiați toate cele trei fișiere. La o actualizare:

1. Înlocuiți GameDLL-ul și `delta.lst` cu versiunile din arhivă.
2. Comparați fișierele dumneavoastră `game.cfg` și `game_init.cfg` cu noile copii.
3. Îmbinați CVar-urile și comentariile noi, păstrând valorile pe care le-ați ales.

Cele mai recente șabloane din depozit sunt [`game.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game.cfg) și [`game_init.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game_init.cfg).

## Pornirea și verificarea

Porniți serverul și rulați:

```text
game version
```

Dacă această comandă nu este recunoscută, noul GameDLL nu a fost încărcat. Verificați binarul platformei alese, directorul modului vizat, permisiunile fișierelor și intrările `gamedll` / `gamedll_linux` din `liblist.gam` al modului.

## Actualizarea unei instalări existente

Urmați aceiași pași ca la o instalare nouă: opriți serverul, faceți copii de siguranță, înlocuiți GameDLL-ul corect și `delta.lst`, îmbinați modificările de configurare, apoi verificați cu `game version`.

Citiți [notele de lansare](https://github.com/rehlds/ReGameDLL_CS/releases) înainte de actualizare. Versiunile noi pot adăuga CVar-uri sau pot schimba comportamentul API-ului, ceea ce afectează ReAPI și pluginurile serverului.

## Modul beta opțional

ReGameDLL_CS păstrează un mod beta opțional, cu cele mai recente modificări preluate din versiunea oficială Counter-Strike a Valve. Adăugați `-beta` în linia de comandă a HLDS doar atunci când chiar vreți să testați acest mod. Verificați compatibilitatea pluginurilor înainte de a-l folosi pe un server de producție.
