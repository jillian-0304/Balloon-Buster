//var backgImage, backg, redBImage, redB, greenBImage, greenB, blueBImage, blueB, pinkBImage, pinkB, bowImage, bow;

var blue, red, green, pink, balloon, arrowIm, arrow, score;
var arrowGroup, redGroup, blueGroup, pinkGroup, greenGroup;


function preload(){
 backgImage = loadImage("background0.png");

  red = loadImage("red_balloon0.png");
  green = loadImage("green_balloon0.png");
  blue = loadImage("blue_balloon0.png");
  pink = loadImage("pink_balloon0.png");
  
  bowImage = loadImage("bow0.png");
  arrowIm = loadImage("arrow0.png");
 }

function setup(){
  createCanvas(600, 600);
  //background(255);
  
  //playground
  backg = createSprite(0,0,600,600);
  backg.addImage(backgImage);
  backg.scale=2.9;
  backg.x = backg.width/2;
  backg.velocityX = -4;
  
  //bow
  bow = createSprite(550,300,30,30);
  bow.addImage(bowImage);
  
  score = 0;
  
  arrowGroup = new Group();
  redGroup = new Group();
  pinkGroup = new Group();
  greenGroup = new Group();
  blueGroup = new Group();
}

function draw() {
  
  if (backg.x < 0){
    backg.x = backg.width/2;
  }
  
  bow.y = mouseY;
  
  //spawnBalloons();
  
  if (keyWentDown("space")){
    spawnArrow();
  }
  
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 95 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  drawSprites();
  
  if (arrowGroup.isTouching(redGroup)){
    redGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 2;
  }
  
  if (arrowGroup.isTouching(greenGroup)){
    greenGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
  }
  
  if (arrowGroup.isTouching(blueGroup)){
    blueGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 0.5;
  }
  
  if (arrowGroup.isTouching(pinkGroup)){
    pinkGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
  }
  
  
  fill("white");
  textSize(20);
  text("Score: "+ score,475,50);
}

function redBalloon() {
  var redB = createSprite(0,Math.round(random(50, 350)), 10, 10);
  redB.addImage(red);
  redB.velocityX = 3;
  redB.lifetime = 210;
  redB.scale = 0.07;
  redGroup.add(redB);
  return redB;
}

function blueBalloon() {
  var blueB = createSprite(0,Math.round(random(50, 350)), 10, 10);
  blueB.addImage(blue);
  blueB.velocityX = 3;
  blueB.lifetime = 210;
  blueB.scale = 0.18;
  blueGroup.add(blueB);
  return blueB;
}

function greenBalloon() {
  var greenB = createSprite(0,Math.round(random(50, 350)), 10, 10);
  greenB.addImage(green);
  greenB.velocityX = 3;
  greenB.lifetime = 210;
  greenB.scale = 0.12;
  greenGroup.add(greenB);
  return greenB;   
}

function pinkBalloon() {
  var pinkB = createSprite(0,Math.round(random(50, 350)), 10, 10);
  pinkB.addImage(pink);
  pinkB.velocityX = 3;
  pinkB.lifetime = 210;
  pinkB.scale = 1.5;
  pinkGroup.add(pinkB);
  return pinkB;
}

function spawnArrow(){
  arrow = createSprite(550,300,30,30);
  arrow.addImage(arrowIm);
  arrow.velocityX = -6;
  arrow.scale = 0.4;
  arrow.y = bow.y;
  arrow.lifetime = 95;
  arrowGroup.add(arrow);
}
