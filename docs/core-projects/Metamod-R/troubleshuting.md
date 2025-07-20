---
id: metamod-r-troubbleshouting
title: Troubbleshouting
sidebar_position: 4
description: Metamod-r is an optimized version of the original Metamod, enhancing performance and compatibility for Half-Life 1 servers.
slug: /metamod-r/troubbleshouting
---

<head>
  <title>Metamod-R: Troubbleshouting | ReHLDS</title>
</head>

# Troubbleshouting

## How to report about the problem correctly:

If you want to make an offer, register a mistake, your fail or you need "live" help and assistance-you can always apply [here](https://github.com/theAsmodai/metamod-r/issues). Just press the green `New issue` button and fill out the form.

Developers will be grateful if the description of the problem be as much detail as possible:
* The version of your operating system;
 The version (build number) HLDS server (either [ReHLDS](https://github.com/dreamstalker/ReHLDS));
* The version of your game (or mod);
* Metamod-r version (build number or build date) ;
  - You can optionally specify a list of modules (by typing `meta list` in the server console).
* Attach the logs;
* Apply crashdumps;

This will help for a more thorough analysis and possibly correction of your problems in the future.

***
 

## Getting HLDS\reHLDS crash dumps

![](https://i.imgur.com/vqDiJ67.png) [Main source (rus)](https://aghl.ru/forum/viewtopic.php?f=10&t=1441).
![](https://i.imgur.com/vqDiJ67.png) [Mirror (rus)](https://dev-cs.ru/threads/1532/).

**Don't just post dumps on the Internet, as they often contain full information about the server, including rcon and so on. For transmission, you can archive them with a password, which is also useful because they compress very well.**
 
### ![](https://i.imgur.com/t23p9tU.png) Windows

#### Using WER (Windows Error Reporting):
* Enable WER (error reports):
- Before Vista:
- Run drwtsn32.exe and select "Full" next to Crash Dump File. Here you can also see (or configure) where the dumps will be stored.
- On Vista and above:
- Editing the registry, a convenient method from [s1lent](https://github.com/s1lentq):
>
> #### A detailed and quick way to configure the registry to receive dumps for beginners.
>
> * Settings:
> - **NAME_APP** - `hlds.exe`
> - name of the application that will need to create dumps in case of a crash.
> - **REG_LINK** - `HKLM\Software\Microsoft\Windows\Windows Error Reporting`
> - path to the Windows Error Reporting section (This setting most likely does not need to be changed, I think the paths are the same in all Windows)
> - **DumpType** - `2`
> - `0` - Normal dump
> - `1` - Minimum dump
> - `2` - Full dump
> - DumpCount - `15`
> - number of dumps to create, if the number of dumps in the folder is greater than the specified value, the old dump will be deleted to create a new dump.
> - **DumpFolder** - `C:\CrashDumps`
> - path to the folder where the dumps will be stored.
> - (to avoid any problems, do not use spaces or Cyrillic in the paths)
> * Installation:
> - Download the archive and unzip it.
> - Run add_RegistryDumps.bat
>
> - After writing to the registry, you must make sure that you have enabled the Windows Error Reporting service.
> - Then press the hotkey Windows + R (the Windows button is between ctrl and alt) or you can call cmd.exe or Start - Run, immediately after that you need to enter gpedit.msc, then see the screenshot.
>  
> `Computer Configuration -> Administrative Templates -> Windows Components -> Windows Error Reporting`
>  
> ![](https://i.imgur.com/PLQ8mf3.jpg)
>  
> * ![](https://i.imgur.com/vqDiJ67.png) [add_RegistryDumps.zip](http://aghl.ru/forum/download/file.php?id=3071) \ ![](https://i.imgur.com/Uy97ydR.png) mirror for ["add_RegistryDumps.zip"](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/add_RegistryDumps.zip) 
> * ![](https://i.imgur.com/vqDiJ67.png) [remove_RegistryDumps.zip](http://aghl.ru/forum/download/file.php?id=3536) \ ![](https://i.imgur.com/Uy97ydR.png) mirror for ["remove_RegistryDumps.zip"](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/remove_RegistryDumps.zip) 
>  

#### Using the userdumps utility
* Instructions from _unKn0wn_:

>
> Method for obtaining dumps using the utility from MicroSoft: ![](https://i.imgur.com/vqDiJ67.png) [UserModeProcessDumper](http://www.microsoft.com/en-us/download/details.aspx?id=4060) \ ![](https://i.imgur.com/Uy97ydR.png) mirror for ["UserModeProcessDumper8_1_2929_5.zip"](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/UserModeProcessDumper8_1_2929_5.zip).
>
> Thanks to [Lev](https://github.com/LevShisterov) for the settings.
>
> ##### 1. Installation
> Unzip the archive you downloaded (by default C:\kktools\userdump8.1).
> - Run the setup.exe file from the directory:
> - If you are using 32-bit Windows XP/2003, then C:\kktools\userdump8.1\x86.
> - If you are using 64-bit Windows XP/2003, then C:\kktools\userdump8.1\x64.
> - In the Installation Wizard window, click Next.
> - (Only for 32-bit OS) In the Terminate Mode window, select Disable "Dump on Process Termination" feature and click Next.
>
> ![](https://i.imgur.com/NgjxfPa.png)
>
> - Click Finish and wait for the installation to complete.
> In the User Mode Process Dump Setup window, click the YES button (If for some reason you do not know how to enter the userdump settings menu, you can always find them in Control Panel - Process Dumper).
>
> ##### 2. Adding an application
> In the Properties: User Mode Process Dumper Setup window that opens, click New and add the name of the program we need, for example: hlds.exe (the extension is required!) and click OK
>
> ![](https://i.imgur.com/36m9qL1.jpg)
>
> ##### 3. Settings
> In the Properties: User Mode Process Dumper Setup window, find the application rule you just created, select it and click the Rules button
> In the Process Monitoring Ruless for hlds.exe window that opens
> 1. Select Use custom rules.
> 2. If necessary, change the folder for storing the created dumps.
> 3. In Exception Codes, select (by left-clicking) the following codes: "Access Violation, Overflow, Illegal Instruction, Stack overflow."
> 4. Set the Save Mode parameter to Cyclic saving (5 times).
> It should look something like this:
>
> ![](https://i.imgur.com/sio3Aac.jpg)
>
> PS: I recommend using it together with Dr Watson with the "Brief" dump type, since the doctor can keep logs in text format, which will allow you to select the necessary dumps. And userdump will make full dumps.
>

### ![](https://i.imgur.com/AzhAYR4.png) Linux

The server must be started with the **-debug** key.

If gdb is installed on the system, then clear information about the error will be automatically written to the `debug.log` file. So it is recommended to install it (the command depends on the system used, on Debian\Ubuntu it is `apt install gdb`). Although this is not required to create dumps, it is actually necessary to do this if possible, since the crash location will be written to `debug.log`, which will allow you to immediately say something about the error. Getting the same information on another system from a dump file will require all the binaries from the server.

By default, the dump file is called `core`, is written to the working folder, and, accordingly, will be overwritten. To avoid this, you can add the process ID to the name:

`echo 1 > /proc/sys/kernel/core_uses_pid`

or dump the dumps to `/tmp`:

`echo /tmp/%e-%t-%p-%c.dmp > /proc/sys/kernel/core_pattern` More information ![](https://i.imgur.com/vqDiJ67.png)[here](http://man7.org/linux/man-pages/man5/core.5.html).

Launch without `sudo` (as root, otherwise the general system settings should be set to unlimited):

`ulimit -c unlimited && ./hlds_run -debug ...`

Launch with `sudo` (as user hlds):

`ulimit -Hc unlimited && sudo -u hlds sh -c "ulimit -Sc unlimited && ./hlds_run -debug ..."`

Checking launch under sudo:

`ulimit -Hc unlimited && sudo -u hlds sh -c "ulimit -Sc unlimited && whoami && ulimit -Sc && ./hlds_run -debug ..."`

displays the user name under which the launch will take place and the limit on creating dumps, after which it starts the server.

To test dump settings, you can use a specially developed module: ![](https://i.imgur.com/vqDiJ67.png) [FixItAll](http://aghl.ru/forum/viewtopic.php?f=19&t=1680&p=19549) \ ![](https://i.imgur.com/Uy97ydR.png) [FixItAll mirror](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/fixitall_mm.0.0.zip) or ![](https://i.imgur.com/Uy97ydR.png) [Crash.sma*](https://github.com/EpicMorgGames/LegacyMods/blob/master/AGHL.ru/Crash.sma).

* crash.sma - https://github.com/theAsmodai/metamod-r/issues/42#issuecomment-416456526

***

### Summary table:

`Folder` - the directory of your mod or game. In columns ![](https://i.imgur.com/t23p9tU.png) and ![](https://i.imgur.com/AzhAYR4.png) the names of the executable files from the folder 'dlls`, which is located in the directory`your mod or game'.

:x: - platform version does not exist

| Game \ Mod | Folder |   ![](https://i.imgur.com/t23p9tU.png) | ![](https://i.imgur.com/AzhAYR4.png)
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
Any assistance and contribution to the project is welcome. The more tests and feedback, the stronger the development of Metamod-r and other related products. Goodluck!
