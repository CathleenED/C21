var fixedRect, movingRect;
var car 
var wall
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
movingRect.velocityX=4
  car = createSprite(200, 300, 50, 80);
  car.shapeColor = "green";
car.velocityX=3

wall = createSprite(500, 300, 50, 80);
wall.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

 if (isTouching(car,wall)) {
   car.shapeColor="pink"
 }

 //bounceoff(movingRect,fixedRect)
 collide(movingRect,fixedRect);
  drawSprites();
}

