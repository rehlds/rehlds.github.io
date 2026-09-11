---
id: reapi-compilling
title: Инструкция по сборке
sidebar_position: 4
description: ReAPI - Модуль AMXModX, предоставляющий API для плагинов ReHLDS, ReGameDLL и Metamod (например, ReUnion, ReVoice).
slug: /reapi/compilling
---

<head>
  <title>ReAPI: Инструкция по сборке | ReHLDS</title>
</head>

# Инструкция по сборке

Большинству пользователей достаточно [официального выпуска](https://github.com/rehlds/ReAPI/releases). Собирать из исходного кода имеет смысл, если вы разрабатываете сам ReAPI, проверяете ещё не вышедшее изменение или вам нужна собственная сборка.

### Проверка требований

Для сборки ReAPI необходимо несколько программных компонентов:

**Windows**

- Visual Studio 2015 (стандарт C++14) или новее

**Linux**

- Git 1.8.5 или новее
- CMake 3.10 или новее
- Один из компиляторов: GCC 4.9.2+, ICC 15.0.1 20141023+ или Clang (LLVM) 6.0+

### Клонирование репозитория

```bash
git clone https://github.com/rehlds/ReAPI.git
cd ReAPI
```

### Сборка под Windows

Откройте `msvc/reapi.sln` в Visual Studio, выберите среди конфигураций решения `Release` (или `Debug`) и выполните сборку. На выходе получится `reapi_amxx.dll`.

:::note

CMake не поддерживает сборку под Windows — `CMakeLists.txt` намеренно завершается с ошибкой и сообщением, отсылающим к `msvc/reapi.sln`. CMake используется только для сборки под Linux.

:::

### Сборка под Linux

Используйте штатный скрипт `build.sh`, при необходимости указав предпочитаемый компилятор и число заданий:

```bash
./build.sh --compiler=[gcc|icc|clang] --jobs=[N]
```

Например:

```bash
./build.sh --compiler=gcc --jobs=4    # GCC
./build.sh --compiler=intel           # ICC
./build.sh --compiler=clang           # Clang / LLVM
```

Через `build.sh` можно также передавать определения CMake в виде `-D<параметр>=[ON|OFF]`:

| Определение | Действие |
| --- | --- |
| `DEBUG` | Включает режим отладки. |
| `USE_STATIC_LIBSTDC` | Статически линкует `libstdc++`. |

Сборка под Linux даёт файл `reapi_amxx_i386.so`.

#### Проверка окружения сборки (Debian / Ubuntu)

```bash
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install -y gcc-multilib g++-multilib
sudo apt-get install -y build-essential
sudo apt-get install -y libc6-dev libc6-dev-i386
```

Затем выберите компилятор:

```bash
sudo apt-get install -y gcc g++
# или
sudo apt-get install -y clang
```

### Подготовка собственной сборки

В выпуске вместе с файлом модуля поставляются заголовочные файлы Pawn из `reapi/extra/amxmodx/scripting/include/` — скопируйте и их, если проверяете сборку, изменившую публичный API. О том, куда на сервере помещается каждый файл, см. [Установка](./installing.md).
