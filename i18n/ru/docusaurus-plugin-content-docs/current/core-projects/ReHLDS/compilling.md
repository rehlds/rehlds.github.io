---
id: rehlds-compilling
title: Инструкция по сборке
sidebar_position: 5
description: ReHLDS — это переработанная версия оригинального HLDS с улучшенной безопасностью, производительностью и возможностями моддинга для таких игр, как Half-Life и Counter-Strike 1.6.
slug: /rehlds/compilling
---

<head>
  <title>ReHLDS: Инструкция по сборке | ReHLDS</title>
</head>

# Инструкция по сборке

Большинству администраторов серверов достаточно [официального выпуска](https://github.com/rehlds/ReHLDS/releases). Собирать из исходного кода имеет смысл, если вы разрабатываете ReHLDS, проверяете ещё не вышедшее изменение или вам нужна собственная сборка.

### Проверка требований

Для сборки ReHLDS необходимо несколько программных компонентов:

**Windows**

- Visual Studio 2015 (стандарт C++14) или новее

**Linux**

- CMake 3.10 или новее
- Один из компиляторов: GCC 4.9.2+, ICC 15.0.1 20141023+ или Clang (LLVM) 6.0+

### Клонирование репозитория

```bash
git clone https://github.com/rehlds/ReHLDS.git
cd ReHLDS
```

### Сборка под Windows

Откройте `msvc/ReHLDS.sln` в Visual Studio, выберите среди конфигураций решения `Release Swds` (или `Debug Swds` для отладочной сборки) и выполните сборку.

:::note

CMake не поддерживает сборку под Windows — `CMakeLists.txt` намеренно завершается с ошибкой и сообщением, отсылающим к `msvc/ReHLDS.sln`. CMake используется только для сборки под Linux.

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

#### Проверка окружения сборки (Debian / Ubuntu)

```bash
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install -y gcc-multilib g++-multilib
sudo apt-get install -y build-essential
sudo apt-get install -y libc6-dev libc6-dev-i386
sudo apt-get install -y cmake
```

Затем выберите компилятор:

```bash
sudo apt-get install -y gcc g++
# или
sudo apt-get install -y clang
```

### Запуск модульных тестов

CI проекта перед обычной сборкой собирает и прогоняет набор модульных тестов, используя отдельный тип сборки CMake:

```bash
cmake -DCMAKE_BUILD_TYPE=Unittests -B build
cmake --build build -j8
LD_LIBRARY_PATH="rehlds/lib/linux32:$LD_LIBRARY_PATH" ./build/rehlds/engine_i486
```

Код возврата `0` или `3` означает, что набор тестов пройден; любой другой код говорит о провале теста.

### Результат сборки

Успешная сборка под Linux даёт `engine_i486.so` (а также файлы выделенного сервера, HLTV и файловой системы) в каталоге `build/` — в той же структуре, что заменяется при [установке](./installing.md). В Windows собранные DLL и EXE помещаются в соответствующую папку `msvc/<Конфигурация>`.
