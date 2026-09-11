---
id: rehlds-install
title: Installation
sidebar_position: 2
description: ReHLDS is a re-engineered version of the original HLDS, providing enhanced security, performance, and modding capabilities for games like Half-Life and Counter-Strike 1.6.
slug: /rehlds/install
---

<head>
  <title>ReHLDS: Installing | ReHLDS</title>
</head>

# Installation

ReHLDS is a drop-in replacement for the HLDS engine binary. You install it by downloading a base HLDS server through Steam, then overwriting the engine binary with the ReHLDS build.

## 1. Install the base HLDS server

ReHLDS requires the **pre-anniversary** Steam build of HLDS (engine version 8684 or lower). Download it with `steamcmd`:

```text
app_set_config 90 mod cstrike
app_update 90 -beta steam_legacy validate
```

Change `mod cstrike` to your target mod if you are not running Counter-Strike 1.6.

:::warning

ReHLDS is not compatible with old 5xxx-and-below builds installed through the legacy `hldsupdatetool`. Always install through `steamcmd` as shown above.

:::

## 2. Download ReHLDS

Get a build from one of:

- [Release builds](https://github.com/rehlds/ReHLDS/releases) — stable, recommended for production servers.
- [Dev builds](https://github.com/rehlds/ReHLDS/actions/workflows/build.yml) — latest CI artifacts, useful for testing upcoming fixes.

Pick the archive matching your server's platform (Windows or Linux 32-bit).

## 3. Replace the engine binary

1. Stop the server completely.
2. Back up your current engine binary.
3. Copy the ReHLDS binary over the original:

| Platform | Replace | Optional debug symbols |
| --- | --- | --- |
| Windows | `swds.dll` | `swds.pdb` |
| Linux | `engine_i486.so` | — |

The Windows archive also ships `hlds.exe` / `hltv.exe` and the ReHLTV component DLLs (`core.dll`, `proxy.dll`, `demoplayer.dll`, `director.dll`, `filesystem_stdio.dll`); copy the ones your setup uses along with `swds.dll`.

4. On Linux, make sure the replaced file keeps the same permissions (readable and executable by the account running the server).
5. Start the server. ReHLDS identifies itself in the startup console output, so you can confirm the replacement worked by checking the log.

## Verifying release signatures (optional but recommended)

Linux release archives are signed with GPG. The public key fingerprint is:

```text
63547829004f07716f7be4856c32c4282e60fb67
```

1. Download the key from a keyserver, for example [keyserver.ubuntu.com](https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x63547829004f07716f7be4856c32c4282e60fb67).
2. Import it:

```bash
gpg --import 63547829004f07716f7be4856c32c4282e60fb67.asc
```

3. Download both the release archive and its accompanying `.asc` signature file.
4. Verify:

```bash
gpg --verify some-rehlds.zip.asc some-rehlds.zip
```

## Compatibility notes

- ReHLDS is **not binary-compatible** with the original HLDS (it is built with different compilers). Plugins that do raw binary patching or signature scanning of the engine — Orpheu being a known example — may not work unless they explicitly support ReHLDS.
- If you plan to run Metamod-R, ReAPI, or ReGameDLL_CS, install ReHLDS first — those projects assume ReHLDS is already in place. See [Metamod-R installation](/docs/metamod-r/install) and [ReGameDLL_CS installation](/docs/regamedll-cs/install).
