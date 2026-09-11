---
id: revoice-compilling
title: Инструкция по сборке
sidebar_position: 4
description: ReVoice — плагин Metamod, голосовой транскодер, который исправляет голосовой чат между сторонними и Steam-клиентами на серверах ReHLDS.
slug: /revoice/compilling
---

# Инструкция по сборке

В отличие от остальных плагинов организации ReHLDS, ReVoice использует не обёртку `build.sh`, а современную связку CMake (3.21+) и [пресетов CMake](https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html).

### Проверка требований

- CMake 3.21 или новее
- [Ninja](https://ninja-build.org/) (используется пресетами Ninja Multi-Config)
- Windows: Visual Studio 2022 либо Clang
- Linux: GCC либо Clang

Зависимости Speex, SILK, Opus, `rehlsdk` и Metamod SDK включены в репозиторий в каталоге `external/` — инициализировать подмодули git не требуется.

### Клонирование репозитория

```bash
git clone https://github.com/rehlds/ReVoice.git
cd ReVoice
```

### Сборка под Linux

```bash
cmake --preset ninja-gcc-linux
cmake --build --preset ninja-gcc-linux-release
```

Чтобы собрать при помощи Clang, замените `gcc` на `clang` (`ninja-clang-linux`). Если настраивать инструментарий самостоятельно не хочется, в репозитории есть готовый dev-контейнер (`.devcontainer/`, Ubuntu 24.04 с GCC и Clang).

### Сборка под Windows

```powershell
cmake --preset vs2022-msvc-windows
cmake --build --preset vs2022-msvc-windows-release
```

Чтобы собрать при помощи Clang, замените `msvc` на `clang` (`vs2022-clang-windows`). Можно также открыть сгенерированное решение Visual Studio сразу после шага `cmake --preset`.

### Результат сборки

На обеих платформах получается `revoice_mm.dll` (Windows) либо `revoice_mm_i386.so` (Linux) в каталоге `bin/<компилятор>-<конфигурация>/`. О том, куда файл помещается на сервере, см. [Установка](./installing.md).
