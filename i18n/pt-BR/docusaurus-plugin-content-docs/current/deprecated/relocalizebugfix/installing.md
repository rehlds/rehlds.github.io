---
id: relocalizebugfix-install
title: Instalação
sidebar_position: 2
description: ReLocalizeBug Fix - plugin descontinuado do Metamod que bloqueava exploits de strings de localização nos nomes dos jogadores e no bate-papo em servidores ReHLDS.
slug: /relocalizebugfix/install
---

<head>
  <title>ReLocalizeBug Fix: Instalação | ReHLDS</title>
</head>

# Instalação

:::warning Descontinuado

Estas instruções são mantidas apenas como referência. O plugin é **incompatível com as versões modernas do ReHLDS** — leia [O que é o ReLocalizeBug Fix?](./index.md) e use o [SafeNameAndChat](/pt-BR/docs/safenameandchat/install) no lugar dele.

:::

O ReLocalizeBug Fix era um plugin do Metamod, instalado como qualquer outro.

## 1. Obtenha o ReLocalizeBug Fix

O lançamento final é a [`v2.8`](https://github.com/rehlds/relocalizebugfix/releases) (`relocalizebugfix-v2.8.zip`). O repositório também traz binários pré-compilados em `bin/`.

## 2. Coloque o plugin no lugar

Copie o binário correspondente à sua plataforma para `<mod>/addons/relocalizebugfix/`:

| Plataforma | Arquivo |
| --- | --- |
| Windows | `relocalizebugfix_mm.dll` |
| Linux | `relocalizebugfix_mm_i386.so` |

## 3. Registre o plugin no Metamod

Acrescente estas linhas ao seu arquivo `<mod>/addons/metamod/plugins.ini`:

```ini
win32 addons\relocalizebugfix\relocalizebugfix_mm.dll
linux addons/relocalizebugfix/relocalizebugfix_mm_i386.so
```

:::note

O plugin se declarava carregável apenas na inicialização (`PT_STARTUP`) e nunca descarregável (`PT_NEVER`), então o `meta load` e o `meta unload` não funcionavam com ele — era preciso que estivesse presente quando o servidor iniciava, e removê-lo exigia reiniciar.

:::

## 4. Verifique

Inicie o servidor e execute `meta list` — o plugin se registrava como `ReLocalizeBug Fix`. Em uma build moderna do ReHLDS, espere que ele funcione mal em vez de funcionar; isso é a incompatibilidade descrita na [página de visão geral](./index.md), e não um erro de instalação.
