const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var ball;

function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup() {
    var canvas = createCanvas(1400,700);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2,650,2000,50);
    stand1 = new Ground(500,350,300,30);
    stand2 = new Ground(1000,300,300,30);

    ball = Bodies.circle(100,350,30);
    World.add(world, ball);

    chain = new SlingShot(ball, {x:100, y:350});

    block1 = new Box(375,310,50,70); 
    block2 = new Box(425,310,50,70); 
    block3 = new Box(470,310,50,70); 
    block4 = new Box(525,310,50,70); 
    block5 = new Box(575,310,50,70); 
    block6 = new Box(620,310,50,70);
    block7 = new Box(422,230,50,70); 
    block8 = new Box(472,230,50,70); 
    block9 = new Box(524,230,50,70); 
    block10= new Box(574,230,50,70); 
    block11= new Box(524,170,50,70);
    block12= new Box(472,170,50,70);
    
    block13= new Box(875,270,50,70); 
    block14= new Box(925,270,50,70); 
    block15= new Box(975,270,50,70); 
    block16= new Box(1025,270,50,70); 
    block17= new Box(1075,270,50,70); 
    block18= new Box(1125,270,50,70);
    block19= new Box(925,230,50,70); 
    block20= new Box(975,230,50,70); 
    block21= new Box(1025,230,50,70); 
    block22= new Box(1075,230,50,70); 
    block23= new Box(975,170,50,70);
    block24= new Box(1025,170,50,70); 
      

}

function draw() {
    background(0);
    Engine.update(engine);

    imageMode(CENTER);
    image(polygonImg, 100,350, 70, 70);

    ground.display();
    stand1.display();
    stand2.display();

    chain.display();

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



}


function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}