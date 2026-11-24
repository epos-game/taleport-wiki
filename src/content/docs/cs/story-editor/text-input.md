---
title: Textový vstup
description: Jak nechat čtenáře napsat odpověď a poslat ho dál podle toho, co napsal.
helpKey: editor.text-input
status: published
sidebar:
  order: 17
---
**Textový vstup** je přechod, u kterého čtenář místo výběru možnosti napíše odpověď. Vy určíte odpovědi, které přijmete. Každý seznam je jeden **výstup** a odpověď, která mu odpovídá, pošle čtenáře tímto výstupem.

Hodí se na heslo, hádanku, jméno, které si čtenář musí zapamatovat, nebo kód, který musí v příběhu najít.

## Vytvoření uzlu s textovým vstupem

Přetáhněte **Textový vstup** ze sekce **Předvolby** v paletě na plátno. Přechod existujícího uzlu změníte pravým tlačítkem a volbou **Vložit výstup** nebo **Upravit výstup**. Uzel i komponenty zůstanou. Více v části [Výměna přechodu](/cs/story-editor/transitions-and-choices/#swapping).

Nový uzel začíná s výzvou „Napiš svou odpověď“, reakcí „Nic se nestalo. Zkus to znovu.“ a jedním výstupem bez odpovědí. Před publikováním přidejte odpověď.

![uzel s textovým vstupem na plátně se dvěma výstupy pojmenovanými Output 1 a Output 2](/screens/cs/story-editor/text-input-node.png)

Každý výstup je port na uzlu. Připojte všechny, jako u každého jiného přechodu.

## Nastavení

Karta **Textový vstup** v pravém panelu má dvě části, **Otázku** a **Odpovědi**.

![karta Textový vstup: část Otázka s výzvou, pokusy, reakcí na špatnou odpověď a možnostmi porovnávání a část Odpovědi s tlačítkem Přidat výstup, otevřeným výstupem s přijímanými odpověďmi a druhým výstupem pod ním](/screens/cs/story-editor/text-input-panel.png)

### Otázka

- **Výzva** je text zobrazený nad polem, do kterého čtenář píše. Má nejvýše 200 znaků.
- **Pokusy** jsou **Neomezené** nebo **Omezené**. Více v části [Pokusy](#attempts).
- **Reakce na špatnou odpověď** je zpráva, která se ukáže, když odpověď nic neodpovídá. Má nejvýše 1000 znaků.
- **Porovnávání** určuje, jak přesně musí odpověď čtenáře odpovídat té vaší. Více v části [Jak se odpovědi porovnávají](#matching).

### Odpovědi

Každý výstup má volitelný **název** (nejvýše 200 znaků, výchozí je „Výstup 1“) a seznam **přijímaných odpovědí**. Odpověď napište a stiskněte **Enter**, křížkem na štítku ji odeberete. Výstup má nejvýše 50 odpovědí, každá nejvýše 200 znaků.

Výstupy se kontrolují **shora dolů a vyhrává první dostupný výstup, který odpověď přijímá**. Pořadí změníte přetažením výstupu. Další výstup přidáte tlačítkem **Přidat výstup**.

Na jeden výstup dejte víc podob, které znamenají totéž: `banán`, `banány`, `ten banán`.

## Jak se odpovědi porovnávají {#matching}

Před porovnáním aplikace upraví odpověď čtenáře i vaše přijímané odpovědi:

- Na velkých a malých písmenech nezáleží.
- Přebytečné mezery se sloučí a mezery na okrajích se odstraní.
- **Pouze alfanumerické znaky** (výchozí zapnuto) ignoruje interpunkci, takže „Banán!“ odpovídá `banán`.
- **Ignorovat diakritiku** (výchozí vypnuto) bere „příšera“ a „prisera“ jako totéž. Zapněte ji, když čtenáři nemusí psát háčky a čárky.

Prázdná odpověď se nepočítá. Nespotřebuje pokus a neukáže reakci.

## Pokusy {#attempts}

- **Neomezené:** čtenář zkouší, kolikrát chce. Po každé špatné odpovědi uvidí reakci na špatnou odpověď. Výstup **Výchozí** neexistuje, takže čtenář zůstane na uzlu, dokud nenapíše něco, co přijmete.
- **Omezené:** nastavíte počet pokusů od 1 do 10. Objeví se výstup **Výchozí**. Když je poslední pokus špatný, čtenář odejde výstupem **Výchozí** a reakci neuvidí. Připojte ho na cestu pro čtenáře, který odpověď nenašel.

U omezených pokusů se reakce zobrazí „po špatné odpovědi, dokud zbývají pokusy“.

## Podmínky na výstupu

Tlačítkem **Pokročilé** pod výstupem mu přidáte požadavky. Výstup s požadavky je dostupný, jen dokud jsou splněné. Při více požadavcích volíte, jestli musí platit **všechny**, nebo **kterýkoli**. Více v části [Podmínky](/cs/story-editor/conditions/).

Zámek s číslem vpravo u výstupu ukazuje, kolik má požadavků. Nedostupný výstup nikdy neodpovídá a špatná odpověď na něj se počítá jako neúspěšný pokus.

## Co editor kontroluje

- Textový vstup potřebuje aspoň jeden výstup a každý výstup odpověď, která po úpravě není prázdná. Jsou to chyby a blokují publikování: „Uzel s textovým vstupem potřebuje alespoň jeden výstup.“ a „Každý výstup textového vstupu potřebuje alespoň jednu přijímanou odpověď.“
- **Omezený** počet pokusů musí být mezi 1 a 10.
- Odpověď, kterou už přijímá výstup výš, nikdy nebude odpovídat níž. Editor napíše „Tyto odpovědi už přijímá výstup výše, takže zde nikdy nebudou odpovídat“ a vypíše je.
- Při neomezených pokusech a požadavcích na každém výstupu nemá čtenář, který žádný nesplní, jak odejít. Editor varuje. Omezte pokusy, nebo přidejte výstup bez požadavků.
- Nepřipojený výstup je chyba jako u každého přechodu.

## Vyzkoušení

Záložka **Náhled** ukáže výzvu a pole pro psaní. Ukáže, kolik zbývá pokusů a co jste napsali. Vyzkoušejte každou přijímanou odpověď i špatnou odpověď. U omezených pokusů je navíc všechny vyčerpejte. Náhled vám řekne, když výstup ještě není propojený nebo nemá odpovědi. Více v části [Náhled uzlu](/cs/story-editor/node-preview/).

## Rady

- V textu uzlu řekněte, jakou odpověď chcete: slovo, číslo nebo jméno. Čtenář, který nezná formát, uvízne.
- Přijměte zjevné varianty: jednotné a množné číslo, se slovem „ten“ i bez něj, číslo číslicí i slovem.
- Nenechte jedno uhádnuté slovo blokovat celou kapitolu. Použijte omezené pokusy s cestou **Výchozí**, nebo dejte čtenáři možnost najít odpověď v příběhu.

## Související

- [Typy uzlů](/cs/story-editor/node-types/)
- [Přechody a volby](/cs/story-editor/transitions-and-choices/)
- [Podmínky](/cs/story-editor/conditions/)
- [Náhled uzlu](/cs/story-editor/node-preview/)
