---
title: Založení příběhu
description: Od prázdné knihovny k první hratelné kapitole.
helpKey: getting-started.creating-a-story
status: published
sidebar:
  order: 1
---

**Příběh** zastřešuje všechno, co vydáváte pod jedním autorským profilem: název, obálku, žánr, štítky, věkové doporučení, postavy, proměnné, globální události a nejméně jednu **kapitolu**. Čtenáři kupují a čtou kapitoly, příběh sám drží obal a to, co mají kapitoly společné. Hororový příběh *Maják na Vardø* vznikne jako jediný příběh se dvěma postavami, proměnnou `Důvěra` nastavenou na 0, obálkou s majákem za soumraku a jednou kapitolou, která začíná uzlem Příjezd a o čtyři uzly dál nabídne volbu, jestli vejít dovnitř.

## Založení příběhu

Otevřete **Moje příběhy** a zvolte **Vytvořit příběh**. Dialog **Vytvořit nový Epos** má čtyři kroky:

1. **Základy**: název s počítadlem na 200 znaků a popis ve formátovaném textu s limitem 1000 znaků.
2. **Obálka**: titulní obrázek. Když ještě žádný nemáte, krok přeskočte.
3. **Podrobnosti**: žánr a štítky. Žánr je povinný.
4. **Náhled**: karta obálky s názvem a žánrem, pod ní přehled zadaných údajů a tlačítko **Vytvořit Epos**.

Povinné jsou jen dvě věci: název a žánr. Dokud jedna z nich chybí, tlačítko **Vytvořit Epos** zůstává neaktivní a dál než za nevyplněný krok se nedostanete. Cokoli z dialogu změníte i později, na stránce s detailem příběhu nebo přes **Nastavení** v hlavičce editoru.

![dialog Vytvořit nový Epos v kroku Základy, se čtyřmi názvy kroků po straně a vyplněným názvem příběhu](/screens/cs/getting-started/create-story-dialog.png)

Obálka se ještě před nahráním kontroluje proti poměru 9:16 na výšku, s tolerancí 5 % na obě strany. Rozměr 1080 × 1920 odpovídá přesně, 1000 × 1800 projde, snímek 1920 × 1080 se odmítne s hlášením, že obrázek má rozměry 1920x1080 a je potřeba svislý obrázek v poměru 9:16. Nápověda pod polem pro nahrání přitom tvrdí „Doporučeno: poměr stran 16:9, minimálně 1280×720px“. Neplatí to: poměr je obrácený a minimální rozměry nekontroluje nic. Co projde, se překóduje a zmenší, aby se vešlo do 1080 × 1920; soubory nad 5 MB server odmítne.

Nový příběh vzniká s jednou prázdnou kapitolou **Kapitola 1** a TalePort vás pustí přímo do editoru.

## Co dělat dál

1. Načrtněte tvar první kapitoly ještě před psaním textu. I tři uzly a dvě volby ukážou, jestli nápad funguje.
2. Přidejte proměnné, o kterých už teď víte, že je budete potřebovat: viz [Proměnné](/cs/story-editor/variables/). Roubovat je do hotového grafu stojí mnohem víc práce.
3. Přidejte postavy: viz [Postavy a dialogy](/cs/story-editor/characters-and-dialogue/).
4. Pište a pak testujte: viz [Testování a přispěvatelé](/cs/getting-started/testing-and-contributors/).

## Co se zamkne po vydání kapitoly

Jakmile je venku jedna kapitola, část příběhu ztuhne, aby se čtenářům, kteří ji mají rozečtenou, nehnula půda pod nohama.

- Postavy a proměnné, které vydaná kapitola používá; záběr je širší, než se zdá. Postava se zamkne, jakmile v kapitole promluví. Proměnná se zamkne, když na ni ukazuje komponenta události nebo podmínka přechodu, když patří ke statistikám zamčené postavy, nebo když ji cílí libovolná globální událost. Zamknou se i všechny globální události příběhu, protože ty platí v celém příběhu, ne jen v jednom uzlu.
- Pořadí kapitol, které už jsou rozjeté. Vydané kapitoly, kapitoly v kontrole a kapitoly v testování jsou uzamčené, drží se ve stávajícím pořadí před vašimi koncepty a přesouvat jde jen koncepty.
- Věkové doporučení lze zvýšit, ne snížit.
- Obsahové štítky lze přidat, odebrat už ne.

Zámky se přepočítávají z toho, co vydané kapitoly používají, takže povolí, jakmile kapitolu stáhnete z kontroly, zrušíte její publikaci nebo ji smažete. Novou proměnnou, postavu ani globální událost nic neblokuje a dokud jsou všechny kapitoly koncept, nezamyká se nic.

## Související

- [Struktura příběhu a kapitoly](/cs/getting-started/story-structure-and-chapters/)
- [Žánry a štítky](/cs/publishing/genres-and-tags/)
- [Životní cyklus příběhu](/cs/getting-started/story-lifecycle/)
