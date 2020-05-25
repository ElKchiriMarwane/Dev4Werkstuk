# Dev4Werkstuk

## Design

Voor de design probeerde ik een nieuwe look te geven aan de website, ik bewaar wel de zelfde kleuren.

## Code

Voor de code, gebruik ik pure JS.

Ik maak een fetch call naar de json file, wanneer ik dit doe call ik de 
#### AppendData(data) methode.
Hier itereer ik over de response en maak een html element voor elk element in de response dankzij de 
#### CreateElement(category,genre,name,place,thumbnail) methode.
In deze functie heb ik een object met alle nodige html elementen.
In dit object heb ik ook een assemble() methode. Deze methode groupeert alle element samen.
Wanneer de user op de grote div drukt, wordt hij naar de detailpagina gestuurd met de id in de url.

### Search
Voor de zoekbalk haal ik de value van de input, daarna itereer ik over mijn data, als de naam van een element de letters van de value hebben, maak je dan een html-element met de CreateElement() methode.

### Filter
Wanneer de user op een genre klikt, maak ik de filtered array leeg. Ik itereer over mijn data, als de genre van een element gelijk is aan de genre van de user, push je die in de array.
Hierna, itereer ik over mijn filtered array, voor elk element maak ik een html-element.
Voor de categories is het exact dezelfde principe.
Wanneer de user op "Wissen" drukt. Maak ik de filtered array terug leeg.

## Detailpagina
Hier haal ik de id van de url dankzij de getUrlVars() methode. Dit kan dankzij de regular expression.
Dan zoek ik in de entries.json een element waar de id gelijk is aan de naam. Dan maak ik een html element dankzij de CreateElement() methode.

# Wat kon er beter
Wanneer de user op een doelgroep drukt, push ik alle elementen uit mijn entries.json de filtered array, maar wanneer ik op een genre druk, wordt de filtered array gecleared. Wat beter kon, dat wanneer ik op een genre druk. Dat ik eerst kijk of mijn filtered array leeg is, als het niet leeg is, filter ik dan de filtered array.
