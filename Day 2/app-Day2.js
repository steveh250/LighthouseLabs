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

/* Function to count rows */
function countColumns() {
  /* Based loosely on https://www.w3resource.com/jquery-exercises/part1/jquery-practical-exercise-23.php */
  
  /* Function to return the rows */
  function colCount() {
    return GRID[0].length;
  }
  
  /* Define variable to hold number of rows and count the rows*/
  var colctr = colCount();
  
  /* Output rows to console */
  console.log(colctr);
}

countColumns();