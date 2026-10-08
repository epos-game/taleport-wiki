---
title: Příprava obsahu ke kontrole
description: Co zastaví odeslání a kvůli čemu recenzent kapitoly vrací.
helpKey: best-practices.preparing-for-review
status: published
sidebar:
  order: 5
---

Dialog publikování začíná krokem **Validace**. Tlačítko **Další** je neaktivní, dokud není v pořádku váš autorský profil, graf a předchozí kapitoly. Popisek na něm říká: „Před pokračováním vyřešte blokující problémy uvedené výše.“

## Kontrolní seznam

První dvě skupiny kontroluje TalePort. Zbytek je to, kvůli čemu recenzent kapitoly vrací. Dialog vypisuje nesplněné řádky pod **Vyžaduje pozornost** a splněné pod **Hotovo**.

**Řádky, které vás drží na kroku Validace**

- **Autorský profil:** zobrazované jméno, životopis a avatar. Všechny tři najdete v autorském profilu.
- **Žádné chyby v grafu:** Když graf chyby má, řádek se nahradí jedním řádkem za každou chybu. Každý začíná názvem uzlu a má tlačítko **Přejít na uzel**.
  - Výjimkou jsou skupiny. Jejich chyby se shrnou do jedné položky: *Tato skupina obsahuje obsah s chybami ve validaci.* Chyba uvnitř skupiny se vypíše bez názvu uzlu a **Přejít na uzel** na ni nepřeskočí, protože uzel není na úrovni plátna, kterou máte otevřenou. Skupinu otevřete a chyby si přečtěte uvnitř. Více najdete v [Testování](/cs/best-practices/testing/).
- **Dosažitelný konec kapitoly:** Aspoň jeden konec, ke kterému se čtenář dostane, má zapnutý přepínač **Konec kapitoly**.
  - Nový uzel Konec vzniká se zapnutým přepínačem.
  - Uzel Konec s vypnutým přepínačem uzavře aktuální tok a nabídne přehrát znovu. Kapitolu nedokončí a čtenáře nepřenese do další. Více najdete v [Koncových uzlech](/cs/story-editor/end-nodes/).
- **Graf příběhu obsahuje přehratelný obsah:** Nejdelší cesta kapitolou musí měřit víc než nula minut. Kapitola jen z hudby a pozadí naměří nulu. Více najdete v [Počítaném obsahu](/cs/monetization/requirements/#počítaný-obsah).
- **Předchozí kapitoly jsou připravené ke kontrole:** Každá kapitola s nižším číslem je už vydaná, nebo v kontrole.
  - Schválení je přísnější než odeslání. Recenzent tuto kapitolu neschválí, dokud není vydaná každá kapitola před ní.
  - Třetí kapitolu tak můžete odeslat, i když druhá je ještě u recenzenta, ale musí počkat, až druhá vyjde.

**Co můžete minout a vyřešit na kroku, kam to patří**

- **Fakturační a výplatní údaje:** Placenou kapitolu zdrží na kroku **Ceny** a při odeslání, na Validaci nikdy. Kapitola zdarma se odešle i bez nich.
- **Údaje o příběhu a kapitole:** Všechno je na kroku **Metadata**: název příběhu, popis příběhu, [žánr](/cs/publishing/genres-and-tags/) (právě jeden), aspoň jeden štítek a popis kapitoly. [Titulní obrázek](/cs/media/cover-image/) tam není políčko, ale dlaždice. Dokud ho nemáte, jmenuje se **Nastavit obálku** a kliknutím na ni otevřete editor miniatury.
- **Věkové doporučení a potvrzení lidského autorství:** Ani jedno není řádek kontrolního seznamu. Obojí je na kroku **Klasifikace**, který má vlastní závoru.
  - Tlačítko **Další** je neaktivní s popiskem „Před pokračováním vyberte věkové doporučení a potvrďte lidské autorství.“
  - Tlačítko **Publikovat** zůstane neaktivní, dokud něco z toho chybí.
  - Jednotlivé řádky a jejich tlačítka vypisují [Požadavky na vydání](/cs/publishing/publishing-requirements/).

**Varování, která ukáže jen editor**

- Varování zobrazuje panel **Problémy** v editoru, dialog publikování je nevypisuje. Kapitola, jejíž jediné problémy jsou varování, se odešle a vydá tak, jak je, a recenzent ji čte stejně jako čtenář. Jak se chyba liší od varování, popisují [Zásady pro příběhy](/cs/publishing/story-guidelines/).
- Zkontrolujte uzly, do kterých ze stejné vzdálenosti přicházejí dvě různá pozadí nebo dvě různé stopy. Kanál tam nenese nic. Více najdete v [Práci s médii](/cs/best-practices/media-usage/).

**Klasifikace, která jde jen jedním směrem**

:::caution[Klasifikace nejde snížit]
Jakmile je vydaná kterákoli kapitola, můžete věkové doporučení zvýšit, ale nikdy snížit. Štítek, který už na příběhu je, odebrat nelze.
:::

- Věkové doporučení odpovídá nejvyhrocenějšímu obsahu v příběhu, ne průměru.
- Obsahové štítky pokrývají všechno, co v příběhu je, včetně **Citlivých témat**.
- Klasifikace patří příběhu, ne první kapitole. Nižší možnosti jsou zašedlé s popiskem „Věkové doporučení nelze snížit, když je kapitola vydaná.“
- Po vydání může čtenář příběh také nahlásit jako **Nesprávně klasifikováno**. Více najdete ve [Věkovém doporučení](/cs/publishing/age-ratings/) a v [Obsahových štítcích](/cs/publishing/content-labels/).

**Prohlášení o AI**

- Prózu, dialogy ani texty voleb nenapsala generativní AI. Jde o pravidlo [CR-III.1](/cs/publishing/content-rules/#cr-iii-1).
- Možnosti pod **Obsah generovaný AI** odpovídají tomu, co jste vytvořili.
  - **AI obrázky**, **AI hudba** i **AI mluvené slovo** jsou zapnuté od začátku.
  - **AI video** je vypnuté a jeho dvě sazby jsou stejné.

:::caution[Krok s AI nepřeskakujte]
Když krok přeskočíte, prohlásíte ručně vytvořenou grafiku, hudbu a namluvení za práci AI a dostanete za ně nižší [sazbu](/cs/monetization/pricing/).
:::

- Prohlášení o použití AI je povinné ([CR-III.2](/cs/publishing/content-rules/#cr-iii-2)). Nepravdivé prohlášení je samo porušením pravidel ([CR-III.4](/cs/publishing/content-rules/#cr-iii-4)).

**Práva**

- Každý obrázek, stopa, nahrávka i klip je váš, nebo k němu máte licenci. Jde o pravidlo [CR-II.1](/cs/publishing/content-rules/#cr-ii-1).
- Licenci umíte doložit, když o to někdo požádá. Jde o pravidlo [CR-II.3](/cs/publishing/content-rules/#cr-ii-3).
- Nic tam není jen proto, že se to dalo najít na internetu. Jde o pravidlo [CR-II.2](/cs/publishing/content-rules/#cr-ii-2).

**Soubory médií**

- Seznam chybějících souborů, pokud se objeví, jste vyřešili. Více najdete v části [Co odeslání neblokuje](/cs/publishing/publishing-requirements/#co-odeslání-neblokuje).
- Provizorní grafika a zástupné audio jsou nahrazené. Testovací sestavení kontrolu chybějících médií nedělá, takže tuto kontrolu musíte udělat sami. Čistý testovací balíček nic nedokazuje.

**Kontrolní čtení**

- Pravopis a gramatika jsou zkontrolované.
- Jména postav jsou v celé kapitole stejná.
- Nezůstal žádný zástupný text.
- Uzly, o kterých bude recenzent mluvit, jsou pojmenované. Nepojmenovaný uzel se v panelu Problémy, v dialogu publikování i v poznámkách recenzenta objeví jako „Uzel 14“. Více najdete ve [Struktuře příběhu](/cs/best-practices/story-structure/).
- Kapitolu přečetl aspoň jeden další člověk. Více najdete v [Testování](/cs/best-practices/testing/).

**Detaily k vydání**

- Kapitola je zdarma, nebo placená. Abyste mohli prodávat, musí být vaše autorská fáze Kvalifikován nebo Aktivní partner a fakturační i výplatní údaje musí být kompletní. Více najdete v [Podmínkách zpeněžení](/cs/monetization/requirements/).
- U placené kapitoly leží cena v pásmu, které krok Ceny nabízí. Více najdete v [Cenách](/cs/monetization/pricing/).
- Předběžný přístup naplánujte nejméně 14 dní dopředu, protože kontrola může tak dlouho trvat. Od zvoleného data čtou podporovatelé, všichni ostatní o 7 dní později. Více najdete v části [Předběžný přístup](/cs/getting-started/publishing/#předběžný-přístup).
- Přispěvatelé jsou uvedení a na kroku **Přispěvatelé** jsou zaškrtnutí správní lidé. Krok říká: „Nevybraní přispěvatelé ztratí přístup k dalším verzím; jejich dřívější zpětná vazba zůstane zachována.“

## Po odeslání

Dokud kapitolu drží recenzent, editor je jen pro čtení a v záhlaví svítí **Čeká na kontrolu**. Když si všimnete chyby, stáhněte kapitolu z kontroly tlačítkem **Stáhnout z kontroly** a nečekejte na zamítnutí.

- Stažený koncept se vrátí plně upravitelný.
- Stažená aktualizace vydané kapitoly se vrátí do stavu **Publikováno**. Obsah je pak zase otevřený, ale struktura grafu zůstane uzamčená.

Recenzent nemůže použít **Zamítnout**, dokud u kapitoly není aspoň jedna poznámka, která nepřišla od testera. Počítají se i vaše vlastní poznámky, takže kapitola, kterou jste si sami okomentovali, se může vrátit zamítnutá a budou v ní jen vaše poznámky.

Poznámky se připínají k uzlu, někdy ke konkrétní komponentě na něm. Poznámku označenou jako prioritní je nutné vyřešit, než kapitolu někdo schválí. Více najdete v části [Práce se zpětnou vazbou z kontroly](/cs/publishing/review-feedback/).

- Zamítnutý koncept se vrátí jako koncept.
- Zamítnutá aktualizace vydané kapitoly se vrátí jako revize. Vydaná verze zůstane čtenářům dostupná, dokud ji opravujete.

## Související

- [Požadavky na vydání](/cs/publishing/publishing-requirements/)
- [Důvody zamítnutí](/cs/publishing/reasons-for-rejection/)
- [Průběh kontroly](/cs/publishing/review-process/)
- [Testování](/cs/best-practices/testing/)
