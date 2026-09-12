---
id: regamedll-cs-bots
title: Utilizarea boților
sidebar_position: 5
description: Instalați, activați, configurați și depanați sistemul zBot încorporat în ReGameDLL_CS.
slug: /regamedll-cs/bots
---

# Utilizarea boților

ReGameDLL_CS include codul zBot folosit în Counter-Strike: Condition Zero. Serverele dedicate trebuie să îl activeze explicit, iar serverele de CS 1.6 au nevoie și de profilurile și resursele boților, distribuite separat.

:::warning Opțiune veche de linie de comandă

Nu folosiți vechea opțiune `-bots` din linia de comandă a HLDS. Ea a fost eliminată din proiect în favoarea CVar-ului `bot_enable`.

:::

## Activarea boților pe CS 1.6

1. Instalați o versiune actuală de ReGameDLL_CS.
2. Descărcați fișierul oficial [`bot_profiles.zip`](https://github.com/rehlds/ReGameDLL_CS/raw/refs/heads/master/regamedll/extra/zBot/bot_profiles.zip).
3. Dezarhivați-l în rădăcina serverului, astfel încât fișierele din `cstrike` să se îmbine cu cele din `<server>/cstrike`.
4. Creați sau editați `<server>/cstrike/game_init.cfg` și puneți:

```text
bot_enable "1"
```

5. Reporniți complet serverul.

Arhiva obișnuită `regamedll-bin-*.zip` nu include pachetul cu profilurile boților pentru CS 1.6, așa că instalarea doar a GameDLL-ului nu este suficientă.

## Activarea boților pe Condition Zero

Condition Zero vine deja cu profilurile și resursele obișnuite zBot. Pe un server dedicat, editați `<server>/czero/game_init.cfg` și puneți:

```text
bot_enable "1"
```

Apoi reporniți complet serverul. Serverele locale activează zBot indiferent de acest CVar.

## Adăugarea și eliminarea boților

Rulați aceste comenzi în consola serverului sau prin RCON:

| Comandă | Rezultat |
| --- | --- |
| `bot_add` | Adaugă un bot ales la întâmplare, folosind `bot_join_team` ca preferință de echipă. |
| `bot_add <profil>` | Adaugă profilul indicat din `BotProfile.db`. |
| `bot_add_t [profil]` | Adaugă un bot terorist ales la întâmplare sau după nume. |
| `bot_add_ct [profil]` | Adaugă un bot antiterorist ales la întâmplare sau după nume. |
| `bot_kill` sau `bot_kill all` | Ucide toți boții în viață, fără să îi elimine. |
| `bot_kill <nume>` | Ucide un bot. Puneți între ghilimele numele care conțin spații. |
| `bot_kick` sau `bot_kick all` | Elimină toți boții și readuce cota la zero, ca ei să nu fie adăugați imediat la loc. |
| `bot_kick <nume>` | Elimină un bot și scade cota. |
| `bot_about` | Afișează informații despre implementarea boților. |

Adăugarea manuală a unui bot crește `bot_quota`; eliminarea manuală a unuia o scade.

## Configurarea numărului de boți

`bot_quota_mode` stabilește cum este interpretat `bot_quota`.

### Menținerea a exact șase boți

```text
bot_quota_mode "normal"
bot_quota "6"
bot_join_after_player "0"
```

### Menținerea a zece jucători activi în total

În modul `fill`, suma dintre oameni și boți este menținută aproape de cotă:

```text
bot_quota_mode "fill"
bot_quota "10"
```

### Menținerea a doi boți pentru fiecare om

În modul `match`, cota este un raport între oameni și boți:

```text
bot_quota_mode "match"
bot_quota "2"
```

Setări utile pentru cotă:

| CVar | Valori | Semnificație |
| --- | --- | --- |
| `bot_join_after_player` | `0`, `1`, `2` | `0`: boții pot intra pe un server gol. `1`: așteaptă un om la teroriști sau antiteroriști. `2`: așteaptă orice om conectat, inclusiv spectatorii. |
| `bot_join_delay` | secunde | Întârzie intrarea boților după o schimbare de hartă. |
| `bot_auto_vacate` | `0` sau `1` | Când este activat, păstrează un loc liber pentru un jucător uman. |
| `bot_join_team` | `any`, `T`, `CT` | Echipa preferată a boților adăugați automat. |

## Dificultate, replici și obiective

```text
bot_difficulty "2"
bot_chatter "minimal"
bot_defer_to_human "0"
```

- `bot_difficulty`: `0` ușor, `1` normal, `2` greu, `3` expert.
- `bot_chatter`: de obicei `off`, `radio`, `minimal` sau `normal`.
- `bot_defer_to_human 0`: boții pot îndeplini obiectivele scenariului.
- `bot_deathmatch 1`: boții au un comportament de deathmatch și nu îndeplinesc scenariul obișnuit.
- `bot_freeze 1`: îi împiedică pe boți să se miște, ceea ce este util la testare.

Există și seturi predefinite de armament:

```text
bot_knives_only
bot_pistols_only
bot_snipers_only
bot_all_weapons
```

## Navigarea pe hărți personalizate

Boții au nevoie de un fișier de navigare la `<mod>/maps/<hartă>.nav`. Dacă o hartă personalizată nu vine cu unul, rulați:

```text
bot_nav_analyze
```

Analiza navigării poate dura și creează un fișier `.nav` nou. Versiunile actuale de ReGameDLL_CS reîncarcă datele de navigare generate după analiză, fără să fie nevoie de o repornire separată a hărții.

Faceți copii de siguranță ale fișierelor `.nav` editate manual înainte de a relua analiza. Celelalte comenzi `bot_nav_*` sunt unelte avansate de editare și ar trebui folosite pe un server de test.

## Exemplu de configurație pentru boți

După activarea boților în `game_init.cfg`, puneți comportamentul lor obișnuit în `game.cfg` sau într-un fișier separat, executat de configurația serverului dumneavoastră:

```text
bot_quota_mode "fill"
bot_quota "12"
bot_join_after_player "2"
bot_join_delay "5"
bot_auto_vacate "1"
bot_difficulty "2"
bot_chatter "minimal"
bot_defer_to_human "0"
```

Vedeți [Depanare](../troubbleshouting/) dacă nu sunt recunoscute comenzile `bot_*` sau dacă boții nu intră în joc.
