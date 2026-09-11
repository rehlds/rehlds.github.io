---
id: reunion-compilling
title: Инструкция по сборке
sidebar_position: 4
description: ReUnion - Metamod плагин, позволяющий клиентам, не использующим Steam и использующим протоколы 47 и 48, подключаться к серверам ReHLDS.
slug: /reunion/compilling
---

<head>
  <title>ReUnion: Инструкция по сборке | ReHLDS</title>
</head>

# Инструкция по сборке

### Проверка требований

**Windows**

- Visual Studio 2015 (стандарт C++14) или новее

**Linux**

- CMake 3.10 или новее
- Один из компиляторов: GCC 4.9.2+, ICC 15.0.1 20141023+ или Clang (LLVM) 6.0+

### Клонирование репозитория

```bash
git clone https://github.com/rehlds/ReUnion.git
cd ReUnion
```

### Сборка под Windows

Откройте `msvc/Reunion.sln` в Visual Studio, выберите конфигурацию `Release` (или `Debug`) и выполните сборку. На выходе получится `reunion_mm.dll`.

:::note

CMake не поддерживает сборку под Windows — `CMakeLists.txt` намеренно завершается с ошибкой и сообщением, отсылающим к `msvc/Reunion.sln`. CMake используется только для сборки под Linux.

:::

### Сборка под Linux

Используйте штатный скрипт `build.sh`:

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
```

Затем выберите компилятор:

```bash
sudo apt-get install -y gcc g++
# или
sudo apt-get install -y clang
```

Сборка под Linux даёт файл `reunion_mm_i386.so`. О том, куда на сервере помещаются файлы плагина и `reunion.cfg`, см. [Установка](./installing.md).
