var fixedrect,movingrect

function setup() {
  createCanvas(800,400);
 fixedrect = createSprite(400, 200, 50, 50);
 fixedrect.shapeColor = "white"
 movingrect=createSprite (600,200,50,50)
 movingrect.shapeColor=" blue"
}

function draw() {
  background("black");  
  movingrect.x=mouseX
  movingrect.y=mouseY
  if(movingrect.x-fixedrect.x <fixedrect.width /2+movingrect.width/2
    && fixedrect.x-movingrect.x < fixedrect.width/2+movingrect.width/2
    && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
    movingrect.shapeColor="red"
    fixedrect.shapeColor="red"
  }
  else{
    movingrect.shapeColor="blue"
    fixedrect.shapeColor="white"
  }

  drawSprites();
}