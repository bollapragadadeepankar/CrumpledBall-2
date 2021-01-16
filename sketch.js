
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world, paper1, ground, dustbin1, dustbin2, dustbin3; 
function setup() {
    createCanvas(800, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper1 = new Paper(100,600, 65);
    paper1.scale=-5
    ground = new Ground(400,680,800,20);
    dustbin1 = new Dustbin(610,660, 150, 170);
    dustbin2 = new Dustbin(550,620,20,100);
    dustbin3 = new Dustbin(670,620,20,100);
    

    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  
  background(225);
  
  Engine.update(engine);
    
  paper1.display();

  ground.display();

  
  dustbin2.display();   
  dustbin3.display();
  dustbin1.addimage();
  
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 600,y: -600})
    }
  }
