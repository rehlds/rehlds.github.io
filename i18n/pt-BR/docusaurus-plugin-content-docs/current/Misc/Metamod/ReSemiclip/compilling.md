---
id: resemiclip-compilling
title: Compilação
sidebar_position: 4
description: ReSemiclip - plugin do Metamod que controla a possibilidade de atravessar outros jogadores. O módulo Semiclip de `joaquimandrade` foi usado como referência.
slug: /resemiclip/compilling
---

<head>
  <title>ReSemiclip: Compilação | ReHLDS</title>
</head>

# Instruções de compilação

### Verificação dos requisitos

**Windows**

- Visual Studio (padrão C++14) ou posterior

**Linux**

- CMake 3.1 ou mais recente
- Um destes: GCC (padrão), ICC ou Clang

### Clone do repositório

```bash
git clone https://github.com/rehlds/ReSemiclip.git
cd ReSemiclip
```

### Compilação no Windows

Abra o `msvc/resemiclip.sln` no Visual Studio e compile. A saída é o `resemiclip_mm.dll`.

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
| `DEBUG` | Gera uma build de depuração. |
| `USE_STATIC_LIBSTDC` | Faz a ligação estática da `libstdc++`. |

A compilação no Linux produz o `resemiclip_mm_i386.so`.

Veja a [Instalação](./installing.md) para saber onde cada binário vai no servidor, e copie junto o `dist/config.ini` e o `dist/maps/` se você estiver testando uma mudança no formato da configuração.
