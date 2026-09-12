---
id: localizebugfix
title: LocalizeBug Fix
sidebar_position: 1
description: LocalizeBug Fix - zarchiwizowana wtyczka Metamoda autorstwa s1lentq, blokująca exploity z ciągami lokalizacyjnymi w nazwach graczy i na czacie w HLDS.
slug: /localizebugfix
---

# Czym jest LocalizeBug Fix?

:::warning Projekt porzucony

LocalizeBug Fix jest **zarchiwizowany i nie jest już utrzymywany**. Repozytorium zarchiwizowano na GitHubie w 2015 roku i nie przyjmuje ono zmian. Opisujemy go tu wyłącznie dla orientacji.

Do tej kategorii exploitów na obecnym serwerze użyj [SafeNameAndChat](/pl/docs/safenameandchat).

:::

LocalizeBug Fix był wtyczką Metamoda autorstwa [@s1lentq](https://github.com/s1lentq), która zamykała exploita GoldSrc polegającego na tym, że symbole lokalizacyjne umieszczone w nazwie gracza albo w wiadomości czatu wywracały wszystkich klientów, którzy je odebrali.

To pierwsze pokolenie tej poprawki. Organizacja ReHLDS rozwinęła ją później jako [ReLocalizeBugFix](/pl/docs/relocalizebugfix) — który sam również jest już porzucony.

## Exploit, który blokował

Klient GoldSrc traktuje symbole zaczynające się od `#` w niektórych komunikatach jak klucze lokalizacyjne. Autor udokumentował dwie drogi ataku:

- **Czat.** Wiadomość przechodząca przez `client_print_color` / `client_print`, zawierająca takie symbole, na przykład:

  ```text
  s1lent :#Spec_Help_Text Hello people! #Spec_Duck
  ```

  Każdy klient, który odebrał tę wiadomość, się wywracał.

- **Nazwa gracza przez `ShowMenu`.** Nazwa taka jak:

  ```text
  name "q#Buy#Buy#Buy#Buy#Buy#Buy#Buy"
  ```

  wywracała klientów, gdy otwierali menu z listą graczy.

## Dlaczego został porzucony

Wtyczka była przeznaczona dla czystego HLDS i została zastąpiona przez ReLocalizeBugFix na serwerach ReHLDS; ten następca z kolei [został porzucony w 2017 roku](https://github.com/rehlds/rehlds/issues/328#issuecomment-275837883). Nowoczesne serwery dostają tę ochronę od [SafeNameAndChat](/pl/docs/safenameandchat), który oczyszcza problematyczne znaki zamiast blokować wiadomość.

W [Instalacji](./installing.md) i [Ustawieniach](./settings.md) opisano, jak wtyczka wyglądała w użyciu.
