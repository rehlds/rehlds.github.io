---
id: localizebugfix-install
title: Instalação
sidebar_position: 2
description: LocalizeBug Fix - plugin arquivado do Metamod, feito por s1lentq, que bloqueava exploits de strings de localização nos nomes dos jogadores e no bate-papo em servidores HLDS.
slug: /localizebugfix/install
---

<head>
  <title>LocalizeBug Fix: Instalação | ReHLDS</title>
</head>

# Instalação

:::warning Descontinuado

Estas instruções são mantidas como referência. O projeto está arquivado — leia [O que é o LocalizeBug Fix?](./index.md) e prefira o [SafeNameAndChat](/pt-BR/docs/safenameandchat/install) em um servidor atual.

:::

O LocalizeBug Fix era um plugin do Metamod, instalado como qualquer outro.

## 1. Obtenha o LocalizeBug Fix

O lançamento final é a [`2.4`](https://github.com/s1lentq/localizebugfix/releases), de setembro de 2015 (`localizebugfix_2_4.7z`). O repositório também traz binários pré-compilados das versões `2.0`, `2.3` e `2.4` em `bin/`.

## 2. Coloque o plugin no lugar

Copie o binário correspondente à sua plataforma para uma pasta dentro de `addons`:

| Plataforma | Arquivo |
| --- | --- |
| Windows | `localizebugfix.dll` |
| Linux | `localizebugfix_mm_i386.so` |

## 3. Registre o plugin no Metamod

Acrescente a linha correspondente ao `<mod>/addons/metamod/plugins.ini`.

:::note

O plugin se declarava carregável apenas na inicialização (`PT_STARTUP`) e nunca descarregável (`PT_NEVER`), então o `meta load` e o `meta unload` não funcionavam com ele — era preciso que estivesse presente quando o servidor iniciava, e removê-lo exigia reiniciar.

:::

## 4. Verifique

Inicie o servidor e execute `meta list` — o plugin se registrava como `LocalizeBug Fix`.
