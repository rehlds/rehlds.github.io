---
id: metamod-r-troubbleshouting
title: 故障排查
sidebar_position: 4
description: Metamod-R 是原版 Metamod 的优化版本，为 Half-Life 1 服务器提升性能与兼容性。
slug: /metamod-r/troubbleshouting
---

<head>
  <title>Metamod-R: 故障排查 | ReHLDS</title>
</head>

# 故障排查

## 如何正确地反馈问题：

如果你想提出建议、报告缺陷或故障，或者需要「实时」的帮助与支持，随时可以到[这里](https://github.com/rehlds/metamod-r/issues)提交。点击绿色的 `New issue` 按钮并填写表单即可。

如果问题的描述尽可能详尽，开发者会非常感激：
* 你的操作系统版本；
 HLDS 服务器的版本（构建号），或 [ReHLDS](https://github.com/rehlds/ReHLDS) 的版本；
* 你的游戏（或模组）版本；
* Metamod-r 的版本（构建号或构建日期）；
  - 可以顺带附上模块列表（在服务器控制台输入 `meta list` 获取）。
* 附上日志；
* 附上崩溃转储；

这有助于更彻底地分析，并在日后尽可能修复你遇到的问题。

***
 

## 获取 HLDS\reHLDS 的崩溃转储

![](https://i.imgur.com/vqDiJ67.png) [主要来源（俄语）](https://aghl.ru/forum/viewtopic.php?f=10&t=1441).
![](https://i.imgur.com/vqDiJ67.png) [镜像（俄语）](https://dev-cs.ru/threads/1532/).

**请不要把转储直接发到公开网络上，它们通常包含服务器的完整信息，包括 rcon 等等。传输时可以打包成带密码的压缩包，这样做还有一个好处：转储的压缩率很高。**
 
### ![](https://i.imgur.com/t23p9tU.png) Windows

#### 使用 WER（Windows 错误报告）：
* 启用 WER（错误报告）：
- Vista 之前的系统：
- 运行 drwtsn32.exe，在 Crash Dump File 旁选择 "Full"。在这里还可以查看（或设置）转储的保存位置。
- Vista 及更高版本：
- 编辑注册表，这是来自 [s1lent](https://github.com/s1lentq) 的便捷方法：
>
> #### 面向新手的注册表配置详解，快速拿到转储。
>
> * 设置项：
> - **NAME_APP** - `hlds.exe`
> - 崩溃时需要生成转储的应用程序名称。
> - **REG_LINK** - `HKLM\Software\Microsoft\Windows\Windows Error Reporting`
> - Windows 错误报告项的路径（这一项多半不需要改动，我认为各版本 Windows 的路径都一样）
> - **DumpType** - `2`
> - `0` —— 普通转储
> - `1` —— 最小转储
> - `2` —— 完整转储
> - DumpCount - `15`
> - 要保留的转储数量；当目录中的转储数超过该值时，会删除旧的转储以便生成新的。
> - **DumpFolder** - `C:\CrashDumps`
> - 转储的保存目录路径。
> - （为避免出问题，路径中不要使用空格或西里尔字母）
> * 安装步骤：
> - 下载压缩包并解压。
> - 运行 add_RegistryDumps.bat
>
> - 写入注册表之后，务必确认 Windows 错误报告服务已启用。
> - 然后按下 Windows + R 组合键（Windows 键位于 ctrl 和 alt 之间），也可以调用 cmd.exe 或「开始 - 运行」，随后输入 gpedit.msc，接着参照截图操作。
>  
> `计算机配置 -> 管理模板 -> Windows 组件 -> Windows 错误报告`
>  
> ![](https://i.imgur.com/PLQ8mf3.jpg)
>  
> * ![](https://i.imgur.com/vqDiJ67.png) [add_RegistryDumps.zip](http://aghl.ru/forum/download/file.php?id=3071) \ ![](https://i.imgur.com/Uy97ydR.png) 镜像：["add_RegistryDumps.zip"](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/add_RegistryDumps.zip) 
> * ![](https://i.imgur.com/vqDiJ67.png) [remove_RegistryDumps.zip](http://aghl.ru/forum/download/file.php?id=3536) \ ![](https://i.imgur.com/Uy97ydR.png) 镜像：["remove_RegistryDumps.zip"](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/remove_RegistryDumps.zip) 
>  

#### 使用 userdumps 工具
* 来自 _unKn0wn_ 的说明：

>
> 使用微软提供的工具获取转储的方法： ![](https://i.imgur.com/vqDiJ67.png) [UserModeProcessDumper](http://www.microsoft.com/en-us/download/details.aspx?id=4060) \ ![](https://i.imgur.com/Uy97ydR.png) 镜像：["UserModeProcessDumper8_1_2929_5.zip"](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/UserModeProcessDumper8_1_2929_5.zip).
>
> 感谢 [Lev](https://github.com/LevShisterov) 提供的设置方案。
>
> ##### 1. 安装
> 解压下载到的压缩包（默认路径为 C:\kktools\userdump8.1）。
> - 从以下目录运行 setup.exe：
> - 如果使用 32 位的 Windows XP/2003，则为 C:\kktools\userdump8.1\x86。
> - 如果使用 64 位的 Windows XP/2003，则为 C:\kktools\userdump8.1\x64。
> - 在安装向导窗口中点击 Next。
> - （仅限 32 位系统）在 Terminate Mode 窗口中选择 Disable "Dump on Process Termination" feature，然后点击 Next。
>
> ![](https://i.imgur.com/NgjxfPa.png)
>
> - 点击 Finish 并等待安装完成。
> 在 User Mode Process Dump Setup 窗口中点击 YES 按钮（如果你不清楚如何进入 userdump 的设置界面，随时可以在「控制面板 - Process Dumper」中找到）。
>
> ##### 2. 添加应用程序
> 在打开的 Properties: User Mode Process Dumper Setup 窗口中点击 New，添加目标程序名称，例如 hlds.exe（扩展名必须写！），然后点击 OK
>
> ![](https://i.imgur.com/36m9qL1.jpg)
>
> ##### 3. 设置
> 在 Properties: User Mode Process Dumper Setup 窗口中找到刚创建的应用规则，选中它并点击 Rules 按钮
> 在打开的 Process Monitoring Ruless for hlds.exe 窗口中
> 1. 选择 Use custom rules。
> 2. 如有需要，修改转储的保存目录。
> 3. 在 Exception Codes 中（用左键）勾选以下代码："Access Violation、Overflow、Illegal Instruction、Stack overflow"。
> 4. 把 Save Mode 参数设为 Cyclic saving（5 次）。
> 最终大致是这样：
>
> ![](https://i.imgur.com/sio3Aac.jpg)
>
> 附注：建议与转储类型设为 "Brief" 的 Dr Watson 搭配使用，因为后者会以文本格式保留日志，便于你挑出需要的转储；而 userdump 负责生成完整转储。
>

### ![](https://i.imgur.com/AzhAYR4.png) Linux

服务器必须使用 **-debug** 参数启动。

如果系统中安装了 gdb，错误的明确信息会自动写入 `debug.log` 文件，因此建议安装它（命令取决于所用系统，在 Debian\Ubuntu 上是 `apt install gdb`）。虽然生成转储并不强制要求它，但只要条件允许就应该装上：崩溃位置会被写入 `debug.log`，让你立刻对错误有所判断。若要在另一台机器上从转储文件中获得同样的信息，则需要服务器上的全部二进制文件。

默认情况下转储文件名为 `core`，写入工作目录，因而会被覆盖。为避免这一点，可以把进程 ID 加入文件名：

`echo 1 > /proc/sys/kernel/core_uses_pid`

或者把转储写入 `/tmp`：

`echo /tmp/%e-%t-%p-%c.dmp > /proc/sys/kernel/core_pattern` 更多信息见![](https://i.imgur.com/vqDiJ67.png)[here](http://man7.org/linux/man-pages/man5/core.5.html).

不使用 `sudo` 启动（以 root 身份，否则需要把系统全局设置改为 unlimited）：

`ulimit -c unlimited && ./hlds_run -debug ...`

使用 `sudo` 启动（以 hlds 用户身份）：

`ulimit -Hc unlimited && sudo -u hlds sh -c "ulimit -Sc unlimited && ./hlds_run -debug ..."`

检查 sudo 下的启动情况：

`ulimit -Hc unlimited && sudo -u hlds sh -c "ulimit -Sc unlimited && whoami && ulimit -Sc && ./hlds_run -debug ..."`

会显示启动所用的用户名和转储创建上限，随后启动服务器。

要验证转储设置，可以使用一个专门开发的模块： ![](https://i.imgur.com/vqDiJ67.png) [FixItAll](http://aghl.ru/forum/viewtopic.php?f=19&t=1680&p=19549) \ ![](https://i.imgur.com/Uy97ydR.png) [FixItAll mirror](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/fixitall_mm.0.0.zip) or ![](https://i.imgur.com/Uy97ydR.png) [Crash.sma*](https://github.com/EpicMorgGames/LegacyMods/blob/master/AGHL.ru/Crash.sma).

* crash.sma - https://github.com/rehlds/metamod-r/issues/42#issuecomment-416456526

***

### 汇总表：

`Folder` —— 你的模组或游戏所在目录。在 ![](https://i.imgur.com/t23p9tU.png) and ![](https://i.imgur.com/AzhAYR4.png) 两列中给出的是位于「你的模组或游戏」目录下 `dlls` 文件夹中的可执行文件名。

:x: —— 该平台不存在对应版本

| 游戏 \ 模组 | 目录 |   ![](https://i.imgur.com/t23p9tU.png) | ![](https://i.imgur.com/AzhAYR4.png)
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
| [Earth's Special Forces (Old)](http://www.moddb.com/mods/earths-special-forces/downloads/) | esf | hl.dll | hl.so（位于 `linuxdll`，而非 `dlls` 目录）
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
欢迎对本项目提供任何形式的帮助与贡献。测试和反馈越多，Metamod-r 及相关产品的发展就越有力。祝顺利！
