---
id: refreelook-compilling
title: "ReFreeLook: Инструкция по сборке"
sidebar_label: Инструкция по сборке
sidebar_position: 4
description: ReFreeLook — модуль AMX Mod X, позволяющий администраторам-наблюдателям использовать любые режимы камеры, независимо от значения `mp_forcecamera` или `mp_forcechasecam`. Работает только в последней версии `ReGameDLL_CS`.
slug: /refreelook/compilling
keywords:
  - refreelook
  - AMX Mod X
  - amxx
  - amx
  - module
  - compilling
tags:
  - refreelook
  - compilling
last_update:
  date: 07/21/2025
  author: STAM
---

# Инструкция по сборке

В отличие от остальных плагинов организации ReHLDS, ReFreeLook собирается обычным `Makefile` под Linux (без CMake) и решением Visual Studio под Windows. Нужные ему заголовочные файлы Metamod и CSSDK включены в репозиторий в каталоге `include/` — ничего дополнительно скачивать не нужно.

### Проверка требований

**Windows**

- Visual Studio (стандарт C++11) или новее

**Linux**

- Компилятор Intel C++ (`icpc`) либо Clang/GCC с изменённой переменной `COMPILER` в Makefile

### Клонирование репозитория

```bash
git clone https://github.com/rehlds/ReFreeLook.git
cd ReFreeLook
```

### Сборка под Windows

Откройте `msvc/refreelook.sln` в Visual Studio и выполните сборку. На выходе получится `refreelook_amxx.dll`.

### Сборка под Linux

По умолчанию `Makefile` рассчитан на компилятор Intel (`/opt/intel/bin/icpc`). Если ICC не установлен, переопределите `COMPILER` в командной строке:

```bash
make COMPILER=clang
```

Если у вас нет и Clang, подойдёт GCC после небольшой правки Makefile — флаги в нём написаны именно под ICC и Clang. Сборка даёт файл `refreelook_amxx_i386.so` в каталоге `Release/`.

```bash
make clean   # удалить артефакты сборки
```

О том, куда файл помещается на сервере, см. [Установка](./installing.md).
