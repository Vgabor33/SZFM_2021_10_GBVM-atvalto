# Átváltó rendszerterv



## 1. Rendszer célja

Leírja mire lesz jó a rendszer, és a tisztázza a problémát aminek a megoldását várjuk a rendszertől.



## 2. Projektterv

Rendszer létrehozásához használt erőforrások leírása. Tartalmazza még a szerepkörök egyértelműsítését, illetve ütemtervet és mérföldköveket határoz meg.



## 3. Üzleti folyamatok modellje

### 3.1. A mértékegységátváltás
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
Mérlegeli hogy a mértékegység megfelelő-e. Ha igen, a folymat végetért. Ha nem, akkor =>  
Elővesz egy weboldal megjelenítésére képes tetszőleges eszközt =>  
Megnyitja vagy a lokális lementett weboldalt, vagy a távoli helyen hostolt weboldalt =>  
Elvégzi az átváltást és folytatja a munkát.

#### 3.1.7. Folyamatábra
![folyamatábra kép](/images/atvaltas-folyamatabra.png)

#### 3.1.8. Példák

##### 3.1.8.1. Példa 1:

Egy építő szeretne egy epítési elemet méretre vágni. =>  
Konzultál a tervekkel, melyekről leolvassa a `150 in` mérőszámot és mértékegységet. =>  
Mivel az általa használt eszközök egyike se rendelkezik `inch`-es mérővel, át kell váltania a mérést `centiméter`-be. =>  
Előveszi a céges mobiltelefonját. =>  
Felkeresi a cég belső mértékegységátváltó weboldalát. =>  
Átváltja a `150 in`-t `381 cm`-re, amellyel már tudja konfigurálni a megfelelő eszközöket.

##### 3.1.8.2. Példa 2:

Egy minőségellenőr szeretné ellenőrizni egy tartály nyomásbíró képességét. =>  
Leolvassa a tervekről, hogy a tartálynak `30 atm` nyomást kell kibírnia. =>  
Mivel a rendelkezésre álló pumpa csak `kilopascal` beosztásokkal rendelkezik, mértékegységátváltás szükséges. =>  
Előveszi a céges laptopját, mely biztonsági okokból nem rendelkezik hálózati kapcsolattal. =>  
Megnyitja az idő előtt lokálisan eltárolt weboldalt. =>  
Átváltja a `30 atm`-t `3039.75 kPa`-ra, így folytathatja a munkát.


## 4. Követelmények

Követelménylistából kifejtjük, hogy mit és hogyan akarunk megvalósítani.



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
#### 5.2.1. Mértékegységátváltás
##### 5.2.1.1. Funkcionalitás leírása

Legyen a weboldalon egy bemeneti mező, melybe tetszőleges (mérő)számot be lehet írni [1],  
egy mértékegység mező, melyben előre meghatározott értékek közül lehet kiválasztani a bemeneti mezőben szereplő számhoz tartozó mértékegységet [2],  
egy kimeneti mező, melybe az átváltás eredménye kerül [3],  
valamint egy kimeneti értékhez tartozó mértékegység kiválasztására alkalmas mező [4].

Az átváltás folyamata legyen automatikus, tehát az eredmény frissüljön minden egyes bemenet-változáskor, mivel az átváltás nem igényel különösebb számítási kapacitást.

![Képernyőterv](/images/kepernyo-terv-annotated.png)
##### 5.2.1.2. Példa használati eset / lefutás
Egy építő el szeretne végezni egy mérékegységátváltást =>  
Egy okoseszközén előveszi a vagy lokális másolatát, vagy távoli szerverről kiszolgált változatát a weboldalnak =>  
Elvégzi az alábbi folyamatokat tetszőleges sorrendben:
 * Kiválasztja az eredeti mértékegységet a [2] mezőben.
 * Felviszi az eredeti mérőszámot az [1] mezőben.
 * Kiválasztja a kívánt mértékegységet a [4] mezőben.

=>  
Majd leolvassa a [3] mezőben szereplő átváltott mérőszámot.


## 6. Fizikai környezet

Meghatározzuk, hogy mivel és mire fejlesztünk. Ezen kívül le kell írni, hogy milyen plusz a szolgáltatás/hardware szükséges majd a rendszer működéséhez.



## 7. Absztrakt domain modell

Nagyvonalú rendszerleírás, pár példával.



## 8. Architekturális terv

**Nem készítjük el, mivel a projekt nem rétegelt, biztonsági funkciókat sem indokol semmi, ezen kívül a bővíthetőség is egyértelmű.**



## 9. Adatbázisterv

**Nincs szükség rá mivel a projekt nem indokolja.**



## 10. Implementációs terv

**Nem készítünk implementációs tervet, mivel a projektben használt osztályok egyszerűek és a köztük egyértelműek a kapcsolatok.**



## 11. Tesztterv

A teszt célja az átváltó helyességéről és platform függetlenségéről való megbizonyosodás.

### Átváltó tesztelése
A tesztelés során különböző értékeket próbálunk végig az átváltóban. Ha minden esetben helyes értéket ad vissza elkönyveljük hogy az ávtáltó működi.

### Platformfüggetlenség tesztelése
A weboldalt teszteljük több különböző fajta eszközökön (számítógép, okostelefon) és böngészőkben (firefox, opera, chrome). Ha minden esetben működik elkönyveljük hogy a weboldal platofrmfüggetlen.

## 12. Telepítési terv

A rendszer működéséhez csak három file szükséges ami egy tömörített fileban van megadva. Kétféle módon van lehetőség használni, ebből adódóan pedig kétféle telepítési mód van.

### Online telepítés:
- A fileok feltöltése egy weboldal hostolására alkalmas szerverre és az ehhez szükséges beállítások elvégzése (URL, címfordítás stb).
- Ezután a weboldal elérhető bármely webböngészővel (chrome, opera stb) rendelkező eszközön, feltéve ha eléri a szervert.
### Offline telepítés
- Weboldal fileainak letöltése személyi eszközre (pl számítógép, okostelefon).
- Fileok kicsomagolása egy könnyen elérhető mappába.
- A weboldal az index.html fileon lesz elérhető.


## 13. Karbantartási terv

**A weboldal egyszerűsége miatt nem igényel aktív karbantartást, elegendő a működés során felmerülő hibák javítása és alkalmankénti frissítés.**