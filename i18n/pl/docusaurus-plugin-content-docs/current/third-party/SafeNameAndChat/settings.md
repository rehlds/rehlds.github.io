---
id: safenameandchat-settings
title: Ustawienia
sidebar_position: 3
description: SafeNameAndChat - zewnętrzna wtyczka Metamoda unieszkodliwiająca exploity z ciągami lokalizacyjnymi i wstrzykiwaniem poleceń w nazwach graczy i wiadomościach czatu.
slug: /safenameandchat/settings
---

<head>
  <title>SafeNameAndChat: Ustawienia | ReHLDS</title>
</head>

# Ustawienia

SafeNameAndChat konfiguruje się przez `SafeNameAndChat.cfg`, który wtyczka wykonuje (`exec`) przy starcie z własnego katalogu. To zwykła lista przypisań cvarów, a wszystkie zabezpieczenia są domyślnie włączone.

## Cvary czatu

| Cvar | Domyślnie | Opis |
| --- | --- | --- |
| `SNAC_Chat_ReplaceNumberSign` | `1` | Zamienia `#` na pełnoszerokościowy `＃`, żeby klient nie mógł potraktować tekstu jak klucza lokalizacyjnego. |
| `SNAC_Chat_ReplacePercentSign` | `1` | Zamienia `%` na pełnoszerokościowy `％`, żeby nie trafił do funkcji formatującej po stronie klienta. |
| `SNAC_Chat_RemoveUnprintable` | `1` | Usuwa z wiadomości znaki niedrukowalne. |
| `SNAC_Chat_TrimSpaces` | `1` | Obcina spacje z początku i końca, w tym znaki, które jedynie wyglądają jak spacja. |
| `SNAC_Chat_TruncateToEngineLimitAfterReplace` | `1` | Ponownie przycina wiadomość do bajtowego limitu silnika *po* zamianie. Znaki pełnoszerokościowe zajmują w UTF-8 trzy bajty tam, gdzie oryginał zajmował jeden, więc wiadomość, która wcześniej się mieściła, może potem przekroczyć limit. Stosowany limit to 127 bajtów albo 125, gdy przywracane są otaczające ją cudzysłowy. |

## Cvary nazw

| Cvar | Domyślnie | Opis |
| --- | --- | --- |
| `SNAC_Name_ReplaceNumberSign` | `1` | Zamienia `#` na `＃` w nazwach graczy. |
| `SNAC_Name_ReplacePercentSign` | `1` | Zamienia `%` na `％` w nazwach graczy. |
| `SNAC_Name_ReplaceAmpersand` | `1` | Zamienia `&` na `＆` w nazwach graczy. |
| `SNAC_Name_ReplacePlusSign` | `1` | Unieszkodliwia składnię `+polecenie`: gdy po `+` następuje bezpośrednio litera albo cyfra ASCII, ten kolejny znak zostaje zamieniony na swoją pełnoszerokościową postać, co psuje składnię przypisania, a nazwa pozostaje czytelna. |
| `SNAC_Name_RemoveUnprintable` | `1` | Usuwa z nazwy znaki niedrukowalne. |
| `SNAC_Name_TrimSpaces` | `1` | Obcina spacje z początku i końca nazwy. |

## Cvar tylko do odczytu

| Cvar | Opis |
| --- | --- |
| `SNAC_Version` | Podaje wczytaną wersję wtyczki. Zarejestrowany jako cvar serwera; nie da się go zmienić. |

## Domyślna konfiguracja z wydania

```text
SNAC_Chat_ReplaceNumberSign                 1
SNAC_Chat_ReplacePercentSign                1
SNAC_Chat_RemoveUnprintable                 1
SNAC_Chat_TrimSpaces                        1
SNAC_Chat_TruncateToEngineLimitAfterReplace 1

SNAC_Name_ReplaceNumberSign                 1
SNAC_Name_ReplacePercentSign                1
SNAC_Name_ReplaceAmpersand                  1
SNAC_Name_ReplacePlusSign                   1
SNAC_Name_RemoveUnprintable                 1
SNAC_Name_TrimSpaces                        1
```

:::warning

Wyłączenie którejkolwiek opcji otwiera z powrotem exploita, który ona zamykała. Jeśli wyłączasz coś, żeby obejść konflikt z inną wtyczką, wyłącz opcję możliwie najwęższą, a nie całą grupę czatu czy nazw, i najpierw sprawdź, czy konfliktująca wtyczka sama nie robi podobnego oczyszczania.

:::

:::note

Jeśli wszystkie opcje w danej grupie mają wartość `0`, wtyczka całkowicie pomija przetwarzanie tej grupy, zamiast wykonywać pusty przebieg — więc w pełni wyłączona grupa nic nie kosztuje.

:::
