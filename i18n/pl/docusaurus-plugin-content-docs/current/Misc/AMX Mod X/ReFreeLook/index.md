---
id: refreelook
title: "ReFreeLook"
sidebar_label: ReFreeLook
sidebar_position: 1
description: ReFreeLook - moduł AMX Mod X pozwalający administratorom w trybie obserwatora korzystać z dowolnego trybu kamery, niezależnie od wartości `mp_forcecamera` czy `mp_forcechasecam`. Działa tylko z najnowszą wersją `ReGameDLL_CS`.
slug: /refreelook
keywords:
  - refreelook
  - AMX Mod X
  - amxx
  - amx
  - module
tags:
  - refreelook
  - amxx module
last_update:
  date: 07/21/2025
  author: STAM
---

# Czym jest ReFreeLook?

ReFreeLook to moduł AMX Mod X, który pozwala administratorom z odpowiednimi uprawnieniami swobodnie obserwować rozgrywkę, niezależnie od wartości `mp_forcecamera` czy `mp_forcechasecam` narzuconej zwykłym obserwatorom. Jest kontynuacją — opartą na [ReGameDLL_CS](/pl/docs/regamedll-cs) — projektu [AdminFreeLook autorstwa Arkshine’a](https://github.com/Arkshine/AdminFreeLook).

Serwery zwykle blokują tryby kamery obserwatora (`mp_forcecamera`/`mp_forcechasecam`), żeby gracze nie podglądali pozycji dla swoich współdrużynników. ReFreeLook zwalnia z tego ograniczenia administratorów mających uprawnienia z konfigurowalnego zestawu, dzięki czemu ekipa moderatorska zachowuje pełną swobodę kamery, a zwykli obserwatorzy pozostają ograniczeni.

## Wymagania

- **Najnowsza** wersja [ReGameDLL_CS](/pl/docs/regamedll-cs/install) — ReFreeLook zakłada hooki na funkcje biblioteki GameDLL, które istnieją tylko tam; nie zadziała na czystym HLDS i GameDLL.
- AMX Mod X.

Zobacz [Instalację](./installing.md) i [Ustawienia](./settings.md), gdzie opisano jedyny cvar decydujący o tym, kto dostaje swobodną kamerę.
