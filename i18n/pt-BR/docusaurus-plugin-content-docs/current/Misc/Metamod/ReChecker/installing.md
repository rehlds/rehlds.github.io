---
id: rechecker-install
title: "ReChecker: Instalação"
sidebar_label: Instalação
sidebar_position: 2
description: ReChecker é um plugin do Metamod que permite verificar os arquivos do cliente pelo nome e pelo hash md5.
slug: /rechecker/install
keywords:
  - rechecker
  - metamod
  - plugin
  - install
tags:
  - rechecker
  - install
last_update:
  date: 07/21/2025
  author: STAM
---

# Instalação

O ReChecker é um plugin do Metamod e exige que o [ReHLDS](/pt-BR/docs/rehlds/install) e o Metamod (o Metamod-R é o recomendado) já estejam instalados e funcionando.

## 1. Obtenha o ReChecker

Baixe uma build na [página de lançamentos](https://github.com/rehlds/ReChecker/releases) ou [compile-o a partir do código-fonte](./compilling.md).

## 2. Coloque o plugin no lugar

Crie uma pasta `rechecker` dentro de `addons`, no diretório do seu mod, e ponha ali o binário correspondente à sua plataforma:

| Plataforma | Arquivo | Destino |
| --- | --- | --- |
| Windows | `rechecker_mm.dll` | `<mod>/addons/rechecker/rechecker_mm.dll` |
| Linux | `rechecker_mm_i386.so` | `<mod>/addons/rechecker/rechecker_mm_i386.so` |

## 3. Adicione o arquivo de regras

Copie o modelo [`dist/resources.ini`](https://github.com/rehlds/ReChecker/blob/master/dist/resources.ini) do projeto para junto do binário:

```text
<mod>/addons/rechecker/resources.ini
```

O ReChecker lê o `resources.ini` do mesmo diretório do próprio binário, e não da raiz do mod. Veja as [Configurações](./settings.md) para conhecer o formato do arquivo.

## 4. Registre o plugin no Metamod

Acrescente uma linha ao `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\rechecker\rechecker_mm.dll
linux addons/rechecker/rechecker_mm_i386.so
```

## 5. Verifique

Inicie o servidor e execute `meta list` no console — o `Rechecker` deve aparecer na lista como carregado. Se ele não carregar, confirme que o servidor está mesmo rodando o ReHLDS (o ReChecker usa a API estendida do motor do ReHLDS e se recusa a carregar no HLDS puro).
