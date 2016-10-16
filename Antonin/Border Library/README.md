# Border Library

## Liste des fonctions
* [getBorderCells(b)] (#getBorderCells)
* [getDistanceFromBorder(c)] (#getDistanceFromBorder)


## getBorderCells(b) {#getBorderCells}
La fonction retourne un tableau contenant les cellules des bordures.

Le paramètre b permet de spécifier les bordures à renvoyer :
* 0 renverra toutes les bordures
* NORTH renverra la bordure Nord
* EAST renverra la bordure Est
* SOUTH renverra la bordure Sud
* WEST renverra la bordure Ouest

Il est possible de selectionner plusieurs bordures avec l'opérateur +

Par exemple, le code si dessous renverra les bordures Nord et Est


    getBorderCells(NORTH+EAST);


## getDistanceFromBorder(c) {#getDistanceFromBorder}
La fonction retourne le nombre de case entre la case *c* et la bordure la plus proche
