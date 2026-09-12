---
id: rehlds-supported-games
title: Jocuri compatibile
sidebar_position: 1
description: ReHLDS este o versiune reconstruită a HLDS original, cu securitate sporită, performanță mai bună și capacități extinse de modding pentru jocuri precum Half-Life și Counter-Strike 1.6.
slug: /rehlds/supported-games
---

<head>
  <title>ReHLDS: Jocuri compatibile | ReHLDS</title>
</head>

# Jocuri compatibile

ReHLDS înlocuiește **motorul** HLDS în sine (`swds.dll` / `engine_i486.so`), nu GameDLL-ul unui anumit mod. Din acest motiv, „jocurile compatibile” înseamnă de fapt două lucruri: cu ce versiune de HLDS este compatibil ReHLDS și pe ce platformă îl rulați. Orice mod GoldSrc care rulează pe acea versiune de HLDS — Half-Life, Counter-Strike 1.6, Condition Zero, Day of Defeat, Team Fortress Classic, Deathmatch Classic și moduri terțe — rulează și peste ReHLDS.

## Compatibilitatea cu versiunile motorului

| Versiunea HLDS | Situație |
| --- | --- |
| Versiunea Steam pre-anniversary (versiunea motorului ≤ 8684), descărcată prin `steamcmd` | :heavy_check_mark: Complet compatibilă |
| Versiunile vechi 5xxx și anterioare, descărcate prin vechiul `hldsupdatetool` | :x: Incompatibile |

:::warning

ReHLDS nu este compatibil cu platforma veche 5xxx și anterioară, instalată prin `hldsupdatetool`. Verificați că rulați versiunea pre-anniversary descrisă în [Instalare](./installing.md) înainte de a raporta o problemă.

:::

## Platforme compatibile

| Platformă | Binar | Cerință de procesor |
| --- | --- | --- |
| Windows | `swds.dll` | SSE, SSE2, SSE3 (SSE4.1 / SSE4.2 folosite când sunt disponibile) |
| Linux (32 de biți) | `engine_i486.so` | SSE, SSE2, SSE3 (SSE4.1 / SSE4.2 folosite când sunt disponibile) |

ReHLDS este distribuit împreună cu **ReHLTV**, o versiune îmbunătățită a proxy-ului și releului Half-Life TV, astfel încât configurațiile HLTV primesc aceleași corecturi și aceleași limite extinse, fără o descărcare separată.

## Compatibilitatea cu moduri și pluginuri

Fiindcă ReHLDS înlocuiește doar stratul motorului, compatibilitatea la nivel de mod (GameDLL, pluginuri Metamod, pluginuri AMX Mod X) ține în general de modul și de pluginul respectiv, nu de ReHLDS. Două aspecte merită reținute:

- ReHLDS **nu este compatibil la nivel binar** cu HLDS-ul original — este compilat cu alte compilatoare decât binarele originale ale Valve. Pluginurile care modifică direct binarul sau care caută semnături în motor (de exemplu Orpheu) s-ar putea să nu funcționeze corect și au nevoie de susținere explicită pentru ReHLDS.
- Pentru situația actuală de compatibilitate a unui anumit mod combinat cu [Metamod-R](/ro/docs/metamod-r/supported-games) sau cu [ReGameDLL_CS](/ro/docs/regamedll-cs/supported-games), consultați pagina de jocuri compatibile a proiectului respectiv — aceste straturi se așază direct peste ReHLDS.
