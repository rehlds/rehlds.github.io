---
id: reunion-settings
title: Setări
sidebar_position: 3
description: ReUnion - plugin Metamod care permite clienților non-Steam cu protocoalele 47 și 48 să se conecteze la servere ReHLDS.
slug: /reunion/settings
---

<head>
  <title>ReUnion: Setări | ReHLDS</title>
</head>

# Setări

ReUnion se configurează în întregime prin `reunion.cfg`. Fișierul implicit este bogat comentat — această pagină rezumă fiecare secțiune.

:::warning

Fișierul însuși începe cu „nu schimbați nimic dacă nu știți ce înseamnă”, și nu întâmplător — majoritatea valorilor implicite sunt deja reglate. Schimbați valorile în cunoștință de cauză, una câte una.

:::

## Tipurile de identificator ale clienților (`cid_*`)

Fiecare opțiune `cid_*` atribuie un tip de identificator unei categorii de clienți. Codurile de tip disponibile sunt:

| Cod | Semnificație |
| --- | --- |
| `1` | Steam ID real (sau generat pe baza componentelor) (`STEAM_xx:xx:xx`). |
| `2` | Valve ID real (sau generat pe baza componentelor) (`VALVE_xx:xx:xx`). |
| `3` | Identificator `STEAM_` generat pe baza adresei IP a clientului. |
| `4` | Identificator `VALVE_` generat pe baza adresei IP a clientului. |
| `5` | Învechit — clientul este respins. |
| `6` | Rezervat pentru folosire ulterioară. |
| `7` | HLTV. |
| `8` | `STEAM_ID_LAN`. |
| `9` | `STEAM_ID_PENDING`. |
| `10` | `VALVE_ID_LAN`. |
| `11` | `VALVE_ID_PENDING`. |
| `12` | `STEAM_666:88:666`. |

| Opțiune | Implicit | Se aplică pentru |
| --- | --- | --- |
| `cid_Steam` | `1` | Clienții Steam legitimi. |
| `cid_SteamPending` | `5` | Clienții care s-au autorizat cu succes, dar nu au primit un Steam ID utilizabil. |
| `cid_HLTV` | `5` | Releele HLTV. |
| `cid_NoSteam47` | `5` | Clienții cu protocolul 47, fără susținere pentru generarea unui identificator unic. |
| `cid_NoSteam48` | `5` | Clienții cu protocolul 48, fără susținere pentru generarea unui identificator unic. |
| `cid_RevEmu` | `1` | revEmu ≥ 9.74. |
| `cid_RevEmu2013` | `1` | RevEmu 2013. |
| `cid_SC2009` | `1` | SteamClient 2009 / revEmu > 9.82. |
| `cid_OldRevEmu` | `1` | Versiunile mai vechi de revEmu. |
| `cid_SteamEmu` | `1` | SteamEmu al lui hCupa. |
| `cid_AVSMP` | `1` | AVSMP (Steam piratat). |
| `cid_Setti` | `3` | Scanerul de servere SETTI. |
| `cid_SXEI` | `1` | Clienții sXeI. |

`HLTVExcept_IP` (implicit `127.0.0.1`) permite unui HLTV de la o anumită adresă IP să intre chiar și atunci când `cid_HLTV` respinge clienții HLTV.

## Setări de autentificare

| Opțiune | Implicit | Descriere |
| --- | --- | --- |
| `AuthVersion` | `4` | Versiunea protocolului de autorizare: `1` DProto (învechită), `2` Reunion 2015–2018, `3` Reunion 2018–2024, `4` cea actuală (recomandată). |
| `SteamIdHashSalt` | *(gol)* | Sarea folosită la hash-ul identificatorilor Steam generați, care îi modifică ireversibil pentru a împiedica furtul de identificatori. Lungimea recomandată este de 32 de caractere sau mai mult, cu un minim de 16. Cu `AuthVersion >= 3`, o valoare goală face ca ReUnion **să nu pornească** — puneți explicit `0` ca să dezactivați hash-ul (nerecomandat), în loc să lăsați câmpul gol. |
| `SC2009_RevCompatMode` | `1` | Face identificatorii generați de SC2009 compatibili cu cei de la revEmu. Nu poate fi dezactivată când `AuthVersion >= 3`. |
| `EnableSXEIdGeneration` | `0` | Activează generarea de identificatori pe baza datelor clientului sXeI. Activați-o doar dacă folosiți într-adevăr o configurație compatibilă cu sXeI. |
| `EnableGenPrefix2` | `0` | Adaugă un al doilea prefix de identificator, ca să scadă riscul de coliziune al identificatorilor generați. Are efect doar cu `SteamIdHashSalt` stabilită; nu poate fi dezactivată cu `AuthVersion >= 3`. |

### Prefixele authid mai vechi

Opțiunile `IPGen_Prefix1/2`, `Native_Prefix1`, `RevEmu*_Prefix1`, `SC2009_Prefix1`, `OldRevEmu_Prefix1`, `SteamEmu_Prefix1`, `AVSMP_Prefix1`, `Setti_Prefix1` și `SXEI_Prefix1` se aplică doar când `AuthVersion` este `1` sau `2`. Cu `AuthVersion = 4`, valoarea recomandată, această secțiune este ignorată în întregime — lăsați-o la valorile implicite.

Indiferent de versiune, `banid` folosește întotdeauna SteamID-ul **fără** niciun prefix.

## Interogări către server

| Opțiune | Implicit | Descriere |
| --- | --- | --- |
| `ServerInfoAnswerType` | `0` | `0` răspunsuri în formatul nou (Steam) (recomandat), `1` răspunsuri în formatul vechi GoldSrc, `2` hibrid — vizibil pentru amândouă, dar răspunde de 3 ori la fiecare interogare. |
| `FixBuggedQuery` | `1` | Corectează clienții cu o listă de servere defectuoasă, care altfel ar rămâne blocați la conectare. |
| `EnableQueryLimiter` | `1` | Limitează rata interogărilor către server (TSource, lista jucătorilor etc.). Puneți `0` dacă limitați deja rata din exterior. |
| `QueryFloodBanLevel` | `400` | Numărul de interogări pe secundă care declanșează o interdicție de IP. Interval `320`–`2048`; traficul legitim rareori depășește ~80/s. |
| `QueryFloodBanTime` | `10` | Durata interdicției, în minute, pentru inundarea cu interogări, între `0` și `60`. `0` blochează fără să interzică. |
| `QueryLimiterExceptIP` | *(secțiune, goală)* | Lista adreselor IP (câte una pe rând, sub `[QueryLimiterExceptIP]`) exceptate de la limitarea interogărilor. |
| `AllowSplitPackets` | `0` | Permite împărțirea pachetelor trimise mai mari de 1400 de octeți, așa cum face clientul Steam original. Unele unelte de monitorizare nu susțin acest lucru. |
| `IDClientsLimit` | `1` | Numărul maxim de clienți simultani cu același Steam ID, între `0` și `32`. `0` dezactivează limita. Util la depanarea cu mai multe instanțe de client. |

## Jurnalizare

| Opțiune | Implicit | Descriere |
| --- | --- | --- |
| `LoggingMode` | `0` | `0` deloc, `1` consolă, `2` fișiere de jurnal, `3` ambele. |

## Întrebări frecvente

- **Am pus `SteamIdHashSalt` ca în DProto, dar jucătorii primesc alte SteamID-uri.** ReUnion folosește un algoritm de hash diferit și mai sigur. Cunoașterea SteamID-ului unui jucător dinainte de activarea `SteamIdHashSalt` nu ajută la reproducerea lui ulterioară.
- **Se poate face ceva împotriva celor care își schimbă SteamID-ul?** Nu — programele care schimbă identificatorul generează bilete de autorizare valide, așa că serverul nu are cum să afle că un identificator a fost substituit. Stabilirea `SteamIdHashSalt` împiedică măcar falsificarea intenționată a identificatorului *unui anumit alt jucător*.
- **Unele unelte de monitorizare a serverelor nu reușesc să obțină lista jucătorilor.** Probabil folosesc un format de interogare învechit; folosiți o bibliotecă actuală de interogare, cum este [PHP-Source-Query](https://github.com/xPaw/PHP-Source-Query) sau ceva echivalent.
- **DProto avea o opțiune `Game_Name`; ReUnion nu o are.** Schimbați numele de joc raportat dintr-un plugin.
