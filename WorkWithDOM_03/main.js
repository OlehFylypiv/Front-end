// "WorkWithDOM: Draw a circle in a HTML5 (Canvas)"
function drawCircle() {
    
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    ctx.beginPath();
    ctx.arc(150, 75, 50, 0, 2*Math.PI, false);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'yellow';
    ctx.stroke();
}