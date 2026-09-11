---
id: metamod-r-troubbleshouting
title: Solução de problemas
sidebar_position: 4
description: O Metamod-R é uma versão otimizada do Metamod original, com mais desempenho e melhor compatibilidade para servidores de Half-Life 1.
slug: /metamod-r/troubbleshouting
---

<head>
  <title>Metamod-R: Solução de problemas | ReHLDS</title>
</head>

# Solução de problemas

## Como relatar um problema corretamente:

Se você quiser fazer uma sugestão, registrar um erro ou uma falha sua, ou ainda precisar de ajuda "ao vivo", pode sempre recorrer a [este endereço](https://github.com/rehlds/metamod-r/issues). Basta clicar no botão verde `New issue` e preencher o formulário.

Os desenvolvedores agradecem se a descrição do problema for o mais detalhada possível:
* A versão do seu sistema operacional;
 A versão (número da build) do servidor HLDS (ou do [ReHLDS](https://github.com/rehlds/ReHLDS));
* A versão do seu jogo (ou mod);
* A versão do Metamod-r (número ou data da build);
  - Você também pode informar a lista de módulos (digitando `meta list` no console do servidor).
* Anexe os logs;
* Anexe os crashdumps;

Isso ajuda em uma análise mais minuciosa e, possivelmente, na correção dos seus problemas no futuro.

***
 

## Como obter dumps de travamento do HLDS\reHLDS

![](https://i.imgur.com/vqDiJ67.png) [Fonte principal (em russo)](https://aghl.ru/forum/viewtopic.php?f=10&t=1441).
![](https://i.imgur.com/vqDiJ67.png) [Espelho (em russo)](https://dev-cs.ru/threads/1532/).

**Não publique dumps abertamente na internet, porque eles costumam conter informações completas sobre o servidor, inclusive o rcon e afins. Para enviá-los, compacte-os com senha, o que também é útil porque eles comprimem muito bem.**
 
### ![](https://i.imgur.com/t23p9tU.png) Windows

#### Usando o WER (Relatório de Erros do Windows):
* Ative o WER (relatórios de erro):
- Antes do Vista:
- Execute o drwtsn32.exe e escolha "Full" ao lado de Crash Dump File. Ali você também vê (ou configura) onde os dumps serão guardados.
- No Vista e posteriores:
- Editando o registro, um método prático do [s1lent](https://github.com/s1lentq):
>
> #### Um jeito detalhado e rápido de configurar o registro para receber dumps, voltado a iniciantes.
>
> * Configurações:
> - **NAME_APP** - `hlds.exe`
> - nome da aplicação que precisará gerar dumps em caso de travamento.
> - **REG_LINK** - `HKLM\Software\Microsoft\Windows\Windows Error Reporting`
> - caminho para a seção do Windows Error Reporting (esta configuração provavelmente não precisa ser alterada; creio que os caminhos sejam os mesmos em todas as versões do Windows)
> - **DumpType** - `2`
> - `0` - Dump normal
> - `1` - Dump mínimo
> - `2` - Dump completo
> - DumpCount - `15`
> - quantidade de dumps a criar; se o número de dumps na pasta ultrapassar esse valor, o dump antigo é apagado para dar lugar ao novo.
> - **DumpFolder** - `C:\CrashDumps`
> - caminho da pasta onde os dumps serão guardados.
> - (para evitar problemas, não use espaços nem caracteres cirílicos nos caminhos)
> * Instalação:
> - Baixe o arquivo compactado e extraia-o.
> - Execute o add_RegistryDumps.bat
>
> - Depois de gravar no registro, confirme que você ativou o serviço Windows Error Reporting.
> - Em seguida pressione as teclas Windows + R (a tecla Windows fica entre o ctrl e o alt), ou abra o cmd.exe, ou use Iniciar - Executar; logo depois digite gpedit.msc e veja a captura de tela.
>  
> `Configuração do Computador -> Modelos Administrativos -> Componentes do Windows -> Relatório de Erros do Windows`
>  
> ![](https://i.imgur.com/PLQ8mf3.jpg)
>  
> * ![](https://i.imgur.com/vqDiJ67.png) [add_RegistryDumps.zip](http://aghl.ru/forum/download/file.php?id=3071) \ ![](https://i.imgur.com/Uy97ydR.png) espelho de ["add_RegistryDumps.zip"](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/add_RegistryDumps.zip) 
> * ![](https://i.imgur.com/vqDiJ67.png) [remove_RegistryDumps.zip](http://aghl.ru/forum/download/file.php?id=3536) \ ![](https://i.imgur.com/Uy97ydR.png) espelho de ["remove_RegistryDumps.zip"](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/remove_RegistryDumps.zip) 
>  

#### Usando o utilitário userdumps
* Instruções de _unKn0wn_:

>
> Método para obter dumps com o utilitário da Microsoft: ![](https://i.imgur.com/vqDiJ67.png) [UserModeProcessDumper](http://www.microsoft.com/en-us/download/details.aspx?id=4060) \ ![](https://i.imgur.com/Uy97ydR.png) espelho de ["UserModeProcessDumper8_1_2929_5.zip"](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/UserModeProcessDumper8_1_2929_5.zip).
>
> Agradecimentos ao [Lev](https://github.com/LevShisterov) pelas configurações.
>
> ##### 1. Instalação
> Extraia o arquivo que você baixou (por padrão, em C:\kktools\userdump8.1).
> - Execute o arquivo setup.exe do diretório:
> - Se você usa o Windows XP/2003 de 32 bits, então C:\kktools\userdump8.1\x86.
> - Se você usa o Windows XP/2003 de 64 bits, então C:\kktools\userdump8.1\x64.
> - Na janela do assistente de instalação, clique em Next.
> - (Apenas em sistemas de 32 bits) Na janela Terminate Mode, escolha Disable "Dump on Process Termination" feature e clique em Next.
>
> ![](https://i.imgur.com/NgjxfPa.png)
>
> - Clique em Finish e aguarde a conclusão da instalação.
> Na janela User Mode Process Dump Setup, clique no botão YES (se por algum motivo você não souber como abrir o menu de configurações do userdump, ele está sempre no Painel de Controle - Process Dumper).
>
> ##### 2. Como adicionar uma aplicação
> Na janela Properties: User Mode Process Dumper Setup que se abre, clique em New, adicione o nome do programa desejado, por exemplo: hlds.exe (a extensão é obrigatória!) e clique em OK
>
> ![](https://i.imgur.com/36m9qL1.jpg)
>
> ##### 3. Configurações
> Na janela Properties: User Mode Process Dumper Setup, localize a regra da aplicação que você acabou de criar, selecione-a e clique no botão Rules
> Na janela Process Monitoring Ruless for hlds.exe que se abre
> 1. Escolha Use custom rules.
> 2. Se necessário, mude a pasta onde os dumps criados serão guardados.
> 3. Em Exception Codes, selecione (com o clique esquerdo) os seguintes códigos: "Access Violation, Overflow, Illegal Instruction, Stack overflow."
> 4. Defina o parâmetro Save Mode como Cyclic saving (5 times).
> Deve ficar parecido com isto:
>
> ![](https://i.imgur.com/sio3Aac.jpg)
>
> Obs.: recomendo usá-lo junto com o Dr Watson no tipo de dump "Brief", já que o Dr Watson mantém logs em formato de texto, o que permite escolher os dumps necessários. E o userdump gera os dumps completos.
>

### ![](https://i.imgur.com/AzhAYR4.png) Linux

O servidor precisa ser iniciado com a flag **-debug**.

Se o gdb estiver instalado no sistema, informações claras sobre o erro são gravadas automaticamente no arquivo `debug.log`. Por isso, é recomendável instalá-lo (o comando depende do sistema usado; no Debian\Ubuntu é `apt install gdb`). Embora isso não seja obrigatório para gerar dumps, é bom fazê-lo sempre que possível, já que o local do travamento fica registrado no `debug.log`, o que permite dizer algo sobre o erro de imediato. Obter a mesma informação em outro sistema a partir de um arquivo de dump exigiria todos os binários do servidor.

Por padrão, o arquivo de dump se chama `core`, é gravado na pasta de trabalho e, portanto, será sobrescrito. Para evitar isso, você pode acrescentar o ID do processo ao nome:

`echo 1 > /proc/sys/kernel/core_uses_pid`

ou direcionar os dumps para `/tmp`:

`echo /tmp/%e-%t-%p-%c.dmp > /proc/sys/kernel/core_pattern` Mais informações ![](https://i.imgur.com/vqDiJ67.png)[aqui](http://man7.org/linux/man-pages/man5/core.5.html).

Execução sem `sudo` (como root; caso contrário, as configurações gerais do sistema devem estar definidas como unlimited):

`ulimit -c unlimited && ./hlds_run -debug ...`

Execução com `sudo` (como o usuário hlds):

`ulimit -Hc unlimited && sudo -u hlds sh -c "ulimit -Sc unlimited && ./hlds_run -debug ..."`

Verificação da execução com sudo:

`ulimit -Hc unlimited && sudo -u hlds sh -c "ulimit -Sc unlimited && whoami && ulimit -Sc && ./hlds_run -debug ..."`

mostra o nome do usuário sob o qual a execução vai ocorrer e o limite de criação de dumps, e em seguida inicia o servidor.

Para testar as configurações de dump, você pode usar um módulo feito especialmente para isso: ![](https://i.imgur.com/vqDiJ67.png) [FixItAll](http://aghl.ru/forum/viewtopic.php?f=19&t=1680&p=19549) \ ![](https://i.imgur.com/Uy97ydR.png) [espelho do FixItAll](https://github.com/EpicMorgGames/LegacyMods/raw/master/AGHL.ru/fixitall_mm.0.0.zip) ou ![](https://i.imgur.com/Uy97ydR.png) [Crash.sma*](https://github.com/EpicMorgGames/LegacyMods/blob/master/AGHL.ru/Crash.sma).

* crash.sma - https://github.com/rehlds/metamod-r/issues/42#issuecomment-416456526

***

### Tabela-resumo:

`Pasta` - o diretório do seu mod ou jogo. Nas colunas ![](https://i.imgur.com/t23p9tU.png) e ![](https://i.imgur.com/AzhAYR4.png) estão os nomes dos arquivos executáveis da pasta `dlls`, que fica dentro do diretório do seu mod ou jogo.

:x: - não existe versão para essa plataforma

| Jogo \ Mod | Pasta |   ![](https://i.imgur.com/t23p9tU.png) | ![](https://i.imgur.com/AzhAYR4.png)
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
| [Earth's Special Forces (antigo)](http://www.moddb.com/mods/earths-special-forces/downloads/) | esf | hl.dll | hl.so (fica em `linuxdll`, e não no diretório `dlls`)
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
| [StargateTC (antigo, 1.x)](http://www.moddb.com/mods/stargatetc/downloads/) | stargatetc | hl.dll | hl.so
| [StargateTC (atualizado, 2.x)](http://www.moddb.com/mods/stargatetc/downloads/) | stargatetc | hl.dll | stc.so
| [StargateTC (atualizado, 2.x)](http://www.moddb.com/mods/stargatetc/downloads/) | stargatetc | hl.dll | stc_i386_opt.so
| [Sven Coop (antigo)](http://store.steampowered.com/app/225840/Sven_Coop/) | svencoop | hl.dll | hl.so 
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
| [Wizard Wars (antigo)](http://www.moddb.com/mods/wizard-wars/downloads/) | wizwars | mp.so | hl.dll 
| [WormsHL](http://www.moddb.com/mods/wormshl/downloads/) | wormshl | wormshl.dll | wormshl.so  
| [Zombie Panic](http://www.moddb.com/mods/zombie-panic/downloads/) | zp | mp.dll | hl.so   

***
Toda ajuda e contribuição ao projeto é bem-vinda. Quanto mais testes e retorno, mais forte fica o desenvolvimento do Metamod-r e dos outros produtos relacionados. Boa sorte!
