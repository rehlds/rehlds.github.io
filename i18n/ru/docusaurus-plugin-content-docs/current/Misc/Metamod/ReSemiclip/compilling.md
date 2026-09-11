---
id: resemiclip-compilling
title: Инструкция по сборке
sidebar_position: 4
description: ReSemiclip - плагин Metamod, управляющий возможностью прохождения сквозь игроков. В качестве примера был использован модуль Semiclip от `joaquimandrade`.
slug: /resemiclip/compilling
---

# Инструкция по сборке

### Проверка требований

**Windows**

- Visual Studio (стандарт C++14) или новее

**Linux**

- CMake 3.1 или новее
- Один из компиляторов: GCC (по умолчанию), ICC или Clang

### Клонирование репозитория

```bash
git clone https://github.com/rehlds/ReSemiclip.git
cd ReSemiclip
```

### Сборка под Windows

Откройте `msvc/resemiclip.sln` в Visual Studio и выполните сборку. На выходе получится `resemiclip_mm.dll`.

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
| `DEBUG` | Включает отладочную сборку. |
| `USE_STATIC_LIBSTDC` | Статически линкует `libstdc++`. |

Сборка под Linux даёт файл `resemiclip_mm_i386.so`.

О том, куда на сервере помещается каждый файл, см. [Установка](./installing.md); если вы проверяете изменение формата конфигурации, скопируйте рядом с ним также `dist/config.ini` и `dist/maps/`.
