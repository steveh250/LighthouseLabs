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

function isShip(coordinate){

	column=coordinate[0];
	row=coordinate.substring(1)-1;

	/* Convert it to uppercase in case its lower and do the math to convert to array location */
	column = column.toUpperCase();
	column = column.charCodeAt(0) - 65;

      /* Check if we have a ship v at the coordinates */
      if (GRID[row][column] == "v") {
            return(true);
      } else {
            return(false);
      }
}

isShip();