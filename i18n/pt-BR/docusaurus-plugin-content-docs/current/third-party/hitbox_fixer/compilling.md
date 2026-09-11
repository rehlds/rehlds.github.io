---
id: hitbox-fixer-compilling
title: Compilação
sidebar_position: 4
description: Hitbox Fixer - plugin de terceiros para Metamod que corrige as hitboxes de jogador incorretas do lado do servidor no Counter-Strike 1.6, no Half-Life e no Adrenaline Gamer.
slug: /hitbox-fixer/compilling
---

<head>
  <title>Hitbox Fixer: Compilação | ReHLDS</title>
</head>

# Instruções de compilação

A maioria dos operadores de servidor deve usar uma [build de lançamento](https://github.com/Garey27/hitbox_fixer/releases). Compile a partir do código-fonte quando estiver testando uma alteração ainda não publicada ou precisando de uma build personalizada.

O projeto usa CMake puro — não há um invólucro `build.sh`. Os cabeçalhos do SDK de que ele precisa ficam embutidos em `include/`.

### Verificação dos requisitos

- CMake 3.18 ou mais recente
- Um conjunto de ferramentas de 32 bits — o plugin é compilado para `i386`, então um host de 64 bits precisa dos pacotes multilib
- Linux: GCC ou Clang, além do Ninja (o que a CI do projeto usa)
- Windows: Visual Studio com o conjunto de ferramentas da plataforma Win32

#### Preparação do ambiente de compilação (Debian / Ubuntu)

```bash
sudo apt-get update
sudo apt-get install -y git gcc-multilib g++-multilib ninja-build cmake
```

### Clone do repositório

```bash
git clone https://github.com/Garey27/hitbox_fixer.git
cd hitbox_fixer
```

### Compilação no Linux

```bash
cmake -B build -G Ninja -DCMAKE_BUILD_TYPE=Release
cmake --build build --config Release --parallel
```

### Compilação no Windows

Configure explicitamente para a plataforma Win32 — uma configuração padrão de 64 bits não produz um plugin utilizável:

```powershell
cmake -B build -A Win32 -DCMAKE_BUILD_TYPE=Release
cmake --build build --config Release --parallel
```

### Resultado

A compilação produz o `hitbox_fix_mm_i386.so` no Linux e o `hitbox_fix_mm.dll` no Windows. Veja a [Instalação](./installing.md) para saber onde cada um vai no servidor, e copie o `dist/hbf.cfg` junto.
