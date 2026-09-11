---
id: relocalizebugfix-compilling
title: Compilação
sidebar_position: 4
description: ReLocalizeBug Fix - plugin descontinuado do Metamod que bloqueava exploits de strings de localização nos nomes dos jogadores e no bate-papo em servidores ReHLDS.
slug: /relocalizebugfix/compilling
---

<head>
  <title>ReLocalizeBug Fix: Compilação | ReHLDS</title>
</head>

# Instruções de compilação

:::warning Descontinuado

Mantido como referência. O plugin não é mais mantido e é incompatível com as versões modernas do ReHLDS — leia [O que é o ReLocalizeBug Fix?](./index.md).

:::

### Verificação dos requisitos

**Windows**

- Visual Studio, para o `msvc/relocalizebugfix.sln`

**Linux**

- O compilador Intel C++ (`icpc`) — o `Makefile` fixa o caminho `/opt/intel/bin/icpc` e usa flags específicas da Intel (`-static-intel`, `-no-intel-extensions`, `-ipo`, `-fasm-blocks`). Compilar com GCC ou Clang exige removê-las.

Os cabeçalhos do CSSDK e do Metamod ficam embutidos em `cssdk/` e `metamod/`, então não há nada extra a baixar. Este projeto é anterior à configuração com CMake e `build.sh` usada nos projetos mantidos da organização.

### Clone do repositório

```bash
git clone https://github.com/rehlds/relocalizebugfix.git
cd relocalizebugfix
```

### Compilação no Windows

Abra o `msvc/relocalizebugfix.sln` no Visual Studio e compile. A saída é o `relocalizebugfix_mm.dll`.

### Compilação no Linux

```bash
make
```

A saída vai para `Release/`, como `relocalizebugfix_mm_i386.so`.

:::note

Binários pré-compilados estão versionados no repositório em `bin/`, então compilar raramente era necessário, mesmo quando o projeto estava ativo.

:::

Veja a [Instalação](./installing.md) para saber onde cada arquivo ia.
