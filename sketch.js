var wall,car
var speed,weight

function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  car = createSprite(50,200,50,50)
  wall = createSprite(1500,200,60,height/2)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  car.shapeColor = 'green'
  car.collide(wall)
  if (keyDown(RIGHT_ARROW)){
car.velocityX = speed
}
  if (car.isTouching(wall)&speed+weight<700){
text('Safe :)',150,200)
}
  if (car.isTouching(wall)&speed+weight<1100&speed+weight>701){
text('Average :|',150,200)
car.shapeColor = 'yellow'
}
  if (car.isTouching(wall)&speed+weight>1101){
text('Lethal :(',150,200)
car.shapeColor = 'red'
}
}