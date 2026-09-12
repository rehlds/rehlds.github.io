---
id: safenameandchat
title: SafeNameAndChat
sidebar_position: 1
description: SafeNameAndChat - zewnętrzna wtyczka Metamoda unieszkodliwiająca exploity z ciągami lokalizacyjnymi i wstrzykiwaniem poleceń w nazwach graczy i wiadomościach czatu.
slug: /safenameandchat
---

# Czym jest SafeNameAndChat?

SafeNameAndChat to wtyczka Metamoda autorstwa [@WPMGPRoSToTeMy](https://github.com/WPMGPRoSToTeMa), która oczyszcza nazwy graczy i wiadomości czatu, zanim silnik wyśle je dalej, zamykając całą rodzinę wieloletnich exploitów GoldSrc, w których spreparowana nazwa albo wiadomość wywraca klientów pozostałych graczy lub wstrzykuje polecenia konsoli.

:::note

To projekt zewnętrzny. Stoi poza organizacją ReHLDS i nie jest przez nią utrzymywany — problemy zgłaszaj w jego własnym [systemie zgłoszeń](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/issues).

:::

## Przed czym chroni

Klient GoldSrc traktuje niektóre znaki w szczególny sposób, a gracz, który wstawi je do nazwy albo do wiadomości na czacie, może to wykorzystać:

- **Ciągi lokalizacyjne (`#`)** — wiadomość albo nazwa zawierająca symbole w rodzaju `#Spec_Help_Text` sprawia, że klient, który je odbierze, potraktuje je jak klucze lokalizacyjne. Zależnie od symbolu klienci się wywracają.
- **Specyfikatory formatu (`%`)** — `%s` i podobne trafiające do funkcji formatującej po stronie klienta.
- **Ampersand (`&`) w nazwach** — obsługiwany nieprawidłowo w części ścieżek rysowania nazw po stronie klienta.
- **Wstrzykiwanie poleceń przez `+` w nazwach** — `+` bezpośrednio przed literą albo cyfrą odtwarza składnię przypisania `+polecenie`.

Zamiast wyrzucać gracza albo usuwać znaki, wtyczka zamienia każdy problematyczny znak na jego **pełnoszerokościowy odpowiednik z Unicode** — `#` staje się `＃`, a `%` staje się `％`. Dla człowieka tekst wygląda tak samo, ale klient przestaje traktować go jak symbol. Wtyczka potrafi też usuwać znaki niedrukowalne i obcinać spacje z początku i końca.

## Wymagania

- Metamod (zalecany Metamod-R).
- [ReHLDS](/pl/docs/rehlds/install) nie jest wymagany, ale jest wykrywany w czasie działania i używany, gdy jest obecny — wtyczka odpytuje przy starcie `VREHLDS_HLDS_API_VERSION001` i, jeśli dostanie odpowiedź, wybiera ścieżkę uwzględniającą silnik.

Wtyczkę można wczytywać i wyładowywać w dowolnym momencie (`meta load` / `meta unload` działają bez restartu).

W [Instalacji](./installing.md) opisano konfigurację, a w [Ustawieniach](./settings.md) — jedenaście cvarów `SNAC_*`.
