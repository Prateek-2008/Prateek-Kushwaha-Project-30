const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground1,ground2,ground3;

var block1,block2,block3,block4,block5,block6,block7;

var block8,block9,block10,block11,block12;

var block13,block14,block15;

var block16;

var block17,block18,block19,block20,block21;

var block22,block23,block24;

var block25;

var polygon;

var slingShot;

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	ground1=new Ground(650,600,1300,30);
	ground2=new Ground(490,400,220,20);
	ground3=new Ground(850,300,160,20);

	block1=new Block(400,370,30,40);
	block2=new Block(430,370,30,40);
	block3=new Block(460,370,30,40);
	block4=new Block(490,370,30,40);
	block5=new Block(520,370,30,40);
	block6=new Block(550,370,30,40);
	block7=new Block(580,370,30,40);

	block8=new Block(430,330,30,40);
	block9=new Block(460,330,30,40);
	block10=new Block(490,330,30,40);
	block11=new Block(520,330,30,40);
	block12=new Block(550,330,30,40);

	block13=new Block(460,290,30,40);
	block14=new Block(490,290,30,40);
	block15=new Block(520,290,30,40);

	block16=new Block(490,250,30,40);
	
	block17=new Block(790,270,30,40);
	block18=new Block(820,270,30,40);
	block19=new Block(850,270,30,40);
	block20=new Block(880,270,30,40);
	block21=new Block(910,270,30,40);

	block22=new Block(820,230,30,40);
	block23=new Block(850,230,30,40);
	block24=new Block(880,230,30,40);

	block25=new Block(850,190,30,40);

	polygon=new Polygon(50,200,40);

	slingShot = new SlingShot(polygon.body,{x:250, y:250});
    
	Engine.run(engine);

}

function draw() {

  background(230);
  ground1.display();
  ground2.display();
  ground3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  
  block22.display();
  block23.display();
  block24.display();

  block25.display();

  polygon.display();

  slingShot.display();
  
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode===32){
      slingShot.attach(polygon.body);
    }
}
