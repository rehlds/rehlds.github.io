---
id: rehlds-install
title: Instalacja
sidebar_position: 2
description: ReHLDS to przebudowana wersja oryginalnego HLDS, z wyższym poziomem bezpieczeństwa, lepszą wydajnością i szerszymi możliwościami modyfikacji gier takich jak Half-Life i Counter-Strike 1.6.
slug: /rehlds/install
---

<head>
  <title>ReHLDS: Instalacja | ReHLDS</title>
</head>

# Instalacja

ReHLDS zastępuje plik binarny silnika HLDS bez żadnych dodatkowych zabiegów. Instalacja polega na pobraniu podstawowego serwera HLDS przez Steam, a następnie nadpisaniu pliku silnika wersją ReHLDS.

## 1. Zainstaluj podstawowy serwer HLDS

ReHLDS wymaga steamowej wersji HLDS **sprzed aktualizacji rocznicowej** (wersja silnika 8684 lub starsza). Pobierz ją za pomocą `steamcmd`:

```text
app_set_config 90 mod cstrike
app_update 90 -beta steam_legacy validate
```

Zmień `mod cstrike` na wybraną modyfikację, jeśli nie prowadzisz Counter-Strike 1.6.

:::warning

ReHLDS nie jest zgodny ze starymi wersjami 5xxx i wcześniejszymi, instalowanymi przez dawne `hldsupdatetool`. Instaluj zawsze przez `steamcmd`, tak jak pokazano wyżej.

:::

## 2. Pobierz ReHLDS

Weź wersję z jednego z tych miejsc:

- [Wydania stabilne](https://github.com/rehlds/ReHLDS/releases) — zalecane na serwery produkcyjne.
- [Wersje rozwojowe](https://github.com/rehlds/ReHLDS/actions/workflows/build.yml) — najnowsze artefakty z CI, przydatne do testowania poprawek przed wydaniem.

Wybierz archiwum pasujące do platformy twojego serwera (Windows albo 32-bitowy Linux).

## 3. Podmień plik binarny silnika

1. Zatrzymaj serwer całkowicie.
2. Zrób kopię zapasową obecnego pliku silnika.
3. Skopiuj plik ReHLDS na miejsce oryginalnego:

| Platforma | Do podmiany | Symbole debugowania (opcjonalnie) |
| --- | --- | --- |
| Windows | `swds.dll` | `swds.pdb` |
| Linux | `engine_i486.so` | — |

Archiwum dla Windowsa zawiera dodatkowo `hlds.exe` / `hltv.exe` oraz biblioteki DLL komponentów ReHLTV (`core.dll`, `proxy.dll`, `demoplayer.dll`, `director.dll`, `filesystem_stdio.dll`); skopiuj te, których używa twoja konfiguracja, razem z `swds.dll`.

4. W Linuksie upewnij się, że podmieniony plik zachował te same uprawnienia (możliwość odczytu i uruchomienia przez konto, na którym działa serwer).
5. Uruchom serwer. ReHLDS przedstawia się w komunikatach konsoli przy starcie, więc podmianę potwierdzisz, zaglądając do logu.

## Weryfikacja podpisów wydań (opcjonalna, ale zalecana)

Linuksowe archiwa wydań są podpisane kluczem GPG. Odcisk klucza publicznego to:

```text
63547829004f07716f7be4856c32c4282e60fb67
```

1. Pobierz klucz z serwera kluczy, na przykład z [keyserver.ubuntu.com](https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x63547829004f07716f7be4856c32c4282e60fb67).
2. Zaimportuj go:

```bash
gpg --import 63547829004f07716f7be4856c32c4282e60fb67.asc
```

3. Pobierz zarówno archiwum wydania, jak i towarzyszący mu plik podpisu `.asc`.
4. Zweryfikuj:

```bash
gpg --verify some-rehlds.zip.asc some-rehlds.zip
```

## Uwagi o zgodności

- ReHLDS **nie jest zgodny na poziomie binarnym** z oryginalnym HLDS (jest budowany innymi kompilatorami). Wtyczki, które modyfikują plik binarny wprost albo skanują silnik w poszukiwaniu sygnatur — znanym przykładem jest Orpheu — mogą nie działać, o ile nie wspierają ReHLDS wprost.
- Jeśli planujesz używać Metamod-R, ReAPI albo ReGameDLL_CS, zainstaluj najpierw ReHLDS — te projekty zakładają, że ReHLDS jest już na miejscu. Zobacz [instalację Metamod-R](/pl/docs/metamod-r/install) i [instalację ReGameDLL_CS](/pl/docs/regamedll-cs/install).
