# Border Library

## Liste des fonctions
* getBorderCells(b)
* getDistanceFromBorder(c)


## getBorderCells(b)
La fonction retourne un tableau contenant les cellules des bordures.

Le param�tre b permet de sp�cifier les bordures � renvoyer :
* 0 renvoi toutes les bordures
* NORTH renverra la bordure Nord
* EAST renverra la bordure Est
* SOUTH renverra la bordure Sud
* WEST renverra la bordure Ouest

Il est possible de selectionner plusieurs bordures avec l'op�rateur +

Par exemple, le code si dessous renverra les bordures Nord et Est


    getBorderCells(NORTH+EAST);