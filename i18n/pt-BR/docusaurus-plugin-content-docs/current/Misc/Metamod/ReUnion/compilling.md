---
id: reunion-compilling
title: Compilação
sidebar_position: 4
description: ReUnion - plugin do Metamod que permite a clientes não Steam dos protocolos 47 e 48 se conectarem a servidores ReHLDS.
slug: /reunion/compilling
---

<head>
  <title>ReUnion: Compilação | ReHLDS</title>
</head>

# Instruções de compilação

### Verificação dos requisitos

**Windows**

- Visual Studio 2015 (padrão C++14) ou posterior

**Linux**

- CMake 3.10 ou mais recente
- Um destes: GCC 4.9.2+, ICC 15.0.1 20141023+ ou Clang (LLVM) 6.0+

### Clone do repositório

```bash
git clone https://github.com/rehlds/ReUnion.git
cd ReUnion
```

### Compilação no Windows

Abra o `msvc/Reunion.sln` no Visual Studio, escolha `Release` (ou `Debug`) e compile. A saída é o `reunion_mm.dll`.

:::note

O CMake não permite compilar no Windows — o `CMakeLists.txt` falha de propósito, com uma mensagem que aponta para o `msvc/Reunion.sln`. O CMake é usado apenas na compilação para Linux.

:::

### Compilação no Linux

Use o script `build.sh` fornecido:

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
```

Depois escolha um compilador:

```bash
sudo apt-get install -y gcc g++
# ou
sudo apt-get install -y clang
```

A compilação no Linux produz o `reunion_mm_i386.so`. Veja a [Instalação](./installing.md) para saber onde cada binário e o `reunion.cfg` vão no servidor.
