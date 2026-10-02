---
title: Okolní zvuk
description: Atmosférická vrstva, která leží pod vším ostatním.
helpKey: media.ambient
status: published
sidebar:
  order: 3
---

Okolní zvuk je atmosférická vrstva na vlastním kanálu: déšť, hluk přístavu, vítr v lese, generátor bručící o dvě místnosti dál. Vyhodnocuje se nezávisle na [hudbě na pozadí](/cs/media/background-music/), takže obojí hraje současně a změna jednoho se druhého nedotkne. Dejte na uzel *Přístav v noci* třicetisekundovou smyčku deště se zapnutými volbami **Pokračovat v přehrávání** a **Smyčka** a déšť povede čtenáře všemi šesti uzly v docích, i když hudba pod ním přejde z napjatého motivu do ticha.

## Proč je to samostatný kanál

Hudba říká, jak scéna působí. Okolní zvuk říká, kde se odehrává. Každý kanál se vyhodnocuje zvlášť, takže celou pasáž podložíte jinou hudbou, aniž byste přesouvali déšť, a čtenáře odvedete do interiéru bez zásahu do hudby.

## Jak ho přidat a přenést dál

**Okolní zvuk** najdete v paletě komponent s popisem „Přidat okolní zvuk vrstvený přes hudbu.“ V editoru uzlu se pak objeví plocha s textem „Přetáhněte sem zvuk nebo klikněte na Procházet“ a dialog nabízí .mp3, .wav, .ogg, .aac, .m4a a .flac.

Oba přepínače jsou až pod přehrávačem, takže se ukážou teprve ve chvíli, kdy je nahraná nějaká stopa. **Pokračovat v přehrávání** je u nové komponenty vypnuté a teprve ono zvuk pustí i na navazující uzly. **Smyčka** je vypnutá taky a tady na ní záleží víc než u hudby: čtyřicetisekundová smyčka, která dojde, uvrhne scénu do ticha a čtenář přesně slyší, kdy se to stalo.

![karta Okolní zvuk v panelu vlastností s nahranou stopou, přepínače Pokračovat v přehrávání i Smyčka jsou pod přehrávačem stále vypnuté](/screens/cs/media/ambient-sound-panel.png)

## Co ho ukončí

Z uzlu se zapnutým přehráváním dál se okolní zvuk šíří po spojeních, uzel po uzlu, a vyhrává nejbližší zdroj. Zastaví se na:

- uzlu s vlastní komponentou okolního zvuku, i prázdnou, což znamená ticho od tohoto uzlu dál;
- zastavení dědění, tedy panelu **Okolní zvuk** s textem „Dědění média je zde zastaveno. Tento uzel ani uzly za ním toto médium nezdědí z předchozích uzlů.“ a dvěma tlačítky, **Obnovit dědění** a **Použít vlastní médium**;
- koncovém uzlu, který nic nedědí a sám nesmí nést žádné komponenty; závěrečná obrazovka je titulní obrázek příběhu s textem „Děkujeme za hraní“ a nehraje na ní nic;
- dvou různých zdrojích, které dorazí ze stejné vzdálenosti. To je konflikt a nehraje nic, dokud ho nevyřešíte.

Zastavení dědění v paletě nenajdete. Přidává se červenou ikonou koše v hlavičce panelu zděděných médií, s popiskem **Zastavit dědění**, takže uzel musí nejdřív něco dědit, abyste to na něm mohli zastavit.

Panel konfliktu vypíše každý zdroj podle názvu souboru a přidá odkaz na uzel, odkud přišel. Když na jeden kliknete, jeho komponenta se zkopíruje na tento uzel a volba Pokračovat v přehrávání je u kopie hned zapnutá, takže řetěz pokračuje odtud. **Přidat vlastní** místo toho vloží prázdnou komponentu.

Skupina okolní zvuk propouští: dovnitř svým vstupem k uzlům uvnitř a zase ven svými výstupy. Filmová sekvence se chová jinak. Na svém uzlu zděděný zvuk skryje, panel zděděných médií to označí textem „Na tomto uzlu skryto“, a na následujícím uzlu se zvuk vrátí.

## Když je komponenta prázdná

Komponenta okolního zvuku bez souboru se v přehledu problémů objeví jako „Zvuk prostředí není nastaven a žádný se nedědí.“ (editor jinde používá označení Okolní zvuk). Druhá polovina té zprávy mate. Uzel, který na kanálu vlastní komponentu, na něm nikdy nic nedědí, takže varování vyskočí u každé prázdné komponenty okolního zvuku bez výjimky. Je to varování, ne chyba, kapitola se tedy vydá: prázdná komponenta z balíčku vypadne a čtenář uslyší ticho.

## Soubory

Okolní zvuk jde stejnou cestou jako hudba. Cokoli nahrajete, převede se ve vašem prohlížeči na MP3, hlasitost se vyrovná k -20 dB RMS a po převodu platí strop 20 MB. Čísla najdete v [Hudbě na pozadí](/cs/media/background-music/). Název souboru se při nahrání přepíše, takže z „Déšť na plechu (smyčka).wav“ se stane „Déšť_na_plechu_smyčka.mp3“ a pod tímto názvem stopu uvidíte i v editoru.

V nabídce **Statistiky** se u položky **Délka zvuku** každá stopa počítá jednou za celou kapitolu, bez ohledu na to, na kolika uzlech hraje. Jedna smyčka deště nesená přes čtyřicet uzlů je tam třicet sekund, ne dvacet minut.

## Při vydání

Přepínač **AI hudba** v kroku Klasifikace zahrnuje i okolní zvuk a ukládá se k příběhu, ne ke kapitole. Jmenuje se AI hudba i tehdy, když je okolní zvuk jediný zvuk, který v příběhu máte. Jeden přepínač tak odpovídá za obojí: dešťová smyčka z generátoru pod hudbou, kterou skládal člověk, se odlišit nedá.

## Praktické rady

- Tišeji, než vám přijde správné. Když si čtenář okolního zvuku všimne, je příliš hlasitý.
- Slaďte ho s pozadím. Atmosféra, která obrázku odporuje, ruší víc než ticho.
- Zastavte ho, když čtenář vejde dovnitř. Venkovní smyčka, která jde se čtenářem do sklepa, scénu rozbije, a je to nejčastější důvod, proč zastavení dědění přidat.
- Vyhněte se smyčkám s událostmi. Pes, který štěkne každých třicet sekund, se promění v metronom.

## Související

- [Hudba na pozadí](/cs/media/background-music/)
- [Obrázky](/cs/media/images/)
- [Typy uzlů](/cs/story-editor/node-types/): dědění médií
