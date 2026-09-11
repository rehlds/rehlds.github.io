---
id: community
title: Utilidades de la comunidad
sidebar_position: 1
description: Utilidades creadas por la comunidad en torno a ReHLDS, listadas como referencia y sin respaldo ni soporte de la organización ReHLDS.
slug: /community
---

# Utilidades de la comunidad

Esta página recoge utilidades de terceros que la comunidad ha construido en torno a ReHLDS. La organización ReHLDS **no las desarrolla, ni las revisa, ni las mantiene**, y aparecen aquí únicamente para que quien se las encuentre pueda saber qué son.

:::warning

Todo lo que hay en esta página se usa por tu cuenta y riesgo. La organización no audita estas herramientas, y un problema causado por una de ellas corresponde a su propio repositorio, no al de ReHLDS. Si quieres una instalación que puedas razonar y sobre la que puedas recibir soporte, sigue la [guía de instalación de ReHLDS](/es/docs/rehlds/install) e instala cada componente por tu cuenta.

:::

## rehlds-installer

[lukasenka/rehlds-installer](https://github.com/lukasenka/rehlds-installer) es un script de shell que monta en una sola ejecución un servidor completo sobre un sistema Linux basado en Debian: ReHLDS, Metamod-R, AMX Mod X, ReGameDLL_CS y ReUnion a la vez, descargando las versiones actuales de cada uno.

**A qué apunta:** distribuciones de la familia Debian: Debian, Ubuntu, Linux Mint, Pop!\_OS y Kali.

**Por qué podrías fijarte en él:** reduce una instalación manual de varios pasos a un único comando, algo atractivo para un primer servidor.

Puntos que conviene sopesar antes de ejecutarlo:

- **Se ejecuta como root y se descarga de la red.** El uso documentado consiste en bajar el script a `/root/` y ejecutarlo. Léelo antes de lanzarlo, como harías con cualquier instalador de este tipo.
- **Incluye un binario ya compilado.** El repositorio contiene un `cs.so` compilado junto al script. Ese binario no lo genera la organización ReHLDS ni está cubierto por la firma de sus versiones: las [versiones de ReHLDS](/es/docs/rehlds/install) sí están firmadas con GPG y se pueden verificar, pero un binario incluido en un repositorio de terceros no se puede comprobar del mismo modo.
- **No declara licencia.** El repositorio no incluye ningún archivo `LICENSE`, así que las condiciones para reutilizarlo o redistribuirlo quedan sin definir.
- **Es el proyecto de una sola persona.** Se actualiza con regularidad, pero no hay ninguna organización detrás ni ningún compromiso de soporte.
- **Solo en inglés.** Ni el script ni su documentación están traducidos.

Si lo usas, trata el resultado como un punto de partida y verifica después cada componente: `meta version`, `amxx version`, `amxx modules` y `game version` en la consola del servidor te dirán qué ha quedado instalado realmente.

:::note

Aparecer en esta página no supone ningún respaldo. Si mantienes una utilidad relacionada con ReHLDS y quieres que figure aquí, abre una pull request en [rehlds.github.io](https://github.com/rehlds/rehlds.github.io); cuenta con que se describirá con franqueza, salvedades incluidas, igual que todo lo anterior.

:::
