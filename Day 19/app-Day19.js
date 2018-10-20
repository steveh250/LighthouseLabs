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


function percentageReport(){


      /* Variables */
      var percentageReportArray = []; /* Array to return */
      var totalCellsInArray=0; /* Total number of cells in array */
      var totalRocksInArray=0; /* Total number of rocks in array */
      var percentRocksInArray; /* Percentage of rocks in array */
      var totalCurrentsInArray=0; /* Total number of current in array */
      var percentCurrentsInArray; /* Percentage of currents in array */


      /* The length of the array */
      var noOfRows =rowCount();
      var outsideCount=0;

      /* For all rows in GRID -the array */
      for (outsideCount=0; outsideCount<noOfRows; outsideCount++) {

            /* For all elements in columns of the array row we are working on - allow for uneven columns if need be*/
            var insideCount=GRID[outsideCount].length;

            /*Loop through every element of this row of the array */
            for (i=0; i<insideCount; i++) {

                  /* Increment the total cells counter */
                  totalCellsInArray++;

                  /* Look for rocks */
                  if (GRID[outsideCount][i] == "^"){
                        /* We found a rock */
                        /* Increment the rock counter */
                        totalRocksInArray++;
                  }
                  /* Look for currents */
                  if (GRID[outsideCount][i] == "~"){
                        /* We found a current */
                        /* Increment the current counter */
                        totalCurrentsInArray++;
                  }
            }
      }

      /* Finished processing all the rows in the array - calculate the percentages oF rocks and currents and add to array */
      /* Lets do rocks first */
      percentRocksInArray=(totalRocksInArray/totalCellsInArray)*100;
      percentageReportArray.push(percentRocksInArray.toFixed(2));
      /* Coordinates next */
      percentCurrentsInArray=(totalCurrentsInArray/totalCellsInArray)*100
      percentageReportArray.push(percentCurrentsInArray.toFixed(2));

      /* Return the array */
      return(percentageReportArray);
}

percentageReport();
