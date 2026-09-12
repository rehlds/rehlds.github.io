---
id: safenameandchat-install
title: Instalare
sidebar_position: 2
description: SafeNameAndChat - plugin Metamod terț care neutralizează exploit-urile cu șiruri de localizare și cu injectare de comenzi din numele jucătorilor și din mesajele de discuție.
slug: /safenameandchat/install
---

<head>
  <title>SafeNameAndChat: Instalare | ReHLDS</title>
</head>

# Instalare

SafeNameAndChat este un plugin Metamod și are nevoie de Metamod (se recomandă Metamod-R) deja instalat și funcțional.

## 1. Obțineți SafeNameAndChat

Descărcați binarele din [pagina de versiuni](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/releases) sau [compilați-l din sursă](./compilling.md). O versiune conține două fișiere:

| Platformă | Fișier |
| --- | --- |
| Windows | `SafeNameAndChat.dll` |
| Linux | `SafeNameAndChat.so` |

## 2. Puneți pluginul la locul lui

Creați un folder `SafeNameAndChat` în `addons`, în directorul modului dumneavoastră, și puneți acolo binarul potrivit platformei dumneavoastră:

```text
<mod>/addons/SafeNameAndChat/SafeNameAndChat.dll
<mod>/addons/SafeNameAndChat/SafeNameAndChat.so
```

## 3. Adăugați fișierul de configurare

Copiați fișierul [`SafeNameAndChat.cfg`](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/blob/master/SafeNameAndChat.cfg) al proiectului lângă binar. Pluginul își construiește calea pornind de la propria locație și execută (`exec`) de acolo fișierul `SafeNameAndChat.cfg` la pornire, așa că fișierul trebuie să se afle în același folder cu pluginul — nu în rădăcina modului.

## 4. Înregistrați pluginul în Metamod

Adăugați un rând în `<mod>/addons/metamod/plugins.ini`:

```text
win32 addons\SafeNameAndChat\SafeNameAndChat.dll
linux addons/SafeNameAndChat/SafeNameAndChat.so
```

## 5. Verificați

Porniți serverul și rulați `meta list` — `SafeNameAndChat` ar trebui să apară în listă ca încărcat (eticheta lui din jurnale este `SNAC`). Consultați `SNAC_Version` în consolă, ca să confirmați ce versiune rulează.

Fiindcă pluginul este marcat ca putând fi încărcat oricând, puteți folosi și `meta load addons/SafeNameAndChat/SafeNameAndChat.so` pe un server pornit, în loc să îl reporniți.

Vedeți [Setări](./settings.md) pentru cvar-uri.
