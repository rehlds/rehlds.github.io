---
id: revoice-settings
title: Setări
sidebar_position: 3
description: ReVoice - plugin Metamod, transcodor de voce care repară discuția prin voce între clienții Steam și non-Steam pe serverele ReHLDS.
slug: /revoice/settings
---

<head>
  <title>ReVoice: Setări | ReHLDS</title>
</head>

# Setări

ReVoice se configurează prin `addons/revoice/revoice.cfg`, care este executat (`exec`) la pornire, ca orice fișier obișnuit de configurare a serverului — el este o listă de atribuiri de cvar-uri, nu un fișier INI.

## Cvar-uri

| Cvar | Implicit | Descriere |
| --- | --- | --- |
| `REV_DefaultCodec` | `speex` | Codecul în care ReVoice transcodează vocea trimisă de jucătorii obișnuiți. Acceptă `speex` sau `opus`. |
| `REV_HltvCodec` | `opus` | Codecul în care ReVoice transcodează vocea trimisă de HLTV. Acceptă `speex` sau `opus`. |
| `revoice_version` | *(versiunea curentă)* | Doar pentru citire; indică versiunea încărcată de ReVoice. |

Configurația implicită distribuită:

```text
REV_HltvCodec opus		// speex, opus
REV_DefaultCodec speex	// speex, opus
```

Modificările cvar-urilor au efect imediat — ReVoice urmărește schimbările celor două cvar-uri de codec și le aplică din nou fără repornire.

:::note

`sv_voiceenable` este un cvar standard al motorului, nu o setare a ReVoice — el trebuie să fie `1` pentru ca discuția prin voce să funcționeze. ReVoice doar repară compatibilitatea codecurilor între clienții Steam și non-Steam, după ce discuția prin voce este deja activată.

:::

## Comandă de consolă

```text
rev version
rev status
```

- `rev version` — afișează versiunea încărcată de ReVoice, data compilării și commit-ul.
- `rev status` — afișează starea amănunțită în timpul execuției (adăugată special pentru diagnosticarea problemelor de voce).
