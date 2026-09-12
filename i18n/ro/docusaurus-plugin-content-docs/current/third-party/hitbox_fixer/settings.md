---
id: hitbox-fixer-settings
title: Setări
sidebar_position: 3
description: Hitbox Fixer - plugin Metamod terț care corectează hitbox-urile greșite ale jucătorilor de partea serverului, în Counter-Strike 1.6, Half-Life și Adrenaline Gamer.
slug: /hitbox-fixer/settings
---

<head>
  <title>Hitbox Fixer: Setări | ReHLDS</title>
</head>

# Setări

Hitbox Fixer se configurează prin `addons/hitboxfixer/hbf.cfg`, aflat lângă binarul pluginului. El conține un singur cvar.

## Cvar

| Cvar | Implicit | Descriere |
| --- | --- | --- |
| `hbf_enabled` | `1` | Activează corectarea hitbox-urilor. Puneți `0` ca să opriți pluginul fără să îl descărcați din Metamod. |

Configurația implicită distribuită are un singur rând:

```text
hbf_enabled "1"
```

:::note

Dezactivarea `hbf_enabled` readuce comportamentul original (defectuos) al hitbox-urilor din motor. Acest comutator există mai ales ca să puteți compara diferența pe un server activ, atunci când cercetați reclamații privind înregistrarea loviturilor — nu există niciun motiv să îl lăsați pe `0` în funcționarea obișnuită.

:::
