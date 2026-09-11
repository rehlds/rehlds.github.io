---
id: refreelook-compilling
title: "ReFreeLook: Compilação"
sidebar_label: Compilação
sidebar_position: 4
description: ReFreeLook - módulo do AMX Mod X que permite aos administradores em modo espectador usar qualquer modo de câmera, independentemente do valor de `mp_forcecamera` ou `mp_forcechasecam`. Funciona apenas com a versão mais recente do `ReGameDLL_CS`.
slug: /refreelook/compilling
keywords:
  - refreelook
  - AMX Mod X
  - amxx
  - amx
  - module
  - compilling
tags:
  - refreelook
  - compilling
last_update:
  date: 07/21/2025
  author: STAM
---

# Instruções de compilação

Diferentemente dos outros plugins da organização ReHLDS, o ReFreeLook é compilado com um `Makefile` simples no Linux (sem CMake) e com uma solução do Visual Studio no Windows. Os cabeçalhos do Metamod e do CSSDK de que ele precisa ficam embutidos em `include/` — não há nada extra a baixar.

### Verificação dos requisitos

**Windows**

- Visual Studio (padrão C++11) ou posterior

**Linux**

- O compilador Intel C++ (`icpc`), ou Clang/GCC com a variável `COMPILER` do Makefile ajustada

### Clone do repositório

```bash
git clone https://github.com/rehlds/ReFreeLook.git
cd ReFreeLook
```

### Compilação no Windows

Abra o `msvc/refreelook.sln` no Visual Studio e compile. A saída é o `refreelook_amxx.dll`.

### Compilação no Linux

O `Makefile` usa por padrão o compilador da Intel (`/opt/intel/bin/icpc`). Se você não tiver o ICC instalado, sobrescreva a `COMPILER` na linha de comando:

```bash
make COMPILER=clang
```

O GCC também funciona com uma pequena edição no Makefile, caso você também não tenha o Clang — as flags do Makefile foram escritas especificamente para o ICC e o Clang. A compilação produz o `refreelook_amxx_i386.so` dentro de `Release/`.

```bash
make clean   # remove os artefatos da compilação
```

Veja a [Instalação](./installing.md) para saber onde o binário vai no servidor.
