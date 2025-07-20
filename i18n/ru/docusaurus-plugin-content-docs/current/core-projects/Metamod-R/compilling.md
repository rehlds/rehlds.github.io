---
id: metamod-r-compilling
title: Инструкция по сборке
sidebar_position: 5
description: Metamod-r is an optimized version of the original Metamod, enhancing performance and compatibility for Half-Life 1 servers.
slug: /metamod-r/compilling
---

<head>
  <title>Metamod-R: Инструкция по сборке | ReHLDS</title>
</head>

# Инструкция по сборке

### Проверка требований
Для сборки Metamod-r существует несколько программных требований:

#### Windows
<pre>
Visual Studio 2015 (C++14 standard) and later
</pre>

#### Linux
<pre>
git >= 1.8.5
cmake >= 3.10
GCC >= 4.9.2 (Optional)
ICC >= 15.0.1 20141023 (Optional)
LLVM (Clang) >= 6.0 (Optional)
</pre>

### Building

#### Windows
Используйте `Visual Studio` для сборки, откройте `msvc/metamod.sln` и просто выберите из списка конфигураций решения `Release` или `Debug`.

#### Linux

* Дополнительные параметры с использованием `build.sh --compiler=[gcc] --jobs=[N] -D[option]=[ON или OFF]` (без квадратных скобок)

<pre>
-c=|--compiler=[icc|gcc|clang]  - Выберите предпочтительный компилятор C/C++ для сборки
-j=|--jobs=[N]                  - Указывает количество заданий (команд), которые нужно выполнить одновременно (для более быстрой сборки)

<sub>Definitions (-D)</sub>
DEBUG                           - Включает режим отладки
USE_STATIC_LIBSTDC              - Включает статическую линковку библиотеки libstdc++
</pre>

* ICC          <pre>./build.sh --compiler=intel</pre>
* LLVM (Clang) <pre>./build.sh --compiler=clang</pre>
* GCC          <pre>./build.sh --compiler=gcc</pre>

##### Проверка среды сборки (Debian / Ubuntu)

<details>
<summary>Нажмите, чтобы развернуть</summary>

<ul>
<li>
Установка необходимых пакетов
<pre>
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install -y gcc-multilib g++-multilib
sudo apt-get install -y build-essential
sudo apt-get install -y libc6-dev libc6-dev-i386
</pre>
</li>

<li>
Выберите предпочтительную установку компилятора C/C++
<pre>
1) sudo apt-get install -y gcc g++
2) sudo apt-get install -y clang
</pre>
</li>
</ul>

</details>