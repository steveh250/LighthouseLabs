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
function gridSize() {
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
  console.log(colctr + " x " + rowctr);
}

gridSize();