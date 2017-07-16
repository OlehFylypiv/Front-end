// "WorkWithDOM: The dynamic list creation"
function createList() {
	
	var ol = document.createElement('ol');
    document.body.appendChild(ol);

    while (true) {
      
      	var liText = prompt('Enter a text', 'Empty <li>');

      	if (!liText) {  // cancel click
        	break;
      	} 

      	var li = document.createElement('li');
      
      	li.appendChild(document.createTextNode(liText));
      	ol.appendChild(li);
    }
}