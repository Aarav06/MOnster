const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var background_load;
var hero;
var ground;
var fly;
var block1;
function preload() {
  background_load = loadImage('GamingBackground.png')
}

function setup() {
  createCanvas(1600, 600);
  engine = Engine.create();
  world = engine.world;
  hero = new Hero(200, 300, 200, 100);
  ground = new Ground(200, 400,700, 30);
  fly = new Fly(hero.body, {x:200, y:300});
  block1 = new Block(500, 100, 50, 50);
}

function draw() {
  background(background_load);
  hero.display();
  ground.display();
  fly.display();
}



function mouseDragged() {
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}