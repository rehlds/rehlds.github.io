---
id: hitboxtracker-compilling
title: Compilare
sidebar_position: 4
description: hitboxtracker - unealtă de dezvoltare abandonată din ReHLDS, care desena pe client pozițiile hitbox-urilor calculate de server.
slug: /hitboxtracker/compilling
---

<head>
  <title>hitboxtracker: Compilare | ReHLDS</title>
</head>

# Instrucțiuni de compilare

:::warning Abandonat

Păstrate ca referință. hitboxtracker nu mai este întreținut — citiți [Ce este hitboxtracker?](./index.md).

:::

### Verificarea cerințelor

- Visual Studio, cu susținere pentru cele trei ținte C++ ale proiectului.

Fișierele antet HLSDK și Metamod sunt incluse în `dep/`, așa că nu este nimic în plus de descărcat.

### Clonarea depozitului

```bash
git clone https://github.com/rehlds/hitboxtracker.git
cd hitboxtracker
```

### Compilarea

Deschideți `msvc/hitboxtracker.sln` în Visual Studio și compilați. Soluția conține trei proiecte, câte unul pentru fiecare dintre cele trei părți de care avea nevoie unealta:

| Proiect | Produce | Rulează pe |
| --- | --- | --- |
| `server` | `hitboxtracker_mm.dll` | Pe server, ca plugin Metamod. |
| `client` | `hitboxtracker.dll` | Pe clientul jocului, ca modul de afișare. |
| `launcher` | `cs.exe` | Pe clientul jocului, pentru încărcarea modulului. |

:::note

Depozitul conține doar soluția Visual Studio — aici nu există o configurație CMake sau un `build.sh`, spre deosebire de celelalte proiecte ale organizației. Cu toate acestea, versiunea publicată include și un binar de server pentru Linux (`hitboxtracker_mm_i386.so`), produs în afara acestei soluții.

:::

Vedeți [Instalare](./installing.md) pentru locul fiecărui rezultat.
