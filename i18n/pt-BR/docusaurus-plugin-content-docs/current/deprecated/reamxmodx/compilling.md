---
id: reamxmodx-compilling
title: Compilação
sidebar_position: 4
description: ReAMXModX - fork obsoleto do AMX Mod X que acrescentou suporte às APIs do ReHLDS e do ReGameDLL antes de o AMX Mod X oficial fazê-lo.
slug: /reamxmodx/compilling
---

<head>
  <title>ReAMXModX: Compilação | ReHLDS</title>
</head>

# Instruções de compilação

:::warning Descontinuado

Mantido como referência. O fork está congelado em um instantâneo de 2016 do AMX Mod X e não publica lançamentos — compilá-lo é a única forma de obter binários, e não há um bom motivo para isso. Leia [O que é o ReAMXModX?](./index.md).

:::

O ReAMXModX herda sem alterações o sistema de compilação do AMX Mod X; ele não acrescenta ferramentas de build próprias.

### Clone do repositório

```bash
git clone https://github.com/rehlds/reamxmodx.git
cd reamxmodx
```

### Compilação no Windows

O fork traz soluções do Visual Studio 2012, uma por componente, que é o que os commits dele de fato mantinham:

| Solução | Componente |
| --- | --- |
| `amxmodx/msvc12/amxmodx_mm.sln` | O núcleo do AMX Mod X (plugin do Metamod). |
| `modules/<nome>/msvc12/<nome>.sln` | Cada módulo — `cstrike`, `csx`, `engine`, `fakemeta`, `nvault`, `sockets` e os demais. |
| `compiler/amxxpc/amxxpc.sln`, `compiler/libpc300/libpc300.sln` | O compilador do Pawn. |
| `installer/installtool/installtool.sln` | A ferramenta de instalação. |

Cada uma é compilada em separado — não existe uma solução única que cubra o projeto inteiro.

### Compilação no Linux

A árvore traz scripts `AMBuilder` para o [AMBuild](https://github.com/alliedmodders/ambuild), o sistema de compilação da AlliedModders, dentro de `amxmodx/` e `plugins/`.

:::note

Este instantâneo não tem um `configure.py` nem um `AMBuildScript` na raiz do repositório, que é de onde o AMBuild normalmente conduz a compilação. Produzir uma build funcional para Linux, portanto, significa fornecer você mesmo essa estrutura, vinda da revisão correspondente do AMX Mod X oficial (`1.8.3`, `git5067`). Essa é boa parte do motivo pelo qual o fork é impraticável de compilar hoje.

:::

### Resultado

Uma compilação completa produz o `amxmodx_mm_i386.so` / `amxmodx_mm.dll` do núcleo, além de um binário por módulo, dispostos exatamente como o AMX Mod X oficial espera em `addons/amxmodx/`.

Se você quer um AMX Mod X funcionando sobre o ReHLDS, pegue um [lançamento atual do projeto oficial](https://www.amxmodx.org/downloads-new.php) em vez de compilar este.
