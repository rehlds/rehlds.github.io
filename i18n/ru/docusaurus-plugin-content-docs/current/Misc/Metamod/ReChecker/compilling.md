---
id: rechecker-compilling
title: "ReChecker: Инструкция по сборке"
sidebar_label: Инструкция по сборке
sidebar_position: 4
description: ReChecker — плагин Metamod, который дает возможность проверять клиентские файлы по их имени и md5-хешу.
slug: /rechecker/compilling
keywords:
  - rechecker
  - metamod
  - plugin
  - compilling
tags:
  - rechecker
  - compilling
last_update:
  date: 07/21/2025
  author: STAM
---

# Инструкция по сборке

### Проверка требований

**Windows**

- Visual Studio (стандарт C++14) или новее

**Linux**

- CMake 3.1 или новее
- GCC (по умолчанию), при желании ICC или Clang

### Клонирование репозитория

```bash
git clone https://github.com/rehlds/ReChecker.git
cd ReChecker
```

### Сборка под Windows

Откройте `msvc/rechecker.sln` в Visual Studio и выполните сборку. На выходе получится `rechecker_mm.dll`.

### Сборка под Linux

Используйте штатный скрипт `compile.sh`, который является обёрткой над CMake:

```bash
./compile.sh
```

Он создаёт каталог `build/`, выполняет конфигурирование через CMake и запускает `make`. Все дополнительные аргументы передаются в CMake, так что через них можно включать параметры сборки проекта:

```bash
./compile.sh -DDEBUG=ON               # debug build
./compile.sh -DUSE_CLANG_COMPILER=ON  # build with Clang instead of GCC
./compile.sh -DUSE_INTEL_COMPILER=ON  # build with ICC
```

Сборка под Linux даёт файл `rechecker_mm_i386.so`.

О том, куда на сервере помещается каждый файл, см. [Установка](./installing.md).
