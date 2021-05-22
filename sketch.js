var car,wall;
var speed,weight;
var deformation;
deformation =0;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  car.shapeColor="white"
   wall=createSprite(1500,200,60,202)
   wall.shapeColor=80,80,80;
  speed=random(55,90);
 weight=random(400,1500);

  car.velocityX=5;
  car.debug=true;
  
}

function draw() {
  background("cyan");  
    if (isTouching(car,wall)){
    car.shapeColor = "red";
    wall.shapeColor = "red";
    text(deformation,1400,20)
    deformation=0.5*weight*speed*speed/22500  
  }
  else {
    car.shapeColor = "white";
    wall.shapeColor = 80,80,80;
  }
  if (deformation<100){
    car.shapeColor="green"
   // car.velocityX=0;
  }else if (deformation=100,180){
    car.shapeColor="yellow"
    car.velocityX=0;
  } else {deformation>180 
    car.shapeColor="red"
    car.velocityX=0;
  }

  isTouching(car,wall)
   
  drawSprites();
}