---
id: community
title: Narzędzia społeczności
sidebar_position: 1
description: Narzędzia stworzone przez społeczność wokół ReHLDS - wymienione dla orientacji, nietworzone ani niewspierane przez organizację ReHLDS.
slug: /community
---

# Narzędzia społeczności

Ta strona wymienia zewnętrzne narzędzia, które społeczność zbudowała wokół ReHLDS. **Nie są one tworzone, sprawdzane ani wspierane przez organizację ReHLDS** i pojawiają się tutaj tylko po to, żeby ci, którzy na nie trafią, wiedzieli, czym są.

:::warning

Wszystko, co jest na tej stronie, używasz na własne ryzyko. Te narzędzia nie przechodzą audytu organizacji, a problem spowodowany przez jedno z nich należy do jego własnego systemu zgłoszeń, a nie do systemu ReHLDS. Jeśli chcesz konfiguracji, którą rozumiesz i dla której istnieje wsparcie, trzymaj się [przewodnika instalacji ReHLDS](/pl/docs/rehlds/install) i zainstaluj każdy komponent samodzielnie.

:::

## rehlds-installer

[lukasenka/rehlds-installer](https://github.com/lukasenka/rehlds-installer) to skrypt powłoki, który za jednym razem stawia kompletny zestaw serwerowy na systemie Linux opartym na Debianie — ReHLDS, Metamod-R, AMX Mod X, ReGameDLL_CS i ReUnion razem, pobierając bieżące wydania każdego z nich.

**Dla kogo jest przeznaczony:** dla dystrybucji z rodziny Debiana — Debian, Ubuntu, Linux Mint, Pop!\_OS, Kali.

**Dlaczego możesz się nim zainteresować:** sprowadza wieloetapową instalację ręczną do jednego polecenia, co bywa kuszące przy pierwszym serwerze.

Co warto rozważyć, zanim go uruchomisz:

- **Działa jako root i jest pobierany z sieci.** Udokumentowany sposób użycia pobiera skrypt do `/root/` i go wykonuje. Przeczytaj skrypt, zanim go uruchomisz, tak jak przy każdym instalatorze tego rodzaju.
- **Zawiera gotowy plik binarny.** W repozytorium obok skryptu leży skompilowany `cs.so`. Ten plik nie jest budowany przez organizację ReHLDS i nie obejmuje go podpisywanie wydań — [wydania ReHLDS](/pl/docs/rehlds/install) są podpisane kluczem GPG i można je zweryfikować, ale pliku binarnego dołączonego do zewnętrznego repozytorium nie da się sprawdzić w ten sam sposób.
- **Nie podano żadnej licencji.** W repozytorium nie ma pliku `LICENSE`, więc warunki ponownego użycia lub rozpowszechniania pozostają nieokreślone.
- **To projekt jednej osoby.** Jest aktywnie aktualizowany, ale nie stoi za nim żadna organizacja ani zobowiązanie do wsparcia.
- **Tylko po angielsku.** Skrypt i jego dokumentacja nie są tłumaczone.

Jeśli z niego skorzystasz, potraktuj wynik jako punkt wyjścia i sprawdź potem każdy komponent — `meta version`, `amxx version`, `amxx modules` i `game version` w konsoli serwera powiedzą ci, co faktycznie zostało zainstalowane.

:::note

Umieszczenie narzędzia na tej stronie nie jest rekomendacją. Jeśli utrzymujesz narzędzie związane z ReHLDS i chcesz, żeby się tu znalazło, otwórz pull request w [rehlds.github.io](https://github.com/rehlds/rehlds.github.io) — licz się z tym, że zostanie opisane wprost, razem z zastrzeżeniami, tak samo jak wszystko powyżej.

:::
