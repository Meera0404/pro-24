
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var h,p,s,r;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	h = new Hammer(100,100);
	p = new Plane(200,height,1200,20);
	s = new stone(500,650,90,50);
	r = new rubber();


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  h.display();
  p.display();
  s.display();
  r.display();

  
  drawSprites();
 
}



