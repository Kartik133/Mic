var c,v,x;

function preload() {
   x = loadSound("c.mp3"); 
}

function setup() {
  createCanvas(400,400);
  
  c = new p5.AudioIn();
  c.start();
}

function draw() {
  background(0);
  x.play();
  v = c.getLevel();
  fill(255);
  noStroke();
  ellipse(200,200,v*200,v*200);
}
