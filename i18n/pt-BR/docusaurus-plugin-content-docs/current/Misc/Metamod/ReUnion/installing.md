---
id: reunion-install
title: Instalação
sidebar_position: 2
description: ReUnion - plugin do Metamod que permite a clientes não Steam dos protocolos 47 e 48 se conectarem a servidores ReHLDS.
slug: /reunion/install
---

<head>
  <title>ReUnion: Instalação | ReHLDS</title>
</head>

# Instalação

O ReUnion é um plugin do Metamod e exige o [ReHLDS](/pt-BR/docs/rehlds/install) (API `3.10`+) e o Metamod (o Metamod-R é o recomendado) já instalados e funcionando.

## 1. Obtenha o ReUnion

Baixe uma build na [página de lançamentos](https://github.com/rehlds/ReUnion/releases) ou [compile-o a partir do código-fonte](./compilling.md).

## 2. Coloque o plugin no lugar

Crie uma pasta `reunion` dentro de `addons`, no diretório do seu mod (`<gamedir>` — `cstrike` no Counter-Strike, `valve` no Half-Life etc.), e ponha ali o binário correspondente à sua plataforma:

| Plataforma | Arquivo | Destino |
| --- | --- | --- |
| Windows | `reunion_mm.dll` | `<gamedir>/addons/reunion/reunion_mm.dll` |
| Linux | `reunion_mm_i386.so` | `<gamedir>/addons/reunion/reunion_mm_i386.so` |

## 3. Registre o plugin no Metamod

Edite o `<gamedir>/addons/metamod/plugins.ini` e acrescente esta linha, de preferência no **início** do arquivo:

```text
win32 addons\reunion\reunion_mm.dll
linux addons/reunion/reunion_mm_i386.so
```

## 4. Adicione o arquivo de configuração

Copie o `reunion.cfg` do lançamento para que o ReUnion consiga encontrá-lo. Ele procura nesta ordem e usa o primeiro arquivo que achar:

1. Ao lado do próprio binário — `<gamedir>/addons/reunion/reunion.cfg`.
2. Na raiz do diretório do jogo — `<gamedir>/reunion.cfg`.
3. No diretório de trabalho do servidor — `reunion.cfg`.

Veja as [Configurações](./settings.md) para conhecer o formato do arquivo.

## 5. Inicie o servidor e verifique

Inicie o servidor e execute `meta list` no console:

```text
Currently loaded plugins:
      description      stat pend  file              vers      src   load  unlod
 [ 1] Reunion          RUN   -    reunion_mm_i386.  v0.1.58   ini   Start Never
 [ 2] AMX Mod X        RUN   -    amxmodx_mm_i386.  v1.8.1.3  ini   Start ANY
2 plugins, 2 running
```

Se aparecer `fail` em vez de `RUN`, inicie o servidor com `-console +log on +mp_logecho 1` e examine a saída do console — ela informa o motivo de o ReUnion não ter carregado (normalmente um `reunion.cfg` ausente ou inválido, ou uma versão incompatível do ReHLDS).

## Extras opcionais

O arquivo do lançamento também traz o `reunion_api.h` (um cabeçalho em C para outros plugins de Metamod/GameDLL que queiram consultar o ReUnion diretamente — o [ReAPI](/pt-BR/docs/reapi) usa isso) e alguns scripts opcionais de AMX Mod X em `addons/amxmodx/scripting/` (`reu_test.sma`, `updatehint.sma`), que você pode compilar e carregar à parte se quiser um plugin de teste ou uma mensagem de aviso para clientes desatualizados. Nenhum dos dois é necessário para o funcionamento do ReUnion em si.
