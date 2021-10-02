# Tesztjegyzőkönyv

## Alfa-tesztelés:

### Nyelvváltás tesztelése Google Chrome böngészőben

- Tesztelő neve: Veress Gábor

- Teszelés ideje: 2021.09.26 21:30

- Tesztelt rendszer: Nyelvváltás

- Rendszer amin a teszt végbement: Windows 10 Pro 20H2, Google Chrome 93.0.4577.82 (Hivatalos verzió) (64 bites)

- Kapott eredmény: Az oldal megfelelő 
        nyelvre vált át

- Várt eredmény: Az oldal megfelelő nyelvre vált át

- Teszt konkluzió: A nyelvváltás funkció megfelelően működik

- Egyéb megjegyzés: A teszteléshez használt szoftver elrontotta a kódolást

A tesztelést a Selenium IDE segítségével végeztem:
![Kép a nyelvváltás tesztelésről](/images/nyelv-teszt.png)



### Átváltás tesztelése Google Chrome böngészőben

- Tesztelő neve: Veress Gábor

- Teszelés ideje: 2021.09.26 21:29

- Tesztelt rendszer: Átváltás

- Rendszer amin a teszt végbement: Windows 10 Pro 20H2, Google Chrome 93.0.4577.82 (Hivatalos verzió) (64 bites)

- Kapott eredmény: Az oldal megfelelően váltja-e át a mértékegységeket

- Várt eredmény: Az oldal megfelelően váltja át a mértékegységeket

- Teszt konkluzió: Az átváltó funkció megfelelően működik

- Egyéb megjegyzés:

A tesztelést a Selenium IDE segítségével végeztem:
![Kép az átváltás tesztelésről](/images/atvalto-teszt.png)


### Visszaváltás tesztelése Google Chrome böngészőben 
- Tesztelő neve: Veress Gábor

- Teszelés ideje: 2021.09.26 21:37

- Tesztelt rendszer: Visszaváltás

- Rendszer amin a teszt végbement: Windows 10 Pro 20H2, Google Chrome 93.0.4577.82 (Hivatalos verzió) (64 bites)

- Kapott eredmény: Az oldal megfelelően váltja-e vissza az eredeti átváltást

- Várt eredmény: Az oldal megfelelően váltja vissza az eredeti átváltást

- Teszt konkluzió: Az visszaváltó funkció megfelelően működik

- Egyéb megjegyzés:

A tesztelést a Selenium IDE segítségével végeztem:
![Kép a visszaváltás tesztelésről](/images/reverse-button-teszt.png)

### Átváltás tesztelése Firefox böngészőben

- Tesztelő neve: Kóti Bence

- Teszelés ideje: 2021.09.27 10:34

- Tesztelt rendszer: Átváltás

- Rendszer amin a teszt végbement: Ubuntu 20.04.3 LTS, Firefox 92.0 (64-bit)

- Kapott eredmény: Az átváltott értékek közel egyenlőek a várt értékekkel.     

- Várt eredmény: Az átváltott érték közel egyenlő a várt értékekkel.     

- Teszt konkluzió:A teszt sikeres.

- Egyéb megjegyzés: A teszthet métert válttam át hüvelykbe. Az eltérés ezredes nagységrendű volt.

### Hostolás tesztelése Ubuntu alatt XAMPP programmal, firefox böngészővel

- Tesztelő neve: Kóti Bence

- Teszelés ideje: 2021.09.27 10:50

- Tesztelt rendszer: Hostolás

- Rendszer amin a teszt végbement:
  - Hostoló rendszer: Ubuntu 20.04.3 LTS, XAMPP 8.0.10-0
  - Kliens rendszer: Windows 10 Enterprise, Firefox 92.0.1 (64 bite)

- Kapott eredmény: A weboldal ugyanúgy működik távoli weboldalként mint helyi gépen.

- Várt eredmény: A weboldal ugyanúgy működik távoli weboldalként mint helyi gépen.

- Teszt konkluzió:A teszt sikeres.

- Egyéb megjegyzés: A speciális karakterek roncsolódtak átvitel során de a funkciók ugyanúgy működnek.

### Visszaváltás tesztelése Firefox böngészőben 
- Tesztelő neve: Kóti Bence

- Teszelés ideje: 2021.09.27 11:06

- Tesztelt rendszer: Visszaváltás

- Rendszer amin a teszt végbement: Ubuntu 20.04.3 LTS, Firefox 92.0 (64-bit)

- Kapott eredmény: A kapott érték ugyanaz lesz mint az eredetileg beírt érték.

- Kapott eredmény: A kapott érték ugyanaz mint az eredetileg beírt érték.

- Teszt konkluzió: A teszt sikeres

- Egyéb megjegyzés:

### Nyelvváltás tesztelése Opera böngészőben

- Tesztelő neve: Sándor Milán

- Teszelés ideje: 2021.10.02 19:31

- Tesztelt rendszer: Nyelvváltás

- Rendszer amin a teszt végbement: Windows 10 Home 20H2, Opera (Hivatalos verzió) (64 bites)

- Kapott eredmény: Az oldal megfelelő 
        nyelvre vált át

- Várt eredmény: Az oldal megfelelő nyelvre vált át

- Teszt konkluzió: A nyelvváltás funkció Opera böngészőben megfelelően működik

- Egyéb megjegyzés: "Imperial" és "Metric" szavaknak nem adtunk magyar megfelelőt

### Átváltás tesztelése Opera böngészőben

- Tesztelő neve: Sándor Milán

- Teszelés ideje: 2021.10.02 19:36

- Tesztelt rendszer: Átváltás

- Rendszer amin a teszt végbement: Windows 10 Home 20H2, Opera (Hivatalos verzió) (64 bites)

- Kapott eredmény: A felület megfelelően váltja-e át a mértékegységeket

- Várt eredmény: A felület megfelelően váltja át a mértékegységeket

- Teszt konkluzió: Az átváltó funkció megfelelően működik

- Egyéb megjegyzés: A nyomás és hőmérséklet funkcióknál a mértékegység fül automatikusan, hossz méretre vált vissza, de ettől függetlenül, az átváltás választott mértékegységre megfelelő.

### Visszaváltás tesztelése Opera böngészőben 
- Tesztelő neve: Sándor Milán

- Teszelés ideje: 2021.10.02 19:39

- Tesztelt rendszer: Visszaváltás

- Rendszer amin a teszt végbement: Windows 10 Home 20H2, Opera (Hivatalos verzió) (64 bites)

- Kapott eredmény: A felület megfelelően váltja-e vissza az eredeti átváltást

- Várt eredmény: A felület megfelelően váltja vissza az eredeti átváltást

- Teszt konkluzió: Az visszaváltó funkció megfelelően működik

- Egyéb megjegyzés: