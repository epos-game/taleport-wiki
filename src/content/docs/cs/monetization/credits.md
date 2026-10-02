---
title: Kredity
description: EPS, měna, za kterou si čtenáři kupují kapitoly.
helpKey: monetization.credits
status: published
sidebar:
  order: 4
---

EPS je měna v aplikaci: čtenáři si ji kupují za skutečné peníze a utrácejí ji za odemčení kapitol. V EPS nastavujete i každou cenu a 1 EPS je 1 Kč, tedy asi 0,04 €. Mezi čtenářem a platební obrazovkou stojí peněženka, takže kdo si dobil 500 kreditů a právě dočetl poslední uzel vaší první kapitoly, odemkne druhou kapitolu za 129 EPS na místě a zůstane mu 371 kreditů.

## Proč kredity existují

Čtenář zaplatí jednou a kapitoly pak kupuje ze zůstatku, bez platby u každé z nich. Ten zůstatek si TalePort nevede sám. Drží ho peněženka platební platformy a aplikace si ho tam přečte, místo aby si udržovala vlastní kopii.

## Odkud se kredity u čtenáře berou

- Nákup v aplikaci přes Apple nebo Google.
- Platba kartou přes Stripe.
- Kód k uplatnění, koupený na webu a zadaný v aplikaci. Platí jednorázově, vyprší 90 dní po vydání a patří k objednávce, ze které vzešel, ne ke konkrétnímu člověku: kredity dostane ten, kdo ho zadá první.
- Kredity, které přidělí administrátor TalePortu.

Původ kreditů se vás týká, protože u každého dobití se zaznamená, kolik peněz za ním stojí. Z hrubé částky se odečte daň, provize obchodu a jednoprocentní poplatek RevenueCat. Co zbyde, je čistý výnos, ze kterého se váš výdělek odvozuje. **Platí to i pro kredity od administrátora.** Dialog Přidělit kredity nulovou hrubou částku nepřijme, daň předplňuje na 21 % a poplatek RevenueCat odečítá, takže i darované kredity peníze nesou a do vašeho výdělku se počítají. Bez peněz je jediná věc: interní srovnávací dávka, kterou si TalePort zapíše, když záznam o dobití chybí. Její částka je nula, takže se do výdělku nikdy nedostane. Viz [Autorské honoráře](/cs/monetization/royalties/).

## Kredity se utrácejí od nejstarších

Kredity čtenáře nejsou jeden společný balík. Každé dobití se vede zvlášť, spolu s penězi, které za něj čtenář skutečně zaplatil, a měnou, ve které platil. Nákup vyčerpá nejstarší dobití a pak přejde na další, takže jeden prodej vaší kapitoly může sáhnout do dvou i tří dobití a každé z nich přidá svůj díl čistého výnosu.

Proto pro vás kredit nemá pevnou hodnotu. Na straně čtenáře pevná je: 1 EPS je 1 Kč. Kolik z toho dojde TalePortu, závisí na tom, kde si čtenář dobíjel, jaká daň se uplatnila a kolik si vzal obchod. Když všechno přišlo v jedné měně a příběh nějaké kredity vydělal, statistiky přidají řádek **Průměrná hodnota kreditu** a výsledek ukážou.

## Co stojí nákup

Kapitola stojí svou cenu v kreditech, zaokrouhlenou nahoru na celý kredit. Konkrétní kapitolu si čtenář koupí jednou a pak ji má v knihovně. Výjimkou je moderace: skrytí příběhu odebere přístup ke stažení všem kromě recenzentů a administrátorů TalePortu, tedy i čtenářům, kteří už kapitolu vlastní. Když autor zruší účet, příběh se jen stáhne z nabídky a vlastníkům přístup zůstane.

Kapitoly zdarma nestojí nic a do knihovny se přidají zcela bez nákupu.

Pokud zůstatek nestačí, neúčtuje se nic. Aplikace oznámí, kolik kreditů kapitola potřebuje a kolik jich čtenář má, a nákup odloží, aby se po dobití dal zkusit znovu.

## Související

- [Ceny](/cs/monetization/pricing/)
- [Autorské honoráře](/cs/monetization/royalties/)
- [Statistiky příběhu](/cs/monetization/statistics/)
