---
id: rehlds-install
title: Instalación
sidebar_position: 2
description: ReHLDS es una versión reconstruida del HLDS original que aporta mayor seguridad, rendimiento y capacidad de modding a juegos como Half-Life y Counter-Strike 1.6.
slug: /rehlds/install
---

<head>
  <title>ReHLDS: Instalación | ReHLDS</title>
</head>

# Instalación

ReHLDS sustituye directamente el binario del motor de HLDS. La instalación consiste en descargar un servidor HLDS base a través de Steam y luego sobrescribir el binario del motor con la versión de ReHLDS.

## 1. Instala el servidor HLDS base

ReHLDS necesita la build de HLDS de Steam **anterior al aniversario** (versión del motor 8684 o inferior). Descárgala con `steamcmd`:

```text
app_set_config 90 mod cstrike
app_update 90 -beta steam_legacy validate
```

Si no vas a ejecutar Counter-Strike 1.6, cambia `mod cstrike` por el mod que corresponda.

:::warning

ReHLDS no es compatible con las antiguas builds 5xxx o anteriores instaladas con `hldsupdatetool`. Instala siempre mediante `steamcmd`, tal como se muestra arriba.

:::

## 2. Descarga ReHLDS

Obtén una versión desde cualquiera de estos dos sitios:

- [Versiones estables](https://github.com/rehlds/ReHLDS/releases): recomendadas para servidores en producción.
- [Builds de desarrollo](https://github.com/rehlds/ReHLDS/actions/workflows/build.yml): los artefactos más recientes de CI, útiles para probar correcciones aún no publicadas.

Elige el archivo que corresponda a la plataforma de tu servidor (Windows o Linux de 32 bits).

## 3. Sustituye el binario del motor

1. Detén el servidor por completo.
2. Haz una copia de seguridad del binario actual del motor.
3. Copia el binario de ReHLDS sobre el original:

| Plataforma | Archivo a sustituir | Símbolos de depuración (opcional) |
| --- | --- | --- |
| Windows | `swds.dll` | `swds.pdb` |
| Linux | `engine_i486.so` | — |

El archivo para Windows incluye además `hlds.exe` / `hltv.exe` y las bibliotecas del componente ReHLTV (`core.dll`, `proxy.dll`, `demoplayer.dll`, `director.dll`, `filesystem_stdio.dll`); copia junto a `swds.dll` las que use tu instalación.

4. En Linux, comprueba que el archivo sustituido conserva los mismos permisos (lectura y ejecución para la cuenta con la que se ejecuta el servidor).
5. Inicia el servidor. ReHLDS se identifica en la salida de consola al arrancar, así que puedes confirmar en el registro que la sustitución ha funcionado.

## Verificar la firma de la versión (opcional, pero recomendable)

Los archivos de las versiones para Linux están firmados con GPG. La huella de la clave pública es:

```text
63547829004f07716f7be4856c32c4282e60fb67
```

1. Descarga la clave desde un servidor de claves, por ejemplo [keyserver.ubuntu.com](https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x63547829004f07716f7be4856c32c4282e60fb67).
2. Impórtala:

```bash
gpg --import 63547829004f07716f7be4856c32c4282e60fb67.asc
```

3. Descarga tanto el archivo de la versión como el archivo de firma `.asc` que lo acompaña.
4. Verifica:

```bash
gpg --verify some-rehlds.zip.asc some-rehlds.zip
```

## Notas de compatibilidad

- ReHLDS **no es compatible a nivel binario** con el HLDS original (se compila con compiladores distintos). Los plugins que parchean el motor a bajo nivel o escanean firmas en memoria —Orpheu es un caso conocido— pueden no funcionar salvo que admitan ReHLDS de forma explícita.
- Si piensas usar Metamod-R, ReAPI o ReGameDLL_CS, instala ReHLDS primero: esos proyectos dan por hecho que ya está en su sitio. Consulta la [instalación de Metamod-R](/es/docs/metamod-r/install) y la [instalación de ReGameDLL_CS](/es/docs/regamedll-cs/install).
