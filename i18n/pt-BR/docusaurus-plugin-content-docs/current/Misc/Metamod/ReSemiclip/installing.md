---
id: resemiclip-install
title: Instalação
sidebar_position: 2
description: ReSemiclip - plugin do Metamod que controla a possibilidade de atravessar outros jogadores. O módulo Semiclip de `joaquimandrade` foi usado como referência.
slug: /resemiclip/install
---

<head>
  <title>ReSemiclip: Instalação | ReHLDS</title>
</head>

# Instalação

O ReSemiclip é um plugin do Metamod e exige o [ReHLDS](/pt-BR/docs/rehlds/install), o [ReGameDLL_CS](/pt-BR/docs/regamedll-cs/install) e o Metamod (o Metamod-R é o recomendado) já instalados e funcionando — ele aplica hooks em funções das duas camadas.

## 1. Obtenha o ReSemiclip

Baixe o `resemiclip-*.zip` na [página de lançamentos](https://github.com/rehlds/ReSemiclip/releases) ou [compile-o a partir do código-fonte](./compilling.md). O arquivo do lançamento já contém uma pasta `addons/resemiclip/` pronta para uso, com o binário e um `config.ini` padrão.

## 2. Extraia no diretório do seu mod

Copie o `addons/resemiclip/` do arquivo para `<mod>/addons/resemiclip/`. O resultado será:

| Caminho | Finalidade |
| --- | --- |
| `addons/resemiclip/resemiclip_mm.dll` ou `resemiclip_mm_i386.so` | O binário do plugin (específico de cada plataforma — mantenha apenas o correspondente ao seu servidor). |
| `addons/resemiclip/config.ini` | Configurações padrão, válidas para todo o servidor. |
| `addons/resemiclip/maps/` | Arquivos de exemplo com ajustes por mapa e por prefixo. |

## 3. Registre o plugin no Metamod

Acrescente uma linha ao `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\resemiclip\resemiclip_mm.dll
linux addons/resemiclip/resemiclip_mm_i386.so
```

## 4. Configure

Edite o `addons/resemiclip/config.ini` para definir os padrões de todo o servidor e, se quiser, acrescente ajustes por mapa ou por prefixo em `addons/resemiclip/maps/`. Veja as [Configurações](./settings.md) para conhecer o formato completo e a ordem de carregamento.

## 5. Verifique

Inicie o servidor e execute `meta list` — o `ReSemiclip` deve aparecer na lista como carregado. Execute `semiclip_option` sem argumentos no console para imprimir as configurações ativas no momento.
