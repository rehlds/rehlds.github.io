---
id: refreelook-install
title: "ReFreeLook: Instalação"
sidebar_label: Instalação
sidebar_position: 2
description: ReFreeLook - módulo do AMX Mod X que permite aos administradores em modo espectador usar qualquer modo de câmera, independentemente do valor de `mp_forcecamera` ou `mp_forcechasecam`. Funciona apenas com a versão mais recente do `ReGameDLL_CS`.
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

# Instalação

O ReFreeLook é um **módulo** do AMX Mod X (e não um plugin do Metamod) e exige a versão mais recente do [ReGameDLL_CS](/pt-BR/docs/regamedll-cs/install) e o AMX Mod X já instalados e funcionando.

## 1. Obtenha o ReFreeLook

Baixe uma build na [página de lançamentos](https://github.com/rehlds/ReFreeLook/releases) ou [compile-o a partir do código-fonte](./compilling.md).

## 2. Pare o servidor

Pare o seu servidor antes de instalar ou atualizar — seja esta a primeira instalação ou uma atualização.

## 3. Coloque o módulo no lugar

Copie o binário correspondente à sua plataforma para a pasta de módulos do AMX Mod X do seu mod:

| Plataforma | Arquivo | Destino |
| --- | --- | --- |
| Windows | `refreelook_amxx.dll` | `<mod>/addons/amxmodx/modules/refreelook_amxx.dll` |
| Linux | `refreelook_amxx_i386.so` | `<mod>/addons/amxmodx/modules/refreelook_amxx_i386.so` |

## 4. Registre o módulo

Abra o `<mod>/addons/amxmodx/configs/modules.ini` e acrescente uma linha ao final:

```text
refreelook
```

## 5. Configure as cvars de jogo

O ReFreeLook só faz diferença quando as câmeras dos espectadores estão de fato restringidas:

- Defina `mp_forcechasecam` e `mp_forcecamera` com o **mesmo** valor.
- Confirme que a `mp_fadetoblack` está em `0`.

## 6. Configure o acesso dos administradores

Defina a `afl_admin_access_flags` com a flag (ou as flags) de acesso que devem ficar isentas da restrição de câmera. Veja as [Configurações](./settings.md) para a lista de flags e o valor padrão.

## 7. Inicie o servidor

Inicie o servidor e confirme que o módulo foi carregado (procure por `refreelook` na lista de módulos do AMX Mod X, no console ou no log).
