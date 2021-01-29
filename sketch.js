var starimg,fairyimg,bgimg;
var fairy,fairyvoice;
var star,starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
  starimg = loadImage("images/star.png");
  fairyimg = loadAnimation("images/fairy1.png","images/fairy2.png");
  bgimg = loadImage("images/starNight.png");
  fairyVoice = loadSound("sound/JoyMusic.mp3");
  
}

function setup() {
  createCanvas(800, 750);
  
  fairyVoice.play();

  fairy = createSprite(130,520);

  fairy.addAnimation("fairyflying",fairyimg);
  fairy.scale=0.25;

  star = createSprite(650,30);
  star.addImage(starimg);
  star.scale=0.2;

  engine=Engine.create();

  world=engine.world;

  starBody_options = {
  restitution:0.5,isStatic:true

  }

  starBody = Bodies.circle(650,30,5,starBody_options);

  World.add(world,starBody);

  Engine.run(engine);
}


function draw() {
  background(bgimg);

  star.x=starBody.position.x;
  star.y=starBody.position.y;

  if(star.y>470 && starBody.position.y>470)
  {
    Matter.Body.setStatic(starBody,true);

  }

  drawSprites();
}

function keyPressed(){
  if (keyCode===RIGHT_ARROW){
    fairy.x=fairy.x+20;
  }

  if(keyCode===LEFT_ARROW){
    fairy.x= fairy.x-20; 
  }

  if(keyCode===Down_Arrow){
    Matter.Body.setStatic(starBody,false);
  }
}