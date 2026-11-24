---
title: Hledání v grafu
description: Jak najít uzel podle čísla, názvu nebo obsahu.
helpKey: editor.search
status: published
sidebar:
  order: 16
---
V dlouhé kapitole uzel posouváním grafu nenajdete. **Hledání** ho najde podle čísla, názvu nebo toho, co říká, a odvede vás rovnou k němu.

## Otevření hledání

Stiskněte **Ctrl+F** (na Macu **⌘+F**), když je graf aktivní, nebo klikněte na lupu v horní liště. Dalším stiskem zkratky hledání zavřete. Vyhledávací lišta se vznáší nad grafem. Když vám něco zakrývá, přetáhněte ji za úchyt na levém okraji, editor si její polohu pamatuje.

Lištu zavřete také křížkem **×**, klávesou **Esc** nebo kliknutím mimo ni.

![vyhledávací lišta nad grafem s napsaným slovem matka; pod ní seznam uzlů, u každého číslo, úryvek odpovídajícího textu nebo dialogu a vpravo typ přechodu](/screens/cs/story-editor/graph-search.png)

## Co se prohledává

Hledání bere v úvahu:

- **číslo uzlu**, například `2889`,
- **název uzlu**,
- **text** uzlu,
- každou **repliku dialogu** na uzlu,
- každou **volbu** na uzlu s volbou.

Nerozlišuje velká a malá písmena ani diakritiku, takže `matka` najde „Matka“ a `zeme` najde „země“.

Když napíšete víc slov, uzel musí obsahovat všechna. Mohou být na různých místech uzlu, třeba jedno v názvu a druhé v replice dialogu.

Bez zadaného textu seznam ukazuje uzly podle čísel.

## Čtení výsledků

U každého výsledku vidíte číslo nebo název uzlu, vpravo typ přechodu a, pokud se shoda našla v obsahu, krátký úryvek s druhem obsahu před ním: **Text**, **Dialog** nebo **Volba**.

Nejlepší shody jsou nahoře:

1. Přesné číslo.
2. Název, který se rovná zadanému textu nebo jím začíná.
3. Název, který ho obsahuje.
4. Obsah, kde shoda na začátku slova stojí výš než shoda uvnitř slova.

Seznam má 20 výsledků. Když jich je víc, napíše *„Zobrazeno prvních 20 z 134“*. Doplňte další slovo a seznam zúžíte.

## Přechod na uzel

Seznamem se pohybujete klávesami **↑** a **↓** a potvrdíte klávesou **Enter**, nebo na výsledek kliknete. Uzel se vybere a graf se přesune k němu. Lišta zůstane otevřená, takže můžete hned přejít na další výsledek.

## Omezení

- Hledání platí jen pro graf, který máte otevřený. Dovnitř skupin nevidí. Skupinu otevřete a hledejte v ní. Více v části [Skupiny](/cs/story-editor/groups/).
- Prohledává obsah samotného příběhu, ne poznámky recenzentů ani jména postav a proměnných.
- Hledání sleduje graf, jak ho upravujete. Uzel, který jste právě změnili, se objeví s novým textem.

## Rady

- Zpráva z validace označí uzel číslem. Zadejte číslo a skočíte na něj. Více v části [Požadavky na vydání kapitoly](/cs/publishing/publishing-requirements/).
- Hledejte větu, kterou si z příběhu pamatujete, a najdete uzel, který ji drží. Je to rychlejší než procházet větve.
- Důležité uzly pojmenujte. Název stojí nad obsahem, takže pojmenovaný uzel je v seznamu první.

## Související

- [Graf příběhu](/cs/story-editor/story-graph/)
- [Skupiny](/cs/story-editor/groups/)
