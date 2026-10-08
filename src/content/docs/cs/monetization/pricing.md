---
title: Ceny
description: Jak se počítá doporučená cena kapitoly a jak daleko s ní můžete pohnout.
helpKey: monetization.pricing
status: published
sidebar:
  order: 3
---
Každá placená kapitola má doporučenou cenu, kterou TalePort spočítá z obsahu kapitoly. Cenu můžete snížit na polovinu doporučení, nebo zvýšit až na strop 299 EPS.

Ceny se zadávají v **EPS**. To je měna v aplikaci, kterou čtenáři kupují za skutečné peníze. 1 EPS je 1 Kč, zhruba 0,04 €.

## Z čeho doporučená cena vychází

### Délka

**Délka je nejdelší jediný průchod.** TalePort projde kapitolu od uzlu Začátek a vezme nejdelší cestu ke konci. Koncem je uzel Konec nebo uzel, ze kterého nevede žádná cesta dál. Uzel, kterým cesta projde dvakrát, se počítá jednou, takže smyčka cenu nezvýší.

### Obsah navíc a rozhodnutí

Obsah mimo nejdelší cestu se počítá jako bonus. Bonus je omezený a skládá se ze dvou částí:

- o kolik víc obsahu má kapitola než její nejdelší cesta,
- rozhodovací body kapitoly.

Rozhodovací bod je uzel, ze kterého vede víc než jedna cesta dál. Uzel s pěti možnostmi se počítá jednou. Bonus násobí cenu, kterou určila délka.

### Média

Cenu zvyšují i média. Každé se počítá jinak:

| Médium | Jak se počítá |
| --- | --- |
| Dabing | Podle podílu textu, ke kterému je nahrávka. |
| Obrázky | Podle toho, kolik uzlů nějaký nese. Počítá se nejvýše jeden obrázek na dva uzly. |
| Video | Podle minut vůči nejdelší cestě. Platí filmové sekvence i video na pozadí ve smyčce. Smyčka se počítá jednou, bez ohledu na to, na kolika uzlech je. |
| Hudba | Jen jako ano, nebo ne, bez ohledu na to, jak velkou část kapitoly pokrývá. |

Hudba je jediná sazba, která se neměří na kapitole, kterou oceňujete. Přičte se, jakmile hudbu obsahuje kterákoli kapitola příběhu.

### Nedostupné uzly

Uzly a jejich obrázky se počítají, i když se k nim čtenář nedostane. Rozhodovací body se počítají jen na cestách, kudy čtenář od uzlu Začátek dojde. Cesta se zastaví na uzlu Konec, takže všechno za ním je nedostupné.

Nedostupná větev zvýší celkový objem obsahu a počet obrázků. Nepřidá žádný rozhodovací bod a nepodlouží nejdelší cestu.

## Když nejde cenu spočítat

Pokud nejdelší cesta vyjde nula, TalePort cenu spočítat nemůže. První krok dialogu publikování pak ukáže nesplněnou kontrolu **Graf příběhu obsahuje přehratelný obsah** a kapitolu nemůžete odeslat, ani zdarma, ani jako placenou.

To nastane, když na žádné cestě od uzlu Začátek není text, dabing ani filmová sekvence. Obvykle uzel Začátek vede rovnou do uzlu Konec.

## Lidská a AI média

Cena závisí na tom, jak médium vzniklo. Nastavíte to štítky v kroku **Klasifikace**. Médium přiznané jako AI se ocení níž než stejné médium přiznané jako vaše vlastní práce.

:::caution[Prohlášení musí být pravdivé]
Když štítek vypnete, nárokujete si lidskou sazbu. Je to pravidlo obsahu ([CR-III.2](/cs/publishing/content-rules/#cr-iii-2)) a nepravdivé prohlášení je vážné porušení ([CR-III.4](/cs/publishing/content-rules/#cr-iii-4)).
:::

K štítkům platí:

- Médium, které příběh neobsahuje, nic nepřidá. Jeho štítek je nedostupný s poznámkou „Váš příběh tento druh média neobsahuje.“
- TalePort kontroluje celý příběh. Počítají se kapitoly v jakémkoli stavu, avataři postav a obrázky globálních událostí. Titulní obrázek se nepočítá. Štítek proto může být aktivní kvůli tomu, že médium používá jiná kapitola.
- Štítek **AI video** cenu nemění, ale pravidlo obsahu platí i pro něj.
- Prohlášení patří příběhu, ne kapitole. Štítek, který přepnete při publikování třetí kapitoly, změní základ pro všechny kapitoly toho příběhu.

## Zaokrouhlení a minimum

Doporučená cena vždy končí devítkou. Částka 145 se změní na 139, ne na 149.

Nejnižší cena, kterou TalePort navrhne nebo přijme, je 9 EPS.

## Změna ceny

Krok **Cena** nabízí pole a posuvník mezi dolní a horní hranicí:

- **Dolní hranice:** polovina doporučené ceny zaokrouhlená na celé jednotky, ale vždy mezi 9 EPS a horní hranicí.
- **Horní hranice:** 299 EPS, ať je doporučená cena jakákoli.

Vedle jsou tři předvolby:

- **50 %** nastaví polovinu doporučené ceny a **Doporučeno** celou doporučenou cenu. Když hodnota padne mimo váš rozsah, tlačítko zašedne.
- **Max** nastaví 299 EPS, ne násobek doporučené ceny. Mimo rozsah nepadne nikdy.

Doporučená cena sama strop nemá. U hodně dlouhé kapitoly může vyjít nad 299. Pak je 299 EPS nejvíc, co můžete žádat, a **Doporučeno** zašedne.

Pole i posuvník se posouvají po jedné. Zadanou hodnotu TalePort zaokrouhlí a vrátí do rozsahu. Cena mimo rozsah se odmítne při odeslání, ne jen v dialogu. Čtenáři se účtuje přesně to celé číslo, které jste odeslali.

![krok Cena dialogu publikování u placené kapitoly: přepínač zpoplatnění, doporučená cena, posuvník mezi dolní a horní hranicí a tři předvolby](/screens/cs/monetization/pricing-step.png)

## Změny recenzentem

Recenzent může během recenze nastavit jinou cenu. Omezuje ho jen minimum 9 EPS, strop 299 EPS se na něj nevztahuje.

Když recenzent svou cenu zruší, vaše cena se nevrátí. Cena se nastaví na vypočtenou doporučenou částku. Vaše cena se vrátí, až kapitolu odešlete znovu, protože novým odesláním se cena od recenzenta zruší.

## Související

- [Obsah zdarma a placený obsah](/cs/monetization/free-and-paid-content/)
- [Kredity](/cs/monetization/credits/)
- [Autorské honoráře](/cs/monetization/royalties/)
