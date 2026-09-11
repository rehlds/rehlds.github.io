---
id: hitboxtracker-compilling
title: Инструкция по сборке
sidebar_position: 4
description: hitboxtracker — устаревший инструмент разработчика ReHLDS, отрисовывавший на клиенте положение хитбоксов, рассчитанное сервером.
slug: /hitboxtracker/compilling
---

<head>
  <title>hitboxtracker: Инструкция по сборке | ReHLDS</title>
</head>

# Инструкция по сборке

:::warning Устаревший проект

Сохранено для справки. hitboxtracker больше не поддерживается — см. [Что такое hitboxtracker?](./index.md).

:::

### Проверка требований

- Visual Studio с поддержкой трёх проектов C++, входящих в решение.

Заголовочные файлы HLSDK и Metamod включены в репозиторий в каталоге `dep/`, поэтому ничего дополнительно скачивать не нужно.

### Клонирование репозитория

```bash
git clone https://github.com/rehlds/hitboxtracker.git
cd hitboxtracker
```

### Сборка

Откройте `msvc/hitboxtracker.sln` в Visual Studio и выполните сборку. В решении три проекта — по числу частей, из которых состоял инструмент:

| Проект | Что даёт | Где работает |
| --- | --- | --- |
| `server` | `hitboxtracker_mm.dll` | На сервере, как плагин Metamod. |
| `client` | `hitboxtracker.dll` | На игровом клиенте, как модуль отрисовки. |
| `launcher` | `cs.exe` | На игровом клиенте, для загрузки модуля. |

:::note

В репозитории есть только решение Visual Studio — ни CMake, ни `build.sh` здесь нет, в отличие от остальных проектов организации. При этом в опубликованном выпуске всё же присутствует серверный файл для Linux (`hitboxtracker_mm_i386.so`), собранный вне этого решения.

:::

О том, куда помещался каждый результат сборки, см. [Установка](./installing.md).
