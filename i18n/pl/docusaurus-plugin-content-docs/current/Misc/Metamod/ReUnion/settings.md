---
id: reunion-settings
title: Ustawienia
sidebar_position: 3
description: ReUnion - wtyczka Metamoda pozwalająca klientom non-steam z protokołami 47 i 48 łączyć się z serwerami ReHLDS.
slug: /reunion/settings
---

<head>
  <title>ReUnion: Ustawienia | ReHLDS</title>
</head>

# Ustawienia

ReUnion konfiguruje się w całości przez `reunion.cfg`. Domyślny plik jest obszernie skomentowany — ta strona streszcza każdą jego sekcję.

:::warning

Sam plik zaczyna się od słów „nie zmieniaj niczego, jeśli nie wiesz, co to znaczy”, i nie bez powodu — większość wartości domyślnych jest już dobrana. Zmieniaj je świadomie, po jednej naraz.

:::

## Rodzaje identyfikatorów klientów (`cid_*`)

Każda opcja `cid_*` przypisuje rodzaj identyfikatora danej kategorii klientów. Dostępne kody rodzajów to:

| Kod | Znaczenie |
| --- | --- |
| `1` | Prawdziwy (albo wygenerowany na podstawie sprzętu) Steam ID (`STEAM_xx:xx:xx`). |
| `2` | Prawdziwy (albo wygenerowany na podstawie sprzętu) Valve ID (`VALVE_xx:xx:xx`). |
| `3` | Identyfikator `STEAM_` wygenerowany na podstawie adresu IP klienta. |
| `4` | Identyfikator `VALVE_` wygenerowany na podstawie adresu IP klienta. |
| `5` | Przestarzałe — klient zostaje odrzucony. |
| `6` | Zarezerwowane na przyszłość. |
| `7` | HLTV. |
| `8` | `STEAM_ID_LAN`. |
| `9` | `STEAM_ID_PENDING`. |
| `10` | `VALVE_ID_LAN`. |
| `11` | `VALVE_ID_PENDING`. |
| `12` | `STEAM_666:88:666`. |

| Opcja | Domyślnie | Dotyczy |
| --- | --- | --- |
| `cid_Steam` | `1` | Prawdziwych klientów Steama. |
| `cid_SteamPending` | `5` | Klientów, którzy autoryzowali się poprawnie, ale nie dostali użytecznego Steam ID. |
| `cid_HLTV` | `5` | Przekaźników HLTV. |
| `cid_NoSteam47` | `5` | Klientów protokołu 47 bez obsługi generowania unikatowego identyfikatora. |
| `cid_NoSteam48` | `5` | Klientów protokołu 48 bez obsługi generowania unikatowego identyfikatora. |
| `cid_RevEmu` | `1` | revEmu ≥ 9.74. |
| `cid_RevEmu2013` | `1` | RevEmu 2013. |
| `cid_SC2009` | `1` | SteamClient 2009 / revEmu > 9.82. |
| `cid_OldRevEmu` | `1` | Starszych wersji revEmu. |
| `cid_SteamEmu` | `1` | SteamEmu autorstwa hCupy. |
| `cid_AVSMP` | `1` | AVSMP (pirackiego Steama). |
| `cid_Setti` | `3` | Skanera serwerów SETTI. |
| `cid_SXEI` | `1` | Klientów sXeI. |

`HLTVExcept_IP` (domyślnie `127.0.0.1`) pozwala wejść HLTV z określonego adresu IP nawet wtedy, gdy `cid_HLTV` odrzuca klientów HLTV.

## Ustawienia uwierzytelniania

| Opcja | Domyślnie | Opis |
| --- | --- | --- |
| `AuthVersion` | `4` | Wersja protokołu autoryzacji: `1` DProto (przestarzała), `2` Reunion 2015–2018, `3` Reunion 2018–2024, `4` bieżąca (zalecana). |
| `SteamIdHashSalt` | *(puste)* | Sól używana przy skrócie generowanych identyfikatorów Steam, która zmienia je nieodwracalnie i zapobiega kradzieży identyfikatorów. Zalecana długość to 32 znaki lub więcej, minimum 16. Przy `AuthVersion >= 3` pusta wartość sprawia, że ReUnion **nie wystartuje** — żeby wyłączyć skróty (co nie jest zalecane), wpisz wprost `0`, zamiast zostawiać pole puste. |
| `SC2009_RevCompatMode` | `1` | Sprawia, że identyfikatory generowane przez SC2009 są zgodne z tymi z revEmu. Nie można tego wyłączyć przy `AuthVersion >= 3`. |
| `EnableSXEIdGeneration` | `0` | Włącza generowanie identyfikatorów na podstawie danych klienta sXeI. Włączaj tylko wtedy, gdy faktycznie prowadzisz konfigurację zgodną z sXeI. |
| `EnableGenPrefix2` | `0` | Dodaje drugi przedrostek identyfikatora, żeby zmniejszyć ryzyko kolizji generowanych identyfikatorów. Działa tylko z ustawioną `SteamIdHashSalt`; nie można tego wyłączyć przy `AuthVersion >= 3`. |

### Dawne przedrostki authid

Opcje `IPGen_Prefix1/2`, `Native_Prefix1`, `RevEmu*_Prefix1`, `SC2009_Prefix1`, `OldRevEmu_Prefix1`, `SteamEmu_Prefix1`, `AVSMP_Prefix1`, `Setti_Prefix1` i `SXEI_Prefix1` obowiązują tylko wtedy, gdy `AuthVersion` wynosi `1` albo `2`. Przy zalecanej `AuthVersion = 4` cała ta sekcja jest pomijana — zostaw ją na wartościach domyślnych.

Niezależnie od wersji `banid` zawsze używa SteamID **bez** żadnego przedrostka.

## Zapytania do serwera

| Opcja | Domyślnie | Opis |
| --- | --- | --- |
| `ServerInfoAnswerType` | `0` | `0` odpowiedzi w nowym formacie (Steam) (zalecane), `1` odpowiedzi w starym formacie GoldSrc, `2` tryb mieszany — widoczny dla obu, ale odpowiada na każde zapytanie 3 razy. |
| `FixBuggedQuery` | `1` | Naprawia klientów z wadliwą wyszukiwarką serwerów, którzy inaczej zawiesiliby się przy łączeniu. |
| `EnableQueryLimiter` | `1` | Ogranicza tempo zapytań do serwera (TSource, lista graczy itd.). Ustaw `0`, jeśli ograniczasz je już z zewnątrz. |
| `QueryFloodBanLevel` | `400` | Liczba zapytań na sekundę, która uruchamia bana na adres IP. Zakres `320`–`2048`; normalny ruch rzadko przekracza ok. 80/s. |
| `QueryFloodBanTime` | `10` | Czas bana w minutach za zalewanie zapytaniami, od `0` do `60`. `0` blokuje bez nakładania bana. |
| `QueryLimiterExceptIP` | *(sekcja, pusta)* | Lista adresów IP (po jednym w wierszu, pod `[QueryLimiterExceptIP]`) wyłączonych spod ograniczania zapytań. |
| `AllowSplitPackets` | `0` | Pozwala dzielić wychodzące pakiety większe niż 1400 bajtów, tak jak robi to oryginalny klient Steama. Niektóre narzędzia monitorujące tego nie obsługują. |
| `IDClientsLimit` | `1` | Maksymalna liczba jednoczesnych klientów z tym samym Steam ID, od `0` do `32`. `0` znosi to ograniczenie. Przydatne przy debugowaniu z wieloma instancjami klienta. |

## Logowanie

| Opcja | Domyślnie | Opis |
| --- | --- | --- |
| `LoggingMode` | `0` | `0` brak, `1` konsola, `2` pliki logów, `3` jedno i drugie. |

## Najczęstsze pytania

- **Ustawiłem `SteamIdHashSalt` tak jak w DProto, a gracze dostają inne SteamID.** ReUnion używa innego, bezpieczniejszego algorytmu skrótu. Znajomość SteamID gracza sprzed włączenia `SteamIdHashSalt` nie pomoże go później odtworzyć.
- **Czy da się coś zrobić z podmieniaczami SteamID?** Nie — programy podmieniające identyfikator generują prawidłowe bilety autoryzacyjne, więc serwer nie ma jak stwierdzić, że identyfikator został podmieniony. Ustawienie `SteamIdHashSalt` przynajmniej uniemożliwia celowe podszycie się pod identyfikator *konkretnego innego gracza*.
- **Niektóre narzędzia monitorujące serwery nie potrafią pobrać listy graczy.** Prawdopodobnie używają przestarzałego formatu zapytań; sięgnij po aktualną bibliotekę zapytań, na przykład [PHP-Source-Query](https://github.com/xPaw/PHP-Source-Query) albo jej odpowiednik.
- **DProto miał opcję `Game_Name`; ReUnion jej nie ma.** Zmieniaj zgłaszaną nazwę gry z poziomu wtyczki.
