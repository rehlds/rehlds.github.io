---
id: revoice
title: ReVoice
sidebar_position: 1
description: ReVoice - wtyczka Metamoda, transkoder głosu naprawiający rozmowy głosowe między klientami steamowymi i non-steam na serwerach ReHLDS.
slug: /revoice
---

# Czym jest ReVoice?

:::warning Projekt porzucony

ReVoice został oznaczony przez opiekunów jako **porzucony**. Repozytorium wciąż jest dostępne i da się je skompilować, ale projekt nie jest aktywnie rozwijany — przetestuj go dokładnie, zanim na nim polegniesz na produkcji, i przed wdrożeniem sprawdź znane problemy w [systemie zgłoszeń](https://github.com/rehlds/ReVoice/issues).

:::

ReVoice to wtyczka [Metamoda](https://github.com/rehlds/Metamod-R) dla [ReHLDS](/pl/docs/rehlds), która naprawia zgodność rozmów głosowych między klientami steamowymi i spoza Steama na tym samym serwerze. Prawdziwi klienci Steama i klienci spoza Steama (protokoły 47/48, czyli ci, których wpuszcza [ReUnion](/pl/docs/reunion)) nie używają natywnie tego samego kodeka głosu, więc bez ReVoice rozmowa głosowa między tymi dwiema grupami może w ogóle nie działać albo działać tylko w jedną stronę. ReVoice przekodowuje dane głosowe między kodekami (Speex, Opus i SILK), żeby obie grupy mogły się słyszeć.

## Wymagania

- [ReHLDS](/pl/docs/rehlds/install) i Metamod (zalecany Metamod-R).
- `sv_voiceenable` musi być włączone na serwerze — ReVoice naprawia zgodność kodeków, ale sam nie włącza rozmów głosowych.
- Zwykle instaluje się go razem z [ReUnion](/pl/docs/reunion/install), bo to właśnie on tworzy mieszankę klientów steamowych i spoza Steama.

Zobacz [Instalację](./installing.md).
