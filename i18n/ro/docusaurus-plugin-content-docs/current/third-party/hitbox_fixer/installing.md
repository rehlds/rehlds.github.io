---
id: hitbox-fixer-install
title: Instalare
sidebar_position: 2
description: Hitbox Fixer - plugin Metamod terț care corectează hitbox-urile greșite ale jucătorilor de partea serverului, în Counter-Strike 1.6, Half-Life și Adrenaline Gamer.
slug: /hitbox-fixer/install
---

<head>
  <title>Hitbox Fixer: Instalare | ReHLDS</title>
</head>

# Instalare

Hitbox Fixer este un plugin Metamod. El are nevoie de [ReHLDS](/ro/docs/rehlds/install) `3.10`+ (sau de HLDS original, versiunea `8648`) și de Metamod, deja instalate și funcționale.

## 1. Obțineți Hitbox Fixer

Descărcați `hitbox_fix-bin-*.zip` din [pagina de versiuni](https://github.com/Garey27/hitbox_fixer/releases) sau [compilați-l din sursă](./compilling.md).

## 2. Dezarhivați în directorul modului dumneavoastră

Arhiva este deja pregătită pentru un server. Copiați folderul `addons/` din ea în `<mod>/addons/`:

| Calea din arhivă | Rol |
| --- | --- |
| `addons/hitboxfixer/hitbox_fix_mm.dll` | Binarul pluginului pentru Windows. |
| `addons/hitboxfixer/hitbox_fix_mm_i386.so` | Binarul pluginului pentru Linux. |
| `addons/hitboxfixer/hbf.cfg` | Fișierul de configurare, citit la pornire. |

Păstrați doar binarul potrivit platformei serverului dumneavoastră.

:::note

Arhiva mai conține și `vis/hitbox_vis.asi`, un modul de vizualizare de partea clientului, pentru inspectarea hitbox-urilor în joc. El nu face parte din instalarea de pe server și nu este necesar pentru ca reparația să funcționeze — lăsați-l deoparte, dacă nu depanați hitbox-uri pe un client.

:::

## 3. Înregistrați pluginul în Metamod

Adăugați un rând în `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\hitboxfixer\hitbox_fix_mm.dll
linux addons/hitboxfixer/hitbox_fix_mm_i386.so
```

## 4. Verificați

Porniți serverul și rulați `meta list` în consolă — pluginul ar trebui să apară în listă ca încărcat. Dacă nu apare, verificați că motorul este ReHLDS `3.10`+ sau HLDS `8648`; celelalte versiuni nu sunt compatibile.

Vedeți [Setări](./settings.md) pentru `hbf_enabled`.
