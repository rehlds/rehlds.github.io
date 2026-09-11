---
id: revoice-install
title: Установка
sidebar_position: 2
description: ReVoice — плагин Metamod, голосовой транскодер, который исправляет голосовой чат между сторонними и Steam-клиентами на серверах ReHLDS.
slug: /revoice/install
---

# Установка

:::warning Устаревший проект

Сопровождающие пометили ReVoice как **устаревший** — прежде чем разворачивать его на боевом сервере, ознакомьтесь с разделом [Что такое ReVoice?](./index.md).

:::

ReVoice — это плагин Metamod, и для его работы уже должны быть установлены и работоспособны [ReHLDS](/ru/docs/rehlds/install) и Metamod (рекомендуется Metamod-R).

## 1. Получите ReVoice

Скачайте выпуск со [страницы выпусков](https://github.com/rehlds/ReVoice/releases) или [соберите плагин из исходного кода](./compilling.md).

## 2. Разместите плагин

Создайте папку `revoice` внутри каталога `addons` в папке вашего мода и поместите туда файл, соответствующий вашей платформе:

| Платформа | Файл | Расположение |
| --- | --- | --- |
| Windows | `revoice_mm.dll` | `<mod>/addons/revoice/revoice_mm.dll` |
| Linux | `revoice_mm_i386.so` | `<mod>/addons/revoice/revoice_mm_i386.so` |

## 3. Зарегистрируйте плагин в Metamod

Добавьте строки в `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\revoice\revoice_mm.dll
linux addons/revoice/revoice_mm_i386.so
```

## 4. Добавьте файл конфигурации

Скопируйте файл [`data/revoice.cfg`](https://github.com/rehlds/ReVoice/blob/master/data/revoice.cfg) из репозитория проекта рядом с файлом плагина: `<mod>/addons/revoice/revoice.cfg`. ReVoice выполняет его командой `exec` при запуске, поэтому используется обычный синтаксис серверных конфигураций (простые присваивания переменных, комментарии `//`) — см. [Настройки](./settings.md).

## 5. Включите голосовой чат и проверьте результат

Убедитесь, что на сервере включён `sv_voiceenable`. Запустите сервер и выполните `meta list` — в списке загруженных плагинов должен появиться `Revoice`. Выполните в консоли `rev version` и `rev status`, чтобы убедиться, что плагин активен, и посмотреть его текущее состояние.
