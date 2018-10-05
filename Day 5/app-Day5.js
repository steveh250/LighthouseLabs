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


function convertColumn(cellCoordinate){

	var cellCoordinate = "c4";
	console.log(cellCoordinate);

	/* Split the cell location into two to get the first character which should be A-Z or a-z */
	var locationString = cellCoordinate.split("");
	var columnOnly = locationString[0];
	console.log(columnOnly);

	/* Convert it to lowercase */
	columnOnly = columnOnly.toUpperCase();
	console.log(columnOnly);

	/* Get the array location based on the ASCII value */
	var columnLocation = columnOnly.charCodeAt(0) - 65;
	console.log(columnLocation);


}

totalCells();
convertColumn();