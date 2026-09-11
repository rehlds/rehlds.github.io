---
id: rechecker-settings
title: "ReChecker: Settings"
sidebar_label: Settings
sidebar_position: 3
description: ReChecker - Metamod plugin that gives the ability to check client files by their name and md5 hash.
slug: /rechecker/settings
keywords:
  - rechecker
  - metamod
  - plugin
  - settings
tags:
  - rechecker
  - settings
last_update:
  date: 07/21/2025
  author: STAM
---

# Settings

ReChecker is configured through `addons/rechecker/resources.ini` (next to its binary) and a single console cvar.

## `resources.ini` format

Each rule is a line with a path, a hash (or a keyword), and a command to run when it matches, with optional flags:

```text
path to file        hash          "exec cmd"      [FLAGS]
"../opengl32.dll"    3cc7f256      "kick [userid]"
```

### Hash field

| Value | Meaning |
| --- | --- |
| A hex hash (e.g. `3cc7f256`) | Matches that exact hash. 4 bytes (8 hex characters) is enough — you don't need the full MD5. |
| `UNKNOWN` | Matches any hash not covered by another rule for the same path. |
| `MISSING` | Matches when the file wasn't sent by the client at all. |

### Flags

| Flag | Effect |
| --- | --- |
| `BREAK` | Stop checking further rules for this client once this one matches. |
| `IGNORE` | Whitelist this specific hash — no command is run. |

### Command placeholders

Available inside the `"exec cmd"` string:

| Placeholder | Value |
| --- | --- |
| `[name]` | Client's nickname. |
| `[ip]` | Client's IP address. |
| `[id]` | Client's index. |
| `[userid]` | Client's userid. |
| `[steamid]` | Client's SteamID. |
| `[file_name]` | Path of the checked file. |
| `[file_hash]` | Hash of the client's response for that file. |
| `[file_md5hash]` | Full MD5 hash of the client's response for that file. |

### Example rules

```ini
; Kick on a known bad file hash, stop checking further rules for this client
"../demoplayer.dll"    ad6d0e43    "kick [userid] 'WallHack Detected'"    BREAK

; Whitelist a known-good hash for the same path
"../demoplayer.dll"    7ef5b581    IGNORE

; Log (but don't kick) any hash of a file you're not tracking yet
"../demoplayer.dll"    UNKNOWN     "echo ' -> file: ([file_name]), md5hex: ([file_md5hash]) for ([name])'"

; Kick when a file is expected but missing
"../opengl32.dll"      MISSING     "kick [userid] 'OpenGL32 Missing'"     BREAK
```

`resources.ini` supports a UTF-8 BOM and `;`-prefixed comment lines. Start from the project's [`dist/resources.ini`](https://github.com/rehlds/ReChecker/blob/master/dist/resources.ini) template, which ships with signatures for a number of historically known cheat files, and extend it yourself.

## Console variable

| Cvar | Default | Description |
| --- | --- | --- |
| `rch_log` | `0` | Logging verbosity. `0` disables logging; higher values log more detail. |

## Logs

When `rch_log` is enabled, ReChecker writes daily log files under `addons/rechecker/logs/`.
