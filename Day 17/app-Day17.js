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


function allShips(){

	/* Array to store the ships - shipArray */
	var shipArray = [];

	/* The length of the array */
	var noOfRows =rowCount();
	var outsideCount=0;

	/* For all rows in GRID -the array */
	for (outsideCount=0; outsideCount<noOfRows; outsideCount++) {

		/* For all elements in columns of the array row we are working on - allow for uneven columns if need be*/
		var insideCount=GRID[outsideCount].length;

		/*Loop through ever element of this row of the array */
		for (i=0; i<insideCount; i++) {
			if (GRID[outsideCount][i] == "v"){
				/* We found a ship */
				/* Row is a number so add 1*/
				var foundRow=outsideCount+1;
				
				/* Column is a letter so index needs to be converted*/
				var foundColumn = String.fromCharCode(i + 65);
				
				/* Add the location to the end of the array */
				shipArray.push(foundColumn.concat(foundRow));
			}
		}
	}

	/* All rows are processed lets return the array */
	return(shipArray);
}

function shipReport(){
	/* Populate an array with all the ships*/
	var allOfTheShips=allShips();
	
	/* Array to return with the ships*/
	var firstAndLastShipArray = [];

	/* Get the first */
	firstAndLastShipArray.push(allOfTheShips[0]);

	/* Get the last*/
	firstAndLastShipArray.push(allOfTheShips[allOfTheShips.length-1]);	

	/*Return the first and last ship array */
	return(firstAndLastShipArray);
}

shipReport();