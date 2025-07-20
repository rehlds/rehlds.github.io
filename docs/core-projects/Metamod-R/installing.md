---
id: metamod-r-install
title: Installation
sidebar_position: 2
description: Metamod-r is an optimized version of the original Metamod, enhancing performance and compatibility for Half-Life 1 servers.
slug: /metamod-r/install
---

<head>
  <title>Metamod-R: Installing | ReHLDS</title>
</head>

# Installing

Check out [list of supported games](/docs/metamod-r/supported-games) and make sure that there is your game in the list. _Don't be upset if it's not. After installation you can check the performance of **Metamod-r** with your `unsupported` mod after fine tuning by this [article](/docs/metamod-r/settings). There is a possibility that the game will start._

# Compatibility

**Metamod-r is incompatible with original `HLDS`. It's necessary to have installed [ReHLDS](https://github.com/rehlds/ReHLDS) (`API 3.1+`). There is no guarantee that the product will work in a different environment.**

| HLDS| [ReHLDS](https://github.com/rehlds/ReHLDS)| OS
|---------| -------|  -------|  
| :x: | `API 3.1+` | ![](https://i.imgur.com/AzhAYR4.png) ![](https://i.imgur.com/t23p9tU.png) |  

# Installing on the game server
* Download the latest version of _**Metamod-r**_ [![Download](https://camo.githubusercontent.com/2b15ec2fc402e02b66fde9eab7e896406caeddac/687474703a2f2f7265686c64732e6f72672f76657273696f6e2f6d6574616d6f642d2d722e737667)](http://teamcity.rehlds.org/guestAuth/downloadArtifacts.html?buildTypeId=Metamod_Publish&buildId=lastSuccessful) into any convenient place.
* Unzip the folder _**addons**_ into your mod folder from the downloaded zip archive.![](https://i.imgur.com/ptx3MZx.png)
_In case of any problem with determining the name of the directory, please refer to the summary table, which is represented by **[here](/docs/metamod-r/troubbleshouting)**._
* Find the `liblist.gam` file in the mod folder, make a backup copy of it (if you want) and open the file with any convenient text editor.
* Find  in the `liblist.gam` file strings containing `gamedll` and `gamedll_linux`. _For example, `Half-Life 1` 1 would look like this:_
```
gamedll "dlls\hl.dll"
gamedll_linux "dlls/hl.so"
```
_as for `Counter-Strike 1.6`:_

```
gamedll "dlls\mp.dll"
gamedll_linux "dlls/cs.so"
```
* In the desired line replace the contents of the path to metamod-r:

_For Windows versions of your server:_
```
gamedll "addons\metamod\metamod.dll"
```
_For Linux-versions of your server:_
```
gamedll_linux "addons/metamod/metamod_i386.so"
```
* Save the changes to `liblist.gam` file.
* Installation **Metamod-r** is completed.

# Check

After a successful installation of **Metamod-r** you can check the performance by running the game server.

**Metamod-r** works:
![](https://i.imgur.com/VScngBr.png)
If it doesn't,
![](https://i.imgur.com/HPKRiBF.png)
contact [the Troubleshooting guide](/docs/metamod-r/troubbleshouting).
