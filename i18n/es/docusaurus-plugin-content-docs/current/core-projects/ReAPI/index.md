---
id: reapi
title: ReAPI
sidebar_position: 1
description: ReAPI es un módulo de AMXModX que ofrece APIs de ReHLDS, ReGameDLL y de plugins de Metamod (por ejemplo, ReUnion o ReVoice).
slug: /reapi
---

# ¿Qué es ReAPI?

ReAPI es un módulo de AMX Mod X que expone las interioridades de [ReHLDS](/es/docs/rehlds) y [ReGameDLL_CS](/es/docs/regamedll-cs) a los plugins de Pawn como nativas normales, en lugar de obligar a sus autores a parchear desplazamientos de memoria o a reconstruir estructuras por su cuenta. Da al código en Pawn un acceso seguro y versionado a comportamientos del motor y de la GameDLL que quedan fuera del alcance de AMX Mod X y Metamod por sí solos.

## Qué te ofrece

- **Cadenas de enganches** — intercepta funciones del motor (ReHLDS) y de la GameDLL (ReGameDLL_CS) en `pre` y `post`, con control preciso sobre el valor devuelto e incluso sobre los argumentos de la función original.
- **Acceso a miembros de estructuras** — lee y escribe miembros internos de las estructuras del motor y de la GameDLL (jugador, arma, granada, reglas de juego y más) por su nombre, en lugar de por un desplazamiento calculado a mano.
- **Comprobaciones del entorno en ejecución** — nativas como `is_rehlds()`, `is_regamedll()`, `has_reunion()`, `has_vtc()` y `has_rechecker()` permiten que un plugin se adapte al entorno en el que realmente se está ejecutando.
- **Cabeceras de integración opcionales** — `reapi_reunion.inc`, `reapi_vtc.inc` y `reapi_rechecker.inc` exponen enganches para [ReUnion](/es/docs/reunion), el antitrampas VTC y [ReChecker](/es/docs/rechecker) cuando están instalados.

## Requisitos, en resumen

- AMX Mod X funcionando sobre Metamod-R (o Metamod) y [ReHLDS](/es/docs/rehlds/install). Los enganches y miembros del motor necesitan ReHLDS.
- [ReGameDLL_CS](/es/docs/regamedll-cs/install) si tu plugin usa enganches o miembros de la GameDLL (`reapi_gamedll.inc`). Los plugins que solo trabajan a nivel de motor funcionan sin él.

Los pasos exactos están en [Instalación](./installing.md).

## Un ejemplo mínimo

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

Este código engancha `CBasePlayer::GiveAmmo` del lado de la GameDLL y registra cada llamada sin alterar el comportamiento (`HC_CONTINUE`). La API completa de cadenas de enganches y los tipos de valores y argumentos disponibles están en [Configuración](./settings.md).

## Qué consultar a continuación

- [Instalación](./installing.md) — instala el módulo y actívalo en tus plugins.
- [Configuración](./settings.md) — la API de cadenas de enganches y de acceso a miembros, con las nativas que realmente vas a llamar.
- [Instrucciones de compilación](./compilling.md) — compila ReAPI desde el código fuente.
- [Créditos](./credits.md) — licencia y enlaces del proyecto.
