/*
	Antonin Riche
	16 octobre 2016
	Version 1.0	
*/

function getAttackName(attack){
	if(isChip(attack)){
		return getChipName(attack);
	}
	if(isWeapon(attack)){
		return getWeaponName(attack);
	}
	return null;
}
function getAttackArea(attack){
	if(isChip(attack)){
		return getChipArea(attack);
	}
	if(isWeapon(attack)){
		return getWeaponArea(attack);
	}
	return null;
}
function getAttackCost(attack){
	if(isChip(attack)){
		return getChipCost(attack);
	}
	if(isWeapon(attack)){
		return getWeaponCost(attack);
	}
	return null;
}
function canUseAttack(attack,leek){
	if(isChip(attack)){
		return canUseChip(attack,leek);
	}
	if(isWeapon(attack)){
		return canUseWeapon(attack,leek);
	}
	return null;
}
function useAttack(attack,leek){
	if(isChip(attack)){
		return useChip(attack,leek);
	}
	if(isWeapon(attack)){
		if(inArray(getWeapons(),attack)){
			if(attack != getWeapon()){
				if(getTP() < getWeaponCost(attack)+1 )return USE_NOT_ENOUGH_TP;
				setWeapon(attack);
			}
			return useWeapon(leek);
		}
	}
	return null;
}
function getAttackFailure(attack){
	if(isChip(attack)){
		return getChipFailure(attack);
	}
	if(isWeapon(attack)){
		return getWeaponFailure(attack);
	}
	return null;
}
function getAttackCooldown(attack){
	if(isChip(attack)){
		return getChipCooldown(attack);
	}
	if(isWeapon(attack)){
		return 0;
	}
	return null;
}
function getAttackEffects(attack){
	if(isChip(attack)){
		return getChipEffects(attack);
	}
	if(isWeapon(attack)){
		return getWeaponEffects(attack);
	}
	return null;
}

function getAttackValuePerUse(attack){
	//renvoi le nombre de dégat moyen possible par utilisation
	var dgt = 0.0;
	var TYPE=0, MIN = 1, MAX = 2;
	
	for(var effect in getAttackEffects(attack)){
		if(effect[TYPE] == EFFECT_DAMAGE){
			var d = effect[MIN]+(effect[MAX]+effect[MIN])/2;
			if(dgt<d){
				dgt = d;
			}
		}
	}
	var force = getForce();
	return dgt*((force/100)+1);
}

function getAttackValue(attack){
	//renvoi le nombre de dégat moyen possible en un tour
	var tp = getTP();
	var nb_use = floor(tp/getAttackCost(attack));
	nb_use = (getAttackCooldown(attack)>0)?1:nb_use;
	return getAttackValuePerUse(attack)*nb_use;
}

function getAttacks(){
	//retourne une liste d'attack trié par attackValue decroissant
	var attacks= getWeapons()+getChips();
	attacks = arraySort(attacks,function(value1,value2){
		var v1 = getAttackValue(value1);
		var v2 = getAttackValue(value2);
		var ret = (v1 > v2)?-1:((v1==v2)?0:1);
		return ret;
	});
	return attacks;
}

function attack_debug(){
	for(var atk in getAttacks()){
		debug(getAttackName(atk));
		debug("\tattackValue : "+getAttackValue(atk));
		debug("\tattackCost : "+getAttackCost(atk)+" TP");
		debug("\tattackValuePerUse : "+getAttackValuePerUse(atk));
		debug("\tattackCooldown : "+getAttackCooldown(atk));
		debug("");
	}	
}