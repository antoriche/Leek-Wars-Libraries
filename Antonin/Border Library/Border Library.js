 global NORTH = 1;
 global EAST = 2;
 global SOUTH = 4;
 global WEST = 8;
 
function getBorderCells(b){
	var borders = b;
	if(borders == 0) borders = 15;
	if(borders <=0 || borders > 15)return;
	var border_cells = [];
	var c = 0;
	var width = 17;
	var borders_buffer = borders;
	
	for(var i = 0 ; i <= width ; i++){
		borders = borders_buffer; 
		
		//WEST
		if(borders >= WEST){
			border_cells[c] = i*35;
			c++;
			borders-=WEST;
		}
		
		//SOUTH
		if(borders >= SOUTH){
			border_cells[c] = 595+i;
			c++;
			borders-=SOUTH;
		}
		//EAST
		if(borders >= EAST){
			border_cells[c] = width+(i*35);
			c++;
			borders-=EAST;
		}
		//NORTH
		if(borders>=NORTH){
			border_cells[c] = i;
			c++;
			borders-=NORTH;
		}
	}
	
	if (borders != 0) {
		debugW("la fonction getBorderCells a terminé avec un résultat différent de 0 ! ("+borders+")");
	}
	
	return border_cells;
}

	var borders = getBorderCells(0);
	var min = 100;
	for(var cell in borders){
		if(dis < min){
			min = dis;
		}
	}
	return min;
}
