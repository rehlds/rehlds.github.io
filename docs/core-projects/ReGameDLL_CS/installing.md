---
id: regamedll-cs-install
title: Installation and updates
sidebar_position: 2
description: Install or update the current ReGameDLL_CS release on Counter-Strike 1.6 and Condition Zero servers.
slug: /regamedll-cs/install
---

# Installation and updates

These instructions apply to dedicated Counter-Strike 1.6 and Counter-Strike: Condition Zero servers on Windows or 32-bit Linux.

## Before you begin

1. Stop the server completely.
2. Back up the target mod directory (`cstrike` or `czero`), especially its `dlls` folder and configuration files.
3. Download `regamedll-bin-*.zip` from the [latest stable release](https://github.com/rehlds/ReGameDLL_CS/releases/latest).

:::note

The release page also provides a `.zip.asc` signature file. It is a signature for verification, not the server package itself.

:::

## Select the correct platform build

| Server platform | Folder inside the archive | Main binary |
| --- | --- | --- |
| Windows | `bin/win32/cstrike` | `dlls/mp.dll` |
| Linux x86 | `bin/linux32/cstrike` | `dlls/cs.so` |

The archive uses the folder name `cstrike` for both supported games. When installing on Condition Zero, copy the contents of that folder into your server's `czero` directory instead.

## Install on Windows

1. Open `bin/win32/cstrike` in the downloaded archive.
2. Copy its contents into the target mod directory:
   - CS 1.6: `<server>/cstrike`
   - Condition Zero: `<server>/czero`
3. Confirm that `<mod>/dlls/mp.dll` was replaced.
4. Merge the supplied configuration files as described below.

## Install on Linux

Extract the archive, then copy the Linux build into the target mod directory. For CS 1.6, for example:

```bash
unzip regamedll-bin-*.zip
cp -a bin/linux32/cstrike/. /path/to/server/cstrike/
```

For Condition Zero, use `/path/to/server/czero/` as the destination. Confirm that `<mod>/dlls/cs.so` was replaced and remains readable by the account that runs the server.

## Merge configuration files

Do not blindly overwrite configuration that you have already customized.

| File | Purpose |
| --- | --- |
| `game.cfg` | ReGameDLL_CS gameplay settings and extended CVars. |
| `game_init.cfg` | Early GameDLL settings such as `bot_enable` and `hostage_ai_enable`. |
| `delta.lst` | Network delta definitions shipped with the current build. Keep this file in sync with the release. |

For a first installation, copy all three files. During an update:

1. Replace the GameDLL and `delta.lst` with the release versions.
2. Compare your `game.cfg` and `game_init.cfg` with the new copies.
3. Merge new CVars and comments while preserving your chosen values.

The latest upstream templates are [`game.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game.cfg) and [`game_init.cfg`](https://github.com/rehlds/ReGameDLL_CS/blob/master/dist/game_init.cfg).

## Start and verify

Start the server and run:

```text
game version
```

If the command is unknown, the new GameDLL was not loaded. Check the selected platform binary, target mod directory, file permissions, and the `gamedll` / `gamedll_linux` entries in the mod's `liblist.gam`.

## Updating an existing installation

Follow the same process as a new installation: stop the server, back up the files, replace the correct GameDLL and `delta.lst`, merge configuration changes, then verify with `game version`.

Review the [release notes](https://github.com/rehlds/ReGameDLL_CS/releases) before updating. New releases may add CVars or change API behavior that affects ReAPI or server plugins.

## Optional beta mode

ReGameDLL_CS retains an optional beta mode containing the latest changes derived from Valve's official Counter-Strike version. Add `-beta` to the HLDS command line only when you intentionally want to test that mode. Test plugin compatibility before using it on a production server.
