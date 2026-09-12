---
id: reapi
title: ReAPI
sidebar_position: 1
description: ReAPI - moduł AMX Mod X udostępniający API dla ReHLDS, ReGameDLL i wtyczek Metamoda (na przykład ReUnion i ReVoice).
slug: /reapi
---

# Czym jest ReAPI?

ReAPI to moduł AMX Mod X, który udostępnia wnętrzności [ReHLDS](/pl/docs/rehlds) i [ReGameDLL_CS](/pl/docs/regamedll-cs) wtyczkom pisanym w Pawnie jako zwykłe funkcje natywne, zamiast zmuszać ich autorów do grzebania w przesunięciach pamięci albo do samodzielnej inżynierii wstecznej struktur. Daje kodowi w Pawnie bezpieczny i wersjonowany dostęp do zachowań silnika i biblioteki GameDLL, do których sam AMX Mod X i Metamod nie sięgają.

## Co ci daje

- **Łańcuchy hooków** — przechwytywanie funkcji silnika (ReHLDS) i biblioteki GameDLL (ReGameDLL_CS) w trybie `pre` i `post`, z dokładną kontrolą nad wartością zwracaną, a nawet nad argumentami oryginalnej funkcji.
- **Dostęp do składowych** — odczyt i zapis wewnętrznych składowych struktur silnika i GameDLL (gracz, broń, granat, zasady gry i inne) po nazwie, a nie po ręcznie wyliczonym przesunięciu.
- **Sprawdzanie możliwości w czasie działania** — funkcje natywne takie jak `is_rehlds()`, `is_regamedll()`, `has_reunion()`, `has_vtc()` i `has_rechecker()` pozwalają wtyczce dostosować się do tego, na czym faktycznie działa.
- **Opcjonalne pliki nagłówkowe integracji** — `reapi_reunion.inc`, `reapi_vtc.inc` i `reapi_rechecker.inc` udostępniają hooki do [ReUnion](/pl/docs/reunion), do antycheata VTC i do [ReChecker](/pl/docs/rechecker), gdy są zainstalowane.

## Wymagania w skrócie

- AMX Mod X działający na Metamod-R (albo Metamodzie) i [ReHLDS](/pl/docs/rehlds/install). Hooki i składowe na poziomie silnika wymagają ReHLDS.
- [ReGameDLL_CS](/pl/docs/regamedll-cs/install), jeśli twoja wtyczka korzysta z hooków albo składowych na poziomie GameDLL (`reapi_gamedll.inc`). Wtyczki działające wyłącznie na poziomie silnika obejdą się bez niego.

Dokładne kroki konfiguracji znajdziesz w [Instalacji](./installing.md).

## Minimalny przykład

```pawn
#include <amxmodx>
#include <reapi>

public plugin_init()
{
	register_plugin("ReAPI Test", "1.0", "s1lent");
	RegisterHookChain(RG_CBasePlayer_GiveAmmo, "CBasePlayer_GiveAmmo");
}

public CBasePlayer_GiveAmmo(const this, iAmount, szName[], iMax)
{
	server_print("-> CBasePlayer_GiveAmmo: index:(%d), amount:(%d), name:(%s), max:(%d)", this, iAmount, szName, iMax);
	return HC_CONTINUE;
}
```

Ten kod zakłada hook na `CBasePlayer::GiveAmmo` po stronie GameDLL i zapisuje każde wywołanie, nie zmieniając zachowania (`HC_CONTINUE`). Pełne API łańcuchów hooków oraz dostępne typy zwracane i typy argumentów opisano w [Ustawieniach](./settings.md).

## Gdzie dalej

- [Instalacja](./installing.md) — zainstaluj moduł i włącz go w swoich wtyczkach.
- [Ustawienia](./settings.md) — API łańcuchów hooków i dostępu do składowych, z funkcjami natywnymi, których faktycznie będziesz używać.
- [Kompilacja](./compilling.md) — skompiluj ReAPI ze źródeł.
- [Autorzy](./credits.md) — licencja i odnośniki do projektu.
