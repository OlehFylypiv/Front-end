// "WorkWithDOM: Find the all <li> items and the all embedded <li>"
function go() {
	
	var list = document.getElementsByTagName('li');

    for (var i = 0; i < list.length; i++) {
    	
    	var title = list[i].firstChild.data;

		var childCount = list[i].getElementsByTagName('li').length;

      	var p = document.createElement('p');
      	
      	document.body.appendChild(p);
      	
      	document.body.lastChild.innerHTML = title.trim() + ': ' + childCount;
    }
}