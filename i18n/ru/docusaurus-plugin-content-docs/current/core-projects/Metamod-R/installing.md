---
id: metamod-r-install
title: Установка
sidebar_position: 2
description: Metamod-R — это оптимизированная версия оригинального Metamod, улучшающая производительность и совместимость для серверов Half-Life 1.
slug: /metamod-r/install
---

<head>
  <title>Metamod-R: Установка | ReHLDS</title>
</head>

# Установка

Ознакомьтесь со [списком поддерживаемых игр](/ru/docs/metamod-r/supported-games) и убедитесь, что игра в нем присутствует. _Если же нет, то не расстраивайтесь. После установки, вы можете проверить работоспособность **Metamod-r** с вашим `неподдерживаемым` модом после тонкой настройки, обратившись к этой [статье](/ru/docs/metamod-r/settings). Есть вероятность, что игра запустится._

# Совместимость

**Metamod-r несовместим с оригинальным `HLDS`. Необходимо иметь заранее установленный [ReHLDS](https://github.com/rehlds/ReHLDS) (`API 3.1+`). Нет гарантий, что metamod-r запустится с оригинальной версией HLDS.**

| HLDS| [ReHLDS](https://github.com/rehlds/ReHLDS)| OS
|---------| -------|  -------|  
| :x: | `API 3.1+` | ![](https://i.imgur.com/AzhAYR4.png) ![](https://i.imgur.com/t23p9tU.png) |  

# Установка на игровой сервер

* Скачайте последнюю версию _**Metamod-r**_ [![Download](https://img.shields.io/github/downloads/rehlds/metamod-r/latest/total?sort=date&style=flat-square)](https://github.com/rehlds/metamod-r/releases/latest) в любое удобное место.
* Разархивируйте из скачанного zip-архива папку _**addons**_ в папку вашего мода. ![](https://i.imgur.com/QYpJ6vI.png)

 _Если у вас возникла проблема, с определением имени каталога, обратитесь к сводной таблице, которая представлена **[здесь](/ru/docs/metamod-r/troubbleshouting)**._

* В папке мода найдите файл `liblist.gam`, сделайте его резервную копию (если хотите) и откройте файл любым удобным текстовым редактором.
* Найдите в файле `liblist.gam` строчки, содержащие `gamedll` и `gamedll_linux`. _Например, у `Half-Life 1` они будет выглядеть так:_

```
gamedll "dlls\hl.dll"
gamedll_linux "dlls/hl.so"
```
_а у `Counter-Strike 1.6` - так:_

```
gamedll "dlls\mp.dll"
gamedll_linux "dlls/cs.so"
```

* Замените в нужной строке содержание пути до metamod-r на следующее:

 _Для Windows-версии вашего сервера:_
```
gamedll "addons\metamod\metamod.dll"
```
 _Для Linux-версии вашего сервера:_
```
gamedll_linux "addons/metamod/metamod_i386.so"
```
* Сохраните изменения в `liblist.gam` файле.
* Установка **Metamod-r** завершена. 

# Проверка
После успешной установки **Metamod-r**, можете проверить работоспособность, просто запустив игровой сервер. О том, что  **Metamod-r** работает, свидетельствует сообщение в консоли при запуске сервера:
![](https://i.imgur.com/VScngBr.png)

Если такого не наблюдается,
![](https://i.imgur.com/HPKRiBF.png)
обратитесь к [руководству по устранению неполадок](/ru/docs/metamod-r/troubbleshouting).
