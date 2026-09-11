---
id: reapi
title: ReAPI
sidebar_position: 1
description: ReAPI - módulo do AMX Mod X que disponibiliza APIs para o ReHLDS, o ReGameDLL e plugins do Metamod (por exemplo, ReUnion e ReVoice).
slug: /reapi
---

# O que é o ReAPI?

O ReAPI é um módulo do AMX Mod X que expõe as entranhas do [ReHLDS](/pt-BR/docs/rehlds) e do [ReGameDLL_CS](/pt-BR/docs/regamedll-cs) aos plugins em Pawn na forma de natives comuns, em vez de obrigar os autores de plugins a aplicar patches em offsets de memória ou a fazer engenharia reversa das estruturas por conta própria. Ele dá ao código Pawn um acesso seguro e versionado a comportamentos do motor e da GameDLL que o AMX Mod X e o Metamod puros não alcançam.

## O que ele oferece

- **Cadeias de hooks** — intercepte funções do motor (ReHLDS) e da GameDLL (ReGameDLL_CS) em `pre` e `post`, com controle refinado sobre o valor de retorno e até sobre os argumentos da função original.
- **Acesso a membros** — leia e escreva membros internos das structs do motor e da GameDLL (jogador, arma, granada, regras do jogo e outros) pelo nome, em vez de por um offset calculado à mão.
- **Verificações de capacidade em tempo de execução** — natives como `is_rehlds()`, `is_regamedll()`, `has_reunion()`, `has_vtc()` e `has_rechecker()` permitem que um plugin se adapte à pilha que de fato está rodando.
- **Cabeçalhos de integração opcionais** — `reapi_reunion.inc`, `reapi_vtc.inc` e `reapi_rechecker.inc` expõem hooks para o [ReUnion](/pt-BR/docs/reunion), para o anticheat VTC e para o [ReChecker](/pt-BR/docs/rechecker) quando eles estão instalados.

## Requisitos em resumo

- AMX Mod X, rodando sobre o Metamod-R (ou o Metamod) e o [ReHLDS](/pt-BR/docs/rehlds/install). Os hooks e membros do nível do motor exigem o ReHLDS.
- [ReGameDLL_CS](/pt-BR/docs/regamedll-cs/install), se o seu plugin usar hooks ou membros do nível da GameDLL (`reapi_gamedll.inc`). Plugins puramente do nível do motor funcionam sem ele.

Veja a [Instalação](./installing.md) para conhecer os passos exatos de configuração.

## Um exemplo mínimo

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

Isso aplica um hook em `CBasePlayer::GiveAmmo`, do lado da GameDLL, e registra cada chamada sem alterar o comportamento (`HC_CONTINUE`). Veja as [Configurações](./settings.md) para conhecer a API completa das cadeias de hooks e os tipos de retorno e argumento disponíveis.

## Por onde continuar

- [Instalação](./installing.md) — instale o módulo e ative-o nos seus plugins.
- [Configurações](./settings.md) — a API de cadeias de hooks e de acesso a membros, com as natives que você realmente vai chamar.
- [Compilação](./compilling.md) — compile o ReAPI a partir do código-fonte.
- [Créditos](./credits.md) — licença e links do projeto.
