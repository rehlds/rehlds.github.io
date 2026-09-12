---
id: safenameandchat-settings
title: Setări
sidebar_position: 3
description: SafeNameAndChat - plugin Metamod terț care neutralizează exploit-urile cu șiruri de localizare și cu injectare de comenzi din numele jucătorilor și din mesajele de discuție.
slug: /safenameandchat/settings
---

<head>
  <title>SafeNameAndChat: Setări | ReHLDS</title>
</head>

# Setări

SafeNameAndChat se configurează prin `SafeNameAndChat.cfg`, pe care pluginul îl execută (`exec`) din propriul director la pornire. Este o listă simplă de atribuiri de cvar-uri, iar toate protecțiile sunt activate implicit.

## Cvar-uri pentru discuție

| Cvar | Implicit | Descriere |
| --- | --- | --- |
| `SNAC_Chat_ReplaceNumberSign` | `1` | Înlocuiește `#` cu `＃` de lățime întreagă, ca clientul să nu poată interpreta textul drept cheie de localizare. |
| `SNAC_Chat_ReplacePercentSign` | `1` | Înlocuiește `%` cu `％` de lățime întreagă, ca el să nu ajungă într-o funcție de formatare de partea clientului. |
| `SNAC_Chat_RemoveUnprintable` | `1` | Înlătură din mesaj caracterele neafișabile. |
| `SNAC_Chat_TrimSpaces` | `1` | Taie spațiile de la început și de la sfârșit, inclusiv caracterele care doar se afișează ca un spațiu. |
| `SNAC_Chat_TruncateToEngineLimitAfterReplace` | `1` | Retrunchiază mesajul la limita de octeți a motorului *după* înlocuire. Caracterele de lățime întreagă ocupă trei octeți în UTF-8 acolo unde originalul ocupa unul, așa că un mesaj care încăpea înainte poate depăși limita după aceea. Limita aplicată este de 127 de octeți sau de 125, atunci când ghilimelele din jurul mesajului sunt puse la loc. |

## Cvar-uri pentru nume

| Cvar | Implicit | Descriere |
| --- | --- | --- |
| `SNAC_Name_ReplaceNumberSign` | `1` | Înlocuiește `#` cu `＃` în numele jucătorilor. |
| `SNAC_Name_ReplacePercentSign` | `1` | Înlocuiește `%` cu `％` în numele jucătorilor. |
| `SNAC_Name_ReplaceAmpersand` | `1` | Înlocuiește `&` cu `＆` în numele jucătorilor. |
| `SNAC_Name_ReplacePlusSign` | `1` | Neutralizează sintaxa `+comandă`: când un `+` este urmat imediat de o literă sau de o cifră ASCII, acel caracter următor este înlocuit cu forma lui de lățime întreagă, ceea ce strică sintaxa de asociere și păstrează numele lizibil. |
| `SNAC_Name_RemoveUnprintable` | `1` | Înlătură din nume caracterele neafișabile. |
| `SNAC_Name_TrimSpaces` | `1` | Taie spațiile de la începutul și de la sfârșitul numelui. |

## Cvar doar pentru citire

| Cvar | Descriere |
| --- | --- |
| `SNAC_Version` | Indică versiunea încărcată a pluginului. Este înregistrat ca un cvar de server; nu poate fi modificat. |

## Configurația implicită distribuită

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

Dezactivarea unei opțiuni redeschide exploit-ul pe care ea îl acoperă. Dacă dezactivați ceva ca să ocoliți un conflict cu alt plugin, dezactivați opțiunea cea mai restrânsă cu putință, nu întregul grup de discuție sau de nume, și verificați mai întâi dacă pluginul cu care intră în conflict nu face el însuși o curățare asemănătoare.

:::

:::note

Dacă toate opțiunile dintr-un grup sunt `0`, pluginul sare complet peste prelucrarea acelui grup, în loc să facă o trecere fără efect — așa că un grup dezactivat în întregime nu costă nimic.

:::
