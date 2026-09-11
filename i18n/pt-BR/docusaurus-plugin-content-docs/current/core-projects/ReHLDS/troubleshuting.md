---
id: rehlds-troubbleshouting
title: Solução de problemas
sidebar_position: 4
description: O ReHLDS é uma versão reconstruída do HLDS original, com mais segurança, mais desempenho e melhores recursos de modding para jogos como Half-Life e Counter-Strike 1.6.
slug: /rehlds/troubbleshouting
---

<head>
  <title>ReHLDS: Solução de problemas | ReHLDS</title>
</head>

# Solução de problemas

## O servidor trava logo na inicialização ("Illegal instruction" ou algo parecido)

Os binários do ReHLDS exigem os conjuntos de instruções `SSE`, `SSE2` e `SSE3` (com `SSE4.1` / `SSE4.2` usados quando disponíveis). Quase sempre isso é um problema de CPU ou de virtualização, e não de configuração:

- Confirme que a CPU do host realmente suporta SSE3. Isso raramente é um problema em hardware real fabricado depois de ~2005, mas algumas configurações mínimas de VPS/VM expõem um conjunto reduzido de instruções ao sistema convidado.
- Se você estiver dentro de uma VM, verifique as configurações de passthrough e de modelo de CPU do hipervisor.

## O motor não carrega / comportamento de "binário errado"

Isso normalmente decorre de uma incompatibilidade de motor ou de plataforma:

- Confirme que o servidor base é a build pré-anniversary da Steam (versão do motor ≤ 8684), instalada pelo `steamcmd` conforme descrito na [Instalação](./installing.md). O ReHLDS **não** é compatível com as builds antigas 5xxx e anteriores instaladas pelo antigo `hldsupdatetool`.
- Confirme que você copiou o binário correspondente ao seu sistema: `swds.dll` no Windows, `engine_i486.so` no Linux. Misturar binários de plataformas diferentes (ou fazer uma cópia incompleta) impede o carregamento.
- No Linux, verifique se o arquivo substituído manteve as permissões de leitura e execução para a conta que roda o servidor.

## Um plugin de terceiros parou de funcionar depois da instalação do ReHLDS

O ReHLDS **não é compatível em nível binário** com o HLDS original — ele é compilado com compiladores diferentes dos usados nos binários originais da Valve. Plugins que fazem patching binário direto ou varredura de assinaturas no motor (o Orpheu é um exemplo conhecido) podem quebrar, a menos que tenham suporte explícito ao ReHLDS. Verifique o changelog e o rastreador de issues do próprio plugin em busca de observações sobre compatibilidade com o ReHLDS antes de presumir que a culpa é do ReHLDS.

## A verificação da assinatura GPG falha

1. Confirme que você importou a chave pública correta (impressão digital `63547829004f07716f7be4856c32c4282e60fb67`) de um servidor de chaves como o [keyserver.ubuntu.com](https://keyserver.ubuntu.com/pks/lookup?search=63547829004f07716f7be4856c32c4282e60fb67+&fingerprint=on&op=index).
2. Confirme que o arquivo de assinatura `.asc` corresponde ao arquivo que você baixou — eles são publicados juntos a cada lançamento e não são intercambiáveis entre versões.
3. Baixe os dois arquivos de novo caso algum deles tenha sido modificado por um proxy ou CDN intermediário (alguns proxies corporativos reescrevem downloads binários).

## Como obter informações sobre travamentos

Se o servidor travar em vez de encerrar normalmente:

- **Linux** — inicie o servidor com a flag `-debug`. Se o `gdb` estiver instalado, o ReHLDS grava os detalhes do travamento no `debug.log` automaticamente, o que costuma bastar para identificar o ponto da falha sem um core dump completo. Para guardar também um core dump, ative os arquivos de core para o processo (`ulimit -c unlimited`) antes de iniciar o servidor e considere usar `echo 1 > /proc/sys/kernel/core_uses_pid` para que travamentos repetidos não sobrescrevam uns aos outros.
- **Windows** — ative a geração de minidump ou dump completo no travamento do `hlds.exe` pelo Relatório de Erros do Windows (`Configuração do Computador → Modelos Administrativos → Componentes do Windows → Relatório de Erros do Windows` na Diretiva de Grupo, ou pelas chaves de registro equivalentes), ou use um utilitário dedicado de dump de travamento.

:::warning

Dumps de travamento e o `debug.log` podem conter informações sensíveis do servidor (inclusive dados relacionados ao RCON). Não os publique abertamente — envie-os diretamente por um canal privado ou em um arquivo criptografado/protegido por senha ao compartilhá-los com os desenvolvedores.

:::

## Como relatar um problema

Abra uma issue no [rastreador de issues do ReHLDS](https://github.com/rehlds/ReHLDS/issues) e inclua:

- A build/versão do ReHLDS (tag do lançamento ou commit) e a plataforma (Windows/Linux).
- A build/versão exata do motor HLDS sobre a qual você o instalou.
- O mod que você está rodando (Half-Life, Counter-Strike 1.6, Condition Zero etc.) e a versão dele.
- As versões do Metamod, do AMX Mod X e do ReGameDLL_CS e a lista de plugins, se for o caso.
- Os passos para reproduzir o problema e a saída de console relevante, o `debug.log` ou um dump do travamento.

Quanto mais detalhes você fornecer de início, mais rápido um mantenedor consegue reproduzir e corrigir o problema.
