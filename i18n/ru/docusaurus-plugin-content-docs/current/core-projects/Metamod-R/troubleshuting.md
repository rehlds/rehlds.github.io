---
id: metamod-r-troubbleshouting
title: Устранение проблем
sidebar_position: 4
description: Metamod-R — это оптимизированная версия оригинального Metamod, улучшающая производительность и совместимость для серверов Half-Life 1.
slug: /metamod-r/troubbleshouting
---

<head>
  <title>Metamod-R: Устранение проблем | ReHLDS</title>
</head>

# Устранение проблем

## Как правильно подать заявку с проблемой:
Если вы хотите внести предложение, зарегистрировать ошибку, у вас ничего не получилось, либо вам нужна "живая" помощь и содействие - вы всегда можете подать заявку [здесь](https://github.com/rehlds/metamod-r/issues). Достаточно нажать зеленую кнопку `New issue` и заполнить форму. 

Разработчики будут благодарны, если при описании проблемы - вы максимально подробно все распишете: 
* Версию вашей операционной системы;
* Версию (номер сборки) HLDS-сервера (либо [ReHLDS](https://github.com/rehlds/ReHLDS));
* Версию вашей игры (или мода);
* Версию (номер или дату сборки) Metamod-r;
  - Можете дополнительно указать список модулей (набрав `meta list` в консоли сервера).
* Приложите логи;
* Приложите crashdump'ы;

Это поможет для более тщательного анализа и, возможно, исправления ваших проблем в будущем.
 
***  

## Получение дампов падения HLDS\reHLDS

![](https://i.imgur.com/vqDiJ67.png) [Источник](https://aghl.ru/forum/viewtopic.php?f=10&t=1441).
![](https://i.imgur.com/vqDiJ67.png) [Зеркало](https://dev-cs.ru/threads/1532/).

 **Не стоит просто так выкладывать дампы в интернете, так как зачастую в них содержится полная информация о сервере, включая rcon и прочее. Для передачи можно архивировать их с паролем, что полезно ещё тем, что жмутся они весьма хорошо.**
 
### ![](https://i.imgur.com/t23p9tU.png) Windows 

#### С использованием WER (Windows Error Reporting):
* Разрешить WER (отчеты об ошибках):
  - До Vista:
      - Запустить drwtsn32.exe и выбрать "Full" напротив Crash Dump File. Тут же можно увидеть (или настроить) куда будут складываться дампы.
  - На Vista и выше: 
      - Редактирование реестра, удобный способ от [s1lent](https://github.com/s1lentq):
>  
> #### Развернутый и быстрый способ настроить реестр на получение дампов для новичков.
>  
> * Настройки: 
>   - **NAME_APP** - `hlds.exe`
>       - имя приложения, которому нужно будет создавать дампы в случае аварийного завершения. 
>   - **REG_LINK** - `HKLM\Software\Microsoft\Windows\Windows Error Reporting`
>       - путь до раздела Windows Error Reporting (Эту настройку скорее всего менять не нужно, думаю во всех Windows пути одинаковые) 
>   - **DumpType** - `2`
>       - `0` - Обычный дамп
>       - `1` - Минимальный дамп
>       - `2` - Полный дамп 
>   - DumpCount - `15`
>       - количество создаваемых дампов, если в папке количество дампов будет больше указанного значения, то будет удаляться старый дамп для создания нового дампа. 
>   - **DumpFolder** - `C:\CrashDumps`
>       - путь до папки, куда будут складываться дампы.
>       - (во избежании всяких проблем не используйте пробелы или кириллицу в путях) 
> * Установка:
>   - Скачать архив и разархивировать.
>   - Запустить add_RegistryDumps.bat
>  
>   - После записи в реестр вы должны убедиться что у вас включена служба Отчеты об ошибках Windows.
>   - Дальше нажать горячую клавишу Windows + R (Windows кнопка находится между ctrl и alt) или можно вызвать cmd.exe или Пуск - Выполнить, сразу после этого нужно ввести gpedit.msc, далее см. скриншот.
>  
> `Конфигурация компьютера -> Административные шаблоны -> Компоненты Windows -> Отчеты об ошибок Windows`
>  
> ![](https://i.imgur.com/PLQ8mf3.jpg)
>  
 
> * ![](https://i.imgur.com/vqDiJ67.png) [add_RegistryDumps.zip](http://aghl.ru/forum/download/file.php?id=3071) \ ![](https://i.imgur.com/Uy97ydR.png) Зеркало ["add_RegistryDumps.zip"](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/add_RegistryDumps.zip) 
> * ![](https://i.imgur.com/vqDiJ67.png) [remove_RegistryDumps.zip](http://aghl.ru/forum/download/file.php?id=3536) \ ![](https://i.imgur.com/Uy97ydR.png) Зеркало ["remove_RegistryDumps.zip"](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/remove_RegistryDumps.zip) 
>  

#### С использованием утилиты userdumps
* Инструкция от _unKn0wn_:

>
> Способ получения дампов посредством утилиты от MicroSoft: ![](https://i.imgur.com/vqDiJ67.png) [UserModeProcessDumper](http://www.microsoft.com/en-us/download/details.aspx?id=4060) \ ![](https://i.imgur.com/Uy97ydR.png) Зеркало ["UserModeProcessDumper8_1_2929_5.zip"](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/UserModeProcessDumper8_1_2929_5.zip).
>
> Спасибо [Lev](https://github.com/LevShisterov) за настройки.
>
> ##### 1. Инсталяция
> Архив который вы скачали разархивируем (по умолчанию C:\kktools\userdump8.1).
> - Запустите файл setup.exe из каталога:
>   - Если вы используете 32-битную ОС Windows XP/2003, то C:\kktools\userdump8.1\x86.
>   - Если вы используете 64-битную ОС Windows XP/2003, то C:\kktools\userdump8.1\x64.
> - В окне Мастера установки нажмите на кнопку Далее.
> - (Только для 32-битных ОС) В окне Terminate Mode выберите Disable "Dump on Process Termination" feature и нажмите на кнопку Далее.
>
> ![](https://i.imgur.com/NgjxfPa.png)
>
> - Нажмите на кнопку Готово и дождитесь завершения установки.
> В окне User Mode Process Dump Setup нажмите на кнопку ДА (Если по каким-то причинам вы не знаете как зайти в меню с настройками userdump -вы их всегда сможете найти в Панель управления - Process Dumper).
>
> ##### 2. Добавление приложения
> В открывшемся окне Свойства: User Mode Process Dumper Setup жмём New и добавляем имя нужной нам программы на пример: hlds.exe (расширение -обязательно!) и жмём ОК
>
> ![](https://i.imgur.com/36m9qL1.jpg)
>   
> ##### 3. Настройки
> В окне Свойства: User Mode Process Dumper Setup находим созданное только-что правило приложения, выделяем его и жмём кнопку Rules
> В открывшемся окне Process Monitoring Ruless for hlds.exe
> 1. Выберем Use custom rules.
> 2. Если требуется меняем папку для хранения созданных дампов.
> 3. В Exeption Codes выделяем (нажатием ЛКМ) следующие коды: "Access Violation, Overflow, Illegal Instruction, Stack oveflow."
> 4. Выставляем параметр Save Mode в режим Cyclic saving (5 times). 
> Должно получится примерно так:
>
> ![](https://i.imgur.com/sio3Aac.jpg)
>
> PS: Рекомендую использовать совместно с Dr Watson с типом дампов "Краткий", т.к. доктор умеет вести логи в текстовом формате, которые дадут возможность отбирать нужные дампы. А userdump будет делать полные дампы.
>

### ![](https://i.imgur.com/AzhAYR4.png) Linux

Сервер надо запускать с ключем **-debug**.

Если в системе установлен gdb, то автоматически в файле `debug.log` будет записываться внятная информация об ошибке. Так что рекомендуется его поставить (команда зависит от используемой системы, на Debian\Ubuntu - это `apt install gdb`). Хотя для создания дампов это не требуется, это фактически обязательно надо сделать при наличии возможности, так как в `debug.log` при этом будет записано место падения, что позволит сразу что-то сказать об ошибке. Получение этой же информации на другой системе из дамп-файла потребует наличия всех бинарников от сервера.

По умолчанию дамп-файл называется `core`, записывается в рабочей папке, и, соответственно, будет перезаписываться. Во избежание, можно добавлять к имени идентификатор процесса:
 
`echo 1 > /proc/sys/kernel/core_uses_pid`
 
или складывать дампы в `/tmp`:
 
`echo /tmp/%e-%t-%p-%c.dmp > /proc/sys/kernel/core_pattern` Больше информации ![](https://i.imgur.com/vqDiJ67.png)[тут](http://man7.org/linux/man-pages/man5/core.5.html).
 
Запуск без `sudo` (под root, иначе общие настройки системы должны быть выставлены на unlimited):
 
`ulimit -c unlimited && ./hlds_run -debug ...`

Запуск с `sudo` (под пользователем hlds):
 
`ulimit -Hc unlimited && sudo -u hlds sh -c "ulimit -Sc unlimited && ./hlds_run -debug ..."`

Проверка запуска из под sudo:
 
`ulimit -Hc unlimited && sudo -u hlds sh -c "ulimit -Sc unlimited && whoami && ulimit -Sc && ./hlds_run -debug ..."`

выводит имя пользователя под которым произойдет запуск и лимит на создание дампов, после чего запускает сервер.

Для тестирования настроек создания дампов можете использовать специально разработанный модуль: ![](https://i.imgur.com/vqDiJ67.png) [FixItAll](http://aghl.ru/forum/viewtopic.php?f=19&t=1680&p=19549) \ ![](https://i.imgur.com/Uy97ydR.png) [FixItAll зеркало](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/fixitall_mm.0.0.zip)  или ![](https://i.imgur.com/Uy97ydR.png) [Crash.sma*](https://github.com/EpicMorgGames/LegacyMods/blob/master/AGHL.ru/Crash.sma).

* crash.sma - https://github.com/rehlds/metamod-r/issues/42#issuecomment-416456526

*** 

## Сводная таблица:
`Папка` - каталог вашего мода или игры. В колонках ![](https://i.imgur.com/t23p9tU.png) и ![](https://i.imgur.com/AzhAYR4.png) представлены названия исполняемых файлов из папки `dlls`, которая находится в каталоге `вашего мода или игры`.

:x: - версии под платформу не существует 

| Игра \ Мод | Папка |   ![](https://i.imgur.com/t23p9tU.png) | ![](https://i.imgur.com/AzhAYR4.png)
| ------------- | ------| ------|------|
| [Action Half-Life](http://www.moddb.com/mods/action-half-life/downloads/) | action | ahl.dll | ahl.so
| [Adrenaline Gamer](https://github.com/martinwebrant/agmod) | ag | ag.dll | ag.so
| [openAG](https://github.com/YaLTeR/OpenAG) | ag | ag.dll | ag.so
| [Azure Sheep](http://www.moddb.com/mods/azure-sheep/downloads/) | asheep | hl.dll  | :x: 
| [Base Defense](http://www.moddb.com/mods/b-def/downloads/) |  bdef | server.dll | server.so
| [The Battle Grounds](http://www.moddb.com/mods/battle-grounds/downloads/) | bg | bg.dll | bg.so
| [Brutal Half-Life](http://www.moddb.com/mods/brutal-half-life/downloads/) | bhl | bhl.dll | :x: 
| [Brain Bread](http://www.moddb.com/mods/brainbread/downloads/) | brainbread | bb.dll  | :x:  
| [Half-Life: Blue Shift](http://store.steampowered.com/app/130/HalfLife_Blue_Shift/) | bshift | hl.dll | bshift.so
| [Bumper Cars](http://www.moddb.com/mods/bumper-cars/downloads/) |  bumpercars | hl.dll | :x:  
| [BuzzyBots](http://www.moddb.com/mods/buzzybots/downloads) | buzzybots |  bb.dll | :x:  
| [Chicken Fortress 3](http://www.moddb.com/mods/chicken-fortress-3/downloads/) | ckf3 | mp.dll |  :x: 
| [Counter-Strike 1.0](http://www.moddb.com/mods/counter-strike/downloads/counter-strike-10-for-steam) | cs10 | mp.dll | :x: 
| [Counter-Strike 1.5](http://www.moddb.com/mods/counter-strike/downloads/counter-strike-15-for-steam) | csv15 | mp.dll | :x: 
| [Counter-Strike 1.6](http://store.steampowered.com/app/10/CounterStrike/) | cstrike | mp.dll | cs.so
| [Counter-Strike:Condition Zero](http://store.steampowered.com/app/80/CounterStrike_Condition_Zero/) | czero | mp.dll | cs.so
| [Counter-Strike:Condition Zero Deleted Scenes](http://store.steampowered.com/app/80/CounterStrike_Condition_Zero/) | czeror | cz.dll | cz.so
| [Desert Crisis](http://www.moddb.com/mods/desert-crisis/downloads/) | dcrisis |  dc.dll |  dc.so
| [Half-Life: Decay](http://www.moddb.com/mods/half-life-decay/downloads/) | decay | decay.dll | :x: 
| [Deathmatch Classic](http://store.steampowered.com/app/40/Deathmatch_Classic/) | dmc | dmc.dll | dmc.so
| [Day of Defeat](http://store.steampowered.com/app/30/Day_of_Defeat/) | dod | dod.dll | dod.so
| [Digital Paintball](http://www.moddb.com/mods/digital-paintball/downloads/) | dpb |  pb.dll |  pb.i386.so
| [Earth's Special Forces (Old)](http://www.moddb.com/mods/earths-special-forces/downloads/) | esf | hl.dll | hl.so (лежит не в `dlls` каталоге, а в `linuxdll`)
| [Earth's Special Forces](http://www.moddb.com/mods/earths-special-forces/downloads/) | esf | hl.dll | hl.so
| [Existence](http://www.moddb.com/mods/existence/downloads/) | existence | existence.dll | :x: 
| [Firearms](http://www.moddb.com/mods/firearms/downloads/) | firearms | firearms.dll | :x: 
| [Frontline Force](http://www.moddb.com/mods/front-line-force/downloads/) | frontline | frontline.dll | front.so  
| [Gangsta Wars](http://www.moddb.com/mods/gangsta-wars/downloads/) | gangstawars | gwars27.dll | :x: 
| [Gangwars](http://www.moddb.com/mods/gangwars/downloads/) | gangwars | mp.dll | :x: 
| [Opposing Force](http://store.steampowered.com/app/50/HalfLife_Opposing_Force/) | gearbox | opfor.dll | opfor.so
| [Global Warfare](http://www.moddb.com/mods/global-warfare/downloads/) | globalwarfare | mp.dll | gw.so
| [Goldeneye](http://www.moddb.com/mods/goldeneye-mod/downloads/) | goldeneye | mp.dll | :x: 
| [Headcrab Frenzy](http://www.moddb.com/mods/headcrab-frenzy/downloads/) | hcfrenzy | hcfrenzy.dll | hcfrenzy.so 
| [Half-Life 1.5: Weapon Edition](http://www.moddb.com/mods/half-life-weapon-edition/downloads/) | hl15we | hl.dll | hl.so
| [HL-Rally](http://www.moddb.com/mods/hl-rally/downloads/) | hlrally | hlrally.dll | hlr.so
| [Holy Wars](http://www.moddb.com/mods/holy-wars/downloads/) | holywars | holywars.dll | hl.so
| [Hostile Intent](http://www.moddb.com/mods/hostile-intent/downloads/) | hostileintent | hl.dll | hl.so 
| [International Online Soccer](http://www.moddb.com/mods/international-online-soccer/downloads/) | ios | ios.dll | ios.so
| [Judgement](http://www.moddb.com/mods/judgement/downloads/) | judgedm | mp.dll | judge.so  
| [Kanonball](http://www.moddb.com/mods/kanonball/downloads/) | kanonball | kanonball.dll | hl.so  
| [Monkeystrike](http://www.moddb.com/mods/monkeystrike/downloads/) | monkeystrike |  monkey.dll | ms.so
| [Morbid Inclination](http://www.moddb.com/mods/morbid-inclination/downloads/) | MorbidPR | morbid.dll | morbid.so 
| [Move In!](http://www.moddb.com/mods/move-in/downloads/) | movein | hl.dll | hl.so
| [Master Sword](http://www.moddb.com/mods/master-sword/downloads/) [Continued](http://www.moddb.com/mods/master-sword-continued-111/downloads) | msc | ms.dll | :x:   
| [Natural Selection](https://unknownworlds.com/ns/) | ns | ns.dll | ns.so
| [Natural Selection Beta](https://unknownworlds.com/ns/) | nsp | ns.dll | ns.so
| [Over Ground](http://www.moddb.com/mods/over-ground/downloads/) | og | og.dll | og.so  
| [Outlawsmod](http://www.moddb.com/mods/outlaws/downloads/) | ol | hl.dll | ol.so  
| [Operations 1942](http://www.moddb.com/mods/operations-1942/downloads/) | ops1942 | spirit.dll | spirit.so
| [Open-Source Jailbreak](http://www.moddb.com/mods/open-source-jailbreak/downloads/) | osjb | jail.dll | osjb.so
| [Out Break](http://www.moddb.com/mods/outbreak-half-life/downloads/) | outbreak | hl.dll | :x:  
| [Oz Deathmatch](http://ozdeathmatch.com/) | oz | mp.dll | mp.so 
| [Paintball](http://www.bloodvayne.com/hlpb/downloads.htm) | paintball | mp.dll | pb.so  
| [Public Enemy](http://www.moddb.com/mods/public-enemy/downloads/) | penemy | pe.dll | pe.so
| [Point of No Return](http://www.moddb.com/mods/point-of-no-return/downloads/) | ponreturn | mp.dll | ponr.so 
| [Pirates, Vikings and Knights](http://www.moddb.com/mods/pirates-vikings-and-knights/downloads/) | pvk | hl.dll | hl.so 
| [Rocket Crowbar 2](http://www.moddb.com/mods/rocket-crowbar-2/downloads/) | rc2 | rc2.dll | rc2.so   
| [Resident Evil : Cold Blood](http://www.moddb.com/mods/resident-evil-cold-blood/downloads/) | recbb2 | recb.dll | recb.so
| [Gunman Chronicles](http://www.moddb.com/games/gunman-chronicles/downloads/gunman-chronicles-steam-version/) | rewolf | gunman.dll | :x:   
| [Ricochet](http://store.steampowered.com/app/60/Ricochet/) | ricochet | mp.dll | ricochet.so
| [Rocket Crowbar](http://hldm.org/files/mods/287-rocket-crowbar.html) | rockcrowbar | rc.dll | rc.so  
| [Rival Species](http://www.rivalspecies.com/files.php) | rspecies | hl.dll | hl.so 
| [Scientist Hunt](http://www.moddb.com/mods/scientist-hunt/downloads/) | scihunt | shunt.dll | shunt.so
| [The Ship](http://www.moddb.com/mods/the-ship) | ship | ship.dll | ship.so 
| [Science & Industry](http://www.moddb.com/mods/science-and-industry/downloads/) | si | si.dll | si.so  
| [Snow-War](http://www.moddb.com/mods/snow-war/downloads/) | snow | snow.dll | snow.so  
| [StargateTC (Old, 1.x)](http://www.moddb.com/mods/stargatetc/downloads/) | stargatetc | hl.dll | hl.so
| [StargateTC (Updated, 2.x)](http://www.moddb.com/mods/stargatetc/downloads/) | stargatetc | hl.dll | stc.so
| [StargateTC (Updated, 2.x)](http://www.moddb.com/mods/stargatetc/downloads/) | stargatetc | hl.dll | stc_i386_opt.so
| [Sven Coop (Old)](http://store.steampowered.com/app/225840/Sven_Coop/) | svencoop | hl.dll | hl.so 
| [Sven Coop (Steam)](http://store.steampowered.com/app/225840/Sven_Coop/) | svencoop | server.dll | server.so 
| [Swarm](http://www.moddb.com/mods/swarm/downloads) | swarm | swarm.dll | swarm.so 
| [Team Fortress Classic](http://store.steampowered.com/app/20/Team_Fortress_Classic/) | tfc | tfc.dll | tfc.so 
| [The Wastes](http://www.moddb.com/mods/the-wastes/downloads/) | thewastes | thewastes.dll | thewastes.so
| [Project Timeless](http://www.moddb.com/mods/project-timeless/downloads/) | timeless | timeless.dll | pt.so   
| [Tour of Duty](http://www.moddb.com/mods/tour-of-duty/downloads/) | tod | hl.dll | hl.so
| [Train Hunters](http://www.moddb.com/games/half-life/addons?filter=t&kw=Train+Hunters&category=&licence=&timeframe=) | trainhunters | th.dll | th.so
| [The Specialists](http://www.moddb.com/mods/the-specialists/downloads/) | ts | mp.dll | ts.so
| [The Trenches](http://www.moddb.com/mods/the-trenches-half-life/downloads/) | tt | tt.dll | tt.so  
| [Underworld Bloodline](http://www.moddb.com/mods/underworld-bloodline/downloads/) | underworld | uw.dll | uw.so
| [Half-Life](http://store.steampowered.com/app/70/HalfLife/) | valve | hl.dll | hl.so 
| [VampireSlayer](http://www.moddb.com/mods/vampire-slayer/downloads/) | vs | mp.dll | vs.so
| [Wanted!](http://www.moddb.com/mods/wanted-the-western-mod-steam/downloads/) | wantedhl | wanted.dll | hl.so
| [Wizard Wars (Steam)](http://www.moddb.com/mods/wizard-wars/downloads/) | wizardwars | wizardwars.dll | wizardwars.so 
| [Wizard Wars Beta (Steam)](http://www.moddb.com/mods/wizard-wars/downloads/) | wizardwars_beta | wizardwars.dll | wizardwars.so 
| [Wizard Wars (Old)](http://www.moddb.com/mods/wizard-wars/downloads/) | wizwars | mp.so | hl.dll 
| [WormsHL](http://www.moddb.com/mods/wormshl/downloads/) | wormshl | wormshl.dll | wormshl.so  
| [Zombie Panic](http://www.moddb.com/mods/zombie-panic/downloads/) | zp | mp.dll | hl.so   

***
Любое содействие и вклад в проект - приветствуется. Чем больше тестов с вашей стороны и обратной связи, тем сильнее развитие Metamod-r и остальных связанных продуктов. Удачи!
