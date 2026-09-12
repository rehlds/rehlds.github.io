---
id: revoice
title: ReVoice
sidebar_position: 1
description: ReVoice - plugin Metamod, transcodor de voce care repară discuția prin voce între clienții Steam și non-Steam pe serverele ReHLDS.
slug: /revoice
---

# Ce este ReVoice?

:::warning Abandonat

ReVoice este marcat drept **abandonat** de cei care îl întrețin. Depozitul rămâne disponibil și poate fi compilat, dar proiectul nu este în dezvoltare activă — testați temeinic înainte să vă bazați pe el în producție și verificați [sistemul de raportare](https://github.com/rehlds/ReVoice/issues) pentru problemele cunoscute înainte de a-l pune în funcțiune.

:::

ReVoice este un plugin [Metamod](https://github.com/rehlds/Metamod-R) pentru [ReHLDS](/ro/docs/rehlds), care repară compatibilitatea discuției prin voce între clienții Steam și non-Steam de pe același server. Clienții Steam adevărați și cei non-Steam (cu protocoalele 47/48, cei pe care [ReUnion](/ro/docs/reunion) îi lasă să se conecteze) nu folosesc în mod nativ același codec de voce, așa că, fără ReVoice, discuția prin voce între cele două grupuri poate ajunge să nu funcționeze deloc sau să meargă într-un singur sens. ReVoice transcodează datele de voce între codecuri (Speex, Opus și SILK), pentru ca cele două grupuri să se poată auzi.

## Cerințe

- [ReHLDS](/ro/docs/rehlds/install) și Metamod (se recomandă Metamod-R).
- `sv_voiceenable` trebuie să fie activat pe server — ReVoice repară compatibilitatea codecurilor, dar nu activează el însuși discuția prin voce.
- De obicei este instalat împreună cu [ReUnion](/ro/docs/reunion/install), fiindcă tocmai acesta creează amestecul de clienți Steam și non-Steam.

Vedeți [Instalare](./installing.md).
