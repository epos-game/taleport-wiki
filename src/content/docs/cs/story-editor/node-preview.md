---
title: Náhled uzlu
description: Jak si přehrát jeden uzel tak, jak ho uvidí čtenář, a co k tomu nabízí ladění.
helpKey: editor.node-preview
status: published
sidebar:
  order: 14
---
Karta **Náhled** v pravém panelu přehraje vybraný uzel v rámečku ve tvaru telefonu. Ukáže pozadí, přehraje hudbu a nabídne dialog a volby, které by dostal čtenář. Náhled platí pro jeden uzel, ne pro celou kapitolu. Nic z toho, co tu uděláte, se neuloží.

Karta stále ukazuje upozornění *Přibližný náhled. Finální vykreslení v EPOS se může lišit.*

Bez vybraného uzlu je karta prázdná. U uzlu skupiny nabídne **Otevřít skupinu**, protože skupina nemá vlastní obsah.

![karta Náhled: upozornění na přibližnost, tlačítka Předchozí a Pokračovat s počítadlem stránek, uzel přehrávaný v rámu telefonu se jménem mluvčího přes pozadí a pod tím začátek panelu Proměnné (ladění)](/screens/cs/story-editor/node-preview.png)

## Procházení grafu

Tlačítka **Předchozí** a **Pokračovat** vás posouvají po uzlech.

- Když do uzlu vede víc spojení, **Předchozí** je vypíše.
- Když z uzlu vede víc výstupů, **Pokračovat** je vypíše.
- Když má uzel text na víc stránek, ukáže se vedle tlačítka **Pokračovat** počítadlo. Náhled nejdřív prolistuje stránky textu.

## Zvuk

Panel **Zvuk** vypisuje hudbu a okolní zvuk. Má tlačítka **Přehrát vše** a **Pozastavit vše**.

Kanál zděděný z dřívějšího uzlu je označený jako **zděděno**. Uzel, který dědění zastavuje, to napíše: *Dědění pozadí zablokováno*, *Dědění hudby zablokováno*, *Dědění okolního zvuku zablokováno*.

## Proměnné, kostka a větvení {#debug}

Panel **Proměnné (ladění)** vypíše každou proměnnou s její hodnotou. Zadejte jinou hodnotu a dostanete se do větve, aniž byste museli přehrát uzly, které ji nastavují. Zadaná hodnota platí jen v tomto náhledu.

Jakmile něco změníte, objeví se v hlavičce panelu tlačítko **Obnovit všechny hodnoty**. Zahodí všechny zadané hodnoty i ručně nastavený hod kostkou na tomto uzlu.

- **Ověření dovednosti** ukáže celý výpočet: vlastnost, kostku i cílovou hodnotu. Políčko kostky nastavíte ručně, nebo hodíte přes **Hodit kostkou**.
- **Switch** ukáže **Vyhodnocení přechodu Switch**, tedy kterou větev by zvolil a proč.

Číslo v každém řádku je hodnota, se kterou čtenář na uzel přichází, před událostmi tohoto uzlu. Právě toto číslo přepisujete. Když uzel proměnnou mění, objeví se vedle ní štítek s hodnotou, se kterou čtenář odchází. Jeho popisek je **Hodnota po událostech tohoto uzlu**.

Ověření dovednosti čte hodnotu před událostmi. Chcete-li ověřit vlastnost, kterou už zvedla **Událost**, dejte tuto událost na dřívější uzel. Událost na stejném uzlu se do hodu nezapočítá.

## Cesty, kterými by čtenář nešel

Náhled označí, co by čtenář udělat nesměl, a po potvrzení vás tam přesto pustí.

- Volba s nesplněnými podmínkami hlásí *Podmínky nesplněny. Kliknutím obejít pro ladění*.
- Výsledek ověření, ke kterému by při aktuálním hodu nedošlo, hlásí *Při tomto hodu by nenastalo*.
- Větev přechodu Switch, kterou by aktuální proměnné nezvolily, hlásí *S aktuálními proměnnými by se neprovedlo*.
- Když odejdete z uzlu, který spouští globální událost, náhled upozorní, že skuteční čtenáři se k dalším krokům nedostanou.

## Co kontroluje validace

Náhled přehrává jeden uzel z hodnot, které mu zadáte. Chyby, které se projeví až v celé kapitole, hlídá validace a skutečný testovací průchod:

- proměnná, která se nikdy nenastaví,
- kontrolní bod, přes který se nikdy neprojde,
- uzel Konec, ke kterému nic nevede.

## Související

- [Graf příběhu](/cs/story-editor/story-graph/)
- [Proměnné](/cs/story-editor/variables/)
- [Ověření dovednosti](/cs/story-editor/skill-checks/)
- [Podmínky](/cs/story-editor/conditions/)
- [Testování a přispěvatelé](/cs/getting-started/testing-and-contributors/)
