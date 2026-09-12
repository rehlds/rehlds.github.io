---
id: rehlds-settings
title: Ustawienia
sidebar_position: 3
description: ReHLDS to przebudowana wersja oryginalnego HLDS, z wyższym poziomem bezpieczeństwa, lepszą wydajnością i szerszymi możliwościami modyfikacji gier takich jak Half-Life i Counter-Strike 1.6.
slug: /rehlds/settings
---

<head>
  <title>ReHLDS: Ustawienia | ReHLDS</title>
</head>

# Ustawienia

ReHLDS dokłada zestaw zmiennych konsoli serwera (cvarów) do tych standardowych z HLDS, głównie do strojenia ochrony antycheatowej i antynadużyciowej, ustawień sieci oraz poprawek zachowania. Ustaw je w `server.cfg` albo w dowolnym pliku konfiguracyjnym wykonywanym przy starcie.

## Cvary

| Cvar | Domyślnie | Opis |
| --- | --- | --- |
| `sv_auto_precache_sounds_in_models` | `0` | Automatycznie wczytuje z wyprzedzeniem dźwięki przypisane do modeli. |
| `sv_delayed_spray_upload` | `0` | Wysyła własne graffiti po wejściu do gry, a nie w trakcie łączenia. Zwiększa szybkość przesyłania. |
| `sv_echo_unknown_cmd` | `0` | Wypisuje w konsoli, gdy klient próbuje wykonać nieznane polecenie. |
| `sv_rcon_condebug` | `1` | Wypisuje w konsoli informacje diagnostyczne rcon. |
| `sv_force_ent_intersection` | `0` | Używany przez zewnętrzne wtyczki do wymuszenia kolizji obiektów `SOLID_SLIDEBOX`. |
| `sv_rehlds_force_dlmax` | `0` | Wymusza u klienta cvar `cl_dlmax` o wartości `1024`, co zapobiega nadmiernej fragmentacji pakietów. |
| `sv_rehlds_hull_centering` | `0` | Używa środka bryły kolizji zamiast narożnika. |
| `sv_rehlds_movecmdrate_max_avg` | `400` | Maksymalny średni poziom poleceń „move” dopuszczalny przed nałożeniem bana. |
| `sv_rehlds_movecmdrate_avg_punish` | `5` | Czas bana w minutach za przekroczenie `sv_rehlds_movecmdrate_max_avg` (`0` = na stałe, wartość ujemna = wyrzucenie). |
| `sv_rehlds_movecmdrate_max_burst` | `2500` | Maksymalny poziom serii poleceń „move” dopuszczalny przed nałożeniem bana. |
| `sv_rehlds_movecmdrate_burst_punish` | `5` | Czas bana w minutach za przekroczenie `sv_rehlds_movecmdrate_max_burst` (`0` = na stałe, wartość ujemna = wyrzucenie). |
| `sv_rehlds_send_mapcycle` | `0` | Wysyła `mapcycle.txt` w komunikacie z informacjami o serwerze (tak jak oryginalny HLDS; klient tego nie używa). |
| `sv_rehlds_stringcmdrate_max_avg` | `80` | Maksymalny średni poziom poleceń „string” dopuszczalny przed nałożeniem bana. |
| `sv_rehlds_stringcmdrate_avg_punish` | `5` | Czas bana w minutach za przekroczenie `sv_rehlds_stringcmdrate_max_avg` (`0` = na stałe, wartość ujemna = wyrzucenie). |
| `sv_rehlds_stringcmdrate_max_burst` | `400` | Maksymalny poziom serii poleceń „string” dopuszczalny przed nałożeniem bana. |
| `sv_rehlds_stringcmdrate_burst_punish` | `5` | Czas bana w minutach za przekroczenie `sv_rehlds_stringcmdrate_max_burst` (`0` = na stałe, wartość ujemna = wyrzucenie). |
| `sv_rehlds_userinfo_transmitted_fields` | `""` | Tylko wymienione tutaj klucze userinfo są przesyłane klientom przez sieć. Pusta wartość oznacza, że przesyłane są wszystkie pola (poza kluczami z przedrostkiem `_`). Każdy klucz poprzedź odwrotnym ukośnikiem, na przykład `\name\model\*sid\*hltv\bottomcolor\topcolor`. Pełny opis znajdziesz w [Userinfo keys](https://github.com/rehlds/ReHLDS/wiki/Userinfo-keys). |
| `sv_rehlds_attachedentities_playeranimationspeed_fix` | `0` | Naprawia błąd prędkości animacji chodu, który pojawia się, gdy gracz ma dołączone obiekty (aiments). Przy niskim `cl_updaterate` może powodować opóźnienia animacji. |
| `sv_rehlds_maxclients_from_single_ip` | `5` | Ogranicza liczbę jednoczesnych połączeń z tego samego adresu IP (nie dotyczy graczy już połączonych). |
| `sv_rehlds_local_gametime` | `0` | Zmniejsza odczuwalne „lagi”, gdy ta sama mapa działa przez długi czas. |
| `sv_rehlds_allow_large_sprays` | `1` | Zezwala na własne graffiti większe niż 64x64. |
| `sv_use_entity_file` | `0` | Steruje użyciem własnego pliku obiektów dla każdej mapy (`maps/[nazwa mapy].ent`). `0` = oryginalne obiekty, `1` = używa plików `.ent` z katalogu maps, `2` = używa plików `.ent` i tworzy je, jeśli ich nie ma. |
| `sv_usercmd_custom_random_seed` | `0` | Generuje dodatkowe ziarno losowe, niezależne od klienta. |
| `sv_net_incoming_decompression` | `1` | Rozpakowuje przychodzące skompresowane dane przy przesyłaniu plików. |
| `sv_net_incoming_decompression_max_ratio` | `80.0` | Maksymalny dopuszczalny stosunek danych skompresowanych do rozpakowanych przy przesyłaniu plików, od `0` do `100`. Wartość bliska 90 wskazuje na dużą ilość rozpakowanych danych o niskiej entropii. |
| `sv_net_incoming_decompression_max_size` | `65536` | Maksymalny dopuszczalny rozmiar rozpakowanych danych przesyłanego pliku w bajtach, od `16` do `65536`. |
| `sv_net_incoming_decompression_min_failures` | `4` | Minimalna liczba nieudanych prób rozpakowania, po której połączenie zostaje oznaczone do ewentualnej kary, od `0` do `10`. |
| `sv_net_incoming_decompression_max_failures` | `10` | Maksymalna liczba nieudanych prób rozpakowania dopuszczalna w oknie obserwacji, zanim zostanie podjęte działanie, od `0` do `10`. |
| `sv_net_incoming_decompression_min_failuretime` | `0.1` | Okno czasowe w sekundach, od `0.1` do `10.0`, w którym zliczane są nieudane próby rozpakowania. |
| `sv_net_incoming_decompression_punish` | `-1` | Czas bana w minutach za zniekształcone lub nietypowe fragmenty bzip2 (`0` = na stałe, wartość ujemna = wyrzucenie). |
| `sv_tags` | `""` | Rozdzielona przecinkami lista „gametagów” serwera, używana do filtrowania w wyszukiwarkach serwerów i w matchmakingu. |
| `sv_filterban` | `1` | Tryb filtrowania po adresach IP. `-1` = odrzuca wszystkich graczy bezwarunkowo, `0` = bez sprawdzania, `1` = wyrzuca graczy pasujących do filtru IP lub wpisu bana. |
| `sv_rehlds_movecmd_max_ticks` | `24` | Maksymalna liczba poleceń ruchu, które serwer przetwarza od jednego gracza w pojedynczej klatce (poleceń, nie pakietów). |
| `sv_rehlds_movecmd_max_null_streak` | `0` | Maksymalna dopuszczalna liczba kolejnych poleceń ruchu o zerowym czasie trwania (pustych poleceń). `0` wyłącza to sprawdzanie. |
| `sv_rehlds_movecmd_clamp_interp` | `1` | Blokuje polecenia ruchu z wartością `ex_interp` spoza dopuszczalnego zakresu. |
| `sv_rehlds_movecmdtime_samples` | `120` | Liczba klatek używanych do uśrednienia prędkości ruchu klienta. Wyższa wartość = większa dokładność, ale wolniejsze wykrywanie. |
| `sv_rehlds_movecmdtime_max_error` | `300` | O ile (w ms) wewnętrzny zegar gry klienta może odbiegać od zegara serwera, zanim prędkość zostanie oceniona. Kary są stosowane tylko wtedy, gdy naruszone są także `sv_rehlds_movecmdtime_max_scale` / `_min_scale`. |
| `sv_rehlds_movecmdtime_max_scale` | `3.0` | Maksymalny stosunek bazowej prędkości gry klienta. Klienci przyspieszający powyżej tej wartości dostają ostrzeżenia. |
| `sv_rehlds_movecmdtime_min_scale` | `0.5` | Minimalny stosunek bazowej prędkości gry klienta. Klienci zwalniający poniżej tej wartości dostają ostrzeżenia. |
| `sv_rehlds_movecmdtime_max_warnings` | `-1` | Maksymalna liczba ostrzeżeń o speedhacku lub spowolnieniu przed nałożeniem kary. `-1` wyłącza wykrywanie. |
| `sv_rehlds_movecmdtime_punish` | `-1` | Kara za speedhack lub sztuczne spowolnienie (`-1` = wyrzucenie, `0` = ban na stałe, wartość ujemna = wyrzucenie). |
| `sv_reconnect_timeout` | `30` | Sztywny termin w sekundach, w którym klient musi wznowić połączenie po zmianie mapy, niezależnie od aktywności kanału sieciowego. Zamyka exploita z widmowym slotem, w którym cheat blokuje polecenie `reconnect` i utrzymuje kanał sieciowy przy życiu, przez co `sv_timeout` nigdy się nie uruchamia. `0` wyłącza tę funkcję. |

:::note

`sv_rehlds_userinfo_transmitted_fields` to ustawienie najczęściej używane razem z konfiguracjami prywatności i antycheata. Na [stronie Userinfo keys w wiki](https://github.com/rehlds/ReHLDS/wiki/Userinfo-keys) znajdziesz typ wartości, domyślny tryb przesyłania i uwagi o prywatności dla każdego standardowego klucza.

:::

## Pliki

| Cvar | Domyślnie | Opis |
| --- | --- | --- |
| `listipcfgfile` | `listip.cfg` | Plik używany do trwałych banów po adresie IP. |
| `syserror_logfile` | `sys_error.log` | Plik używany jako log błędów systemowych. |

## Polecenia konsoli

| Polecenie | Opis |
| --- | --- |
| `rescount` | Wypisuje w konsoli serwera łączną liczbę wczytanych z wyprzedzeniem zasobów. |
| `reslist <sound \| model \| decal \| generic \| event>` | Wypisuje wczytane z wyprzedzeniem zasoby danego typu. Przydatne przy zarządzaniu zasobami i limitami wczytywania w GoldSrc. |
| `rcon_adduser <ipaddress/CIDR>` | Dodaje adres IP lub zakres CIDR do listy użytkowników RCON, dając mu uprzywilejowany dostęp do konsoli. Bez żadnego użytkownika RCON każdy, kto zna hasło, może korzystać z RCON. |
| `rcon_deluser <ipaddress> {removeAll}` | Usuwa adres IP lub zakres CIDR z listy użytkowników RCON. |
| `rcon_users` | Wypisuje wszystkie adresy IP i zakresy CIDR z listy użytkowników RCON. |
