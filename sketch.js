window.addEventListener("touchstart", touchStart);

function touchStart(e){

  for (var i = 0; i< e.touches.length; i++)
    alert(i);

}

function isMobileDevice(){
  return /Android|iPhone|iPad|iPod|windows Phone/i.test(navigator.userAgent);
}



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  background(0, 100, 200);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
