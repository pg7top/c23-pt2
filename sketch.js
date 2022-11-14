
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var plane;

var block1;
var block2; 

var rotator1; 
var rotator2;
var rotator3;

var angle1 = 60;
var angle2 = 60;
var angle3 = 60;

var particule1; 
var particule2; 
var particule3; 
var particule4;
var particule5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var plane_options={
		isStatic: true
	}
	var block1_options={
		isStatic: true
	}
	
	var block2_options={
		isStatic: true
	}
	
	var rotator_options={
		isStatic: true
	}
	
	var particule_options={
		restitution:0.4,
		friction:0.02
	}
	
	
	
	//Crie os Corpos aqui.
	
	
	
	plane = Bodies.rectangle(400,650,5000,10,plane_options);
	World.add(world,plane);
	
	block1 = Bodies.rectangle(100,350,200,10,block1_options);
	World.add(world,block1);
	
	block2 = Bodies.rectangle(700,350,200,10,block2_options);
	World.add(world,block2);
	
	rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator1);
	
	rotator2 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator2);
	
	rotator3 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator3);
	
	particule1 = Bodies.circle(220,20,10,particule_options);
	World.add(world,particule1);

	particule2 = Bodies.circle(220,20,10,particule_options);
	World.add(world,particule2);

	particule3 = Bodies.circle(220,20,10,particule_options);
	World.add(world,particule3);
	
	particule4 = Bodies.circle(220,20,10,particule_options);
	World.add(world,particule4);
	
	particule5 = Bodies.circle(220,20,10,particule_options);
	World.add(world,particule5);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background(0);
  
  fill("red");
 push()
  
 rect (plane.position.x,plane.position.y,800,10)
 
 
  pop() 
Matter.Body.rotate(rotator1,angle1)

push();
translate(rotator1.position.x,rotator1.position.y)
rotate(angle1)
rect(0,0,150,20)


pop();
angle1 +=0.2;

Matter.Body.rotate(rotator2,angle2)

push();
translate(rotator2.position.x,rotator2.position.y)
rotate(angle2)
rect(0,0,150,20)


pop();
angle2 +=0.2;

Matter.Body.rotate(rotator2,angle2)

push();
translate(rotator2.position.x,rotator2.position.y)
rotate(angle2)
rect(0,0,150,20)


pop();
angle2 +=0.2;

fill("red");
 push()
  
 rect (block1.position.x,block1.position.y,300,10)
 
 
  pop() 

  fill("red");
 push()
  
 rect (block2.position.x,block2.position.y,300,10)
 
 
  pop() 



ellipse(particule1.position.x,particule1.position.y,20);
ellipse(particule2.position.x,particule2.position.y,20); 
ellipse(particule3.position.x,particule3.position.y,20);  
ellipse(particule4.position.x,particule4.position.y,20);
ellipse(particule5.position.x,particule5.position.y,20);


 
}
 
  







