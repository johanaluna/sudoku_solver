



  function listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    return matrix;
}
var a = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];

// var matrix = matrixify(a, 2, 4);
  
  function test() {
	
	var matrix = listToMatrix(a, 9);
  
	
  
	//display the solved sudoku numbers
	z = 0;
	for (i = 0; i < matrix.length; i++) {
	  for (j = 0; j < matrix[i].length; j++) {      
		//display the solved sudoku numbers
		form[z].value = matrix[i][j];
		z++;
	  }
	}
  }
  
  function populateTable() {
	var i, j, tr, td, input,
		table = document.querySelector('form#sudoku table'),
		tbody = document.createElement('tbody');
	table.appendChild(tbody);
	for (i = 0; i < 9; i++) {
	  tr = document.createElement('tr');
	  tbody.appendChild(tr);
	  for (j = 0; j < 9; j++) {            
		td = document.createElement('td');
		tr.appendChild(td);
		input = document.createElement('input');
		input.type = 'text';
		input.size = 1;
		td.appendChild(input);
	  }
	}
	document.querySelector('input[value=Solve]')
	  .addEventListener('click', test);
  }
  
  populateTable();