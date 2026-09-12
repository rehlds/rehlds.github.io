---
id: reapi
title: ReAPI
sidebar_position: 1
description: ReAPI - modul AMX Mod X care oferă API-uri pentru ReHLDS, ReGameDLL și pluginurile Metamod (de exemplu, ReUnion și ReVoice).
slug: /reapi
---

# Ce este ReAPI?

ReAPI este un modul AMX Mod X care expune mecanismele interne ale [ReHLDS](/ro/docs/rehlds) și ale [ReGameDLL_CS](/ro/docs/regamedll-cs) către pluginurile scrise în Pawn, sub formă de funcții native obișnuite, în loc să îi oblige pe autorii de pluginuri să modifice decalaje de memorie sau să facă singuri inginerie inversă asupra structurilor. El oferă codului Pawn un acces sigur și versionat la comportamente ale motorului și ale GameDLL-ului la care AMX Mod X și Metamod, luate ca atare, nu ajung.

## Ce vă pune la dispoziție

- **Lanțuri de hook-uri** — interceptați funcții ale motorului (ReHLDS) și ale GameDLL-ului (ReGameDLL_CS) în `pre` și `post`, cu un control fin asupra valorii returnate și chiar asupra argumentelor funcției originale.
- **Acces la membri** — citiți și scrieți membrii interni ai structurilor motorului și ale GameDLL-ului (jucător, armă, grenadă, reguli de joc și altele) după nume, nu după un decalaj calculat manual.
- **Verificări de capabilități în timpul execuției** — funcții native precum `is_rehlds()`, `is_regamedll()`, `has_reunion()`, `has_vtc()` și `has_rechecker()` îi permit unui plugin să se adapteze la configurația pe care rulează efectiv.
- **Fișiere antet opționale de integrare** — `reapi_reunion.inc`, `reapi_vtc.inc` și `reapi_rechecker.inc` expun hook-uri către [ReUnion](/ro/docs/reunion), către sistemul anti-cheat VTC și către [ReChecker](/ro/docs/rechecker), atunci când acestea sunt instalate.

## Cerințe pe scurt

- AMX Mod X, rulând peste Metamod-R (sau Metamod) și [ReHLDS](/ro/docs/rehlds/install). Hook-urile și membrii de la nivelul motorului au nevoie de ReHLDS.
- [ReGameDLL_CS](/ro/docs/regamedll-cs/install), dacă pluginul dumneavoastră folosește hook-uri sau membri de la nivelul GameDLL-ului (`reapi_gamedll.inc`). Pluginurile care țin doar de nivelul motorului funcționează și fără el.

Vedeți [Instalare](./installing.md) pentru pașii exacți de configurare.

## Un exemplu minimal

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

Acest cod pune un hook pe `CBasePlayer::GiveAmmo`, de partea GameDLL-ului, și consemnează fiecare apel fără să schimbe comportamentul (`HC_CONTINUE`). Vedeți [Setări](./settings.md) pentru API-ul complet al lanțurilor de hook-uri și pentru tipurile de returnare și de argumente disponibile.

## Unde continuați

- [Instalare](./installing.md) — instalați modulul și activați-l în pluginurile dumneavoastră.
- [Setări](./settings.md) — API-ul lanțurilor de hook-uri și al accesului la membri, cu funcțiile native pe care le veți apela efectiv.
- [Compilare](./compilling.md) — compilați ReAPI din codul sursă.
- [Credite](./credits.md) — licența și legăturile proiectului.
