---
id: safenameandchat-install
title: Instalação
sidebar_position: 2
description: SafeNameAndChat - plugin de terceiros para Metamod que neutraliza exploits de strings de localização e de injeção de comandos nos nomes dos jogadores e nas mensagens de bate-papo.
slug: /safenameandchat/install
---

<head>
  <title>SafeNameAndChat: Instalação | ReHLDS</title>
</head>

# Instalação

O SafeNameAndChat é um plugin do Metamod e exige o Metamod (o Metamod-R é o recomendado) já instalado e funcionando.

## 1. Obtenha o SafeNameAndChat

Baixe os binários na [página de lançamentos](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/releases) ou [compile-o a partir do código-fonte](./compilling.md). Um lançamento traz dois arquivos:

| Plataforma | Arquivo |
| --- | --- |
| Windows | `SafeNameAndChat.dll` |
| Linux | `SafeNameAndChat.so` |

## 2. Coloque o plugin no lugar

Crie uma pasta `SafeNameAndChat` dentro de `addons`, no diretório do seu mod, e ponha ali o binário correspondente à sua plataforma:

```text
<mod>/addons/SafeNameAndChat/SafeNameAndChat.dll
<mod>/addons/SafeNameAndChat/SafeNameAndChat.so
```

## 3. Adicione o arquivo de configuração

Copie o [`SafeNameAndChat.cfg`](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/blob/master/SafeNameAndChat.cfg) do projeto para junto do binário. O plugin monta o caminho a partir da própria localização e executa (`exec`) o `SafeNameAndChat.cfg` dali na inicialização, então o arquivo precisa ficar na mesma pasta do plugin — e não na raiz do mod.

## 4. Registre o plugin no Metamod

Acrescente uma linha ao `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\SafeNameAndChat\SafeNameAndChat.dll
linux addons/SafeNameAndChat/SafeNameAndChat.so
```

## 5. Verifique

Inicie o servidor e execute `meta list` — o `SafeNameAndChat` deve aparecer na lista como carregado (a etiqueta dele nos logs é `SNAC`). Consulte a `SNAC_Version` no console para confirmar qual build está rodando.

Como o plugin está marcado como carregável a qualquer momento, você também pode usar `meta load addons/SafeNameAndChat/SafeNameAndChat.so` em um servidor em execução, em vez de reiniciá-lo.

Veja as [Configurações](./settings.md) para conhecer as cvars.
