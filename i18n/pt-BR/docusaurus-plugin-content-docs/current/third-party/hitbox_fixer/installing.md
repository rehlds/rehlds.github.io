---
id: hitbox-fixer-install
title: Instalação
sidebar_position: 2
description: Hitbox Fixer - plugin de terceiros para Metamod que corrige as hitboxes de jogador incorretas do lado do servidor no Counter-Strike 1.6, no Half-Life e no Adrenaline Gamer.
slug: /hitbox-fixer/install
---

<head>
  <title>Hitbox Fixer: Instalação | ReHLDS</title>
</head>

# Instalação

O Hitbox Fixer é um plugin do Metamod. Ele exige o [ReHLDS](/pt-BR/docs/rehlds/install) `3.10`+ (ou o HLDS original, build `8648`) e o Metamod já instalados e funcionando.

## 1. Obtenha o Hitbox Fixer

Baixe o `hitbox_fix-bin-*.zip` na [página de lançamentos](https://github.com/Garey27/hitbox_fixer/releases) ou [compile-o a partir do código-fonte](./compilling.md).

## 2. Extraia no diretório do seu mod

O arquivo já vem organizado para um servidor. Copie o `addons/` dele para `<mod>/addons/`:

| Caminho no arquivo | Finalidade |
| --- | --- |
| `addons/hitboxfixer/hitbox_fix_mm.dll` | Binário do plugin para Windows. |
| `addons/hitboxfixer/hitbox_fix_mm_i386.so` | Binário do plugin para Linux. |
| `addons/hitboxfixer/hbf.cfg` | Arquivo de configuração, lido na inicialização. |

Mantenha apenas o binário correspondente à plataforma do seu servidor.

:::note

O arquivo também contém o `vis/hitbox_vis.asi`, um módulo de visualização do lado do cliente para inspecionar as hitboxes dentro do jogo. Ele não faz parte da instalação no servidor e não é necessário para a correção funcionar — deixe-o de fora, a menos que você esteja depurando hitboxes em um cliente.

:::

## 3. Registre o plugin no Metamod

Acrescente uma linha ao `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\hitboxfixer\hitbox_fix_mm.dll
linux addons/hitboxfixer/hitbox_fix_mm_i386.so
```

## 4. Verifique

Inicie o servidor e execute `meta list` no console — o plugin deve aparecer na lista como carregado. Se não aparecer, confirme que o motor é o ReHLDS `3.10`+ ou o HLDS `8648`; outras builds não são compatíveis.

Veja as [Configurações](./settings.md) para conhecer a `hbf_enabled`.
