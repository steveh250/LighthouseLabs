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


/* Function to return the rows */
 function rowCount() {
   return GRID.length;
 }

function lightColumn(column){

	/* Array to hold the output */
	var outputColumn = [];

	/* Convert column to uppercase in case its lower and do the math to convert to array location */
	column = column.toUpperCase();
	column = column.charCodeAt(0) - 65;

    /* Work down the column for the length of the colum */
	var count = rowCount();
	var i;
	for (i = 0; i < count; i++) {
		outputColumn.push(GRID[i][column]);
	}

	return (outputColumn);
}

lightColumn('C');