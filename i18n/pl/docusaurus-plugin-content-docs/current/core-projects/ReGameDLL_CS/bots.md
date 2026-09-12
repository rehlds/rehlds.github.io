---
id: regamedll-cs-bots
title: Korzystanie z botów
sidebar_position: 5
description: Zainstaluj, włącz, skonfiguruj i napraw wbudowany w ReGameDLL_CS system zBot.
slug: /regamedll-cs/bots
---

# Korzystanie z botów

ReGameDLL_CS zawiera kod zBot używany w Counter-Strike: Condition Zero. Serwery dedykowane muszą go włączyć osobno, a serwery CS 1.6 potrzebują dodatkowo profili i zasobów botów, rozprowadzanych oddzielnie.

:::warning Stara opcja wiersza poleceń

Nie używaj starej opcji `-bots` w wierszu poleceń HLDS. Została usunięta z projektu na rzecz CVara `bot_enable`.

:::

## Włączanie botów w CS 1.6

1. Zainstaluj aktualne wydanie ReGameDLL_CS.
2. Pobierz oficjalny plik [`bot_profiles.zip`](https://github.com/rehlds/ReGameDLL_CS/raw/refs/heads/master/regamedll/extra/zBot/bot_profiles.zip).
3. Rozpakuj archiwum do katalogu głównego serwera, tak żeby pliki z `cstrike` scaliły się z tymi w `<serwer>/cstrike`.
4. Utwórz albo otwórz `<serwer>/cstrike/game_init.cfg` i ustaw:

```text
bot_enable "1"
```

5. Zrestartuj cały serwer.

Zwykłe archiwum wydania `regamedll-bin-*.zip` nie zawiera pakietu profili botów dla CS 1.6, więc sama instalacja biblioteki GameDLL nie wystarczy.

## Włączanie botów w Condition Zero

Condition Zero ma już standardowe profile i zasoby zBot. Na serwerze dedykowanym otwórz `<serwer>/czero/game_init.cfg` i ustaw:

```text
bot_enable "1"
```

Następnie zrestartuj cały serwer. Serwery lokalne włączają zBot niezależnie od tego CVara.

## Dodawanie i usuwanie botów

Wykonuj te polecenia w konsoli serwera albo przez RCON:

| Polecenie | Efekt |
| --- | --- |
| `bot_add` | Dodaje losowego bota, kierując się `bot_join_team` przy wyborze drużyny. |
| `bot_add <profil>` | Dodaje wskazany profil z `BotProfile.db`. |
| `bot_add_t [profil]` | Dodaje losowego albo wskazanego bota-terrorystę. |
| `bot_add_ct [profil]` | Dodaje losowego albo wskazanego bota-antyterrorystę. |
| `bot_kill` albo `bot_kill all` | Zabija wszystkie żyjące boty, nie usuwając ich. |
| `bot_kill <nazwa>` | Zabija jednego bota. Nazwy ze spacjami ujmij w cudzysłów. |
| `bot_kick` albo `bot_kick all` | Usuwa wszystkie boty i zeruje limit, żeby nie zostały od razu dodane z powrotem. |
| `bot_kick <nazwa>` | Usuwa jednego bota i obniża limit. |
| `bot_about` | Wypisuje informacje o implementacji botów. |

Ręczne dodanie bota podnosi `bot_quota`; ręczne wyrzucenie go obniża.

## Ustawianie liczby botów

`bot_quota_mode` decyduje o tym, jak rozumiany jest `bot_quota`.

### Utrzymanie dokładnie sześciu botów

```text
bot_quota_mode "normal"
bot_quota "6"
bot_join_after_player "0"
```

### Utrzymanie dziesięciu aktywnych graczy łącznie

W trybie `fill` suma ludzi i botów jest utrzymywana blisko limitu:

```text
bot_quota_mode "fill"
bot_quota "10"
```

### Utrzymanie dwóch botów na każdego człowieka

W trybie `match` limit jest stosunkiem ludzi do botów:

```text
bot_quota_mode "match"
bot_quota "2"
```

Przydatne ustawienia limitu:

| CVar | Wartości | Znaczenie |
| --- | --- | --- |
| `bot_join_after_player` | `0`, `1`, `2` | `0`: boty mogą wejść na pusty serwer. `1`: czekają na człowieka po stronie terrorystów albo antyterrorystów. `2`: czekają na dowolnego połączonego człowieka, w tym obserwatora. |
| `bot_join_delay` | sekundy | Opóźnia wejście botów po zmianie mapy. |
| `bot_auto_vacate` | `0` albo `1` | Gdy włączone, zachowuje wolne miejsce dla gracza-człowieka. |
| `bot_join_team` | `any`, `T`, `CT` | Preferowana drużyna botów dodawanych automatycznie. |

## Poziom trudności, komentarze i cele

```text
bot_difficulty "2"
bot_chatter "minimal"
bot_defer_to_human "0"
```

- `bot_difficulty`: `0` łatwy, `1` normalny, `2` trudny, `3` ekspert.
- `bot_chatter`: zwykle `off`, `radio`, `minimal` albo `normal`.
- `bot_defer_to_human 0`: boty mogą realizować cele scenariusza.
- `bot_deathmatch 1`: boty zachowują się jak w deathmatchu i nie realizują zwykłego scenariusza.
- `bot_freeze 1`: unieruchamia boty, co przydaje się przy testach.

Dostępne są też gotowe zestawy uzbrojenia:

```text
bot_knives_only
bot_pistols_only
bot_snipers_only
bot_all_weapons
```

## Nawigacja na własnych mapach

Boty potrzebują pliku nawigacji w `<mod>/maps/<mapa>.nav`. Jeśli własna mapa go nie zawiera, wykonaj:

```text
bot_nav_analyze
```

Analiza nawigacji może potrwać i tworzy nowy plik `.nav`. Obecne wersje ReGameDLL_CS wczytują wygenerowane dane nawigacji po zakończeniu analizy, bez osobnego restartu mapy.

Zrób kopię zapasową ręcznie edytowanych plików `.nav`, zanim powtórzysz analizę. Pozostałe polecenia `bot_nav_*` to zaawansowane narzędzia edycji i lepiej używać ich na serwerze testowym.

## Przykładowa konfiguracja botów

Po włączeniu botów w `game_init.cfg` codzienne ustawienia ich zachowania umieść w `game.cfg` albo w osobnym pliku wykonywanym przez konfigurację twojego serwera:

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

Jeśli polecenia `bot_*` nie są rozpoznawane albo boty nie wchodzą do gry, zajrzyj do [Rozwiązywania problemów](../troubbleshouting/).
