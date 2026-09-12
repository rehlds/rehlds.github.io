---
id: metamod-r-troubbleshouting
title: Depanare
sidebar_position: 4
description: Metamod-R este o versiune optimizată a Metamod original, cu performanță sporită și compatibilitate mai bună pentru serverele de Half-Life 1.
slug: /metamod-r/troubbleshouting
---

<head>
  <title>Metamod-R: Depanare | ReHLDS</title>
</head>

# Depanare

## Cum raportați corect o problemă:

Dacă vreți să faceți o propunere, să semnalați o eroare ori o nereușită proprie sau dacă aveți nevoie de ajutor „pe viu”, vă puteți adresa oricând [aici](https://github.com/rehlds/metamod-r/issues). Apăsați butonul verde `New issue` și completați formularul.

Dezvoltatorii vă vor fi recunoscători dacă descrierea problemei este cât mai amănunțită:
* Versiunea sistemului dumneavoastră de operare;
 Versiunea (numărul versiunii) serverului HLDS (sau a [ReHLDS](https://github.com/rehlds/ReHLDS));
* Versiunea jocului (sau a modului) dumneavoastră;
* Versiunea Metamod-r (numărul sau data versiunii);
  - Opțional, puteți indica și lista modulelor (scriind `meta list` în consola serverului).
* Atașați jurnalele;
* Atașați fișierele de blocaj;

Acest lucru ajută la o analiză mai temeinică și, eventual, la rezolvarea problemelor dumneavoastră în viitor.

***
 

## Obținerea fișierelor de blocaj HLDS\reHLDS

![](https://i.imgur.com/vqDiJ67.png) [Sursa principală (în rusă)](https://aghl.ru/forum/viewtopic.php?f=10&t=1441).
![](https://i.imgur.com/vqDiJ67.png) [Oglindă (în rusă)](https://dev-cs.ru/threads/1532/).

**Nu publicați fișierele de blocaj pe internet, fiindcă ele conțin adesea informații complete despre server, inclusiv rcon și altele. Pentru transmitere, le puteți arhiva cu parolă, ceea ce este util și pentru că se comprimă foarte bine.**
 
### ![](https://i.imgur.com/t23p9tU.png) Windows

#### Folosind WER (Raportarea erorilor Windows):
* Activați WER (rapoartele de eroare):
- Înainte de Vista:
- Rulați drwtsn32.exe și alegeți "Full" în dreptul Crash Dump File. Tot acolo puteți vedea (sau configura) unde vor fi păstrate fișierele.
- Pe Vista și mai nou:
- Prin editarea registrului, o metodă practică de la [s1lent](https://github.com/s1lentq):
>
> #### O metodă detaliată și rapidă de configurare a registrului pentru obținerea fișierelor de blocaj, pentru începători.
>
> * Setări:
> - **NAME_APP** - `hlds.exe`
> - numele aplicației pentru care vor trebui create fișiere de blocaj în caz de eroare.
> - **REG_LINK** - `HKLM\Software\Microsoft\Windows\Windows Error Reporting`
> - calea către secțiunea Windows Error Reporting (Această setare cel mai probabil nu trebuie schimbată; cred că aceste căi sunt aceleași în toate versiunile de Windows)
> - **DumpType** - `2`
> - `0` - Fișier obișnuit
> - `1` - Fișier minim
> - `2` - Fișier complet
> - DumpCount - `15`
> - numărul de fișiere de creat; dacă numărul fișierelor din folder depășește valoarea indicată, cel vechi este șters pentru a face loc celui nou.
> - **DumpFolder** - `C:\CrashDumps`
> - calea folderului în care vor fi păstrate fișierele.
> - (ca să evitați problemele, nu folosiți spații sau caractere chirilice în căi)
> * Instalare:
> - Descărcați arhiva și dezarhivați-o.
> - Rulați add_RegistryDumps.bat
>
> - După scrierea în registru, verificați că ați activat serviciul Windows Error Reporting.
> - Apoi apăsați combinația Windows + R (tasta Windows se află între ctrl și alt), ori deschideți cmd.exe sau Start - Executare; imediat după aceea scrieți gpedit.msc și urmăriți captura de ecran.
>  
> `Configurație computer -> Șabloane administrative -> Componente Windows -> Raportare erori Windows`
>  
> ![](https://i.imgur.com/PLQ8mf3.jpg)
>  
> * ![](https://i.imgur.com/vqDiJ67.png) [add_RegistryDumps.zip](http://aghl.ru/forum/download/file.php?id=3071) \ ![](https://i.imgur.com/Uy97ydR.png) oglindă pentru ["add_RegistryDumps.zip"](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/add_RegistryDumps.zip) 
> * ![](https://i.imgur.com/vqDiJ67.png) [remove_RegistryDumps.zip](http://aghl.ru/forum/download/file.php?id=3536) \ ![](https://i.imgur.com/Uy97ydR.png) oglindă pentru ["remove_RegistryDumps.zip"](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/remove_RegistryDumps.zip) 
>  

#### Folosind utilitarul userdumps
* Instrucțiuni de la _unKn0wn_:

>
> Metodă de obținere a fișierelor de blocaj cu utilitarul de la Microsoft: ![](https://i.imgur.com/vqDiJ67.png) [UserModeProcessDumper](http://www.microsoft.com/en-us/download/details.aspx?id=4060) \ ![](https://i.imgur.com/Uy97ydR.png) oglindă pentru ["UserModeProcessDumper8_1_2929_5.zip"](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/UserModeProcessDumper8_1_2929_5.zip).
>
> Mulțumiri lui [Lev](https://github.com/LevShisterov) pentru setări.
>
> ##### 1. Instalare
> Dezarhivați arhiva descărcată (implicit în C:\kktools\userdump8.1).
> - Rulați fișierul setup.exe din directorul:
> - Dacă folosiți Windows XP/2003 pe 32 de biți, atunci C:\kktools\userdump8.1\x86.
> - Dacă folosiți Windows XP/2003 pe 64 de biți, atunci C:\kktools\userdump8.1\x64.
> - În fereastra asistentului de instalare, apăsați Next.
> - (Doar la sistemele pe 32 de biți) În fereastra Terminate Mode, alegeți Disable "Dump on Process Termination" feature și apăsați Next.
>
> ![](https://i.imgur.com/NgjxfPa.png)
>
> - Apăsați Finish și așteptați încheierea instalării.
> În fereastra User Mode Process Dump Setup, apăsați butonul YES (Dacă dintr-un motiv oarecare nu știți cum să ajungeți la meniul de setări userdump, îl găsiți întotdeauna în Panou de control - Process Dumper).
>
> ##### 2. Adăugarea unei aplicații
> În fereastra Properties: User Mode Process Dumper Setup care se deschide, apăsați New, adăugați numele programului dorit, de exemplu: hlds.exe (extensia este obligatorie!) și apăsați OK
>
> ![](https://i.imgur.com/36m9qL1.jpg)
>
> ##### 3. Setări
> În fereastra Properties: User Mode Process Dumper Setup, găsiți regula aplicației pe care tocmai ați creat-o, selectați-o și apăsați butonul Rules
> În fereastra Process Monitoring Ruless for hlds.exe care se deschide
> 1. Alegeți Use custom rules.
> 2. Dacă este nevoie, schimbați folderul în care sunt păstrate fișierele create.
> 3. La Exception Codes, selectați (cu clic stânga) următoarele coduri: "Access Violation, Overflow, Illegal Instruction, Stack overflow."
> 4. Setați parametrul Save Mode la Cyclic saving (5 times).
> Ar trebui să arate cam așa:
>
> ![](https://i.imgur.com/sio3Aac.jpg)
>
> P.S.: recomand să îl folosiți împreună cu Dr Watson, cu tipul de fișier "Brief", fiindcă Dr Watson păstrează jurnale în format text, ceea ce vă permite să alegeți fișierele necesare. Iar userdump creează fișierele complete.
>

### ![](https://i.imgur.com/AzhAYR4.png) Linux

Serverul trebuie pornit cu opțiunea **-debug**.

Dacă gdb este instalat în sistem, informații clare despre eroare sunt scrise automat în fișierul `debug.log`. De aceea este recomandat să îl instalați (comanda depinde de sistemul folosit; pe Debian\Ubuntu este `apt install gdb`). Deși acest lucru nu este obligatoriu pentru crearea fișierelor de blocaj, este bine să îl faceți ori de câte ori se poate, fiindcă locul defecțiunii ajunge în `debug.log`, ceea ce permite să se spună ceva despre eroare imediat. Obținerea acelorași informații pe un alt sistem, dintr-un fișier de blocaj, ar necesita toate binarele de pe server.

Implicit, fișierul de blocaj se numește `core`, este scris în folderul de lucru și, prin urmare, va fi suprascris. Ca să evitați acest lucru, puteți adăuga ID-ul procesului la nume:

`echo 1 > /proc/sys/kernel/core_uses_pid`

sau puteți direcționa fișierele către `/tmp`:

`echo /tmp/%e-%t-%p-%c.dmp > /proc/sys/kernel/core_pattern` Mai multe informații ![](https://i.imgur.com/vqDiJ67.png)[aici](http://man7.org/linux/man-pages/man5/core.5.html).

Pornire fără `sudo` (ca root; altfel setările generale ale sistemului trebuie puse pe unlimited):

`ulimit -c unlimited && ./hlds_run -debug ...`

Pornire cu `sudo` (ca utilizatorul hlds):

`ulimit -Hc unlimited && sudo -u hlds sh -c "ulimit -Sc unlimited && ./hlds_run -debug ..."`

Verificarea pornirii cu sudo:

`ulimit -Hc unlimited && sudo -u hlds sh -c "ulimit -Sc unlimited && whoami && ulimit -Sc && ./hlds_run -debug ..."`

afișează numele utilizatorului sub care se va face pornirea și limita de creare a fișierelor de blocaj, după care pornește serverul.

Ca să testați setările fișierelor de blocaj, puteți folosi un modul creat special în acest scop: ![](https://i.imgur.com/vqDiJ67.png) [FixItAll](http://aghl.ru/forum/viewtopic.php?f=19&t=1680&p=19549) \ ![](https://i.imgur.com/Uy97ydR.png) [Oglindă FixItAll](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/fixitall_mm.0.0.zip) or ![](https://i.imgur.com/Uy97ydR.png) [Crash.sma*](https://github.com/EpicMorgGames/LegacyMods/blob/master/AGHL.ru/Crash.sma).

* crash.sma - https://github.com/rehlds/metamod-r/issues/42#issuecomment-416456526

***

### Tabel rezumativ:

`Folder` - directorul modului sau al jocului dumneavoastră. În coloanele ![](https://i.imgur.com/t23p9tU.png) și ![](https://i.imgur.com/AzhAYR4.png) se află numele fișierelor executabile din folderul `dlls`, aflat în directorul modului sau al jocului dumneavoastră.

:x: - nu există versiune pentru această platformă

| Joc \ Mod | Folder |   ![](https://i.imgur.com/t23p9tU.png) | ![](https://i.imgur.com/AzhAYR4.png)
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
| [Earth's Special Forces (vechi)](http://www.moddb.com/mods/earths-special-forces/downloads/) | esf | hl.dll | hl.so (se află în `linuxdll`, nu în directorul `dlls`)
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
| [StargateTC (vechi, 1.x)](http://www.moddb.com/mods/stargatetc/downloads/) | stargatetc | hl.dll | hl.so
| [StargateTC (actualizat, 2.x)](http://www.moddb.com/mods/stargatetc/downloads/) | stargatetc | hl.dll | stc.so
| [StargateTC (actualizat, 2.x)](http://www.moddb.com/mods/stargatetc/downloads/) | stargatetc | hl.dll | stc_i386_opt.so
| [Sven Coop (vechi)](http://store.steampowered.com/app/225840/Sven_Coop/) | svencoop | hl.dll | hl.so 
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
| [Wizard Wars (vechi)](http://www.moddb.com/mods/wizard-wars/downloads/) | wizwars | mp.so | hl.dll 
| [WormsHL](http://www.moddb.com/mods/wormshl/downloads/) | wormshl | wormshl.dll | wormshl.so  
| [Zombie Panic](http://www.moddb.com/mods/zombie-panic/downloads/) | zp | mp.dll | hl.so   

***
Orice ajutor și orice contribuție la proiect sunt binevenite. Cu cât sunt mai multe teste și mai multă părere din partea utilizatorilor, cu atât se dezvoltă mai bine Metamod-r și celelalte produse înrudite. Mult succes!
