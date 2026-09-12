---
id: rehlds-settings
title: Setări
sidebar_position: 3
description: ReHLDS este o versiune reconstruită a HLDS original, cu securitate sporită, performanță mai bună și capacități extinse de modding pentru jocuri precum Half-Life și Counter-Strike 1.6.
slug: /rehlds/settings
---

<head>
  <title>ReHLDS: Setări | ReHLDS</title>
</head>

# Setări

ReHLDS adaugă un set de variabile de consolă ale serverului (cvar-uri) peste cele standard din HLDS, în principal pentru reglarea protecției anti-cheat și antiabuz, pentru rețea și pentru corectarea comportamentului. Definiți-le în `server.cfg` sau în orice fișier de configurare executat la pornire.

## Cvar-uri

| Cvar | Implicit | Descriere |
| --- | --- | --- |
| `sv_auto_precache_sounds_in_models` | `0` | Preîncarcă automat sunetele atașate modelelor. |
| `sv_delayed_spray_upload` | `0` | Trimite spray-urile personalizate după intrarea în joc, nu la conectare. Crește viteza de încărcare. |
| `sv_echo_unknown_cmd` | `0` | Afișează în consolă când un client încearcă să execute o comandă necunoscută. |
| `sv_rcon_condebug` | `1` | Afișează în consolă informațiile de depanare rcon. |
| `sv_force_ent_intersection` | `0` | Folosită de pluginuri terțe pentru a forța coliziunea entităților `SOLID_SLIDEBOX`. |
| `sv_rehlds_force_dlmax` | `0` | Forțează cvar-ul `cl_dlmax` al clientului la `1024`, evitând fragmentarea excesivă a pachetelor. |
| `sv_rehlds_hull_centering` | `0` | Folosește centrul hull-ului în loc de un colț. |
| `sv_rehlds_movecmdrate_max_avg` | `400` | Nivelul mediu maxim de comenzi „move” permis înainte de o interdicție. |
| `sv_rehlds_movecmdrate_avg_punish` | `5` | Durata interdicției în minute pentru depășirea `sv_rehlds_movecmdrate_max_avg` (`0` = permanentă, valoare negativă = eliminare). |
| `sv_rehlds_movecmdrate_max_burst` | `2500` | Nivelul maxim de rafală de comenzi „move” permis înainte de o interdicție. |
| `sv_rehlds_movecmdrate_burst_punish` | `5` | Durata interdicției în minute pentru depășirea `sv_rehlds_movecmdrate_max_burst` (`0` = permanentă, valoare negativă = eliminare). |
| `sv_rehlds_send_mapcycle` | `0` | Trimite `mapcycle.txt` în mesajul cu informații despre server (la fel ca HLDS-ul original; nu este folosit de client). |
| `sv_rehlds_stringcmdrate_max_avg` | `80` | Nivelul mediu maxim de comenzi „string” permis înainte de o interdicție. |
| `sv_rehlds_stringcmdrate_avg_punish` | `5` | Durata interdicției în minute pentru depășirea `sv_rehlds_stringcmdrate_max_avg` (`0` = permanentă, valoare negativă = eliminare). |
| `sv_rehlds_stringcmdrate_max_burst` | `400` | Nivelul maxim de rafală de comenzi „string” permis înainte de o interdicție. |
| `sv_rehlds_stringcmdrate_burst_punish` | `5` | Durata interdicției în minute pentru depășirea `sv_rehlds_stringcmdrate_max_burst` (`0` = permanentă, valoare negativă = eliminare). |
| `sv_rehlds_userinfo_transmitted_fields` | `""` | Doar cheile userinfo enumerate aici sunt transmise clienților prin rețea. Gol înseamnă că sunt transmise toate câmpurile (în afara cheilor cu prefixul `_`). Puneți câte o bară oblică inversă înaintea fiecărei chei, de exemplu `\name\model\*sid\*hltv\bottomcolor\topcolor`. Vedeți [Userinfo keys](https://github.com/rehlds/ReHLDS/wiki/Userinfo-keys) pentru referința completă. |
| `sv_rehlds_attachedentities_playeranimationspeed_fix` | `0` | Corectează o eroare la viteza animației de mers care apare când un jucător are entități atașate (aiments). Poate produce întârzieri ale animației când `cl_updaterate` este mic. |
| `sv_rehlds_maxclients_from_single_ip` | `5` | Limitează conexiunile simultane de la aceeași adresă IP (nu îi afectează pe jucătorii deja conectați). |
| `sv_rehlds_local_gametime` | `0` | Reduce senzația de „lag” când aceeași hartă rulează multă vreme. |
| `sv_rehlds_allow_large_sprays` | `1` | Permite sigle personalizate mai mari de 64x64. |
| `sv_use_entity_file` | `0` | Controlează folosirea unui fișier de entități propriu pentru fiecare hartă (`maps/[numele hărții].ent`). `0` = entitățile originale, `1` = folosește fișierele `.ent` din directorul maps, `2` = folosește fișierele `.ent` și creează unul dacă nu există. |
| `sv_usercmd_custom_random_seed` | `0` | Generează o sămânță aleatorie suplimentară, independentă de client. |
| `sv_net_incoming_decompression` | `1` | Decomprimă datele comprimate primite la transferul de fișiere. |
| `sv_net_incoming_decompression_max_ratio` | `80.0` | Raportul maxim permis între datele comprimate și cele decomprimate la transferul de fișiere, între `0` și `100`. Un raport apropiat de 90 indică un volum mare de date decomprimate cu entropie scăzută. |
| `sv_net_incoming_decompression_max_size` | `65536` | Dimensiunea maximă permisă, în octeți, a datelor decomprimate la transferul de fișiere, între `16` și `65536`. |
| `sv_net_incoming_decompression_min_failures` | `4` | Numărul minim de eșecuri de decomprimare necesare pentru ca o conexiune să fie marcată în vederea unei posibile sancțiuni, între `0` și `10`. |
| `sv_net_incoming_decompression_max_failures` | `10` | Numărul maxim de eșecuri de decomprimare permise în intervalul de urmărire înainte de a se lua o măsură, între `0` și `10`. |
| `sv_net_incoming_decompression_min_failuretime` | `0.1` | Intervalul de timp în secunde, între `0.1` și `10.0`, în care sunt urmărite eșecurile de decomprimare. |
| `sv_net_incoming_decompression_punish` | `-1` | Durata interdicției în minute pentru fragmente bzip2 deformate sau anormale (`0` = permanentă, valoare negativă = eliminare). |
| `sv_tags` | `""` | Listă de „gametags” ale serverului, separate prin virgulă, folosită la filtrarea în interfețele de matchmaking și în lista de servere. |
| `sv_filterban` | `1` | Modul de filtrare după IP. `-1` = respinge necondiționat toți jucătorii, `0` = fără verificări, `1` = elimină jucătorii care corespund unui filtru de IP sau unei interdicții. |
| `sv_rehlds_movecmd_max_ticks` | `24` | Numărul maxim de comenzi de mișcare pe care serverul le procesează de la același jucător într-un singur cadru (comenzi, nu pachete). |
| `sv_rehlds_movecmd_max_null_streak` | `0` | Numărul maxim permis de comenzi de mișcare consecutive cu durată zero (comenzi goale). `0` dezactivează verificarea. |
| `sv_rehlds_movecmd_clamp_interp` | `1` | Blochează comenzile de mișcare cu o valoare `ex_interp` în afara intervalului valid. |
| `sv_rehlds_movecmdtime_samples` | `120` | Numărul de cadre folosite pentru a calcula media vitezei de mișcare a unui client. Valori mai mari = precizie mai bună, dar detectare mai lentă. |
| `sv_rehlds_movecmdtime_max_error` | `300` | Cât (în ms) poate devia ceasul intern de joc al unui client față de ceasul serverului înainte ca viteza să fie evaluată. Sancțiunile se aplică doar dacă sunt încălcate și `sv_rehlds_movecmdtime_max_scale` / `_min_scale`. |
| `sv_rehlds_movecmdtime_max_scale` | `3.0` | Raportul maxim al vitezei de joc de bază a clientului. Clienții care accelerează peste această valoare primesc avertismente. |
| `sv_rehlds_movecmdtime_min_scale` | `0.5` | Raportul minim al vitezei de joc de bază a clientului. Clienții care încetinesc sub această valoare primesc avertismente. |
| `sv_rehlds_movecmdtime_max_warnings` | `-1` | Numărul maxim de avertismente pentru speedhack sau slowmo permise înainte de sancțiune. `-1` dezactivează detectarea. |
| `sv_rehlds_movecmdtime_punish` | `-1` | Sancțiunea pentru speedhack sau încetinire artificială (`-1` = eliminare, `0` = interdicție permanentă, valoare negativă = eliminare). |
| `sv_reconnect_timeout` | `30` | Termenul ferm, în secunde, în care un client trebuie să își reia conexiunea după o schimbare de hartă, indiferent de activitatea canalului de rețea. Închide un exploit cu sloturi-fantomă, în care un cheat blochează comanda `reconnect` și ține canalul de rețea activ, astfel încât `sv_timeout` să nu se declanșeze niciodată. `0` dezactivează funcția. |

:::note

`sv_rehlds_userinfo_transmitted_fields` este setarea folosită cel mai des împreună cu configurațiile de confidențialitate și anti-cheat. Vedeți [pagina Userinfo keys din wiki](https://github.com/rehlds/ReHLDS/wiki/Userinfo-keys) pentru tipul valorii, transmiterea implicită și observațiile de confidențialitate pentru fiecare cheie standard.

:::

## Fișiere

| Cvar | Implicit | Descriere |
| --- | --- | --- |
| `listipcfgfile` | `listip.cfg` | Fișierul folosit pentru interdicțiile permanente după IP. |
| `syserror_logfile` | `sys_error.log` | Fișierul folosit pentru jurnalul de erori de sistem. |

## Comenzi de consolă

| Comandă | Descriere |
| --- | --- |
| `rescount` | Afișează în consola serverului numărul total de resurse preîncărcate. |
| `reslist <sound \| model \| decal \| generic \| event>` | Afișează resursele preîncărcate de tipul indicat. Utilă pentru gestionarea resurselor și a limitelor de preîncărcare din GoldSrc. |
| `rcon_adduser <ipaddress/CIDR>` | Adaugă o adresă IP sau un interval CIDR în lista utilizatorilor RCON, acordându-i acces privilegiat la consolă. Fără niciun utilizator RCON, oricine are parola corectă poate folosi RCON. |
| `rcon_deluser <ipaddress> {removeAll}` | Elimină o adresă IP sau un interval CIDR din lista utilizatorilor RCON. |
| `rcon_users` | Enumeră toate adresele IP și intervalele CIDR din lista utilizatorilor RCON. |
