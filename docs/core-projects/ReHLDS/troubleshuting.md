---
id: rehlds-troubbleshouting
title: Troubbleshouting
sidebar_position: 4
description: ReHLDS is a re-engineered version of the original HLDS, providing enhanced security, performance, and modding capabilities for games like Half-Life and Counter-Strike 1.6.
slug: /rehlds/troubbleshouting
---

<head>
  <title>ReHLDS: Troubbleshouting | ReHLDS</title>
</head>

# Troubbleshouting

## Server crashes immediately on startup ("Illegal instruction" or similar)

ReHLDS binaries require the `SSE`, `SSE2`, and `SSE3` instruction sets (with `SSE4.1` / `SSE4.2` used when available). This is almost always a CPU/virtualization issue rather than a configuration one:

- Confirm the host CPU actually supports SSE3. This is rarely an issue on real hardware built after ~2005, but some minimal VPS/VM configurations expose a reduced instruction set to the guest.
- If you're running inside a VM, check the hypervisor's CPU passthrough/model settings.

## Engine fails to load / "wrong binary" behavior

This is usually caused by an engine or platform mismatch:

- Confirm the base server is the pre-anniversary Steam build (engine version ≤ 8684), installed via `steamcmd` as described in [Installation](./installing.md). ReHLDS is **not** compatible with old 5xxx-and-below builds installed through the legacy `hldsupdatetool`.
- Confirm you copied the binary that matches your OS: `swds.dll` on Windows, `engine_i486.so` on Linux. Mixing platform binaries (or a partial copy) will not load.
- On Linux, verify the replaced file kept read and execute permissions for the account running the server.

## Third-party plugin stops working after installing ReHLDS

ReHLDS is **not binary-compatible** with the original HLDS — it is built with different compilers than Valve's original binaries. Plugins that do raw binary patching or signature scanning of the engine (Orpheu being a known example) may break unless the plugin explicitly supports ReHLDS. Check the plugin's own changelog/issue tracker for ReHLDS compatibility notes before assuming ReHLDS itself is at fault.

## GPG signature verification fails

1. Make sure you imported the correct public key (fingerprint `63547829004f07716f7be4856c32c4282e60fb67`) from a keyserver such as [keyserver.ubuntu.com](https://keyserver.ubuntu.com/pks/lookup?search=63547829004f07716f7be4856c32c4282e60fb67+&fingerprint=on&op=index).
2. Make sure the `.asc` signature file matches the archive you downloaded — they are published together per release and are not interchangeable across versions.
3. Re-download both files if either was modified by an intermediate proxy/CDN (some corporate proxies rewrite binary downloads).

## Getting crash information

If the server crashes rather than exiting cleanly:

- **Linux** — start the server with the `-debug` flag. If `gdb` is installed, ReHLDS writes crash details to `debug.log` automatically, which is usually enough to identify the crash location without a full core dump. To also keep a core dump, enable core files for the process (`ulimit -c unlimited`) before starting the server, and consider `echo 1 > /proc/sys/kernel/core_uses_pid` so repeated crashes don't overwrite each other.
- **Windows** — enable a minidump/full dump on crash for `hlds.exe` using Windows Error Reporting (`Computer Configuration → Administrative Templates → Windows Components → Windows Error Reporting` in Group Policy, or the equivalent registry keys), or a dedicated crash-dump utility.

:::warning

Crash dumps and `debug.log` can contain sensitive server information (including RCON-related data). Don't post them publicly — attach them directly to a private channel or an encrypted/password-protected archive when sharing with developers.

:::

## Reporting a problem

Open an issue in the [ReHLDS issue tracker](https://github.com/rehlds/ReHLDS/issues) and include:

- The ReHLDS build/version (release tag or commit) and platform (Windows/Linux).
- The exact HLDS engine build/version you installed it on.
- The mod you're running (Half-Life, Counter-Strike 1.6, Condition Zero, etc.) and its version.
- Metamod/AMX Mod X/ReGameDLL_CS versions and a plugin list, if applicable.
- Steps to reproduce the issue, and relevant console output, `debug.log`, or a crash dump.

The more detail you provide up front, the faster a maintainer can reproduce and fix the issue.
