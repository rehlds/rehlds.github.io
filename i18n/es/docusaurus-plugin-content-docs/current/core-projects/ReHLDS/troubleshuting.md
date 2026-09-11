---
id: rehlds-troubbleshouting
title: Solución de problemas
sidebar_position: 4
description: ReHLDS es una versión reconstruida del HLDS original que aporta mayor seguridad, rendimiento y capacidad de modding a juegos como Half-Life y Counter-Strike 1.6.
slug: /rehlds/troubbleshouting
---

<head>
  <title>ReHLDS: Solución de problemas | ReHLDS</title>
</head>

# Solución de problemas

## El servidor se cierra nada más arrancar («Illegal instruction» o similar)

Los binarios de ReHLDS necesitan los juegos de instrucciones `SSE`, `SSE2` y `SSE3` (y usan `SSE4.1` / `SSE4.2` cuando están disponibles). Casi siempre se trata de un problema de CPU o de virtualización, no de configuración:

- Comprueba que la CPU del host admite realmente SSE3. En hardware real posterior a ~2005 rara vez es un problema, pero algunas configuraciones mínimas de VPS o máquinas virtuales exponen al huésped un juego de instrucciones reducido.
- Si el servidor corre dentro de una máquina virtual, revisa en el hipervisor los ajustes de modelo de CPU y de paso de características.

## El motor no carga o se comporta como si el binario fuera incorrecto

Lo habitual es que haya una discrepancia de motor o de plataforma:

- Comprueba que el servidor base es la build de Steam anterior al aniversario (versión del motor ≤ 8684), instalada con `steamcmd` tal como se describe en [Instalación](./installing.md). ReHLDS **no** es compatible con las builds 5xxx o anteriores instaladas con `hldsupdatetool`.
- Comprueba que has copiado el binario correspondiente a tu sistema operativo: `swds.dll` en Windows, `engine_i486.so` en Linux. Mezclar binarios de plataformas distintas (o copiarlos a medias) impide que cargue.
- En Linux, verifica que el archivo sustituido conserva permisos de lectura y ejecución para la cuenta con la que se ejecuta el servidor.

## Un plugin de terceros deja de funcionar tras instalar ReHLDS

ReHLDS **no es compatible a nivel binario** con el HLDS original: se compila con compiladores distintos a los que usó Valve. Los plugins que parchean el motor a bajo nivel o escanean firmas en memoria (Orpheu es un caso conocido) pueden romperse salvo que admitan ReHLDS de forma explícita. Antes de dar por hecho que la culpa es de ReHLDS, revisa el registro de cambios y el repositorio del propio plugin por si mencionan la compatibilidad con ReHLDS.

## La verificación de la firma GPG falla

1. Asegúrate de haber importado la clave pública correcta (huella `63547829004f07716f7be4856c32c4282e60fb67`) desde un servidor de claves como [keyserver.ubuntu.com](https://keyserver.ubuntu.com/pks/lookup?search=63547829004f07716f7be4856c32c4282e60fb67+&fingerprint=on&op=index).
2. Asegúrate de que el archivo de firma `.asc` corresponde al archivo que has descargado: se publican por pares en cada versión y no son intercambiables entre versiones.
3. Vuelve a descargar ambos archivos si alguno pudo ser modificado por un proxy o una CDN intermedios (algunos proxies corporativos alteran las descargas binarias).

## Cómo obtener información de un fallo

Si el servidor se cierra de forma abrupta en lugar de terminar correctamente:

- **Linux**: arranca el servidor con el parámetro `-debug`. Si `gdb` está instalado, ReHLDS escribe automáticamente los detalles del fallo en `debug.log`, lo que suele bastar para localizar el punto del fallo sin necesidad de un volcado completo. Si además quieres conservar un volcado de memoria, habilítalo para el proceso antes de arrancar (`ulimit -c unlimited`) y considera ejecutar `echo 1 > /proc/sys/kernel/core_uses_pid` para que varios fallos no se sobrescriban entre sí.
- **Windows**: activa un minivolcado o un volcado completo para `hlds.exe` mediante Informe de errores de Windows (`Configuración del equipo → Plantillas administrativas → Componentes de Windows → Informe de errores de Windows` en las directivas de grupo, o las claves de registro equivalentes), o bien usa una utilidad específica de volcados.

:::warning

Los volcados de fallos y `debug.log` pueden contener información sensible del servidor (incluidos datos relacionados con RCON). No los publiques abiertamente: envíalos directamente por un canal privado o dentro de un archivo cifrado y protegido con contraseña.

:::

## Cómo informar de un problema

Abre una incidencia en el [repositorio de ReHLDS](https://github.com/rehlds/ReHLDS/issues) e incluye:

- La build o versión de ReHLDS (etiqueta de la versión o commit) y la plataforma (Windows/Linux).
- La build o versión exacta del motor HLDS sobre la que lo instalaste.
- El mod que ejecutas (Half-Life, Counter-Strike 1.6, Condition Zero, etc.) y su versión.
- Las versiones de Metamod, AMX Mod X y ReGameDLL_CS, y la lista de plugins, si procede.
- Los pasos para reproducir el problema y la salida de consola, el `debug.log` o el volcado del fallo que correspondan.

Cuanto más detalle aportes desde el principio, antes podrá un mantenedor reproducir y corregir el problema.
