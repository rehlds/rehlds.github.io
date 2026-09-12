---
id: hitboxtracker-settings
title: Setări
sidebar_position: 3
description: hitboxtracker - unealtă de dezvoltare abandonată din ReHLDS, care desena pe client pozițiile hitbox-urilor calculate de server.
slug: /hitboxtracker/settings
---

<head>
  <title>hitboxtracker: Setări | ReHLDS</title>
</head>

# Setări

:::warning Abandonat

Păstrat ca referință. hitboxtracker nu mai este întreținut — citiți [Ce este hitboxtracker?](./index.md).

:::

hitboxtracker nu adăuga niciun cvar propriu. El extindea cvar-ul standard `r_drawentities` de partea clientului cu două moduri suplimentare, așa că totul era condus din consola clientului.

## `r_drawentities`

| Valoare | Descriere |
| --- | --- |
| `0` | Nicio entitate. |
| `1` | Implicit — desenează entitățile în mod obișnuit. |
| `2` | Entitățile sunt desenate ca schelete. |
| `3` | Entitățile sunt desenate ca hitbox-uri. |
| `4` | Entitățile sunt desenate cu hitbox-uri translucide și cu modelul dedesubt. |
| `5` | Cutie separată pentru jucător și pentru armă. |
| `6` | Adăugat de hitboxtracker. La fel ca `4`, dar desenează în plus poziția reală a hitbox-urilor, așa cum este calculată de server. |
| `7` | Adăugat de hitboxtracker. La fel ca `6`, dar fără translucență. |

Valorile de la `0` la `5` aparțin motorului însuși și funcționează fără această unealtă. Doar `6` și `7` aveau nevoie ca amândouă jumătățile hitboxtracker să fie instalate.

:::note

Rostul modurilor `6` și `7` era tocmai *diferența*: comparați cutiile proprii ale clientului cu cele ale serverului, iar un decalaj vizibil între ele explica reclamațiile privind înregistrarea loviturilor, care altfel păreau simple închipuiri ale jucătorului.

:::
