# Átváltó Funkcióspecifikáció



## 1. Jelenlegi helyzet

Sett Construction Company, nemzetközi építkezési vállalat rendelkezik olyan kliensekkel akik imperial rendszert használnak, emiatt ezeket át kell váltaniuk náluk standard metric rendszerbe. A terepfelmérésre, és alapanyag becslésre így papír alapú táblázatot visznek magukkal, ami alapján kézileg kell elvégezni a számításokat, ezek eredménye segítségével mérik fel a költségeket, amit később felszámolnak az alapdíjra a megbízónak.



## 2. Vágyott rendszer

A vállalat fejlődése és modernizálása érdekében, továbbá építkezéshez szükséges alapvető alapanyag becsült költségének pontosabb érték adásához, céljuk a mértékegység átváltást digitalizálni, és egy webes felületet adni neki. A kézzel való átváltásnak hátrányait és hibáit figyelembe véve egy digitális felület ezeket orvosolni tudná, amit szeretnénk hogy az alkalmazottak minden eszközön el tudjon érni online.

A web oldal könnyedén üzemeltethető/kezelhető legyen. Platformfüggetlen technológiával készüljön.
Nem elfogadható csak Microsoft Windows operációs rendszeren üzemeltethető rendszerre vonatkozó javaslat.
Az online megjelenés lehetőleg mobil telefonon, tableten is működjön, reszponzív felülettel.
## 3. Jelenlegi üzleti folyamatok

### 3.1. A megrendelés terveinek elkészítése

A mérnökök az anyaroszágban készítik el a terveket a saját mértékegységrendszerükkel, majd a megrendelést a megrendelő által kívánt helyszínen (világszerte bárhol), helyi munkaerővel valósítja meg a cég.

### 3.2. A megrendelés kivitelezése

A helyszínre 2-3 építkezésfelügyelőt rendel ki a cég, hogy biztosítsák a megrendelt termék minőségét.

A termék egyedi tulajdonságaiból fakadóan több nemszabványos mértékegység is szerepelhet a tervekben.

### 3.3. Mértékegységátváltó táblázatok használata

Egy mérnök a helyszínen átváltja a kívánt méréseket az adott mértékegységre számológép és egy speciális táblázat használatával.  
-> Számítási hibák.

Ha egy építő tudni szeretne egy mérést az általa kívánt mértékegységben, akkor megkérdezi a helyszínen lévő mérnököt.

Az építő nem alkalmas a táblázat papírjának fenntartására valamint a szükséges, néha többlépéses számítások elvégzésére.  
-> Valamilyen fizikailag reziliens eszköz kellene.

## 4. Igényelt üzleti folyamatok

### 4.1. A megrendelés terveinek elkészítése

A tervet készítő mérnökök munkájának változatlanak kell maradnia.  
-> Minimum egy szinttel lentebb kell megoldást keresni.

### 4.2. A mértékegységátváltás elérhetővé tétele

Egy olyan megoldás, amely lehetővé teszi a mértékegységek átváltását az építők által.  
-> Sok ugyanolyan, sztenderdizált eszköz.

Ha egy építő tudni szeretne egy mérést az általa kívánt mértékegységben, akkor el tudja ő maga is gyorsan, könnyen, pontosan végezni az átváltást, a helyszíni mérnökök erőforrásait nem felhasználva.  
-> Egyszerű, intuitív felület.

Az építő a mértékegységátváltásra egy már meglévő eszközt használ, amelyet már ismer, és vagy tapasztalt a kezelésében vagy kezelése eléggé intuitív.  
-> Okostelefon?

Egyes mértékegységek előre betáplálása a rendszerbe, hogy az építő könnyen érje el őket.  
-> Valamiféle perzisztens tár.


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



## 7. Használati esetek

A program a cég bármelyik alkalmazottja által használható a mértékegységek közti átváltásra. Az alkalmazás bármilyen olyan helyzetben használható, ahol mértékegységek közti átváltásra van szüksége a cég alkalmazottjainak. Az átváltó alkalmas ezen felül még a visszaellenőrzésre is, hiszen könnyen visszaellenőrizhető egy fejben történt átváltás, vagy ellenőrizhetünk korábbi, a rendszer használata előtt számolt átváltásokat is.



## 8. Képernyőtervek

A webalkalmazás kinézetének terve:

![Képernyőterv](/images/kepernyo-terv.png)

A színválasztás még nem végleges, viszont a kép remekül bemutatja az alakalmazás elrendezésének tervét.

## 9. Forgatókönyvek

###  9.1 A felhasználó belép a weboldalra.
Kiválasztja a kívánt mértékegység rendszert, a weboldal nyelvét és azt hogy melyik orszából származik.

### 9.2 A felhasználó megadja az átváltandó számot.
Lenyíló listából kiválasztja hogy milyen mértékegységet akar átvaltani és megadja a pontos számot.

### 9.3 A felhasználó leolvassa az átváltott számot
A szám átváltásra kerül, ezt a felhasználó leolvassa.