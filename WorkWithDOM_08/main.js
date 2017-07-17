// "WorkWithDOM: Create a tree-list from the object"
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
      	container.appendChild(createTreeDom(obj));
    }


    function createTreeDom(obj) {
      	
      	if (isObjectEmpty(obj)) { 
      		return 0;
		}
      
      	var ul = document.createElement('ul');

      	for (var key in obj) {
       		
       		var li = document.createElement('li');
        	li.innerHTML = key;

        	var childrenUl = createTreeDom(obj[key]);
        
        	if (childrenUl) {
        		li.appendChild(childrenUl);
			}
        
        	ul.appendChild(li);
      	}

      	return ul;
    }


    function isObjectEmpty(obj) {
      	
      	for (var key in obj) {
        	return false;
      	}
      
        return true;
    }

    
    var container = document.getElementById('my-tree');
    
    createTree(container, obj);
}