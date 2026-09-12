---
id: hitboxtracker-install
title: Instalare
sidebar_position: 2
description: hitboxtracker - unealtă de dezvoltare abandonată din ReHLDS, care desena pe client pozițiile hitbox-urilor calculate de server.
slug: /hitboxtracker/install
---

<head>
  <title>hitboxtracker: Instalare | ReHLDS</title>
</head>

# Instalare

:::warning Abandonat

Aceste instrucțiuni sunt păstrate ca referință. hitboxtracker nu mai este întreținut — citiți [Ce este hitboxtracker?](./index.md) înainte de a folosi ceva de aici și preferați [Hitbox Fixer](/ro/docs/hitbox-fixer) pe un server actual.

:::

hitboxtracker avea nevoie ca **amândouă** jumătățile să fie instalate: un plugin pe server și un modul pe client. Instalarea doar a uneia nu avea niciun efect.

## Cerințe

- Client: Counter-Strike 1.6, versiunea `4554` sau mai nouă.
- Server: Metamod `1.20` sau mai nou.

## 1. Obțineți hitboxtracker

Descărcați `hitboxtracker.zip` din [pagina de versiuni](https://github.com/rehlds/hitboxtracker/releases). Arhiva conține amândouă jumătățile:

| Calea din arhivă | Rol |
| --- | --- |
| `server/cstrike/addons/hitboxtracker/hitboxtracker_mm.dll` | Pluginul de server, Windows. |
| `server/cstrike/addons/hitboxtracker/hitboxtracker_mm_i386.so` | Pluginul de server, Linux. |
| `client/hitboxtracker.dll` | Modulul de afișare de partea clientului. |
| `client/cs.exe` | Lansatorul propriu al proiectului, care încarcă acel modul. |

## 2. Instalați pluginul de server

Copiați binarul potrivit platformei dumneavoastră în `<mod>/addons/hitboxtracker/` și înregistrați-l în `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\hitboxtracker\hitboxtracker_mm.dll
linux addons/hitboxtracker/hitboxtracker_mm_i386.so
```

## 3. Instalați modulul de client

Puneți `hitboxtracker.dll` și `cs.exe` în directorul de lucru al clientului de Counter-Strike 1.6, apoi porniți jocul prin `cs.exe`, nu prin scurtătura obișnuită — lansatorul este cel care încarcă modulul.

## 4. Verificați

Intrați pe un server care rulează pluginul și puneți `r_drawentities` pe `6` sau pe `7`. Dacă afișarea suplimentară a hitbox-urilor nu apare, fie clientul a fost pornit fără lansator, fie pluginul de server nu este încărcat — verificați cu `meta list` pe server.

Vedeți [Setări](./settings.md) pentru ce face fiecare valoare a `r_drawentities`.
