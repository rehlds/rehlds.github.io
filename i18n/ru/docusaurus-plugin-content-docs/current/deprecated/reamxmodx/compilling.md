---
id: reamxmodx-compilling
title: Инструкция по сборке
sidebar_position: 4
description: ReAMXModX — устаревший форк AMX Mod X, добавлявший поддержку API ReHLDS и ReGameDLL до того, как она появилась в самом AMX Mod X.
slug: /reamxmodx/compilling
---

<head>
  <title>ReAMXModX: Инструкция по сборке | ReHLDS</title>
</head>

# Инструкция по сборке

:::warning Устаревший проект

Сохранено для справки. Форк заморожен на срезе AMX Mod X 2016 года и выпусков не публикует, так что сборка — единственный способ получить файлы, и делать это незачем. См. [Что такое ReAMXModX?](./index.md).

:::

ReAMXModX наследует систему сборки AMX Mod X без изменений; собственного инструментария сборки он не добавляет.

### Клонирование репозитория

```bash
git clone https://github.com/rehlds/reamxmodx.git
cd reamxmodx
```

### Сборка под Windows

Форк содержит решения Visual Studio 2012, по одному на компонент, — именно под них и сопровождались его коммиты:

| Решение | Компонент |
| --- | --- |
| `amxmodx/msvc12/amxmodx_mm.sln` | Ядро AMX Mod X (плагин Metamod). |
| `modules/<имя>/msvc12/<имя>.sln` | Каждый модуль — `cstrike`, `csx`, `engine`, `fakemeta`, `nvault`, `sockets` и остальные. |
| `compiler/amxxpc/amxxpc.sln`, `compiler/libpc300/libpc300.sln` | Компилятор Pawn. |
| `installer/installtool/installtool.sln` | Инструмент установки. |

Каждое собирается отдельно — единого решения на весь проект здесь нет.

### Сборка под Linux

В дереве есть скрипты `AMBuilder` для [AMBuild](https://github.com/alliedmodders/ambuild), системы сборки AlliedModders, в каталогах `amxmodx/` и `plugins/`.

:::note

В этом срезе нет ни `configure.py`, ни `AMBuildScript` в корне репозитория, а именно от них AMBuild обычно и отталкивается. Поэтому для получения рабочей сборки под Linux придётся самостоятельно взять эту обвязку из соответствующей ревизии основного AMX Mod X (`1.8.3`, `git5067`). Это во многом и делает форк непрактичным для сборки сегодня.

:::

### Результат сборки

Полная сборка даёт `amxmodx_mm_i386.so` / `amxmodx_mm.dll` для ядра плюс по файлу на каждый модуль, разложенные ровно так, как ожидает основной AMX Mod X, в каталоге `addons/amxmodx/`.

Если вам нужен работающий AMX Mod X на ReHLDS, возьмите [актуальный выпуск основного проекта](https://www.amxmodx.org/downloads-new.php), а не собирайте это.
