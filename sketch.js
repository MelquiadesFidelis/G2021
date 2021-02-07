function setup() {
  createCanvas(windowWidth, windowHeight);
  let fs = fullscreen();
    fullscreen(!fs);
}

function draw() {
  background(0, 100, 200);
  let fs = fullscreen();
    fullscreen(!fs);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

alert(2)
