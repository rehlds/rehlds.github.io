---
id: reamxmodx-install
title: Instalación
sidebar_position: 2
description: ReAMXModX es una bifurcación obsoleta de AMX Mod X que añadió compatibilidad con las APIs de ReHLDS y ReGameDLL antes de que la tuviera el proyecto original.
slug: /reamxmodx/install
---

<head>
  <title>ReAMXModX: Instalación | ReHLDS</title>
</head>

# Instalación

:::warning Obsoleto

No instales ReAMXModX en un servidor actual. Instala [AMX Mod X](https://www.amxmodx.org/) de AlliedModders: admite ReHLDS de forma nativa, que es lo único que esta bifurcación existía para añadir.

:::

## No hay nada que instalar

ReAMXModX **no publicó ninguna versión**. El repositorio contiene solo código: no hay página de versiones, ni archivos, ni binarios compilados. Quien quisiera ejecutarlo tenía que [compilarlo desde el código fuente](./compilling.md) primero.

Solo eso ya lo hace inadecuado para una instalación normal hoy: estarías compilando tú mismo una instantánea de AMX Mod X de 2016 y luego manteniéndola en solitario.

## Si vas a migrar desde aquí

Si has heredado un servidor que ejecuta una compilación de esta bifurcación, el camino previsto es pasarse al AMX Mod X original:

1. Instala una versión actual de [AMX Mod X](https://www.amxmodx.org/downloads-new.php) para tu mod, siguiendo su propia documentación.
2. Conserva tu directorio `configs/` actual: la bifurcación nunca cambió el formato de configuración, así que `amxx.cfg`, `users.ini`, `cmds.ini` y el resto se trasladan sin cambios. Consulta [Configuración](./settings.md).
3. Recompila tus propios plugins `.sma` con las cabeceras actuales de AMX Mod X.
4. Verifica con `amxx version` y `amxx modules` en la consola del servidor.

Para acceder al motor y a la GameDLL desde Pawn en una instalación moderna, usa [ReAPI](/es/docs/reapi) en lugar de un AMX Mod X parcheado: esa es hoy la forma admitida de llegar a las interioridades de ReHLDS y ReGameDLL_CS.
