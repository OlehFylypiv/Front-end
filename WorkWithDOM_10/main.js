// "WorkWithDOM: Find the number of embedded elements in the list"
function calculateEmbeddedElements() {

	var lis = document.getElementsByTagName('li');

    for (i = 0; i < lis.length; i++) {
      
    	var childCount = lis[i].getElementsByTagName('li').length;
      
      	if (!childCount) {
      		continue;
      	}

      	lis[i].firstChild.data += ' {' + childCount + '}';
	}
}