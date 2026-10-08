---
title: Video
description: Filmové sekvence a video pozadí, co stojí čtenáře a co se odmítne.
helpKey: media.video
status: published
sidebar:
  order: 5
---
V TalePortu jsou dva druhy videa:

| | Filmová sekvence | Video pozadí |
| --- | --- | --- |
| Co to je | Samotný uzel | Klip na místě pozadí |
| Jak se přehrává | Vyplní obrazovku a hraje sama | Hraje ve smyčce za textem a volbami |
| Limit velikosti | 25 MB | 1 MB |

## Podporované soubory

Nahrát jde jen mp4.

- **Obraz:** H.264 (mp4 ho zapisuje jako `avc1` nebo `avc3`).
- **Zvuk:** nepovinný, klip bez zvuku projde. Pokud zvuk je, musí být AAC.
- **Cokoli jiného** se odmítne se zprávou: „Nepodporovaný videokodek (hev1). Použijte prosím H.264 video se zvukem AAC v souboru mp4.“

### Tvar a rozlišení

- Odmítne se jen video na šířku, a to se zprávou: „Toto video je na šířku. Nahrajte prosím svislé video (na výšku, 9:16).“
- Poměr nemusí být přesně 9:16. Čtvercový klip 1080 × 1080 projde, i když ho telefon zobrazí v pruhu.
- Každá strana se kontroluje zvlášť. Klip na výšku širší než 1080 nebo vyšší než 1920 se odmítne: „Rozlišení videa je příliš vysoké (1440x2560); maximum je 1080x1920.“
- Obě kontroly běží ve vašem prohlížeči. Když prohlížeč soubor nepřečte do deseti sekund, dostanete „Toto video se nepodařilo načíst. Nahrajte prosím soubor H.264 mp4.“

## Velikost

Obrázky a zvuk prohlížeč převádí, video jen zkontroluje.

:::tip[Zmenšete video při exportu]
Čtenáři dostanou přesně to, co nahrajete. Video zmenšete už při exportu.
:::

Délka omezená není, jen velikost. Aby se video pozadí vešlo do 1 MB, musí být krátké a s malým pohybem. Smyčka na sebe musí navazovat bez škubnutí.

## Filmová sekvence

Filmová sekvence je výhradní obsah a na uzlu nesmí sdílet místo s jinými komponentami. Vedle ní smí být jen [kontrolní bod](/cs/story-editor/checkpoints/) a značka zastavení dědění. Uzel musí mít jednoduchý přechod.

- Text, dialog, volby, obrázkové pozadí, video pozadí, hudba i okolní zvuk se odmítnou se zprávou: „Tento uzel obsahuje hlavní obsah (například video), který nelze sdílet s dalšími komponentami. Vedle něj lze přidat pouze kontrolní bod.“
- Opačně je to stejné. Když filmovou sekvenci položíte na uzel, který už něco obsahuje, dostanete „Toto je hlavní obsah (například video) a nelze jej kombinovat s ostatními komponentami uzlu. Nejprve uzel vyprázdněte, kontrolní bod může zůstat.“
- Přechod takového uzlu nezměníte, dokud klip neodeberete.

Dokud sekvence hraje, zděděné pozadí, hudba a okolní zvuk se skryjí. Na dalších uzlech se vrátí.

Filmová sekvence se nikdy nepřenáší dál, takže nemá přepínač **Smyčka** ani **Pokračovat v zobrazování**. Pod názvem souboru jsou čtyři štítky: **Délka**, **Rozlišení**, **Orientace** a **Formát**. Kliknutím na náhled klip přehrajete.

Filmová sekvence bez souboru se objeví v seznamu problémů jako „Filmová sekvence není nastavena.“ Je to jen varování a vydání nebrání, ale čtenář uvidí prázdnou scénu.

![karta Filmová sekvence v pravém panelu: náhled na výšku s tlačítkem přehrání, název souboru a štítky s délkou, rozměry, orientací a formátem, pod tím Nahradit a Odebrat](/screens/cs/media/cutscene-panel.png)

## Video pozadí

Video pozadí a [obrázkové pozadí](/cs/media/images/) sdílejí jedno místo, takže uzel má vždy jen jedno z nich. Když přidáte druhé, editor odpoví: „Uzel může obsahovat buď obrázek pozadí, nebo video pozadí, ne obojí.“

Jedno zastavení dědění kanálu **Pozadí** ukončí obojí, protože obrázek i video sdílejí jeden kanál. Pozadí můžete položit i na uzel se zastavením. Editor zastavení sám odstraní a klip tam vloží. Jde to vzít zpět.

Uzel, který pozadí zdědí, má na něj jedinou kartu s textem **Zděděno z** a jménem zdrojového uzlu. Zdrojem může být obrázek i video. Níže je příklad s obrázkem.

![karta zděděného pozadí s nadpisem Obrázek na pozadí, nad obrázkem a jeho rozměry stojí Zděděno z a jméno uzlu, ze kterého se pozadí dědí, tady Node 6](/screens/cs/story-editor/inherited-image-panel.png)

U náhledu jsou dva přepínače:

- **Smyčka** je po nahrání zapnutá. (U hudby a okolního zvuku je na začátku vypnutá.)
- **Pokračovat v zobrazování** je vypnuté, takže klip zůstane jen na svém uzlu, dokud ho nezapnete.

Následující uzly zdědí video pozadí, jen když je **Pokračovat v zobrazování** zapnuté.

## Co video stojí čtenáře

Kapitola se stahuje celá včetně médií, ještě než ji čtenář otevře. Filmová sekvence o 20 MB tak znamená 20 MB čekání na mobilních datech.

Celková velikost kapitoly omezená není. Odhadnout ji pomůže položka **Délka videa** v nabídce **Statistiky** ve stavovém řádku editoru. Sečte vaše filmové sekvence a každý klip na pozadí započítá jednou, kolik uzlů ho používá.

## Práva a označení AI

Na video platí stejná pravidla pro práva jako na ostatní média a často jich platí víc najednou: záběry, hudba pod nimi a každý, kdo je v nich poznatelný. Podrobnosti jsou v pravidlech [CR-II.1](/cs/publishing/content-rules/#cr-ii-1) a [CR-II.2](/cs/publishing/content-rules/#cr-ii-2).

Video vytvořené AI uvedete v kroku Klasifikace dialogu publikování ([CR-III.2](/cs/publishing/content-rules/#cr-iii-2)).

- Přepínač **AI video** jde zapnout, jakmile je kdekoli v příběhu filmová sekvence nebo video pozadí, v kterékoli kapitole a v jakémkoli stavu.
- Odpověď se ukládá k příběhu, takže platí pro všechny vydané kapitoly.
- Na rozdíl od přepínačů **AI obrázky**, **AI hudba** a **AI mluvené slovo** je tento od začátku vypnutý.
- Doporučenou cenu nemění, protože sazba za video je u AI i u člověka stejná.

## Praktické rady

- Exportujte video na výšku v H.264, nejvýš 1080 × 1920. Kromě limitu velikosti TalePort soubor odmítne jen kvůli orientaci, rozlišení nebo kodeku.
- Pro pozadí do 1 MB omezte nejdřív pohyb a až potom datový tok.

## Související

- [Obrázky](/cs/media/images/)
- [Typy uzlů](/cs/story-editor/node-types/)
- [Práce s médii](/cs/best-practices/media-usage/)
