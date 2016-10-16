# Border Library

## Liste des fonctions
* getBorderCells(b)
* getDistanceFromBorder(c)


## getBorderCells(b)
La fonction retourne un tableau contenant les cellules des bordures.

Le paramètre b permet de spécifier les bordures à renvoyer :
* 0 renvoi toutes les bordures
* NORTH renvoi la bordure Nord
* EAST renvoi la bordure Est
* SOUTH renvoi la bordure Sud
* WEST renvoi la bordure Ouest

Il est possible de selectionner plusieurs bordures avec l'opérateur +

Exemple : *getBorderCells(NORTH+EAST)* renverra les bordures Nord et Est