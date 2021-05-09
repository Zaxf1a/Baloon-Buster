var bow,redbaloon,greenbaloon,pinkbaloon,bluebaloon,bi,bowimage,background,gi,pi

var score=0





function preload(){
  backgroundimage=loadImage("background0.png")
 bi=loadImage("blue_balloon0.png")
  gi=loadImage("green_balloon0.png")
  bowimage=loadImage("bow0.png")
  pi=loadImage("pink_balloon0.png")
  ri = loadImage("red_balloon0.png")
  ai = loadImage("arrow0.png")
  

  
 //load your images here 
 
  
}


function setup() {
   createCanvas(600, 600);
background = createSprite(0,0,600,600)
  background.addImage(backgroundimage)
  background.x=background.width /2
  background.velocityX=-6
  background.scale=2.5
 
  bow = createSprite(460,200,10,10)
  bow.addImage(bowimage)
  

  
  
    
      
  
      

}

function draw() {
  bow.y=mouseY

  if(background.x<0){
    background.x=background.width/2
  }
  
  if(keyDown("space")){
    var temp_arrow = createArrow();
    temp_arrow.addImage(ai)
    temp_arrow.y=bow.y
  }
  
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon)
  
  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redbaloon();
    } else if (select_balloon == 2) {
      greenbaloon();
    } else if (select_balloon == 3) {
      bluebaloon();
    } else {
      pinkbaloon();
    }
  }

    
  
  //add code here
  drawSprites()
  text("Score:"+ score,270,30 )
 
}


function createArrow(){
  arrow = createSprite(360,100,5,10)
  arrow.velocityX=-6
  arrow.scale=0.3
  return arrow
}

function redbaloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(ri);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1
}

function bluebaloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(bi);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1
}

function greenbaloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(gi);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1
}

function pinkbaloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pi);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
}



































