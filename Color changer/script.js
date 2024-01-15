const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach (function (button){
    button.addEventListener("click", function(e){
    
    let color =  e.target.id;
    if(color === 'grey'){
        body.style.backgroundColor = color;
    }
    else if(color === 'blue'){
        body.style.backgroundColor = color;
    }
    else if(color === 'white'){
        body.style.backgroundColor = color;
    }
    else if(color === 'yellow'){
        body.style.backgroundColor = color;
    }
    else if(color === 'black'){
        body.style.backgroundColor = color;
        button.style.border = 'solid white 2px';
    }
    });
});