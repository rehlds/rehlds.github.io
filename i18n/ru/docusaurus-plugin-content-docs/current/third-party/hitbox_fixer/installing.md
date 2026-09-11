---
id: hitbox-fixer-install
title: Установка
sidebar_position: 2
description: Hitbox Fixer — сторонний плагин Metamod, исправляющий некорректные серверные хитбоксы игроков в Counter-Strike 1.6, Half-Life и Adrenaline Gamer.
slug: /hitbox-fixer/install
---

<head>
  <title>Hitbox Fixer: Установка | ReHLDS</title>
</head>

# Установка

Hitbox Fixer — это плагин Metamod. Для его работы уже должны быть установлены и работоспособны [ReHLDS](/ru/docs/rehlds/install) `3.10`+ (либо оригинальный HLDS сборки `8648`) и Metamod.

## 1. Получите Hitbox Fixer

Скачайте `hitbox_fix-bin-*.zip` со [страницы выпусков](https://github.com/Garey27/hitbox_fixer/releases) или [соберите плагин из исходного кода](./compilling.md).

## 2. Распакуйте в каталог мода

Архив уже разложен под структуру сервера. Скопируйте из него папку `addons/` в `<mod>/addons/`:

| Путь в архиве | Назначение |
| --- | --- |
| `addons/hitboxfixer/hitbox_fix_mm.dll` | Файл плагина для Windows. |
| `addons/hitboxfixer/hitbox_fix_mm_i386.so` | Файл плагина для Linux. |
| `addons/hitboxfixer/hbf.cfg` | Файл конфигурации, читается при запуске. |

Оставьте только тот файл, который соответствует платформе вашего сервера.

:::note

В архиве также есть `vis/hitbox_vis.asi` — клиентский модуль визуализации для осмотра хитбоксов в игре. К установке на сервер он отношения не имеет и для работы исправления не нужен: берите его, только если отлаживаете хитбоксы на клиенте.

:::

## 3. Зарегистрируйте плагин в Metamod

Добавьте строки в `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\hitboxfixer\hitbox_fix_mm.dll
linux addons/hitboxfixer/hitbox_fix_mm_i386.so
```

## 4. Проверьте результат

Запустите сервер и выполните в консоли `meta list` — плагин должен быть в списке загруженных. Если его там нет, убедитесь, что движок — это ReHLDS `3.10`+ либо HLDS `8648`; другие сборки не поддерживаются.

О переменной `hbf_enabled` см. [Настройки](./settings.md).
