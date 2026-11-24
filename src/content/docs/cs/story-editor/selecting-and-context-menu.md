---
title: Výběr uzlů a nabídka pravého tlačítka
description: Jak pracovat s více uzly najednou a co nabízí nabídka pravého tlačítka.
helpKey: editor.selection
status: published
sidebar:
  order: 18
---
Práci ve velkém grafu urychlí dvě věci: výběr více uzlů najednou a nabídka pravého tlačítka.

## Výběr více uzlů

Táhněte rámeček přes prázdné plátno. Vybere se každý uzel, kterého se rámeček dotkne, a vybraný uzel dostane přerušovaný oranžový obrys. Výběr přesunete tažením jednoho z uzlů, ostatní se pohnou s ním.

![rámeček přetažený přes prázdné plátno, tři uzly uvnitř nebo na jeho okraji mají přerušovaný oranžový obrys](/screens/cs/story-editor/multi-select.png)

S výběrem můžete:

- přesouvat všechny uzly společně,
- seskupit je do jednoho sbalitelného uzlu. Více v části [Skupiny](/cs/story-editor/groups/),
- zkopírovat je pomocí Ctrl/⌘+C a vložit pomocí Ctrl/⌘+V,
- odebrat je klávesou Delete nebo Backspace.

Kopírování nebo mazání víc než 20 uzlů najednou editor odmítne: „Příliš mnoho uzlů“. Seskupení výběru takový limit nemá. Více v části [Kopírování uzlů](/cs/story-editor/story-graph/#copying-nodes).

## Nabídka pravého tlačítka

Klikněte pravým tlačítkem na uzel, spojení nebo prázdné plátno. Co uvidíte, závisí na tom, na co jste klikli.

### Na uzlu

![nabídka pravého tlačítka na uzlu: Přidat poznámku, Vložit komponentu, Vložit výstup, Zpět, Znovu, Seskupit výběr, Kopírovat, Vložit a Odebrat uzel](/screens/cs/story-editor/context-menu.png)

| Položka | Co dělá |
| --- | --- |
| **Přidat poznámku** | Připojí k uzlu poznámku. |
| Typy uzlů | Vytvoří nový uzel připojený k prvnímu volnému výstupu tohoto uzlu. Chybí, když uzel nemá volný výstup. |
| **Vložit komponentu** | Přidá uzlu komponentu. Komponenta, kterou uzel už má, nebo která se s ním nedá kombinovat, je zašedlá. Více v části [Typy uzlů a komponent](/cs/story-editor/node-types/#component-rules). |
| **Vložit výstup** / **Upravit výstup** | Změní přechod uzlu. Položka se jmenuje **Upravit výstup**, když má uzel jiný než jednoduchý přechod. Více v části [Výměna přechodu](/cs/story-editor/transitions-and-choices/#swapping). |
| **Zpět**, **Znovu** | Krok zpět nebo vpřed. Zašedlé, když není co vracet. |
| **Seskupit výběr** | Změní vybrané uzly na skupinu. |
| **Kopírovat**, **Vložit** | Zkopíruje výběr, vloží zkopírované. |
| **Odebrat uzel** | Smaže uzel. |

U uzlu skupiny má nabídka navíc **Otevřít skupinu** a **Zrušit skupinu**. Uvnitř skupiny má **Přejít na nadřazený graf**.

### Na více uzlech

Klikněte pravým tlačítkem uvnitř výběru a nabídka působí na celý výběr: **Zpět**, **Znovu**, **Seskupit výběr**, **Kopírovat**, **Vložit** a **Odebrat**.

### Na spojení

**Odebrat spojení** spojení smaže, porty uzlů zůstanou. Je tam i **Zpět** a **Znovu**.

### Na prázdném plátně

Nabídka uvádí stejné typy uzlů jako sekce **Předvolby** a vytvoří uzel tam, kam jste klikli. **Vložit** tam vloží zkopírované uzly.

### Ve vydané kapitole

Dokud je kapitola vydaná, struktura jejího grafu je zamčená. Nabídka pak nabízí jen **Přidat poznámku**, **Kopírovat** a **Otevřít skupinu** nebo **Přejít na nadřazený graf**. Více v části [Graf příběhu](/cs/story-editor/story-graph/).

## Související

- [Graf příběhu](/cs/story-editor/story-graph/)
- [Skupiny](/cs/story-editor/groups/)
- [Typy uzlů a komponent](/cs/story-editor/node-types/)
