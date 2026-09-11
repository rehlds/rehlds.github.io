---
id: rechecker-settings
title: "ReChecker: Настройки"
sidebar_label: Настройки
sidebar_position: 3
description: ReChecker — плагин Metamod, который дает возможность проверять клиентские файлы по их имени и md5-хешу.
slug: /rechecker/settings
keywords:
  - rechecker
  - metamod
  - plugin
  - settings
  - Настройки
tags:
  - rechecker
  - settings
last_update:
  date: 07/21/2025
  author: STAM
---

# Настройки

ReChecker настраивается через файл `addons/rechecker/resources.ini` (лежит рядом с файлом плагина) и одну консольную переменную.

## Формат `resources.ini`

Каждое правило — это строка с путём, хешем (или ключевым словом) и командой, выполняемой при совпадении, плюс необязательные флаги:

```text
path to file        hash          "exec cmd"      [FLAGS]
"../opengl32.dll"    3cc7f256      "kick [userid]"
```

### Поле хеша

| Значение | Смысл |
| --- | --- |
| Шестнадцатеричный хеш (например, `3cc7f256`) | Совпадение с этим конкретным хешем. Достаточно 4 байт (8 шестнадцатеричных символов) — полный MD5 не нужен. |
| `UNKNOWN` | Совпадает с любым хешем, не охваченным другим правилом для того же пути. |
| `MISSING` | Совпадает, когда клиент вообще не передал файл. |

### Флаги

| Флаг | Действие |
| --- | --- |
| `BREAK` | Прекратить проверку остальных правил для этого клиента после срабатывания данного. |
| `IGNORE` | Внести этот конкретный хеш в список разрешённых — команда не выполняется. |

### Метки в командах

Доступны внутри строки `"exec cmd"`:

| Метка | Значение |
| --- | --- |
| `[name]` | Никнейм клиента. |
| `[ip]` | IP-адрес клиента. |
| `[id]` | Индекс клиента. |
| `[userid]` | Идентификатор userid клиента. |
| `[steamid]` | SteamID клиента. |
| `[file_name]` | Путь проверяемого файла. |
| `[file_hash]` | Хеш ответа клиента по этому файлу. |
| `[file_md5hash]` | Полный MD5-хеш ответа клиента по этому файлу. |

### Примеры правил

```ini
; Kick on a known bad file hash, stop checking further rules for this client
"../demoplayer.dll"    ad6d0e43    "kick [userid] 'WallHack Detected'"    BREAK

; Whitelist a known-good hash for the same path
"../demoplayer.dll"    7ef5b581    IGNORE

; Log (but don't kick) any hash of a file you're not tracking yet
"../demoplayer.dll"    UNKNOWN     "echo ' -> file: ([file_name]), md5hex: ([file_md5hash]) for ([name])'"

; Kick when a file is expected but missing
"../opengl32.dll"      MISSING     "kick [userid] 'OpenGL32 Missing'"     BREAK
```

`resources.ini` допускает метку BOM в кодировке UTF-8 и строки комментариев, начинающиеся с `;`. Отталкивайтесь от шаблона [`dist/resources.ini`](https://github.com/rehlds/ReChecker/blob/master/dist/resources.ini) из репозитория проекта, который поставляется с сигнатурами ряда исторически известных читерских файлов, и дополняйте его самостоятельно.

## Консольная переменная

| CVar | По умолчанию | Назначение |
| --- | --- | --- |
| `rch_log` | `0` | Подробность журналирования. `0` отключает журналирование; чем больше значение, тем подробнее записи. |

## Журналы

Когда `rch_log` включён, ReChecker пишет ежедневные файлы журнала в каталог `addons/rechecker/logs/`.
