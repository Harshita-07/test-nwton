const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
  rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

  roofobj = new roof(400, 100, 500, 20);
  BobObj1 = new Bob(200, 500,100)
  BobObj2 = new Bob(300, 500,100)
  BobObj3 = new Bob(400, 500,100)
  BobObj4 = new Bob(500, 500,100)
  BobObj5 = new Bob(600, 500,100)

  rope1 = new Rope(BobObj1.body, roofobj.body, 500, 0)
  rope2 = new Rope(BobObj2.body, roofobj.body, 400, 0)
  rope3 = new Rope(BobObj3.body, roofobj.body, 300, 0)
  rope4 = new Rope(BobObj4.body, roofobj.body, 200, 0)
  rope5 = new Rope(BobObj5.body, roofobj.body, 100, 0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('grey');
  Engine.update(engine);

  roofobj.display();
  BobObj1.display();
  BobObj2.display();
  BobObj3.display();
  BobObj4.display();
  BobObj5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


 
}



