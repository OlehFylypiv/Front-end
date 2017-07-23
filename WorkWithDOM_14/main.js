// "WorkWithDOM: Create a simple drop-down list (menu)"
function dropMenu() {

	var menuElem = document.getElementById('sweeties');
    var titleElem = menuElem.querySelector('.title');

    titleElem.onclick = function() {
      	menuElem.classList.toggle('open');
    };
}