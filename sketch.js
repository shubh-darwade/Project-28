
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var a=1,cMangoes=0;
var boyImg,treeImg;
function preload()
{
  boyImg=loadImage("images/boy.png");
  treeImg=loadImage("images/tree.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

  var options = {
    isStatic: true
}

	//Create the Bodies Here.
   
    ground = Bodies.rectangle(500,600,1000,10,options);

  

   stone1 = new stone(165,495,20);
   mango1 = new mango(750,250,25);
   mango2 = new mango(650,250,25);
   mango3 = new mango(750,150,25);
   mango4 = new mango(650,150,25);
   mango5 = new mango(800,200,25);
   mango6 = new mango(850,250,25);
   mango7 = new mango(750,70,25);
   mango8 = new mango(600,250,25);
     
  

   chain1 = new chain(stone1.body,{x: 165 , y: 495});
    World.add(world,ground);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  imageMode(CENTER);
  background(230,230,230);



  fill("green");
  rect(ground.position.x,ground.position.y,1000,10);
  fill("brown");
  rect(500,650,1000,100);
   image(boyImg,200,550,100,200);
   image(treeImg,700,325,400,600);

   DetectCollision(stone1,mango1);
   DetectCollision(stone1,mango2);
   DetectCollision(stone1,mango3);
   DetectCollision(stone1,mango4);
   DetectCollision(stone1,mango5);
   DetectCollision(stone1,mango6);
   DetectCollision(stone1,mango7);
   DetectCollision(stone1,mango8);
   
   
   
   stone1.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
chain1.display();
    drawSprites();
    reset();
    keyPressed();
    noStroke();
  textSize(20);
  text("Score : "+cMangoes,100,150)
}
function mouseDragged()
{
  if(a===1)
  {
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
  
  }
}
function mouseReleased()
{
  chain1.fly();
  a=a+1;
  
}

function DetectCollision(lstone,lmango) {
  var mangoBody=lmango.body.position;
  var stoneBody=lstone.body.position;
  var distance = dist(stoneBody.x,stoneBody.y,mangoBody.x,mangoBody.y);
  if(distance<=lmango.r+lstone.r)
  {
    Matter.Body.setStatic(lmango.body,false);
    cMangoes=cMangoes+15;
  }
 
}

function keyPressed()
{
  if(keyDown("space"))
  {
    Body.setPosition(stone1.body,{x:165,y:495})
    chain1.chain.bodyA=stone1.body;
    a=1;
  }
}

function reset() 
{
  if(a>1)
  {
  textSize(20);
  text("Press Space to get back the stone",100,100);
  }  
}

