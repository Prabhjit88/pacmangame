var pacman;
var pacmanrImage;
var pacmanlImage;
var pacmanuImage;
var pacmandImage;
var line1,line2,line3,line4,line5,line6,line7,line8,line9,line10;
function preload(){
  pacmanrImage= loadImage("bgrightpacman.png")
  pacmanlImage= loadImage("bgleftpacman.png")
  pacmandImage= loadImage("bgdownpacman.png")
  pacmanuImage= loadImage("bguppacman.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //pacman=createSprite(width-200,height-300)
  //pacman.scale=.3     
  
  
}

function draw() {
    background("white");
    fill("black");
    line(0,20,100,200);

    drawSprites();
}