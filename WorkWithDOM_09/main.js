// "WorkWithDOM: Using innerHTML create a tree-list from the object"
function createTreeFromObj() {
	
	var obj = {
    	
    	'Fish': {
        	'Trout': {},
        	'Carp': {}
      	},

      	'Trees': {
        	'Coniferous': {
          		'Spruce': {},
          		'Fir': {}
        	},
        	
        	'Leafy': {
          		'Oak': {},
          		'Linden': {}
        	}
      	}
    };


    function createTree(container, obj) {
      	container.innerHTML = createTreeText(obj);
    }

    function createTreeText(obj) { 
      
      	var li = '';
      
      	for (var key in obj) {
        	li += '<li>' + key + createTreeText(obj[key]) + '</li>';
      	}
      
      	if (li) {
        	var ul = '<ul>' + li + '</ul>'
      	}
      
      	return ul || '';
    }


    var container = document.getElementById('my-tree');
    
    createTree(container, obj);
}