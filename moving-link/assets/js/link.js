var link = new Object();
link.x = 0;
link.y = 0;
link.deltaMove = 8;
link.row = 1;
link.col = 1;
link.direction = 'down';
link.isWalking = false;

link.refresh = function (){

    this.col++;
    if (this.col > 10)
        this.col = 1;
    switch(this.direction){
        case 'down' : 
           this.row = 1;        
            break;        
        case 'left' : 
         this.row = 2;
            break;
        case 'up' : 
          this.row = 3;
            break;
        default :   
          this.row = 4;  
            break;      
    }
    if (this.isWalking)
        this.row += 4;

    document.getElementById('link').style.top = this.y + 'px';
    document.getElementById('link').style.left = this.x + 'px';

    document.getElementById('link').style.backgroundPositionX = -(this.col-1)*60 + 'px';
    document.getElementById('link').style.backgroundPositionY = -(this.row-1)*65 + 'px';
}

link.moveLeft = function (){
    this.direction = "left";
    this.isWalking = true;
    this.x -= this.deltaMove;
}
link.moveRight = function (){
    this.direction = "right";
    this.isWalking = true;
    this.x += this.deltaMove;    
}
link.moveUp = function (){
    this.direction = "up";
    this.isWalking = true;
    this.y -= this.deltaMove;
}
link.moveDown = function (){
    this.direction = "down";
    this.isWalking = true;  
    this.y += this.deltaMove;
}
link.stop = function(){
    this.isWalking = false;
}