---
id: rehlds-compilling
title: Compilação
sidebar_position: 5
description: O ReHLDS é uma versão reconstruída do HLDS original, com mais segurança, mais desempenho e melhores recursos de modding para jogos como Half-Life e Counter-Strike 1.6.
slug: /rehlds/compilling
---

<head>
  <title>ReHLDS: Compilação | ReHLDS</title>
</head>

# Instruções de compilação

A maioria dos operadores de servidor deve usar uma [versão oficial](https://github.com/rehlds/ReHLDS/releases). Compile a partir do código-fonte quando estiver desenvolvendo o ReHLDS, testando uma alteração ainda não publicada ou precisando de uma build personalizada.

### Verificação dos requisitos

Compilar o ReHLDS exige alguns pré-requisitos de software:

**Windows**

- Visual Studio 2015 (padrão C++14) ou posterior

**Linux**

- CMake 3.10 ou mais recente
- Um destes: GCC 4.9.2+, ICC 15.0.1 20141023+ ou Clang (LLVM) 6.0+

### Clone do repositório

```bash
git clone https://github.com/rehlds/ReHLDS.git
cd ReHLDS
```

### Compilação no Windows

Abra o `msvc/ReHLDS.sln` no Visual Studio, escolha `Release Swds` (ou `Debug Swds`, para uma build de depuração) entre as configurações da solução e compile.

:::note

O CMake não permite compilar no Windows — o `CMakeLists.txt` falha de propósito, com uma mensagem que aponta para o `msvc/ReHLDS.sln`. O CMake é usado apenas na compilação para Linux.

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

#### Preparação do ambiente de compilação (Debian / Ubuntu)

```bash
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install -y gcc-multilib g++-multilib
sudo apt-get install -y build-essential
sudo apt-get install -y libc6-dev libc6-dev-i386
sudo apt-get install -y cmake
```

Depois escolha um compilador:

```bash
sudo apt-get install -y gcc g++
# ou
sudo apt-get install -y clang
```

### Execução dos testes unitários

A CI do projeto compila e roda a suíte de testes unitários antes da compilação normal, usando um tipo de build específico do CMake:

```bash
cmake -DCMAKE_BUILD_TYPE=Unittests -B build
cmake --build build -j8
LD_LIBRARY_PATH="rehlds/lib/linux32:$LD_LIBRARY_PATH" ./build/rehlds/engine_i486
```

Um código de saída `0` ou `3` significa que a suíte passou; qualquer outro código indica falha em algum teste.

### Resultado

Uma compilação bem-sucedida no Linux produz o `engine_i486.so` (além dos binários do servidor dedicado, do HLTV e do filesystem) dentro de `build/`, na mesma disposição que é substituída durante a [instalação](./installing.md). No Windows, as DLLs e os EXEs compilados ficam na pasta `msvc/<Configuração>` correspondente.
