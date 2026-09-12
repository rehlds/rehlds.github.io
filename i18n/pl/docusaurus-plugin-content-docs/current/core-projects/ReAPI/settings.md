---
id: reapi-settings
title: Ustawienia
sidebar_position: 3
description: ReAPI - moduł AMX Mod X udostępniający API dla ReHLDS, ReGameDLL i wtyczek Metamoda (na przykład ReUnion i ReVoice).
slug: /reapi/settings
---

<head>
  <title>ReAPI: Ustawienia | ReHLDS</title>
</head>

# Ustawienia

ReAPI nie ma własnych zmiennych konsoli — to API do skryptowania, a nie wtyczka dla użytkownika końcowego. „Konfigurowanie” ReAPI oznacza poprawne używanie jego funkcji natywnych w twoim kodzie w Pawnie. Ta strona opisuje podstawowe elementy.

## Pliki dołączane

| Plik nagłówkowy | Udostępnia |
| --- | --- |
| `reapi.inc` | Rdzeń modułu: funkcje natywne łańcuchów hooków, makra dostępu do składowych, sprawdzanie możliwości. Dołącz właśnie ten; on pociąga za sobą pozostałe. |
| `reapi_engine.inc` / `reapi_engine_const.inc` | Funkcje silnika (ReHLDS), na które można założyć hooki, oraz ich stałe. |
| `reapi_gamedll.inc` / `reapi_gamedll_const.inc` | Funkcje biblioteki GameDLL (ReGameDLL_CS), na które można założyć hooki, oraz ich stałe. Dostępne tylko wtedy, gdy działa ReGameDLL_CS. |
| `cssdk_const.inc` | Stałe SDK Counter-Strike’a, wspólne dla powyższych plików nagłówkowych. |
| `reapi_reunion.inc` | Hooki do [ReUnion](/pl/docs/reunion), gdy jest zainstalowany. |
| `reapi_vtc.inc` | Hooki do integracji z antycheatem VTC, gdy jest zainstalowana. |
| `reapi_rechecker.inc` | Hooki do [ReChecker](/pl/docs/rechecker), gdy jest zainstalowany. |

`reapi.inc` dołącza wszystkie powyższe automatycznie — `reapi_engine.inc` ma sens tylko z ReHLDS, a `reapi_gamedll.inc` tylko z ReGameDLL_CS.

## Łańcuchy hooków

Łańcuch hooków pozwala twojej wtyczce przechwycić wywołanie funkcji silnika albo biblioteki GameDLL.

```pawn
native HookChain:RegisterHookChain(ReAPIFunc:function_id, const callback[], post = 0);
native bool:DisableHookChain(HookChain:hook);
native bool:EnableHookChain(HookChain:hook);
native SetHookChainReturn(AType:type, any:...);
native any:GetHookChainReturn(AType:type, any:...);
native SetHookChainArg(number, AType:type, any:...);
native bool:IsReapiHookOriginalWasCalled(ReAPIFunc:function_id);
native HookChain:GetCurrentHookChainHandle();
```

`function_id` to jedna ze stałych `RG_*` zadeklarowanych w `reapi_engine_const.inc` (funkcje silnika) albo w `reapi_gamedll_const.inc` (funkcje GameDLL) — pełną, wersjonowaną listę funkcji, na które można założyć hooki, oraz sygnatury ich funkcji zwrotnych znajdziesz właśnie w tych plikach.

### Typy zwracane przez łańcuchy hooków

Zwróć jedną z tych wartości ze swojej funkcji zwrotnej, żeby zdecydować, co stanie się dalej:

| Stała | Działanie |
| --- | --- |
| `HC_CONTINUE` | Wtyczka niczego nie zrobiła; wszystko toczy się normalnie. |
| `HC_SUPERCEDE` | Pomija właściwą funkcję; zamiast niej używa wartości ustawionej przez `SetHookChainReturn`. |
| `HC_BREAK` | Pomija wszystkie pozostałe funkcje **oraz** właściwą funkcję; używa ustawionej wartości zwracanej. Pomija hooki wszystkich kolejnych wtyczek AMXX — używaj ostrożnie. |
| `HC_BYPASS` | Pomija wywołania we wszystkich kolejnych wtyczkach AMXX, ale mimo to wywołuje oryginalną funkcję. W trybie `pre` pomija też funkcje z trybu `post`. |

### Typy argumentów i wartości zwracanych

`SetHookChainReturn`, `GetHookChainReturn` i `SetHookChainArg` przyjmują wartość `AType:`, która opisuje, jak interpretować kolejne argumenty:

```pawn
enum AType
{
	ATYPE_INTEGER = 0,
	ATYPE_FLOAT,
	ATYPE_STRING,
	ATYPE_CLASSPTR,
	ATYPE_EDICT,
	ATYPE_EVARS,
	ATYPE_BOOL,
	ATYPE_VECTOR,
	ATYPE_TRACE
};
```

## Dostęp do składowych

Odczytuj i zapisuj wewnętrzne składowe struktur (gracz, broń, granat, zasady gry i inne) po nazwie, a nie po ręcznie wyliczonym przesunięciu:

```pawn
set_member(entity, m_iSomeMember, value);
value = get_member(entity, m_iSomeMember);
```

Domyślnie `set_member`/`get_member` sprowadzają się do wariantów `set_member_s`/`get_member_s`, które sprawdzają zakresy. Zdefiniuj `MEMBER_UNSAFE` przed `#include <reapi>`, jeśli potrzebujesz wariantów bez sprawdzania, nieco szybszych, i rozumiesz związane z tym ryzyko.

## Sprawdzanie możliwości w czasie działania

Używaj tych funkcji, żeby wtyczka dostosowała się do tego, na czym faktycznie działa, zamiast cokolwiek zakładać:

| Funkcja natywna | Zwraca prawdę, gdy |
| --- | --- |
| `is_rehlds()` | Serwer działa na ReHLDS. |
| `is_regamedll()` | Serwer działa na ReGameDLL_CS. |
| `has_reunion()` | ReUnion jest zainstalowany. |
| `has_vtc()` | Integracja z antycheatem VTC jest zainstalowana. |
| `has_rechecker()` | ReChecker jest zainstalowany. |

## Pozostałe funkcje pomocnicze

| Funkcja natywna | Do czego służy |
| --- | --- |
| `bool:FClassnameIs(entityIndex, const className[])` | Sprawdza nazwę klasy obiektu; przy okazji weryfikuje sam obiekt. |
| `WeaponIdType:GetGrenadeType(entityIndex)` | Zwraca typ granatu danego obiektu. |
| `engset_view(index, viewEntity)` / `get_viewent(index)` | Odczytuje albo ustawia obiekt, z którego patrzy gracz. |
| `bool:is_entity(entityIndex)` | Sprawdza, czy dany indeks odpowiada prawidłowemu obiektowi. |

Pełną i aktualną listę funkcji natywnych oraz identyfikatorów funkcji, na które można założyć hooki, czerp z plików `reapi.inc`, `reapi_engine_const.inc` i `reapi_gamedll_const.inc` (zainstalowanych razem z `scripting/include` twoich wtyczek) — to one są źródłem rozstrzygającym, bo są wersjonowane razem z plikiem binarnym, którego używasz.
