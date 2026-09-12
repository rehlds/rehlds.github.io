---
id: rehlds-install
title: Instalare
sidebar_position: 2
description: ReHLDS este o versiune reconstruită a HLDS original, cu securitate sporită, performanță mai bună și capacități extinse de modding pentru jocuri precum Half-Life și Counter-Strike 1.6.
slug: /rehlds/install
---

<head>
  <title>ReHLDS: Instalare | ReHLDS</title>
</head>

# Instalare

ReHLDS este un înlocuitor direct pentru binarul motorului HLDS. Instalarea presupune descărcarea unui server HLDS de bază prin Steam și apoi suprascrierea binarului motorului cu versiunea ReHLDS.

## 1. Instalați serverul HLDS de bază

ReHLDS are nevoie de versiunea Steam **pre-anniversary** a HLDS (versiunea motorului 8684 sau mai veche). Descărcați-o cu `steamcmd`:

```text
app_set_config 90 mod cstrike
app_update 90 -beta steam_legacy validate
```

Schimbați `mod cstrike` cu modul dorit dacă nu rulați Counter-Strike 1.6.

:::warning

ReHLDS nu este compatibil cu versiunile vechi 5xxx și anterioare, instalate prin vechiul `hldsupdatetool`. Instalați întotdeauna prin `steamcmd`, așa cum este arătat mai sus.

:::

## 2. Descărcați ReHLDS

Luați o versiune de la una dintre adresele:

- [Versiuni de lansare](https://github.com/rehlds/ReHLDS/releases) — stabile, recomandate pentru serverele de producție.
- [Versiuni de dezvoltare](https://github.com/rehlds/ReHLDS/actions/workflows/build.yml) — cele mai recente artefacte din CI, utile pentru a testa corecturi care încă nu au fost publicate.

Alegeți arhiva potrivită platformei serverului dumneavoastră (Windows sau Linux pe 32 de biți).

## 3. Înlocuiți binarul motorului

1. Opriți complet serverul.
2. Faceți o copie de siguranță a binarului actual al motorului.
3. Copiați binarul ReHLDS peste cel original:

| Platformă | De înlocuit | Simboluri de depanare (opțional) |
| --- | --- | --- |
| Windows | `swds.dll` | `swds.pdb` |
| Linux | `engine_i486.so` | — |

Arhiva pentru Windows mai conține `hlds.exe` / `hltv.exe` și bibliotecile DLL ale componentelor ReHLTV (`core.dll`, `proxy.dll`, `demoplayer.dll`, `director.dll`, `filesystem_stdio.dll`); copiați-le, alături de `swds.dll`, pe cele folosite de configurația dumneavoastră.

4. Pe Linux, asigurați-vă că fișierul înlocuit păstrează aceleași permisiuni (poate fi citit și executat de contul care rulează serverul).
5. Porniți serverul. ReHLDS se identifică în mesajele afișate la pornire în consolă, așa că puteți confirma din jurnal că înlocuirea a reușit.

## Verificarea semnăturilor versiunilor (opțional, dar recomandat)

Arhivele de lansare pentru Linux sunt semnate cu GPG. Amprenta cheii publice este:

```text
63547829004f07716f7be4856c32c4282e60fb67
```

1. Descărcați cheia de pe un server de chei, de exemplu [keyserver.ubuntu.com](https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x63547829004f07716f7be4856c32c4282e60fb67).
2. Importați-o:

```bash
gpg --import 63547829004f07716f7be4856c32c4282e60fb67.asc
```

3. Descărcați atât arhiva versiunii, cât și fișierul de semnătură `.asc` care o însoțește.
4. Verificați:

```bash
gpg --verify some-rehlds.zip.asc some-rehlds.zip
```

## Observații privind compatibilitatea

- ReHLDS **nu este compatibil la nivel binar** cu HLDS-ul original (este compilat cu alte compilatoare). Pluginurile care modifică direct binarul sau care caută semnături în motor — Orpheu fiind un exemplu cunoscut — s-ar putea să nu funcționeze dacă nu susțin explicit ReHLDS.
- Dacă intenționați să folosiți Metamod-R, ReAPI sau ReGameDLL_CS, instalați mai întâi ReHLDS — aceste proiecte pornesc de la premisa că ReHLDS este deja instalat. Vedeți [instalarea Metamod-R](/ro/docs/metamod-r/install) și [instalarea ReGameDLL_CS](/ro/docs/regamedll-cs/install).
