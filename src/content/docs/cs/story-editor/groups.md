---
title: Skupiny
description: Jak sbalit celý úsek příběhu do jediného uzlu.
helpKey: editor.groups
status: published
sidebar:
  order: 13
---

Skupina je uzel, který v sobě drží vlastní graf. Z nadřazeného plátna je to jediný obdélník s porty po okrajích, a když ji otevřete, stojíte v běžném grafu, který má svůj vlastní uzel Začátek a uzel Konec. Hodí se ve chvíli, kdy vám jeden úsek příběhu zabral celé plátno: šestnáct uzlů s prohlídkou sklepa se sbalí do jediného obdélníku s názvem Sklep, s jedním vstupem a dvěma výstupy, „Našel klíč“ a „Odešel s prázdnou“. Kapitola tím získá zpět svůj tvar a sklep máte na jedno kliknutí.

Když obdélník vyberete, pravý panel sečte, co je uvnitř: uzly, spojení, rozhodovací body, normostrany a celkovou dobu čtení. Pod tím je tlačítko **Otevřít podgraf**.

![pravý panel u vybrané skupiny, se souhrnem podgrafu a akcí Otevřít podgraf](/screens/cs/story-editor/group-panel.png)

## Kdy skupina pomůže

Rozhoduje to, jestli má úsek jeden vstup a málo výstupů. Vedlejší linka, flashback, hádanka, scéna, která stojí sama za sebe: tohle se sbalí čistě.

Úsek s jedním vstupem a sedmi výstupy ne. Složitost jste přesunuli, ne ubrali, a místo větvení teď čtete sedm popisků portů na obdélníku. Takový úsek nechte na hlavním plátně.

## Jak ji vytvořit

Z palety přetáhněte na plátno předvolbu **Skupina**. Přijde s jedním vstupním portem Vstup, jedním výstupním portem Výstup a uvnitř s uzlem Začátek propojeným přímo na uzel Konec. Samotná skupina ještě nemá jméno, takže se na plátně hlásí jako Uzel 12, dokud ji nepojmenujete.

Druhá cesta vede z výběru: vyberte uzly a zvolte **Seskupit výběr** v kontextové nabídce. Vybrané uzly se přesunou do nového podgrafu a přečíslují se od jedničky, spojení, která vedla mezi nimi, jdou s nimi, a obdélník se položí do středu místa, kde výběr ležel.

Porty se neodvozují z toho, která spojení vedla přes okraj výběru. Odvozují se z portů. Každý vstupní port vybraného uzlu, do kterého nic uvnitř výběru nevede, dostane uvnitř skupiny uzel Začátek a na obdélníku vstupní port. Každý výstupní port, ze kterého uvnitř výběru nevede žádné spojení, dostane uzel Konec a výstupní port. I nezapojený výstup, na který jste zapomněli, si tak vyslouží vlastní cestu ven. Spojení, která přes okraj skutečně vedla, se potom přepojí na odpovídající porty, takže skupina přijde na plátno zapojená stejně jako předtím výběr.

Ne každý výběr projde. Uzly musí držet pohromadě, takže u dvou nesouvisejících shluků dostanete „Seskupené uzly musí být vzájemně propojené.“ A **Seskupit výběr** se vůbec nenabídne, když je ve výběru uzel Začátek, uzel Konec nebo uzel, na který cílí globální událost.

## Porty

Vstupní port na obdélníku je uvnitř skupiny uzel Začátek, výstupní port je uzel Konec. Tím si obě strany odpovídají a tím se také přidává další vstup nebo výstup: dejte do podgrafu další uzel Začátek nebo Konec a port se objeví sám. Když hraniční uzel smažete, zmizí s ním i port a spolu s ním to, co na něj bylo v nadřazeném grafu navázané.

Pro popisek portu nikde není kolonka. Každý port si bere jméno od svého hraničního uzlu a obdélník si nový popisek vyzvedne ve chvíli, kdy skupinu opustíte. Právě to má na mysli panel náhledu větou „Přejmenováním tohoto uzlu pojmenujete vstupní port.“ Přejmenujte uzel Konec uvnitř na Našel klíč a druhý výstup obdélníku se bude jmenovat Našel klíč. Prázdná skupina z palety začíná s porty Vstup a Výstup, skupina z výběru pojmenuje každou hranici podle uzlu, na který byla navázaná.

![uzel skupiny na nadřazeném plátně, s jedním vstupním portem vlevo a dvěma výstupními vpravo, propojený s okolními uzly](/screens/cs/story-editor/group-node.png)

## Uvnitř skupiny

Čísla uzlů začínají v každém podgrafu znovu od jedničky, takže Uzel 3 ve sklepě a Uzel 3 v kapitole jsou dva různé uzly. Hledání v grafu prohledává jen ten graf, ve kterém právě stojíte.

Dovnitř vedou tři cesty: **Otevřít skupinu** v kontextové nabídce uzlu, tlačítko **Otevřít podgraf** v pravém panelu a **Otevřít skupinu** na kartě Náhled. Dokud jste uvnitř, drží se v levém horním rohu plátna navigační cesta. Kliknutím na dřívější položku, nebo přes **Přejít na nadřazený graf**, se dostanete zpátky.

Dědění médií hranici překračuje. Hudba, která hraje ve chvíli, kdy tok dojde ke vstupnímu portu skupiny, se předá uzlu Začátek uvnitř, a to, co hraje na výstupním portu, se předá uzlům navázaným na tento port venku. Nic skupinu neobchází, všechno prochází skrz ni, takže sbalením scény do skupiny ji neutišíte.

## Co skupina neumí

- Skupina neobsahuje žádné komponenty. Žádný text, žádné pozadí, žádnou hudbu. Editor komponentu přímo odmítne, nejen na ni upozorní, protože obsah patří dovnitř.
- Její přechod nejde změnit ani jedním směrem: „Přechod uzlu skupiny nelze změnit. Místo toho skupinu odstraňte a vytvořte nový uzel.“
- Kopírováním získáte jen obal: „Obsah skupiny nebyl zkopírován. Byly duplikovány pouze vstupy a výstupy skupiny.“ Nové hranice se spárují a propojí skrz, takže vložíte funkční prázdnou skupinu se stejnými porty.
- Zanořovat lze, ale skupinu, ve které je další skupina, nelze rozpustit: „Tato skupina obsahuje vnořené skupiny. Nejprve zrušte vnitřní skupiny.“ Rozebírá se to od nejvnitřnější skupiny směrem nahoru.
- Zrušení skupiny vrátí vnitřní uzly a spojení do nadřazeného grafu a spojení, která vedla přes hranici, nasměruje zpátky na původní uzly. Vrácené uzly se číslují od konce nadřazeného grafu, svá původní čísla tedy nedostanou zpátky.

## Validace uvnitř skupiny

Podgraf se kontroluje jako každý jiný graf, jen se vypustí tři pravidla. Konec nemusí být dosažitelný ze začátku, do uzlu Konec nemusí nic vést a uzlů Začátek může být víc než jeden, což je přesně smysl věci: skupina se třemi vstupy má tři uzly Začátek. Z pravidla o připojených výstupech je navíc vyňatý vlastní výstup hraničního uzlu Začátek.

Všechno ostatní platí dál. Skupina bez uzlu Začátek hlásí „Graf příběhu nemá uzel Začátek.“, skupina bez uzlu Konec hlásí „Graf příběhu nemá uzel Konec.“ a uzel Začátek s příchozím spojením je stále chyba.

Hranice se pak kontroluje z obou stran:

- Vstup, jehož uzel Začátek nikam dovnitř nevede: „Tento vstup skupiny není propojen s žádným uzlem uvnitř skupiny.“ To je chyba.
- Výstup, do jehož uzlu Konec zevnitř nic nevede: „Tento výstup skupiny není propojen s žádným uzlem uvnitř skupiny.“ Také chyba.
- Vstupní port, do kterého z nadřazeného grafu nic nevede: „Jeden nebo více vstupů skupiny nemá příchozí propojení.“ Varování, obvykle port, který jste přidali a nikdy nepoužili.

Z nadřazeného plátna z toho nevidíte nic podrobně. Všechno ze skupiny i ze skupin pod ní se sbalí do jediného problému na obdélníku, „Tato skupina obsahuje obsah s chybami ve validaci.“, a v panelu se ukáže jako Obsahuje chyby nebo Obsahuje varování. Který uzel to byl, zjistíte až po otevření skupiny.

Past je tady jedna. Kontrola globálních událostí se dělá nad vlastním grafem kapitoly, takže události **Vrátit se na poslední kontrolní bod** nestačí kontrolní bod schovaný ve skupině. A dokud pracujete ve skupině, která vlastní kontrolní bod nemá, hlásí se tam stejná chyba.

## Praktické rady

- Obdélník pojmenujte. Skupina z výběru se jmenuje Skupina, skupina z palety nemá jméno vůbec a hlásí se jako Uzel 14. „Sklep“ řekne, co je uvnitř, ani jedna výchozí varianta ne.
- O výstupech se rozhodněte dřív, než skupinu zaplníte. Přepojovat plnou skupinu je utrpení a po publikování kapitoly je struktura uzamčená: „Tato kapitola je publikovaná, proto je struktura grafu uzamčena. Stále můžete upravit obsah komponent a znovu publikovat.“
- Zanořujte málo. Skupina o tři úrovně níž je přesně ten problém s orientací, který jste chtěli vyřešit.

## Související

- [Graf příběhu](/cs/story-editor/story-graph/)
- [Typy uzlů](/cs/story-editor/node-types/)
- [Koncové uzly](/cs/story-editor/end-nodes/)
- [Struktura příběhu](/cs/best-practices/story-structure/)
