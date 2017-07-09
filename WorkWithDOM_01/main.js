// "WorkWithDOM: Select the cells of the table diagonally"
function draw() {

	var table = document.body.children[0];

    for (var i = 0; i < table.rows.length; i++) {
      	
      	var row = table.rows[i];
      	row.cells[i].style.background = 'blue';
    }
}