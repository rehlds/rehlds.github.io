---
id: revoice-install
title: Instalação
sidebar_position: 2
description: ReVoice - plugin do Metamod, transcodificador de voz que corrige o bate-papo por voz entre clientes Steam e não Steam em servidores ReHLDS.
slug: /revoice/install
---

<head>
  <title>ReVoice: Instalação | ReHLDS</title>
</head>

# Instalação

:::warning Descontinuado

O ReVoice foi marcado como **descontinuado** pelos mantenedores dele — leia [O que é o ReVoice?](./index.md) antes de colocá-lo em um servidor de produção.

:::

O ReVoice é um plugin do Metamod e exige o [ReHLDS](/pt-BR/docs/rehlds/install) e o Metamod (o Metamod-R é o recomendado) já instalados e funcionando.

## 1. Obtenha o ReVoice

Baixe um lançamento na [página de lançamentos](https://github.com/rehlds/ReVoice/releases) ou [compile-o a partir do código-fonte](./compilling.md).

## 2. Coloque o plugin no lugar

Crie uma pasta `revoice` dentro de `addons`, no diretório do seu mod, e ponha ali o binário correspondente à sua plataforma:

| Plataforma | Arquivo | Destino |
| --- | --- | --- |
| Windows | `revoice_mm.dll` | `<mod>/addons/revoice/revoice_mm.dll` |
| Linux | `revoice_mm_i386.so` | `<mod>/addons/revoice/revoice_mm_i386.so` |

## 3. Registre o plugin no Metamod

Acrescente uma linha ao `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\revoice\revoice_mm.dll
linux addons/revoice/revoice_mm_i386.so
```

## 4. Adicione o arquivo de configuração

Copie o [`data/revoice.cfg`](https://github.com/rehlds/ReVoice/blob/master/data/revoice.cfg) do projeto para junto do binário: `<mod>/addons/revoice/revoice.cfg`. O ReVoice executa (`exec`) esse arquivo na inicialização, então ele usa a sintaxe normal de config de servidor (atribuições simples de cvars, comentários com `//`) — veja as [Configurações](./settings.md).

## 5. Ative o bate-papo por voz e verifique

Confirme que a `sv_voiceenable` está ativada no servidor. Inicie-o e execute `meta list` — o `Revoice` deve aparecer na lista como carregado. Execute `rev version` e `rev status` no console para confirmar que ele está ativo e ver o estado atual.
