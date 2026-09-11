---
id: localizebugfix-compilling
title: Compilação
sidebar_position: 4
description: LocalizeBug Fix - plugin arquivado do Metamod, feito por s1lentq, que bloqueava exploits de strings de localização nos nomes dos jogadores e no bate-papo em servidores HLDS.
slug: /localizebugfix/compilling
---

<head>
  <title>LocalizeBug Fix: Compilação | ReHLDS</title>
</head>

# Instruções de compilação

:::warning Descontinuado

Mantido como referência. O repositório está arquivado no GitHub e não aceita pull requests — leia [O que é o LocalizeBug Fix?](./index.md).

:::

### Verificação dos requisitos

**Windows**

- Visual Studio, para o `msvc/localizebugfix.sln`

**Linux**

- O compilador Intel C++ (`icpc`) — o `Makefile` fixa o caminho `/opt/intel/bin/icpc` e usa flags específicas da Intel (`-static-intel`, `-no-intel-extensions`, `-ipo`). Compilar com GCC ou Clang exige remover essas flags.

Os cabeçalhos do HLSDK e do Metamod ficam embutidos em `sdk/`, então não há nada extra a baixar.

### Clone do repositório

```bash
git clone https://github.com/s1lentq/localizebugfix.git
cd localizebugfix
```

### Compilação no Windows

Abra o `msvc/localizebugfix.sln` no Visual Studio e compile. A saída é o `localizebugfix.dll`.

### Compilação no Linux

```bash
make
```

A saída é o `localizebugfix_mm_i386.so`.

:::note

Binários pré-compilados das versões `2.0`, `2.3` e `2.4` estão versionados no repositório em `bin/`, então compilar raramente era necessário, mesmo quando o projeto estava ativo.

:::

Veja a [Instalação](./installing.md) para saber onde cada arquivo ia.
