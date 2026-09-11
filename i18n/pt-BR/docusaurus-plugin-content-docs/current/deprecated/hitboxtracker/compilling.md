---
id: hitboxtracker-compilling
title: Compilação
sidebar_position: 4
description: hitboxtracker - ferramenta de desenvolvimento descontinuada do ReHLDS que desenhava no cliente as posições das hitboxes calculadas pelo servidor.
slug: /hitboxtracker/compilling
---

<head>
  <title>hitboxtracker: Compilação | ReHLDS</title>
</head>

# Instruções de compilação

:::warning Descontinuado

Mantido como referência. O hitboxtracker não é mais mantido — leia [O que é o hitboxtracker?](./index.md).

:::

### Verificação dos requisitos

- Visual Studio, com suporte aos três alvos em C++ do projeto.

Os cabeçalhos do HLSDK e do Metamod ficam embutidos em `dep/`, então não há nada extra a baixar.

### Clone do repositório

```bash
git clone https://github.com/rehlds/hitboxtracker.git
cd hitboxtracker
```

### Compilação

Abra o `msvc/hitboxtracker.sln` no Visual Studio e compile. A solução contém três projetos, correspondentes às três partes de que a ferramenta precisava:

| Projeto | Produz | Roda em |
| --- | --- | --- |
| `server` | `hitboxtracker_mm.dll` | No servidor, como plugin do Metamod. |
| `client` | `hitboxtracker.dll` | No cliente do jogo, como módulo de renderização. |
| `launcher` | `cs.exe` | No cliente do jogo, para carregar o módulo. |

:::note

O repositório traz apenas a solução do Visual Studio — não há aqui uma configuração de CMake nem um `build.sh`, diferentemente dos outros projetos da organização. Mesmo assim, o lançamento publicado inclui um binário de servidor para Linux (`hitboxtracker_mm_i386.so`), que foi gerado fora desta solução.

:::

Veja a [Instalação](./installing.md) para saber onde cada resultado ia.
