---
title: Ceny
description: Jak se počítá doporučená cena kapitoly a jak daleko s ní můžete pohnout.
helpKey: monetization.pricing
status: published
sidebar:
  order: 3
---

Každá placená kapitola má doporučenou cenu a TalePort si ji spočítá z grafu kapitoly, ne z toho, co do pole napíšete. Měřítko udává nejdelší cesta, kterou čtenář může projít, sazbu za hodinu určují média na uzlech a obsah, který se z té cesty větví, přidá bonus navíc. Kapitola, jejíž nejdelší průchod trvá 92 minut, obsahuje 470 uzlů, 87 obrázků, 16 minut videa a namluvených 73 % textu, vyjde na 159 EPS. Odtud ji můžete stáhnout na polovinu doporučené ceny, nebo zvednout až na 299 EPS.

Ceny se nastavují v **EPS**, měně v aplikaci, kterou si čtenáři kupují za skutečné peníze. 1 EPS je 1 Kč, zhruba 0,04 €.

## Na co se výpočet dívá

**Délkou se myslí nejdelší jednotlivý průchod.** TalePort projde kapitolu od startovních uzlů a vezme nejdelší cestu k zakončení, tedy k uzlu s přechodem Konec nebo k uzlu, ze kterého už nic nevede. Tato délka v hodinách násobí všechno ostatní. Tam, kde se graf zacyklí, se zpětné hrany zahodí, takže výsledek je spodní hranice, ne přesný nejhorší případ.

Dvě kapitoly se stejným množstvím textu se ocení úplně jinak, pokud jedna má dlouhou páteř a druhá spoustu krátkých alternativ. Všechno nad rámec nejdelší cesty se počítá také, ale jen přes bonus za interaktivitu. Ten stojí na dvou mírách:

- Kolik obsahu má kapitola navíc oproti nejdelší cestě. Počítá se do trojnásobku její délky, dál už to nepomáhá.
- Rozhodovací body na hodinu nejdelší cesty. Rozhodovací bod je uzel, ze kterého vede dál víc než jedna cesta, takže uzel s pěti možnostmi se počítá jednou, ne pětkrát. Plnou hodnotu dostanete při 150 na hodinu.

Dohromady přidají nanejvýš 40 %. Kapitola bohatší na volby, než by odpovídalo její délce, vydělá víc než kapitola, která je jen dlouhá.

Média zvyšují sazbu za hodinu, každý druh po svém:

| Médium | Jak se počítá |
| --- | --- |
| Namluvení | Podíl znaků textu, ke kterým je připojená nahrávka. |
| Obrázky | Obrázky vůči počtu uzlů. Jeden obrázek na dva uzly už znamená plnou částku, víc nepřidá nic. |
| Video | Minuty videa vůči délce nejdelší cesty. |
| Hudba | Pevná částka za hodinu. Na tom, jak velkou část kapitoly pokrývá, nezáleží. |

Uzly se počítají bez ohledu na to, jestli se k nim čtenář dostane, a jejich obrázky také. Odříznutá větev tak zvedne celkové množství obsahu i počet obrázků, nejdelší cestu ale prodloužit nemůže.

## Lidská a AI média

Na ceně se projeví i to, jak médium vzniklo. Následující čísla jsou EPS za hodinu nejdelšího průchodu, nad rámec základu 75:

| | AI | Člověk |
| --- | --- | --- |
| Namluvení | 15 | 30 |
| Obrázky | 10 | 20 |
| Hudba | 5 | 12 |

Rozhodují o tom štítky v kroku Klasifikace a každý má přesně dva stavy. Zapnuté **AI obrázky** znamenají sazbu 10, vypnuté 20. Vypnutý štítek je tedy právě to, čím si říkáte o lidskou sazbu, a proto musí odpovídat skutečnosti. Je to zároveň pravidlo obsahu ([CR-III.2](/cs/publishing/content-rules/#cr-iii-2)) a nepravdivé označení se bere vážně ([CR-III.4](/cs/publishing/content-rules/#cr-iii-4)).

Tři věci, které autory zaskočí:

- Médium, které příběh neobsahuje, nevydělá nic a jeho štítek je nedostupný s poznámkou „Váš příběh tento druh média neobsahuje.“ Dostupnost se zjišťuje za celý příběh, tedy všechny kapitoly v jakémkoli stavu plus obrázky samotného příběhu. Štítek proto může být aktivní kvůli jiné kapitole.
- AI i lidské video vydělá stejných 8 a publikační cesta video stejně ocení sazbou AI, takže štítkem **AI video** cenou nepohnete ani jedním směrem.
- Prohlášení patří k příběhu, ne ke kapitole. Když štítek přepnete při publikaci třetí kapitoly, změnili jste základ sazby pro všechny kapitoly toho příběhu.

## Odkud se ta čísla berou

Základ, sazby za média, 150 rozhodovacích bodů, strop bonusu 40 %, minimum 9 EPS i strop 299 jsou součástí cenové konfigurace, kterou může administrátor za provozu nahradit novou revizí. Hodnoty výše jsou ty, se kterými se TalePort dodává. Každá kapitola si ke své vypočtené ceně ukládá i revizi, podle které se počítala, takže dvě kapitoly stejného příběhu mohou být oceněné podle jiných koeficientů.

## Zaokrouhlení a minimum

Spočítaná částka se vydělí deseti, zaokrouhlí, vynásobí zpět a sníží o jednu, takže **každá doporučená cena končí devítkou**. Zaokrouhluje se bankovně, na desítky, což se projeví jen na přesné polovině: ze 145 vyjde 139, ne 149. Nejnižší cena, kterou TalePort doporučí nebo přijme, je 9 EPS.

## Šest referenčních kapitol

Šest kapitol, které testy používají jako referenční vzorky, a cena, kterou jim kalkulačka dá. „Nejdelší“ je nejdelší průchod, „celkem“ je všechen obsah kapitoly.

| Nejdelší | Celkem | Uzly | Rozhodovací body | Obrázky | Namluvení | Média | Cena |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 92 min | 133 min | 470 | 110 | 87 | 73 % | vše AI, navíc 16 min videa | 159 EPS |
| 64 min | 224 min | 4 499 | 429 | 2 250 | 100 % | vše lidské | 199 EPS |
| 59 min | 172 min | 116 | 44 | 100 | 100 % | AI | 129 EPS |
| 54 min | 94 min | 153 | 23 | 5 | žádné | jen AI obrázky | 69 EPS |
| 54 min | 78 min | 105 | 22 | 65 | 94 % | AI | 99 EPS |
| 25 min | 59 min | 125 | 67 | 32 | 93 % | AI | 59 EPS |

U druhého řádku se vyplatí zastavit. Ta kapitola má zdaleka nejvíc obsahu ze všech šesti a k tomu hodinu plně namluvených, člověkem vytvořených médií, a přesto skončí na 199, protože její nejdelší průchod trvá jen 64 minut. Pokud je doporučená cena výrazně nižší, než jste čekali, podívejte se nejdřív na nejdelší cestu. Je to ten jediný vstup, kterým se násobí celý výpočet.

## Jak cenou pohnout

Krok Cena nabízí pole a posuvník mezi dolní a horní hranicí:

- Dolní hranice: polovina doporučené ceny zaokrouhlená na celé jednotky, pak udržená mezi 9 EPS a horní hranicí.
- Horní hranice: 299 EPS, pevně, ať byla doporučená cena jakákoli.

Vedle jsou tři předvolby. **50 %** a **Doporučeno** dělají to, co říkají, a zašednou, jakmile jejich hodnota padne mimo váš rozsah. **Max** skočí na 299, ne na násobek doporučené ceny, takže u skromnější kapitoly je to pořádný skok nahoru, a na rozdíl od zbylých dvou mimo rozsah nepadne nikdy.

Pole i posuvník se posouvají po jedné a cokoli zadáte, to se zaokrouhlí a vrátí zpět do rozsahu. Cena mimo rozsah se při odeslání odmítne, protože server si hranice spočítá znovu ze svých vlastních čísel. Čtenáři se účtuje přesně to celé číslo, které jste odeslali.

![krok Cena publikačního dialogu u placené kapitoly: přepínač zpoplatnění, doporučená cena, posuvník mezi dolní a horní hranicí a tři předvolby](/screens/cs/monetization/pricing-step.png)

## Cenu může změnit recenzent

Recenzent může během recenze nastavit jinou cenu. Jediné, co ho omezuje, je minimum 9 EPS; strop 299 se na jeho zásah nevztahuje.

Zrušení přepsání vaši cenu nevrátí. Nastaví místo ní vypočtenou doporučenou částku. Vaše číslo se vrátí, až kapitolu odešlete znovu, protože novým odesláním se přepsání zruší.

## Související

- [Obsah zdarma a placený obsah](/cs/monetization/free-and-paid-content/)
- [Kredity](/cs/monetization/credits/)
- [Autorské honoráře](/cs/monetization/royalties/)
