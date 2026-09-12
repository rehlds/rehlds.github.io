---
id: rehlds-troubbleshouting
title: Depanare
sidebar_position: 4
description: ReHLDS este o versiune reconstruită a HLDS original, cu securitate sporită, performanță mai bună și capacități extinse de modding pentru jocuri precum Half-Life și Counter-Strike 1.6.
slug: /rehlds/troubbleshouting
---

<head>
  <title>ReHLDS: Depanare | ReHLDS</title>
</head>

# Depanare

## Serverul se blochează imediat la pornire („Illegal instruction” sau ceva asemănător)

Binarele ReHLDS au nevoie de seturile de instrucțiuni `SSE`, `SSE2` și `SSE3` (cu `SSE4.1` / `SSE4.2` folosite când sunt disponibile). Aproape întotdeauna este o problemă de procesor sau de virtualizare, nu una de configurare:

- Verificați că procesorul gazdei chiar acceptă SSE3. Rareori este o problemă pe hardware real fabricat după ~2005, dar unele configurații minimale de VPS sau de mașină virtuală expun sistemului invitat un set redus de instrucțiuni.
- Dacă rulați într-o mașină virtuală, verificați setările hipervizorului privind expunerea și modelul procesorului.

## Motorul nu se încarcă / se comportă ca un „binar greșit”

De obicei este vorba despre o nepotrivire de motor sau de platformă:

- Verificați că serverul de bază este versiunea Steam pre-anniversary (versiunea motorului ≤ 8684), instalată prin `steamcmd`, așa cum este descris în [Instalare](./installing.md). ReHLDS **nu** este compatibil cu versiunile vechi 5xxx și anterioare, instalate prin vechiul `hldsupdatetool`.
- Verificați că ați copiat binarul potrivit sistemului dumneavoastră: `swds.dll` pe Windows, `engine_i486.so` pe Linux. Amestecarea binarelor între platforme (sau o copiere incompletă) împiedică încărcarea.
- Pe Linux, verificați că fișierul înlocuit și-a păstrat permisiunile de citire și de execuție pentru contul care rulează serverul.

## Un plugin terț nu mai funcționează după instalarea ReHLDS

ReHLDS **nu este compatibil la nivel binar** cu HLDS-ul original — este compilat cu alte compilatoare decât binarele originale ale Valve. Pluginurile care modifică direct binarul sau care caută semnături în motor (Orpheu fiind un exemplu cunoscut) se pot defecta dacă nu susțin explicit ReHLDS. Consultați changelog-ul și sistemul de raportare ale pluginului, ca să vedeți dacă menționează compatibilitatea cu ReHLDS, înainte de a presupune că vina este a ReHLDS.

## Verificarea semnăturii GPG eșuează

1. Verificați că ați importat cheia publică corectă (amprenta `63547829004f07716f7be4856c32c4282e60fb67`) de pe un server de chei, cum este [keyserver.ubuntu.com](https://keyserver.ubuntu.com/pks/lookup?search=63547829004f07716f7be4856c32c4282e60fb67+&fingerprint=on&op=index).
2. Verificați că fișierul de semnătură `.asc` corespunde arhivei descărcate — ele sunt publicate împreună la fiecare versiune și nu sunt interschimbabile între versiuni.
3. Descărcați din nou ambele fișiere dacă vreunul a fost modificat de un proxy sau de o rețea CDN intermediară (unele proxy-uri corporative rescriu descărcările binare).

## Obținerea informațiilor despre blocaje

Dacă serverul se blochează în loc să se oprească normal:

- **Linux** — porniți serverul cu opțiunea `-debug`. Dacă `gdb` este instalat, ReHLDS scrie automat detaliile blocajului în `debug.log`, ceea ce de obicei este suficient pentru a identifica locul defecțiunii, fără un fișier core complet. Ca să păstrați și un fișier core, activați fișierele core pentru proces (`ulimit -c unlimited`) înainte de a porni serverul și luați în calcul `echo 1 > /proc/sys/kernel/core_uses_pid`, ca blocajele repetate să nu se suprascrie între ele.
- **Windows** — activați generarea unui minidump sau a unui dump complet la blocarea `hlds.exe`, prin Raportarea erorilor Windows (`Configurație computer → Șabloane administrative → Componente Windows → Raportare erori Windows` în Politica de grup sau prin cheile de registru echivalente), ori printr-un utilitar dedicat de captare a blocajelor.

:::warning

Fișierele de blocaj și `debug.log` pot conține informații sensibile despre server (inclusiv date legate de RCON). Nu le publicați în văzul tuturor — trimiteți-le direct pe un canal privat sau într-o arhivă criptată ori protejată cu parolă atunci când le împărtășiți dezvoltatorilor.

:::

## Cum raportați o problemă

Deschideți o sesizare în [sistemul de raportare ReHLDS](https://github.com/rehlds/ReHLDS/issues) și includeți:

- Versiunea ReHLDS (eticheta versiunii sau commit-ul) și platforma (Windows/Linux).
- Versiunea exactă a motorului HLDS peste care l-ați instalat.
- Modul pe care îl rulați (Half-Life, Counter-Strike 1.6, Condition Zero etc.) și versiunea lui.
- Versiunile Metamod, AMX Mod X și ReGameDLL_CS și lista pluginurilor, dacă este cazul.
- Pașii de reproducere a problemei și mesajele relevante din consolă, `debug.log` sau un fișier de blocaj.

Cu cât oferiți mai multe detalii de la bun început, cu atât mai repede poate cineva din echipă să reproducă și să rezolve problema.
