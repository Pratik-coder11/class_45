var bgImage,ground
var spaceCraft,spaceCraftImg


function preload(){
bgImage = loadImage("images/background.jpg")
spaceCraftImg = loadImage("images/spacecraft.png")
}

function setup() {
  createCanvas(1600,800);
  

  ground = createSprite(1600,400,1600,800)
  ground.addImage("background",bgImage)
  //ground.scale = 0.5

  spaceCraft = createSprite(400,400,60,60)
  spaceCraft.addImage("spacecraft",spaceCraftImg)
  spaceCraft.scale = 0.2

}

function draw() 
{
  background(bgImage);
if(ground.x<700){
  ground.x = ground.width/2
}
  ground.velocityX = -3


  if(keyDown("up")){
    spaceCraft.y = spaceCraft.y-5
  }

  if(keyDown("down")){
    spaceCraft.y = spaceCraft.y+5
  }

  drawSprites();
}




