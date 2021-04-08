
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperobj = new Paper(200,650,30);
	groundobj = new Ground(400,680,800,20);
	db1 = new Dustbin(600,650,200,150);

	Engine.run(engine);
  
}


function draw() {
  background("pink");
  paperobj.display();
  groundobj.display();
  db1.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:85,y:-85});
	}
}

