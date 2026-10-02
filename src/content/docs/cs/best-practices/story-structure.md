---
title: Struktura příběhu
description: Jak navrhnout větvenou kapitolu, která stojí za přečtení, dá se dopsat a jde později opravit.
helpKey: best-practices.structure
status: published
sidebar:
  order: 1
---

Struktura kapitoly je graf, který nakreslíte: uzly s obsahem, vazby mezi nimi a místa, kde se čtenář rozhoduje. Zvolený tvar určuje, kolik toho budete muset napsat, na kolik se kapitola ocení a co v ní po vydání ještě půjde změnit. Vezměte scénu, která se dělí na „Vzít úplatek“ a „Odmítnout úplatek“. Pokud se obě větve vrátí do uzlu Ráno v docích a rozdíl si ponese jedna proměnná, napsali jste dvě krátké scény. Pokud se už nikdy nesejdou, napsali jste zbytek kapitoly dvakrát.

## Tvar, který funguje

Většina dobrých kapitol je sled scén, z nichž se každá uvnitř rozvětví a před tou další se zase sejde. Větve, které se nikdy nespojí, vám při každém rozhodnutí zdvojnásobí psaní. Větve, které se spojí, nechají volbu něco znamenat, a přitom práce neroste násobně.

Mezi scénami se nepřenáší zvláštní cesta, ale [stav](/cs/story-editor/variables/). Čtenář, který lhal, i čtenář, který řekl pravdu, dorazí do téže scény, a ta se čte jinak, protože má jinou hodnotu proměnné.

![Scéna 1 se větví na A a B, obě vedou do Scény 2. Scéna 2 se větví na C a D, obě vedou do Scény 3.](/diagrams/branch-and-reconverge.svg)

Právě díky tomu zůstane dopsatelná i kapitola s desítkami rozhodnutí.

## Kam dát skutečné rozdvojení

Opravdu oddělené cesty si schovejte na jedno nebo dvě místa, kde se příběh má rozdělit, a každé z nich dejte bod, kde se zase sejdou nebo kapitola skončí. Kapitola se čtyřmi samostatnými plnohodnotnými cestami znamená čtyři kapitoly, které musíte napsat, otestovat a protáhnout kontrolou.

Stejným směrem vás tlačí i [výpočet ceny](/cs/monetization/pricing/). Kapitola se ocení podle svého **nejdelšího jednotlivého průchodu**, ne podle všeho, co obsahuje. Čtyři souběžné cesty stejné délky cenu nevynásobí čtyřmi: změří se jedna a zbylé tři se do ceny dostanou jen přes bonus za interaktivitu, který je zastropovaný na +40 %.

Ten bonus jsou dvě čísla, která se mezi sebou vynásobí. První je to, o kolik víc obsahu kapitola nese oproti své nejdelší cestě, a přestane růst, jakmile součet dosáhne trojnásobku té cesty. Druhé je počet rozhodovacích bodů na hodinu nejdelší cesty, kde se počítá každý uzel dosažitelný ze Startu, který má víc než jednu výstupní vazbu, včetně uzlů ve skupinách; strop je 150 na hodinu. Protože se obě čísla násobí, obsah bez rozhodnutí vynese skoro nic. Čtyři dlouhé souběžné cesty vám dají jeden rozhodovací bod a hromadu nezměřeného psaní. Sbíhavá páteř vám jich na stejnou hodinu dá desítky.

## Tvar si vyřešte dřív, než kapitolu vydáte

**Jakmile je kapitola venku, struktura jejího grafu se zamkne.** Stavový řádek to říká napřímo: „Publikováno: struktura grafu uzamčena, obsah lze upravovat“. Text uzlu můžete přepsat, repliku dialogu upravit, obrázek vyměnit, zvuk nahradit, a poslat to znovu do kontroly. Přidat ani odebrat uzel, vazbu, komponentu, volbu, repliku dialogu nebo podmínku Switche už ne. Kapitola si nechá tvar, se kterým šla ven.

Dokud kapitolu drží recenzent, nejde upravovat vůbec nic. Editor je jen pro čtení, než odeslání zrušíte.

Zamknou se i postavy, proměnné a globální události, které vydaná kapitola používá, a zámek platí na všechna pole, ne jen na název a typ. U proměnné je to výchozí hodnota, rozsah Min a Max, název skupiny, ikona i popisky výčtových hodnot. Zamknou se jen ty komponenty, které vydaná kapitola skutečně používá, takže co jste nikde neumístili, zůstává volné, a nové můžete přidávat kdykoli. Viz [Omezení vydaného obsahu](/cs/publishing/published-content-restrictions/).

První kapitola, kterou vydáte, tedy potichu zafixuje slovník celého příběhu. Než ji odešlete, zeptejte se, co bude pátá kapitola potřebovat vědět o čtenáři, a ty proměnné si založte už teď. Pár obecných, které si můžete rozšířit, je lepší než dlouhý seznam konkrétních příznaků, u kterých už zůstanete.

## Délka

Miřte na kapitolu, kterou čtenář přečte na jedno posezení. Kdo kapitolu opustí v půlce, další si nekoupí.

Délka se počítá z textu, rychlostí 1000 znaků prostého textu za minutu. U uzlu bez textu se použije jeho namluvení, pak filmová sekvence, a platí první z těch tří, které není nula. Hudba pozadí, zvuk prostředí ani video na pozadí se do délky nepočítají nikdy, takže kapitola postavená na smyčce hudby přes video pozadí naměří nulu minut a odeslat ji vůbec nelze.

Z toho měření vycházejí dva součty a snadno se zamění. [Ceny](/cs/monetization/pricing/) berou nejdelší cestu od uzlu Začátek k uzlu Konec. [Kvalifikace pro placené publikování](/cs/monetization/requirements/) bere veškerý obsah kapitoly a chce 20 minut v jedné kapitole, ne posbíraných přes několik. Krátká páteř se čtyřmi desetiminutovými větvemi nese ke kvalifikaci 40 minut a ocení se jako desetiminutová kapitola.

## Ať je tvar čitelný

Kapitolu, kterou nevidíte, nezkontrolujete.

- Pojmenovávejte uzly. Karta na plátně a hledání uzlů sáhnou po začátku textu uzlu zkráceném na 40 znaků a až pak po „Uzel 12“. Panel Problémy, publikační dialog ani poznámky recenzenta ten úryvek nepoužijí nikdy. Zobrazí „Uzel 12“, nebo „Uzel 12 - Ráno v docích“, jakmile vyplníte Název uzlu.
- Hotové scény sbalte do [skupin](/cs/story-editor/groups/). Skupina je jediný obdélník na plátně, ve kterém leží ucelený úsek příběhu, a uzel Konec uvnitř skupiny se pro kapitolu počítá jako konec.

Skupiny vás stojí přehled, takže sbalujte scény, které máte hotové, ne ty, na kterých ještě pracujete. Uzel skupiny hlásí jen „Obsahuje chyby“ nebo „Obsahuje varování“ a jedinou položku, která říká „Tato skupina obsahuje obsah s chybami ve validaci.“ Jednotlivá zjištění se po cestě zahodí a chyba na uzlu uvnitř skupiny dorazí do publikačního dialogu bez popisku a bez tlačítka Přejít na uzel. Co to je, zjistíte až po otevření skupiny. Tři kontroly se uvnitř skupiny navíc nespustí nikdy, ani při publikování: nedosažitelný Konec, Konec bez příchozí vazby a duplicitní Začátek.

Uzly Začátek a Konec do skupiny přesunout nejde a stejně tak ne uzel, na který cílí globální událost. Vybrané uzly musí být propojené mezi sebou, takže dva nesouvisející chumáče se do skupiny společně nedostanou. Zrušit skupinu nelze, dokud v ní jsou vnořené skupiny, a kopie skupiny přenese jen její vstupy a výstupy, obsah ne. Kvůli prvnímu omezení zůstane páteř kapitoly na nejvyšší úrovni plátna, což je přesně tam, kde se čte nejlíp.

## Dávejte rozhodnutí najevo

Čtenář větveného příběhu potřebuje vědět, že se jeho volba někam zapsala. Ať se mu vrátí. Postava na ni o dvě scény později narazí, nebo další scéna začne větou, kterou druhý čtenář nikdy neuvidí. Volba, jejíž účinek není vidět, se čte jako volba, která nic neudělala.

## Související

- [Interaktivita](/cs/best-practices/interactivity/)
- [Graf příběhu](/cs/story-editor/story-graph/)
- [Proměnné](/cs/story-editor/variables/)
- [Omezení vydaného obsahu](/cs/publishing/published-content-restrictions/)
