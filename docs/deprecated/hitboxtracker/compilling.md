---
id: hitboxtracker-compilling
title: Compilling
sidebar_position: 4
description: hitboxtracker - deprecated ReHLDS dev-tool that drew the server-calculated hitbox positions on the client.
slug: /hitboxtracker/compilling
---

<head>
  <title>hitboxtracker: Compilling | ReHLDS</title>
</head>

# Build instructions

:::warning Deprecated

Kept for reference. hitboxtracker is no longer maintained — see [What is hitboxtracker?](./index.md).

:::

### Checking requirements

- Visual Studio, with support for the project's three C++ targets.

The HLSDK and Metamod headers are vendored under `dep/`, so there is nothing extra to fetch.

### Clone the repository

```bash
git clone https://github.com/rehlds/hitboxtracker.git
cd hitboxtracker
```

### Building

Open `msvc/hitboxtracker.sln` in Visual Studio and build. The solution contains three projects, matching the three pieces the tool needed:

| Project | Produces | Runs on |
| --- | --- | --- |
| `server` | `hitboxtracker_mm.dll` | The server, as a Metamod plugin. |
| `client` | `hitboxtracker.dll` | The game client, as the rendering module. |
| `launcher` | `cs.exe` | The game client, to load the module. |

:::note

The repository carries only the Visual Studio solution — there is no CMake setup or `build.sh` here, unlike the organization's other projects. The published release nevertheless includes a Linux server binary (`hitboxtracker_mm_i386.so`), which was produced outside this solution.

:::

See [Installation](./installing.md) for where each output went.
