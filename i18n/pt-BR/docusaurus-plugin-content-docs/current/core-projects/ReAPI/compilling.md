---
id: reapi-compilling
title: Compilação
sidebar_position: 4
description: ReAPI - módulo do AMX Mod X que disponibiliza APIs para o ReHLDS, o ReGameDLL e plugins do Metamod (por exemplo, ReUnion e ReVoice).
slug: /reapi/compilling
---

<head>
  <title>ReAPI: Compilação | ReHLDS</title>
</head>

# Instruções de compilação

A maioria dos usuários deve usar uma [versão oficial](https://github.com/rehlds/ReAPI/releases). Compile a partir do código-fonte quando estiver desenvolvendo o próprio ReAPI, testando uma alteração ainda não publicada ou precisando de uma build personalizada.

### Verificação dos requisitos

Compilar o ReAPI exige alguns pré-requisitos de software:

**Windows**

- Visual Studio 2015 (padrão C++14) ou posterior

**Linux**

- Git 1.8.5 ou mais recente
- CMake 3.10 ou mais recente
- Um destes: GCC 4.9.2+, ICC 15.0.1 20141023+ ou Clang (LLVM) 6.0+

### Clone do repositório

```bash
git clone https://github.com/rehlds/ReAPI.git
cd ReAPI
```

### Compilação no Windows

Abra o `msvc/reapi.sln` no Visual Studio, escolha `Release` (ou `Debug`) entre as configurações da solução e compile. A saída é o `reapi_amxx.dll`.

:::note

O CMake não permite compilar no Windows — o `CMakeLists.txt` falha de propósito, com uma mensagem que aponta para o `msvc/reapi.sln`. O CMake é usado apenas na compilação para Linux.

:::

### Compilação no Linux

Use o script `build.sh` fornecido, passando opcionalmente o compilador preferido e a quantidade de tarefas paralelas:

```bash
./build.sh --compiler=[gcc|icc|clang] --jobs=[N]
```

Por exemplo:

```bash
./build.sh --compiler=gcc --jobs=4    # GCC
./build.sh --compiler=intel           # ICC
./build.sh --compiler=clang           # Clang / LLVM
```

Também é possível passar definições do CMake pelo `build.sh` com `-D<opção>=[ON|OFF]`:

| Definição | Efeito |
| --- | --- |
| `DEBUG` | Ativa o modo de depuração. |
| `USE_STATIC_LIBSTDC` | Faz a ligação estática da `libstdc++`. |

A compilação no Linux produz o `reapi_amxx_i386.so`.

#### Preparação do ambiente de compilação (Debian / Ubuntu)

```bash
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install -y gcc-multilib g++-multilib
sudo apt-get install -y build-essential
sudo apt-get install -y libc6-dev libc6-dev-i386
```

Depois escolha um compilador:

```bash
sudo apt-get install -y gcc g++
# ou
sudo apt-get install -y clang
```

### Preparação de uma build personalizada

Um lançamento também traz, junto do binário, os cabeçalhos do Pawn de `reapi/extra/amxmodx/scripting/include/` — copie-os também se você estiver testando uma build que alterou a API pública. Veja a [Instalação](./installing.md) para saber onde cada arquivo vai no servidor.
