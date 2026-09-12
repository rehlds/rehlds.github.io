---
id: revoice-settings
title: Ustawienia
sidebar_position: 3
description: ReVoice - wtyczka Metamoda, transkoder głosu naprawiający rozmowy głosowe między klientami steamowymi i non-steam na serwerach ReHLDS.
slug: /revoice/settings
---

<head>
  <title>ReVoice: Ustawienia | ReHLDS</title>
</head>

# Ustawienia

ReVoice konfiguruje się przez `addons/revoice/revoice.cfg`, który jest wykonywany (`exec`) przy starcie jak zwykły plik konfiguracyjny serwera — to lista przypisań cvarów, a nie plik INI.

## Cvary

| Cvar | Domyślnie | Opis |
| --- | --- | --- |
| `REV_DefaultCodec` | `speex` | Kodek, na który ReVoice przekodowuje wychodzący głos zwykłych graczy. Przyjmuje `speex` albo `opus`. |
| `REV_HltvCodec` | `opus` | Kodek, na który ReVoice przekodowuje wychodzący głos HLTV. Przyjmuje `speex` albo `opus`. |
| `revoice_version` | *(bieżąca wersja)* | Tylko do odczytu; podaje wczytaną wersję ReVoice. |

Domyślna konfiguracja z wydania:

```text
REV_HltvCodec opus		// speex, opus
REV_DefaultCodec speex	// speex, opus
```

Zmiany cvarów działają natychmiast — ReVoice śledzi zmiany obu cvarów kodeka i stosuje je ponownie bez restartu.

:::note

`sv_voiceenable` to standardowy cvar silnika, a nie ustawienie ReVoice — musi mieć wartość `1`, żeby rozmowy głosowe w ogóle działały. ReVoice jedynie naprawia zgodność kodeków między klientami steamowymi i spoza Steama, gdy rozmowy głosowe są już włączone.

:::

## Polecenie konsoli

```text
rev version
rev status
```

- `rev version` — wypisuje wczytaną wersję ReVoice, datę kompilacji i commit.
- `rev status` — wypisuje szczegółowy stan w czasie działania (dodany specjalnie po to, by diagnozować problemy z głosem).
