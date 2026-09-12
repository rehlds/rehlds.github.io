---
id: reapi-settings
title: Setări
sidebar_position: 3
description: ReAPI - modul AMX Mod X care oferă API-uri pentru ReHLDS, ReGameDLL și pluginurile Metamod (de exemplu, ReUnion și ReVoice).
slug: /reapi/settings
---

<head>
  <title>ReAPI: Setări | ReHLDS</title>
</head>

# Setări

ReAPI nu are variabile proprii de consolă — este un API pentru scripting, nu un plugin pentru utilizatorul final. „Configurarea” ReAPI înseamnă folosirea corectă a funcțiilor lui native în codul dumneavoastră Pawn. Această pagină trece în revistă elementele de bază.

## Fișiere de includere

| Fișier antet | Oferă |
| --- | --- |
| `reapi.inc` | Nucleul modulului: funcțiile native pentru lanțurile de hook-uri, macrourile de acces la membri, verificările de capabilități. Includeți-l pe acesta; el le aduce pe celelalte. |
| `reapi_engine.inc` / `reapi_engine_const.inc` | Funcțiile de la nivelul motorului (ReHLDS) care pot primi hook-uri și constantele lor. |
| `reapi_gamedll.inc` / `reapi_gamedll_const.inc` | Funcțiile de la nivelul GameDLL-ului (ReGameDLL_CS) care pot primi hook-uri și constantele lor. Pot fi folosite doar când rulează ReGameDLL_CS. |
| `cssdk_const.inc` | Constantele SDK-ului Counter-Strike, comune fișierelor antet de mai sus. |
| `reapi_reunion.inc` | Hook-uri către [ReUnion](/ro/docs/reunion), când este instalat. |
| `reapi_vtc.inc` | Hook-uri către integrarea cu sistemul anti-cheat VTC, când este instalată. |
| `reapi_rechecker.inc` | Hook-uri către [ReChecker](/ro/docs/rechecker), când este instalat. |

`reapi.inc` le include automat pe toate cele de mai sus — `reapi_engine.inc` are sens doar cu ReHLDS, iar `reapi_gamedll.inc` doar cu ReGameDLL_CS.

## Lanțuri de hook-uri

Un lanț de hook-uri îi permite pluginului dumneavoastră să intercepteze apelul unei funcții a motorului sau a GameDLL-ului.

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

`function_id` este una dintre constantele `RG_*` declarate în `reapi_engine_const.inc` (funcțiile motorului) sau în `reapi_gamedll_const.inc` (funcțiile GameDLL-ului) — consultați aceste fișiere antet pentru lista completă și versionată a funcțiilor care pot primi hook-uri și a semnăturilor lor de callback.

### Tipurile de returnare ale lanțurilor de hook-uri

Returnați una dintre aceste valori din funcția dumneavoastră de callback, ca să stabiliți ce se întâmplă mai departe:

| Constantă | Efect |
| --- | --- |
| `HC_CONTINUE` | Pluginul nu a întreprins nimic; se continuă normal. |
| `HC_SUPERCEDE` | Sare peste funcția reală; folosește în locul ei valoarea stabilită prin `SetHookChainReturn`. |
| `HC_BREAK` | Sare peste toate funcțiile rămase **și** peste funcția reală; folosește valoarea de returnare stabilită. Sare peste hook-ul fiecărui plugin AMXX următor — folosiți-o cu grijă. |
| `HC_BYPASS` | Sare peste apelurile tuturor pluginurilor AMXX următoare, dar apelează totuși funcția originală. În `pre`, sare și peste funcțiile din `post`. |

### Tipurile de argumente și de valori returnate

`SetHookChainReturn`, `GetHookChainReturn` și `SetHookChainArg` primesc o valoare `AType:` care descrie cum trebuie interpretate argumentele următoare:

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

## Accesul la membri

Citiți și scrieți membrii interni ai structurilor (jucător, armă, grenadă, reguli de joc și altele) după nume, nu după un decalaj calculat manual:

```pawn
set_member(entity, m_iSomeMember, value);
value = get_member(entity, m_iSomeMember);
```

Implicit, `set_member`/`get_member` se traduc în variantele `set_member_s`/`get_member_s`, cu verificarea limitelor. Definiți `MEMBER_UNSAFE` înainte de `#include <reapi>` dacă aveți nevoie de variantele fără verificare, puțin mai rapide, și înțelegeți riscul.

## Verificări de capabilități în timpul execuției

Folosiți-le ca un plugin să se adapteze la configurația pe care rulează efectiv, în loc să presupună:

| Funcție nativă | Returnează adevărat când |
| --- | --- |
| `is_rehlds()` | Serverul rulează ReHLDS. |
| `is_regamedll()` | Serverul rulează ReGameDLL_CS. |
| `has_reunion()` | ReUnion este instalat. |
| `has_vtc()` | Integrarea cu sistemul anti-cheat VTC este instalată. |
| `has_rechecker()` | ReChecker este instalat. |

## Alte funcții native utilitare

| Funcție nativă | Rol |
| --- | --- |
| `bool:FClassnameIs(entityIndex, const className[])` | Verifică numele de clasă al unei entități; validează totodată entitatea. |
| `WeaponIdType:GetGrenadeType(entityIndex)` | Returnează tipul de grenadă al unei entități. |
| `engset_view(index, viewEntity)` / `get_viewent(index)` | Citește sau stabilește entitatea din care privește un jucător. |
| `bool:is_entity(entityIndex)` | Verifică dacă un index corespunde unei entități valide. |

Pentru lista completă și actualizată a funcțiilor native și a identificatorilor funcțiilor care pot primi hook-uri, tratați `reapi.inc`, `reapi_engine_const.inc` și `reapi_gamedll_const.inc` (instalate alături de `scripting/include` al pluginurilor dumneavoastră) drept sursă de referință — ele sunt versionate împreună cu binarul pe care îl rulați.
