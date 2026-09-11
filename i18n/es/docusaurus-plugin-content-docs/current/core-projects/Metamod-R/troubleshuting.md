---
id: metamod-r-troubbleshouting
title: Solución de problemas
sidebar_position: 4
description: Metamod-R es una versión optimizada del Metamod original que mejora el rendimiento y la compatibilidad en servidores de Half-Life 1.
slug: /metamod-r/troubbleshouting
---

<head>
  <title>Metamod-R: Solución de problemas | ReHLDS</title>
</head>

# Solución de problemas

## Cómo informar correctamente de un problema:

Si quieres hacer una propuesta, informar de un error o de un fallo, o necesitas ayuda «en directo», siempre puedes acudir [aquí](https://github.com/rehlds/metamod-r/issues). Basta con pulsar el botón verde `New issue` y rellenar el formulario.

Los desarrolladores agradecerán que la descripción del problema sea lo más detallada posible:
* La versión de tu sistema operativo;
 La versión (número de build) del servidor HLDS, o de [ReHLDS](https://github.com/rehlds/ReHLDS);
* La versión de tu juego (o mod);
* La versión de Metamod-r (número de build o fecha de compilación);
  - Si quieres, añade la lista de módulos (escribiendo `meta list` en la consola del servidor).
* Adjunta los registros;
* Adjunta los volcados de fallos;

Esto permitirá un análisis más a fondo y, con suerte, corregir tus problemas en el futuro.

***
 

## Cómo obtener volcados de fallos de HLDS\reHLDS

![](https://i.imgur.com/vqDiJ67.png) [Fuente principal (ruso)](https://aghl.ru/forum/viewtopic.php?f=10&t=1441).
![](https://i.imgur.com/vqDiJ67.png) [Espejo (ruso)](https://dev-cs.ru/threads/1532/).

**No publiques los volcados sin más en internet: suelen contener información completa del servidor, incluido el rcon. Para enviarlos puedes comprimirlos con contraseña, lo que además resulta práctico porque se comprimen muy bien.**
 
### ![](https://i.imgur.com/t23p9tU.png) Windows

#### Mediante WER (Informe de errores de Windows):
* Activa WER (los informes de errores):
- Antes de Vista:
- Ejecuta drwtsn32.exe y selecciona "Full" junto a Crash Dump File. Ahí también puedes ver (o configurar) dónde se guardarán los volcados.
- En Vista y posteriores:
- Editando el registro; este método cómodo es de [s1lent](https://github.com/s1lentq):
>
> #### Una forma detallada y rápida de configurar el registro para obtener volcados, pensada para principiantes.
>
> * Ajustes:
> - **NAME_APP** - `hlds.exe`
> - nombre de la aplicación de la que hay que generar volcados si se cierra de forma inesperada.
> - **REG_LINK** - `HKLM\Software\Microsoft\Windows\Windows Error Reporting`
> - ruta de la sección Informe de errores de Windows (lo más probable es que no haga falta cambiarla; creo que las rutas son iguales en todas las versiones de Windows)
> - **DumpType** - `2`
> - `0` — volcado normal
> - `1` — volcado mínimo
> - `2` — volcado completo
> - DumpCount - `15`
> - número de volcados que se conservan; si en la carpeta hay más de los indicados, se borra el más antiguo para dejar sitio al nuevo.
> - **DumpFolder** - `C:\CrashDumps`
> - ruta de la carpeta donde se guardarán los volcados.
> - (para evitar problemas, no uses espacios ni caracteres cirílicos en las rutas)
> * Instalación:
> - Descarga el archivo y descomprímelo.
> - Ejecuta add_RegistryDumps.bat
>
> - Tras escribir en el registro, asegúrate de que el servicio Informe de errores de Windows está activado.
> - Después pulsa Windows + R (la tecla Windows está entre ctrl y alt), o abre cmd.exe o «Inicio - Ejecutar»; escribe a continuación gpedit.msc y sigue la captura de pantalla.
>  
> `Configuración del equipo -> Plantillas administrativas -> Componentes de Windows -> Informe de errores de Windows`
>  
> ![](https://i.imgur.com/PLQ8mf3.jpg)
>  
> * ![](https://i.imgur.com/vqDiJ67.png) [add_RegistryDumps.zip](http://aghl.ru/forum/download/file.php?id=3071) \ ![](https://i.imgur.com/Uy97ydR.png) espejo de ["add_RegistryDumps.zip"](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/add_RegistryDumps.zip) 
> * ![](https://i.imgur.com/vqDiJ67.png) [remove_RegistryDumps.zip](http://aghl.ru/forum/download/file.php?id=3536) \ ![](https://i.imgur.com/Uy97ydR.png) espejo de ["remove_RegistryDumps.zip"](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/remove_RegistryDumps.zip) 
>  

#### Mediante la utilidad userdumps
* Instrucciones de _unKn0wn_:

>
> Método para obtener volcados con la utilidad de Microsoft: ![](https://i.imgur.com/vqDiJ67.png) [UserModeProcessDumper](http://www.microsoft.com/en-us/download/details.aspx?id=4060) \ ![](https://i.imgur.com/Uy97ydR.png) espejo de ["UserModeProcessDumper8_1_2929_5.zip"](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/UserModeProcessDumper8_1_2929_5.zip).
>
> Gracias a [Lev](https://github.com/LevShisterov) por los ajustes.
>
> ##### 1. Instalación
> Descomprime el archivo descargado (de forma predeterminada, C:\kktools\userdump8.1).
> - Ejecuta setup.exe desde el directorio:
> - Si usas Windows XP/2003 de 32 bits, C:\kktools\userdump8.1\x86.
> - Si usas Windows XP/2003 de 64 bits, C:\kktools\userdump8.1\x64.
> - En la ventana del asistente de instalación, pulsa Next.
> - (Solo en sistemas de 32 bits) En la ventana Terminate Mode, selecciona Disable "Dump on Process Termination" feature y pulsa Next.
>
> ![](https://i.imgur.com/NgjxfPa.png)
>
> - Pulsa Finish y espera a que termine la instalación.
> En la ventana User Mode Process Dump Setup, pulsa el botón YES (si no sabes cómo llegar al menú de ajustes de userdump, siempre lo tienes en Panel de control - Process Dumper).
>
> ##### 2. Añadir una aplicación
> En la ventana Properties: User Mode Process Dumper Setup que se abre, pulsa New y añade el nombre del programa que nos interesa, por ejemplo hlds.exe (¡la extensión es obligatoria!), y pulsa OK
>
> ![](https://i.imgur.com/36m9qL1.jpg)
>
> ##### 3. Ajustes
> En la ventana Properties: User Mode Process Dumper Setup, localiza la regla que acabas de crear, selecciónala y pulsa el botón Rules
> En la ventana Process Monitoring Ruless for hlds.exe que se abre
> 1. Selecciona Use custom rules.
> 2. Si hace falta, cambia la carpeta donde se guardan los volcados.
> 3. En Exception Codes, marca (con el botón izquierdo) estos códigos: "Access Violation, Overflow, Illegal Instruction, Stack overflow".
> 4. Pon el parámetro Save Mode en Cyclic saving (5 veces).
> El resultado debería ser más o menos así:
>
> ![](https://i.imgur.com/sio3Aac.jpg)
>
> P. D.: recomiendo usarlo junto con Dr Watson con el tipo de volcado "Brief", ya que este guarda los registros en texto y así puedes elegir los volcados que te interesan. Userdump, por su parte, generará los volcados completos.
>

### ![](https://i.imgur.com/AzhAYR4.png) Linux

El servidor debe arrancarse con el parámetro **-debug**.

Si gdb está instalado en el sistema, la información precisa del error se escribirá automáticamente en `debug.log`. Por eso conviene instalarlo (el comando depende del sistema; en Debian\Ubuntu es `apt install gdb`). Aunque no hace falta para generar volcados, es recomendable hacerlo siempre que sea posible: en `debug.log` queda registrado el punto del fallo, lo que permite decir algo sobre el error de inmediato. Obtener esa misma información en otra máquina a partir del archivo de volcado exigiría disponer de todos los binarios del servidor.

De forma predeterminada el archivo de volcado se llama `core`, se escribe en el directorio de trabajo y, por tanto, se sobrescribe. Para evitarlo, puedes añadir el identificador del proceso al nombre:

`echo 1 > /proc/sys/kernel/core_uses_pid`

o bien enviar los volcados a `/tmp`:

`echo /tmp/%e-%t-%p-%c.dmp > /proc/sys/kernel/core_pattern` Más información ![](https://i.imgur.com/vqDiJ67.png)[here](http://man7.org/linux/man-pages/man5/core.5.html).

Arranque sin `sudo` (como root; en caso contrario, el ajuste general del sistema debe estar en unlimited):

`ulimit -c unlimited && ./hlds_run -debug ...`

Arranque con `sudo` (como usuario hlds):

`ulimit -Hc unlimited && sudo -u hlds sh -c "ulimit -Sc unlimited && ./hlds_run -debug ..."`

Comprobación del arranque con sudo:

`ulimit -Hc unlimited && sudo -u hlds sh -c "ulimit -Sc unlimited && whoami && ulimit -Sc && ./hlds_run -debug ..."`

muestra el nombre del usuario con el que se arrancará y el límite de creación de volcados, y a continuación inicia el servidor.

Para comprobar la configuración de volcados puedes usar un módulo creado a tal efecto: ![](https://i.imgur.com/vqDiJ67.png) [FixItAll](http://aghl.ru/forum/viewtopic.php?f=19&t=1680&p=19549) \ ![](https://i.imgur.com/Uy97ydR.png) [FixItAll mirror](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/fixitall_mm.0.0.zip) or ![](https://i.imgur.com/Uy97ydR.png) [Crash.sma*](https://github.com/EpicMorgGames/LegacyMods/blob/master/AGHL.ru/Crash.sma).

* crash.sma - https://github.com/rehlds/metamod-r/issues/42#issuecomment-416456526

***

### Tabla resumen:

`Folder`: el directorio de tu mod o juego. En las columnas ![](https://i.imgur.com/t23p9tU.png) and ![](https://i.imgur.com/AzhAYR4.png) se indican los nombres de los ejecutables de la carpeta `dlls`, situada dentro del directorio de tu mod o juego.

:x: — no existe versión para esa plataforma

| Juego \ Mod | Carpeta |   ![](https://i.imgur.com/t23p9tU.png) | ![](https://i.imgur.com/AzhAYR4.png)
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
| [Earth's Special Forces (Old)](http://www.moddb.com/mods/earths-special-forces/downloads/) | esf | hl.dll | hl.so (está en `linuxdll`, no en el directorio `dlls`)
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
Toda ayuda y contribución al proyecto es bienvenida. Cuantas más pruebas y más comentarios haya, mejor avanzarán Metamod-r y los productos relacionados. ¡Suerte!
