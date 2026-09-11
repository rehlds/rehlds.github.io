---
id: reapi-install
title: Instalação
sidebar_position: 2
description: ReAPI - módulo do AMX Mod X que disponibiliza APIs para o ReHLDS, o ReGameDLL e plugins do Metamod (por exemplo, ReUnion e ReVoice).
slug: /reapi/install
---

<head>
  <title>ReAPI: Instalação | ReHLDS</title>
</head>

# Instalação

O ReAPI é um módulo do AMX Mod X. Ele exige o AMX Mod X já instalado e funcionando, e se conecta às camadas abaixo dele, por isso a ordem de instalação importa.

## Antes de começar

Confirme que os itens a seguir já estão instalados e funcionando:

1. [ReHLDS](/pt-BR/docs/rehlds/install) — necessário para todos os hooks e membros do nível do motor.
2. Metamod-R (ou Metamod) e AMX Mod X.
3. [ReGameDLL_CS](/pt-BR/docs/regamedll-cs/install) — necessário apenas se os seus plugins usarem hooks ou membros do nível da GameDLL (`reapi_gamedll.inc`). Plugins puramente do nível do motor funcionam sem ele.

## 1. Baixe o ReAPI

Pegue o `reapi-bin-*.zip` do [lançamento mais recente](https://github.com/rehlds/ReAPI/releases/latest). O arquivo contém uma única pasta `addons/` com os binários das duas plataformas e os arquivos de include do Pawn.

## 2. Extraia no diretório do seu mod

Copie o conteúdo de `addons/amxmodx/` do arquivo para `<mod>/addons/amxmodx/`:

| No arquivo | Vai para | Finalidade |
| --- | --- | --- |
| `addons/amxmodx/modules/reapi_amxx.dll` | `<mod>/addons/amxmodx/modules/` | Binário do módulo para Windows. |
| `addons/amxmodx/modules/reapi_amxx_i386.so` | `<mod>/addons/amxmodx/modules/` | Binário do módulo para Linux. |
| `addons/amxmodx/scripting/include/reapi*.inc`, `cssdk_const.inc` | `<mod>/addons/amxmodx/scripting/include/` | Cabeçalhos do Pawn necessários para **compilar** plugins que usam o ReAPI. |

Você só precisa do binário correspondente à plataforma do seu servidor; os arquivos de include são independentes de plataforma e só são necessários na máquina onde você compila os plugins `.sma`.

## 3. Ative o módulo

A forma como o módulo é carregado depende da sua versão do AMX Mod X:

:::note

Em versões do AMX Mod X recentes o bastante para definir `AMXX_VERSION_NUM >= 175`, o próprio `reapi.inc` declara `#pragma reqlib reapi` / `#pragma loadlib reapi`. Qualquer plugin que faça `#include <reapi>` passa a exigir e carregar o módulo automaticamente — **sem necessidade de uma entrada manual no `modules.ini`**.

:::

Em builds mais antigas do AMX Mod X, acrescente você mesmo uma linha `reapi` ao `<mod>/addons/amxmodx/configs/modules.ini`, para que o módulo seja carregado na inicialização.

## 4. Verifique

Inicie o servidor e procure no log de inicialização do AMX Mod X (ou execute `meta list` / a listagem de módulos do AMXX no console) a confirmação de que o `ReAPI` foi carregado com sucesso. Se ele não carregar, confira de novo se você copiou o binário correspondente ao seu sistema e se o ReHLDS (e o ReGameDLL_CS, caso usado) realmente estão no lugar — o ReAPI depende deles em tempo de execução, e não apenas na compilação.

## Compilação de plugins com o ReAPI

Aponte o compilador do AMXX (`amxxpc`) para um diretório `scripting/include` que contenha os cabeçalhos do ReAPI copiados no passo 2 e depois é só fazer `#include <reapi>` no código do seu plugin. Veja as [Configurações](./settings.md) para conhecer as natives disponíveis e a API de cadeias de hooks.
