---
id: community
title: Community utilities
sidebar_position: 1
description: Community-built utilities around ReHLDS - listed for reference, not produced or supported by the ReHLDS organization.
slug: /community
---

# Community utilities

This page lists third-party utilities the community has built around ReHLDS. They are **not produced, reviewed, or supported by the ReHLDS organization**, and appear here only so people who encounter them can find out what they are.

:::warning

Anything on this page is used at your own risk. These tools are not audited by the organization, and a problem caused by one of them belongs in its own issue tracker, not in the ReHLDS one. If you want a setup you can reason about and get support for, follow the [ReHLDS installation guide](/docs/rehlds/install) and install each component yourself.

:::

## rehlds-installer

[lukasenka/rehlds-installer](https://github.com/lukasenka/rehlds-installer) is a shell script that sets up a complete server stack on a Debian-based Linux system in one run — ReHLDS, Metamod-R, AMX Mod X, ReGameDLL_CS and ReUnion together, pulling current releases of each.

**What it targets:** Debian-family distributions — Debian, Ubuntu, Linux Mint, Pop!\_OS, Kali.

**Why you might look at it:** it collapses a multi-step manual install into one command, which is attractive for a first server.

Points to weigh before running it:

- **It runs as root and is fetched over the network.** The documented usage downloads the script to `/root/` and executes it. Read the script before running it, as you would with any installer of this shape.
- **It ships a prebuilt binary.** The repository includes a compiled `cs.so` alongside the script. That binary is not built by the ReHLDS organization and is not covered by its release signing — the [ReHLDS releases](/docs/rehlds/install) themselves are GPG-signed and can be verified, but a binary vendored in a third-party repository cannot be checked the same way.
- **No license is stated.** The repository carries no `LICENSE` file, so the terms for reusing or redistributing it are undefined.
- **It is one person's project.** It is actively updated, but there is no organization behind it and no support commitment.
- **English only.** The script and its documentation are not localized.

If you use it, treat the result as a starting point and verify each component afterwards — `meta version`, `amxx version`, `amxx modules` and `game version` in the server console will tell you what actually ended up installed.

:::note

Adding a tool to this page is not an endorsement. If you maintain a ReHLDS-related utility and want it listed, open a pull request against [rehlds.github.io](https://github.com/rehlds/rehlds.github.io) — expect it to be described plainly, caveats included, in the same way as everything above.

:::
