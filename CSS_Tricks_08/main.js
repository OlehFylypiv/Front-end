const btn = document.querySelector('.btn');

const btnFront = btn.querySelector('.btn-front');
const btnYes = btn.querySelector('.btn-back .yes');
const btnNo = btn.querySelector('.btn-back .no');

btnFront.addEventListener( 'click', ( event ) => {
    
    let mx = event.clientX - btn.offsetLeft;
    let my = event.clientY - btn.offsetTop;

    let w = btn.offsetWidth;
    let  h = btn.offsetHeight;
    
    let directions = [
        { id: 'top', x: w / 2, y: 0 },
        { id: 'right', x: w, y: h / 2 },
        { id: 'bottom', x: w / 2, y: h },
        { id: 'left', x: 0, y: h / 2 }
    ];
  
    directions.sort( (a, b) => {
        return distance(mx, my, a.x, a.y) - distance(mx, my, b.x, b.y);
    });
  
    btn.setAttribute('data-direction', directions.shift().id );
    
    btn.classList.add( 'is-open' );
});

btnYes.addEventListener('click', (event) => {   
    btn.classList.remove('is-open');
});

btnNo.addEventListener('click', (event) => {
    btn.classList.remove('is-open');
});

function distance(x1, y1, x2, y2) {
    
    let dx = x1-x2;
    let dy = y1-y2;
    
    return Math.sqrt(dx * dx + dy * dy);
}