---
id: safenameandchat-settings
title: Configuración
sidebar_position: 3
description: SafeNameAndChat es un plugin de Metamod de terceros que neutraliza los exploits de cadenas de localización e inyección de comandos en los nombres de jugador y los mensajes de chat.
slug: /safenameandchat/settings
---

<head>
  <title>SafeNameAndChat: Configuración | ReHLDS</title>
</head>

# Configuración

SafeNameAndChat se configura mediante `SafeNameAndChat.cfg`, que el plugin ejecuta con `exec` desde su propio directorio al arrancar. Es una lista de asignaciones de cvars, y todas las protecciones vienen activadas de fábrica.

## Cvars del chat

| Cvar | Valor predeterminado | Descripción |
| --- | --- | --- |
| `SNAC_Chat_ReplaceNumberSign` | `1` | Sustituye `#` por el `＃` de ancho completo, de modo que el cliente no pueda resolver el texto como clave de localización. |
| `SNAC_Chat_ReplacePercentSign` | `1` | Sustituye `%` por el `％` de ancho completo, para que no llegue a una función de formato del cliente. |
| `SNAC_Chat_RemoveUnprintable` | `1` | Elimina del mensaje los caracteres no imprimibles. |
| `SNAC_Chat_TrimSpaces` | `1` | Recorta los espacios iniciales y finales, incluidos los caracteres que simplemente se dibujan como un espacio. |
| `SNAC_Chat_TruncateToEngineLimitAfterReplace` | `1` | Vuelve a recortar el mensaje al límite de bytes del motor *después* de la sustitución. Los caracteres de ancho completo ocupan tres bytes en UTF-8 donde el original ocupaba uno, así que un mensaje que antes cabía puede desbordarse después. El límite aplicado es de 127 bytes, o 125 cuando se restauran las comillas que rodean al mensaje. |

## Cvars de los nombres

| Cvar | Valor predeterminado | Descripción |
| --- | --- | --- |
| `SNAC_Name_ReplaceNumberSign` | `1` | Sustituye `#` por `＃` en los nombres de jugador. |
| `SNAC_Name_ReplacePercentSign` | `1` | Sustituye `%` por `％` en los nombres de jugador. |
| `SNAC_Name_ReplaceAmpersand` | `1` | Sustituye `&` por `＆` en los nombres de jugador. |
| `SNAC_Name_ReplacePlusSign` | `1` | Neutraliza la sintaxis `+comando`: cuando un `+` va seguido inmediatamente de una letra o un número ASCII, ese carácter siguiente se sustituye por su forma de ancho completo, lo que rompe la sintaxis de asignación sin dejar de mantener el nombre legible. |
| `SNAC_Name_RemoveUnprintable` | `1` | Elimina del nombre los caracteres no imprimibles. |
| `SNAC_Name_TrimSpaces` | `1` | Recorta los espacios iniciales y finales del nombre. |

## Cvar de solo lectura

| Cvar | Descripción |
| --- | --- |
| `SNAC_Version` | Indica la versión del plugin cargada. Se registra como cvar del servidor; no se puede modificar. |

## La configuración predeterminada que se distribuye

```text
SNAC_Chat_ReplaceNumberSign                 1
SNAC_Chat_ReplacePercentSign                1
SNAC_Chat_RemoveUnprintable                 1
SNAC_Chat_TrimSpaces                        1
SNAC_Chat_TruncateToEngineLimitAfterReplace 1

SNAC_Name_ReplaceNumberSign                 1
SNAC_Name_ReplacePercentSign                1
SNAC_Name_ReplaceAmpersand                  1
SNAC_Name_ReplacePlusSign                   1
SNAC_Name_RemoveUnprintable                 1
SNAC_Name_TrimSpaces                        1
```

:::warning

Desactivar una opción vuelve a abrir el exploit que cubre. Si desactivas algo para sortear un conflicto con otro plugin, desactiva la opción más concreta posible en lugar de todo el grupo del chat o de los nombres, y comprueba antes si el plugin en conflicto ya está haciendo su propio saneado.

:::

:::note

Si todas las opciones de un grupo valen `0`, el plugin se salta por completo el procesamiento de ese grupo en lugar de hacer una pasada en balde, así que un grupo totalmente desactivado no cuesta nada.

:::
