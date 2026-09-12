---
id: relocalizebugfix-install
title: Instalare
sidebar_position: 2
description: ReLocalizeBug Fix - plugin Metamod abandonat, care bloca exploit-urile cu șiruri de localizare din numele jucătorilor și din discuții, pe serverele ReHLDS.
slug: /relocalizebugfix/install
---

<head>
  <title>ReLocalizeBug Fix: Instalare | ReHLDS</title>
</head>

# Instalare

:::warning Abandonat

Aceste instrucțiuni sunt păstrate doar ca referință. Pluginul este **incompatibil cu versiunile moderne de ReHLDS** — citiți [Ce este ReLocalizeBug Fix?](./index.md) și folosiți în schimb [SafeNameAndChat](/ro/docs/safenameandchat/install).

:::

ReLocalizeBug Fix era un plugin Metamod, instalat la fel ca oricare altul.

## 1. Obțineți ReLocalizeBug Fix

Ultima versiune este [`v2.8`](https://github.com/rehlds/relocalizebugfix/releases) (`relocalizebugfix-v2.8.zip`). Depozitul conține și binare precompilate, în `bin/`.

## 2. Puneți pluginul la locul lui

Copiați binarul potrivit platformei dumneavoastră în `<mod>/addons/relocalizebugfix/`:

| Platformă | Fișier |
| --- | --- |
| Windows | `relocalizebugfix_mm.dll` |
| Linux | `relocalizebugfix_mm_i386.so` |

## 3. Înregistrați pluginul în Metamod

Adăugați aceste rânduri în fișierul dumneavoastră `<mod>/addons/metamod/plugins.ini`:

```ini
win32 addons\relocalizebugfix\relocalizebugfix_mm.dll
linux addons/relocalizebugfix/relocalizebugfix_mm_i386.so
```

:::note

Pluginul se declara ca putând fi încărcat doar la pornire (`PT_STARTUP`) și niciodată descărcat (`PT_NEVER`), așa că `meta load` și `meta unload` nu funcționau cu el — trebuia să fie prezent când pornea serverul, iar îndepărtarea lui cerea o repornire.

:::

## 4. Verificați

Porniți serverul și rulați `meta list` — pluginul se înregistra sub numele `ReLocalizeBug Fix`. Pe o versiune modernă de ReHLDS, așteptați-vă mai degrabă să se poarte ciudat decât să funcționeze; aceasta este incompatibilitatea descrisă în [pagina de prezentare](./index.md), nu o greșeală de instalare.
