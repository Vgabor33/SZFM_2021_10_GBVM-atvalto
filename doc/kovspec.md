# Átváltó követelményspecifikáció



## 1. Jelenlegi helyzet

Sett Construction Company, nemzetközi építkezési vállalatunk rendelkezik olyan kliensekkel akik tőlünk eltérő mértékegységrendszereket használnak.

Ilyen klienseknél méréseinket át kell váltanunk a kliens által használt mértékegységrendszerbe.

A terepfelmérésre és alapanyag-becslésre így papír alapú táblázatot használunk, ami alapján kézileg kell elvégezni az átváltáshoz szükséges számításokat, ezek eredménye segítségével mérjük fel a költségeket, amelyeket később felszámolunk az alapdíjra a megbízónak.

## 2. Vágyott rendszer

A vállalatunk fejlődése és modernizálása érdekében, továbbá építkezéshez szükséges alapvető alapanyag becsült költségének pontosabb érték adásához, célunk a mértékegység átváltást digitalizálni, és egy webes felületet adni neki. A kézzel való átváltásnak hátrányait és hibáit figyelembe véve egy digitális felület ezeket orvosolni tudná, amit szeretnénk hogy az alkalmazottunk minden eszközön el tudjon érni online.

A web oldal könnyedén üzemeltethető/kezelhető legyen. Platformfüggetlen technológiával készüljön.
Nem elfogadható csak Microsoft Windows operációs rendszeren üzemeltethető rendszerre vonatkozó javaslat.
Az online megjelenés lehetőleg mobil telefonon, tableten is működjön, reszponzív felülettel.


## 3. Jelenlegi üzleti folyamatok

### 3.1. A termék megtervezése.
A tervek elkészítése az anyaországban. =>  
A helyszín felmérése. =>  
A helyszíni munka megszervezése. (munkaerő felfogadása)

### 3.2. Építési fázis.
A tervek szükséges adaptálása. =>  
Az építkezés elvégzése.

#### 3.2.1. Egy adott mérés felvétele.
A munkás a tervről leolvassa a mérést és mértékegységet. =>  
Ha ismeri, és képes a kimérés elvégzésére az elérhető eszközökkel, akkor [[3.2.1.1.]](#3211), egyébként [[3.2.1.2.]](#3212)

##### 3.2.1.1.
A mérés felvétele, a munka továbbhalad.

##### 3.2.1.2.
A helyszíni mérnök konzultálása. =>  
A mérnök által átváltott mértékegységgel továbhaladva, [[3.2.1.1.]](#3211)

## 4. Igényelt üzleti folyamatok

### 4.1. A termék megtervezése.
Változatlan.

### 4.2. Építési fázis.
Változatlan.

#### 4.2.1. Egy adott mérés felvétele.
A munkás a tervről leolvassa a mérést és mértékegységet. =>  
Ha ismeri, és képes a kimérés elvégzésére az elérhető eszközökkel, akkor [[4.2.1.1.]](#4211), egyébként [[4.2.1.2.]](#4212)

##### 4.2.1.1.
A mérés felvétele, a munka továbbhalad.

##### 4.2.1.2.
A mértékegységátváltás elvégzése egy eszköz segítségével, a munkás által, külső beavatkozás nélkül. =>  
Az átváltott mértékegységgel továbhaladva, [[4.2.1.1.]](#4211)

## 5. A rendszerre vonatkozó szabályok

A weboldalt HTML-ben legyen írva.

A weboldal funkcionalitása Javascript-el legyen megoldva.

A weboldal CSS stíluslappal legyen formázva.

A weboldalhoz használt képek csak PNG formátumúak lehetnek.

A CSS és Javascrip része a weboldalnak külön fileban kell lenniük, nem lehetnek benne a HTML fileban.

A weboldalnak tudnia kell offline módban működni.

A weboldal telefonról is használható kell hogy legyen.

A weboldalnak illeszkednie kell a használt eszköz képernyőjéhez.

## 6. Követelménylista

* [K01] Hordozhatóság
* [K02] Reszponzív dizájn
* [K03] Rendszerfüggetlenség
* [K04] Gyors működés
* [K05] Könnyű kezelhetőség
* [K06] Helyi adatfeldolgozás
* [K07] Pontos számítás
* [K08] Oda-vissza működő átváltás