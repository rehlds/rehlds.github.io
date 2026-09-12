---
id: metamod-r-troubbleshouting
title: Rozwiązywanie problemów
sidebar_position: 4
description: Metamod-R to zoptymalizowana wersja oryginalnego Metamoda, z lepszą wydajnością i zgodnością dla serwerów Half-Life 1.
slug: /metamod-r/troubbleshouting
---

<head>
  <title>Metamod-R: Rozwiązywanie problemów | ReHLDS</title>
</head>

# Rozwiązywanie problemów

## Jak poprawnie zgłosić problem:

Jeśli chcesz coś zaproponować, zgłosić błąd albo własne niepowodzenie, lub potrzebujesz pomocy „na żywo”, zawsze możesz się zwrócić [tutaj](https://github.com/rehlds/metamod-r/issues). Wystarczy kliknąć zielony przycisk `New issue` i wypełnić formularz.

Twórcy będą wdzięczni, jeśli opis problemu będzie możliwie szczegółowy:
* Wersja twojego systemu operacyjnego;
 Wersja (numer kompilacji) serwera HLDS (albo [ReHLDS](https://github.com/rehlds/ReHLDS));
* Wersja twojej gry (albo modyfikacji);
* Wersja Metamod-r (numer albo data kompilacji);
  - Opcjonalnie możesz podać też listę modułów (wpisując `meta list` w konsoli serwera).
* Dołącz logi;
* Dołącz zrzuty awaryjne;

Pomoże to w dokładniejszej analizie i, być może, w naprawieniu twoich problemów w przyszłości.

***
 

## Jak zdobyć zrzuty awaryjne HLDS\reHLDS

![](https://i.imgur.com/vqDiJ67.png) [Źródło główne (po rosyjsku)](https://aghl.ru/forum/viewtopic.php?f=10&t=1441).
![](https://i.imgur.com/vqDiJ67.png) [Kopia (po rosyjsku)](https://dev-cs.ru/threads/1532/).

**Nie publikuj zrzutów ot tak w internecie, bo często zawierają pełne informacje o serwerze, w tym rcon i podobne dane. Do przekazania spakuj je z hasłem, co jest wygodne również dlatego, że kompresują się bardzo dobrze.**
 
### ![](https://i.imgur.com/t23p9tU.png) Windows

#### Za pomocą WER (Raportowanie błędów systemu Windows):
* Włącz WER (raporty o błędach):
- Przed Vistą:
- Uruchom drwtsn32.exe i wybierz "Full" przy Crash Dump File. Tam też zobaczysz (albo ustawisz), gdzie zrzuty będą zapisywane.
- Na Viście i nowszych:
- Przez edycję rejestru — wygodna metoda od [s1lenta](https://github.com/s1lentq):
>
> #### Szczegółowy i szybki sposób skonfigurowania rejestru pod zrzuty awaryjne, dla początkujących.
>
> * Ustawienia:
> - **NAME_APP** - `hlds.exe`
> - nazwa aplikacji, dla której mają powstawać zrzuty w razie awarii.
> - **REG_LINK** - `HKLM\Software\Microsoft\Windows\Windows Error Reporting`
> - ścieżka do sekcji Windows Error Reporting (tego ustawienia najpewniej nie trzeba zmieniać; wydaje mi się, że ścieżki są takie same we wszystkich wersjach Windowsa)
> - **DumpType** - `2`
> - `0` - Zwykły zrzut
> - `1` - Minimalny zrzut
> - `2` - Pełny zrzut
> - DumpCount - `15`
> - liczba tworzonych zrzutów; jeśli liczba zrzutów w folderze przekroczy podaną wartość, stary zostanie usunięty, żeby zrobić miejsce nowemu.
> - **DumpFolder** - `C:\CrashDumps`
> - ścieżka folderu, w którym będą zapisywane zrzuty.
> - (żeby uniknąć problemów, nie używaj w ścieżkach spacji ani cyrylicy)
> * Instalacja:
> - Pobierz archiwum i je rozpakuj.
> - Uruchom add_RegistryDumps.bat
>
> - Po zapisaniu do rejestru upewnij się, że usługa Windows Error Reporting jest włączona.
> - Następnie naciśnij Windows + R (klawisz Windows jest między ctrl a alt), albo otwórz cmd.exe, albo Start - Uruchom; zaraz potem wpisz gpedit.msc i spójrz na zrzut ekranu.
>  
> `Konfiguracja komputera -> Szablony administracyjne -> Składniki systemu Windows -> Raportowanie błędów systemu Windows`
>  
> ![](https://i.imgur.com/PLQ8mf3.jpg)
>  
> * ![](https://i.imgur.com/vqDiJ67.png) [add_RegistryDumps.zip](http://aghl.ru/forum/download/file.php?id=3071) \ ![](https://i.imgur.com/Uy97ydR.png) kopia ["add_RegistryDumps.zip"](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/add_RegistryDumps.zip) 
> * ![](https://i.imgur.com/vqDiJ67.png) [remove_RegistryDumps.zip](http://aghl.ru/forum/download/file.php?id=3536) \ ![](https://i.imgur.com/Uy97ydR.png) kopia ["remove_RegistryDumps.zip"](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/remove_RegistryDumps.zip) 
>  

#### Za pomocą narzędzia userdumps
* Instrukcja od _unKn0wn_:

>
> Sposób na zdobycie zrzutów przy użyciu narzędzia Microsoftu: ![](https://i.imgur.com/vqDiJ67.png) [UserModeProcessDumper](http://www.microsoft.com/en-us/download/details.aspx?id=4060) \ ![](https://i.imgur.com/Uy97ydR.png) kopia ["UserModeProcessDumper8_1_2929_5.zip"](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/UserModeProcessDumper8_1_2929_5.zip).
>
> Podziękowania dla [Leva](https://github.com/LevShisterov) za ustawienia.
>
> ##### 1. Instalacja
> Rozpakuj pobrane archiwum (domyślnie do C:\kktools\userdump8.1).
> - Uruchom plik setup.exe z katalogu:
> - Jeśli używasz 32-bitowego Windows XP/2003, to C:\kktools\userdump8.1\x86.
> - Jeśli używasz 64-bitowego Windows XP/2003, to C:\kktools\userdump8.1\x64.
> - W oknie kreatora instalacji kliknij Next.
> - (Tylko dla systemów 32-bitowych) W oknie Terminate Mode wybierz Disable "Dump on Process Termination" feature i kliknij Next.
>
> ![](https://i.imgur.com/NgjxfPa.png)
>
> - Kliknij Finish i poczekaj na zakończenie instalacji.
> W oknie User Mode Process Dump Setup kliknij przycisk YES (Jeśli z jakiegoś powodu nie wiesz, jak wejść do ustawień userdump, zawsze znajdziesz je w Panelu sterowania - Process Dumper).
>
> ##### 2. Dodanie aplikacji
> W otwartym oknie Properties: User Mode Process Dumper Setup kliknij New, dodaj nazwę potrzebnego programu, na przykład: hlds.exe (rozszerzenie jest obowiązkowe!) i kliknij OK
>
> ![](https://i.imgur.com/36m9qL1.jpg)
>
> ##### 3. Ustawienia
> W oknie Properties: User Mode Process Dumper Setup znajdź właśnie utworzoną regułę aplikacji, zaznacz ją i kliknij przycisk Rules
> W otwartym oknie Process Monitoring Ruless for hlds.exe
> 1. Wybierz Use custom rules.
> 2. W razie potrzeby zmień folder, w którym zapisywane są zrzuty.
> 3. W Exception Codes zaznacz (lewym przyciskiem) następujące kody: "Access Violation, Overflow, Illegal Instruction, Stack overflow."
> 4. Ustaw parametr Save Mode na Cyclic saving (5 times).
> Powinno to wyglądać mniej więcej tak:
>
> ![](https://i.imgur.com/sio3Aac.jpg)
>
> PS: polecam używać go razem z Dr Watsonem ustawionym na typ zrzutu "Brief", bo Dr Watson prowadzi logi w formacie tekstowym, co pozwala wybrać potrzebne zrzuty. A userdump wykona pełne zrzuty.
>

### ![](https://i.imgur.com/AzhAYR4.png) Linux

Serwer trzeba uruchomić z flagą **-debug**.

Jeśli w systemie zainstalowany jest gdb, czytelne informacje o błędzie trafiają automatycznie do pliku `debug.log`. Dlatego warto go zainstalować (polecenie zależy od systemu; na Debianie\Ubuntu jest to `apt install gdb`). Choć nie jest to konieczne do tworzenia zrzutów, w praktyce warto to zrobić, kiedy tylko się da, bo miejsce awarii zapisuje się w `debug.log`, co pozwala od razu powiedzieć coś o błędzie. Zdobycie tych samych informacji na innym systemie z pliku zrzutu wymagałoby wszystkich plików binarnych z serwera.

Domyślnie plik zrzutu nazywa się `core`, zapisuje się w katalogu roboczym i w związku z tym będzie nadpisywany. Żeby tego uniknąć, możesz dodać do nazwy identyfikator procesu:

`echo 1 > /proc/sys/kernel/core_uses_pid`

albo kierować zrzuty do `/tmp`:

`echo /tmp/%e-%t-%p-%c.dmp > /proc/sys/kernel/core_pattern` Więcej informacji ![](https://i.imgur.com/vqDiJ67.png)[tutaj](http://man7.org/linux/man-pages/man5/core.5.html).

Uruchomienie bez `sudo` (jako root; w przeciwnym razie ogólne ustawienia systemu trzeba ustawić na unlimited):

`ulimit -c unlimited && ./hlds_run -debug ...`

Uruchomienie z `sudo` (jako użytkownik hlds):

`ulimit -Hc unlimited && sudo -u hlds sh -c "ulimit -Sc unlimited && ./hlds_run -debug ..."`

Sprawdzenie uruchomienia przez sudo:

`ulimit -Hc unlimited && sudo -u hlds sh -c "ulimit -Sc unlimited && whoami && ulimit -Sc && ./hlds_run -debug ..."`

wypisuje nazwę użytkownika, na którym nastąpi uruchomienie, oraz limit tworzenia zrzutów, a następnie uruchamia serwer.

Do przetestowania ustawień zrzutów możesz użyć modułu stworzonego specjalnie w tym celu: ![](https://i.imgur.com/vqDiJ67.png) [FixItAll](http://aghl.ru/forum/viewtopic.php?f=19&t=1680&p=19549) \ ![](https://i.imgur.com/Uy97ydR.png) [Kopia FixItAll](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/fixitall_mm.0.0.zip) or ![](https://i.imgur.com/Uy97ydR.png) [Crash.sma*](https://github.com/EpicMorgGames/LegacyMods/blob/master/AGHL.ru/Crash.sma).

* crash.sma - https://github.com/rehlds/metamod-r/issues/42#issuecomment-416456526

***

### Tabela zbiorcza:

`Folder` - katalog twojej modyfikacji albo gry. W kolumnach ![](https://i.imgur.com/t23p9tU.png) i ![](https://i.imgur.com/AzhAYR4.png) znajdują się nazwy plików wykonywalnych z folderu `dlls`, który leży w katalogu twojej modyfikacji albo gry.

:x: - wersja dla tej platformy nie istnieje

| Gra \ Modyfikacja | Folder |   ![](https://i.imgur.com/t23p9tU.png) | ![](https://i.imgur.com/AzhAYR4.png)
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
| [Earth's Special Forces (stary)](http://www.moddb.com/mods/earths-special-forces/downloads/) | esf | hl.dll | hl.so (leży w `linuxdll`, a nie w katalogu `dlls`)
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
| [StargateTC (stary, 1.x)](http://www.moddb.com/mods/stargatetc/downloads/) | stargatetc | hl.dll | hl.so
| [StargateTC (zaktualizowany, 2.x)](http://www.moddb.com/mods/stargatetc/downloads/) | stargatetc | hl.dll | stc.so
| [StargateTC (zaktualizowany, 2.x)](http://www.moddb.com/mods/stargatetc/downloads/) | stargatetc | hl.dll | stc_i386_opt.so
| [Sven Coop (stary)](http://store.steampowered.com/app/225840/Sven_Coop/) | svencoop | hl.dll | hl.so 
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
| [Wizard Wars (stary)](http://www.moddb.com/mods/wizard-wars/downloads/) | wizwars | mp.so | hl.dll 
| [WormsHL](http://www.moddb.com/mods/wormshl/downloads/) | wormshl | wormshl.dll | wormshl.so  
| [Zombie Panic](http://www.moddb.com/mods/zombie-panic/downloads/) | zp | mp.dll | hl.so   

***
Każda pomoc i każdy wkład w projekt są mile widziane. Im więcej testów i opinii, tym lepiej rozwijają się Metamod-r i pozostałe powiązane produkty. Powodzenia!
