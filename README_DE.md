# Grundlagen der Programmierung: Schleifen mit Arrays

* Arbeite mit der Datei `solution.js`, die du in diesem Repository findest.

## 1. sumOfNumbers
- Erstelle ein Programm, das die Zahlen in einem Array (mit mindestens 3 Zahlen) zusammenzählt.
- Es gibt das Ergebnis in folgendem Format auf dem Terminal aus: "Die Summe des Arrays ist [**Summe**]; das Produkt des Arrays ist [**Produkt**].".
- **Bonus**: Gib sowohl die Summe als auch das Produkt dieser Zahlen auf dem Bildschirm aus.

## 2. Hallo Freund
- Erstelle ein Array mit den Namen deiner Freunde und deiner Familie.
- Lass eine Schleife über das Array laufen und grüße jeden Freund in dem Format:  
"Hallo [Freund]!"
- Gib den Index jedes Elements im Array aus. Beispiel:
"[Freund] ist bei Index [i] in meinem Freunde-Array!"  
* [Maria, Mike, Paul, Doven] ➞ erwartete Ausgabe: "Hallo Maria! Hallo Mike! Hallo Paul! Hallo Doven!"

* [Susan, Rezvane, Hadi] ➞ erwartete Ausgabe: "Susan ist bei Index 0 meines Freunde- und Familien-Arrays, Rezvane ist bei Index 1 meines Freunde- und Familien-Arrays, Hadi ist bei Index 2 meines Freunde- und Familien-Arrays".

## 3. Städtenamen
- Erstelle ein Array mit Städtenamen mit dem Namen `cityArr`.
- Führe eine Schleife durch das Array und füge die Städtenamen in einen String ein.
- Gib den String auf dem Terminal aus
Beispiele:

* [Berlin, Paris, Prag, Rom] ➞ erwartete Ausgabe: "Berlin, Paris, Prag, Rom".

## 4. Gerade und Ungerade
- Schreibe eine Funktion namens `OddsEvens`, die ein gegebenes Array verändert, indem sie zu jeder ungeraden ganzen Zahl 1 addiert und von jeder geraden ganzen Zahl 1 subtrahiert.
- Sie sollte das neue Array zurückgeben
Beispiele:
* oddsEvens([3, 5, 2, 4]) ➞ erwartete Ausgabe: [4, 6, 1, 3]
* oddsEvens([6, 9, 10, 20]) ➞ erwartete Ausgabe: [5, 10, 9, 19]

## 5. Großschreiben
- Erstelle eine Funktion namens `capitalize`, die den ersten Buchstaben jedes Elements in einem Array von Namen groß schreibt.  
Beispiele:
* capitalize(["matt", "sara", "lara"]) ➞ ["Matt", "Sara", "Lara"]
* capitalize(["samuel", "MARIA", "luke", "mary"]) ➞ ["Samuel", "Maria", "Luke", "Mary"]
* capitalize(["Cynthia", "Karen", "Jane", "Carrie"]) ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

* **Hinweis:** Behalte die Namen in der gleichen Reihenfolge und achte darauf, dass nur der erste Buchstabe des Namens groß geschrieben wird (siehe "Maria" im zweiten Beispiel oben).
	
## 6. Keine Duplikate!
- Ein Set ist eine Sammlung von eindeutigen Elementen.
- Ein Set kann aus einem Array gebildet werden, indem alle doppelten Einträge entfernt werden.
- Schreibe eine Funktion namens `noDuplicates`, die ein Array in eine Menge eindeutiger Werte umwandelt. Siehe die folgenden Beispiele. 

Beispiel:
* noDuplicates([1, 4, 4, 7, 7, 7]) ➞ [1, 4, 7]

* noDuplicates([1, 6, 6, 9, 9]) ➞ [1, 6, 9]
* noDuplicates([2, 2, 2, 2, 2, 2]) ➞ [2]
* noDuplicates([5, 10, 15, 20, 25]) ➞ [5, 10, 15, 20, 25]

## 7. Wiederhole
- Schreibe eine Funktion namens `repeatItem`
- Die Funktion sollte einen String erstellen, bei dem die als erstes Argument übergebene Zeichenkette so oft wiederholt wird, wie es die Zahl im zweiten Argument angibt
- Die Funktion sollte das resultierende Array zurückgeben
 Beispiele:

* repeatItem("example", 3) ➞ ["example", "example", "example"]

## 8. Faktoren
- Eine Faktorkette ist ein Array, in dem jedes vorhergehende Element ein Faktor des nächstfolgenden Elements ist. Das Folgende ist eine Faktorkette:
[3, 6, 12, 36]

* // 3 ist ein Faktor von 6 (3 * 2 = 6)
* // 6 ist ein Faktor von 12 (6 * 2 = 12)
* // 12 ist ein Faktor von 36 (12 * 3 = 36)

Schreibe eine Funktion namens `isFactorChain`, die feststellt, ob ein gegebenes Array eine Faktorkette ist oder nicht. Beispiele:
* isFactorChain([1, 2, 4, 8, 16, 32]) ➞ true
* isFactorChain([1, 1, 1, 1, 1, 1]) ➞ true
* isFactorChain([2, 4, 6, 7, 12]) ➞ false
* isFactorChain([10, 1]) ➞ falsch
