var timer = window.setInterval(refresh, 100);
function refresh(){
    link.refresh();
}

document.addEventListener("keydown", keyDown);
function keyDown(evt){

    switch(evt.key){
        case "ArrowRight":
            link.moveRight();
            break;
        case "ArrowLeft":
            link.moveLeft();
            break;
        case "ArrowUp":
            link.moveUp();
            break;
        case "ArrowDown":
            link.moveDown();
            break;     
        default:
            break;                                           
    }
}

document.addEventListener("keyup", keyUp);
function keyUp(evt){
    link.stop();
}
