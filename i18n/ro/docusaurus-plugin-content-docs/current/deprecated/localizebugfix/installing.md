---
id: localizebugfix-install
title: Instalare
sidebar_position: 2
description: LocalizeBug Fix - plugin Metamod arhivat, creat de s1lentq, care bloca exploit-urile cu șiruri de localizare din numele jucătorilor și din discuții, pe HLDS.
slug: /localizebugfix/install
---

<head>
  <title>LocalizeBug Fix: Instalare | ReHLDS</title>
</head>

# Instalare

:::warning Abandonat

Aceste instrucțiuni sunt păstrate ca referință. Proiectul este arhivat — citiți [Ce este LocalizeBug Fix?](./index.md) și preferați [SafeNameAndChat](/ro/docs/safenameandchat/install) pe un server actual.

:::

LocalizeBug Fix era un plugin Metamod, instalat la fel ca oricare altul.

## 1. Obțineți LocalizeBug Fix

Ultima versiune este [`2.4`](https://github.com/s1lentq/localizebugfix/releases), din septembrie 2015 (`localizebugfix_2_4.7z`). Depozitul mai conține și binare precompilate pentru versiunile `2.0`, `2.3` și `2.4`, în `bin/`.

## 2. Puneți pluginul la locul lui

Copiați binarul potrivit platformei dumneavoastră într-un folder din `addons`:

| Platformă | Fișier |
| --- | --- |
| Windows | `localizebugfix.dll` |
| Linux | `localizebugfix_mm_i386.so` |

## 3. Înregistrați pluginul în Metamod

Adăugați rândul corespunzător în `<mod>/addons/metamod/plugins.ini`.

:::note

Pluginul se declara ca putând fi încărcat doar la pornire (`PT_STARTUP`) și niciodată descărcat (`PT_NEVER`), așa că `meta load` și `meta unload` nu funcționau cu el — trebuia să fie prezent când pornea serverul, iar îndepărtarea lui cerea o repornire.

:::

## 4. Verificați

Porniți serverul și rulați `meta list` — pluginul se înregistra sub numele `LocalizeBug Fix`.
