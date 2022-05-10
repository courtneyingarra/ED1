//function windowResized() {
//resizeCanvas(windowWidth, windowHeight);
//}

let gif;

function preload(){
  gif = loadImage ('gif/FinalGIF.gif');
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  background (199,233,255);
}

function draw() {

var num = 6;
var sideLen = windowWidth/num;

  for (var y = 0; y < windowHeight; y = y + sideLen) {
  for (var x = 0; x < windowWidth; x = x + sideLen) {

image (gif,x,y );
  }
  }
}
