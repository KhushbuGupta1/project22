var garden,gardenImage;
var cat, catImage1;
var mouse, mouseImage1;
function preload() {
    //load the images here
    garden = loadImage("garden.png")
catImage1 = loadImage("cat1.png");
    catImage2 = loadAnimation("cat2.png","cat3.png");
    catImage4 = loadAnimation("cat4.png")
    mouseImage1 = loadImage("mouse1.png");
    mouseImage2 = loadAnimation("mouse2.png","mouse3.png");
    mouseImage4 = loadImage("mouse4.png");

}

function setup(){
    createCanvas(800,600);
    //create tom and jerry sprites here
    // garden = createSprite (350,350,600,350);
     //garden.addImage(gardenImage);
    // garden.scale = 0.7

     cat = createSprite (650,500);
     cat.addImage(catImage1)
     cat.scale = 0.07;

    mouse = createSprite (250,500);
     mouse.addImage(mouseImage1)
    mouse.scale = 0.07;

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide

    if (cat.x - mouse.x <(cat.width - mouse.width)/2){

        cat.velocityX =0;
        cat.addAnimation("shocking",catImage4);
        cat.changeAnimation("shocking");
        cat.x = 300;

        mouse.addAnimation("win",mouseImage4);
        mouse.changeAnimation("win");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode=== LEFT_ARROW){

    cat.velocityX = -3;
    cat.addAnimation("cat-running", catImage2)
    cat.changeAnimation("cat-running")
    mouse.addAnimation("mouse-teasing", mouseImage2);
mouse.changeAnimation("mouse-teasing");
mouse.frameDelay = 25;
  }


}
