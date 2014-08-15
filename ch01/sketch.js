// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-2: Bouncing Ball, with PVector!
var position;
var velocity;

function setup() {
  createCanvas(640,360);
  background(255);
  position = new PVector(100,100);
  velocity = new PVector(2.5,5);
};

function draw() {
background(255);
  position.add(velocity);

  if ((position.x > width-10) || (position.x < 10)){
    velocity.x = velocity.x * -1;
  }
  if ((position.y > height-10) || (position.y < 10)){
    velocity.y = velocity.y * -1;
  }
  stroke(0);
  strokeWeight(2);
  fill(175);
  ellipse(position.x,position.y,48,48);
};

