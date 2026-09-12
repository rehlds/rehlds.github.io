---
id: rehlds-troubbleshouting
title: Rozwiązywanie problemów
sidebar_position: 4
description: ReHLDS to przebudowana wersja oryginalnego HLDS, z wyższym poziomem bezpieczeństwa, lepszą wydajnością i szerszymi możliwościami modyfikacji gier takich jak Half-Life i Counter-Strike 1.6.
slug: /rehlds/troubbleshouting
---

<head>
  <title>ReHLDS: Rozwiązywanie problemów | ReHLDS</title>
</head>

# Rozwiązywanie problemów

## Serwer wysypuje się zaraz po starcie („Illegal instruction” albo coś podobnego)

Pliki binarne ReHLDS wymagają zestawów instrukcji `SSE`, `SSE2` i `SSE3` (z `SSE4.1` / `SSE4.2` używanymi, gdy są dostępne). Niemal zawsze jest to problem z procesorem albo z wirtualizacją, a nie z konfiguracją:

- Sprawdź, czy procesor maszyny faktycznie obsługuje SSE3. Na prawdziwym sprzęcie wyprodukowanym po ok. 2005 roku rzadko bywa to problemem, ale niektóre minimalne konfiguracje VPS-ów i maszyn wirtualnych udostępniają systemowi gościa okrojony zestaw instrukcji.
- Jeśli działasz w maszynie wirtualnej, sprawdź ustawienia hipernadzorcy dotyczące przekazywania i modelu procesora.

## Silnik się nie ładuje / zachowuje się jak „zły plik binarny”

Zwykle wynika to z niezgodności silnika albo platformy:

- Sprawdź, czy podstawowy serwer to steamowa wersja sprzed aktualizacji rocznicowej (wersja silnika ≤ 8684), zainstalowana przez `steamcmd`, jak opisano w [Instalacji](./installing.md). ReHLDS **nie** jest zgodny ze starymi wersjami 5xxx i wcześniejszymi, instalowanymi przez dawne `hldsupdatetool`.
- Sprawdź, czy skopiowałeś plik binarny odpowiadający twojemu systemowi: `swds.dll` w Windowsie, `engine_i486.so` w Linuksie. Mieszanie plików między platformami (albo niepełne skopiowanie) uniemożliwi wczytanie.
- W Linuksie sprawdź, czy podmieniony plik zachował uprawnienia do odczytu i uruchomienia dla konta, na którym działa serwer.

## Zewnętrzna wtyczka przestała działać po instalacji ReHLDS

ReHLDS **nie jest zgodny na poziomie binarnym** z oryginalnym HLDS — jest budowany innymi kompilatorami niż oryginalne pliki Valve. Wtyczki, które modyfikują plik binarny wprost albo skanują silnik w poszukiwaniu sygnatur (znanym przykładem jest Orpheu), mogą się zepsuć, o ile nie wspierają ReHLDS wprost. Zanim uznasz, że winny jest sam ReHLDS, sprawdź changelog i system zgłoszeń danej wtyczki pod kątem informacji o zgodności z ReHLDS.

## Weryfikacja podpisu GPG kończy się niepowodzeniem

1. Upewnij się, że zaimportowałeś właściwy klucz publiczny (odcisk `63547829004f07716f7be4856c32c4282e60fb67`) z serwera kluczy, takiego jak [keyserver.ubuntu.com](https://keyserver.ubuntu.com/pks/lookup?search=63547829004f07716f7be4856c32c4282e60fb67+&fingerprint=on&op=index).
2. Upewnij się, że plik podpisu `.asc` odpowiada pobranemu archiwum — są publikowane razem przy każdym wydaniu i nie da się ich wymieniać między wersjami.
3. Pobierz oba pliki ponownie, jeśli któryś z nich został zmieniony przez pośredniczący serwer proxy lub CDN (niektóre firmowe proxy przepisują pobierane pliki binarne).

## Jak zebrać informacje o awarii

Jeśli serwer wysypuje się zamiast zakończyć pracę normalnie:

- **Linux** — uruchom serwer z flagą `-debug`. Jeśli `gdb` jest zainstalowany, ReHLDS automatycznie zapisuje szczegóły awarii do `debug.log`, co zwykle wystarcza do wskazania miejsca błędu bez pełnego zrzutu pamięci. Żeby zachować także zrzut pamięci, włącz pliki core dla procesu (`ulimit -c unlimited`) przed uruchomieniem serwera i rozważ `echo 1 > /proc/sys/kernel/core_uses_pid`, żeby kolejne awarie się wzajemnie nie nadpisywały.
- **Windows** — włącz tworzenie minizrzutu albo pełnego zrzutu przy awarii `hlds.exe` poprzez Raportowanie błędów systemu Windows (`Konfiguracja komputera → Szablony administracyjne → Składniki systemu Windows → Raportowanie błędów systemu Windows` w Zasadach grupy albo przez równoważne klucze rejestru), bądź za pomocą osobnego narzędzia do zrzutów.

:::warning

Zrzuty awaryjne i `debug.log` mogą zawierać wrażliwe informacje o serwerze (w tym dane związane z RCON). Nie publikuj ich otwarcie — przekazuj je bezpośrednio kanałem prywatnym albo w zaszyfrowanym lub zabezpieczonym hasłem archiwum, gdy udostępniasz je programistom.

:::

## Jak zgłosić problem

Otwórz zgłoszenie w [systemie zgłoszeń ReHLDS](https://github.com/rehlds/ReHLDS/issues) i dołącz:

- Wersję ReHLDS (tag wydania albo commit) i platformę (Windows/Linux).
- Dokładną wersję silnika HLDS, na której go zainstalowałeś.
- Modyfikację, której używasz (Half-Life, Counter-Strike 1.6, Condition Zero itd.) i jej wersję.
- Wersje Metamoda, AMX Mod X i ReGameDLL_CS oraz listę wtyczek, jeśli to istotne.
- Kroki pozwalające odtworzyć problem oraz istotne komunikaty z konsoli, `debug.log` albo zrzut awaryjny.

Im więcej szczegółów podasz od razu, tym szybciej ktoś z zespołu odtworzy i naprawi problem.
