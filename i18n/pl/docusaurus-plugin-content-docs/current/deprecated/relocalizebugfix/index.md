---
id: relocalizebugfix
title: ReLocalizeBug Fix
sidebar_position: 1
description: ReLocalizeBug Fix - porzucona wtyczka Metamoda blokująca exploity z ciągami lokalizacyjnymi w nazwach graczy i na czacie na serwerach ReHLDS.
slug: /relocalizebugfix
---

# Czym jest ReLocalizeBug Fix?

:::warning Projekt porzucony

ReLocalizeBug Fix jest **porzucony i niezgodny z nowoczesnymi wersjami ReHLDS**. Uruchomienie go na obecnej wersji może prowadzić do niestabilności i nieoczekiwanego zachowania. Jest [porzucony od 2017 roku](https://github.com/rehlds/rehlds/issues/328#issuecomment-275837883).

Do tej kategorii exploitów na obecnym serwerze użyj [SafeNameAndChat](/pl/docs/safenameandchat).

:::

ReLocalizeBug Fix był wtyczką Metamoda, która rozwiązywała błędy związane z lokalizacją na dedykowanych serwerach Half-Life — exploita, w którym symbole lokalizacyjne z przedrostkiem `#` w nazwie gracza albo w wiadomości czatu wywracają klientów, którzy je odbiorą.

Powstał jako rozwinięcie [LocalizeBug Fix autorstwa s1lentq](/pl/docs/localizebugfix), przystosowane pod ReHLDS. Jedyne publiczne wydanie, `v2.8`, ukazało się w listopadzie 2016 i było pierwszą wersją zgodną z ReHLDS.

## Dlaczego został porzucony

Sam silnik ReHLDS poszedł dalej. W miarę jak zyskiwał własne poprawki i zabezpieczenia, podejście wtyczki przestało odpowiadać temu, co robi silnik, i w kolejnym roku oznaczono ją jako porzuconą. Nigdy nie zaktualizowano jej pod wersje ReHLDS, które pojawiły się później.

Ostrzeżenie w pliku README samego projektu nie pozostawia wątpliwości: używanie tej wtyczki z nowszymi wersjami ReHLDS może prowadzić do niestabilności i nieoczekiwanego zachowania.

## Czego użyć zamiast niej

[SafeNameAndChat](/pl/docs/safenameandchat) obejmuje tę samą kategorię exploitów i jest utrzymywany. Podchodzi do sprawy łagodniej — zamienia problematyczne znaki na łudząco podobne, zamiast usuwać albo blokować wiadomość, więc gracze zachowują swoje nazwy.

W [Instalacji](./installing.md) i [Ustawieniach](./settings.md) opisano, jak wtyczka wyglądała w użyciu.
