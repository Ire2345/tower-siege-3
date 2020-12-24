const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var score
var ground1,ground2;
function preload(){


}




function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground1= new Ground(400,245,200,10)
  ground2= new Ground(400,690,900,10)
box1=new Box(330,235,30,40);
box2=new Box(360,235,30,40);
box3=new Box(390,235,30,40);
box4=new Box(420,235,30,40);
box5=new Box(450,235,30,40);
box6=new Box(360,195,30,40);
box7=new Box(390,195,30,40);
box8=new Box(420,195,30,40);
box9=new Box(390,155,30,40);
polygon=new Polygon(100,200,30)
slingshot= new SlingShot(polygon.body,{x:100,y:200});
score=0
	Engine.run(engine);
  
}


function draw() {
 background(0)
  Engine.update(engine);
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 ground1.display();
 polygon.display();
 slingshot.display();
 ground2.display();
 box1.score();
 box2.score();
 box3.score();
 box4.score();
 box5.score();
 box6.score();
 box7.score();
 box8.score();
 box9.score();
 text("SCORE:"+score,730,40);
  drawSprites();
 
}
 
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}


function keyPressed(){
if(keyCode === 32){
slingshot.attach(polygon.body);

}




  













}

