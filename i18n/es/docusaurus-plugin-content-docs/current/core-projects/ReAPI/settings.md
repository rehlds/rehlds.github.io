---
id: reapi-settings
title: Configuración
sidebar_position: 3
description: ReAPI es un módulo de AMXModX que ofrece APIs de ReHLDS, ReGameDLL y de plugins de Metamod (por ejemplo, ReUnion o ReVoice).
slug: /reapi/settings
---

<head>
  <title>ReAPI: Configuración | ReHLDS</title>
</head>

# Configuración

ReAPI no tiene variables de consola propias: es una API para scripts, no un plugin de usuario final. «Configurar» ReAPI significa usar correctamente sus nativas desde tu código en Pawn. Esta página describe sus elementos básicos.

## Archivos de cabecera

| Cabecera | Qué aporta |
| --- | --- |
| `reapi.inc` | Núcleo del módulo: nativas de cadenas de enganches, macros de acceso a miembros y comprobaciones del entorno. Incluye esta; ella arrastra el resto. |
| `reapi_engine.inc` / `reapi_engine_const.inc` | Funciones enganchables a nivel de motor (ReHLDS) y sus constantes. |
| `reapi_gamedll.inc` / `reapi_gamedll_const.inc` | Funciones enganchables a nivel de GameDLL (ReGameDLL_CS) y sus constantes. Solo se pueden usar con ReGameDLL_CS en marcha. |
| `cssdk_const.inc` | Constantes del SDK de Counter-Strike compartidas por las cabeceras anteriores. |
| `reapi_reunion.inc` | Enganches para [ReUnion](/es/docs/reunion), cuando está instalado. |
| `reapi_vtc.inc` | Enganches para la integración del antitrampas VTC, cuando está instalada. |
| `reapi_rechecker.inc` | Enganches para [ReChecker](/es/docs/rechecker), cuando está instalado. |

`reapi.inc` incluye todo lo anterior de forma automática: `reapi_engine.inc` solo tiene sentido con ReHLDS, y `reapi_gamedll.inc` solo con ReGameDLL_CS.

## Cadenas de enganches

Una cadena de enganches permite a tu plugin interceptar la llamada a una función del motor o de la GameDLL.

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

`function_id` es una de las constantes `RG_*` declaradas en `reapi_engine_const.inc` (funciones del motor) o en `reapi_gamedll_const.inc` (funciones de la GameDLL); consulta esas cabeceras para ver la lista completa y versionada de funciones enganchables y las firmas de sus callbacks.

### Valores devueltos por la cadena de enganches

Devuelve uno de estos valores desde tu callback para decidir qué ocurre a continuación:

| Constante | Efecto |
| --- | --- |
| `HC_CONTINUE` | El plugin no ha hecho nada; la ejecución continúa con normalidad. |
| `HC_SUPERCEDE` | Omite la función real y usa el valor definido con `SetHookChainReturn`. |
| `HC_BREAK` | Omite el resto de reenvíos **y** la función real, usando el valor devuelto que se haya definido. Salta los enganches de todos los plugins de AMXX posteriores: úsalo con cuidado. |
| `HC_BYPASS` | Omite las llamadas de todos los plugins de AMXX posteriores, pero sí llama a la función original. En `pre`, además salta los reenvíos de `post`. |

### Tipos de argumentos y de valores devueltos

`SetHookChainReturn`, `GetHookChainReturn` y `SetHookChainArg` reciben un valor `AType:` que indica cómo interpretar los argumentos siguientes:

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

## Acceso a miembros

Lee y escribe miembros internos de las estructuras (jugador, arma, granada, reglas de juego y más) por su nombre, en lugar de por un desplazamiento calculado a mano:

```pawn
set_member(entity, m_iSomeMember, value);
value = get_member(entity, m_iSomeMember);
```

De forma predeterminada, `set_member`/`get_member` se resuelven en las variantes `set_member_s`/`get_member_s`, que comprueban los límites. Define `MEMBER_UNSAFE` antes de `#include <reapi>` si necesitas las variantes sin comprobación, algo más rápidas, y entiendes el riesgo.

## Comprobaciones del entorno en ejecución

Úsalas para que un plugin se adapte al entorno real en el que se ejecuta, en lugar de darlo por supuesto:

| Nativa | Devuelve true cuando |
| --- | --- |
| `is_rehlds()` | El servidor ejecuta ReHLDS. |
| `is_regamedll()` | El servidor ejecuta ReGameDLL_CS. |
| `has_reunion()` | ReUnion está instalado. |
| `has_vtc()` | La integración del antitrampas VTC está instalada. |
| `has_rechecker()` | ReChecker está instalado. |

## Otras nativas útiles

| Nativa | Para qué sirve |
| --- | --- |
| `bool:FClassnameIs(entityIndex, const className[])` | Comprueba el classname de una entidad; también valida la propia entidad. |
| `WeaponIdType:GetGrenadeType(entityIndex)` | Devuelve el tipo de granada de una entidad. |
| `engset_view(index, viewEntity)` / `get_viewent(index)` | Obtiene y define la entidad desde la que ve el jugador. |
| `bool:is_entity(entityIndex)` | Comprueba si un índice corresponde a una entidad válida. |

Para la lista completa y actualizada de nativas y de identificadores de funciones enganchables, toma como referencia `reapi.inc`, `reapi_engine_const.inc` y `reapi_gamedll_const.inc` (instalados junto a tus plugins en `scripting/include`): se versionan a la vez que el binario que estás ejecutando.
