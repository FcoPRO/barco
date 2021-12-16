var mar, mar_img;
var barco, barco_img;

function preload(){
  mar_img=loadImage("sea.png");
  barco_img=loadAnimation("ship-1.png","ship-3.png");

}

function setup(){
  createCanvas(400,400);
  mar=createSprite(500,200,20,20);
  mar.addImage(mar_img);
  mar.scale=0.24;

  barco=createSprite(70,320,20,20);
  barco.addAnimation("swimming",barco_img);
  barco.scale=0.1

}

function draw() {
  background("black");

  mar.velocityX=-3;
  if(mar.x<0){
    mar.x=mar.x+400;
  }






  drawSprites();
}