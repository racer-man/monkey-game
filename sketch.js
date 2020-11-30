  //gamestates

  var PLAY = 1;
  var END = 0;
  var gameState = PLAY;
  //creating var
  var monkey, monkey_running, monkey_collided,monkeyScream;
  var ground, invisibleGround, groundImage;
  var obstaclesGroup, obstacle1,obstacles;
  var bananaGroup,banana,bananaImage
  var survival,survivalLimit;
  var gameOverImg,restartImg;
var sun,sunImage;

  function preload(){
  monkey_running =  loadAnimation("monkey_0.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png");

    monkey_collided = loadImage("monkey_1.png");

    restartImg = loadImage("reset image.jpg");
  gameOverImg = loadImage("game o.jpg");
 obstacle1 = loadImage("obstacle.png");
sunImage = loadImage("sun.jpg");
    bananaImage = loadAnimation("banana.png");
    
  }

  function setup(){
    createCanvas(700,300);

    obstaclesGroup = createGroup();
    bananaGroup = createGroup();
    
  star = createSprite(600,90,32,32);
    star.addImage("sun.jpg",sunImage);
     star.scale = 0.9;

   ground = createSprite(0,290,2050,32);
    ground.shapeColor = "green";
    ground.velocityX = -4;
  ground.x=ground.width/2;


       animal = createSprite(80,250,15,23); animal.addAnimation("monkey",monkey_running);
  animal.scale =0.1;  
    
    survival = 0;
  }
    function draw(){

      //erasing the screen all the time.
  background(44,156,900);
    stroke("black");
      fill("black");
      textSize(20);
text("Score:"+  survival, 0, 30);
      
      animal.collide(ground);
      // giving the gameStates their place
      if(gameState === PLAY){
    roadBlock();
    food();
 svrvival = survival + Math.round(getFrameRate()/60);

animal.changeAnimation("monkeMath.round(getFrameRate()/60);y_running");
        
        
        if (ground.x < 0){
        ground.x = ground.width/2;
}      
        if(keyDown("space")){
          animal.velocityY = -9;
        }
        //adding gravity
animal.velocityY = animal.velocityY + 
0.8;
        
        if (frameCount%290 === 0){
  rocks = createSprite(700,257,32,32);
  rocks.velocityX = -4

  rocks.addImage("obstacles",obstacle1)
    rocks.lifetime = 200;
  rocks.scale = 0.2;
        }
          if(frameCount%100 === 0){
    fruit = createSprite(680,257,51,15);
  fruit.addAnimation("banana",bananaImage)
 fruit.scale = 0.1;
  fruit.velocityX = -4;
  fruit.lifetime = 200;
}  //       
if(animal.isTouching(bananaGroup)){
  survival ++;
  bananaGroup.destroyEach();
}
}if(obstaclesGroup.isTouching(monkey)){
  gameState === END;
}else if(gameState === END){
  ground.velocityX = 0;
  
  monkey = 80;
  monkey.scale = 0.1;
  monkey.changeAnimation("collided",monkey_collided);
}


//drawing the sprites
      drawSprites();
    }
    
function roadBlock(){
// adding rocks
if (frameCount%290 === 0){
  rocks = createSprite(700,257,32,32);
  rocks.velocityX = -4

  rocks.addImage("obstacles",obstacle1)
    rocks.lifetime = 200;
  rocks.scale = 0.2;
obstaclesGroup.add(rocks)
  
  rocks.setCollider("circle",0,0,200);
  rocks.debug = false;
}

}

function food(){
//adding bananas
if(frameCount%100 === 0){
    fruit = createSprite(480,257,51,15);
  fruit.addAnimation("banana",bananaImage)
 fruit.scale = 0.1;
  fruit.velocityX = -4;
  fruit.lifetime = 200;
bananaGroup.add(fruit);
  
}
}