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


function howDangerous(cellSymbol){
      /* Check if its a rock and return */
      if (cellSymbol == '^'){
            return(100);
      }
      /* Check is its current */
      if (cellSymbol == '~'){
            return(50);
      }
      /* Must be safe */
      return(0);
      
}

function safetyReport(){

      /* For every row on the GRID */
      var safetyReportGRID = GRID.map(row => {

            /* ... run howDangerous and add to safetyReportGRID */
            return row.map(columnCell => howDangerous(columnCell));
      })
      console.log(safetyReportGRID);
      return safetyReportGRID;
}

safetyReport();