---
id: revoice-compilling
title: Compilação
sidebar_position: 4
description: ReVoice - plugin do Metamod, transcodificador de voz que corrige o bate-papo por voz entre clientes Steam e não Steam em servidores ReHLDS.
slug: /revoice/compilling
---

<head>
  <title>ReVoice: Compilação | ReHLDS</title>
</head>

# Instruções de compilação

Diferentemente dos outros plugins da organização ReHLDS, o ReVoice usa uma configuração moderna com CMake (3.21+) e [CMake Presets](https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html), em vez de um invólucro `build.sh`.

### Verificação dos requisitos

- CMake 3.21 ou mais recente
- [Ninja](https://ninja-build.org/) (usado pelos presets do Ninja Multi-Config)
- Windows: Visual Studio 2022 ou Clang
- Linux: GCC ou Clang

As dependências Speex, SILK, Opus, `rehlsdk` e o SDK do Metamod ficam embutidas em `external/` — não há submódulos do git a inicializar.

### Clone do repositório

```bash
git clone https://github.com/rehlds/ReVoice.git
cd ReVoice
```

### Compilação no Linux

```bash
cmake --preset ninja-gcc-linux
cmake --build --preset ninja-gcc-linux-release
```

Troque `gcc` por `clang` para usar o Clang (`ninja-clang-linux`). Também há um contêiner de desenvolvimento pronto para uso (`.devcontainer/`, Ubuntu 24.04 com GCC/Clang), caso você prefira não montar o conjunto de ferramentas por conta própria.

### Compilação no Windows

```powershell
cmake --preset vs2022-msvc-windows
cmake --build --preset vs2022-msvc-windows-release
```

Troque `msvc` por `clang` para compilar com o Clang (`vs2022-clang-windows`). Você também pode abrir diretamente a solução do Visual Studio gerada depois do passo `cmake --preset`.

### Resultado

As duas plataformas produzem o `revoice_mm.dll` (Windows) ou o `revoice_mm_i386.so` (Linux) dentro de `bin/<compilador>-<configuração>/`. Veja a [Instalação](./installing.md) para saber onde ele vai no servidor.
