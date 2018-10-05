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

/* Function to grid */
function totalCells() {
  /* Based loosely on https://www.w3resource.com/jquery-exercises/part1/jquery-practical-exercise-23.php */
  
  /*********************************************/
  /* Function to return the cols */
  function countColumns() {
    return GRID[0].length;
  }
  
  /* Define variable to hold number of cols and count the cols*/
  var colctr = countColumns();
  
  /*********************************************/
  /* Function to return the rows */
  function countRows() {
    return GRID.length;
  }
  
  /* Define variable to hold number of rows and count the rows*/
  var rowctr = countRows();

  /* Output cols to console */
  console.log(colctr*rowctr);
}


function convertColumn(coordinate){

	console.log(coordinate);

	/* Split the cell location into two to get the first character which should be A-Z or a-z */
	/* Could add some error checking here to make sure it's between A-Z or a-z */
	coordinate.split("");
	columnOnly = coordinate[0];

	/* Convert it to uppercase */
	columnOnly = columnOnly.toUpperCase();

	/* Get the array location based on the ASCII value */
	columnLocation = columnOnly.charCodeAt(0) - 65;

	/* Return the array location */
	return(columnLocation);

}
/* Comment out totalCells for now */
/* totalCells(); */
convertColumn();