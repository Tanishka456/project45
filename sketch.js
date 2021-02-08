var boy ;
var boyImage;

var backgroundImage;

function preload(){

  boyImage = loadImage("boy.png");
  backgroundImage = loadImage("game.jpg");
}

function setup(){
createCanvas(800,800);

boy = createSprite(200,750,10,10);
boy.addImage("boy",boyImage);
boy.scale = 0.2;
}

function draw(){
background(backgroundImage);

if(keyDown(UP_ARROW)){

boy.y = boy.y-2;
}

if(keyDown(DOWN_ARROW)){

  boy.y =boy.y+2;
}

if(keyDown(LEFT_ARROW)){

  boy.x = boy.x-2;
}

if(keyDown(RIGHT_ARROW)){

  boy.x = boy.x+2;

}

//if(keyDown("space")){

 // boy.velocityY = -5;


//}

//boy.velocityY = boy.velocityY +0.5;


drawSprites();
}