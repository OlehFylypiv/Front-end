// "WorkWithDOM: Funny switch radio-buttons"
function changeSmile() {
	
	var sad = document.getElementById('sad').checked;
	var happy = document.getElementById('happy').checked;
	
	if (sad === true) {
		document.getElementById('for_smile').style.background = 'url(sad.png)';
	}

	if (happy === true) {
		document.getElementById('for_smile').style.background = 'url(happy.png)';
	}
}