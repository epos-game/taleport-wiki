---
title: Práce s médii
description: Tři kanály médií, jak je uzel dědí a co média kapitolu stojí.
helpKey: best-practices.media
status: published
sidebar:
  order: 3
---

Média jsou na uzlech a mají tři nezávislé kanály: pozadí, hudbu a okolní zvuk. Kanál nastavíte na jednom uzlu a zapnete u něj přepínač přenosu dál. Každý navazující uzel ho pak dědí, dokud ho něco neukončí.

Všechno, co nahrajete, si čtenář stáhne spolu s kapitolou. Požadavky na formáty a to, co TalePort se souborem při nahrání udělá, najdete v [Obrázcích](/cs/media/images/), v [Hudbě na pozadí](/cs/media/background-music/) a ve [Videu](/cs/media/video/).

## Kanály médií

- **Pozadí:** obrázek, *nebo* video. Je to jedno místo, takže uzel nese jedno nebo druhé. Editor to říká přímo: „Uzel může obsahovat buď obrázek pozadí, nebo video pozadí, ne obojí.“
- **Hudba** a **Okolní zvuk:** dvě samostatná místa, která hrají společně. Pod scénou tak může hrát hudba a za ní dál pršet.

Který přepínač přenáší který kanál a co přenos ukončí, je popsáno na stránkách kanálů: [Obrázky](/cs/media/images/#inheritance), [Hudba na pozadí](/cs/media/background-music/#inheritance) a [Okolní zvuk](/cs/media/ambient-sound/#inheritance).

Když se k uzlu mohou dostat dva zdroje, vyhrává ten nejbližší. Vzdálenost se počítá v propojeních.

**Skupiny.**

- Médium nastavené mimo skupinu se přenáší dovnitř přes vstup skupiny.
- Médium nastavené uvnitř se přenáší ven přes výstupy skupiny.
- Když do jednoho vstupu skupiny vede víc propojení, TalePort použije první, které nese médium. Nevznikne konflikt ani varování.

## Prázdné komponenty

Uzel s vlastní komponentou na daném kanálu na tom kanálu nedědí, **ani když v komponentě zatím není žádný soubor**. Prázdná komponenta místo přesto zabere. Kanál pak na tom uzlu nenese nic, a nic se tedy nepřenáší ani na další uzly.

Editor na to upozorní („Pozadí není nastaveno a žádné se nedědí.“). Varování publikování nezastaví. Dokud nevíte, jaký obrázek použijete, komponentu nepřidávejte.

## Dva zdroje ve stejné vzdálenosti

Dva různé zdroje téhož kanálu mohou dorazit k uzlu z různých stran a být stejně daleko. Takový uzel pak na tom kanálu nepřehraje **nic** a nic nehraje ani na dalších uzlech.

Samotné rozvětvení a opětovné spojení je bezpečné. Dědění si pamatuje uzel, kterému médium patří, ne souseda, od kterého přišlo. Dvě větve, které zdědily jedno pozadí nastavené před rozvětvením, mají stejného vlastníka a bez problému se spojí.

Konflikt vzniká, až když jsou zdroje dva oddělené: jedno pozadí je uvnitř levé větve, druhé uvnitř pravé a obě dorazí do místa spojení stejně daleko.

Karta média na tom uzlu konflikt ukáže. U každého zdroje nabídne **Přejít na zdrojový uzel**, a navíc **Přidat vlastní**. Konflikt publikování nezastaví. Když nastavíte média uvnitř obou větví, zkontrolujte místo, kde se sbíhají. Kanál obnovíte přes **Přidat vlastní**, nebo médium nastavte už před rozvětvením.

Kopie vytvořená z panelu konfliktu nebo přes **Použít vlastní médium** má přepínač přenosu dál už zapnutý.

![karta Pozadí na uzlu, kam zároveň dorazila dvě pozadí, u každého je uvedený uzel, odkud přišlo, a pod nimi Přidat vlastní](/screens/cs/media/media-conflict-panel.png)

## Výměna pozadí

Pozadí se přenáší dál, dokud ho něco nenahradí. Chcete-li ho změnit, nastavte nové na uzlu, kde se má změna projevit.

## Zastavení kanálu

Běžící kanál na uzlu ukončíte takto:

1. Vyberte uzel.
2. V pravém panelu najděte kartu zděděného média.
3. Klikněte na ikonu koše v jejím záhlaví. Po najetí myší se zobrazí **Zastavit dědění**.

Na uzlu pak zůstane značka. Zrušíte ji přes **Obnovit dědění**, nebo ji nahradíte přes **Použít vlastní médium**.

- **Značka zastavení** ukončí kanál na svém uzlu i na všech dalších, dokud ho něco nového nespustí.
- **Filmová sekvence** skryje všechny tři kanály, ale jen na svém uzlu. Hraje sama a na uzlech za ní zděděná média pokračují.

Uzel Konec nepřijme žádnou obsahovou komponentu, ani pozadí. Poslední obrazovka, která může pozadí ukázat, je proto uzel před ním. Za uzlem Konec nic nenásleduje, protože nemá výstupní port.

## Video

[Video](/cs/media/video/) je nejnáročnější část kapitoly. Někteří čtenáři video přeskočí a někteří čtou s vypnutým zvukem. Informace, která je jen ve videu, jim proto může uniknout.

- **Filmová sekvence** zabere celý uzel. Vedle ní smí být jen kontrolní bod a značka zastavení. Uzel musí mít jednoduchý přechod. Text, dialog ani volbu na stejné obrazovce mít nemůže.
- **Video pozadí** zabírá místo pozadí, takže ten uzel nemůže mít obrázek na pozadí.

Délku kapitoly nezvyšuje ani jedno příliš. Délka se počítá hlavně z textu, 1000 znaků na minutu.

- Čas filmové sekvence se přičte jen na uzlu bez textu a bez dabingu.
- Video pozadí se nepočítá nikdy, ať je přepínač **Smyčka** zapnutý, nebo vypnutý.
- Kapitola jen z hudby a pohyblivého pozadí naměří nula minut. Kapitolu s nulou minut odeslat nejde.

## Chybějící soubory

Při publikování TalePort vypíše média, na která se příběh odkazuje, ale už je nenašel. U každého uvede, kde se používá: v uzlu, jako avatar postavy, jako titulní obrázek příběhu nebo u globální události. Můžete je nahrát znovu, odebrat, nebo zvolit **Publikovat bez těchto souborů**.

**Chybějící soubor odeslání neblokuje.** Čtenář ho pak mít nebude.

## Záznamy o právech

Zapisujte si, odkud každý soubor je a pod jakou licencí, už když ho přidáváte.

Za práva ke všemu, co odešlete, odpovídáte vy. TalePort může požádat o licenci, souhlas nebo doklad o vlastnictví práv ([CR-II.3](/cs/publishing/content-rules/#cr-ii-3)). Média může zamítnout nebo odstranit, pokud je důvodné podezření, že porušují práva třetích stran.

V editoru klikněte na uzel pravým tlačítkem a přes **Přidat poznámku** zapište zdroj přímo k obrazovce, které patří. To, že je materiál veřejně dostupný na internetu, neznamená, že ho smíte použít ([CR-II.2](/cs/publishing/content-rules/#cr-ii-2)). „Royalty-free“ je licence s podmínkami, ne její nepřítomnost.

## Uvádění AI médií

Zapisujte si, které soubory vznikly pomocí AI nebo s její asistencí, už když je přidáváte.

Prohlášení se dělá jednou za příběh, v kroku Klasifikace dialogu publikování. Čtyři možnosti popisuje [Klasifikace](/cs/getting-started/publishing/#klasifikace). Stránka každého druhu média říká, která možnost se na něj vztahuje.

- **Obrázky, hudba a mluvené slovo** jsou na začátku označené jako AI. Když ten krok přeskočíte, publikujete vlastnoručně vytvořenou grafiku jako dílo AI a dostanete za ni [sazbu](/cs/monetization/pricing/) pro AI. U obrázků a dabingu je to polovina lidské sazby, u hudby ještě méně.
- **Video** je na začátku označené jako lidské. Jeho sazba pro AI i pro člověka je stejná, takže volba na ceně nic nemění.

Uvést použití AI je povinné ([CR-III.2](/cs/publishing/content-rules/#cr-iii-2)). Úmyslné neuvedení je závažné porušení pravidel ([CR-III.4](/cs/publishing/content-rules/#cr-iii-4)).

## Související

- [Obrázky](/cs/media/images/)
- [Hudba na pozadí](/cs/media/background-music/)
- [Okolní zvuk](/cs/media/ambient-sound/)
- [Video](/cs/media/video/)
- [Dabing](/cs/media/voice-over/)
- [Titulní obrázek](/cs/media/cover-image/)
- [Typy uzlů](/cs/story-editor/node-types/)
