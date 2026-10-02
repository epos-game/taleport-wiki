---
title: Video
description: Filmové sekvence a video pozadí, co stojí čtenáře a co se odmítne.
helpKey: media.video
status: published
sidebar:
  order: 5
---

Video se do příběhu dostane dvěma komponentami, které se chovají úplně jinak. **Filmová sekvence** je samotný uzel: vyplní obrazovku, hraje sama a nic dalšího na tom uzlu stát nesmí. **Video pozadí** naopak obsadí místo pozadí a hraje ve smyčce za textem i volbami, a to v jednom megabajtu. Na uzel *Dveře do sklepa* dejte šestisekundovou sekvenci, jak se dveře otevírají, a uzel *Dolů po schodech* ať v pozadí točí světlo pochodně na mokrém kameni, zatímco se čtenář rozhoduje, kudy dál.

## Přijímané soubory

Soubor mp4, nic jiného výběr souborů nenabídne. Obrazová stopa musí být H.264, což mp4 zapisuje jako `avc1` nebo `avc3`. Zvuk je nepovinný: klip bez zvuku projde, a přesně takové většina smyčkových pozadí je. Pokud zvukovou stopu má, musí být AAC.

Tvar se kontroluje jako „není na šířku“, ne jako poměr 9:16, takže čtvercový klip 1080 × 1080 projde, i když ho telefon zobrazí v pruhu. Rozlišení se hlídá po osách, cokoli širšího než 1080 nebo vyššího než 1920 se odmítne: „Rozlišení videa je příliš vysoké (1920x1080); maximum je 1080x1920.“

Obě kontroly běží ve vašem prohlížeči nad souborem, který jste vybrali. Když prohlížeč nepřečte metadata do deseti sekund, dostanete „Toto video se nepodařilo načíst.“ Kodek se pak zjišťuje rozborem struktury mp4. Stopa, u které se kodek přečíst nedá, se nekontroluje vůbec, takže nezvyklý soubor občas uklouzne jen proto, že ho prohlížeč umí přehrát.

## TalePort video nepřevádí

Obrázky a zvuk se překódují ve vašem prohlížeči. Video se jen zkontroluje. Co nahrajete, to si čtenáři bajt po bajtu stáhnou, takže jedinou pákou na kompresi je nastavení exportu a skutečným omezením jsou limity velikosti:

| Použití | Limit velikosti |
| --- | --- |
| Filmová sekvence | 25 MB |
| Video pozadí | 1 MB |

Délku nic neomezuje, zato ten jeden megabajt ano. Video pozadí má být krátké, s málo pohybem a s čistým napojením smyčky: plynoucí kouř, déšť na skle, pomalý švenk. Cokoli rušnějšího se do limitu nevejde, nebo bude vypadat jako špatný GIF.

## Filmová sekvence má uzel jen pro sebe

Filmová sekvence je výhradní obsah. Vedle ní smí stát jen [kontrolní bod](/cs/story-editor/checkpoints/) a značka zastavení dědění a uzel musí mít jednoduchý přechod. Text, dialog, volby, obrázkové pozadí, video pozadí, hudba i okolní zvuk se odmítnou se zprávou „Toto je hlavní obsah (například video) a nelze jej kombinovat s ostatními komponentami uzlu. Nejprve uzel vyprázdněte; kontrolní bod může zůstat.“ Přepnout takový uzel na jiný přechod také nejde, dokud sekvenci neodeberete.

Dokud je sekvence na obrazovce, zděděné pozadí, hudba i okolní zvuk se skryjí, aby hrála sama, a na dalších uzlech zase pokračují. Sama se nikdy nepřenáší dál a nemá přepínač **Smyčka** ani **Pokračovat v zobrazování**. Editor u ní ukáže **Délku** a víc se na ní nastavit nedá.

Komponenta filmové sekvence bez nahraného souboru se objeví v seznamu problémů jako „Filmová sekvence není nastavena.“ Je to varování, takže vám nezabrání publikovat uzel, na kterém čtenář uvidí prázdnou scénu.

## Video pozadí sdílí místo s obrázkem

Video pozadí a [obrázkové pozadí](/cs/media/images/) obsazují totéž místo, uzel tedy nese jedno z nich. Když přidáte druhé, editor odpoví „Uzel může obsahovat buď obrázek pozadí, nebo video pozadí, ne obojí.“ Ani jedno nemůže stát na uzlu se zastavením dědění kanálu **Pozadí** a to zastavení ukončí obě podoby najednou, protože kanál pozadí je jen jeden.

U náhledu jsou dva přepínače a nejde o totéž. **Smyčka** je zapnutá od chvíle, kdy soubor nahrajete, na rozdíl od hudby a okolního zvuku, kde začíná vypnutá. **Pokračovat v zobrazování** je naopak vypnuté, takže klip zůstane jen na svém uzlu, dokud ho nezapnete, ať v paletě komponent o dědění podřízenými uzly stojí cokoli.

## Co to stojí čtenáře

Kapitola se stahuje jako jeden balíček včetně médií, ještě než ji čtenář otevře, takže sekvence o 20 MB je 20 MB čekání na mobilních datech. Celkovou velikost kapitoly TalePort nijak neomezuje a velikost balíčku vám editor ani neukáže. Nejblíž tomu má **Délka videa** v nabídce **Statistiky** ve stavovém řádku editoru: sečte vaše sekvence a každý klip na pozadí započítá jednou, ať ho nese kolik chce uzlů.

## Práva

Na video platí stejné požadavky na práva jako na ostatní média a obvykle jich je víc pohromadě: samotné záběry, hudba pod nimi a každý, kdo je v nich poznatelný. Viz [CR-II.1](/cs/publishing/content-rules/#cr-ii-1) a [CR-II.2](/cs/publishing/content-rules/#cr-ii-2).

Video vytvořené AI přiznáte v kroku Klasifikace průvodce vydáním. Přepínač **AI video** se dá zapnout jen tehdy, když kapitola skutečně obsahuje filmovou sekvenci nebo video pozadí. Viz [CR-III.2](/cs/publishing/content-rules/#cr-iii-2). S doporučenou cenou to nepohne: sazba za video je u AI i u člověka stejná.

## Praktické rady

- Exportujte na výšku v H.264, nejvýš v 1080 × 1920, ještě než se soubor pokusíte nahrát. Odmítnout se dá soubor jen kvůli orientaci, rozlišení a kodeku a všechny tři si nastavíte právě při exportu.
- Vejít se s pozadím do 1 MB znamená omezit nejdřív pohyb a až potom datový tok. Tři sekundy, které navazují, jsou lepší než osm, které sekají.
- Sekvence držte krátké. Čtenář, který přečkal první, druhou přeskočí.
- Nespoléhejte na to, že si čtenář vytáhne důležitou informaci z videa. Někdo ho přeskočí, někdo čte s vypnutým zvukem.
- Otestujte to na telefonu přes mobilní data, ne u stolu.

## Související

- [Obrázky](/cs/media/images/)
- [Typy uzlů](/cs/story-editor/node-types/)
- [Práce s médii](/cs/best-practices/media-usage/)
