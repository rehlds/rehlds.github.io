---
id: hitboxtracker-install
title: Instalação
sidebar_position: 2
description: hitboxtracker - ferramenta de desenvolvimento descontinuada do ReHLDS que desenhava no cliente as posições das hitboxes calculadas pelo servidor.
slug: /hitboxtracker/install
---

<head>
  <title>hitboxtracker: Instalação | ReHLDS</title>
</head>

# Instalação

:::warning Descontinuado

Estas instruções são mantidas como referência. O hitboxtracker não é mais mantido — leia [O que é o hitboxtracker?](./index.md) antes de usar qualquer coisa daqui, e prefira o [Hitbox Fixer](/pt-BR/docs/hitbox-fixer) em um servidor atual.

:::

O hitboxtracker exigia **as duas** metades instaladas: um plugin no servidor e um módulo no cliente. Instalar apenas uma delas não fazia nada.

## Requisitos

- Cliente: Counter-Strike 1.6 build `4554` ou posterior.
- Servidor: Metamod `1.20` ou posterior.

## 1. Obtenha o hitboxtracker

Baixe o `hitboxtracker.zip` na [página de lançamentos](https://github.com/rehlds/hitboxtracker/releases). O arquivo contém as duas metades:

| Caminho no arquivo | Finalidade |
| --- | --- |
| `server/cstrike/addons/hitboxtracker/hitboxtracker_mm.dll` | Plugin de servidor, Windows. |
| `server/cstrike/addons/hitboxtracker/hitboxtracker_mm_i386.so` | Plugin de servidor, Linux. |
| `client/hitboxtracker.dll` | Módulo de renderização do lado do cliente. |
| `client/cs.exe` | O lançador próprio do projeto, que carrega esse módulo. |

## 2. Instale o plugin do servidor

Copie o binário correspondente à sua plataforma para `<mod>/addons/hitboxtracker/` e registre-o no `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\hitboxtracker\hitboxtracker_mm.dll
linux addons/hitboxtracker/hitboxtracker_mm_i386.so
```

## 3. Instale o módulo do cliente

Coloque o `hitboxtracker.dll` e o `cs.exe` no diretório de trabalho do cliente de Counter-Strike 1.6 e inicie o jogo pelo `cs.exe`, e não pelo atalho normal — é o lançador que carrega o módulo.

## 4. Verifique

Entre em um servidor que rode o plugin e defina a `r_drawentities` como `6` ou `7`. Se a renderização extra das hitboxes não aparecer, ou o cliente foi iniciado sem o lançador, ou o plugin do servidor não está carregado — confira com o `meta list` no servidor.

Veja as [Configurações](./settings.md) para saber o que cada valor da `r_drawentities` faz.
