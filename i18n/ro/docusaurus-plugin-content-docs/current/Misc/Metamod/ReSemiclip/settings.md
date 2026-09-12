---
id: resemiclip-settings
title: Setări
sidebar_position: 3
description: ReSemiclip - plugin Metamod care stabilește dacă jucătorii pot trece unii prin alții. Modulul Semiclip al lui `joaquimandrade` a fost folosit ca referință.
slug: /resemiclip/settings
---

<head>
  <title>ReSemiclip: Setări | ReHLDS</title>
</head>

# Setări

## `config.ini`

Fișierul `addons/resemiclip/config.ini` conține setările implicite ale întregului server, sub formă de rânduri `cheie = valoare;`:

| Cheie | Interval | Implicit (distribuit) | Descriere |
| --- | --- | --- | --- |
| `semiclip` | `0`–`1` | `1` | Dezactivează sau activează semiclip. |
| `team` | `0`–`3` | `3` | Cui i se aplică: `0` tuturor, `1` doar teroriștilor, `2` doar antiteroriștilor, `3` doar coechipierilor. |
| `time` | `0`–`180` | `0` | Numărul de secunde de la începutul rundei în care semiclip este activ. `0` înseamnă că este activ permanent, nu doar pe un interval. |
| `crouch` | `0`–`1` | `1` | Le permite jucătorilor să sară pe un jucător ghemuit. |
| `effects` | `0`–`1` | `0` | Stabilește dacă transparența jucătorului variază în funcție de distanța dintre jucători. |
| `distance` | `64`–`250` | `200` | Distanța (în unități) de la care se aplică efectele de transparență și de semiclip. |
| `transparency` | `0`–`255` | `120` | Nivelul de transparență al jucătorului cât timp se află în semiclip. |
| `penetfire` | `0`–`1` | `0` | Permite gloanțelor să treacă prin coechipierii aflați în semiclip. |

Valorile din afara intervalului sunt aduse la limita validă cea mai apropiată, nu respinse.

## Setări pentru o anumită hartă sau pentru un prefix

ReSemiclip încarcă configurația în această ordine, fiecare etapă suprascriind doar cheile pe care le definește:

1. `addons/resemiclip/config.ini` — setările implicite ale întregului server.
2. `addons/resemiclip/maps/prefix_<prefix>.ini` — unde `<prefix>` este tot ce se află înaintea primei liniuțe de subliniere din numele hărții curente (de exemplu `de` pentru `de_dust2`).
3. `addons/resemiclip/maps/<numeleharții>.ini` — numele exact al hărții curente (de exemplu `de_dust2.ini`).

:::note

Fișierele-exemplu distribuite în `maps/` (`_de_dust2.ini`, `_prefix_de.ini`) au intenționat o liniuță de subliniere la început — acesta nu este un nume de fișier pe care ReSemiclip să îl caute cu adevărat. Sunt șabloane inerte; redenumiți-le cu numele exact așteptat (`de_dust2.ini`, `prefix_de.ini`) ca să le activați.

:::

## Comandă de consolă în timp real

```text
semiclip_option <cheie> <valoare>
```

Schimbă o setare în timpul execuției, folosind aceleași chei ca în `config.ini` (de exemplu, `semiclip_option time 5`). Rulați `semiclip_option` fără argumente (sau cu o cheie nevalidă) ca să afișați în schimb setările active în acel moment.
