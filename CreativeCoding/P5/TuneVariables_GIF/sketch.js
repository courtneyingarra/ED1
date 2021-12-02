let gif;

function preload(){
  gif = loadImage ('')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill("yellow");
  strokeWeight(1);
}

function draw() {

var num = 10;
var sideLen = windowWidth/num;

  for (var y = 0; y < windowHeight; y = y + sideLen)
{
  for (var x = 0; x < windowWidth; x = x + sideLen)
{
image (gif,x,y);
  }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
