# Átváltó rendszerterv



## 1. A Rendszer célja

A rendszer célja, hogy a cég alkalmazottjának ne okozzon problémát ha más mértékegységekkel találkozik a terepen. 

A felhasználó kap egy felületet, amin egyszerűen és gyorsan át tudja váltani a számára nem megfelelő mértékegységű értékeket.

A felület fontos hogy bárhol elérhető legyen, ott is ahol internet szolgáltatás nincs, ezért webes felületen kívül tetszőleges, kliens által választott okos eszközökre is telepíthető lesz.

A rendszer intuitív, minimalista felülettel fog rendelkezni az eredmény gyors kiszámítása érdekében.

Az átváltott mérőszámot egyszerűen le tudja majd olvasni az alkalmazott, vagy ha arra igényt tart bárhova átmásolhatja, ha tervez más alkalmazással számítást végezni vele.


## 2. Projektterv

A projekt HTML, CSS és JavaScript nyelveken fog készülni.

A fejlesztőcsapat saját eszközökön fogja fejleszteni az alkalmazást, illetve a későbbi tesztelés is először ezeken az eszközökön fog végbemenni.

A fejlesztőcsapat négy fejlesztőből áll, akik a nekik a csapatvezető által kiosztott projektrészért, illetve az egyénileg létrehozott részek teszteléséért is felelnek.

Személyenkénti projektrészek:
| Név              | Felelősségkör                                                                    |
| ---------------- | -------------------------------------------------------------------------------- |
| Kóti Bence       | HTML (design)                                                                    |
| Sándor Milán     | CSS                                                                              |
| Veress Gábor     | HTML (CSS és JavaScript összekötése, Javascript működés az elemekhez kapcsolása) |
| Nagy Viktor Márk | JavaScript                                                                       |


### Mérföldkövek

    [M-01] - Szerepek egyértelműsítése és a projekthez szükséges állományok létrehozása, valamint a fájlok összekapcsolása

    [M-02] - A HTML weblap kinézete illetve a reszponzivitás megléte

    [M-03] - A JavaScript funkcionalitás HTML oldalba integrálása

    [M-04] - Tesztelés

    [M-05] - Kész állapot


### Ütemterv

    1. [M-01]-ben megfogalmazott mérföldkő elérése, ehhez egy meeting, ahol a csapat pontosan kiosztja a feladatokat, és pontos határidőket szab a részfeladatok elkészítésre

    2. [M-02]-ben megfogalmazott mérföldkő elérése, azaz a HTML és CSS fejlesztők nekilátnak az oldal kinézete és reszponzivitása kidolgozásának

    3. [M-03]-ban megfogalmazott mérföldkő elérése, azaz a HTML és JavaScript összekapcsolása

    4. Kész állapot elérésére törekvés, illetve tesztek végrehajtása


## 3. Üzleti folyamatok modellje

### 3.1. A mértékegység átváltás
#### 3.1.1. Szereplők:
 * Munkás

#### 3.1.2. Erőforrások:
 * Weboldal megjelenítésére képes eszköz
 * (Távoli szerver)
 * (Internet- vagy lokális hálózati kapcsolat)
 
#### 3.1.3. Bemenet:
 * Mértékegység és mérőszám

#### 3.1.4. Entitások:
 * A mértékegységátváltó weboldal

#### 3.1.5. Kimenet:
 * Építő által ismert mértékegység

#### 3.1.6. Folyamat:

Egy építő egy mérést szeretne elvégezni =>  
Leolvassa a mértékegységet a tervről =>  
Mérlegeli hogy a mértékegység megfelelő-e. Ha igen, a folyamat véget ért. Ha nem, akkor =>  
Elővesz egy weboldal megjelenítésére képes tetszőleges eszközt =>  
Megnyitja vagy a lokális lementett weboldalt, vagy a távoli helyen hostolt weboldalt =>  
Elvégzi az átváltást és folytatja a munkát.

#### 3.1.7. Folyamatábra
![folyamatábra kép](/images/atvaltas-folyamatabra.png)

#### 3.1.8. Példák

##### 3.1.8.1. Példa 1:

Egy építő szeretne egy építési elemet méretre vágni. =>  
Konzultál a tervekkel, melyekről leolvassa a `150 in` mérőszámot és mértékegységet. =>  
Mivel az általa használt eszközök egyike se rendelkezik `inch`-es mérővel, át kell váltania a mérést `centiméter`-be. =>  
Előveszi a céges mobiltelefonját. =>  
Felkeresi a cég belső mértékegység átváltó weboldalát. =>  
Átváltja a `150 in`-t `381 cm`-re, amellyel már tudja konfigurálni a megfelelő eszközöket.

##### 3.1.8.2. Példa 2:

Egy minőségellenőr szeretné ellenőrizni egy tartály nyomásbíró képességét. =>  
Leolvassa a tervekről, hogy a tartálynak `30 atm` nyomást kell kibírnia. =>  
Mivel a rendelkezésre álló pumpa csak `kilopascal` beosztásokkal rendelkezik, mértékegység átváltás szükséges. =>  
Előveszi a céges laptopját, mely biztonsági okokból nem rendelkezik hálózati kapcsolattal. =>  
Megnyitja az idő előtt lokálisan eltárolt weboldalt. =>  
Átváltja a `30 atm`-t `3039.75 kPa`-ra, így folytathatja a munkát.


## 4. Követelmények

### [K01] Hordozhatóság
    A hordozhatóság megvalósítása az hálózatra való kihelyezéssel, illetve a helyileg elérhető fájlokkal fog megvalósulni.
### [K02] Reszponzív dizájn
    A reszponzivitás a HTML és CSS segítségével lesz megvalósítva.
### [K03] Rendszerfüggetlenség
    A rendszerfüggőség a böngészőben való futattással lesz kiküszöbölve.
### [K04] Gyors működés
    Mivel böngészőben elérhető lesz az alkalmazás, így biztosítva van a gyors működés.
### [K05] Könnyű kezelhetőség
    Az átváltó egy szabványos, mindennapokban használatos weblapként lesz megjelenítve, így a felhasználó a weboldalakkal való előzetes tapasztalatát használja fel az alkalmazás működtetésére.
### [K06] Helyi adatfeldolgozás
    A számítások lokálisan, JavaScript-ben fognak futni, és így nincs szükség azok elküldésére külső szerver részére.
### [K07] Pontos számítás
    Mivel a számítások a számítógép által lesznek elvégezve, így azok pontosak és konzisztensek lesznek.
### [K08] Oda-vissza működő átváltás
    Az átváltás kétirányú lesz, mégpedig úgy, hogy egy átváltás elvégzése után lehetőség lesz egy gombbal megváltoztatni az átváltás irányát, és ilyenkor az előzőekben átváltott adatok automatikusan beírásra kerülnek.


## 5. Funkcionális terv

### 5.1. Az elkészítendő rendszer tulajdonságai
Egy weboldal (vagy weboldalak), mely
 * hordozható (statikus), hogy lokálisan is használni lehessen
 * reszponzív, hogy mobil eszközökről is kényelmesen használható legyen

### 5.2. Renszerszereplők
 * Weboldal
 * (Webszerver - Kliens által biztosított)
 * (Okoseszköz - Kliens által biztosított)

### 5.2. Rendszerhasználati esetek és lefutásaik
#### 5.2.1. Mértékegység átváltás
##### 5.2.1.1. Funkcionalitás leírása

Legyen a weboldalon egy bemeneti mező, melybe tetszőleges (mérő)számot be lehet írni [1],  
egy mértékegység mező, melyben előre meghatározott értékek közül lehet kiválasztani a bemeneti mezőben szereplő számhoz tartozó mértékegységet [2],  
egy kimeneti mező, melybe az átváltás eredménye kerül [3],  
valamint egy kimeneti értékhez tartozó mértékegység kiválasztására alkalmas mező [4].

Az átváltás folyamata legyen automatikus, tehát az eredmény frissüljön minden egyes bemenet-változáskor, mivel az átváltás nem igényel különösebb számítási kapacitást.

![Képernyőterv](/images/kepernyo-terv-annotated.png)
##### 5.2.1.2. Példa használati eset / lefutás
Egy építő el szeretne végezni egy mértékegység átváltást =>  
Egy okoseszközén előveszi a vagy lokális másolatát, vagy távoli szerverről kiszolgált változatát a weboldalnak =>  
Elvégzi az alábbi folyamatokat tetszőleges sorrendben:
 * Kiválasztja az eredeti mértékegységet a [2] mezőben.
 * Felviszi az eredeti mérőszámot az [1] mezőben.
 * Kiválasztja a kívánt mértékegységet a [4] mezőben.

=>  
Majd leolvassa a [3] mezőben szereplő átváltott mérőszámot.


## 6. Fizikai környezet

Az alkalmazás web platformra, hordozható eszközökre (okostelefonok, táblagépek) készül.
- Nincsenek megvásárolt komponensek.
- Kliens által biztosított eszközök:
    - Webszerver
    - Okoseszköz
- Fejlesztői eszközök:
    - Visual Studio Code
    - Onenote
    - git
- Tesztelési környezet:
    - Chrome
    - Firefox
    - Microsoft Edge


## 7. Absztrakt domain modell

TBA


## 8. Architekturális terv

A rendszer alapja egy HTML, egy CSS és egy JavaScript fájl lesznek. A HTML és CSS fájlok a megjelenítésért felelnek, míg a JavaScript-ben lesznek azok a függvények, melyek a számításokat végzik majd.

Az alábbi kép nagy vonalakban szemlélteti a rendszer működését.

![Absztrakt rendszermodell](/images/absztrakt-modell.png)


## 9. Adatbázisterv

**Nincs szükség rá, mivel a projekt nagysága nem indokolja.**


## 10. Implementációs terv

**Nem szükséges implementációs terv, mivel a projektben használt osztályok egyszerűek és a köztük lévő kapcsolatok egyértelműek.**


## 11. Tesztterv


A teszt célja az átváltó helyes működésének tesztelése, illetve a rendszer platformfüggetlenségéről való megbizonyosodás.

### Teszt jegyzet sablon

Tesztelő neve:
___
Tesztelt rendszer:
___
Kapott eredmény:
___
Várt eredmény: 
___
Teszt konkluzió: 
___
Egyéb megjegyzés:
___

### Átváltó helyességének tesztelése

Az első teszt amit a weboldalon végzünk miután elkészült, esetleg azután hogy maga az átváltó használhatóvá válik.

Az átváltót manuálisan tesztelik a fejlesztők.
A teszt során egy vagy több olyan átváltást végeznek, melyek várt eredményeivel mindig tisztában vannak.  
Ha a végeredmény megegyezik a várt eredménnyel, a tesztet sikernek könyvelik el.  
Ellenkező esetben a teszt sikertelen és az átváltó egy része hibás.

### Platformfüggetlenség tesztelése

A weboldalnak elérhetőnek kell lennie mind szerverről szolgáltatva, mind végfelhasználói eszközről futtatva.

Hálózatról való működés tesztelése során feltöltjük a fájlokat egy szerver szolgáltatást futtató számítógépre, majd a szerver által kiszolgált weboldal funkcionalitását teszteljük különböző eszközökön (okostelefon, számítógép, stb.).

A helyi eszközről való futtatás tesztelése során a weboldalt letöltjük több különböző eszközre és helyben teszteljük.

Amennyiben a weboldal minden esetben funkcionális marad, a teszt sikeres.


## 12. Telepítési terv

A rendszer működéséhez három fájl szükséges.
Kétféle módon van lehetőség használni, ebből adódóan pedig kétféle telepítési mód van.

### Online telepítés:
- A fájlok feltöltése egy weboldal hostolására alkalmas szerverre és az ehhez kapcsolódó beállítások elvégzése (URL, címfordítás stb).
- Ezután a weboldal elérhető bármely webböngészővel (Chrome, Opera, Firefox, stb.) rendelkező eszközön, feltéve ha eléri a szervert.

### Offline telepítés
- Weboldal fájljainak letöltése személyi eszközre (pl. számítógép, okostelefon).
- A weboldal első alkalommal a fájlrendszerből kitallózva érhető el, a későbbiekben viszont például könyvjelzőzve, közvetlenül a böngészőből is megnyitható lesz.


## 13. Karbantartási terv

**A weboldal egyszerűsége miatt nem igényel aktív karbantartást, elegendő a működés során felmerülő hibák javítása és alkalmankénti frissítés.**
