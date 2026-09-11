---
id: rechecker-compilling
title: "ReChecker: Compilação"
sidebar_label: Compilação
sidebar_position: 4
description: ReChecker é um plugin do Metamod que permite verificar os arquivos do cliente pelo nome e pelo hash md5.
slug: /rechecker/compilling
keywords:
  - rechecker
  - metamod
  - plugin
  - compilling
tags:
  - rechecker
  - compilling
last_update:
  date: 07/21/2025
  author: STAM
---

# Instruções de compilação

### Verificação dos requisitos

**Windows**

- Visual Studio (padrão C++14) ou posterior

**Linux**

- CMake 3.1 ou mais recente
- GCC (padrão) ou, opcionalmente, ICC ou Clang

### Clone do repositório

```bash
git clone https://github.com/rehlds/ReChecker.git
cd ReChecker
```

### Compilação no Windows

Abra o `msvc/rechecker.sln` no Visual Studio e compile. A saída é o `rechecker_mm.dll`.

### Compilação no Linux

Use o script `compile.sh` fornecido, que envolve o CMake:

```bash
./compile.sh
```

Ele cria um diretório `build/`, configura o projeto com o CMake e executa o `make`. Todos os argumentos extras são repassados ao CMake, então dá para ativar as opções de build do projeto:

```bash
./compile.sh -DDEBUG=ON               # build de depuração
./compile.sh -DUSE_CLANG_COMPILER=ON  # compila com Clang em vez de GCC
./compile.sh -DUSE_INTEL_COMPILER=ON  # compila com ICC
```

A compilação no Linux produz o `rechecker_mm_i386.so`.

Veja a [Instalação](./installing.md) para saber onde cada binário vai no servidor.
