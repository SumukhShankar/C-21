var fixedRect, movingRect;
var car1,car2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car1 = createSprite(200,100,50,50);
  car1.shapeColor = "blue";
  car1.debug = true;
  car1.velocityX = 1;

  car2 = createSprite(600,100,50,50);
  car2.shapeColor = "yellow";
  car2.debug = true;
  car2.velocityX = -1;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  
  bounceOff(car1,car2);

  drawSprites();
}

