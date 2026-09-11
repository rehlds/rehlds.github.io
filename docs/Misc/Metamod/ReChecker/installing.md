---
id: rechecker-install
title: "ReChecker: Installation"
sidebar_label: Installation
sidebar_position: 2
description: ReChecker - Metamod plugin that gives the ability to check client files by their name and md5 hash.
slug: /rechecker/install
keywords:
  - rechecker
  - metamod
  - plugin
  - install
tags:
  - rechecker
  - install
last_update:
  date: 07/21/2025
  author: STAM
---

# Installation

ReChecker is a Metamod plugin and requires [ReHLDS](/docs/rehlds/install) plus Metamod (Metamod-R recommended) to already be installed and working.

## 1. Get ReChecker

Download a build from the [releases page](https://github.com/rehlds/ReChecker/releases), or [build it from source](./compilling.md).

## 2. Place the plugin

Create a `rechecker` folder under `addons` in your mod directory and place the binary matching your platform there:

| Platform | File | Destination |
| --- | --- | --- |
| Windows | `rechecker_mm.dll` | `<mod>/addons/rechecker/rechecker_mm.dll` |
| Linux | `rechecker_mm_i386.so` | `<mod>/addons/rechecker/rechecker_mm_i386.so` |

## 3. Add the rules file

Copy the project's [`dist/resources.ini`](https://github.com/rehlds/ReChecker/blob/master/dist/resources.ini) template next to the binary:

```text
<mod>/addons/rechecker/resources.ini
```

ReChecker reads `resources.ini` from the same directory as its own binary, not from the mod root. See [Settings](./settings.md) for the file format.

## 4. Register the plugin with Metamod

Add a line to `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\rechecker\rechecker_mm.dll
linux addons/rechecker/rechecker_mm_i386.so
```

## 5. Verify

Start the server and run `meta list` in the console — you should see `Rechecker` listed as loaded. If it fails to load, confirm the server is actually running ReHLDS (ReChecker uses ReHLDS's extended engine API and will refuse to load on plain HLDS).
