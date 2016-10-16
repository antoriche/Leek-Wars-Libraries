# Attack Library

Une **attack** représente soit une *chip* soit une *weapon*.

Cela permet de mélanger ces deux élément et sans avoir à se soucier lequel est manipulé.

## Liste des fonctions
* getAttackValuePerUse(attack)
* getAttackValue(attack)
* getAttacks()
* getAttackName(attack)
* getAttackArea(attack)
* getAttackCost(attack)
* canUseAttack(attack,leek)
* useAttack(attack,leek)
* getAttackFailure(attack)
* getAttackCooldow(attack)
* getAttackEffects(attack)
* attack_debug()

##  getAttackValuePerUse(attack)
Renvoi les dégats moyen lors de l'utilisation d'une attaque

> les coûts critiques et les échecs ne sont pas pris en compte

##  getAttackValue(attack)
Renvoi les dégats moyen lors de l'utilisation d'une attaque en fonction de leurs coûts et de leur temps de recharge

##  getAttacks()
Renvoi toutes les attaques d'un poireau trié de maniere décroissante en fonction de leur getAttackValue

##  getAttackName(attack)
Renvoi le nom d'une attaque

##  getAttackArea(attack)
Renvoi la portée d'une attaque

##  getAttackCost(attack)
Renvoi le coût d'une attaque

##  canUseAttack(attack,leek)
Renvoi si l'attaque peut être utilisée sur le poireau *leek*

##  useAttack(attack,leek)
Utilise l'attaque sur le poireau *leek*

> si l'attaque est une *weapon*, le changement se fait automatiquement

##  getAttackFailure(attack)
**cette fonction est déprécié**

Renvoi sur une echelle de 1 à 100 le pourcentage d'échec de l'utilisation d'attack

##  getAttackCooldow(attack)
Renvoi le temps de chargement de l'attaque tel que dans le marché

##  getAttackEffects(attack)
Renvoi les effets de l'attaque

> se référer à la fonction *getWeaponEffects*

##  attack_debug()
Affiche dans la console (debug) toutes les informations des attacks du poireau