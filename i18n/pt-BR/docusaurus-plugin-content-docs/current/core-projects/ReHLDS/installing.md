---
id: rehlds-install
title: Instalação
sidebar_position: 2
description: O ReHLDS é uma versão reconstruída do HLDS original, com mais segurança, mais desempenho e melhores recursos de modding para jogos como Half-Life e Counter-Strike 1.6.
slug: /rehlds/install
---

<head>
  <title>ReHLDS: Instalação | ReHLDS</title>
</head>

# Instalação

O ReHLDS é um substituto direto do binário do motor HLDS. A instalação consiste em baixar um servidor HLDS base pela Steam e, em seguida, sobrescrever o binário do motor com a build do ReHLDS.

## 1. Instale o servidor HLDS base

O ReHLDS exige a build **pré-anniversary** do HLDS na Steam (versão do motor 8684 ou anterior). Baixe-a com o `steamcmd`:

```text
app_set_config 90 mod cstrike
app_update 90 -beta steam_legacy validate
```

Troque `mod cstrike` pelo mod desejado se você não for rodar Counter-Strike 1.6.

:::warning

O ReHLDS não é compatível com as builds antigas 5xxx e anteriores instaladas pelo antigo `hldsupdatetool`. Instale sempre pelo `steamcmd`, como mostrado acima.

:::

## 2. Baixe o ReHLDS

Pegue uma build em um destes lugares:

- [Builds de lançamento](https://github.com/rehlds/ReHLDS/releases) — estáveis, recomendadas para servidores em produção.
- [Builds de desenvolvimento](https://github.com/rehlds/ReHLDS/actions/workflows/build.yml) — artefatos de CI mais recentes, úteis para testar correções que ainda vão sair.

Escolha o arquivo correspondente à plataforma do seu servidor (Windows ou Linux 32 bits).

## 3. Substitua o binário do motor

1. Pare o servidor por completo.
2. Faça backup do binário atual do motor.
3. Copie o binário do ReHLDS por cima do original:

| Plataforma | Substituir | Símbolos de depuração (opcional) |
| --- | --- | --- |
| Windows | `swds.dll` | `swds.pdb` |
| Linux | `engine_i486.so` | — |

O arquivo para Windows também traz `hlds.exe` / `hltv.exe` e as DLLs dos componentes do ReHLTV (`core.dll`, `proxy.dll`, `demoplayer.dll`, `director.dll`, `filesystem_stdio.dll`); copie as que a sua configuração usa junto com a `swds.dll`.

4. No Linux, confira se o arquivo substituído mantém as mesmas permissões (com leitura e execução para a conta que roda o servidor).
5. Inicie o servidor. O ReHLDS se identifica na saída do console durante a inicialização, então dá para confirmar pelo log que a substituição funcionou.

## Verificação das assinaturas dos lançamentos (opcional, mas recomendada)

Os arquivos de lançamento para Linux são assinados com GPG. A impressão digital da chave pública é:

```text
63547829004f07716f7be4856c32c4282e60fb67
```

1. Baixe a chave de um servidor de chaves, por exemplo o [keyserver.ubuntu.com](https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x63547829004f07716f7be4856c32c4282e60fb67).
2. Importe-a:

```bash
gpg --import 63547829004f07716f7be4856c32c4282e60fb67.asc
```

3. Baixe tanto o arquivo do lançamento quanto o arquivo de assinatura `.asc` que o acompanha.
4. Verifique:

```bash
gpg --verify some-rehlds.zip.asc some-rehlds.zip
```

## Observações sobre compatibilidade

- O ReHLDS **não é compatível em nível binário** com o HLDS original (ele é compilado com compiladores diferentes). Plugins que fazem patching binário direto ou varredura de assinaturas no motor — o Orpheu é um exemplo conhecido — podem não funcionar, a menos que tenham suporte explícito ao ReHLDS.
- Se você pretende usar Metamod-R, ReAPI ou ReGameDLL_CS, instale o ReHLDS primeiro — esses projetos partem do princípio de que o ReHLDS já está no lugar. Veja a [instalação do Metamod-R](/pt-BR/docs/metamod-r/install) e a [instalação do ReGameDLL_CS](/pt-BR/docs/regamedll-cs/install).
