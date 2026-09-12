---
id: reunion
title: ReUnion
sidebar_position: 1
description: ReUnion - wtyczka Metamoda pozwalająca klientom non-steam z protokołami 47 i 48 łączyć się z serwerami ReHLDS.
slug: /reunion
---

# Czym jest ReUnion?

ReUnion to wtyczka [Metamoda](https://github.com/rehlds/Metamod-R), która pozwala klientom GoldSrc spoza Steama (protokoły 47 i 48) łączyć się z serwerami [ReHLDS](/pl/docs/rehlds). Jest kontynuacją projektu DProto, dostosowaną specjalnie pod ReHLDS.

Historycznie spora część graczy Half-Life’a i Counter-Strike’a łączy się przez klientów spoza Steama, korzystających z różnych emulatorów (revEmu, SteamEmu, SC2009 i innych). ReUnion uwierzytelnia takich klientów i przydziela im identyfikatory (`STEAM_`/`VALVE_`) zgodnie z twoją konfiguracją, naprawia problemy ze zgodnością wyszukiwarki serwerów i zapytań, które część z nich wywołuje, oraz dokłada ochronę przed zalewem zapytań — a wszystko to bez osobnej instalacji DProto.

Serwery działające na ReUnion znajdziesz przez [Game Tracker](http://www.gametracker.com/search/?search_by=server_variable&search_by2=reu_version).

## Czym się zajmuje

- **Identyfikacja klientów** — przydziela każdemu łączącemu się klientowi identyfikator w stylu `STEAM_`/`VALVE_`, z osobnymi regułami dla każdego rodzaju klienta (prawdziwy Steam, revEmu, SteamEmu, SC2009, AVSMP, skanery SETTI, sXeI i inne). Zobacz [Ustawienia](./settings.md).
- **Ochrona SteamID** — opcjonalny skrót z solą (`SteamIdHashSalt`) sprawia, że wygenerowanych identyfikatorów nie da się odwrócić, co uniemożliwia podszywanie się pod cudze SteamID i ich kradzież.
- **Zgodność zapytań do serwera** — poprawki dla klientów z wadliwą obsługą wyszukiwarki serwerów oraz opcjonalne ograniczanie tempa zapytań, chroniące przed nadużyciami.

## Wymagania

- ReHLDS z API `3.10` lub nowszym.
- Metamod (zalecany Metamod-R).

Zobacz [Instalację](./installing.md).

:::note

ReUnion obsługiwał kiedyś emulator `SmartSteamEmu3`. Tę obsługę usunięto, gdy projekt udostępniono jako otwarty kod, bo opierała się na wrażliwym kodzie autoryzacji. Rzadko wpływa to na rzeczywistą frekwencję na serwerach, bo ten emulator jest mało popularny wśród klientów spoza Steama.

:::
