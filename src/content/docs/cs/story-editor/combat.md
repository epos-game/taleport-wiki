---
title: Souboje
description: Jak postavit souboj z dílů, které TalePort už má.
helpKey: editor.combat
status: published
sidebar:
  order: 9
---

Souboj složíte z dílů, které v editoru už jsou:

- vlastnost, která zastupuje zdraví
- ověření dovednosti na každou výměnu
- komponenta **Událost**, která po neúspěchu zdraví ubere
- globální událost, která zachytí, že zdraví došlo

## Co budete potřebovat

1. **Vlastnost pro zdraví.** Založte ji v záložce **Vlastnosti** s typem **Číslo**. Ověření dovednosti umí testovat jen vlastnost a událost umí ubírat jen z čísla. **Min** a **Max** jsou nepovinné. Když je nastavíte, **Výchozí hodnota** musí ležet mezi nimi.
2. **[Ověření dovednosti](/cs/story-editor/skill-checks/) na každou výměnu**, které tuto vlastnost testuje. **Modifikátor kostky** je **Žádný**, **k10**, **k6** nebo **k20**. Hod se k vlastnosti přičte před porovnáním.
3. **Komponentu Událost na uzlu, kam vede každý výstup Neúspěch.** Použijte operaci **odečíst** a zadejte částku. Události se použijí, když čtenář na uzel dorazí, takže cena patří na větev, ne na ověření. Podrobnosti najdete na stránce [Proměnné](/cs/story-editor/variables/).
4. **Jednu [globální událost](/cs/story-editor/global-events/) nad vlastností pro zdraví.** Nastavte **Operátor** na **≤**, **Hodnotu** na 0 a **Po události** na **Vrátit se na poslední kontrolní bod**. Spustí se na uzlu, kde podmínka přejde z nesplněné na splněnou, tedy na uzlu s odečtením.
5. **[Kontrolní bod](/cs/story-editor/checkpoints/) na uzlu před začátkem souboje.**

Propojte každý výstup každého ověření. Nepřipojený výstupní port je chyba validace, i u větve **Neúspěch**, která se vrací na předchozí výměnu.

## Umístění kontrolního bodu

Kapitola s globální událostí **Vrátit se na poslední kontrolní bod** a bez kontrolního bodu neprojde validací a nejde publikovat: „Globální událost používá chování ‚Vrátit se na poslední kontrolní bod‘, ale kapitola nemá žádný uzel s kontrolním bodem.“

:::caution[Kontrolní bod mimo skupinu]
Pravidlo se dívá jen do grafu kapitoly, takže kontrolní bod uvnitř [skupiny](/cs/story-editor/groups/) se nepočítá. Když souboj sbalíte do skupiny, nechte kontrolní bod venku, na plátně kapitoly.
:::

Stejná kontrola běží nad grafem, který máte otevřený, tedy i nad grafem skupiny. Rozhoduje výsledek v grafu kapitoly.

## Zdraví pod nulou

Minimum a maximum za běhu příběhu neplatí. Odečtete-li 3 od zdraví 1, vyjde −2. Souboji to nevadí, protože **≤** 0 platí tak či tak.

Podmínka na přesné číslo ale selže. Volba, která vyžaduje zdraví **=** 0, se čtenáři, který přestřelil, nikdy neotevře. Použijte i tam **≤**.

Obě hranice musí ležet v rozsahu vlastnosti. Editor je kontroluje v různých chvílích:

- Cílové číslo ověření dovednosti: když napíšete hodnotu mimo **Min** a **Max**, editor ji odmítne a vrátí poslední platnou hodnotu.
- **Hodnotu** globální události editor kontroluje až při uložení. Uložení odmítne, vrátí poslední platnou hodnotu a upozorní, že krok nešlo použít.

Aby fungovala událost na zdraví **≤** 0, musí být **Min** té vlastnosti 0 nebo nižší.

## Vyzkoušení souboje

V záložce **Náhled** můžete větev **Neúspěch** vyzkoušet, aniž byste museli přehrávat celou kapitolu:

- V části **Proměnné (ladění)** nastavte zdraví na 1, aby další neúspěch spadl pod nulu.
- **Hodit kostkou** hod zopakuje, takže u jednoho ověření vyzkoušíte oba výsledky.

## Víc než hod

Výměna nemusí být jen hod. Může nabídnout i rozhodnutí, například tlačit útok, nebo ustoupit.

## Související

- [Ověření dovednosti](/cs/story-editor/skill-checks/)
- [Globální události](/cs/story-editor/global-events/)
- [Kontrolní body](/cs/story-editor/checkpoints/)
- [Proměnné](/cs/story-editor/variables/)
