function animation() {
  
    var element = document.getElementById('animate');   
    var position = 0;
  
    var id = setInterval(frame, 5);
  
    function frame() {
        
        if (position == 350) {
            clearInterval(id);
        } 
        else {
            position++; 
        
            element.style.top = position + 'px'; 
            element.style.left = position + 'px'; 
        }
    }
}