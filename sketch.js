var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box_side1;
var box_side2;
var box_side3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")

	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="brown";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {friction:10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	box_side1 = new Boxside(400,650,150,20);
	box_side2 = new Boxside(325,610,20,100);
	box_side3 = new Boxside(475,610,20,100);

	
	 
	Engine.run(engine);

  
}


function draw() {
	
  rectMode(CENTER);
  background("white");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  box_side1.display();
  box_side2.display();
  box_side3.display();

  drawSprites();
 
}

function keyPressed() {
	
 if (keyCode === DOWN_ARROW) {
    
	Matter.Body.setStatic(packageBody,false);
    
  }
}