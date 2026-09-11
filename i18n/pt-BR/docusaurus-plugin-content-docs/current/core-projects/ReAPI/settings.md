---
id: reapi-settings
title: Configurações
sidebar_position: 3
description: ReAPI - módulo do AMX Mod X que disponibiliza APIs para o ReHLDS, o ReGameDLL e plugins do Metamod (por exemplo, ReUnion e ReVoice).
slug: /reapi/settings
---

<head>
  <title>ReAPI: Configurações | ReHLDS</title>
</head>

# Configurações

O ReAPI não tem variáveis de console próprias — ele é uma API de scripting, não um plugin para o usuário final. "Configurar" o ReAPI significa usar as natives dele corretamente no seu código Pawn. Esta página cobre os blocos de construção.

## Arquivos de include

| Cabeçalho | Fornece |
| --- | --- |
| `reapi.inc` | Núcleo do módulo: natives de cadeias de hooks, macros de acesso a membros, verificações de capacidade. Inclua este; ele puxa os demais. |
| `reapi_engine.inc` / `reapi_engine_const.inc` | Funções do nível do motor (ReHLDS) passíveis de hook e as constantes delas. |
| `reapi_gamedll.inc` / `reapi_gamedll_const.inc` | Funções do nível da GameDLL (ReGameDLL_CS) passíveis de hook e as constantes delas. Só podem ser usadas quando o ReGameDLL_CS está em execução. |
| `cssdk_const.inc` | Constantes do SDK do Counter-Strike compartilhadas pelos cabeçalhos acima. |
| `reapi_reunion.inc` | Hooks para o [ReUnion](/pt-BR/docs/reunion), quando instalado. |
| `reapi_vtc.inc` | Hooks para a integração com o anticheat VTC, quando instalada. |
| `reapi_rechecker.inc` | Hooks para o [ReChecker](/pt-BR/docs/rechecker), quando instalado. |

O `reapi.inc` inclui todos os anteriores automaticamente — o `reapi_engine.inc` só faz sentido com o ReHLDS, e o `reapi_gamedll.inc` apenas com o ReGameDLL_CS.

## Cadeias de hooks

Uma cadeia de hooks permite que o seu plugin intercepte a chamada de uma função do motor ou da GameDLL.

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

O `function_id` é uma das constantes `RG_*` declaradas em `reapi_engine_const.inc` (funções do motor) ou em `reapi_gamedll_const.inc` (funções da GameDLL) — consulte esses cabeçalhos para ver a lista completa e versionada das funções passíveis de hook e das assinaturas de callback delas.

### Tipos de retorno das cadeias de hooks

Retorne um destes valores do seu callback para controlar o que acontece em seguida:

| Constante | Efeito |
| --- | --- |
| `HC_CONTINUE` | O plugin não tomou nenhuma ação; siga normalmente. |
| `HC_SUPERCEDE` | Pula a função real; usa no lugar dela o valor definido por `SetHookChainReturn`. |
| `HC_BREAK` | Pula todos os forwards restantes **e** a função real; usa o valor de retorno definido. Pula o hook de todos os plugins AMXX seguintes — use com cuidado. |
| `HC_BYPASS` | Pula as chamadas de todos os plugins AMXX seguintes, mas ainda chama a função original. Em `pre`, também pula os forwards de `post`. |

### Tipos de argumento e de retorno

`SetHookChainReturn`, `GetHookChainReturn` e `SetHookChainArg` recebem um valor `AType:` que descreve como interpretar os argumentos seguintes:

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

## Acesso a membros

Leia e escreva membros internos das structs (jogador, arma, granada, regras do jogo e outros) pelo nome, em vez de por um offset calculado à mão:

```pawn
set_member(entity, m_iSomeMember, value);
value = get_member(entity, m_iSomeMember);
```

Por padrão, `set_member`/`get_member` resolvem para as variantes `set_member_s`/`get_member_s`, com verificação de limites. Defina `MEMBER_UNSAFE` antes do `#include <reapi>` se você precisar das variantes sem verificação, um pouco mais rápidas, e entender o risco.

## Verificações de capacidade em tempo de execução

Use-as para que um plugin se adapte à pilha que de fato está rodando, em vez de presumir:

| Native | Retorna verdadeiro quando |
| --- | --- |
| `is_rehlds()` | O servidor está rodando o ReHLDS. |
| `is_regamedll()` | O servidor está rodando o ReGameDLL_CS. |
| `has_reunion()` | O ReUnion está instalado. |
| `has_vtc()` | A integração com o anticheat VTC está instalada. |
| `has_rechecker()` | O ReChecker está instalado. |

## Outras natives utilitárias

| Native | Finalidade |
| --- | --- |
| `bool:FClassnameIs(entityIndex, const className[])` | Verifica o classname de uma entidade; também valida a entidade. |
| `WeaponIdType:GetGrenadeType(entityIndex)` | Retorna o tipo de granada de uma entidade. |
| `engset_view(index, viewEntity)` / `get_viewent(index)` | Lê ou define a entidade de visão de um jogador. |
| `bool:is_entity(entityIndex)` | Verifica se um índice corresponde a uma entidade válida. |

Para a lista completa e atualizada de natives e de IDs de funções passíveis de hook, trate o `reapi.inc`, o `reapi_engine_const.inc` e o `reapi_gamedll_const.inc` (instalados junto do `scripting/include` dos seus plugins) como fonte definitiva — eles são versionados junto com o binário que você está executando.
