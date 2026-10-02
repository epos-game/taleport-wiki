---
title: Omezení u vydaného obsahu
description: Co se vydáním kapitoly zamkne a co se pořád dá změnit.
helpKey: publishing.published-restrictions
status: published
sidebar:
  order: 10
---

Publikováním předáte kapitolu čtenářům a TalePort od té chvíle zmrazí všechno, na čem čtenáři stojí. Tvar grafu je daný a stejně tak každá postava, proměnná i globální událost, kterou kapitola používá; text, obrázky a zvuk uvnitř komponent, které už existují, upravovat jde. Druhá kapitola *Mlýna na konci světa* je venku a čtenář vám napíše, že převozník v uzlu **Brod** chce „čtyřycet“ grošů: otevřete uzel, repliku přepíšete a publikujete znovu. Přidat druhého převozníka, obejít ho novou větví nebo přejmenovat proměnnou `prevoz_zaplacen`, kterou ta scéna nastavuje, u vydané kapitoly nejde.

## Graf je zamčený

Pevná struktura znamená víc než jen plátno. Nemůžete přidávat, mazat, přepojovat ani přeskupovat uzly a uvnitř uzlu nemůžete přidávat, mazat ani přerovnávat repliky dialogu, volby, události ani komponenty. Název uzlu je taky jen ke čtení.

Upravovat jde to, co už tam je: text repliky, textový blok, obrázek nebo zvukový soubor, na který komponenta ukazuje. Upravte ho a publikujte znovu; kapitola projde [kontrolou](/cs/publishing/review-process/) jako každé jiné odeslání.

Editor to říká naplno. Nad plátnem je pruh **Publikovaná kapitola** a za ním *Upravte obsah (dialogy, text, obrázky a zvuk) a znovu publikujte. Graf příběhu a stávající postavy, proměnné a statistiky zůstávají uzamčené; nové však můžete přidávat.* Ve stavovém řádku je zkrácená verze, *Publikováno: struktura grafu uzamčena, obsah lze upravovat*.

![editor s otevřenou vydanou kapitolou](/screens/cs/publishing/published-chapter-banner.png)

Zámek sundá jedině TalePort tím, že kapitole zruší publikaci, čímž se smažou její balíčky. Se změnou struktury proto počítejte jako s novou kapitolou.

## Postavy, proměnné, vlastnosti a globální události se zamknou

Vydáním se zamkne všechno, co kapitola používá: postavy, které v ní vystupují, proměnné a vlastnosti, které čte nebo mění, globální události, které spouští. Zamčenou položku nelze přejmenovat, změnit jí typ ani ji smazat. Vlastnosti jsou proměnné, takže se zamykají stejně.

Týká se to jen toho, co vydaná kapitola skutečně používá. Postava, kterou jste vytvořili a nikdy nedali do scény, zůstává upravitelná a nové postavy, proměnné, vlastnosti i události můžete přidávat kdykoli. Právě tudy vede cesta kolem zámku: starou položku nechte být a vedle ní založte novou.

Po najetí na visací zámek popisek vypíše kapitoly, které položku drží, číslem i názvem, a dodá: *Odemkne se, jakmile ho žádná publikovaná kapitola nebude používat. Můžete přidat novou položku.* Vyndat položku z vydané kapitoly by ale samo o sobě byla změna struktury, takže reálně vám zbývá ta nová položka.

## Klasifikace se posouvá jen jedním směrem

Od chvíle, kdy je venku kterákoli kapitola příběhu, přestanou být dvě části klasifikace vratné. Obě platí pro celý příběh, ne pro kapitolu, kterou zrovna publikujete.

- [Věkové doporučení](/cs/publishing/age-ratings/) lze zvýšit, nikdy snížit. Všechny volby pod uloženým hodnocením jsou zašedlé s popiskem *Věkové doporučení nelze snížit, když je kapitola vydaná.*
- [Obsahové štítky](/cs/publishing/content-labels/) lze přidat, nikdy odebrat. Štítek, který už na příběhu je, se zobrazí jako zašedlý: *Tento štítek nelze odebrat, když je kapitola vydaná.*

Prohlášení o AI do toho nespadá a měnit se dá dál. Dávejte si ale pozor, kdy se zbytek zapíše: krok **Klasifikace** se ukládá stiskem **Další**, ne až odesláním. Štítek, který zaškrtnete a pak dialog zavřete, už na příběhu je, a jakmile vyjde první kapitola, zůstane tam natrvalo.

## Úprava vydané kapitoly

Úpravou se stav kapitoly nemění. Zůstává **Publikováno**, čtenáři pokračují ve verzi, kterou mají, a tlačítko **Publikovat znovu** se probudí, až bude co odeslat. Odesláním jde nová verze do kontroly, zatímco ta publikovaná dál běží, a vymění se za ni teprve po schválení. Čtenáři nikdy nezůstanou bez kapitoly.

Zamítnutí během tohoto kola nechá kapitolu ve stavu **Publikováno · v úpravách**. Dál je venku pro čtenáře, dál má zamčenou strukturu, dál se dá měnit jen obsah. Zámek nepovolí jen proto, že recenzent kapitolu vrátil.

## Jak se kapitola dá vzít zpátky

Tři různé akce, a jen první z nich je ve vašich rukou.

Stáhnout kapitolu můžete z hlavičky editoru, z dialogu kapitol i z nástěnky, dokud ji drží recenzent; tlačítko se jmenuje **Stáhnout z kontroly**. Vydaná kapitola se vrátí mezi **Publikováno**, nedotčená. První odeslání se vrátí do stavu **Návrh**. Potvrzovací otázka zní *Vrátit „…“ do konceptu?* v obou případech, i u vydané kapitoly, která se žádnému konceptu ani nepřiblíží.

Zrušit kontrolu mohou recenzenti a administrátoři. Verze, která čekala na kontrolu, se zahodí i s jejími recenzními balíčky a publikovaná verze zůstane venku.

Zrušit publikaci může jen administrátor a z autorské strany to nejde vůbec. Smažou se všechny balíčky kapitoly a čtenáři k ní ztratí přístup; tohle vrátit nelze. Samotná kapitola ale přežije: spadne do stavu **Návrh** s grafem, obsahem i poznámkami, takže ji můžete upravit a odeslat znovu. Berte vydanou kapitolu jako něco, co se aktualizuje, ne jako něco, co se dá stáhnout z nabídky.

## Moderace po vydání

Schválení není navždy. [CR-V.1](/cs/publishing/content-rules/#cr-v-1) nechává otevřené dveře k tomu, aby se vydaný obsah posoudil znovu, pokud se objeví nebo někdo nahlásí porušení pravidel.

Čtenáři hlásí z aplikace pro čtení, ne z editoru. Hlášení nese jeden ze sedmi důvodů (explicitní obsah, nenávistná řeč, extrémní násilí, nelegální obsah, nesprávně klasifikováno, spam, jiné), až tisíc znaků vlastního textu a míří na příběh, ne na kapitolu. Že nějaké hlášení existuje, se nedozvíte.

Moderátor ho pak uzavře jedním ze dvou způsobů, **Označit jako vyřešené** nebo **Nerelevantní**, s nepovinnou interní poznámkou pro ostatní moderátory. Víc moderátorská obrazovka dnes neumí. Širší výčet zásahů v [CR-VI.1](/cs/publishing/content-rules/#cr-vi-1) a [CR-VIII.1](/cs/publishing/content-rules/#cr-viii-1), od vynucené opravy hodnocení přes skrytí příběhu až po omezení účtu, je to, co si pravidla vyhrazují, ne tlačítko v aplikaci.

Jeden příznak se nastaví sám. Smazáním autorského účtu se vaše příběhy stáhnou z nabídky, ale čtenáři, kteří už kapitolu vlastní, si ji dál stáhnout mohou.

## Související

- [Životní cyklus příběhu](/cs/getting-started/story-lifecycle/)
- [Průběh kontroly](/cs/publishing/review-process/)
- [Proměnné](/cs/story-editor/variables/)
- [Věkové doporučení](/cs/publishing/age-ratings/)
