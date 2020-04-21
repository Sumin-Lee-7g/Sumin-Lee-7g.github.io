






function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(255);
  rotateY(frameCount * 0.01);

  for (let j = 0; j < 5; j++) {
    push();
    for (let i = 0; i < 80; i++) {
      translate(
        sin(frameCount * 0.001 + j) * 500,
        sin(frameCount * 0.001 + j) * 500,
        i * 0.5
      );
      rotateZ(frameCount * 0.002);
      push();
      sphere(1, 10, 10);
      pop();
    }
    pop();
  }
}
