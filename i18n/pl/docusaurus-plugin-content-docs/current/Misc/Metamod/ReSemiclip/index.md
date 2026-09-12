---
id: resemiclip
title: ReSemiclip
sidebar_position: 1
description: ReSemiclip - wtyczka Metamoda decydująca o tym, czy gracze mogą przez siebie przechodzić. Jako wzorzec posłużył moduł Semiclip autorstwa `joaquimandrade`.
slug: /resemiclip
---

# Czym jest ReSemiclip?

ReSemiclip to wtyczka [Metamoda](https://github.com/rehlds/Metamod-R) dla serwerów Counter-Strike, która pozwala graczom przechodzić przez siebie na konfigurowalnych warunkach, zamiast wzajemnie blokować sobie ruch. To utrzymywane ujęcie klasycznego pomysłu „Semiclip”, korzystające z [modułu Semiclip autorstwa joaquimandrade](https://github.com/joaquimandrade) jako implementacji wzorcowej.

## Czym steruje

- **Kogo dotyczy** — wszystkich, tylko terrorystów, tylko antyterrorystów albo tylko współdrużynników.
- **Kiedy obowiązuje** — przez ustalony czas od początku rundy (przydatne tuż po pojawieniu się w grze, gdy gracze łatwo się o siebie blokują) albo na stałe.
- **Kucanie** — pozwala graczom wskoczyć na kucającego współdrużynnika, zamiast się o niego zablokować.
- **Sygnał wizualny** — opcjonalna przezroczystość graczy będących na tyle blisko, by przez siebie przenikać, dzięki czemu efekt widać, a nie zaskakuje.
- **Zachowanie pocisków** — opcjonalnie pozwala strzałom przechodzić przez współdrużynników objętych właśnie semiclipem.

Wszystko to konfiguruje się globalnie, a także osobno dla każdej mapy albo przedrostka mapy. Pełny format pliku `config.ini` opisano w [Ustawieniach](./settings.md).

## Wymagania

ReSemiclip zakłada hooki zarówno na funkcje silnika ([ReHLDS](/pl/docs/rehlds/install)), jak i biblioteki GameDLL ([ReGameDLL_CS](/pl/docs/regamedll-cs/install)), więc oba są potrzebne pod Metamodem. Zobacz [Instalację](./installing.md).
