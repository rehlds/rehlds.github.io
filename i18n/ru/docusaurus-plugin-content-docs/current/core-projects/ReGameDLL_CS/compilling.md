---
id: regamedll-cs-compilling
title: Сборка из исходного кода
sidebar_position: 7
description: Сборка ReGameDLL_CS из исходного кода в Windows или Linux.
slug: /regamedll-cs/compilling
---

# Сборка из исходного кода

Большинству администраторов следует использовать официальный выпуск. Собирайте проект самостоятельно для разработки ReGameDLL_CS, проверки ещё не выпущенных изменений или создания особой конфигурации сборки.

## Требования

- Git 1.8.5 или новее
- CMake 3.10 или новее
- Windows: Visual Studio 2015 или новее
- Linux: GCC 4.9.2 или новее либо Clang 6 или новее
- Комплект инструментов для создания 32-разрядных бинарных файлов и соответствующие 32-разрядные библиотеки разработки

Если в новой ветке минимальные версии изменились, проверьте исходный README и конфигурацию CI.

## Клонирование репозитория

```bash
git clone --recursive https://github.com/rehlds/ReGameDLL_CS.git
cd ReGameDLL_CS
```

Если репозиторий клонирован без `--recursive`, сначала инициализируйте подмодули:

```bash
git submodule update --init --recursive
```

## Windows

Откройте `msvc/ReGameDLL.sln` в Visual Studio, выберите нужную конфигурацию и соберите решение. Используйте созданный `mp.dll` в качестве серверной GameDLL.

## Linux

Репозиторий предоставляет `build.sh` как основной способ сборки:

```bash
./build.sh --compiler=gcc --jobs=4
```

Для сборки с Clang:

```bash
./build.sh --compiler=clang --jobs=4
```

Полезные переменные окружения, описанные проектом:

```bash
DEBUG=1 ./build.sh --compiler=gcc --jobs=4
USE_STATIC_LIBSTDC=1 ./build.sh --compiler=gcc --jobs=4
```

`DEBUG=1` создаёт отладочную сборку. `USE_STATIC_LIBSTDC=1` статически связывает стандартную библиотеку C++, если это поддерживается.

## Развёртывание собственной сборки

Сначала скопируйте созданную GameDLL на тестовый сервер:

- Windows: `cstrike/dlls/mp.dll` или `czero/dlls/mp.dll`
- Linux: `cstrike/dlls/cs.so` или `czero/dlls/cs.so`

Сохраните предыдущий бинарный файл и проведите проверку без сторонних плагинов до установки на рабочий сервер. Снимки исходного кода могут содержать изменения, ещё не прошедшие цикл стабильного выпуска.
