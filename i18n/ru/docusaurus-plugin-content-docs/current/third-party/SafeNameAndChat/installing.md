---
id: safenameandchat-install
title: Установка
sidebar_position: 2
description: SafeNameAndChat — сторонний плагин Metamod, обезвреживающий эксплойты с локализационными строками и внедрением команд в никах и сообщениях чата.
slug: /safenameandchat/install
---

<head>
  <title>SafeNameAndChat: Установка | ReHLDS</title>
</head>

# Установка

SafeNameAndChat — это плагин Metamod, и для его работы уже должен быть установлен и работоспособен Metamod (рекомендуется Metamod-R).

## 1. Получите SafeNameAndChat

Скачайте файлы со [страницы выпусков](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/releases) или [соберите плагин из исходного кода](./compilling.md). В выпуске два файла:

| Платформа | Файл |
| --- | --- |
| Windows | `SafeNameAndChat.dll` |
| Linux | `SafeNameAndChat.so` |

## 2. Разместите плагин

Создайте папку `SafeNameAndChat` внутри каталога `addons` в папке вашего мода и поместите туда файл, соответствующий вашей платформе:

```text
<mod>/addons/SafeNameAndChat/SafeNameAndChat.dll
<mod>/addons/SafeNameAndChat/SafeNameAndChat.so
```

## 3. Добавьте файл конфигурации

Скопируйте [`SafeNameAndChat.cfg`](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/blob/master/SafeNameAndChat.cfg) из репозитория проекта рядом с файлом плагина. Плагин строит путь от собственного расположения и при запуске выполняет `SafeNameAndChat.cfg` командой `exec` именно оттуда, поэтому файл должен лежать в той же папке, что и плагин, а не в корне мода.

## 4. Зарегистрируйте плагин в Metamod

Добавьте строки в `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\SafeNameAndChat\SafeNameAndChat.dll
linux addons/SafeNameAndChat/SafeNameAndChat.so
```

## 5. Проверьте результат

Запустите сервер и выполните `meta list` — в списке загруженных должен появиться `SafeNameAndChat` (его метка в журнале — `SNAC`). Чтобы узнать, какая именно сборка запущена, посмотрите в консоли значение `SNAC_Version`.

Поскольку плагин помечен как загружаемый в любой момент, вместо перезапуска можно выполнить на работающем сервере `meta load addons/SafeNameAndChat/SafeNameAndChat.so`.

Переменные описаны в разделе [Настройки](./settings.md).
