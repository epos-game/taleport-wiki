---
title: Zásady a pravidla pro příběhy
description: Chyby a upozornění editoru a kritéria, podle kterých kapitolu posuzuje recenzent.
helpKey: publishing.story-guidelines
status: published
sidebar:
  order: 2
---

[Pravidla obsahu](/cs/publishing/content-rules/) říkají, co je povolené. Tahle stránka říká, co musí být hotové, než kapitolu odešlete ke kontrole.

Problémy jsou tří druhů:

| Druh | Co se stane | Příklad |
| --- | --- | --- |
| Chyba | Editor odeslání zablokuje | Možnost volby bez textu |
| Upozornění | Editor na to upozorní, ale odeslat nechá | Replika dialogu bez postavy |
| Kvalita | Posuzuje recenzent při čtení | Zapomenutý provizorní text |

## Chyby, které editor blokuje

Kapitolu s některou z těchto chyb odeslat nejde.

Každá chyba má v kontrolním seznamu kroku **Validace** vlastní řádek s názvem uzlu, na kterém je. Kliknutím na **Přejít na uzel** se k němu dostanete. Chyba, která se týká celého grafu, je jen řádek textu bez odkazu.

Tvar grafu:

- V grafu chybí uzel Začátek, nebo uzel Konec.
- Do uzlu Začátek vede propojení.
- Uzel má výstup, ke kterému nic není připojené.
- Uzel Začátek nebo Konec obsahuje komponenty obsahu. Oba mají zůstat prázdné.

Uzel, na který cílí [globální událost](/cs/story-editor/global-events/), se z kontroly nepřipojeného výstupu vynechává. Událost do něj skáče přímo, takže do něj žádné propojení nevede.

Další tři kontroly běží na grafu kapitoly. Uvnitř [skupiny](/cs/story-editor/groups/) se neprovádějí:

- Z uzlu Začátek není dosažitelný žádný uzel Konec.
- V grafu je víc než jeden uzel Začátek.
- Do uzlu Konec nevede žádné propojení.

Uvnitř skupiny editor kontroluje její začátek a konec. Uzel Začátek skupiny musí vést na něco uvnitř skupiny. Do jejího uzlu Konec musí něco uvnitř skupiny vést.

Uvnitř uzlu:

- Uzel Volba nemá žádnou možnost, nebo některá z možností nemá text.
- Uzel Switch nemá nastavenou ani jednu podmínku.
- Uzel s ověřením dovednosti nemá vybranou vlastnost.
- Na jednom uzlu jsou dvě komponenty, které spolu být nemohou:
  - text s dialogem
  - dvě komponenty stejného druhu
  - obrázkové pozadí s videopozadím
  - médium na některém kanálu vedle značky zastavení dědění téhož kanálu. Každý ze tří kanálů má vlastní značku zastavení. Hudba na pozadí vedle zastavení hudby je stejná chyba jako pozadí vedle zastavení pozadí.
- Filmová sekvence má přísnější pravidla. Vedle sebe snese jen kontrolní bod nebo značku zastavení dědění. Přechod uzlu musí zůstat **Jednoduchý přechod**, tedy bez Volby, Switche a ověření dovednosti. Při jiném přechodu editor ukáže *Filmovou sekvenci lze umístit pouze do uzlu s jednoduchým přechodem.*

Editor kontroluje globální události proti kapitole, ke které patří. Tyto tři chyby proto patří grafu, ne uzlu:

- událost míří na proměnnou, která už neexistuje
- událost vrací čtenáře na začátek kapitoly, která nemá uzel Začátek
- událost vrací čtenáře na poslední kontrolní bod, ale žádný v kapitole není

Dvě další kontroly se spustí až při odesílání:

- Aspoň jeden dosažitelný konec musí být označený jako **Konec kapitoly**.
- Kapitola musí mít dost obsahu, aby se z něj dala spočítat cena.

V seznamu jsou jako **Dosažitelný konec kapitoly** a **Graf příběhu obsahuje přehratelný obsah**. Ani jeden řádek nemá odkaz na uzel. Viz [Požadavky na vydání kapitoly](/cs/publishing/publishing-requirements/).

### Ke switchům

Switch musí mít aspoň jednu podmínku. Každý výstup z něj musí někam vést, včetně výstupu **Výchozí**. Ten vzniká spolu s uzlem a nedá se odebrat.

Podmínka bez požadavků se nesplní nikdy. To je jen upozornění.

## Upozornění editoru

Tato upozornění odeslání nezastaví. V kontrolním seznamu kroku **Validace** se neobjeví.

- Uzel není dosažitelný z uzlu Začátek. Uzly, na které cílí globální událost, jsou vyjmuté.
- Uzel nemá žádný obsah.
- Textová komponenta nemá text.
- Komponenta Dialog nemá žádnou repliku, nebo replika nemá přiřazenou postavu či text.
- Komponenta Událost nemá nastavenou žádnou událost.
- Podmínka switche nemá žádný požadavek, takže se nesplní nikdy.
- Pozadí, hudba na pozadí nebo okolní zvuk nejsou nastavené a nic se nedědí.
- Komponenta s filmovou sekvencí nemá video.
- Do vstupu skupiny nevede žádné propojení.
- Dvě globální události mají stejnou proměnnou, operátor i hodnotu.

## Posouzení recenzenta

Nic z následujícího editor nekontroluje. Recenzent může posuzovat pravidla, věkové doporučení, prohlášení o AI, práva k médiím i technické požadavky. Před schválením si může vyžádat změny ([CR-V.1](/cs/publishing/content-rules/#cr-v-1)).

### Dokončenost

Kapitola potřebuje začátek, prostřední část a konec. Volby, které končí na prázdném uzlu, jsou jen upozornění.

Provizorní obsah odstraňte sami, než kapitolu odešlete. Jde například o lorem ipsum, `TODO` zapomenuté v replice nebo dočasnou grafiku. Recenzent si ho všímá.

### Jazyk a podoba textu

Před odesláním text zkontrolujte. Nástroje na pravopis a gramatiku jsou podle [CR-III.1](/cs/publishing/content-rules/#cr-iii-1) povolené. Povolený je i překlad, pokud původní text napsal člověk.

Jméno postavy pište v celé kapitole stejně. Vyprávění patří do textových komponent, řeč do komponent Dialog. Text pište do odstavců.

### Interaktivita

Volby se mají lišit tím, kam vedou nebo co změní. Když si vedete [proměnnou](/cs/story-editor/variables/), má se podle ní někde dál něco rozhodovat. Čtenář, který neuspěje v [ověření dovednosti](/cs/story-editor/skill-checks/), musí mít možnost kapitolu dokončit.

### Média

Ke každému nahranému obrázku, skladbě, nahrávce a klipu musíte mít práva ([CR-II.1](/cs/publishing/content-rules/#cr-ii-1)). Pokud médium vygenerovala AI nebo s jeho vznikem pomohla, uveďte to v kroku **Klasifikace** ([CR-III.2](/cs/publishing/content-rules/#cr-iii-2)). Viz [Práce s médii](/cs/best-practices/media-usage/).

### Klasifikace

Věkové doporučení musí odpovídat nejextrémnějšímu obsahu kdekoli v příběhu, ne průměru ([CR-IV](/cs/publishing/content-rules/#cr-iv)). Obsahové štítky musí odpovídat obsahu příběhu.

Obojí patří k příběhu, ne ke kapitole, a od vydání první kapitoly se to zamyká. Doporučení můžete zvýšit, ale ne snížit. Štítek, který na příběhu jednou je, odebrat nejde. Viz [Obsahové štítky](/cs/publishing/content-labels/).

## Související

- [Pravidla obsahu](/cs/publishing/content-rules/)
- [Požadavky na vydání kapitoly](/cs/publishing/publishing-requirements/)
- [Příprava obsahu ke kontrole](/cs/best-practices/preparing-for-review/)
