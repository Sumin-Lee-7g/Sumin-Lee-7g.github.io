let totalPts = 100;
let steps = totalPts + 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  frameRate(25);
}

function draw() {
  background(0);
  let rand = 10;
  for (let i =1; i < steps; i++) {
    point((windowWidth/ steps) * i, windowHeight / 3 + random(-rand, rand));
    rand += random(-5, 5);
  }
}
