var bg;
function preload(){
shipAnimation = loadAnimation("ship1.png", "ship2.png");
  
  seaImg= loadImage("sea.png");
}


function setup(){
  createCanvas(400,400);
  bg= createSprite(200,200,40,40);
  bg.addImage(seaImg);
  bg.scale=0.24;
  
  ship= createSprite(150,200);
  ship.addAnimation("any",shipAnimation);
  ship.scale=0.2;
  
}

function draw() {
  background("blue");
 bg.velocityX=-3;
  if(bg.x<0){
    bg.x=200; //half of the canvas size-width
  }
  
  
  drawSprites();
}