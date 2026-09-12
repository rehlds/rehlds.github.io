---
id: refreelook-install
title: "ReFreeLook: Instalare"
sidebar_label: Instalare
sidebar_position: 2
description: ReFreeLook - modul AMX Mod X care le permite administratorilor aflați în modul spectator să folosească orice mod de cameră, indiferent de valoarea `mp_forcecamera` sau `mp_forcechasecam`. Funcționează doar cu cea mai recentă versiune de `ReGameDLL_CS`.
slug: /refreelook/install
keywords:
  - refreelook
  - AMX Mod X
  - amxx
  - amx
  - module
  - install
tags:
  - refreelook
  - install
last_update:
  date: 07/21/2025
  author: STAM
---

# Instalare

ReFreeLook este un **modul** AMX Mod X (nu un plugin Metamod) și are nevoie de cea mai recentă versiune de [ReGameDLL_CS](/ro/docs/regamedll-cs/install) și de AMX Mod X, deja instalate și funcționale.

## 1. Obțineți ReFreeLook

Descărcați o versiune din [pagina de versiuni](https://github.com/rehlds/ReFreeLook/releases) sau [compilați-l din sursă](./compilling.md).

## 2. Opriți serverul

Opriți serverul înainte de instalare sau de actualizare — fie că este vorba despre prima instalare, fie despre o actualizare.

## 3. Puneți modulul la locul lui

Copiați binarul potrivit platformei dumneavoastră în folderul de module AMX Mod X al modului dumneavoastră:

| Platformă | Fișier | Destinație |
| --- | --- | --- |
| Windows | `refreelook_amxx.dll` | `<mod>/addons/amxmodx/modules/refreelook_amxx.dll` |
| Linux | `refreelook_amxx_i386.so` | `<mod>/addons/amxmodx/modules/refreelook_amxx_i386.so` |

## 4. Înregistrați modulul

Deschideți `<mod>/addons/amxmodx/configs/modules.ini` și adăugați un rând la final:

```text
refreelook
```

## 5. Configurați cvar-urile de joc

ReFreeLook contează doar atunci când camerele spectatorilor sunt într-adevăr restricționate:

- Puneți `mp_forcechasecam` și `mp_forcecamera` la **aceeași** valoare.
- Verificați că `mp_fadetoblack` este `0`.

## 6. Configurați accesul administratorilor

Stabiliți în `afl_admin_access_flags` drepturile de acces care trebuie scutite de restricția camerei. Vedeți [Setări](./settings.md) pentru lista drepturilor și pentru valoarea implicită.

## 7. Porniți serverul

Porniți serverul și verificați că modulul s-a încărcat (căutați `refreelook` în lista modulelor AMX Mod X, în consolă sau în jurnal).
