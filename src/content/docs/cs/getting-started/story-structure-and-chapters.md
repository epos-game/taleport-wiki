---
title: Struktura příběhu a kapitoly
description: Vztah mezi příběhem, kapitolou a grafem příběhu.
helpKey: getting-started.story-structure
status: published
sidebar:
  order: 2
---

Příběh je celé dílo, které vydáváte pod jedním autorským profilem. Skládá se z kapitol. Každá kapitola má vlastní cenu a vlastní kontrolu a čtenáři si ji kupují samostatně.

## Tři úrovně

| Úroveň | Co to je | Co z toho vidí čtenář |
| --- | --- | --- |
| **Příběh** | Vydané dílo. Patří mu titulní obrázek, žánr, štítky, věkové doporučení, obsahové štítky, postavy, proměnné a globální události. | Jedna položka v EPOSu. |
| **Kapitola** | Jedna vydatelná část příběhu. Má vlastní graf, popis, cenu a kontrolu. | Jedna část, kterou si kupuje a stahuje. |
| **Uzel** | Jedna obrazovka: text, média a dialog, plus jediný přechod, který určuje, co bude dál. | Jeden krok při čtení. |

Věkové doporučení, obsahové štítky a prohlášení o AI patří **příběhu**. Nastavujete je v kroku **Klasifikace** v průvodci publikováním kterékoli kapitoly a platí pro všechny kapitoly. Jakmile je některá kapitola vydaná, můžete věkové doporučení už jen zvýšit. Obsahový štítek, který jste uvedli, odebrat nejde.

## Délka kapitoly

Každá kapitola se kontroluje, oceňuje a vydává zvlášť. Proto na její délce záleží ze tří důvodů:

- TalePort počítá doporučenou cenu z obsahu samotné kapitoly, takže krátká kapitola vyjde levně.
- Každá pozdější oprava vydané kapitoly pošle do kontroly celou kapitolu, i když opravíte jediné špatné jméno. Čím delší kapitola, tím víc se kontroluje.
- Placené kapitoly můžete vydat až po jedné schválené kapitole zdarma, která má aspoň 20 minut unikátního obsahu. Čtyři pětiminutové kapitoly se nesečtou.

## Pořadí vydávání

Kapitoly se vydávají postupně od první. Kapitola 4 se ke čtenářům nedostane, dokud je kapitola 3 koncept. Panel **Kapitoly** to uvádí: „Kapitoly se kontrolují a publikují v tomto pořadí. Publikované kapitoly a kapitoly v kontrole jsou uzamčené; přesouvat lze pouze koncepty.“

Každá akce má podmínku na kapitoly před ní:

- **Odeslání kapitoly ke kontrole:** každá dřívější kapitola musí být vydaná nebo v kontrole. Testovací sestavení se nepočítá.
- **Schválení kapitoly recenzentem:** každá dřívější kapitola musí být vydaná a nesmí být v kontrole. Vydaná kapitola, jejíž vlastní revize je v kontrole, blokuje schválení další kapitoly.
- **Sestavení testovacího balíčku:** každá dřívější kapitola musí být v testování nebo vydaná. Kapitola, která čeká na první kontrolu, ho blokuje.

Když dřívější kapitolu stáhnete zpět do stavu **Návrh**, znovu zablokuje všechny kapitoly za sebou.

Vydané kapitoly, kapitoly v kontrole a kapitoly v testování jsou ve svém pořadí ukotvené a zůstávají před koncepty. Koncept před ně přetáhnout nejde. Ukotvená kapitola má místo úchytu k přetažení špendlík. První neukotvená kapitola má odznak **Další k publikování**.

## Přidávání, přejmenování a mazání kapitol

Kapitoly najdete v editoru pod položkou **Kapitoly**. Stejný seznam otevřete i tlačítkem **Spravovat** na kartě kapitol v detailu příběhu. **Přidat kapitolu** zařadí novou kapitolu na konec.

Tlačítko **Vytvořit** je nedostupné, dokud kapitola nemá název (až 200 znaků) a popis (až 1000 znaků). Nové pořadí se uloží, jakmile kapitolu pustíte na nové místo.

- Příběh musí mít vždy aspoň jednu kapitolu. Poslední kapitolu smazat nejde: „Příběh musí mít aspoň jednu kapitolu.“
- Dokud je kapitola v kontrole, tlačítko úpravy je šedé („Kapitoly v kontrole nelze upravovat.“) a kapitolu nesmažete. Když ji stáhnete z kontroly, obojí zase funguje.
- *Vydanou* kapitolu smazat můžete. Zmizí čtenářům a uvolní se její média. Dokud je editor otevřený, Ctrl+Z kapitolu vrátí i s médii.

## Stav mezi kapitolami

Vlastnosti, příznaky a vztahy patří příběhu, ne kapitole. Hodnoty z první kapitoly platí i ve čtvrté.

Dokud je kapitola vydaná, jsou zamčené tyto položky:

- postavy, které v ní mluví
- proměnné, které čte nebo zapisuje
- všechny proměnné na kartě vlastností mluvící postavy
- všechny globální události příběhu
- proměnná, na kterou každá z těchto globálních událostí míří

Zamčená položka má místo tlačítek úpravy a smazání zámek a nejde ji upravit ani smazat. Zámek vysvětluje: „Odemkne se, jakmile ho žádná publikovaná kapitola nebude používat. Můžete přidat novou položku.“

Stejně se zamyká graf kapitoly. Dokud je kapitola vydaná, komponenty uvnitř uzlu upravovat můžete. Uzly přidávat, mazat ani přepojovat nejde, dokud se kapitola nevrátí k vám.

Zámek se uvolní, až když kapitola, která ho drží, přestane být vydaná. To se stane, když TalePort zruší její publikaci nebo když ji smažete. Stažení z kontroly nestačí. Vydaná kapitola, kterou stáhnete, se hned vrátí do stavu **Publikováno**.

## Související

- [Graf příběhu](/cs/story-editor/story-graph/)
- [Proměnné](/cs/story-editor/variables/)
- [Životní cyklus příběhu](/cs/getting-started/story-lifecycle/)
- [Vydání kapitoly](/cs/getting-started/publishing/)
- [Struktura příběhu](/cs/best-practices/story-structure/)
