//obtém referência para o objeto que deve ser movido
const pontinho = document.getElementById("pontinho");

//valores da posição inicial
pontinho.style.left= 0;
pontinho.style.top= 0;

function move(direcao){
    //valores atuais do pontinho
    let left = parseInt(pontinho.style.left);
    let top = parseInt(pontinho.style.top);

    switch(direcao){
        case 38: 
        case "^": 
        top = top - 30;
            break;
        case 40: 
        case "v": 
        top = top + 30;
            break;
        case 37: 
        case "&lt;": 
        left = left - 30;
            break;
        case 39: 
        case "&gt;": 
        left = left + 30;
            break;
        default:
            console.log(direcao);
    }
        pontinho.style.top = top + "px";
        pontinho.style.left = left + "px";
}

document.body.onkeydown = function(tecla){
    move(tecla.keyCode);
}