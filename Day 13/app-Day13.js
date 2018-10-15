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


function allRocks(){

	/* Array to store the rocks - rockArray */
	var rockArray = [];

	/* The length of the array */
	var noOfRows =rowCount();
	var outsideCount=0;

	/* For all rows in GRID -the array */
	for (outsideCount=0; outsideCount<noOfRows; outsideCount++) {

		/* For all elements in columns of the array row we are working on - allow for uneven columns if need be*/
		var insideCount=GRID[outsideCount].length;

		/*Loop through every element of this row of the array */
		for (i=0; i<insideCount; i++) {
			if (GRID[outsideCount][i] == "^"){
				/* We found a rock */
				/* Row is a number so add 1*/
				var foundRow=outsideCount+1;
				
				/* Column is a letter so index needs to be converted*/
				var foundColumn = String.fromCharCode(i + 65);
				
				/* Add the location to the end of the array */
				rockArray.push(foundColumn.concat(foundRow));
			}
		}
	}

	/* All rows are processed  lets return the array */
	return(rockArray);
}

function allCurrents(){

	/* Array to store the currents - currentArray */
	var currentArray = [];

	/* The length of the array */
	var noOfRows =rowCount();
	var outsideCount=0;

	/* For all rows in GRID -the array */
	for (outsideCount=0; outsideCount<noOfRows; outsideCount++) {

		/* For all elements in columns of the array row we are working on - allow for uneven columns if need be*/
		var insideCount=GRID[outsideCount].length;

		/*Loop through every element of this row of the array */
		for (i=0; i<insideCount; i++) {
			if (GRID[outsideCount][i] == "~"){
				/* We found a current */
				/* Row is a number so add 1*/
				var foundRow=outsideCount+1;
				
				/* Column is a letter so index needs to be converted*/
				var foundColumn = String.fromCharCode(i + 65);
				
				/* Add the location to the end of the array */
				currentArray.push(foundColumn.concat(foundRow));
			}
		}
	}

	/* All rows are processed  lets return the array */
	return(currentArray);
}