---
id: relocalizebugfix-compilling
title: Инструкция по сборке
sidebar_position: 4
description: ReLocalizeBug Fix — устаревший плагин Metamod, блокировавший эксплойты с локализационными строками в никах и чате на серверах ReHLDS.
slug: /relocalizebugfix/compilling
---

<head>
  <title>ReLocalizeBug Fix: Инструкция по сборке | ReHLDS</title>
</head>

# Инструкция по сборке

:::warning Устаревший проект

Сохранено для справки. Плагин больше не поддерживается и несовместим с современными версиями ReHLDS — см. [Что такое ReLocalizeBug Fix?](./index.md).

:::

### Проверка требований

**Windows**

- Visual Studio, для `msvc/relocalizebugfix.sln`

**Linux**

- Компилятор Intel C++ (`icpc`) — в `Makefile` жёстко прописан путь `/opt/intel/bin/icpc` и используются специфичные для Intel флаги (`-static-intel`, `-no-intel-extensions`, `-ipo`, `-fasm-blocks`). Для сборки под GCC или Clang их нужно вычистить.

Заголовочные файлы CSSDK и Metamod включены в репозиторий в каталогах `cssdk/` и `metamod/`, поэтому ничего дополнительно скачивать не нужно. Проект появился раньше связки CMake и `build.sh`, используемой в поддерживаемых проектах организации.

### Клонирование репозитория

```bash
git clone https://github.com/rehlds/relocalizebugfix.git
cd relocalizebugfix
```

### Сборка под Windows

Откройте `msvc/relocalizebugfix.sln` в Visual Studio и выполните сборку. На выходе получится `relocalizebugfix_mm.dll`.

### Сборка под Linux

```bash
make
```

Результат появится в каталоге `Release/` под именем `relocalizebugfix_mm_i386.so`.

:::note

Готовые сборки лежат прямо в репозитории в каталоге `bin/`, так что собирать проект редко требовалось даже тогда, когда он был активен.

:::

О том, куда помещался каждый файл, см. [Установка](./installing.md).
