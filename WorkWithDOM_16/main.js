// "WorkWithDOM: Sotr a table on the mouse click"
function sortTable() {

	var grid = document.getElementById('grid');

    grid.onclick = function(e) {
      	
      	if (e.target.tagName != 'TH') {
      		return 0;
		}
      	
      	sortGrid(e.target.cellIndex, e.target.getAttribute('data-type'));
    };


    function sortGrid(colNum, type) {
      	
      	var tbody = grid.getElementsByTagName('tbody')[0];

      	var rowsArray = [].slice.call(tbody.rows);

      	var compare;

      	switch (type) {
        	case 'number':
          		compare = function(rowA, rowB) {
            		return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
          		};
          		
          		break;
        	case 'string':
          		compare = function(rowA, rowB) {
            		return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
          		};
          
          		break;
        }

      	rowsArray.sort(compare);

      	grid.removeChild(tbody);

      	for (var i = 0; i < rowsArray.length; i++) {
        	tbody.appendChild(rowsArray[i]);
      	}

      	grid.appendChild(tbody);
    }
}