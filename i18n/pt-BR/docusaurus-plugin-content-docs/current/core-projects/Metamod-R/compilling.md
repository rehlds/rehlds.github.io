---
id: metamod-r-compilling
title: Compilação
sidebar_position: 5
description: O Metamod-R é uma versão otimizada do Metamod original, com mais desempenho e melhor compatibilidade para servidores de Half-Life 1.
slug: /metamod-r/compilling
---

<head>
  <title>Metamod-R: Compilação | ReHLDS</title>
</head>

# Instruções de compilação

### Verificação dos requisitos
Compilar o Metamod-r exige alguns pré-requisitos de software:

#### Windows
<pre>
Visual Studio 2015 (padrão C++14) ou posterior
</pre>

#### Linux
<pre>
git >= 1.8.5
cmake >= 3.10
GCC >= 4.9.2 (opcional)
ICC >= 15.0.1 20141023 (opcional)
LLVM (Clang) >= 6.0 (opcional)
</pre>

### Compilação

#### Windows
Use o `Visual Studio` para compilar: abra o `msvc/metamod.sln` e escolha `Release` ou `Debug` na lista de configurações da solução

#### Linux

* Opções adicionais com `build.sh --compiler=[gcc] --jobs=[N] -D[opção]=[ON ou OFF]` (sem os colchetes)

<pre>
-c=|--compiler=[icc|gcc|clang]  - Escolhe o compilador C/C++ preferido para a compilação
-j=|--jobs=[N]                  - Define quantas tarefas (comandos) rodam ao mesmo tempo (para compilar mais rápido)

<sub>Definições (-D)</sub>
DEBUG                           - Ativa o modo de depuração
USE_STATIC_LIBSTDC              - Ativa a ligação estática da biblioteca libstdc++
</pre>

* ICC          <pre>./build.sh --compiler=intel</pre>
* LLVM (Clang) <pre>./build.sh --compiler=clang</pre>
* GCC          <pre>./build.sh --compiler=gcc</pre>

##### Preparação do ambiente de compilação (Debian / Ubuntu)

<details>
<summary>Clique para expandir</summary>

<ul>
<li>
Instalação dos pacotes necessários
<pre>
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install -y gcc-multilib g++-multilib
sudo apt-get install -y build-essential
sudo apt-get install -y libc6-dev libc6-dev-i386
</pre>
</li>

<li>
Instalação do compilador C/C++ de sua preferência
<pre>
1) sudo apt-get install -y gcc g++
2) sudo apt-get install -y clang
</pre>
</li>
</ul>

</details>
