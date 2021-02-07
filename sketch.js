function isMobileDevice(){
  return /Android|iPhone|iPad|iPod|windows Phone/i.test(navigator.userAgent);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (isMobileDevice()){
  background(0, 100, 200);
  }
  else{

    alert("Jogo disponivel apenas para celular");

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
