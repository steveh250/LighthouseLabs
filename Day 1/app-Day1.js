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
function countRows() {
  /* Based loosely on https://www.w3resource.com/jquery-exercises/part1/jquery-practical-exercise-23.php */
  
  /* Function to return the rows */
  function rowCount() {
    /*return $('tr', $(this).find('tbody')).length;*/
    return GRID.length;
  }
  
  /* Define variable to hold number of rows and count the rows*/
  var rowctr = rowCount();
  
  /* Output rows to console */
  console.log(rowctr);
}

countRows();