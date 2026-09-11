---
id: reamxmodx-install
title: Instalação
sidebar_position: 2
description: ReAMXModX - fork obsoleto do AMX Mod X que acrescentou suporte às APIs do ReHLDS e do ReGameDLL antes de o AMX Mod X oficial fazê-lo.
slug: /reamxmodx/install
---

<head>
  <title>ReAMXModX: Instalação | ReHLDS</title>
</head>

# Instalação

:::warning Descontinuado

Não instale o ReAMXModX em um servidor atual. Instale o [AMX Mod X](https://www.amxmodx.org/) da AlliedModders — ele suporta o ReHLDS nativamente, que é a única coisa que este fork existia para acrescentar.

:::

## Não há builds para instalar

O ReAMXModX **não publicou nenhum lançamento**. O repositório contém apenas o código-fonte — sem página de lançamentos, sem arquivos compactados, sem binários pré-compilados. Quem quisesse rodá-lo tinha antes de [compilá-lo a partir do código-fonte](./compilling.md).

Só isso já o torna inadequado para uma instalação normal de servidor hoje: você estaria compilando por conta própria um instantâneo de 2016 do AMX Mod X e depois o mantendo sozinho.

## Se você está migrando para longe dele

Se você herdou um servidor rodando uma build deste fork, migrar para o AMX Mod X oficial é o caminho previsto:

1. Instale um lançamento atual do [AMX Mod X](https://www.amxmodx.org/downloads-new.php) para o seu mod, seguindo a documentação dele.
2. Mantenha os seus `configs/` atuais — o fork nunca mudou o formato da configuração, então o `amxx.cfg`, o `users.ini`, o `cmds.ini` e os demais migram sem alterações. Veja as [Configurações](./settings.md).
3. Recompile os seus próprios plugins `.sma` com os includes atuais do AMX Mod X.
4. Verifique com `amxx version` e `amxx modules` no console do servidor.

Para acesso ao nível do motor e ao nível da GameDLL a partir do Pawn em uma pilha moderna, use o [ReAPI](/pt-BR/docs/reapi) em vez de um AMX Mod X modificado — essa é a forma suportada de alcançar as entranhas do ReHLDS e do ReGameDLL_CS hoje.
