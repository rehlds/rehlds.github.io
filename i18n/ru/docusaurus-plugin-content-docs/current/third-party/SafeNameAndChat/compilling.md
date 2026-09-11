---
id: safenameandchat-compilling
title: Инструкция по сборке
sidebar_position: 4
description: SafeNameAndChat — сторонний плагин Metamod, обезвреживающий эксплойты с локализационными строками и внедрением команд в никах и сообщениях чата.
slug: /safenameandchat/compilling
---

<head>
  <title>SafeNameAndChat: Инструкция по сборке | ReHLDS</title>
</head>

# Инструкция по сборке

Большинству администраторов серверов достаточно [готовой сборки из выпуска](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/releases). Собирать из исходного кода имеет смысл, если вы проверяете ещё не вышедшее изменение или вам нужна собственная сборка. Нужные плагину заголовочные файлы HLSDK включены в репозиторий в каталоге `hlsdk/`.

### Проверка требований

**Windows**

- Visual Studio 2015 (стандарт C++14) или новее

**Linux**

- Git 1.8.5 или новее
- CMake 3.10 или новее
- Один из компиляторов: GCC 4.9.2+, ICC 15.0.1 20141023+ или Clang (LLVM) 6.0+

### Клонирование репозитория

```bash
git clone https://github.com/WPMGPRoSToTeMa/SafeNameAndChat.git
cd SafeNameAndChat
```

### Сборка под Windows

Откройте `SafeNameAndChat.sln` в Visual Studio, выберите среди конфигураций решения `Release` (или `Debug`) и платформу **x86**, затем выполните сборку.

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

### Результат сборки

Сборка даёт `SafeNameAndChat.so` под Linux и `SafeNameAndChat.dll` под Windows. О том, куда каждый файл помещается на сервере, см. [Установка](./installing.md); не забудьте скопировать рядом `SafeNameAndChat.cfg` — плагин ищет конфигурацию в собственном каталоге.
