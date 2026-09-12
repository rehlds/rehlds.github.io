---
id: rechecker
title: "ReChecker"
sidebar_label: ReChecker
sidebar_position: 1
description: ReChecker to wtyczka Metamoda, która pozwala sprawdzać pliki klienta po nazwie i skrócie md5.
slug: /rechecker
keywords:
  - rechecker
  - metamod
  - plugin
tags:
  - rechecker
  - metamod plugin
last_update:
  date: 07/21/2025
  author: STAM
---

# Czym jest ReChecker?

ReChecker to wtyczka [Metamoda](https://github.com/rehlds/Metamod-R) dla [ReHLDS](/pl/docs/rehlds), która sprawdza pliki wysyłane przez klienta przez silnikowy mechanizm zasobów i spójności — przy łączeniu albo pobieraniu — i porównuje je z listą reguł, którą podajesz. Gdy ścieżka i skrót pliku (albo fakt, że go brakuje lub że nie jest rozpoznany) pasują do reguły, ReChecker wykonuje wybrane przez ciebie polecenie konsoli — zwykle `kick` albo wpis do logu.

Służy do wyłapywania znanych bibliotek DLL z cheatami i wstrzykniętych plików po statycznej sygnaturze pliku (ścieżka plus krótki przedrostek skrótu MD5), niezależnie od logiki antycheata działającej gdzie indziej.

## Jak działa

Dla każdego istotnego zasobu przesłanego przez klienta ReChecker porównuje go z regułami z `resources.ini`:

- Reguła może pasować do **konkretnego skrótu**, do `UNKNOWN` (czyli wszystkiego, co nie zostało wyraźnie rozpoznane) albo do `MISSING` (plik w ogóle nie został wysłany).
- Pasująca reguła wykonuje skonfigurowane polecenie, w którym symbole takie jak `[userid]`, `[name]`, `[file_name]` i `[file_md5hash]` są zastępowane rzeczywistymi wartościami.
- Flaga `BREAK` przerywa sprawdzanie kolejnych reguł dla danego klienta, gdy tylko jedna pasuje; `IGNORE` dopuszcza konkretny skrót.

Pełny format pliku `resources.ini` opisano w [Ustawieniach](./settings.md).

## Co jest dołączone

Projekt zawiera startowy `resources.ini` z sygnaturami wielu znanych na przestrzeni lat plików z cheatami (wallhacki, aimboty, wstrzykiwacze DLL). Traktuj go jako punkt wyjścia, który sam utrzymujesz — to nie jest stale aktualizowana baza cheatów.

## Wymagania

ReChecker opiera się na rozszerzonym API silnika [ReHLDS](/pl/docs/rehlds/install) — nie wczyta się na czystym HLDS. Wymaga też wcześniejszego zainstalowania Metamoda (zalecany Metamod-R). Zobacz [Instalację](./installing.md).
