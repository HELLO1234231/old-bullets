var car,wall
var weight,speed

function setup() {
  createCanvas(1400,600);
  
  speed=random(55,190);
  weight=random(30,52);
  thickness=random(22,83)
  car = createSprite(250, 200, 50, 5);
  car.shapeColor=color(255);
  car.velocityX=speed;

  wall=createSprite(1000,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
  

}

function draw() {
  background(0); 
  if(hasCollided(car,wall)){
    car.velocityX=0
  }
if(wall.x - car.x <(car.width + wall.width)/2) 
{
  car.velocityX=0;
  var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
  if (damage>10)
  {
    wall.shapeColor=color("green");
  }
  if (damage<10)
  {
    wall.shapeColor=color("red");
  }
  
}
  drawSprites();
}

function hasCollided(icar,iwall){
  carrightEdge=icar.x+icar.width
  wallleftEdge=iwall.x
  if(carrightEdge>=wallleftEdge){
    return true
  }
  return false
}