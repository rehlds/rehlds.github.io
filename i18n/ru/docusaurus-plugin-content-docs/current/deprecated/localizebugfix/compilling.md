---
id: localizebugfix-compilling
title: Инструкция по сборке
sidebar_position: 4
description: LocalizeBug Fix — заархивированный плагин Metamod от s1lentq, блокировавший эксплойты с локализационными строками в никах и чате на HLDS.
slug: /localizebugfix/compilling
---

<head>
  <title>LocalizeBug Fix: Инструкция по сборке | ReHLDS</title>
</head>

# Инструкция по сборке

:::warning Устаревший проект

Сохранено для справки. Репозиторий заархивирован на GitHub и pull-запросы не принимает — см. [Что такое LocalizeBug Fix?](./index.md).

:::

### Проверка требований

**Windows**

- Visual Studio, для `msvc/localizebugfix.sln`

**Linux**

- Компилятор Intel C++ (`icpc`) — в `Makefile` жёстко прописан путь `/opt/intel/bin/icpc` и используются специфичные для Intel флаги (`-static-intel`, `-no-intel-extensions`, `-ipo`). Для сборки под GCC или Clang эти флаги нужно вычистить.

Заголовочные файлы HLSDK и Metamod включены в репозиторий в каталоге `sdk/`, поэтому ничего дополнительно скачивать не нужно.

### Клонирование репозитория

```bash
git clone https://github.com/s1lentq/localizebugfix.git
cd localizebugfix
```

### Сборка под Windows

Откройте `msvc/localizebugfix.sln` в Visual Studio и выполните сборку. На выходе получится `localizebugfix.dll`.

### Сборка под Linux

```bash
make
```

На выходе получится `localizebugfix_mm_i386.so`.

:::note

Готовые сборки версий `2.0`, `2.3` и `2.4` лежат прямо в репозитории в каталоге `bin/`, так что собирать проект редко требовалось даже тогда, когда он был активен.

:::

О том, куда помещался каждый файл, см. [Установка](./installing.md).
