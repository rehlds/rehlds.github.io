---
id: resemiclip-settings
title: Configuración
sidebar_position: 3
description: ReSemiclip es un plugin de Metamod que controla la posibilidad de atravesar a otros jugadores. Se tomó como referencia el módulo Semiclip de `joaquimandrade`.
slug: /resemiclip/settings
---

<head>
  <title>ReSemiclip: Configuración | ReHLDS</title>
</head>

# Configuración

## `config.ini`

`addons/resemiclip/config.ini` contiene los valores predeterminados para todo el servidor, en líneas del tipo `clave = valor;`:

| Clave | Rango | Predeterminado (de fábrica) | Descripción |
| --- | --- | --- | --- |
| `semiclip` | `0`–`1` | `1` | Desactiva o activa el semiclip. |
| `team` | `0`–`3` | `3` | A quién se aplica: `0` a todos, `1` solo a los terroristas, `2` solo a los antiterroristas, `3` solo a los compañeros de equipo. |
| `time` | `0`–`180` | `0` | Segundos desde el inicio de la ronda durante los que el semiclip está activo. El valor `0` significa que está activo de forma permanente, y no solo durante un intervalo. |
| `crouch` | `0`–`1` | `1` | Permite saltar sobre un jugador agachado. |
| `effects` | `0`–`1` | `0` | Si la transparencia del jugador varía según la distancia entre jugadores. |
| `distance` | `64`–`250` | `200` | Distancia (en unidades) a la que se aplican la transparencia y el efecto semiclip. |
| `transparency` | `0`–`255` | `120` | Nivel de transparencia del jugador mientras dura el semiclip. |
| `penetfire` | `0`–`1` | `0` | Permite que las balas atraviesen a los compañeros sobre los que actúa el semiclip. |

Los valores fuera de rango no se rechazan: se ajustan al límite válido más cercano.

## Ajustes por mapa y por prefijo

ReSemiclip carga la configuración en este orden, y cada paso sobrescribe únicamente las claves que define:

1. `addons/resemiclip/config.ini`: valores predeterminados de todo el servidor.
2. `addons/resemiclip/maps/prefix_<prefijo>.ini`, donde `<prefijo>` es todo lo que hay en el nombre del mapa actual antes del primer guion bajo (por ejemplo, `de` para `de_dust2`).
3. `addons/resemiclip/maps/<nombre del mapa>.ini`: el nombre exacto del mapa actual (por ejemplo, `de_dust2.ini`).

:::note

Los archivos de ejemplo que vienen en `maps/` (`_de_dust2.ini`, `_prefix_de.ini`) llevan un guion bajo inicial a propósito: ReSemiclip no busca nombres así. Son plantillas inertes; renómbralas al nombre exacto esperado (`de_dust2.ini`, `prefix_de.ini`) para activarlas.

:::

## Comando de consola en caliente

```text
semiclip_option <key> <value>
```

Cambia un ajuste mientras el servidor está en marcha, con las mismas claves que `config.ini` (por ejemplo, `semiclip_option time 5`). Para mostrar en su lugar los ajustes activos, ejecuta `semiclip_option` sin argumentos o con una clave que no exista.
