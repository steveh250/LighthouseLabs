const GRID = [
      ["", "", "", "^", "", "", "", "", "", ""],
      ["", "", "v", "", "~", "", "", "", "", ""],
      ["", "v", "", "", "^", "^", "", "", "", ""],
      ["", "", "", "", "^", "^", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "v", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "^", "~", "~", "", "", "", "^", "", ""],
      ["", "^", "", "~", "~", "", "", "", "", ""],
      ["", "^", "", "", "~", "~", "", "", "", ""],
    ];

function lightCell(coordinate){

	column=coordinate[0];
	row=coordinate.substring(1)-1;

	/* Convert it to uppercase in case its lower and do the math to convert to array location */
	column = column.toUpperCase();
	column = column.charCodeAt(0) - 65;

	/* Check if the column length is out of bounds */
	if (column > GRID.length){
		return(flase);
	}
	
	/* Check if the row length is out of bounds */
	if (row > GRID.length[0]){
		return(false);
	}

	/* Return the array contents */
	return(GRID[row][column]);
}

lightCell();