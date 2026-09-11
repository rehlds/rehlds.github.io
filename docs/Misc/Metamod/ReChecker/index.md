---
id: rechecker
title: "ReChecker"
sidebar_label: ReChecker
sidebar_position: 1
description: ReChecker - Metamod plugin that gives the ability to check client files by their name and md5 hash.
slug: /rechecker
keywords:
  - rechecker
  - metamod
  - plugin
tags:
  - rechecker
  - metamod plugin
last_update:
  date: 07/21/2025
  author: STAM
---

# What is ReChecker?

ReChecker is a [Metamod](https://github.com/rehlds/Metamod-R) plugin for [ReHLDS](/docs/rehlds) that inspects files a connecting or downloading client sends through the engine's resource/consistency system and compares them against a rule list you provide. When a file's path and hash (or the fact that it's missing, or unrecognized) matches a rule, ReChecker runs a console command of your choice — typically `kick` or a log message.

It's used to catch known cheat DLLs and injected files by their static file signature (path + a short MD5 prefix), independent of whatever anti-cheat logic runs elsewhere.

## How it works

For every relevant resource transferred by a client, ReChecker checks it against the rules in `resources.ini`:

- A rule can match a **specific hash**, `UNKNOWN` (anything not explicitly recognized), or `MISSING` (the file wasn't sent at all).
- A matching rule runs a configured command, with placeholders such as `[userid]`, `[name]`, `[file_name]`, and `[file_md5hash]` substituted in.
- The `BREAK` flag stops checking further rules for that client once one matches; `IGNORE` whitelists a specific hash.

See [Settings](./settings.md) for the full `resources.ini` format.

## What's included

The project ships a starter `resources.ini` with signatures for a number of historically known cheat files (wallhacks, aimbots, DLL injectors). Treat it as a starting point you maintain yourself — it is not a continuously updated cheat database.

## Requirements

ReChecker depends on [ReHLDS](/docs/rehlds/install)'s extended engine API — it will not load on plain HLDS. It also requires Metamod (Metamod-R recommended) to be installed first. See [Installation](./installing.md).
