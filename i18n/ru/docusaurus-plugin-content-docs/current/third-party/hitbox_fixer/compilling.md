---
id: hitbox-fixer-compilling
title: Инструкция по сборке
sidebar_position: 4
description: Hitbox Fixer — сторонний плагин Metamod, исправляющий некорректные серверные хитбоксы игроков в Counter-Strike 1.6, Half-Life и Adrenaline Gamer.
slug: /hitbox-fixer/compilling
---

<head>
  <title>Hitbox Fixer: Инструкция по сборке | ReHLDS</title>
</head>

# Инструкция по сборке

Большинству администраторов серверов достаточно [готовой сборки из выпуска](https://github.com/Garey27/hitbox_fixer/releases). Собирать из исходного кода имеет смысл, если вы проверяете ещё не вышедшее изменение или вам нужна собственная сборка.

В проекте используется чистый CMake — обёртки `build.sh` здесь нет. Нужные заголовочные файлы SDK включены в репозиторий в каталоге `include/`.

### Проверка требований

- CMake 3.18 или новее
- 32-разрядный инструментарий — плагин собирается под `i386`, поэтому на 64-разрядной системе нужны пакеты multilib
- Linux: GCC либо Clang, а также Ninja (его использует CI проекта)
- Windows: Visual Studio с набором инструментов для платформы Win32

#### Проверка окружения сборки (Debian / Ubuntu)

```bash
sudo apt-get update
sudo apt-get install -y git gcc-multilib g++-multilib ninja-build cmake
```

### Клонирование репозитория

```bash
git clone https://github.com/Garey27/hitbox_fixer.git
cd hitbox_fixer
```

### Сборка под Linux

```bash
cmake -B build -G Ninja -DCMAKE_BUILD_TYPE=Release
cmake --build build --config Release --parallel
```

### Сборка под Windows

Конфигурацию для платформы Win32 нужно задать явно — конфигурация по умолчанию на 64 разряда пригодного плагина не даст:

```powershell
cmake -B build -A Win32 -DCMAKE_BUILD_TYPE=Release
cmake --build build --config Release --parallel
```

### Результат сборки

Сборка даёт `hitbox_fix_mm_i386.so` под Linux и `hitbox_fix_mm.dll` под Windows. О том, куда каждый файл помещается на сервере, см. [Установка](./installing.md); рядом с ним скопируйте `dist/hbf.cfg`.
