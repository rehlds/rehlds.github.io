---
id: safenameandchat-compilling
title: Compilação
sidebar_position: 4
description: SafeNameAndChat - plugin de terceiros para Metamod que neutraliza exploits de strings de localização e de injeção de comandos nos nomes dos jogadores e nas mensagens de bate-papo.
slug: /safenameandchat/compilling
---

<head>
  <title>SafeNameAndChat: Compilação | ReHLDS</title>
</head>

# Instruções de compilação

A maioria dos operadores de servidor deve usar uma [build de lançamento](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/releases). Compile a partir do código-fonte quando estiver testando uma alteração ainda não publicada ou precisando de uma build personalizada. Os cabeçalhos do HLSDK de que o plugin precisa ficam embutidos em `hlsdk/`.

### Verificação dos requisitos

**Windows**

- Visual Studio 2015 (padrão C++14) ou posterior

**Linux**

- Git 1.8.5 ou mais recente
- CMake 3.10 ou mais recente
- Um destes: GCC 4.9.2+, ICC 15.0.1 20141023+ ou Clang (LLVM) 6.0+

### Clone do repositório

```bash
git clone https://github.com/WPMGPRoSToTeMa/SafeNameAndChat.git
cd SafeNameAndChat
```

### Compilação no Windows

Abra o `SafeNameAndChat.sln` no Visual Studio, escolha `Release` (ou `Debug`) entre as configurações da solução e a plataforma **x86**, e então compile.

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

### Resultado

A compilação produz o `SafeNameAndChat.so` no Linux e o `SafeNameAndChat.dll` no Windows. Veja a [Instalação](./installing.md) para saber onde cada um vai no servidor e lembre-se de copiar o `SafeNameAndChat.cfg` para junto dele — o plugin procura a configuração no próprio diretório.
