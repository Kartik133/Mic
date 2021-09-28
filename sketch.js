var c,v,x;

function setup() {
  createCanvas(400,400);
  c = p5.AudioIn();
  c.start();
}

function draw() {
  v = c.getLevel();
  ellipse(200,200,200,v*20);
}