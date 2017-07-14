// "WorkWithDOM: Highlight the incorrect links using loop"
function drawYellow() {

	var css = 'a[href*="://"]:not([href^="http://"])';
    var links = document.querySelectorAll(css);

    for (var i = 0; i < links.length; i++) {
      	links[i].classList.add('external');
    }
}