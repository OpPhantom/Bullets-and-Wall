var bullet,wall,thickness;
var speed,weight;
function setup() {
  createCanvas(1400, 400);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,200,60,15);
  bullet.shapeColor = "white";
  thickness = random(22,83);
  wall = createSprite(1300,200,thickness,height / 2);
  wall.shapeColor = 80,80,80;
  bullet.velocityX = speed;
  }
  
  function draw() {
    background(220);
    if(hasCollided(bullet,wall)){
      var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
      if(damage > 10){
        wall.shapeColor = color(255,0,0);
      }

      if(damage < 10){
        wall.shapeColor = color(0,255,0);
      }
    }
    drawSprites();
  }