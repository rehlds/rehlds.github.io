---
id: relocalizebugfix-settings
title: Ustawienia
sidebar_position: 3
description: ReLocalizeBug Fix - porzucona wtyczka Metamoda blokująca exploity z ciągami lokalizacyjnymi w nazwach graczy i na czacie na serwerach ReHLDS.
slug: /relocalizebugfix/settings
---

<head>
  <title>ReLocalizeBug Fix: Ustawienia | ReHLDS</title>
</head>

# Ustawienia

:::warning Projekt porzucony

Zachowane dla orientacji. Wtyczka jest niezgodna z nowoczesnymi wersjami ReHLDS — przeczytaj [Czym jest ReLocalizeBug Fix?](./index.md).

:::

ReLocalizeBug Fix **nie miał żadnej konfiguracji**. Podobnie jak [LocalizeBug Fix](/pl/docs/localizebugfix/settings), z którego powstał, nie rejestrował cvarów ani poleceń konsoli i nie dołączał pliku konfiguracyjnego. Wczytanie wtyczki włączało ochronę; nie było czego stroić.

Jego nowoczesny następca, [SafeNameAndChat](/pl/docs/safenameandchat/settings), udostępnia jedenaście cvarów obejmujących osobno nazwy i czat, dzięki czemu poszczególne zabezpieczenia można wyłączyć, gdy kolidują z czymś innym.

:::note

Skoro nie było żadnych ustawień, nie ma też sposobu, żeby zmusić tę wtyczkę do poprawnego działania na wersji ReHLDS, której nie obsługuje. Jeśli działa wadliwie, rozwiązaniem jest jej usunięcie, a nie obchodzenie problemu konfiguracją.

:::
