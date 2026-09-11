---
id: regamedll-cs-compilling
title: Compilação a partir do código-fonte
sidebar_position: 7
description: Compile o ReGameDLL_CS a partir do código-fonte no Windows ou no Linux.
slug: /regamedll-cs/compilling
---

# Compilação a partir do código-fonte

A maioria dos operadores de servidor deve usar um lançamento oficial. Compile a partir do código-fonte quando estiver desenvolvendo o ReGameDLL_CS, testando uma alteração ainda não publicada ou precisando de uma configuração de build personalizada.

## Requisitos

- Git 1.8.5 ou mais recente
- CMake 3.10 ou mais recente
- Windows: Visual Studio 2015 ou mais recente
- Linux: GCC 4.9.2 ou mais recente, ou Clang 6 ou mais recente
- Um conjunto de ferramentas capaz de gerar binários de 32 bits e as bibliotecas de desenvolvimento de 32 bits correspondentes

Consulte o README e a configuração de CI do repositório caso um branch mais novo eleve essas versões mínimas.

## Clone do repositório

```bash
git clone --recursive https://github.com/rehlds/ReGameDLL_CS.git
cd ReGameDLL_CS
```

Se você clonou sem o `--recursive`, inicialize os submódulos antes de compilar:

```bash
git submodule update --init --recursive
```

## Windows

Abra o `msvc/ReGameDLL.sln` no Visual Studio, escolha a configuração desejada e compile a solução. Use o `mp.dll` gerado como a GameDLL do servidor.

## Linux

O repositório fornece o `build.sh` como ponto de entrada oficial da compilação:

```bash
./build.sh --compiler=gcc --jobs=4
```

Para compilar com o Clang:

```bash
./build.sh --compiler=clang --jobs=4
```

Entre as opções de ambiente documentadas pelo projeto estão:

```bash
DEBUG=1 ./build.sh --compiler=gcc --jobs=4
USE_STATIC_LIBSTDC=1 ./build.sh --compiler=gcc --jobs=4
```

`DEBUG=1` gera uma build de depuração. `USE_STATIC_LIBSTDC=1` faz a ligação estática da biblioteca padrão de C++ onde isso é suportado.

## Preparação de uma build personalizada

Copie a GameDLL resultante primeiro para um servidor de testes:

- Windows: `cstrike/dlls/mp.dll` ou `czero/dlls/mp.dll`
- Linux: `cstrike/dlls/cs.so` ou `czero/dlls/cs.so`

Guarde uma cópia do binário anterior e teste sem plugins de terceiros antes de colocar em produção. Instantâneos do código-fonte podem conter mudanças que ainda não passaram por um ciclo de lançamento estável.
