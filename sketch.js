
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var stone1
var world,boy;
var bird

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
    mango2=new mango(1050,200,30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone1 = new Stone(200,360);
	slingShot = new SlingShot(stone1.body, { x: 200, y: 360 });
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
//detectcollision(stone1,mango1);
//detectcollision(stone1,mango1);








  treeObj.display();
  mango1.display();
  mango2.display();
  stone1.display();
  groundObject.display();

  detectcollision(stone1,mango1);
  detectcollision(stone1,mango2);

}
function mouseDragged() {

    Matter.Body.setPosition(stone1.body, { x: mouseX, y: mouseY });

}

function mouseReleased() {


    slingShot.fly()

}

function KeyPressed(){

  if(keyCode === 32){

Matter.Body.setPosition(stone1.body);

  }

  
}
function detectcollision(lstone,lmango){
  mangobodyposition=lmango.body.position;
  stonebodyposition=lstone.body.position;
  var distance=dist(stonebodyposition.x,stonebodyposition.y,mangobodyposition.x,mangobodyposition.y);
  if(distance<=lmango.r+lstone.r){
  
  
  Matter.Body.setStatic(lmango.body,false);
  
  }
  
  
  
  }